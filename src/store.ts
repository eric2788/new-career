import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mobile: false,
        layout: 'row wrap'
    },
    mutations: {
        setMobile(state, bol: boolean){
            state.mobile = bol;
        },
        setLayout(state, cls: string){
            state.layout = cls;
        }
    },
    actions: {},
});
