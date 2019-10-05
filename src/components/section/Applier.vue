<template>
    <v-content class="grey lighten-2 pa-0">
        <v-parallax style="margin-left: -10px" height="350" src="https://art.pixilart.com/354f52a5f5a6ea3.gif">
            <v-row justify="center" class="align-content-center">
                <h3 class="display-1">你準備好加入我們了嗎?</h3>
            </v-row>
            <v-row justify="center" class="align-content-center">
                <v-btn @click="$emit('apply')" color="error" rounded x-large>申請職位</v-btn>
            </v-row>
        </v-parallax>
    </v-content>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";

    @Component
    export default class Applier extends Vue{

    }
</script>

<style scoped>

</style>
