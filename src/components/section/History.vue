<template>
    <v-content :class="_color || ''">
        <v-layout align-center column>
            <h3 class="display-2 text-xs-center mb-3">我們的歷史</h3>
            <v-divider style="margin: 10px 40%"></v-divider>
            <v-progress-circular indeterminate v-if="historyLine.length === 0"></v-progress-circular>
            <v-timeline v-else :dense="$vuetify.breakpoint.mdAndDown" align-top class="pl-5 pr-5 ml-5 mr-5">
                <v-timeline-item :color="his.color" :fill-dot="his.fillDot" :icon="`mdi-${his.icon}`"
                                 :key="i" :large="!his.smallDot"
                                 v-for="(his,i) in historyLine">
                    <h1 slot="opposite">{{his.year}}</h1>
                    <v-card>
                        <v-card-title class="headline black white--text">{{his.title}}</v-card-title>
                        <v-card-text class="body-2" v-html="his.content.join('\n')"></v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-layout>
    </v-content>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import Vue from "vue";
    import {Prop} from "vue-property-decorator";

    interface HistoryRecord {
        year: string,
        title: string,
        content: string[],
        icon: string,
        fillDot: boolean,
        smallDot: boolean
    }

    @Component
    export default class History extends Vue {
        @Prop() private color!: string;
        private historyLine: Array<HistoryRecord> = [];


        get _color(): string | undefined {
            return this.color;
        }

        mounted() {
            fetch('/json/history.json').then(r => r.json()).then((d: Array<HistoryRecord>) => {
                console.log(d.length);
                this.historyLine = d;
            }).catch(r => console.error((r as Error).message));
        }
    }


</script>

<style scoped>

</style>
