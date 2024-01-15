## 프로젝트 소개
> 마켓컬리 홈페이지를 클론하여 비슷하게 구현한 프로젝트 **Market Jandi** 입니다. <br />
> 이전의 유명했던 드라마 *꽃보다 남자* 에 등장하는 F4를 저희 조 이름으로 차용하였고( mbti F가 4명이라서) <br />
> 드라마 여주인공인 *금잔디* 를 소재로 이용하여 마켓 이름을 **Jandi Market** 으로 정하였습니다. (실제 온라인 쇼핑몰인 컬리를 참고하였습니다.)

 <br/>
 
## 프로젝트 일정
>### 실제 프로젝트 작업일
>2023.12.29 ~ 2024.01.15 (18일간, 주말 자율참여)
>
>### 정규 프로젝트 기간
>**2024년 1월**
>| **일** | **월** |    **화**   | **수** | **목** | **금** | **토** |
>|:------:|:------:|:-----------:|:------:|:------:|:------:|:------:|
>|        |    1   |      2     |    3<br/>시작   |    4   |    5   |    6   |
>|    7   |    8   |  9 <br/>점검 |   10   |   11   |   12   |   13   |
>|   14   |   15   | 16 <br/>최종 |        |        |        |        |

 <br/>

## 팀원소개
#### :loudspeaker: 팀명: F4 

