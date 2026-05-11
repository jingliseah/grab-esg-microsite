<template>
    <div class="thumbnail full section-3">
        <div class="relative h-screen lg:h-full">
            <div class="img-wrapper w-screen h-screen relative overflow-hidden">
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-center bg-cover bg-[url('/images/pillar-2/section-3/environment-petrol-img-mobile.png')] lg:bg-[url('/images/pillar-2/section-3/environment-petrol-img.png')]"
                ></div>
            </div>

            <div
                class="absolute h-full w-full text-left p-8 pb-28 lg:py-32 lg:pl-64 lg:pr-32 flex flex-col lg:justify-end items-start z-50 top-0 left-0"
            >
                <div class="bg-brown-dark/90 title-description-container mt-20 lg:mt-0">
                    <div class="overflow-hidden py-6 lg:py-9 px-8 lg:px-10">
                        <p
                            class="title-description text-[1.429rem] lg:text-[2.286rem] font-['Inter'] font-bold leading-none"
                        >
                            Our target
                        </p>
                        <p
                            class="title-description text-[2.286rem] lg:text-[5.714rem] mt-4 font-bold text-green leading-none"
                        >
                            Carbon neutral <br class="hidden lg:block" />by 2040<sup>15</sup>
                        </p>
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter'] leading-tight"
                        >
                            Our commitment for the future with emission reduction as a top priority
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
import store from '@/store/index';

export default {
    data() {
        return {};
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let titleDescriptionContainer = document.querySelector(
                '#pillar-two .section-3 .title-description-container'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-3 .title-description'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-3')
            );

            let timeline = gsap.timeline({
                defaults: { ease: 'power1.out' },
                scrollTrigger: {
                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                    scrub: false,
                    // start:
                    //     offset[index] -
                    //     (store.state.mobileView
                    //         ? window.innerHeight
                    //         : window.innerWidth) *
                    //         1.5,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.5,
                    end: !store.state.mobileView && offset[index] - window.innerWidth * 0.7,
                    trigger: '#pillar-two .section-3',
                    markers: store.state.markers,
                    id: 'section-3',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                .fromTo(
                    titleDescriptionContainer,
                    {
                        // height: 0,
                        opacity: 0,
                    },
                    {
                        // height: 'auto',
                        opacity: 1,
                        duration: 0.2,
                    }
                )
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                        x: -30,
                    },
                    {
                        x: 0,
                        autoAlpha: 1,
                        stagger: 0.05,
                    }
                );
        },
    },
};
</script>
