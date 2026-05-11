<template>
    <div
        class="thumbnail full section-5 border-t border-t-white lg:border-t-transparent"
    >
        <div
            class="relative h-full bg-brown-dark lg:pb-0 px-8 py-24 lg:pl-64 lg:pr-32 lg:py-32"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <div>
                        <div class="overflow-hidden">
                            <p
                                class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight lg:mt-8"
                            >
                                Our carbon neutral levers
                            </p>
                        </div>

                        <div class="impact space-y-12 mt-10">
                            <div class="impact-1 space-y-4">
                                <div class="overflow-hidden">
                                    <div class="impact-detail flex mb-8">
                                        <div
                                             class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8 pt-1"
                                        >
                                            <img
                                                src="/images/pillar-2/section-5/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5"
                                        >
                                            <strong
                                                >Transitioning to low emission
                                                vehicles</strong
                                            >
                                            and supporting our partners in doing
                                            so
                                        </p>
                                    </div>
                                </div>
                                <div class="overflow-hidden">
                                    <div class="impact-detail flex mb-8">
                                        <div
                                             class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8 pt-1"
                                        >
                                            <img
                                                src="/images/pillar-2/section-5/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5"
                                        >
                                            <strong
                                                >Utilising renewable
                                                energy</strong
                                            >
                                            for Grab’s premises
                                        </p>
                                    </div>
                                </div>
                                <div class="overflow-hidden">
                                    <div class="impact-detail flex mb-8">
                                        <div
                                             class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8 pt-1"
                                        >
                                            <img
                                                src="/images/pillar-2/section-5/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5"
                                        >
                                            <strong
                                                >Harnessing technology</strong
                                            >
                                            and developing
                                            <strong
                                                >responsible business
                                                practices</strong
                                            >
                                        </p>
                                    </div>
                                </div>
                                <div class="overflow-hidden">
                                    <div class="impact-detail flex">
                                        <div
                                             class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8 pt-1"
                                        >
                                            <img
                                                src="/images/pillar-2/section-5/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5"
                                        >
                                            Investing in
                                            <strong
                                                >carbon avoidance and removal
                                                programmes</strong
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-2/section-5/environment-carbonlevers-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-2/section-5/environment-carbonlevers-img-mobile.jpg"
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
            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-5 .title-description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-two .section-5 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-two .section-5 .impact-1 .impact-detail'
            );

            let impactTwoDetail = document.querySelectorAll(
                '#pillar-two .section-5 .impact-2 .impact-detail'
            );

            let impactBreakline = document.querySelectorAll(
                '#pillar-two .section-5 .impact .breakline'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-two .section-5 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-5')
            );

            let timeline = gsap.timeline({
                defaults: { ease: 'power1.out' },
                scrollTrigger: {
                    scrub: false,
                    // start:
                    //     offset[index] -
                    //     (store.state.mobileView
                    //         ? window.innerHeight
                    //         : window.innerWidth) *
                    //         1.7,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.7,
                    trigger: '#pillar-two .section-5',
                    markers: store.state.markers,
                    id: 'section-5',
                    toggleActions: store.getters.animationDesktopReverse(),
                    onLeaveBack: () => {
                        this.$confetti.stop();
                    },
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

                        duration: 0.2,
                    }
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
                    }
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
