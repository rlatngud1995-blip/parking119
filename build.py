# -*- coding: utf-8 -*-
"""주차119 정적 사이트 생성기.   실행:  python3 build.py   →  dist/ 폴더가 그대로 배포본입니다."""
import hashlib, html, json, os, shutil, datetime
import config as C
from content import (REGIONS, REGION_ORDER, TYPES, TYPE_SERVICE, SERVICES, SERVICE_ORDER,
                     PROCESS, PRICE_FACTORS, HOME_FAQ)

ROOT = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(ROOT, "dist")
TODAY = datetime.date.today().isoformat()
TEL = C.PHONE.replace("-", "")
E = html.escape
PAGES = []  # (path, priority)


# ------------------------------------------------------------------ helpers
def josa(word, pair):
    """pair='은는' / '이가' / '을를' / '과와' / '으로로'"""
    ch = word[-1]
    code = ord(ch) - 0xAC00
    has = 0 <= code < 11172 and code % 28 != 0
    if pair == "으로로":
        return word + ("로" if (not has or code % 28 == 8) else "으로")
    return word + (pair[0] if has else pair[1])


def pick(key, seq):
    h = int(hashlib.md5(key.encode()).hexdigest(), 16)
    return seq[h % len(seq)]


def rotate(key, seq):
    h = int(hashlib.md5(key.encode()).hexdigest(), 16) % len(seq)
    return seq[h:] + seq[:h]


def url(path):
    return C.SITE_URL + path


def p_home(): return "/"
def p_service(s): return f"/service/{s}/"
def p_region(r): return f"/area/{r}/"
def p_district(r, d): return f"/area/{r}/{d}/"
def p_ds(r, d, s): return f"/area/{r}/{d}/{s}/"


ICONS = {
    "line": '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="8" width="4" height="32" rx="1"/><rect x="22" y="8" width="4" height="32" rx="1"/><rect x="38" y="8" width="4" height="32" rx="1"/><rect x="6" y="38" width="36" height="3" rx="1"/></svg>',
    "stopper": '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 34h36v4H6z"/><path d="M10 34c0-5 3-8 7-8h14c4 0 7 3 7 8z"/><rect x="14" y="28" width="4" height="3" fill="#111"/><rect x="30" y="28" width="4" height="3" fill="#111"/></svg>',
    "post": '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="20" y="6" width="8" height="32" rx="4"/><rect x="20" y="12" width="8" height="3" fill="#fff"/><rect x="20" y="20" width="8" height="3" fill="#fff"/><rect x="14" y="38" width="20" height="4" rx="1"/></svg>',
    "bollard": '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="10" width="8" height="30" rx="4"/><rect x="30" y="10" width="8" height="30" rx="4"/><rect x="6" y="40" width="36" height="3" rx="1"/></svg>',
    "phone": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',
}


def logo_html():
    if C.LOGO_FILE:
        return f'<img src="/assets/{E(C.LOGO_FILE)}" alt="{E(C.BRAND)} 로고" width="36" height="36">'
    return '<span class="logo-mark" aria-hidden="true">P</span>'


def call_btn(label="전화 상담", cls="btn btn-call"):
    return f'<a class="{cls}" href="tel:{TEL}">{ICONS["phone"]}<span>{E(label)} {E(C.PHONE)}</span></a>'


def breadcrumb(items):
    """items: [(name, path)]"""
    lis = []
    for i, (name, path) in enumerate(items):
        if i == len(items) - 1:
            lis.append(f'<li aria-current="page">{E(name)}</li>')
        else:
            lis.append(f'<li><a href="{path}">{E(name)}</a></li>')
    vis = f'<nav class="crumb" aria-label="현재 위치"><ol>{"".join(lis)}</ol></nav>'
    ld = {"@context": "https://schema.org", "@type": "BreadcrumbList",
          "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": url(p)}
                              for i, (n, p) in enumerate(items)]}
    return vis, ld


