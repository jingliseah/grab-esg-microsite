<template>
    <div
        class="thumbnail full fakePin section-19 bg-cover bg-center bg-no-repeat bg-[url('/images/pillar-1/section-1/social-background-img-mobile.jpg')] lg:bg-[url('/images/pillar-1/section-1/social-background-img-desktop.jpg')]"
    >
        <div
            class="relative h-full bg-blue/80 section-container overflow-hidden"
        >
            <div
                class="content flex flex-col h-screen justify-center px-8 pt-24 lg:pl-64 lg:pr-52 lg:py-32 w-screen"
            >
                <div class="flex items-center space-x-4">
                    <p
                        class="text-[1.143rem] lg:text-[1.714rem] font-['Inter']"
                    >
                        Our Impact on The People of Southeast Asia
                    </p>
                    <div class="h-1 w-20 bg-green"></div>
                </div>

                <ul class="space-y-12 lg:space-y-24 mt-20">
                    <li
                        class="font-bold text-[1.714rem] lg:text-[4.571rem] opacity-20 flex lg:items-center space-x-5 lg:space-x-10 leading-tight"
                    >
                        <img
                            class="w-10 lg:w-20"
                            src="/svg/sociol-economic.svg"
                            alt="icon"
                        />
                        <span
                            >Socio-economic <br class="lg:hidden" />impact</span
                        >
                    </li>
                    <li
                        class="font-bold text-[1.714rem] lg:text-[4.571rem] opacity-20 flex lg:items-center space-x-5 lg:space-x-10 leading-tight"
                    >
                        <img
                            class="w-10 lg:w-20"
                            src="/svg/partner-welfare.svg"
                            alt="icon"
                        />
                        <span>Partner’s <br class="lg:hidden" />welfare</span>
                    </li>
                    <li
                        class="selected-topic font-bold text-[1.714rem] lg:text-[4.571rem] flex lg:items-center space-x-5 lg:space-x-10 leading-tight"
                    >
                        <img
                            class="w-10 lg:w-20"
                            src="/svg/people-culture.svg"
                            alt="icon"
                        />
                        <span>People and culture</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '@/store/index';

export default {
    data() {
        return {};
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let container = document.querySelector(
                '#pillar-one .section-19 .section-container'
            );

            let content = document.querySelector(
                '#pillar-one .section-19 .content'
            );

            let selectedTopic = document.querySelector(
                '#pillar-one .section-19 .selected-topic'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-19')
            );

            let timeline = gsap.timeline({
                defaults: { ease: 'power1.out' },
                scrollTrigger: {
                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                    scrub: store.state.mobileView ? false : 4,
                    // start:
                    //     offset[index] -
                    //     (store.state.mobileView
                    //         ? window.innerHeight
                    //         : window.innerWidth),
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth,
                    trigger: '#pillar-one .section-19',
                    markers: store.state.markers,
                    id: 'section-19',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                .fromTo(
                    content,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: store.state.mobileView ? 0.5 : 2,
                        delay: store.state.mobileView ? 0 : 2,
                    }
                )
                .fromTo(
                    selectedTopic,
                    {
                        autoAlpha: 0.2,
                    },
                    {
                        autoAlpha: 1,
                        duration: store.state.mobileView ? 0.5 : 2,
                    }
                )
                .fromTo(
                    selectedTopic,
                    {
                        scale: 1,
                    },
                    {
                        scale: 1.2,
                        transformOrigin: 'left bottom',
                        duration: store.state.mobileView ? 1 : 4,
                        ease: 'power2.out',
                        delay: store.state.mobileView ? 0 : 2,
                    }
                );
        },
    },
    mounted() {},
};
</script>
