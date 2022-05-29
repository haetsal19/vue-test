<template>
  <div id="app">
    <Header />
    <!-- //아래는 라우팅을 할 수 있도록 라우터가 들어갈 곳 
    //라우터를 이용해 path가 바뀔 때마다 해당하는 컴포넌트를 불러와 router-view 이 부분만 재로딩하는 방식 
    //상단의 메뉴를 클릭할 때마다 "content" 영역이 Home 또는 About이 나오도록 
    //router.js파일에서 라우터를 정의하고 router-view안에 그 컴포넌트를 불러와 로딩시킴 
    //전체 페이지는 가만히 있는 상태에서 이 부분만 페이지 컴포넌트를 가져와 바뀌게 됨  -->
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style></style>
