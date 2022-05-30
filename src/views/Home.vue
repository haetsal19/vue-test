<template>
  <div>
    <h1>Welcome to {{ title }}!</h1>
    <!-- title 데이터가 html 엘리먼트 안에 바인딩 됨 -->
    <input type="text" v-model="input1" />
    <!-- vue.js에서 html엘리먼트의 value에 해당하는 부분은 v-model을 이용해 데이터를 바인딩하고 처리할 수 있음 -->
    <!-- two-way 바인딩 방식임 -> 화면에서 사용자가 input의 value값을 바꾸면 동시에   cf)one-way:단방향으로 데이터를 넣어주면 끝남  -->
    <button type="button" @click="getData">Get</button>
    <!-- vue.js에서는 onclick이 아닌 @click 으로 이벤트 바인딩  -->
    <button type="button" @click="setData">Set</button>

    <select class="form-control">
      <option :key="i" :value="d.v" v-for="(d, i) in options">{{ d.t }}</option>
      <!--v-for를 통해 options라는 배열형식 데이터에 접근해 for문을 돌리면서 
       요소 하나하나마다 순차적으로 데이터와 인덱스를 가져옴 -->
    </select>
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
      options: [
        { v: "S", t: "Seoul" },
        { v: "J", t: "Jeju" },
        { v: "B", t: "Busan" },
      ],
    };
  },
  watch: {
    //특정 데이터가 바뀌는지 계속 모니터링하여
    //해당 데이터가 변경되었을 때 캐치하여 사용할 수 있음
    input1() {
      //선언한 데이터 변수와 동일한 이름의 메서드로 정의해줌
      console.log(this.input1);
    },
  },
  methods: {
    // vue.js에서 모든 메소드는 이곳에 정의함
    getData() {
      alert(this.input1);
      // 메소드 안에서 데이터에 접근할때는 this라는 객체를 같이 이용해줘야 함
    },
    setData() {
      this.input1 = "12345";
    },
  },

  // 뷰인스턴스에 대한 라이프사이클

  //화면이 열린 순간 바로 보여줄 데이터가 있다면 마운트전에 created나 beforeCreated에서 DB콜하여
  //데이터를 미리 가져와 바인딩해두는게 좋음
  //이미 마운트 되고난 후 DB콜하여 데이터를 가져오면 데이터 변형이 일어나므로
  //beforeUpdate, update가 작동해 불필요한 재렌더링이 일어남
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },

  // 데이터가 변형되는 순간에 어떤 코드를 적용하고 싶을 때 -> beforeUpdate, updated
  beforeUpdate() {
    console.log("beforeUpdate"); //데이터 변경전
  },
  updated() {
    console.log("updated"); //데이터 변경후
  },
  beforeDestroy() {
    console.log("beforeCreate");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
