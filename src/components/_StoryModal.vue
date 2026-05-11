<template>
    <Transition name="fade">
        <div
            v-if="open"
            class="fixed h-screen overflow-auto w-screen bg-blue-light top-0 left-0 z-[999] p-8 pb-28 pr-20 pt-24 lg:p-28"
        >
            <div
                @click="closeModal()"
                class="fixed top-0 right-0 bg-green border-green border-l-2 border-b-2 hover:bg-white hover:text-green space-y-1 lg:space-y-2 w-16 h-16 lg:w-28 lg:h-28 flex flex-col justify-center items-center text-white cursor-pointer hover:opacity-80 transition ease-in-out duration-300"
            >
                <div>
                    <SvgIcon
                        class="stroke-0 h-[1.286rem] w-[1.286rem] lg:h-[2.857rem] lg:w-[2.857rem]"
                        name="close"
                    ></SvgIcon>
                </div>
                <span
                    class="text-[0.857rem] lg:text-[1.143rem] font-bold leading-none"
                    >Close</span
                >
            </div>
            <div
                class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-0"
            >
                <div>
                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-bold text-[1.714rem] lg:text-[3.429rem] text-green leading-tight mt-6 lg:mt-0"
                            v-safe-html="title"
                        ></h1>
                    </div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-gray mt-6 lg:mt-8"
                            v-safe-html="description"
                        ></p>
                    </div>
                    <!-- <div>
                        <Share
                            :socials="state.storyModalContent.socials"
                        ></Share>
                    </div> -->
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        :src="desktopImage"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        :src="mobileImage"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import { computed } from '@vue/runtime-core';
import Share from './Share.vue';
import store from '../store/index';
import SvgIcon from './SvgIcon.vue';

export default {
    data() {
        return {
            open: false,
        };
    },
    props: {
        title: {
            type: String,
            default: 'Title',
        },
        description: {
            type: String,
            default: 'Description',
        },
        desktopImg: String,
        mobileImg: String,
    },
    methods: {
        closeModal() {
        this.open = false;
        },
        openModal() {
        this.open = true;
        }
    },
    mounted() {},
    computed: {},
    setup() {
        const state = computed(() => store.state);

        return {
            state,
        };
    },
    components: { Share, SvgIcon },
};
</script>
