<template>
    <v-content dark class="pa-0 grey darken-4">
            <v-container fluid class="justify-center" grid-list-md>
                <v-layout :class="$store.state.layout">
                    <v-flex xs4 class="pa-3" v-for="(r, i) in recruits" :key="i">
                        <v-card id="card" :img="r.img" :alt="`img-${i}`" hover dark @click="openUrl(r.pdf)">
                            <v-card-title class="headline font-weight-medium">{{r.title}}</v-card-title>
                            <v-card-text>
                                {{r.subtitle}}
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
    </v-content>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";

    interface Recruit {
        title: string,
        subtitle: string,
        pdf: string
        img: string
    }

    @Component
    export default class Recruitment extends Vue {
        private recruits: Array<Recruit> = [];

        mounted() {
            fetch('/json/recruit.json').then(r => r.json()).then((d: Array<Recruit>) => this.recruits = d).catch(r => console.error((r as Error).message));
        }

        private openUrl(pdf: string) {
            window.open(pdf, '1486564993146', 'width=900,height=500,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=0,top=0')
        }
    }
</script>

<style scoped>
    #card{
        background-position: top;
    }
</style>
