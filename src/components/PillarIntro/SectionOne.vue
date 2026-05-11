<template>
    <div class="thumbnail full section-1">
        <div class="relative h-screen lg:h-full">
            <!-- <Transition @enter="onEnterOverlay"> -->
            <!-- v-if="data.startOverlay" -->
            <div class="overlay bg-black absolute w-screen h-screen z-40"></div>
            <!-- </Transition> -->

            <!-- <Transition @before-enter="onBeforeEnterVideo" @enter="onEnterVideo"> -->
            <!-- v-if="data.startVideo" -->
            <div class="video-container w-full inline-block">
                <div
                    class="absolute w-[100vw] h-[100vh] top-0 left-0 bg-black/20 z-10"
                ></div>
                <video
                    playsinline
                    autoplay
                    muted
                    loop
                    id="myVideo"
                    class="absolute h-[100vh] w-full object-cover top-0 left-0"
                >
                    <source src="/video/main-video.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <!-- </Transition> -->
            <div
                class="absolute h-full w-full text-left p-8 lg:px-64 flex flex-col justify-center z-50"
            >
                <div class="overflow-hidden lg:ml-20">
                    <!-- <Transition
                    appear
                    name="list"
                    tag="div"
                    @before-enter="onBeforeEnterTitle"
                    @enter="onEnterTitle"
                > -->
                    <h1
                        class="title-description font-black text-[3rem] lg:text-[7.143rem] lg:mt-40 min-h-full leading-tight"
                    >
                        Millions of <br class="hidden lg:block" />
                        New Beginnings
                    </h1>
                    <!-- </Transition> -->
                </div>

                <div class="overflow-hidden lg:ml-20">
                    <!-- <Transition
                    appear
                    name="list"
                    tag="div"
                    @before-enter="onBeforeEnterDescription"
                    @enter="onEnterDescription"
                > -->
                    <!-- v-if="data.startDescription" -->
                    <p
                        class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter']"
                    >
                        Grab’s Environmental, Social, and Governance Report 2021
                    </p>
                    <!-- </Transition> -->
                </div>
            </div>
            <!-- <Transition
            @before-enter="onBeforeEnterScrollToBegin"
            @enter="onEnterScrollToBegin"
        > -->
            <!-- v-if="data.startScrollToBegin" -->
            <ScrollToBegin></ScrollToBegin>
            <!-- </Transition> -->
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToBegin from '../ScrollToBegin.vue';
import { reactive, computed } from '@vue/runtime-core';
import store from '@/store/index';

export default {
    data() {
        return {};
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let titleDescription = document.querySelectorAll(
                '#pillar-intro .section-1 .title-description'
            );

            let overlay = document.querySelectorAll(
                '#pillar-intro .section-1 .overlay'
            );

            let videoContainer = document.querySelectorAll(
                '#pillar-intro .section-1 .video-container'
            );

            let scrollToBegin = document.querySelectorAll(
                '#pillar-intro .section-1 .scroll-to-begin'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-intro .section-1')
            );
            let timeline = gsap.timeline({
                // scrollTrigger: {
                //     scrub: false,
                //     start: 'top top',
                //     trigger: '#pillar-intro .section-1',

                //     markers: store.state.markers,
                //     id: 'section-1',
                //     toggleActions: store.getters.animationDesktopReverse(),
                // },
                defaults: { ease: 'expo.out' },
            });
            timeline
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.7,
                        delay: 2.1,
                        stagger: 0.05,
                    }
                )
                .to(overlay, {
                    y: '-100%',
                })
                .fromTo(
                    scrollToBegin,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: 0.7,
                    }
                );
        },
    },
    setup() {
        const data = reactive({
            startDescription: false,
            startOverlay: false,
            startVideo: false,
            startScrollToBegin: false,
        });

        const state = computed(() => store.state);

        // Title
        const onBeforeEnterTitle = (el) => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(100px)';
        };
        const onEnterTitle = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.2,
                delay: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    data.startDescription = true;
                },
            });
        };

        // Description
        const onBeforeEnterDescription = (el) => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(100px)';
        };

        const onEnterDescription = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.2,
                ease: 'power2.out',
                onComplete: () => {
                    data.startOverlay = true;
                    data.startVideo = true;
                    data.startScrollToBegin = true;
                },
            });
        };

        // Overlay
        const onBeforeEnterOverlay = (el, done) => {
            el.style.transform = 'translateY(0)';
        };

        const onEnterOverlay = (el, done) => {
            gsap.to(el, {
                y: '-100%',
                ease: 'power2.out',
            });
        };

        // Video
        const onBeforeEnterVideo = (el, done) => {
            el.style.opacity = 0;
        };

        const onEnterVideo = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                duration: 0.2,
            });
        };

        // ScrollToBegin
        const onBeforeEnterScrollToBegin = (el, done) => {
            // console.log('', el);
            el.style.opacity = 0;
        };

        const onEnterScrollToBegin = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                duration: 0.2,
                delay: 1,
            });
        };

        return {
            state,
            data,
            onBeforeEnterTitle,
            onEnterTitle,
            onBeforeEnterDescription,
            onEnterDescription,
            onBeforeEnterOverlay,
            onEnterOverlay,
            onBeforeEnterVideo,
            onEnterVideo,
            onBeforeEnterScrollToBegin,
            onEnterScrollToBegin,
        };
    },
    components: { ScrollToBegin },
};
</script>
