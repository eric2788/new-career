<template>
    <v-content>
        <v-container fluid grid-list-md>
            <v-layout align-center column>
                <h3 class="display-2">Hello World</h3>
                <v-flex xs8>
                    <v-card dark width="100vh">
                        <v-card-title class="headline">HEY MAN</v-card-title>
                        <v-card-text>
                            Let's have a party fuck you !
                        </v-card-text>
                    </v-card>
                </v-flex>
                <Child :name.sync="name"></Child>
                <h2 class="headline">{{name}}</h2>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";
    import Child from "@/components/Child.vue";

    @Component({
        components: {Child}
    })
    export default class Apply extends Vue{
        private name: string = "none";
    }
</script>

<style scoped>

</style>
