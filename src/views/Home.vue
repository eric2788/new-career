<template>
    <v-content class="pa-0 ma-0">
        <BackGround img="https://career.hypernology.com/img/3dev.jpg" subtitle="爲網絡及Minecraft而開的組織"
                    title="HyperNitePo."></BackGround>
        <Carousel id="carousel"></Carousel>
        <OrgDetail id="detail"></OrgDetail>
        <Departs id="departs"></Departs>
        <Recruitment id="recruit"></Recruitment>
        <Applier id="apply"></Applier>
        <Supplier id="support"></Supplier>
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

    }

</script>
