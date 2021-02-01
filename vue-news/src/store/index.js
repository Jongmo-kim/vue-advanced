import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news: [],
        asks: [],
        user: {},
        askItem : {},
        jobs:[],
    },
    mutations,
    actions,
    getters:{
        fetchedAsk(state){
            return state.asks;
        },
        fetchedAskItem(state){
            return state.askItem;
        }
    }
})