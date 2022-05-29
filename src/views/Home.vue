<template>
  <div>
    <h1>Welcome to {{ title }}!</h1>
    <!-- title 데이터가 html 엘리먼트 안에 바인딩 됨 -->
    <input type="text" v-model="input1" />
    <!-- vue.js에서 html엘리먼트의 value에 해당하는 부분은 v-model을 이용해 데이터를 바인딩하고 처리할 수 있음 -->
    two-way 바인딩 방식임 -> 화면에서 사용자가 input의 value값을 바꾸면 동시에   cf)one-way:단방향으로 데이터를 넣어주면 끝남 
    화면에서 사용자가 input의 value값을 바꾸면 
    <button type="button"> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 이곳에 컨트롤하고 싶은 데이터를 변수로 정해 사용하면 됨
      // data() 메서드에 정의된 데이터 변수들을 {{dataName}} 형식으로 html 안에 넣어서 쓸 수 있는 구조
      title: "개발자의 품격",
      title2: "Seoul",
      input1: "abcd",
    };
  },
};
</script>