| **장효진** | **김충만**  | **박주현**  | **황승준**  |
|:---:|:---:|:---:|:---:|
| ![image description](https://cdn.discordapp.com/attachments/1159345472624930840/1192661791369597029/f4-23.png?ex=65a9e3d9&is=65976ed9&hm=4debde3afe14bb292c036652a426f6894b1a06fa41a44da1599483b83259e0b8&)  | ![image description](https://cdn.discordapp.com/attachments/1159345472624930840/1192661791868731505/f4-25.png?ex=65a9e3d9&is=65976ed9&hm=08255bf864ce4067e94f5dddd93418425e6dc880bcc18d7448db180573c36dc4&)  | ![image description](https://cdn.discordapp.com/attachments/1159345472624930840/1192661792099405984/f4-26.png?ex=65a9e3d9&is=65976ed9&hm=7dd05c4dd5a8dcf033c3a23eb4ff396e1982fd3796c19f5c22850fbf3220968a&)  | ![image description](https://cdn.discordapp.com/attachments/1159345472624930840/1192661791600287804/f4-24.png?ex=65a9e3d9&is=65976ed9&hm=bc695fbce74f514ad1c4b25618ed98423a8c16e6028ec6695333d2f5dc63b2a8&)  |
| 조장  | 스크럼마스터  | 디자인담당  |  육아담당 |

 <br/>

## 목차
<div>
  <div><a href='#1-역할-분담-speaking_head'>1. 역할 분담 :speaking_head:</a></div>
  <div><a href="#2-기술-스택-gear">2. 기술 스택 :gear:</a></div>
  <div><a href="#3-cowork-tools-">3. Cowork Tools 🦁</a></div>
  <div><a href="#4-프로젝트-초기-세팅-hammer">4. 프로젝트 초기 세팅 :hammer:</a> </div>
  <div><a href="#5-컨벤션-bookmark_tabs">5. 컨벤션 :bookmark_tabs:</a></div>
  <div><a href="#6-git-branch-전략-busts_in_silhouette">6. git branch 전략 :busts_in_silhouette:</a></div>
  <div><a href="#7-디렉터리-구조-open_file_folder">7. 디렉터리 구조 :open_file_folder:</a></div>
  <div><a href="#8-페이지별-기능-소개-sparkles">8. 페이지별 기능 소개 :sparkles:</a></div>
  <div><a href="#9-웹-접근성을-높이기-위한-노력-clap">9. 웹 접근성을 높이기 위한 노력 :clap:</a></div>
  <div><a href="#10-검색엔진-최적화Search-Engine-Optimization-SEO-keyboard">10. 검색엔진 최적화(Search Engine Optimization, SEO) :keyboard:</a></div>
  <div><a href="#11-애플리케이션-성능-향상-up">11. 애플리케이션 성능 향상 :up:</a></div>
  <div><a href="#12-프로젝트-사용법-question">12. 프로젝트 사용법 :question:</a></div>
  <div><a href="#13-배포-링크-tada">13. 배포 링크 :tada:</a></div>
</div>

 <br/>

## 1. 역할 분담 :speaking_head: 
#### :loudspeaker: main page + src/pages 
- ```Main(메인 페이지)``` / ```Cart(장바구니)``` / ```Login(로그인)``` / ```Register(회원가입)```/
- ```ProductDetail(제품 상세 페이지)``` / ```ProductList(제품 나열 페이지)``` / ```Components(공용)``` /
> 저희조는 먼저 구현해야 할 작업단위를 페이지별로 구분한 뒤,<br />
> 총8개의 작업으로 나누어져 각 조원이 2개의 작업을 분담하여 진행하였습니다.<br />

#### :white_check_mark: 장효진(팀장)
  - 데일리 스크럼 회의 진행
  - Product Detail 페이지 
  - 라디오 버튼 컴포넌트(RadioButton)
  - ```SignUp```
    - 회원가입 컴포넌트 마크업
  - ```ProductDetail```
    - 상품정보(ProductDetail 페이지 최상단) 
    - 상품설명 
    - 상세정보 
#### :white_check_mark: 김충만(스크럼마스터)
  - 프로젝트 초기 세팅([해당 카테고리 참고](#4-프로젝트-초기-세팅-hammer))
    - 웹팩 빌드툴 개발 
    - 라우팅 세팅 
    - 스토리북 연결
  - 다크 필터 컴포넌트(DarkFilter)
  - ```Home```
    - 메인 캐로셀 
    - 상품 캐로셀 
    - 공용 상품 카드 
    - 장바구니 모달(CartModal) 
    - 공용 카운터 컴포넌트(Counter)
  - ```SignUp```
    - 컴포넌트 분리 
    - 유효성 검사 (정규 표현식) 
    - 약관동의 
    - 주소 검색 (공용 커스텀 훅) 
    - 이메일 중복 검사 (파이어베이스) 
    - 회원가입 (파이어베이스)
  - ```ProductDetail```
    - 네비게이션 구현
  - ```Cart```
    - 공용 아코디언 컴포넌트(Accordion) 
    - 상품 아코디언 구현 
    - 주소 검색 
    - 상품 금액 계산 로직 구현
#### :white_check_mark: 박주현
  - 경고창 컴포넌트(AlertBox)
  - 투명 필터 컴포넌트(TransparentFilter)
  - 스크롤 이동 컴포넌트(ScrollToTop)
  - ```Common(모든페이지)```
    - 푸터(Footer)
  - ```Home```
    - 메인 모달창(MainModal) 
    - '오늘 하루 안보기' 쿠키 관리 로직 
    - 라인베너(LineBanner) 
  - ```ProductDetail```
    - 상품문의 
    - 공용 Badge 컴포넌트(Badge)
    - 공용 후기&문의작성 팝업창 컴포넌트(ProductDetailPopUp)      
    - 후기&문의작성에 대한 데이터를 파이어스토어에 넣고 가져오는 공용 커스텀 훅 구현(useDetailFireStore.js, useDetailCollection.js)
#### :white_check_mark: 황승준
  - ```Main(메인페이지)```
    - Swiper 키보드 조작 구현
    - swiper 에 마우스 접근시 auto play 정지
    - swiper 슬라이드 첫번째 요소와 마지막 요소에 각각 Prev , Next button 보이지 않도록 설정
    - 상품 pb 에서 동적으로 연동
    - 상품 담기 버튼 클릭시 장바구니 담기 모달창 연결
  - ```ProductList```
    - 사이드 필터 목록 구현 (아코디언 사용, 필터 기능구현은 X)
    - 상품List 개수
    - 상품List pb 에서 동적으로 연동
      
 <br/>
 
## 2. 기술 스택 :gear: 
<!--
<img src="https://img.shields.io/badge/텍스트-컬러코드?style=for-the-badge&logo=아이콘이름&logoColor=white"/>
-->
<div>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss">
<br />
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"/>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"/>
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>
<img src="https://camo.githubusercontent.com/46236db62fd5fecaf78301889d9e0237fd4c9cf7ee29fffb67722f972e35955d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f636b6574426173652d4238444245343f7374796c653d666f722d7468652d6261646765266c6f676f3d706f636b657462617365266c6f676f436f6c6f723d313631363141" >

</div>

 <br/>

## 3. Cowork Tools 🦁 
<div>
<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/>
</div> 

 <br/>

## 4. 프로젝트 초기 세팅 :hammer: 
<details>
<summary>:white_check_mark: 빌드툴 관리 - Webpack 기본 설정</summary>

![image](https://user-images.githubusercontent.com/112063987/233780244-008b952c-97fe-41f3-ac3e-3c09f050d1ee.png)
</details>
<details>
<summary>:white_check_mark: 빌드툴 관리 - Webpack 빌드 및 분석</summary>

![image](https://user-images.githubusercontent.com/112063987/233780407-d826ab4f-12bd-484f-b5a1-fd6cd3265c24.png)
</details>
<details>
<summary>:white_check_mark: 패키지, 폴더</summary>

![image](https://user-images.githubusercontent.com/112063987/233780660-d83a1141-c316-43b1-a7e5-035569ad84d2.png)
</details>
<details>
<summary>:white_check_mark: 라우팅, 테스팅</summary>

![image](https://user-images.githubusercontent.com/112063987/233780716-bc4e58b3-ac66-40e6-be24-bc04620c7ace.png)
</details>


## 5. 컨벤션 :bookmark_tabs: 
<details>
  <summary>:white_check_mark: Gitmoji</summary>
  <table>
  <thead>
    <tr>
      <td align="center">✨</td>
      <td align="center">[Feat]</td>
      <td align="center">기능 (새로운 기능)</td>
    </tr>
     <tr>
      <td align="center">🐛</td>
      <td align="center">[Fix]</td>
      <td align="center">버그 (버그 수정)</td>
    </tr>
    <tr>
      <td align="center">🔧</td>
      <td align="center">[Add]</td>
      <td align="center">구성 파일 추가 및 삭제</td>
    </tr>
    <tr>
      <td align="center">💄</td>
      <td align="center">[Design]</td>
      <td align="center">CSS 등 사용자 UI 디자인 변경</td>
    </tr>
    <tr>
      <td align="center">🎨</td>
      <td align="center">[Modify]</td>
      <td align="center">코드 변경</td>
    </tr>
    <tr>
      <td align="center">📝</td>
      <td align="center">[Comment]</td>
      <td align="center">필요한 주석 추가 및 변경</td>
    </tr>
    <tr>
      <td align="center">♻️</td>
      <td align="center">[Refactoring]</td>
      <td align="center">리팩토링</td>
    </tr>
    <tr>
      <td align="center">📝</td>
      <td align="center">[docs]</td>
      <td align="center">문서 (문서 추가, 수정, 삭제)</td>
    </tr>
    <tr>
      <td align="center">✅</td>
      <td align="center">[Test]</td>
      <td align="center">테스트(테스트 코드 추가, 수정, 삭제)</td>
    </tr>
    <tr>
      <td align="center">📦</td>
      <td align="center">[Chore]</td>
      <td align="center">기타 변경사항 (빌드 스크립트 수정 등)</td>
    </tr>  
    <tr>
      <td align="center">📘</td>
      <td align="center">[Post]</td>
      <td align="center">블로그 포스트 추가</td>
    </tr>
    <tr>
      <td align="center">🚚</td>
      <td align="center">[Rename]</td>
      <td align="center">파일 혹은 폴더명을 수정하거나 옮기는 작업만 하는 경우</td>
    </tr>
    <tr>
      <td align="center">🔥</td>
      <td align="center">[Remove]</td>
      <td align="center">파일을 삭제</td>
    </tr>
    <tr>
      <td align="center">⏪</td>
      <td align="center">[Revert]</td>
      <td align="center">변경 내용 되돌리기</td>
    </tr>
    <tr>
      <td align="center">🏛️</td>
      <td align="center">[Build]</td>
      <td align="center">새로운 라이브러리 or 패키지 설치</td>
    </tr>
    <tr>
      <td align="center">🔀</td>
      <td align="center">[Merge]</td>
      <td align="center">pull 과정 중 현재 commit과 자동 병합이 일어날 때</td>
    </tr>
    <tr>
      <td align="center">🗃️</td>
      <td align="center">[Database]</td>
      <td align="center">데이터베이스 관련 수정</td>
    </tr>
  </tbody>
</table>
</details>

<details>
  <summary>:white_check_mark: Commit 컨벤션</summary>
  - Gitmoji 확장프로그램 설치 후 사용<br />
  - Gitmoji 카테고리에 해당되는 분류 클릭 후, 변경내용 작성
</details>

<details>
  <summary>:white_check_mark: 네이밍 컨벤션</summary>
  - 이름을 통해 쓰임새를 알 수 있도록 한다. (20자 미만, 직관적으로)<br />
  - 이름의 맨 앞이나 맨 뒤에 언더바(_)를 사용하지 않는다.<br />
  <table>
    <tr>
      <td align="center">컴포넌트</td>
      <td>Pascal Case(파스칼 케이스)</td>
    </tr>
    <tr>
      <td align="center">image, svg</td>
      <td>단어 사이 -를 사용해 네이밍(ex. erase-check.svg)</td>
    </tr>
    <tr>
      <td align="center">이벤트 핸들러</td>
      <td>on + 메소드명 + Handler</td>
    </tr>
    <tr>
      <td align="center">변수, 함수, 인스턴스</td>
      <td>Camel Case(카멜 케이스)</td>
    </tr>
    <tr>
      <td align="center">함수 이름</td>
      <td>'동사+명사' 구조로 네이밍(ex. makingItem(x) / makeItem, getItem, changeItem (o))</td>
    </tr>
    <tr>
      <td align="center">Class, Constructor</td>
      <td>Camel Case(카멜 케이스)</td>
    </tr>
    <tr>
      <td align="center">상수</td>
      <td>Scream Snake Case (스크림 스네이크 케이스)</td>
    </tr>
  </table>
</details>

<details>
  <summary>:white_check_mark: 코드 컨벤션</summary>
  <table>
    <tr>
      <td align="center">Tab Depth<br/>(들여쓰기)</td>
      <td>
        기본 tab depth: 4 (유동적으로)
        <br />
        <img src="https://user-images.githubusercontent.com/112063987/233770688-c4c1c6b0-1eb7-4a2f-8229-de419c19e1bd.png" width="250">
      </td>
    </tr>
    <tr>
      <td align="center">Comment<br/>(주석)</td>
      <td>
        1) // : 기본 주석입니다. <br />
        2) //? : 의견을 묻는 주석 예시입니다. → 의견을 구해야하거나, 피드백을 구하려할때 사용해주세요. <br />
        3) //! : 주의해주세요 → 신경쓸 부분이나 중요한 이야기가 있을 때 사용해주세요. <br />
        4) 분류 주석 : 분류가 될만한 부분은 줄 주석으로 나눠주세요. (다음 확장 프로그램을 설치해주세요) <br />
        &nbsp;&nbsp;&nbsp;&nbsp;- 확장프로그램: https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider<br />&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/112063987/233770939-995b52c9-be62-49ec-80a4-cc24555a8649.png" width="450">
      </td>
    </tr>
  </table>
</details>

      
## 6. git branch 전략 :busts_in_silhouette: 
저희팀은 git branch 전략으로, git flow 방식을 선택했습니다.
> main : 기준이 되는 branch로 제품을 배포하는 브랜치 입니다.<br />
> develop : 개발 branch로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 합(Merge)칩니다.<br />
> feature : 단위 기능을 개발하는 branch로 기능 개발이 완료되면 develop branch에 합(Merge)칩니다. <br />

#### :loudspeaker: feature branch 컨벤션
단위 기능을 개발하는 branch인 feature branch의 경우, 다음과 같은 형식으로 네이밍합니다.
```
feature/담당페이지#이슈번호
```

## 7. 디렉터리 구조 :open_file_folder: 
<details>
<summary>디렉터리 구조 보기</summary>
<pre><code>
```
📦 
├─ .eslintrc.cjs
├─ .github
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .gitignore
├─ .gitmessage.txt
├─ .prettierrc.cjs
├─ README.md
├─ index.html
├─ main.js
├─ package-lock.json
├─ package.json
├─ pocketbase
│  ├─ CHANGELOG.md
│  ├─ CHANGELOG_8_15.md
│  ├─ LICENSE.md
│  ├─ pb_data
│  │  ├─ data.db
│  │  ├─ logs.db
│  │  └─ types.d.ts
│  └─ pocketbase.exe
├─ postcss.config.js
├─ public
│  ├─ banner
│  │  ├─ add cart button.png
│  │  ├─ banner01.png
│  │  ├─ banner02.png
│  │  ├─ banner03.png
│  │  ├─ banner05.png
│  │  ├─ image-sample-for-test.jpg
│  │  └─ line-banner 1.png
│  ├─ favicon.svg
│  ├─ icon
│  │  ├─ Search_gray.svg
│  │  ├─ _sprite.svg
│  │  ├─ close_banner.png
│  │  ├─ down_header.png
│  │  ├─ isms.png
│  │  ├─ new.svg
│  │  ├─ privacy.png
│  │  ├─ sns_icon.png
│  │  ├─ tosspayments.png
│  │  └─ wooriBank.png
│  ├─ input
│  │  ├─ checkBox-isChecked.svg
│  │  ├─ checkBox.svg
│  │  ├─ minus-disabled.svg
│  │  ├─ minus.svg
│  │  ├─ plus-disabled.svg
│  │  ├─ plus.svg
│  │  ├─ radio-isSelected.svg
│  │  ├─ radio.svg
│  │  ├─ wish-disabled.svg
│  │  └─ wish.svg
│  ├─ jandi_logo.svg
│  └─ menu
│     ├─ Baby.png
│     ├─ Bread.png
│     ├─ Coffee.png
│     ├─ Cook.png
│     ├─ Cosmetics.png
│     ├─ Detergent.png
│     ├─ Dog.png
│     ├─ Food.png
│     ├─ Fruit.png
│     ├─ Gift.png
│     ├─ Health.png
│     ├─ HomeAppliances.png
│     ├─ Meet.png
│     ├─ Oil.png
│     ├─ Salad.png
│     ├─ SeaFood.png
│     ├─ Snack.png
│     ├─ Traditional_Liquor.png
│     ├─ Travel.png
│     ├─ Vegetable.png
│     ├─ Wine.png
│     └─ shampoo.png
├─ src
│  ├─ assets
│  │  ├─ banner01.png
│  │  ├─ banner02.png
│  │  ├─ banner03.png
│  │  └─ banner05.png
│  ├─ components
│  │  ├─ addCart
│  │  │  ├─ addCart.html
│  │  │  └─ addCart.js
│  │  ├─ bubble
│  │  │  ├─ bubble.js
│  │  │  └─ index.html
│  │  ├─ detailModal
│  │  │  ├─ detailModal.html
│  │  │  └─ detailModal.js
│  │  ├─ footer
│  │  │  ├─ footer.html
│  │  │  └─ footer.js
│  │  ├─ header
│  │  │  ├─ header.html
│  │  │  ├─ header.js
│  │  │  └─ headerCategory.html
│  │  └─ modal
│  │     ├─ modal.html
│  │     └─ modal.js
│  ├─ js
│  │  └─ include.js
│  ├─ lib
│  │  ├─ detail
│  │  │  ├─ activeTab.js
│  │  │  ├─ generateInfoSection.js
│  │  │  ├─ getNode.js
│  │  │  ├─ index.js
│  │  │  ├─ insert.js
│  │  │  └─ updateHeartIcon.js
│  │  └─ index.js
│  ├─ pages
│  │  ├─ cart
│  │  │  ├─ cart.js
│  │  │  └─ index.html
│  │  ├─ login
│  │  │  ├─ index.html
│  │  │  └─ login.js
│  │  ├─ productDetail
│  │  │  ├─ accordionToggle.js
│  │  │  ├─ index.html
│  │  │  └─ productDetail.js
│  │  ├─ productList
│  │  │  ├─ index.html
│  │  │  └─ productList.js
│  │  └─ register
│  │     ├─ index.html
│  │     └─ register.js
│  └─ styles
│     ├─ addCart.css
│     ├─ cart.css
│     ├─ common.css
│     ├─ detail.css
│     ├─ detailModal.css
│     ├─ font.css
│     ├─ footer.css
│     ├─ header.css
│     ├─ login.css
│     ├─ register.css
│     └─ tailwind.css
├─ tailwind.config.js
├─ template.html
└─ vite.config.js
```
</code></pre>
</details>

## 8. 페이지별 기능 소개 :sparkles:  
<details>
  <summary>:white_check_mark: Home (메인 페이지)</summary>
  <table>
    <tr>
      <td width="300">
        <h4>:round_pushpin:메인페이지 모달창</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 오늘 하루 안보기를 쿠키를 이용해서 구현했습니다. 사용자가 오늘 하루 안보기 버튼을 클릭하면, 쿠키가 생성되고, 만료시간으로 설정한 하루 뒤에, 쿠키는 사라집니다.
</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234293310-a902203e-c059-438b-a322-63914408986f.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:상단 헤더</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 로그인 상태에 따라 버튼이 달라짐</p>
        <p>2) 스크롤을 일정 위치 만큼 내릴 시, 헤더가 상단에 고정됩니다.</p>
        <p>3) 카테고리 영역 hover 시, 리스트가 나타납니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234286874-b71fa6ad-10c6-4bf9-90ae-fdb94932b692.gif"/>
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:메인 캐로셀</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 메인 배너를 확인할 수 있습니다.</p>
        <p>2) 자동으로 슬라이더가 넘어가며, 정지 버튼을 눌러 멈출 수 있습니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234286984-e73c4e17-f339-4db8-be50-df5c7bb10b92.gif"/>
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:상품 캐로셀과 상품 UI</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 상품이 4개씩 보여집니다.</p>
        <p>2) 상품 카드를 누를시 상품 디테일 페이지로 넘어갑니다.</p>
        <p>3) 장바구니 버튼을 누를 시 장바구니 모달이 나타납니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234287323-d662eb4e-298c-42d6-a9e2-72a2cbdb2315.gif"/>
      </td>
    </tr>
  </table>
