<template>
    <div class="thumbnail full section-17">
        <div
            class="relative h-full bg-blue pb-8 px-8 lg:pb-0 pt-24 lg:pl-64 lg:pr-32 lg:py-32"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <div>
                        <div class="overflow-hidden">
                            <p
                                class="impact-title font-bold text-[1.429rem] lg:text-[2.286rem] font-['Inter'] text-white"
                            >
                                Our impact
                            </p>
                        </div>

                        <div class="impact space-y-12 mt-8">
                            <div class="impact-1 space-y-4">
                                <div class="overflow-hidden">
                                    <img
                                        class="impact-detail w-12 lg:w-16"
                                        src="/images/pillar-1/section-17/courses.svg"
                                        alt="image"
                                    />
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        130 upskilling courses
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight w-4/5"
                                    >
                                        for driver-partners on GrabAcademy, with
                                        over <strong>920,000</strong> partners
                                        upskilled in 2021
                                    </p>
                                </div>
                            </div>

                            <div class="overflow-hidden">
                                <div
                                    class="breakline bg-green h-1 w-14 lg:w-24"
                                ></div>
                            </div>

                            <div class="impact-2 space-y-4">
                                <div class="overflow-hidden">
                                    <img
                                        class="impact-detail w-12 lg:w-16"
                                        src="/images/pillar-1/section-17/grab-academy.svg"
                                        alt="image"
                                    />
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        GrabAcademy
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight w-4/5"
                                    >
                                        rolled out to merchant-partners in six
                                        countries with more than
                                        <strong>250 courses</strong> available
                                        in six months
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-1/section-17/economic-empowerment-intro-img-desktop.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-1/section-17/economic-empowerment-intro-img-mobile.jpg"
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
            let impactTitle = document.querySelectorAll(
                '#pillar-one .section-17 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-one .section-17 .impact-1 .impact-detail'
            );

            let impactTwoDetail = document.querySelectorAll(
                '#pillar-one .section-17 .impact-2 .impact-detail'
            );

            let impactBreakline = document.querySelectorAll(
                '#pillar-one .section-17 .impact .breakline'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-one .section-17 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-17')
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
                        ? 'top 90%'
                        : offset[index] - window.innerWidth * 1,
                    trigger: '#pillar-one .section-17',
                    markers: store.state.markers,
                    id: 'section-17',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                .fromTo(
                    impactTitle,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        delay: 0.3,
                        duration: 0.2,
                        ease: 'power1.out',
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
                        ease: 'power1.out',
                    },
                    
                )
                .from(impactBreakline, {
                    width: 0,
                    autoAlpha: 0,
                    duration: 0.2,
                    ease: 'power1.out',
                })
                .fromTo(
                    impactTwoDetail,
                    {
                        y: 50,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        stagger: 0.05,
                        ease: 'power1.out',
                    }
                )
                .fromTo(
                    imgWrapper,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: 0.2,
                        ease: 'power1.out',
                    }
                );
        },
    },
    mounted() {},
};
</script>
