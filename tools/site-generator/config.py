# -*- coding: utf-8 -*-
# =====================================================================
#  주차119 사이트 설정 파일 — 이 파일만 고치고 build.py 를 다시 실행하세요.
#  빈 값("")으로 두면 해당 항목은 홈페이지에 표시되지 않습니다.
# =====================================================================

SITE_URL = "https://parking119.com"      # 끝에 / 없이
BRAND = "주차119"
BRAND_EN = "PARKING119"
PHONE = "010-9413-4686"

# ---- 푸터·사업자 정보 (반드시 채워주세요: 신뢰도와 검색 평가에 영향) ----
CEO = ""                 # 대표자명  예) "홍길동"
BIZ_NO = ""              # 사업자등록번호  예) "123-45-67890"
ADDRESS = ""             # 사업장 주소  예) "충청남도 천안시 ○○구 ○○로 00"
EMAIL = ""               # 이메일
HOURS = ""               # 상담 시간  예) "평일 08:00~19:00"
KAKAO_URL = ""           # 카카오톡 채널/오픈채팅 주소 (있으면)
BLOG_URL = ""            # 네이버 블로그 주소 (있으면)
PLACE_URL = ""           # 네이버 플레이스 주소 (있으면)

# ---- 검색엔진 소유확인 (기존 사이트 <head> 에 있던 값을 그대로 복사!) ----
# 서치어드바이저 > 사이트 관리 > 소유확인 에서 확인 가능. 비워두면 소유확인이 풀릴 수 있습니다.
NAVER_VERIFICATION = "c2f52a53f7338ae973abfbef582f8688b9ebaea0"      # <meta name="naver-site-verification" content="여기 값">
GOOGLE_VERIFICATION = ""     # <meta name="google-site-verification" content="여기 값">

# ---- 로고/파비콘 ----
# 기존 로고 파일을 assets 폴더에 넣고 파일명을 적으세요. 비워두면 기본 로고를 씁니다.
LOGO_FILE = "logo.png"   # public/images/logo.png
FAVICON_FILE = ""        # 예) "favicon.ico"

# ---- 시공 사례 사진 ----
# 사진을 assets/works/ 폴더에 넣고 아래에 한 줄씩 추가하세요. (검색 순위에 가장 큰 도움이 됩니다)
# 파일명은 영어 소문자-하이픈으로:  gangnam-officetel-parking-line-01.jpg
# service: parking-line / car-stopper / traffic-post / bollard
# region / district: 사이트맵과 같은 영문 코드 (예: "seoul", "gangnam") — 해당 지역 페이지에 자동 노출
WORKS = [
    {"file": "parking-line-before-after.webp", "title": "주차라인 도색·장애인 전용구역 재도색",
     "alt": "주차라인 도색 시공 전후 사진 - 흐려진 주차선과 장애인 전용구역 재도색",
     "service": "parking-line", "desc": "흐려진 주차선 재도색과 장애인 전용구역 신규 도색"},
    {"file": "car-stopper-before-after.webp", "title": "카스토퍼 신규 설치",
     "alt": "카스토퍼 설치 시공 전후 사진 - 주차면 반사형 카스토퍼 설치",
     "service": "car-stopper", "desc": "반사띠가 있는 카스토퍼를 주차면에 맞춰 설치"},
    {"file": "traffic-post-before-after.webp", "title": "차선규제봉 설치",
     "alt": "차선규제봉 설치 시공 전후 사진 - 주차장 통로 탄력봉 설치",
     "service": "traffic-post", "desc": "통로 무단 주차를 막는 탄력봉 설치"},
    {"file": "bollard-before-after.webp", "title": "U자형 볼라드 설치",
     "alt": "볼라드 설치 시공 전후 사진 - 보도 차량 진입 방지 U자형 볼라드",
     "service": "bollard", "desc": "차량 무단 진입을 막는 U자형 볼라드 설치"},
    # {"file": "gangnam-officetel-parking-line-01.jpg",
    #  "title": "강남구 오피스텔 지하주차장 주차라인 재도색",
    #  "alt": "서울 강남구 오피스텔 지하주차장 주차라인 재도색 완료 사진",
    #  "service": "parking-line", "region": "seoul", "district": "gangnam",
    #  "desc": "주차면 48면, 흐려진 기존 라인 위 재도색, 야간 작업"},
]
