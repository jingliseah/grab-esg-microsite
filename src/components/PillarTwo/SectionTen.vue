<template>
    <div class="thumbnail full section-10">
        <div
            class="relative h-full bg-brown-dark lg:pb-0 px-8 py-24 lg:pl-64 lg:pr-32 lg:py-32"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight text-white"
                        >
                            Utilising renewable energy
                        </p>
                    </div>
                    <div>
                        <div class="overflow-hidden mt-10">
                            <p
                                class="impact-title font-bold text-[1.429rem] lg:text-[2.286rem] font-['Inter'] text-white"
                            >
                                Our impact
                            </p>
                        </div>

                        <div class="impact space-y-12 mt-8">
                            <div class="impact-1 flex">
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight"
                                    >
                                        In 2021, all of Grab’s corporate offices
                                        in 12 countries worldwide were
                                        <strong
                                            >powered by 100% renewable
                                            energy</strong
                                        >
                                        through the purchase of unbundled Renewable Energy Certificates (RECs)<sup>21</sup>, supporting mainly
                                        solar energy projects across Southeast
                                        Asia<sup>22</sup>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden mt-10">
                            <p
                                class="impact-title-2 font-bold text-[1.429rem] lg:text-[2.286rem] font-['Inter'] text-white"
                            >
                                Our target
                            </p>
                        </div>

                        <div class="impact space-y-12 mt-8">
                            <div class="impact-2 flex">
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight"
                                    >
                                        Achieve <strong>net zero operational carbon</strong> for all premises occupied and under direct control by 2030<sup>23</sup>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-2/section-10/environment-story1-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-2/section-10/environment-story1-img.jpg"
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
                '#pillar-two .section-10 .label'
            );

            let labelTitle = document.querySelectorAll(
                '#pillar-two .section-10 .label-title'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-10 .title-description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-two .section-10 .impact-title'
            );
            let impactDetail = document.querySelectorAll(
                '#pillar-two .section-10 .impact-1 .impact-detail'
            );
            let impactTitleTwo = document.querySelectorAll(
                '#pillar-two .section-10 .impact-title-2'
            );
            let impactDetailTwo = document.querySelectorAll(
                '#pillar-two .section-10 .impact-2 .impact-detail'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-two .section-10 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-10')
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
                        ? 'top 90%'
                        : offset[index] - window.innerWidth * 1.7,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.1,
                    trigger: '#pillar-two .section-10',
                    markers: store.state.markers,
                    id: 'section-10',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                // .from(label, {
                //     width: 0,
                // })
                // .fromTo(
                //     labelTitle,
                //     {
                //         autoAlpha: 0,
                //     },
                //     {
                //         autoAlpha: 1,
                //         duration: 0.2,
                //     }
                // )
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                        y: -10,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        stagger: 0.05,
                    }
                )
                .fromTo(
                    impactTitle,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.2,
                    },
                    "-=0.1"
                )
                .fromTo(
                    impactDetail,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.2,
                    },
                    "-=0.1"
                )
                .fromTo(
                    impactTitleTwo,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.2,
                    },
                    "-=0.1"
                )
                .fromTo(
                    impactDetailTwo,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.2,
                    },
                    "-=0.1"
                );
            // .fromTo(
            //     imgWrapper,
            //     {
            //         autoAlpha: 0,
            //     },
            //     {
            //         autoAlpha: 1,
            //         duration: 0.2,
            //         ease: 'power4.out',
            //     }
            // );
        },
    },
    mounted() {},
};
</script>
