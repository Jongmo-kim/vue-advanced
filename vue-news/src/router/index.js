import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect : '/news',
        },
        {
            //path : url 주소
            path: '/news',
            //component: url 주소로 갔을떄 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/user',
            component: UserView,
        },
    ]
});