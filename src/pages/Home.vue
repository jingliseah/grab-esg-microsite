<template>
    <div>
        <PillarIntro></PillarIntro>
        <PillarOne></PillarOne>
        <PillarTwo></PillarTwo>
        <PillarThree></PillarThree>
        <PillarFour></PillarFour>
        <PillarLast></PillarLast>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '@/store/index';
import PillarIntro from '@/components/PillarIntro/Index.vue';
import PillarOne from '@/components/PillarOne/Index.vue';
import PillarTwo from '@/components/PillarTwo/Index.vue';
import PillarThree from '@/components/PillarThree/Index.vue';
import PillarFour from '@/components/PillarFour/Index.vue';
import PillarLast from '@/components/PillarLast/Index.vue';

export default {
    components: {
        PillarIntro,
        PillarOne,
        PillarTwo,
        PillarThree,
        PillarFour,
        PillarLast,
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>
