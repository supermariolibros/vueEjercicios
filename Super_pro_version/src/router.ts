import Vue from 'vue';

import Router, { RouteConfig } from 'vue-router';
import {MemberTable} from './components/memberTable';
import { MemberDetailCard} from './components/memberDetail';


const routes: RouteConfig[] = [
  { path: '/', redirect: '/members' },
  { path: '/members', component: MemberTable },
  {
    path: '/members/:username',
    component: MemberDetailCard,
    props: true
  },
];

// Antes de exportar el router le decimos a Vue que deberá usarlo
Vue.use(Router);

export default new Router({
  routes,
});
