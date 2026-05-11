<template>
    <div class="thumbnail full section-16">
        <div class="relative">
            <div class="img-wrapper w-screen h-screen relative overflow-hidden">
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-center bg-cover bg-[url('/images/pillar-1/section-16/intro-background-img-mobile.png')] lg:bg-[url('/images/pillar-1/section-16/intro-background-img-desktop.png')]"
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
                            Our target
                        </p>
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter'] leading-tight"
                        >
                            Increase the women on our leadership bench<sup>13</sup> to
                        </p>
                        <p
                            class="title-description text-[2.286rem] lg:text-[5.714rem] mt-4 font-bold text-green leading-none"
                        >
                            40%
                        </p>
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] mt-2 lg:mt-4 font-['Inter'] text-white font-normal"
                        >
                            up from 34% currently
                        </p>
                    </div>
                </div>
            </div>
            <!-- <div
                class="hidden absolute h-full w-full text-left p-8 py-24 lg:pl-64 lg:pr-32 lg:flex flex-col justify-end items-end z-50 top-0 left-0"
            >
                <div>
                    <p
                        class="title-description text-[1rem] font-['Inter'] leading-tight pb-4"
                    >
                        Gender distribution in leadership:
                    </p>
                    <div
                        class="title-description-legend flex title-description"
                    >
                        <div class="flex items-center">
                            <img
                                src="/images/pillar-1/section-18/peopleculture-legend-male.svg"
                                alt=""
                                class="h-[3rem]"
                            />
                            <p
                                class="text-[1rem] font-['Inter'] leading-tight pl-4"
                            >
                                = Male
                            </p>
                        </div>
                        <div class="flex items-center pl-16">
                            <img
                                src="/images/pillar-1/section-18/peopleculture-legend-female.svg"
                                alt=""
                                class="h-[3rem]"
                            />
                            <p
                                class="text-[1rem] font-['Inter'] leading-tight pl-4"
                            >
                                = Female
                            </p>
                        </div>
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
                '#pillar-one .section-16 .title-description-container'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-one .section-16 .title-description'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-16')
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
                        ? 'top 80%'
                        : offset[index] - window.innerWidth * 1.2,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.2,
                    trigger: '#pillar-one .section-16',
                    markers: store.state.markers,
                    id: 'section-16',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                        x: -50,
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
