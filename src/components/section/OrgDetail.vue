<template>
    <v-content class="grey pa-5">
        <v-container fluid class="white--text">
            <v-layout :class="`text-md-center ${$store.state.layout}`">
                <v-flex class="pa-3" xs3 v-for="(d, i) in details" :key="i">
                    <h1>{{d.title}}</h1>
                    <span>{{d.sub}}</span>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";
    interface SubDetail{
        title: string,
        sub: string
    }
    @Component
    export default class Details extends Vue{
        private details: Array<SubDetail> = [];
        mounted(){
            fetch('/json/details.json').then(r=>r.json()).then((d: Array<SubDetail>)=>this.details = d).catch(r=>console.error((r as Error).message));
        }
    }
</script>

<style scoped>

</style>
