<template>
    <div>
        <div
            v-if="resize == 1"
            class="flex justify-center items-center w-screen h-screen fixed top-0 bottom-0 left-0 right-0 bg-black/70"
            style="z-index: 9999"
        >
            <SvgIcon
                class="animate-spin stroke-0 text-white"
                name="loading"
            ></SvgIcon>
        </div>
        <div v-else id="pulse-wrapper">
            <div id="pulse">
                <span></span>
                <!-- Wave 1 -->
                <span class="text-white flex justify-center items-center"
                    >loading</span
                >
                <!-- Wave 2 -->
            </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
    data() {
        return {};
    },
    computed: {
        resize() {
            return localStorage.getItem('resize');
        },
    },
    components: { SvgIcon },
};
</script>
