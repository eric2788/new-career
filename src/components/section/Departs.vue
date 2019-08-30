<template>
    <v-content class="grey darken-2" id="background">
            <v-layout align-center column>
                <h3 class="display-1 white--text">本組織的工作範疇</h3>
                <v-divider dark style="margin: 10px 40%"></v-divider>
                <v-container grid-list-md pa-10>
                    <v-layout :class="$store.state.layout">
                        <v-flex xs4 v-for="(depart, i) in departs" :key="i">
                            <v-hover close-delay="100" open-delay="30" v-slot="{hover}">
                                <v-card id="card" hover :dark="!hover" class="pa-1" min-height="120px">
                                    <v-layout row class="align-md-end">
                                        <v-flex xs2>
                                            <v-icon medium class="transparent pa-5">{{`mdi-${depart.icon}`}}</v-icon>
                                        </v-flex>
                                        <v-flex xs10>
                                            <h3 class="heading font-weight-medium">{{depart.name}}</h3>
                                            <span class="body-2">{{depart.sub}}</span>
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                            </v-hover>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-layout>
    </v-content>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";


    @Component
    export default class Departs extends Vue {
        private departs: Array<Depart> = [];

        mounted() {
            fetch('/json/departments.json').then(r => r.json()).then((d: Array<Depart>) => this.departs = d).catch(r => console.error((r as Error).message));
        }

    }
</script>

<style scoped>
    #card {
        transition: all .3s ease-in-out;
    }
    #background {
        background-image: url("https://career.hypernology.com/img/3dev.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
