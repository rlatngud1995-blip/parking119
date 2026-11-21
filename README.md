# 주차119 홈페이지 (parking119.com)

## 바로 올리기
`dist` 폴더 안의 파일 전체가 완성된 홈페이지입니다. 기존 저장소의 배포 파일을 이걸로 바꿔서 올리면 됩니다.
주소 구조는 기존 사이트맵과 똑같습니다(470페이지 + 개인정보처리방침).

## 올리기 전에 꼭 할 것 (config.py)
1. **NAVER_VERIFICATION**: 기존 사이트 `<head>`에 있던 네이버 소유확인 값을 넣으세요. 비워두면 서치어드바이저 소유확인이 풀릴 수 있습니다.
2. **CEO, BIZ_NO, ADDRESS, EMAIL, HOURS**: 푸터에 표시할 사업자 정보를 넣으세요.
3. **LOGO_FILE / FAVICON_FILE**: 기존 로고·파비콘 파일을 `assets` 폴더에 넣고 파일명을 적으세요.
4. 수정한 뒤 `python3 build.py`를 실행하면 `dist`가 새로 만들어집니다.

## 시공 사진 넣기 (순위 올리는 데 가장 중요)
1. 사진을 `assets/works/` 폴더에 넣습니다. 파일명은 영어로: `gangnam-officetel-parking-line-01.jpg`
2. `config.py`의 `WORKS`에 한 줄씩 추가합니다(예시가 주석으로 들어 있습니다).
3. `python3 build.py`를 실행하면 홈, 서비스 페이지, 해당 지역 페이지에 자동으로 들어갑니다.

## 올린 다음
- 서치어드바이저 → 요청 → 사이트맵 제출: `https://parking119.com/sitemap.xml`
- RSS 제출: `https://parking119.com/rss.xml`
- 주소 끝이 `/`로 통일됐습니다(예: `/area/seoul/gangnam/parking-line/`). 끝에 `/`가 없는 기존 주소는 호스팅에서 자동으로 `/` 붙은 주소로 넘어갑니다.

## 파일 구성
- `config.py`: 사업자 정보, 소유확인, 시공 사례
- `content.py`: 지역·서비스·문구 (구마다 현장 유형을 다르게 지정해 페이지 내용이 서로 다르게 만들어짐)
- `style.css`: 디자인
- `build.py`: 생성기
