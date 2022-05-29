import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter); //라우터 사용선언


//라우터 정의 
const router = new VueRouter({
    mode: "history", //나중에 설명
    routes: [
        {
            path: "/", //url path에 따라 어떤 컴포넌트를 로딩해줄지 정의 
            component: Home
        },
        {
            path: "/about",
            component: About
        }
    ]
})

export default router;