<template>
    <v-flex xs4>
        <v-card dark width="100vh">
            <v-card-title class="headline">{{head}}</v-card-title>
            <v-card-text>
                FUCK OFFFFFFFFFFFFFFF
            </v-card-text>
            <v-card-actions>
                <v-btn @click="next" color="primary" tile>CHANGE</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import Vue from 'vue';
    import {Prop} from "vue-property-decorator";

    @Component
    export default class Child extends Vue {
        private readonly title: string[] = ['HEY MAN', 'HEY FUCK', 'SHITTY GAME', 'RUBBISH', 'ON99'];
        private index: number = 0;
        @Prop({required: true, default: 'none'}) private name!: string;

        next() {
            this.index++;
            if (this.index == this.title.length) {
                this.index = 0;
            }
            const value: string = this.head;
            this.$emit('update:name', value)
        }

        get head() {
            return this.title[this.index];
        }

        mounted() {
            setInterval(() => {
                this.next();
            }, 5000)
        }
    }
</script>

<style scoped>

</style>
