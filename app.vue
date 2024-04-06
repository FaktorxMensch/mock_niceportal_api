<template>
  <div class="app-root">
  </div>
  <div class="app-content"></div>
</template>

<script>
/**
 * move content from noscript into dom and also remove script tags
 */
setTimeout(function () {
  var noscript = document.querySelector('#noscript');
  var wrapper = document.createElement('div');

  var appRoot = wrapper.querySelector('.app-root');
  var appContent = wrapper.querySelector('.app-content');

  appContent.style.display = 'none';

  appRoot.remove();
  document.body.insertBefore(appRoot, noscript);
  noscript.remove();

  setTimeout(function () {
    appContent.style.display = null;
    document.currentScript?.remove();
  }, 5000);
}, 0);
</script>

<style>:root {
  --swiper-theme-color: #007aff
}

:root {
  --swiper-navigation-size: 44px
}

body:after {
  content: "XXS";
  display: none
}

@media only screen and (min-width: 375px) {
  body:after {
    content: "XS"
  }
}

@media only screen and (min-width: 440px) {
  body:after {
    content: "S"
  }
}

@media only screen and (min-width: 576px) {
  body:after {
    content: "M"
  }
}

@media only screen and (min-width: 768px) {
  body:after {
    content: "L"
  }
}

@media only screen and (min-width: 1024px) {
  body:after {
    content: "XL"
  }
}

img {
  background: transparent none;
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0
}

img {
  max-width: 100%;
  height: auto
}

@font-face {
  font-family: DB Screen Sans;
  src: url(/assets/fonts/DBScreenSans-Regular.woff2) format("woff2"), url(/assets/fonts/DBScreenSans-Regular.woff) format("woff");
  font-style: normal;
  font-weight: 400
}

@font-face {
  font-family: DB Screen Sans;
  src: url(/assets/fonts/DBScreenSans-Bold.woff2) format("woff2"), url(/assets/fonts/DBScreenSans-Bold.woff) format("woff");
  font-style: normal;
  font-weight: 700
}

html {
  height: 100vh;
  font-size: 16px;
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none
}

div, figure, main {
  background: transparent none;
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0
}

article, body, footer, h1, section {
  background: transparent none;
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0
}

body {
  font-family: DB Screen Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  background-color: #f0f3f5;
  color: #282d37;
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: fixed;
  width: 100%
}

h1:focus {
  outline: none
}

a, span {
  background: transparent none;
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0
}

a {
  color: #000;
  text-decoration: none
}

.a11y-visually-hidden {
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  width: 1px;
  white-space: nowrap
}

.db-page {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%
}

.page-main {
  flex: 1 0 auto;
  order: 2;
  position: relative
}

@media only screen and (min-width: 768px) {
  .page-error {
    margin-left: 40px;
    margin-right: 40px
  }
}

@media only screen and (min-width: 1024px) {
  .page-error {
    margin-left: 64px;
    margin-right: 64px
  }
}

@media only screen and (min-width: 1328px) {
  .page-error {
    margin-left: auto;
    margin-right: auto;
    width: 1200px
  }
}

.db-footer.page-footer {
  margin-left: 16px;
  margin-right: 16px;
  flex: 0 0 auto;
  margin-top: 2rem;
  order: 4
}

@media only screen and (min-width: 375px) {
  .db-footer.page-footer {
    margin-left: 16px;
    margin-right: 16px
  }
}

@media only screen and (min-width: 440px) {
  .db-footer.page-footer {
    margin-left: 20px;
    margin-right: 20px
  }
}

@media only screen and (min-width: 576px) {
  .db-footer.page-footer {
    margin-left: 20px;
    margin-right: 20px
  }
}

@media only screen and (min-width: 768px) {
  .db-footer.page-footer {
    margin-left: 40px;
    margin-right: 40px
  }
}

@media only screen and (min-width: 1024px) {
  .db-footer.page-footer {
    margin-left: 64px;
    margin-right: 64px
  }
}

@media only screen and (min-width: 1328px) {
  .db-footer.page-footer {
    margin-left: auto;
    margin-right: auto;
    width: 1200px
  }
}

.pageType-ErrorPage .page-main {
  background-color: #fff
}

.pageType-ErrorPage .db-footer.page-footer {
  grid-template-areas:"logo		logo		.			.			navButtons	navButtons	navButtons	navButtons	navButtons	navButtons	navButtons	navButtons" "navList	navList		navList		navList		navList		navList		navList		navList		navList		navList		navList		navList"
}

.app-root {
  display: flex;
  flex-flow: column;
  height: 100%;
  overflow: hidden
}

.app-content {
  flex: 1;
  order: 2;
  overflow-y: hidden;
  position: relative;
  z-index: 1
}</style>
<link rel="stylesheet" href="styles.4c560bd224f0e81d.css" media="print" onload="this.media=&apos;all&apos;">