def faq_html(faqs, title="자주 묻는 질문"):
    qa = "".join(f'<details><summary>{E(q)}</summary><p>{E(a)}</p></details>' for q, a in faqs)
    ld = {"@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [{"@type": "Question", "name": q,
                          "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]}
    return f'<section class="sec"><div class="wrap"><h2>{E(title)}</h2><div class="faq">{qa}</div></div></section>', ld


def process_html(title="시공 진행 절차"):
    steps = "".join(f'<li><b>{E(t)}</b><span>{E(d)}</span></li>' for t, d in PROCESS)
    return f'<section class="sec alt"><div class="wrap"><h2>{E(title)}</h2><ol class="steps">{steps}</ol></div></section>'


def price_html(prefix=""):
    rows = "".join(f'<li><b>{E(t)}</b><span>{E(d)}</span></li>' for t, d in PRICE_FACTORS)
    return (f'<section class="sec"><div class="wrap"><h2>{E(prefix)}견적은 이렇게 정해집니다</h2>'
            f'<ul class="factors">{rows}</ul>'
            f'<p class="note">현장 사진(전체 모습, 바닥 상태, 기존 라인·시설물)을 보내주시면 대략적인 견적을 더 빠르게 안내해 드립니다.</p></div></section>')


def works_html(service=None, region=None, district=None, title="시공 사례"):
    items = []
    for w in C.WORKS:
        if service and w.get("service") != service:
            continue
        if region and w.get("region") != region:
            continue
        if district and w.get("district") != district:
            continue
        items.append(w)
    if not items:
        return ""
    cards = "".join(
        f'<figure class="work"><img src="/assets/works/{E(w["file"])}" alt="{E(w.get("alt") or w.get("title",""))}" loading="lazy" width="600" height="450">'
        f'<figcaption><b>{E(w.get("title",""))}</b>{("<span>"+E(w["desc"])+"</span>") if w.get("desc") else ""}</figcaption></figure>'
        for w in items[:8])
    return f'<section class="sec"><div class="wrap"><h2>{E(title)}</h2><div class="works">{cards}</div></div></section>'


def cta_html(text):
    return (f'<section class="cta"><div class="wrap"><h2>{E(text)}</h2>'
            f'<p>위치와 규모, 현장 사진만 알려주시면 작업 방법과 견적을 안내해 드립니다.</p>'
            f'{call_btn("시공 문의", "btn btn-call big")}</div></section>')


def business_ld():
    ld = {"@context": "https://schema.org", "@type": "HomeAndConstructionBusiness",
          "@id": url("/#business"), "name": C.BRAND, "alternateName": C.BRAND_EN,
          "url": url("/"), "telephone": C.PHONE,
          "image": url("/assets/og.png"),
          "description": "주차라인 도색, 카스토퍼·차선규제봉·볼라드 설치 등 주차장 시설물 시공",
          "areaServed": [REGIONS[r]["full"] for r in REGION_ORDER]}
    if C.ADDRESS:
        ld["address"] = {"@type": "PostalAddress", "streetAddress": C.ADDRESS, "addressCountry": "KR"}
    if C.EMAIL:
        ld["email"] = C.EMAIL
    same = [u for u in (C.BLOG_URL, C.PLACE_URL, C.KAKAO_URL) if u]
    if same:
        ld["sameAs"] = same
    return ld


def service_ld(name, area_name, path):
    return {"@context": "https://schema.org", "@type": "Service", "name": name,
            "serviceType": name, "url": url(path),
            "provider": {"@id": url("/#business")},
            "areaServed": {"@type": "Place", "name": area_name}}


# ------------------------------------------------------------------ layout
def layout(path, title, desc, body, lds, priority="0.5"):
    nav = "".join(f'<li><a href="{p_service(s)}">{E(SERVICES[s]["nav"])}</a></li>' for s in SERVICE_ORDER)
    regions_nav = "".join(f'<li><a href="{p_region(r)}">{E(REGIONS[r]["name"])}</a></li>' for r in REGION_ORDER)
    foot_info = []
    for label, val in (("상호", C.BRAND), ("대표", C.CEO), ("사업자등록번호", C.BIZ_NO),
                       ("주소", C.ADDRESS), ("이메일", C.EMAIL), ("상담시간", C.HOURS)):
        if val:
            foot_info.append(f'<span>{label} {E(val)}</span>')
    links = []
    for label, u in (("네이버 블로그", C.BLOG_URL), ("네이버 플레이스", C.PLACE_URL), ("카카오톡 상담", C.KAKAO_URL)):
        if u:
            links.append(f'<a href="{E(u)}" rel="noopener" target="_blank">{label}</a>')
    verify = ""
    if C.NAVER_VERIFICATION:
        verify += f'<meta name="naver-site-verification" content="{E(C.NAVER_VERIFICATION)}">\n'
    if C.GOOGLE_VERIFICATION:
        verify += f'<meta name="google-site-verification" content="{E(C.GOOGLE_VERIFICATION)}">\n'
    fav = (f'<link rel="icon" href="/assets/{E(C.FAVICON_FILE)}">' if C.FAVICON_FILE
           else '<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">')
    ld_tags = "".join(f'<script type="application/ld+json">{json.dumps(l, ensure_ascii=False)}</script>\n' for l in lds)
    canon = url(path)
    doc = f'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{E(title)}</title>
<meta name="description" content="{E(desc)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{canon}">
{verify}<meta property="og:type" content="website">
<meta property="og:site_name" content="{E(C.BRAND)}">
<meta property="og:locale" content="ko_KR">
<meta property="og:title" content="{E(title)}">
<meta property="og:description" content="{E(desc)}">
<meta property="og:url" content="{canon}">
<meta property="og:image" content="{url('/assets/og.png')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{E(title)}">
<meta name="twitter:description" content="{E(desc)}">
<meta name="twitter:image" content="{url('/assets/og.png')}">
<meta name="theme-color" content="#111111">
{fav}
<link rel="stylesheet" href="/assets/style.css">
{ld_tags}</head>
<body>
<header class="top">
  <div class="wrap bar">
    <a class="brand" href="/">{logo_html()}<span>{E(C.BRAND)}</span></a>
    <a class="top-call" href="tel:{TEL}">{ICONS["phone"]}<span>{E(C.PHONE)}</span></a>
  </div>
  <nav class="gnb" aria-label="주요 메뉴"><ul class="wrap"><li><a href="/">홈</a></li>{nav}</ul></nav>
</header>
<main>
{body}
</main>
<footer class="foot">
  <div class="wrap">
    <p class="foot-brand">{E(C.BRAND)} <small>{E(C.BRAND_EN)}</small></p>
    <p>주차라인 도색 · 카스토퍼 설치 · 차선규제봉 설치 · 볼라드 설치</p>
    <ul class="foot-regions">{regions_nav}</ul>
    <p class="foot-info">{" ".join(foot_info)}</p>
    <p class="foot-info"><span>전화 <a href="tel:{TEL}">{E(C.PHONE)}</a></span> {" ".join(links)}</p>
    <p class="foot-links"><a href="/privacy/">개인정보처리방침</a></p>
    <p class="copy">© {datetime.date.today().year} {E(C.BRAND)}. All rights reserved.</p>
  </div>
</footer>
<a class="float-call" href="tel:{TEL}" aria-label="{E(C.BRAND)} 전화 상담">{ICONS["phone"]}<span>전화 상담</span></a>
</body>
</html>
'''
    out = os.path.join(DIST, path.strip("/"), "index.html") if path != "/" else os.path.join(DIST, "index.html")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        f.write(doc)
    PAGES.append((path, priority, title))


def service_cards(link_fn, heading_tag="h3"):
    out = []
    for s in SERVICE_ORDER:
        sv = SERVICES[s]
        out.append(f'<a class="card" href="{link_fn(s)}"><span class="ico">{ICONS[sv["icon"]]}</span>'
                   f'<{heading_tag}>{E(sv["name"])}</{heading_tag}><p>{E(sv["short"])}</p><span class="more">자세히 보기 →</span></a>')
    return f'<div class="cards">{"".join(out)}</div>'


def region_chips(r, link_fn=None):
    link_fn = link_fn or (lambda d: p_district(r, d))
    return '<ul class="chips">' + "".join(
        f'<li><a href="{link_fn(code)}">{E(name)}</a></li>' for code, name, _ in REGIONS[r]["districts"]) + "</ul>"


# ------------------------------------------------------------------ pages
def build_home():
    vis_types = [("아파트·오피스텔", "지하·지상 주차장 주차선 재도색과 동선 정비"),
                 ("상가·오피스 빌딩", "영업시간을 피한 야간·주말 구역별 작업"),
                 ("공장·물류센터", "지게차·화물차 동선과 보행 통로 구분 표시"),
                 ("공공시설·관광지", "넓은 야외 주차장 구획과 진입 동선 안내")]
    sites = "".join(f'<li><b>{E(a)}</b><span>{E(b)}</span></li>' for a, b in vis_types)
    region_blocks = "".join(
        f'<div class="region"><h3><a href="{p_region(r)}">{E(REGIONS[r]["name"])} 시공 안내</a></h3>{region_chips(r)}</div>'
        for r in REGION_ORDER)
    faq, faq_ld = faq_html(HOME_FAQ)
    body = f'''
<section class="hero">
  <div class="wrap">
    <p class="eyebrow">서울 · 경기 · 인천 · 충남 · 충북</p>
    <h1>주차라인 도색부터<br>주차장 안전시설물 설치까지</h1>
    <p class="lead">주차라인 도색, 카스토퍼·차선규제봉·볼라드 설치를 한 업체에서 진행합니다. 아파트, 상가, 공장, 공공시설 주차장 모두 현장 상태를 확인하고 맞는 방법으로 시공합니다.</p>
    <div class="hero-btns">{call_btn()}<a class="btn btn-ghost" href="#services">시공 서비스 보기</a></div>
  </div>
</section>
<section class="sec" id="services"><div class="wrap"><h2>{E(C.BRAND)} 주요 시공 서비스</h2>{service_cards(p_service)}</div></section>
<section class="sec alt"><div class="wrap"><h2>이런 현장을 시공합니다</h2><ul class="sites">{sites}</ul></div></section>
{works_html(title="최근 시공 사례")}
{process_html()}
{price_html()}
<section class="sec alt" id="area"><div class="wrap"><h2>{E(C.BRAND)} 시공 가능 지역</h2><p class="sub">시·군·구를 누르면 지역별 시공 안내를 볼 수 있습니다.</p>{region_blocks}</div></section>
{faq}
{cta_html("주차장 시설물 시공 상담")}
'''
    title = f"{C.BRAND} | 주차라인 도색·카스토퍼·차선규제봉·볼라드 설치"
    desc = "주차라인 도색, 주차선 재도색, 카스토퍼·차선규제봉·볼라드 설치 전문 주차119. 서울·경기·인천·충남·충북 아파트·상가·공장 주차장 시공 상담 " + C.PHONE
    site_ld = {"@context": "https://schema.org", "@type": "WebSite", "name": C.BRAND, "alternateName": C.BRAND_EN, "url": url("/")}
    layout("/", title, desc, body, [site_ld, business_ld(), faq_ld], "1.0")


def build_service(s):
    sv = SERVICES[s]
    crumb, crumb_ld = breadcrumb([("홈", "/"), (sv["name"], p_service(s))])
    items = "".join(f'<li><b>{E(t)}</b><span>{E(d)}</span></li>' for t, d in sv["items"])
    checks = "".join(f'<li>{E(c)}</li>' for c in sv["checks"])
    short = {"apt": "아파트·오피스텔", "office": "상가·오피스 빌딩", "industrial": "공장·물류센터",
             "oldtown": "빌라·소규모 상가", "newtown": "신축 건물·공공시설", "rural": "관광지·야외 주차장"}
    type_rows = "".join(
        f'<li><b>{E(short[t])}</b><span>{E(TYPE_SERVICE[t][s])}</span></li>'
        for t in ["apt", "office", "industrial", "oldtown", "newtown", "rural"])
    regions = "".join(
        f'<div class="region"><h3><a href="{p_region(r)}">{E(REGIONS[r]["name"])} {E(sv["name"])}</a></h3>'
        f'{region_chips(r, lambda d, r=r: p_ds(r, d, s))}</div>' for r in REGION_ORDER)
    others = "".join(f'<li><a href="{p_service(o)}">{E(SERVICES[o]["name"])}</a></li>' for o in SERVICE_ORDER if o != s)
    faq, faq_ld = faq_html(sv["faq"])
    body = f'''
{crumb}
<section class="hero small"><div class="wrap">
  <p class="eyebrow">{E(sv["aka"])}</p>
  <h1>{E(sv["tail"])}</h1>
  <p class="lead">{E(sv["intros"][0].format(loc="서울·경기·인천·충남·충북"))}</p>
  <div class="hero-btns">{call_btn()}</div>
</div></section>
<section class="sec"><div class="wrap"><h2>{E(sv["name"])} 작업 범위</h2><ul class="items">{items}</ul></div></section>
<section class="sec alt"><div class="wrap"><h2>현장별 시공 포인트</h2><ul class="sites">{type_rows}</ul></div></section>
<section class="sec"><div class="wrap"><h2>시공 전 확인 사항</h2><ul class="checks">{checks}</ul></div></section>
{works_html(service=s, title=sv["name"] + " 시공 사례")}
{process_html()}
{price_html(sv["name"] + " ")}
{faq}
<section class="sec alt"><div class="wrap"><h2>지역별 {E(sv["name"])}</h2>{regions}</div></section>
<section class="sec"><div class="wrap"><h2>함께 많이 하는 작업</h2><ul class="chips">{others}</ul></div></section>
{cta_html(sv["name"] + " 상담")}
'''
    title = f"{sv['tail']} | {C.BRAND}"
    desc = f"{sv['name']} 전문 {C.BRAND}. {sv['short']}. 서울·경기·인천·충남·충북 시공 상담 {C.PHONE}"
    layout(p_service(s), title, desc, body,
           [crumb_ld, service_ld(sv["name"], "서울·경기·인천·충남·충북", p_service(s)), faq_ld], "0.9")


def build_region(r):
    rg = REGIONS[r]
    crumb, crumb_ld = breadcrumb([("홈", "/"), (rg["name"] + " 시공 안내", p_region(r))])
    # 유형별로 묶어서 보여주기
    groups = {}
    for code, name, t in rg["districts"]:
        groups.setdefault(t, []).append((code, name))
    group_html = "".join(
        f'<div class="region"><h3>{E(TYPES[t]["label"])}</h3><ul class="chips">'
        + "".join(f'<li><a href="{p_district(r, c)}">{E(n)}</a></li>' for c, n in lst) + "</ul></div>"
        for t, lst in groups.items())
    svc_table = "".join(
        f'<div class="region"><h3><a href="{p_service(s)}">{E(rg["name"])} {E(SERVICES[s]["name"])}</a></h3>'
        f'{region_chips(r, lambda d, s=s: p_ds(r, d, s))}</div>' for s in SERVICE_ORDER)
    faq_list = [(f"{rg['name']} 어느 지역까지 시공하나요?",
                 f"{rg['full']} 전 지역({', '.join(n for _, n, _ in rg['districts'])})을 시공합니다."),
                HOME_FAQ[0], HOME_FAQ[2]]
    faq, faq_ld = faq_html(faq_list)
    body = f'''
{crumb}
<section class="hero small"><div class="wrap">
  <p class="eyebrow">{E(rg["full"])} 전 지역</p>
  <h1>{E(rg["name"])} 주차라인 도색·주차장 시설물 시공</h1>
  <p class="lead">{E(rg["about"])}</p>
  <div class="hero-btns">{call_btn()}</div>
</div></section>
<section class="sec"><div class="wrap"><h2>{E(rg["name"])} 시공 서비스</h2>{service_cards(p_service)}</div></section>
{works_html(region=r, title=rg["name"] + " 시공 사례")}
<section class="sec alt"><div class="wrap"><h2>{E(rg["name"])} 시·군·구별 시공 안내</h2>{group_html}</div></section>
<section class="sec"><div class="wrap"><h2>{E(rg["name"])} 서비스별 바로가기</h2>{svc_table}</div></section>
{process_html()}
{faq}
{cta_html(rg["name"] + " 주차장 시공 상담")}
'''
    title = f"{rg['name']} 주차라인 도색·카스토퍼·볼라드 시공 | {C.BRAND}"
    desc = f"{rg['full']} 주차라인 도색, 주차선 재도색, 카스토퍼·차선규제봉·볼라드 설치. {len(rg['districts'])}개 시·군·구 시공 상담 {C.PHONE}"
    layout(p_region(r), title, desc, body,
           [crumb_ld, service_ld("주차장 시설물 시공", rg["full"], p_region(r)), faq_ld], "0.8")


def build_district(r, d, dname, t):
    rg = REGIONS[r]
    loc = f"{rg['name']} {dname}"
    ty = TYPES[t]
    crumb, crumb_ld = breadcrumb([("홈", "/"), (rg["name"], p_region(r)), (dname, p_district(r, d))])
    notes = "".join(f'<li><b><a href="{p_ds(r, d, s)}">{E(SERVICES[s]["name"])}</a></b><span>{E(TYPE_SERVICE[t][s])}</span></li>'
                    for s in SERVICE_ORDER)
    sites = "".join(f'<li>{E(x)}</li>' for x in ty["sites"])
    near = [(c, n) for c, n, _ in rg["districts"] if c != d]
    near = rotate(r + d, near)[:8]
    near_html = "".join(f'<li><a href="{p_district(r, c)}">{E(n)}</a></li>' for c, n in near)
    faq_list = [ty["faq"], HOME_FAQ[0], HOME_FAQ[2]]
    faq, faq_ld = faq_html(faq_list, f"{dname} 시공 자주 묻는 질문")
    body = f'''
{crumb}
<section class="hero small"><div class="wrap">
  <p class="eyebrow">{E(rg["full"])} {E(dname)}</p>
  <h1>{E(loc)} 주차라인 도색·주차장 시설물 시공</h1>
  <p class="lead">{E(ty["about"].format(d=dname))}</p>
  <div class="hero-btns">{call_btn()}</div>
</div></section>
<section class="sec"><div class="wrap"><h2>{E(dname)} 시공 서비스</h2>{service_cards(lambda s: p_ds(r, d, s))}</div></section>
<section class="sec alt"><div class="wrap"><h2>{E(dname)} 현장별 시공 포인트</h2><ul class="sites">{notes}</ul></div></section>
<section class="sec"><div class="wrap"><h2>{E(dname)} 주요 시공 현장</h2><ul class="checks">{sites}</ul></div></section>
{works_html(region=r, district=d, title=dname + " 시공 사례")}
{process_html()}
{faq}
<section class="sec alt"><div class="wrap"><h2>{E(rg["name"])} 다른 지역</h2><ul class="chips">{near_html}<li><a href="{p_region(r)}">{E(rg["name"])} 전체 보기</a></li></ul></div></section>
{cta_html(loc + " 시공 상담")}
'''
    title = f"{loc} 주차라인 도색·카스토퍼·볼라드 시공 | {C.BRAND}"
    desc = f"{loc} 주차라인 도색, 주차선 재도색, 카스토퍼·차선규제봉·볼라드 설치. {ty['sites'][0]}·{ty['sites'][1]} 등 현장 상담 {C.PHONE}"
    layout(p_district(r, d), title, desc, body,
           [crumb_ld, service_ld("주차장 시설물 시공", f"{rg['full']} {dname}", p_district(r, d)), faq_ld], "0.7")


def build_ds(r, d, dname, t, s):
    rg = REGIONS[r]
    sv = SERVICES[s]
    ty = TYPES[t]
    loc = f"{rg['name']} {dname}"
    key = f"{r}/{d}/{s}"
    crumb, crumb_ld = breadcrumb([("홈", "/"), (rg["name"], p_region(r)), (dname, p_district(r, d)),
                                  (sv["name"], p_ds(r, d, s))])
    intro = pick(key, sv["intros"]).format(loc=loc)
    items = "".join(f'<li><b>{E(a)}</b><span>{E(b)}</span></li>' for a, b in rotate(key + "i", sv["items"]))
    checks = "".join(f'<li>{E(c)}</li>' for c in sv["checks"])
    sites = ", ".join(ty["sites"])
    faq_list = [ty["faq"]] + rotate(key + "f", sv["faq"])
    faq, faq_ld = faq_html(faq_list, f"{dname} {sv['name']} 자주 묻는 질문")
    others = "".join(f'<li><a href="{p_ds(r, d, o)}">{E(dname)} {E(SERVICES[o]["name"])}</a></li>'
                     for o in SERVICE_ORDER if o != s)
    near = rotate(key + "n", [(c, n) for c, n, _ in rg["districts"] if c != d])[:8]
    near_html = "".join(f'<li><a href="{p_ds(r, c, s)}">{E(n)} {E(sv["name"])}</a></li>' for c, n in near)
    body = f'''
{crumb}
<section class="hero small"><div class="wrap">
  <p class="eyebrow">{E(rg["full"])} {E(dname)} · {E(sv["aka"])}</p>
  <h1>{E(loc)} {E(sv["tail"])}</h1>
  <p class="lead">{E(intro)}</p>
  <div class="hero-btns">{call_btn()}</div>
</div></section>
<section class="sec"><div class="wrap">
  <h2>{E(dname)} {E(sv["name"])} 현장 포인트</h2>
  <p class="para">{E(ty["about"].format(d=dname))}</p>
  <p class="para">{E(TYPE_SERVICE[t][s])}</p>
  <p class="para">{E(dname)} {E(sites)} 주차장의 {E(josa(sv["name"], "을를"))} 현장 확인 후 상담해 드립니다.</p>
</div></section>
<section class="sec alt"><div class="wrap"><h2>{E(sv["name"])} 작업 범위</h2><ul class="items">{items}</ul></div></section>
<section class="sec"><div class="wrap"><h2>시공 전 확인 사항</h2><ul class="checks">{checks}</ul></div></section>
{works_html(service=s, region=r, district=d, title=f"{dname} {sv['name']} 시공 사례")}
{process_html()}
{faq}
<section class="sec alt"><div class="wrap"><h2>{E(dname)} 함께 많이 하는 작업</h2><ul class="chips">{others}</ul>
<h2 class="mt">{E(rg["name"])} 다른 지역 {E(sv["name"])}</h2><ul class="chips">{near_html}</ul></div></section>
{cta_html(f"{loc} {sv['name']} 상담")}
'''
    title = f"{loc} {sv['tail']} | {C.BRAND}"
    desc = f"{loc} {sv['name']}: {sv['short']}. {ty['sites'][0]}·{ty['sites'][1]} 현장 상담과 견적 안내 {C.PHONE}"
    layout(p_ds(r, d, s), title, desc, body,
           [crumb_ld, service_ld(sv["name"], f"{rg['full']} {dname}", p_ds(r, d, s)), faq_ld], "0.6")


def build_privacy():
    crumb, crumb_ld = breadcrumb([("홈", "/"), ("개인정보처리방침", "/privacy/")])
    who = C.BRAND + (f"(대표 {C.CEO})" if C.CEO else "")
    contact = C.PHONE + (f", {C.EMAIL}" if C.EMAIL else "")
    body = f'''
{crumb}
<section class="sec"><div class="wrap prose">
<h1>개인정보처리방침</h1>
<p>{E(who)}(이하 "회사")는 이용자의 개인정보를 중요하게 생각하며 「개인정보 보호법」을 지킵니다.</p>
<h2>1. 수집하는 개인정보</h2>
<p>이 홈페이지는 회원가입이나 온라인 문의 양식을 운영하지 않으며, 홈페이지를 통해 개인정보를 직접 수집하지 않습니다. 전화·문자·메신저로 상담하실 때 이름, 연락처, 현장 주소, 현장 사진을 받을 수 있습니다.</p>
<h2>2. 이용 목적</h2>
<p>받은 정보는 상담, 견적 안내, 현장 방문과 시공 진행에만 사용합니다.</p>
<h2>3. 보관 기간</h2>
<p>상담·시공이 끝나면 지체 없이 파기합니다. 다만 관련 법령에 따라 보관해야 하는 거래 기록은 정해진 기간 동안 보관합니다.</p>
<h2>4. 제3자 제공</h2>
<p>이용자의 동의나 법령에 근거가 있는 경우를 제외하고 개인정보를 다른 곳에 제공하지 않습니다.</p>
<h2>5. 문의</h2>
<p>개인정보 관련 문의: {E(contact)}</p>
<p>시행일: {TODAY}</p>
</div></section>'''
    layout("/privacy/", f"개인정보처리방침 | {C.BRAND}", f"{C.BRAND} 개인정보처리방침", body, [crumb_ld], "0.2")


def build_404():
    body = f'''<section class="hero small"><div class="wrap"><h1>페이지를 찾을 수 없습니다</h1>
<p class="lead">주소가 바뀌었거나 없는 페이지입니다. 아래에서 원하는 서비스를 찾아보세요.</p>
<div class="hero-btns"><a class="btn btn-ghost" href="/">홈으로</a>{call_btn()}</div></div></section>
<section class="sec"><div class="wrap">{service_cards(p_service)}</div></section>'''
    layout("/404/", f"페이지를 찾을 수 없습니다 | {C.BRAND}", "요청하신 페이지를 찾을 수 없습니다.", body, [], "0")
    # 404.html 은 루트에 두고 색인 제외
    src = os.path.join(DIST, "404", "index.html")
    with open(src, encoding="utf-8") as f:
        doc = f.read().replace('content="index, follow"', 'content="noindex, follow"')
    with open(os.path.join(DIST, "404.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    shutil.rmtree(os.path.join(DIST, "404"))
    PAGES.pop()


# ------------------------------------------------------------------ assets
def write_assets():
    a = os.path.join(DIST, "assets")
    os.makedirs(os.path.join(a, "works"), exist_ok=True)
    shutil.copy(os.path.join(ROOT, "style.css"), os.path.join(a, "style.css"))
    src_assets = os.path.join(ROOT, "assets")
    if os.path.isdir(src_assets):
        shutil.copytree(src_assets, a, dirs_exist_ok=True)
    with open(os.path.join(a, "favicon.svg"), "w", encoding="utf-8") as f:
        f.write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#FFC400"/>'
                '<text x="32" y="45" font-family="Arial,sans-serif" font-size="38" font-weight="900" text-anchor="middle" fill="#111">P</text></svg>')
    if not os.path.exists(os.path.join(a, "og.png")):
        make_og(os.path.join(a, "og.png"))


def make_og(path):
    try:
        from PIL import Image, ImageDraw, ImageFont
    except ImportError:
        print("! Pillow 가 없어 og.png 를 만들지 못했습니다. assets/og.png (1200x630) 를 직접 넣어주세요.")
        return
    fp = "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"
    if not os.path.exists(fp):
        fp = None
    def font(sz):
        return ImageFont.truetype(fp, sz, index=1) if fp else ImageFont.load_default()
    im = Image.new("RGB", (1200, 630), "#111111")
    dr = ImageDraw.Draw(im)
    for i in range(-2, 14):  # 노란 사선 줄무늬
        x = i * 110
        dr.polygon([(x, 630), (x + 50, 630), (x + 130, 540), (x + 80, 540)], fill="#FFC400")
    dr.rectangle([0, 0, 1200, 8], fill="#FFC400")
    dr.text((80, 90), C.BRAND, font=font(120), fill="#FFC400")
    dr.text((80, 250), "주차라인 도색 · 카스토퍼 · 차선규제봉 · 볼라드", font=font(46), fill="#FFFFFF")
    dr.text((80, 320), "서울 · 경기 · 인천 · 충남 · 충북", font=font(40), fill="#BBBBBB")
    dr.text((80, 410), "시공 상담 " + C.PHONE, font=font(52), fill="#FFFFFF")
    im.save(path, optimize=True)


def write_seo_files():
    xml = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for path, pr, _t in PAGES:
        xml.append(f"<url><loc>{url(path)}</loc><lastmod>{TODAY}</lastmod><priority>{pr}</priority></url>")
    xml.append("</urlset>")
    with open(os.path.join(DIST, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write("\n".join(xml) + "\n")
    with open(os.path.join(DIST, "robots.txt"), "w", encoding="utf-8") as f:
        f.write(f"User-agent: *\nAllow: /\n\nSitemap: {url('/sitemap.xml')}\n")
    # RSS (네이버 서치어드바이저 RSS 제출용)
    items = []
    now = datetime.datetime.now(datetime.timezone.utc)
    for path, pr, t in PAGES[:110]:
        items.append(f"<item><title>{E(t)}</title><link>{url(path)}</link><pubDate>{now:%a, %d %b %Y %H:%M:%S} +0000</pubDate></item>")
    with open(os.path.join(DIST, "rss.xml"), "w", encoding="utf-8") as f:
        f.write(f'<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>{E(C.BRAND)}</title>'
                f'<link>{url("/")}</link><description>주차라인 도색·주차장 시설물 시공</description>{"".join(items)}</channel></rss>\n')
    # GitHub Pages 커스텀 도메인 유지용
    with open(os.path.join(DIST, "CNAME"), "w") as f:
        f.write(C.SITE_URL.split("://", 1)[1] + "\n")
    open(os.path.join(DIST, ".nojekyll"), "w").close()


# ------------------------------------------------------------------ main
def main():
    if os.path.isdir(DIST):
        shutil.rmtree(DIST)
    os.makedirs(DIST)
    write_assets()
    build_home()
    for s in SERVICE_ORDER:
        build_service(s)
    for r in REGION_ORDER:
        build_region(r)
    for r in REGION_ORDER:
        for d, dname, t in REGIONS[r]["districts"]:
            build_district(r, d, dname, t)
            for s in SERVICE_ORDER:
                build_ds(r, d, dname, t, s)
    build_privacy()
    build_404()
    write_seo_files()
    print(f"완료: {len(PAGES)}개 페이지 → {DIST}")
    if not C.NAVER_VERIFICATION:
        print("! 주의: config.py 의 NAVER_VERIFICATION 이 비어 있습니다. 기존 소유확인 값을 넣어주세요.")


if __name__ == "__main__":
    main()
