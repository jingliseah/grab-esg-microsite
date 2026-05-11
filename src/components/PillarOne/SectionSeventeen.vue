<template>
    <div class="thumbnail full section-17 border-white lg:border-t-0">
        <div
            class="relative h-full bg-blue py-24 lg:pb-0 px-8 lg:pl-64 lg:pr-32 lg:py-32"
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
                                        class="impact-detail w-[4.5rem] lg:w-[9rem]"
                                        src="/images/pillar-1/section-17/93-percent.svg"
                                        alt="image"
                                    />
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight w-4/5"
                                    >
                                        of our employees felt proud to work at
                                        Grab<sup>14</sup>
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
                                        class="impact-detail w-14 lg:w-20"
                                        src="/images/pillar-1/section-17/gender-wage.svg"
                                        alt="image"
                                    />
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        High gender wage parity index of 0.98<sup>7</sup>
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight"
                                    >
                                        A female employee earned 98 cents to a
                                        dollar paid to a male employee for
                                        performing a similar role at Grab
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-1/section-17/economic-empowerment-intro-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-1/section-17/economic-empowerment-intro-img.jpg"
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
                    //         1.2,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.3,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.2,
                    trigger: '#pillar-one .section-17',
                    markers: store.state.markers,
                    id: 'section-17',
                    toggleActions: store.getters.animationDesktopReverse(),
                    onUpdate: () => {
                        this.$confetti.stop();
                    },
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
                    '-=0.2'
                )
                .fromTo(
                    impactBreakline,
                    {
                        width: 0,
                        autoAlpha: 0,
                    },
                    {
                        width: '10%',
                        autoAlpha: 1,
                        duration: 0.5,
                    },
                    '-=0.35'
                )
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
                    },
                    '-=0.2'
                );
            // .fromTo(
            //     imgWrapper,
            //     {
            //         autoAlpha: 0,
            //     },
            //     {
            //         autoAlpha: 1,
            //         duration: 0.2,
            //     }
            // );
        },
    },
    mounted() {},
};
</script>
