<template>
    <div class="thumbnail full section-1">
        <div class="relative h-full">
            <div class="img-wrapper w-screen h-screen relative overflow-hidden">
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-center bg-cover bg-[url('/images/pillar-2/section-1/environment-background-img-mobile.jpg')] lg:bg-[url('/images/pillar-2/section-1/environment-background-img.jpg')]"
                ></div>
            </div>

            <div
                class="absolute h-full w-full text-left p-8 lg:px-64 py-40 flex flex-col justify-between z-50 top-0"
            >
                <div class="overflow-hidden lg:ml-20">
                    <h1
                        class="title-description font-black text-[3rem] lg:text-[7.143rem] leading-tight"
                    >
                        2
                    </h1>
                </div>

                <div class="lg:ml-20">
                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-black text-[3rem] lg:text-[7.143rem] leading-tight"
                        >
                            Protecting <br />
                            Our Environment
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter']"
                        >
                            Can we mitigate our impact on the environment as we
                            drive Southeast Asia forward?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reactive, computed } from '@vue/runtime-core';
import store from '@/store/index';

export default {
    data() {
        return {};
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-1 .title-description'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-1')
            );

            let timeline = gsap.timeline({
                defaults: { ease: 'power1.out' },
                scrollTrigger: {
                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                    scrub: false,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.2,
                    end: !store.state.mobileView && offset[index] - window.innerWidth * 0.6,
                    trigger: '#pillar-two .section-1',
                    markers: store.state.markers,
                    id: 'section-1',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline.fromTo(
                titleDescription,
                {
                    autoAlpha: 0,
                    y: 50,
                },
                {
                    y: 0,
                    autoAlpha: 1,
stagger: 0.05,
                }
            );
        },
    },
};
</script>
