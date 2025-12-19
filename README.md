# HODU Heaven - Landing Page

행운의 반려묘 '호두'를 소개하고 구독을 장려하는 **반응형 퍼블리싱 랜딩 페이지** 입니다. 모바일 우선(Mobile-First) 전략을 기반으로 데스크탑까지 완벽하게 대응하며, 웹 표준, 접근성, SEO 최적화를 고려하여 제작되었습니다.

---

## 랜딩 페이지 최적화 및 구현 전략

### 1. 도달률 극대화를 위한 SEO 및 소셜 공유 최적화

랜딩 페이지의 핵심은 '발견'입니다. 검색 엔진 최적화와 SNS 공유 시의 매력적인 프리뷰를 통해 오가닉 유입을 늘리도록 설계했습니다.

- **Open Graph (OG) 태그:** 카카오톡, 페이스북 등 SNS 공유 시 썸네일과 설명을 최적화하여 클릭률(CTR) 증대
- **Meta Description:** 검색 결과에서 페이지의 핵심 가치를 명확히 전달

```html
<head>
  <title>호두 천국 - 행운의 고양이 호두</title>
  <meta
    name="description"
    content="행운의 반려묘 고양이 호두를 만나보세요. 호두의 일상 갤러리와 정보를 확인하고, 뉴스레터를 구독하여 호두의 소식을 받아보실 수 있습니다."
  />
  <meta property="og:title" content="호두 천국 - 행운의 고양이 호두" />
  <meta
    property="og:image"
    content="https://heyjunn.github.io/Cat-Heaven/img/cat-look-something.jpg"
  />
</head>
```

### 2. 이탈률 감소를 위한 반응형 컨테이너 전략

모바일 우선(Mobile-First) 레이아웃으로 제작하였고 데스크탑 레이아웃을 적용하였습니다. 그 외의 디바이스 레이아웃에서도 콘텐츠 가독성을 해치지 않도록, 뷰포트 크기에 따라 유연하게 변하는 레이아웃을 구현했습니다.  특히 데스크탑 환경에서는 **시선의 분산을 막기 위해** 중앙 정렬된 컨테이너 전략을 사용했습니다.

- **유동적 컨테이너:** `calc()`와 `max-width`를 활용하여, 1280px 이하에서는 자연스러운 여백을 유지하며 콘텐츠가 중앙에 집중되도록 구현
- **레이아웃 최적화:** 모바일의 스크롤 방식 갤러리를 데스크탑에서는 그리드(Grid) 형태로 변환하여 정보 습득 효율 증대
- **마크업 의사결정 (Markup Decision):** 시멘틱한 구조를 위해 불필요한 div 사용을 지양했으나, **'전체 화면 너비의 배경(Full-bleed Background)'**과 **'중앙 정렬된 콘텐츠'**를 동시에 구현하고 Flexbox 그룹핑(CSS Wrap)을 유지하기 위해, 헤더와 섹션 내부에 필수적인 `<div>` 컨테이너 구조를 채택했습니다.

```css
/* 데스크탑(1280px) 기준 컨테이너 전략 */
.header-container,
.footer-container {
  /* 1280px 이상: 최대 너비 고정 (중앙 집중) */
  /* 1280px 미만: 양옆 4rem 여백을 제외한 나머지 영역 꽉 채움 */
  /* 배경은 100%로 꽉 채우되, 내용은 중앙 정렬하기 위한 래퍼(Wrapper) */
  width: calc(100% - 8rem);
  max-width: 128rem;
  margin: 0 auto;
  padding: 0;
}
```

### 3. 잠재 고객 확보를 위한 웹 접근성 (a11y)

**모든 방문자가 '구독'이라는 목표 행동을 달성**할 수 있도록 접근성을 준수했습니다.

- **IR 기법 (Image Replacement):** 디자인 요소를 위해 텍스트를 숨기더라도, 스크린 리더 사용자가 정확한 정보를 얻을 수 있도록 `.sr-only` 클래스 활용
- **명확한 레이블링:** 아이콘 버튼(메뉴, 탑 버튼)에 `aria-label`을 명시하여 보조 기기 사용자에게 버튼의 용도를 명확히 전달

```html
<h2 class="sr-only">호두 소개</h2>

<button
  type="button"
  class="menu-toggle-btn"
  id="openMenuBtn"
  aria-label="메뉴 열기"
>
  <img src="./img/menu.svg" alt="" />
</button>
<nav class="nav-bar" id="navBar">
  <button
    type="button"
    class="close-btn"
    id="closeMenuBtn"
    aria-label="메뉴 닫기"
  >
    ...
  </button>
</nav>
```

### 4. 사용자 경험(UX) 향상을 위한 인터랙션

단조로운 정적 페이지에 생동감을 불어넣어 사용자의 체류 시간을 늘리고 긍정적인 경험을 제공합니다.

- **즐거운 인터랙션 (Playful Interaction):** 스크롤 탑 버튼이 단순히 페이지 상단으로 이동하는 기능을 넘어, 스크롤되는 동안 아이콘(탱탱볼)이 360도 회전하는 애니메이션을 적용하여 사용자에게 시각적인 즐거움을 선사합니다.
- **부드러운 이동 (Smooth Scroll):** 스크롤 탑 버튼 클릭 시 페이지 상단으로 부드럽게 이동하여 사용자의 시선 흐름을 자연스럽게 유도합니다.
  
```JavaScript

/* 스크롤 탑 버튼 클릭 시 회전 애니메이션 및 이동 로직 */
scrollTopBtn.addEventListener('click', () => {
  scrollTopBtn.classList.add('scrolling'); // 회전 애니메이션 시작
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드러운 이동
  });

  // 스크롤이 상단에 도달했는지 감지하여 애니메이션 종료
  const checkScroll = setInterval(() => {
    if (window.scrollY === 0) {
      scrollTopBtn.classList.remove('scrolling');
      clearInterval(checkScroll);
    }
  }, 100);
});

```

### 5. 유지보수를 고려한 모듈화 및 네이밍

지속적인 캠페인 운영과 향후 유지보수를 고려하여 코드의 구조를 체계화하고 일관된 규칙을 적용했습니다.

- **파일 분리:** mobile.css(공통)와 desktop.css(미디어 쿼리)로 스타일시트를 분리하여, 디바이스별 스타일을 명확히 구분하고 관리 효율성을 높였습니다.
- **시맨틱 마크업:** 무분별한 `<div>` 사용을 지양하고 `<section>, <article>, <dialog>, <nav>` 등을 사용하여 문서 구조의 의미를 명확히 전달했습니다. 만약 사용하더라도, CSS 스타일링의 유지보수성과 레이아웃의 안정성을 위해 `<div>` 래퍼 구조를 사용하였습니다.
- **일관된 CSS 네이밍(Kebab-Case):** CSS 클래스명을 **케밥 케이스**로 통일하여 가독성을 높이고, 클래스명만으로도 요소의 역할과 관계를 유추할 수 있도록 작성했습니다.

```css
/* Kebab-Case 적용 */
.header-container {
  ...;
}
.nav-download-btn {
  ...;
}
.scroll-top-btn {
  ...;
}
```