</details>
<details>
  <summary>:white_check_mark: SignIn (로그인 페이지)</summary>
  <table>
    <tr>
      <td width="300">
        <h4>:round_pushpin:로그인하기</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 이메일 비밀번호를 입력하고, 로그인 버튼을 누르면 로그인 된 후 메인페이지로 이동합니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234283008-0fb9c951-2153-467a-ac72-10b735267c03.gif"/>    
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:회원가입 페이지로 이동</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 회원가입 버튼을 누르면 회원가입 페이지로 이동합니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234283234-6682c934-d766-465e-bff3-14041314dda4.gif"/>
      </td>        
    </tr>
  </table>
</details>
<details>
  <summary>:white_check_mark: SignUp (회원가입 페이지) </summary>
  <table>
    <tr>
      <td width="300">
        <h4>:round_pushpin:이메일 유효성 검사 및 중복 확인</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 이메일 폼 입력 형식을 체크합니다.</p>
        <p>2) 회원가입을 하려면 반드시 중복 확인 버튼을 눌러 중복 검사를 해야합니다.</p>
        <p>3) 이메일 폼 우측 중복 확인 버튼을 눌러 이미 가입한 이메일인지 확인합니다.</p>
        <p>4) 중복된 이메일이 없으면 '사용가능한 이메일입니다.' 라고 알려주며 중복 확인 버튼이 비활성화 됩니다.</p>
        <p>5) 다시 이메일을 입력하면 중복 확인 버튼이 재활성화 되며 다시 중복 검사를 해야 회원가입 할 수 있습니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234276612-0092bf26-f3e9-41fb-a6ac-53ef272e1c82.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:비밀번호 유효성 검사</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 비밀번호 폼 입력 형식을 체크합니다. (영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합, 최소 10자리)</p>
        <p>2) 비밀번호를 입력하면 비밀번호 확인도 검사가 진행됩니다. </p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234276692-4a22acdb-cbb0-4837-9025-37bc6dbc8464.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:비밀번호 확인 유효성 검사</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 비밀번호 확인이 비밀번호와 동일한지 검사합니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234277671-38355e57-87b0-4745-93d8-5869b3bcf8b9.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:이름 유효성 검사</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 이름 폼 입력 형식을 체크합니다. (최소 2글자 이상)</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234277552-71d60060-f085-47ed-af0e-56449de32f2f.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:휴대폰 유효성 검사</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 휴대폰 폼 입력 형식을 체크합니다. (숫자 11자)</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234279659-8cb74691-193d-407d-8253-8e0bfd80bbba.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:주소 검색</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 주소를 검색합니다.</p>
        <p>2) 카카오 주소 api를 사용합니다.</p>
        <p>3) 검색에 성공하면 검색된 주소를 보여줍니다.</p>
        <p>4) 재검색 버튼을 눌러 다서 검색 가능합니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234279731-d673592a-9968-4673-b630-c652ed905874.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:성별 선택</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 성별을 선택합니다. 기본 값은 '선택안함' 입니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234279810-e5f07e11-82f7-45db-9c2e-6663fb8817eb.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:생년월일 입력</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 년도는 1900 ~ 2099 사이의 숫자만 입력가능합니다.</p>
        <p>1) 태어난 월은 1~12 사이의 숫자만 입력가능합니다.</p>
        <p>1) 태어난 일은 1~31 사이의 숫자만 입력가능합니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234279910-ac5b0024-5dac-4794-a7b5-25b9085f78e3.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:이용약관동의</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 회원가입을 하려면 필수 이용약관에 모두 동의해야합니다.</p>
        <p>1) "전체 동의합니다." 체크박스를 체크하면 모든 약관을 체크합니다.</p>
      </td>
      <td width="700">
         <img src="https://user-images.githubusercontent.com/73629761/234280076-89c32e2b-b33c-4768-a1a0-705982594eed.gif"/>
      </td>       
    </tr>
   </table>
