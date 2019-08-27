<template>
    <v-app class="grey lighten-3" v-scroll="onScroll">
        <v-navigation-drawer app fixed mobile-break-point="md" temporary :value="show">
            <v-toolbar flat floating>
                <v-list>
                    <v-list-item>
                        <v-list-item-title class="title">
                            導航
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list dense>
                <v-list-item v-for="(sec, index) in homeSections" :key="index" @click="()=> {jump(sec.id); show = false;}">
                    <v-list-item-action>
                        <v-icon>{{`mdi-${sec.icon}`}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-action-text>
                        {{sec.title}}
                    </v-list-item-action-text>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar floating app dark>
            <v-app-bar-nav-icon v-show="$vuetify.breakpoint.mdAndDown" @click="show = !show"><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
            <v-img alt="HyperNite" max-height="40px" max-width="90px" src="@/assets/headlogo/HNlogo.png"></v-img>
            <div class="flex-grow-1"></div>
            <v-menu offset-y open-on-hover>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on=" on " tile v-show="!$vuetify.breakpoint.mdAndDown">
                        <v-icon dark left small>mdi-redo-variant</v-icon>
                        跳轉到...
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(sec, index) in homeSections" :key="index" @click="jump(sec.id)">
                        <v-list-item-subtitle>
                            <v-icon small class="pr-1">{{`mdi-${sec.icon}`}}</v-icon>{{ sec.title }}
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-scale-transition>
            <v-btn v-show="height > 500" color="error" fab bottom right fixed dark @click="$vuetify.goTo(0, {
                        duration: 2000,
                        easing: 'easeInOutCubic'
                    })">
                <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
        </v-scale-transition>
        <router-view />
    </v-app>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import Vue from "vue";
    import {Watch} from "vue-property-decorator";
    import {jumpInto, Sections} from "@/ts/sections";

    interface Item {
        title: string,
        id: Sections
        icon: string
    }

    @Component
    export default class App extends Vue {
        private height: number = 0;
        private show: boolean = false;

        get isMobile(): boolean {
            return this.$vuetify.breakpoint.mdAndDown;
        }

        private onScroll(e: UIEvent){
            this.height = e.view.pageYOffset;
        }

        private readonly homeSections: Array<Item> = [
            {
                title: '何以選擇',
                id: 'carousel',
                icon: 'help-box'
            },
            {
                title: '數據統計',
                id: 'detail',
                icon: 'airplay'
            },
            {
                title: '工作範疇',
                id: 'departs',
                icon: 'briefcase '
            },
            {
                title: '招生公告',
                id: 'recruit',
                icon: 'bullhorn'
            },
            {
                title: '加入申請',
                id: 'apply',
                icon: 'account-multiple-plus'
            },
            {
                title: '組織支援',
                id: 'support',
                icon: 'account-group'
            },
        ];

        @Watch('isMobile', {deep: true})
        onMobileChanged() {
            console.log(`mobile is now ${this.isMobile}`);
            this.$store.commit('setMobile', this.isMobile);
            this.$store.commit('setLayout', this.isMobile ? 'column' : 'row wrap');
        }

        public jump(id: Sections) {
            jumpInto(id);
        }
    }
</script>

<style>
    * {
        font-family: "Microsoft JhengHei", sans-serif;
    }
</style>
