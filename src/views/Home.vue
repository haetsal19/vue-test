<template>
  <div>
    <h1>Welcome to {{ title }}!</h1>
    <!-- title 데이터가 html 엘리먼트 안에 바인딩 됨 -->
    <input type="text" v-model="input1" />
    <!-- vue.js에서 html엘리먼트의 value에 해당하는 부분은 v-model을 이용해 데이터 바인딩 처리 -->
    <!-- two-way 바인딩 방식임 -> 화면에서 사용자가 input의 value값을 바꾸면 동시에   cf)one-way:단방향으로 데이터를 넣어주면 끝남  -->
    <button type="button" @click="getData">Get</button>
    <!-- vue.js에서는 onclick이 아닌 @click 으로 이벤트 바인딩  -->
    <button type="button" @click="setData">Set</button>

    <select class="form-control" v-model="region" @change="changeRegion">
      <option :key="i" :value="d.v" v-for="(d, i) in options">{{ d.t }}</option>
      <!-- 배열형태의 데이터를 처리할 때는 v-for이용 -->
      <!--v-for를 통해 options라는 배열형식 데이터에 접근해 for문을 돌리면서 
       요소 하나하나마다 순차적으로 데이터와 인덱스를 가져옴 -->
      <!-- html코드안에서 데이터에 접근할 때는 {{data}} 형식을 따르고, 
       엘리먼트 안의 attribute에서 적용할 때는 :(콜론)을 사용하여 데이터 변수에 접근함 :value="d.v" -->
    </select>

    <!-- <table class="table table-bordered" v-if="tableShow" > -->
    <!-- v-if 조건이 만족되면 현재 엘리먼트를 렌더링 하겠다는 속성 -->
    <table class="table table-bordered" v-show="tableShow">
      <!-- v-show는 조건의 만족여부에 상관없이 무조건 렌더링을 하지만, 스타일을 통해 단지 화면에 보이지 않게할 뿐 
    display:none, visivility:hid 같은 개념 
    v-if는 조건이 만족하지 않으면 렌더링조차 하지 않음
    화면에서 무언가 보였다 안보였다를 자주해야할 때 v-if를 사용할 경우 
    렌더링과 렌더링자체를 삭제하는 행위에 리소스가 많이 낭비됨 
    따라서 화면에 보이고안보이고를 자주하는 경우 v-show를 사용이 유리함 
    반대로, 특정 조건에 이르렀을 때만 화면에 보여 사용자가 그 액션을 할 지 안할지 모를 때 
    v-if를 통해 일단 렌더링을 하지 않는 게 초기렌더링 시 리소스를 아낄 수 있음  -->

      <tr :key="i" v-for="(d, i) in options">
        <td>{{ d.v }}</td>
        <td>{{ d.t }}</td>
      </tr>
    </table>
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
      region: "B",
      tableShow: false,
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
    changeRegion() {
      alert(this.region);
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