</details>
<details>
  <summary>:white_check_mark: ProductDetail (제품 상세 페이지)</summary>
  <table>
    <tr>
      <td width="300">
        <h4>:round_pushpin:장바구니에 상품 담기</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) -/+버튼을 통해 상품 수량을 선택하고, 장바구니에 담기 버튼을 누르면 해당 상품이 장바구니(Cart)에 담깁니다.</p>
        <p>2) count값이 1일때는 마이너스 버튼이 비활성화됩니다.</p>
        <p>3) count값은 재고량을 초과할 수 없습니다. (오른쪽 gif속, 탱탱쫄면의 재고량은 11개입니다)</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/233832485-05d91ecd-2128-4272-9ed5-66c4722fa709.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:네비게이션바</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 네비게이션 탭을 클릭하면 해당 영역으로 스크롤해서 이동합니다.</p>
        <p>2) 후기탭의 경우, 후기의 개수가 중괄호안에 표시됩니다.</p>
        <p>3) 스크롤 위치를 감지해서 탭의 스타일이 변합니다.</p>
        <p>4) 네비게이션바는 스크롤 할 때, 작은헤더 밑에 고정됩니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234244321-b10b36c8-f985-403f-8c4a-9a39d6d46118.gif"/>
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:상품후기 작성</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>※ 상품후기/문의 작성 팝업창은 공용컴포넌트를 사용합니다.</p>
        <p>1) 후기가 한개도 없다면, `따뜻한 첫 후기를 기다리고 있어요`라고 뜹니다.</p>
        <p>2) 상품후기 작성하기의 경우, 보고 있는 상품의 상품명이 자동으로 제목에 설정됩니다.</p>
        <p>3) 공지글의 경우, 아코디언으로 펼쳐볼 수 있습니다.</p>
        <p>4) 후기글들은 최신순으로 정렬됩니다.</p>
        <p>5) 후기글 작성자는 이름의 일부가 *로 가려져서 표시됩니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234200667-9b6520b5-1edb-46b3-9d91-431b396a2171.gif"/>     
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:상품문의 작성</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>※ 상품후기/문의 작성 팝업창은 공용컴포넌트를 사용합니다.</p>
        <p>1) 상품문의 작성하기의 경우, 상품후기 작성하기와 다르게 비밀글로 설정할 수 있습니다.</p>
        <p>2) 자신이 작성한 비밀글은 확인할 수 있습니다.(오른쪽 gif에서, 자신이 쓴 비밀글은 접근가능하나, 로그아웃한 순간 비밀글에 접근하지 못하는 걸 확인할 수 있습니다)</p>
        <p>3) (다른사람이 작성한)비밀글에 접근하려고 했을때는 "비밀글입니다."라고 경고창이 뜹니다.</p>
        <p>4) 상품문의의 경우, 모든 글들을 아코디언으로 펼쳐볼 수 있습니다.</p>
        <p>5) 문의글들은 최신순으로 정렬됩니다.</p>
        <p>6) 문의글 작성자는 이름의 일부가 *로 가려져서 표시됩니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234207067-ba5ce8e6-4ffb-4e29-97d7-84c31477a744.gif"/>
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:상품후기/문의 페이지네이션 버튼</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 후기의 경우 3개씩, 문의의 경우 6개씩 한 페이지에 보여집니다.</p>
        <p>2) 첫 페이지일때는 이전페이지로 이동하는 버튼이 비활성화됩니다.</p>
        <p>3) 마지막 페이지일때는 다음페이지로 이동하는 버튼이 비활성화됩니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234201782-4b1e27b8-9ff2-4d7b-9fa4-5ce3cb38dc66.gif"/>   
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:로그인한 사용자만 상품후기/문의 작성 가능</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 로그인하지 않은 사용자가 상품후기/문의 작성을 하려는 경우, "로그인하셔야 본 서비스를 이용하실 수 있습니다."라는 경고창이 뜨고, 확인버튼을 누르면, 로그인 페이지로 이동합니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234202639-f9e51840-87ad-4212-b5d4-7ffb0923116e.gif"/>
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin: 특정 상품에만 해당하는 문의/리뷰글 보이기</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 사용자가 특정 상품 페이지에서 리뷰나 문의 글을 등록할 때, 현재 보고 있는 상품의 product id가 파이어스토어에 함께 저장되게 하였고, 저장된 product id를 이용해, 선택한 상품에 대한 후기나 문의글들만 나열되게 구현하였습니다.</p>
        <p>2) 오른쪽 gif에서, '소금빵'제품페이지에서 작성한 후기글들은 '브라우니'제품페이지에서는 볼 수 없는 걸 확인할 수 있습니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234249542-b26497b9-b06e-4c14-b465-94789c3b9545.gif"/>      
      </td>
    </tr>
  </table>
