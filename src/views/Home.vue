<template>
    <v-content class="pa-0 ma-0">
        <BackGround img="https://career.hypernology.com/img/3dev.jpg" subtitle="爲網絡及Minecraft而開的組織"
                    title="HyperNitePo."></BackGround>
        <Carousel id="carousel"></Carousel>
        <OrgDetail id="detail"></OrgDetail>
        <Departs id="departs"></Departs>
        <Recruitment id="recruit"></Recruitment>
        <Applier @apply="dialog = true" id="apply"></Applier>
        <Supplier id="support"></Supplier>
        <v-dialog fullscreen hide-overlay transition="dialog-bottom-transition" v-model="dialog">
            <v-card>
                <v-app-bar dark>
                    <v-app-bar-nav-icon @click="dialog = false">
                        <v-icon>mdi-chevron-down-circle</v-icon>
                    </v-app-bar-nav-icon>
                    <span class="title">請選擇你要申請的職位</span>
                </v-app-bar>
                <v-container class="pl-5 pr-5" fluid grid-list-md>
                    <!--v-expansion-panels v-for="(job, index) in jobs" :key="index" multiple popout focusable>
                        <v-expansion-panel class="ma-3">
                            <v-expansion-panel-header :class="`title ${job.color} white--text`">
                                {{job.title}}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row :class="`${$store.state.layout}`" :key="index">
                                    <v-flex class="pa-3" xs3 v-for="(tile, iid) in job.jobs" :key="iid">
                                        <v-card>
                                            <v-img :src="tile.src" max-height="200"></v-img>
                                            <v-card-title>
                                                {{tile.title}}
                                            </v-card-title>
                                            <v-card-actions>
                                                <v-btn block :href="tile.link" color="primary">申請職位</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-flex>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels-->
                    <template v-for="(job, index) in jobs">
                        <v-row :key="index" class="grid-list-md">
                            <v-flex xs12>
                                <v-card class="ma-5">
                                    <v-card-title :class="`${job.color} white--text headline`">
                                        {{job.title}}
                                    </v-card-title>
                                    <v-card-text>
                                        <v-row :class="`${$store.state.layout}`" :key="index">
                                            <v-flex :key="iid" class="pa-3" v-for="(tile, iid) in job.jobs" xs3>
                                                <v-card>
                                                    <v-img :src="tile.src" max-height="200"></v-img>
                                                    <v-card-title>
                                                        {{tile.title}}
                                                    </v-card-title>
                                                    <v-card-actions>
                                                        <v-btn :href="tile.link" block color="primary">申請職位</v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-flex>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-row>
                    </template>
                </v-container>
            </v-card>
        </v-dialog>
    </v-content>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import BackGround from "@/components/BackGround.vue";
    import History from "@/components/section/History.vue";
    import Carousel from "@/components/section/Carousel.vue";
    import OrgDetail from "@/components/section/OrgDetail.vue";
    import Recruitment from "@/components/section/Recruitment.vue";
    import Departs from "@/components/section/Departs.vue";
    import Supplier from "@/components/section/Supplier.vue";
    import Applier from "@/components/section/Applier.vue";

    @Component({
        components: {Applier, Supplier, Departs, Recruitment, OrgDetail, Carousel, History, BackGround}
    })

    export default class Home extends Vue {
        private dialog: boolean = false;
        private jobs: Array<Jobs> = [];

        mounted() {
            fetch('/json/jobs.json').then(r => r.json()).then(data => this.jobs = data).catch(r => console.error((r as Error).message));
        }
    }

</script>
