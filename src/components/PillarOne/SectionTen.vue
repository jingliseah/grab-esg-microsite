<template>
    <div class="thumbnail full section-10">
        <div class="relative">
            <div class="img-wrapper w-screen h-screen relative overflow-hidden">
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-[left_bottom_7rem] bg-cover bg-[url('/images/pillar-1/section-10/intro-background-img-mobile.png')] lg:bg-[url('/images/pillar-1/section-10/intro-background-img-desktop.png')]"
                ></div>
            </div>

            <div
                class="absolute h-full w-full text-left p-8 pb-28 lg:py-32 lg:pl-64 lg:pr-32 flex flex-col justify-end items-start z-50 top-0 left-0"
            >
                <div class="bg-blue/90 title-description-container">
                    <div class="overflow-hidden py-6 lg:py-9 px-8 lg:px-10">
                        <p
                            class="title-description text-[1.429rem] lg:text-[2.286rem] font-['Inter'] font-bold leading-none"
                        >
                            Our impact
                        </p>
                        <p
                            class="title-description text-[2.286rem] lg:text-[5.714rem] mt-4 font-bold text-green leading-none"
                        >
                            Over 60%
                        </p>
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter'] leading-tight"
                        >
                            of Grab’s working capital loans issued in 2021 were
                            <br class="hidden lg:block" />
                            to small merchant-partners
                        </p>
                    </div>
                </div>
            </div>
            <!-- <div
                class="hidden absolute h-full w-full text-left p-8 pb-8 lg:py-12 lg:pl-64 lg:pr-32 lg:flex flex-col justify-end items-start z-50 top-0 left-0"
            >
                <div class="title-description-legend flex">
                    <div class="flex items-center title-description">
                        <img src="/images/pillar-1/section-12/financial-legend-capitalloans.svg" alt="" class="h-[2rem]">
                        <p
                            class="text-[1rem] font-['Inter'] leading-tight pl-4"
                        >
                        Capital loans
                        </p>
                    </div>
                    <div class="flex items-center pl-16 title-description ">
                        <img src="/images/pillar-1/section-12/financial-legend-smallmerchants.svg" alt="" class="h-[2rem]">
                        <p
                            class="text-[1rem] font-['Inter'] leading-tight pl-4"
                        >
                        Capital loans issued to small merchants
                        </p>
                    </div>
                </div>
            </div> -->
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
                '#pillar-one .section-10 .title-description-container'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-one .section-10 .title-description'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-10')
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
                    //         0.6,

                    start: store.state.mobileView
                        ? 'top 60%'
                        : offset[index] - window.innerWidth * 1.0,
                    end: !store.state.mobileView && offset[index] - window.innerWidth * 0.2,
                    trigger: '#pillar-one .section-10',
                    markers: store.state.markers,
                    id: 'section-10',
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