</details>
<details>
  <summary>:white_check_mark: ProductList (제품 나열 페이지)</summary>
  <table>
    <tr>
      <td width="300">
        <h4>:round_pushpin: 스크롤위치에 반응하는 레이아웃</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 스크롤을 일정 위치 만큼 내릴 시, 레이아웃이 고정됩니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234263066-0c70283a-e7b2-4a83-9855-137e2bf19fa9.gif"/>      
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin: 필터 기능 구현</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 체크박스 클릭시 조건에 맞는 상품들을 렌더링 및 필터 유형별 클릭 시, 중복적으로 조건에 맞는 상품들을 렌더링합니다.</p>
        <p>2) 카테고리별로 필터링 가능합니다.</p>
        <p>3) 브랜드별로 필터링 가능합니다.</p>
        <p>4) 가격별로 필터링 가능합니다.</p>
        <p>5) 혜택별로 필터링 가능합니다.</p>
        <p>6) 유형별로 필터링 가능합니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234264909-858f4746-18ac-48c0-aad8-849783e5c7ac.gif"/>   
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin: 필터링 초기화 기능 구현</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 초기화 버튼을 클릭하면, 필터링된 상태가 초기화됩니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234267155-de0e762d-58d5-4191-b694-e8769c659990.gif"/>      
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin: 특정 조건 시, 텍스트를 띄우는 레이아웃</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 조건에 맞는 상품이 없다면, '선택하신 필터와 일치하는 상품이 없습니다.'텍스트가 있는 레이아웃을 띄웁니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234268187-76670879-bbcc-41cb-bcf4-24892e01d880.gif"/> 
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin: 가격순 정렬기능 구현</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 높은가격 또는 낮은가격순으로 정렬 가능합니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234268813-440a8811-ffa6-40d1-90ae-5e2eda250ec1.gif"/> 
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin: 페이지네이션 구현</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 한 페이지당 15개의 상품을 보여줍니다.</p>
        <p>2) 최대 10페이지까지 늘어납니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234291652-69704732-6018-416a-a983-31f065fa8acb.gif"/> 
      </td>
    </tr>
  </table>
