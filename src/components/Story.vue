<template>
    <div
        class="relative lg:h-full bg-blue-light"
        :class="noModal ? 'h-full' : 'h-screen'"
    >
        <div class="relative h-full lg:hs-creen bg-blue-light">
            <div
                class="relative lg:absolute w-full h-auto lg:w-auto lg:h-full left-0 z-10"
            >
                <img
                    class="img-background hidden lg:block h-screen w-screen object-cover pl-3"
                    src="/images/pillar-1/light-blue-overlay-desktop.png"
                    alt="image"
                />

                <div
                    class="relative z-10 lg:absolute space-y-14 lg:space-y-20 top-0 px-8 pt-24 lg:pl-64 lg:pr-40 h-full lg:w-[55vw] bg-no-repeat bg-center bg-cover"
                    :class="
                        noModal
                            ? `bg-[url('/images/pillar-intro/blue-overlay-mobile.png')] lg:bg-[url('')] `
                            : ``
                    "
                >
                    <div>
                        <h1
                            class="title-description font-bold text-[1.714rem] lg:text-[3.429rem] text-green leading-tight"
                        >
                            {{ title }}
                        </h1>
                        <p
                            class="title-description text-gray z-10 text-[1.143rem] lg:text-[1.714rem] mt-6 font-['Inter'] leading-tight"
                        >
                            <span
                                v-safe-html="
                                    description ? description : descriptionHtml
                                "
                            ></span>
                        </p>
                    </div>
                    <div>
                        <p
                            v-if="!noModal"
                            @click="setModalContent()"
                            class="title-description text-gray hover:text-green transition duration-300 ease-in-out z-10 text-[1.143rem] lg:text-[1.714rem] mt-6 font-bold border-b-2 inline tracking-wider cursor-pointer"
                        >
                            Read more
                        </p>
                        <!-- <Share
                            :class="noModal && ' pb-40 lg:pb-0'"
                            :socials="socials"
                        ></Share> -->
                    </div>
                </div>
            </div>

            <div
                class="hidden lg:block absolute w-full h-auto lg:w-[60vw] lg:h-screen bottom-0 lg:left-1/2 z-10 light-blue-fade"
            ></div>
            
            <img
                class="img-background hidden lg:block absolute w-full h-auto lg:w-[50vw] lg:h-full bottom-0 lg:right-0 object-cover"
                :src="image"
                alt="image"
            />

            <img
                v-if="noModal"
                class="img-background lg:hidden relative lg:absolute w-full h-auto lg:w-auto lg:h-full bottom-0 lg:right-0 -mt-[14rem]"
                :src="mobileImage"
                alt="image"
            />
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import Share from './Share.vue';
import store from '../store/index';

export default {
    props: {
        title: {
            type: String,
            default: 'Title',
        },
        description: {
            type: String,
            default: '',
        },
        descriptionHtml: {
            type: String,
            default: '',
        },
        socials: {
            type: Object,
            default: null,
        },
        modalContentTitle: {
            type: String,
            default: '',
        },
        modalContentDescription: {
            type: String,
            default: '',
        },
        image: String,
        modalDesktopImage: String,
        modalMobileImage: String,
        mobileImage: String,
        noModal: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        setModalContent() {
            store.state.storyModal = true
            store.state.storyModalContent.title = this.modalContentTitle
            store.state.storyModalContent.description = this.modalContentDescription
            store.state.storyModalContent.desktopImage = this.modalDesktopImage
                ? this.modalDesktopImage
                : this.image;
            store.state.storyModalContent.mobileImage = this.modalMobileImage
                ? this.modalMobileImage
                : this.modalDesktopImage;
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
    components: { Share },
};
</script>
