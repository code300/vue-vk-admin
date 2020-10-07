import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "../layout/index.vue";
import Login from "../views/login/index.vue";
import Home from "../views/home/index.vue";
import LoanApply from "../views/loanApply/index.vue";
import FirstApprove from "../views/loanApprove/firstApprove/index.vue";
import EndApprove from "../views/loanApprove/endApprove/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/loanApply",
    name: "loanApply",
    component: LoanApply,
  },
  {
    path: "/loanApprove",
    name: "loanApprove",
    component: Layout,
    children: [
      {
        path: "/firstApprove",
        name: "firstApprove",
        component: FirstApprove,
      },
      {
        path: "/endApprove",
        name: "endApprove",
        component: EndApprove,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