</details>
<details>
  <summary>:white_check_mark: Cart (장바구니 페이지)</summary>
  <table>
    <tr>
      <td width="300">
        <h4>:round_pushpin:장바구니에 상품 담기</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 장바구니 모달 또는 상품 페이지에서 상품을 수량과 함꼐 저장할 수 있습니다.</p>
        <p>2) 수량은 1개 이상 상품의 재고 수량 이하 만큼 선택 할 수 있습니다. </p>
      </td>
      <td width="700">
      <img src="https://user-images.githubusercontent.com/73629761/234274911-7e6f78ec-2260-4e4b-b634-540c94b90ee7.gif"/>
      </td>        
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:장바구니 아코디언</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 장바구니 아코디언은 (냉장 식품, 냉동 식품, 상온 식품)으로 나누어져 있습니다.</p>
        <p>2) 전체 선택 체크 박스로 상품 전체를 선택 할 수 있습니다. </p>
        <p>3) 선택 삭제 버튼을 통해 선택된 상품들을 삭제 할 수 있습니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234275375-c1f4ecc8-c2e4-400c-a921-9c3a023dd16c.gif"/>
      </td>        
    </tr>
     <tr>
      <td width="300">
        <h4>:round_pushpin:장바구니 상품</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 아코디언 내부에서 장바구니에 저장된 상품을 확인 할 수 있습니다.</p>
        <p>2) 상품의 체크 여부에 따라 계산이 변경됩니다.</p>
        <p>3) 체크 박스 체크후 아코디언의 선택 삭제 버튼을 누르거나, 상품 우측의 x 버튼을 눌러 상품을 삭제 할 수 있습니다. </p>
        <p>4) Counter를 통해 상품의 수량을 조정할 수 있습니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234274693-fbdf5180-ba58-4d04-9538-8c09d33ec497.gif"/>
      </td>
    </tr>
     <tr>
      <td width="300">
        <h4>:round_pushpin:배송지 선택</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 주소 검색을 통해 배송지를 검색 할 수 있습니다.</p>
        <p>2) 회원가입의 주소검색과 동일 방식으로 검색이 이루어집니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234274661-65eda766-17c3-400f-93fd-775225fa6b7c.gif"/>
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:결제 하기</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 장바구니 상품 상태를 반영하여 결제 금액을 보여줍니다.</p>
        <p>2) 로그인 상태에서 주문하기 버튼을 누를 수 있습니다</p>
        <p>3) 주문하기 버튼을 누르면 결제한 정보와 금액을 알려줍니다.</p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/73629761/234274614-d7bb5ca9-6bdb-4049-bac1-a9a6fdad158a.gif"/>   
      </td>
    </tr>
  </table>
