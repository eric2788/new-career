<template>
    <v-carousel cycle show-arrows-on-hover hide-delimiter-background>
        <v-carousel-item v-for="(item,i) in items" :key="i">
            <v-parallax :src="item.img" :alt="`img-${i}`" :to="item.link" max-height="100%">
                <v-container class="justify-center align-center">
                    <v-row class="display-3">{{item.title}}</v-row>
                    <v-row class="headline pt-1">{{item.subtitle || ''}}</v-row>
                </v-container>
            </v-parallax>
        </v-carousel-item>
    </v-carousel>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";

    interface SlideItem {
        title: string,
        subtitle?: string,
        link?: string,
        img: string
    }

    @Component
    export default class Carousel extends Vue {
        private items: Array<SlideItem> = [];

        mounted() {
            fetch('/json/carousel.json').then(r => r.json()).then((d: Array<SlideItem>) => this.items = d).catch(r => console.error((r as Error).message))
        }
    }
</script>

<style scoped>

</style>
