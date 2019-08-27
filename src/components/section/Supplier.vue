<template>

        <v-content class="background" style="min-height: 400px">
            <v-layout column align-center>
                <h3 class="headline white--text">我們如何支援有需要的員工?</h3>
                <v-container class="pa-3 justify-center" style="max-width: 170vh">
                    <v-expansion-panels dark focusable accordion v-for="(ss, i) in supports" :key="i" style="opacity: 0.9">
                        <v-expansion-panel class="ma-1" active-class="grey darken-4">
                            <v-expansion-panel-header ripple class="font-weight-bold title">
                                <div slot-scope="{icon}">
                                    <v-icon left>{{`mdi-${ss.icon}`}}</v-icon>{{ss.title}}
                                </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="subtitle-1">
                                <v-row justify="start" class="ma-4">
                                    {{ss.sub}}
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-container>
            </v-layout>
        </v-content>

</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";

    interface Support{
        title: string,
        sub: string
        icon: string
    }
    @Component
    export default class Supplier extends Vue{
        private supports: Array<Support> = [];
        mounted(){
            fetch('/json/support.json').then(r=>r.json()).then((d: Array<Support>)=> this.supports = d).catch(r=>console.error((r as Error).message));
        }
    }
</script>

<style scoped>
    .background{
        background-image: url("https://images.pexels.com/photos/7477/night-trees-stars.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
