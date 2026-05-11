<template>
    <div
        class="thumbnail full section-6 border-green border-t lg:border-t-0"
    >
        <div
            class="relative h-full bg-blue py-24 lg:pb-0 px-8 lg:pl-64 lg:pr-32 lg:py-32"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight lg:mt-8"
                        >
                            Social empowerment
                        </p>
                    </div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-6 lg:mt-8"
                        >
                            Through our platform, marginalised groups are able
                            to engage and participate in society.
                        </p>
                    </div>
                    <div class="mt-10">
                        <div class="overflow-hidden">
                            <p
                                class="impact-title font-bold text-[1.429rem] lg:text-[2.286rem] font-['Inter']"
                            >
                                Our impact
                            </p>
                        </div>

                        <div class="space-y-10 mt-6 lg:mt-8">
                            <div class="impact-1 space-y-4">
                                <div class="overflow-hidden">
                                    <img
                                        class="impact-detail w-[4.5rem] lg:w-[9rem]"
                                        src="/images/pillar-1/section-6/80-percent.svg"
                                        alt="image"
                                    />
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight lg:w-4/5"
                                    >
                                        of PWD driver-partners surveyed said
                                        they felt fulfilled and satisfied with
                                        life by working with Grab<sup>10</sup>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-1/section-6/social-social-empowerment-intro-img-desktop.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-1/section-6/social-social-empowerment-intro-img-mobile.jpg"
                        alt="image"
                    />
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
            let label = document.querySelectorAll(
                '#pillar-one .section-6 .label'
            );

            let labelTitle = document.querySelectorAll(
                '#pillar-one .section-6 .label-title'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-one .section-6 .title-description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-one .section-6 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-one .section-6 .impact-1 .impact-detail'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-one .section-6 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-6')
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
                    //         1,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.2,
                    trigger: '#pillar-one .section-6',
                    markers: store.state.markers,
                    id: 'section-6',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        stagger: 0.05,
                    }
                )
                .fromTo(
                    impactTitle,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: 0.2,
                    },
                    '-=0.35'
                )
                .fromTo(
                    impactOneDetail,
                    {
                        y: 50,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        stagger: 0.05,
                    },
                    
                );
            // .fromTo(
            //     imgWrapper,
            //     {
            //         autoAlpha: 0,
            //     },
            //     {
            //         autoAlpha: 1,
            //         duration: 1.5,
            //         ease: 'power4.out',
            //     }
            // );
        },
    },
    mounted() {},
};
</script>
