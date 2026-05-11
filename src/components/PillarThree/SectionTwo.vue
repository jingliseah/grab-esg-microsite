<template>
    <div class="thumbnail full section-2">
        <div
            class="relative h-full bg-purple-dark lg:pb-0 px-8 py-24 lg:pl-64 lg:pr-32 lg:py-32"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <!-- <div class="label bg-blue inline-flex">
                        <span
                            class="label-title text-[0.714rem] lg:text-[1.143rem] uppercase font-bold mx-5 my-2"
                            >Socio-economic impact</span
                        >
                    </div> -->
                    <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight lg:mt-8"
                        >
                            Platform Safety
                        </p>
                    </div>
                    <div class="overflow-hidden description">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-8"
                        >
                            At Grab, we do our best to ensure the safety of all
                            who use our platform, by maintaining robust policies
                            and features that protect our driver- and
                            merchant-partners and consumers.
                            <strong>More than 99.99%</strong> of our rides occur
                            without any incident.
                        </p>
                    </div>
                    <div>
                        <div class="overflow-hidden mt-10">
                            <p
                                class="impact-title font-bold text-[1.143rem] lg:text-[1.714rem] font-['Inter']"
                            >
                                Our impact
                            </p>
                        </div>

                        <div class="impact space-y-12 mt-6 lg:mt-8">
                            <div class="impact-1 space-y-4">
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        Sexual harassment training
                                    </p>
                                </div>

                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter']"
                                    >
                                        rolled out to all driver-partners in 6 major
                                        markets<sup>26</sup>
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
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        36%
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight lg:w-4/5"
                                    >
                                        year-on-year improvement in the accident
                                        rate for the delivery segment<sup>27</sup>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-3/section-2/governance-platformsafety-intro-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-3/section-2/governance-platformsafety-intro-img.jpg"
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
                '#pillar-three .section-2 .title-description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-three .section-2 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-three .section-2 .impact-1 .impact-detail'
            );

            let impactTwoDetail = document.querySelectorAll(
                '#pillar-three .section-2 .impact-2 .impact-detail'
            );

            let impactBreakline = document.querySelectorAll(
                '#pillar-three .section-2 .breakline'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-three .section-2 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-three .section-2')
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
                    //         2.1,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 2.1,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 1,
                    trigger: '#pillar-three .section-2',
                    markers: store.state.markers,
                    id: 'section-2',
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
                    }
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
                    }
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