</details>
<details>
  <summary>:white_check_mark: Common(모든 페이지에 공통적으로 들어가는 부분)</summary>
  <table>
    <tr>
      <td width="300">
        <h4>:round_pushpin: Header: 스크롤위치에 반응하는 레이아웃</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 스크롤을 일정 위치 만큼 내릴 시,  상단 고정되는 반응형 헤더 레이아웃을 확인할 수 있습니다. </p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234309849-d18ddc38-0667-4fba-a4d3-92cc2bf737c1.gif"/>          
      </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin: Header: 카테고리 영역 hover 시, 리스트 렌더링</h4>
        <h4>:round_pushpin:기능 설명</h4>
        <p>1) 카테고리 영역을 HOVER 시, 카테고리 리스트들이 나옵니다. </p>
      </td>
      <td width="700">
        <img src="https://user-images.githubusercontent.com/112063987/234311920-58841b57-0ede-4f71-ab92-b299f5b116cc.gif"/>       
      </td>
    </tr>
   </table>
</details>

## 9. 웹 접근성을 높이기 위한 노력 :clap: 
#### :white_check_mark: Tab으로 접근 가능한 모달창
- ```장바구니 모달창 웹접근성``` : https://github.com/LikeLion-FE-React-Project04/project-repo/issues/206
- ```메인 모달창 웹접근성``` : https://github.com/LikeLion-FE-React-Project04/project-repo/issues/212
- ```상품후기/문의 팝업창 웹접근성``` : https://github.com/LikeLion-FE-React-Project04/project-repo/issues/228
- ```경고창 웹접근성``` : https://github.com/LikeLion-FE-React-Project04/project-repo/issues/220

#### :white_check_mark: 슬라이더(swiper) 웹접근성
- ```캐로셀 웹접근성``` 
  - https://github.com/LikeLion-FE-React-Project04/project-repo/issues/202
  - https://github.com/LikeLion-FE-React-Project04/project-repo/issues/292

#### :white_check_mark: Header 웹접근성
- https://github.com/LikeLion-FE-React-Project04/project-repo/issues/236

#### :white_check_mark: Footer 웹접근성
- https://github.com/LikeLion-FE-React-Project04/project-repo/issues/238

#### :white_check_mark: LineBanner 웹접근성
- https://github.com/LikeLion-FE-React-Project04/project-repo/issues/290

## 10. 검색엔진 최적화(Search Engine Optimization, SEO) :keyboard: 
- https://github.com/LikeLion-FE-React-Project04/project-repo/issues/275

## 11. 애플리케이션 성능 향상 :up: 
- https://github.com/LikeLion-FE-React-Project04/project-repo/issues/293

