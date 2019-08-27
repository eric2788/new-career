<template>
    <v-content class="pa-0">
        <v-img id="full" :src="_img" dark height="100%">
            <v-layout class="column justify-center align-center white--text font-weight-light">
                <v-row class="display-4 mb-3">{{_title}}</v-row>
                <v-row class="display-1">{{_subtitle}}</v-row>
            </v-layout>
        </v-img>
    </v-content>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import Vue from "vue";
    import {Prop} from "vue-property-decorator";

    @Component
    export default class BackGround extends Vue {
        @Prop({required: true}) private img!: string;
        @Prop({required: true}) private title!: string;
        @Prop({required: true}) private subtitle!: string;

        get _img(): string {
            return this.img;
        }

        get _title(): string {
            return this.title;
        }

        get _subtitle(): string {
            return this.subtitle;
        }
    }

</script>

<style scoped>
#full{
    min-height: 100vh;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
}
</style>
