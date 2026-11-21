# 주차119 (parking119.com)

Next.js 사이트입니다. 페이지 내용은 `data/site.json` 에서 읽고, 이 파일은 생성기가 만듭니다.

## 내용 수정하는 법
1. `tools/site-generator/config.py` — 사업자 정보, 상담 시간, 시공 사례 사진
2. `tools/site-generator/content.py`, `local.py` — 지역·서비스 문구
3. `tools/site-generator/style.css` — 디자인 (실행하면 `app/globals.css` 로 복사됨)
4. `cd tools/site-generator && python3 build.py` 실행 → `data/site.json` 갱신 → 커밋하면 배포

시공 사진은 `public/images/works/` 에 넣고 `config.py` 의 `WORKS` 에 추가하세요.