## 12. 프로젝트 사용법 :question: 
다음 순서대로 명령어를 입력해주세요.
```
npm install -g pnpm
pnpm install
npm start
```
#### :loudspeaker: .env
> 데이터들을 파이어베이스로 관리하기 위해서는 ```.env```파일이 필요합니다.<br/>
> ```project-repo```폴더 최상단에 ```.env```파일을 만들어주세요.<br/>
> ```.env```의 내용은 다음과 같이 구성하면 됩니다. 쌍따옴표안에 개인의 코드를 넣어주세요.<br/>
```
API_KEY = ""
AUTH_DOMAIN = ""
PROJECT_ID = ""
STORAGE_BUCKET = ""
MESSAGING_SENDER_ID = ""
APP_ID = ""
```
#### :loudspeaker: 파이어베이스
<details>
  <summary>✅ 파이어베이스 연동하기</summary>
  <table>
    <tr>
      <td width="200">
        <h4>:round_pushpin:설명</h4>
        <p>1) 파이어베이스 홈페이지에 들어갑니다.</p>
        <p>2) 시작하기 버튼을 누릅니다.</p>
      </td>
      <td width="800">
        <img src="https://user-images.githubusercontent.com/73629761/234783630-57bde989-2f72-4ed9-b65b-fe7ca5a1b271.PNG"/>          
      </td>
    </tr>
    <tr>
      <td width="200">
        <h4>:round_pushpin:설명</h4>
        <p>1) 프로젝트 만들기 버튼을 클릭합니다.</p>
      </td>
      <td width="800">
    <img src="https://user-images.githubusercontent.com/73629761/234783753-56622e88-234c-441f-89a3-edcc4ebff3f9.PNG"/>
    </td>
    </tr>
    <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 프로젝트의 이름을 지정합니다.</p>
        <p>2) 체크박스 표시 후 계속 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234783813-a9f75e51-490d-42e4-9ce5-9edbdb8e4d39.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 계속 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234783902-178da913-b48a-402b-a544-0790ceb90b41.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 애널리틱스를 다음과 같이 설정합니다.</p>
        <p>2) 프로젝트 만들기 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234783981-a400776e-eb93-4b7f-bc5c-707289d9dfcf.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 프로젝트 만들기에 성공하면 다음과 같은 화면이 나옵니다.</p>
        <p>2) 계속 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234784041-44490d2d-5a0d-46df-a363-b21a50db11a8.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 하단에 Authentication 버튼을 누릅니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234784106-b79a3aa0-9b75-440e-a8de-04c0d15549fe.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 시작하기 버튼을 누릅니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234784163-dc896fbe-eb21-47e4-86d4-dd65298052c0.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 이메일/비밀번호 버튼을 누릅니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234784220-006ac690-db01-4cab-885f-89e19d19a68c.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 그림과 같이 설정 후 저장 버튼을 누릅니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234788604-f0f2b617-a473-4167-bdee-4f493054a64c.PNG"/>
  </td>
    </tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) &lt;/&gt; (웹 앱 추가) 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234788755-b196535c-6f7a-4bc3-a04d-00a7f928bc37.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 앱을 등록합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234788801-e9f72869-1e33-4317-abf4-fbe9ab4a7f2b.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) SDK의 값을 .env에 등록합니다. <a href="#loudspeaker-env">.env 등록하기를 참고하세요</a></p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234788871-9db1f9d8-a5ef-4266-8694-921dab148ebd.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) Cloud Firestore 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234788929-b75d2498-4dcb-4b82-93e4-c3601a5938dd.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 데이터베이스 만들기 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234789564-40c2b490-1b84-4bc7-8dcc-1833d950495b.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 다음 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234789662-73292a39-8513-4758-a2f1-03f4b7d7a37a.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) Cloud Firestore 위치를 다음과 같이 설정합니다.</p>
        <p>2) 사용 설정 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234789793-15c11e1f-96aa-421c-9817-08a9c03a8cb2.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 생성된 Cloud Firestore의 규칙을 다음과 같이 바꿔줍니다. (false -> true)</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234792745-1691fc9f-bf4c-4ce1-952a-8005f3ac3885.PNG"/>
  </td>
    </tr>
    </table>
    </details>
    <details>
    <summary>✅ 파이어베이스에 데이터 추가하기</summary>
    <table>
  <tr>
      <td width="200">
        <h4>:round_pushpin:설명</h4>
        <p>1) "src\components\Header\Header.jsx" 코드의 21~23 번째 줄의 주석을 풉니다.</p>
      </td>
      <td width="800">
  <img src="https://user-images.githubusercontent.com/73629761/234828118-22f2d5d9-385a-4089-a055-f4b8f1e2bd9f.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 주석을 풀면 헤더 상단에 일괄 데이터 쓰기 버튼이 나타납니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234792865-bf336264-1412-4933-8456-42ed08e2b876.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 일괄 데이터 쓰기 버튼을 클릭합니다</p>
        <p>2) 데이터가 정상적으로 추가되었다고 콘솔에 표시됩니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234792955-cc242bc7-e0b0-4c48-b55c-1a252c37a6d0.PNG"/>
  </td>
    </tr>
    <tr>
      <td width="200">
        <h4>:round_pushpin:설명</h4>
        <p>1) 데이터가 정상적으로 추가되었으면 주석을 다시 닫아줍니다.</p>
      </td>
      <td width="800">
  <img src="https://user-images.githubusercontent.com/73629761/234828118-22f2d5d9-385a-4089-a055-f4b8f1e2bd9f.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 상품리스트 페이지(localhost:3000/productList)에 들어가면 다음과 같은 화면이 나타납니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234793082-243f8981-501e-4b55-ae93-28c09e88fab6.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 해당 위치의 주소를 복사해서 검색창에 입력합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234793163-090aab85-b03f-460c-a446-85a5da685aea.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 색인을 입력하는 페이지가 나타납니다.</p>
        <p>2) 색인 만들기 버튼을 클릭합니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234793261-2158b35b-fb45-4623-a521-0bd92a4265dc.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 그림과 같이 색인을 입력하고 색인 만들기 버튼을 클릭합니다.</p>
        <p>2) 주의) 세번째 색인은 __name__ 입니다.</p>
        <p>3) 색인이 만들어지는데는 몇 분의 시간이 소요됩니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234793312-476310b3-ddcf-4919-a0ff-84ab4e3f5d3d.PNG"/>
  </td>
    </tr>
  <tr>
      <td width="300">
        <h4>:round_pushpin:설명</h4>
        <p>1) 색인이 정상적으로 만들어지면 다음과 같이 데이터가 보입니다.</p>
      </td>
      <td width="700">
  <img src="https://user-images.githubusercontent.com/73629761/234903662-82d85a88-b438-47c2-a0be-fcdf1ba131d6.PNG"/>
  </td>
    </tr>
    </table>
</details>


## 13. 배포 링크 :tada: 
https://exquisite-beijinho-97fbd2.netlify.app/


![footer](https://capsule-render.vercel.app/api?section=footer&type=waving&color=0:FFFFFF,100:5F0080)
