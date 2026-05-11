<template>
    <div class="thumbnail full section-4">
        <div
            class="relative h-full bg-brown-dark lg:pb-0 px-8 py-24 lg:pl-64 lg:pr-32 lg:py-32"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight"
                        >
                            Our road to a <br />greener future
                        </p>
                    </div>
                    <div>
                        <div class="impact space-y-6 mt-6 lg:mt-8">
                            <div class="impact-1 space-y-4">
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.143rem] lg:text-[1.714rem] font-['Inter'] min-w-[6rem] leading-tight"
                                    >
                                        Immediate term - 2021
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <div class="impact-detail flex mb-8">
                                        <div
                                            class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8 pt-1"
                                        >
                                            <img
                                                src="/images/pillar-2/section-4/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight"
                                        >
                                            All Grab corporate offices<sup>16</sup> are
                                            powered by 100% renewable energy<sup>17</sup>
                                        </p>
                                    </div>
                                    <div class="impact-detail flex mb-8">
                                        <div
                                            class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8 pt-1"
                                        >
                                            <img
                                                src="/images/pillar-2/section-4/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight"
                                        >
                                            100% Grab-owned 2-wheel rental
                                            vehicles in Indonesia are low
                                            emission vehicles
                                        </p>
                                    </div>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.143rem] lg:text-[1.714rem] font-['Inter'] min-w-[6rem] leading-tight"
                                    >
                                        Medium term - 2030
                                    </p>
                                </div>

                                <div class="overflow-hidden">
                                    <div class="impact-detail flex mb-8">
                                        <div
                                            class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8 pt-1"
                                        >
                                            <img
                                                src="/images/pillar-2/section-4/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight"
                                        >
                                            100% low emission vehicles<sup>18</sup> for
                                            ride-hailing in Singapore, in support
                                            of the Singapore Green Plan 2030
                                        </p>
                                    </div>
                                    <div class="impact-detail flex mb-8">
                                        <div
                                            class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8 pt-1"
                                        >
                                            <img
                                                src="/images/pillar-2/section-4/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight"
                                        >
                                            Grab to achieve net zero operational carbon for all premises occupied and under direct control
                                        </p>
                                    </div>
                                </div>

                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.143rem] lg:text-[1.714rem] font-['Inter'] min-w-[6rem] leading-tight"
                                    >
                                        Long term - 2040
                                    </p>
                                </div>

                                <div class="overflow-hidden">
                                    <div
                                        class="impact-detail flex mb-8"
                                    >
                                        <div
                                            class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8 pt-1"
                                        >
                                            <img
                                                src="/images/pillar-2/section-4/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight"
                                        >
                                            Carbon neutral: Residual emissions
                                            will be offsetted while we continue
                                            our pursuit towards fully electric
                                            vehicles<sup>19</sup>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="impact-2 space-y-4"></div> -->
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-2/section-4/environment-roadmap-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-2/section-4/environment-roadmap-img-mobile.jpg"
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
                '#pillar-two .section-4 .label'
            );

            let labelTitle = document.querySelectorAll(
                '#pillar-two .section-4 .label-title'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-4 .title-description'
            );

            // let targets = document.querySelectorAll(
            //     '#pillar-one .section-3 .targets'
            // );

            let impactTitle = document.querySelectorAll(
                '#pillar-two .section-4 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-two .section-4 .impact-1 .impact-detail'
            );

            // let impactTwoDetail = document.querySelectorAll(
            //     '#pillar-two .section-4 .impact-2 .impact-detail'
            // );

            let impactBreakline = document.querySelectorAll(
                '#pillar-two .section-4 .impact .breakline'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-two .section-4 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-4')
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
                        : offset[index] - window.innerWidth * 1.7,
                    trigger: '#pillar-two .section-4',
                    markers: store.state.markers,
                    id: 'section-4',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });
            timeline
                .from(label, {
                    width: 0,
                })
                .fromTo(
                    labelTitle,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: 0.2,
                    }
                )
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
                    },
                    ''
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
                );

            // if (!store.state.mobileView) {
            //     timeline
            //         .fromTo(
            //             titleDescription,
            //             {
            //                 autoAlpha: 0,
            //             },
            //             {
            //                 autoAlpha: 1,
            //                 duration: 0.2,
            //             }
            //         )
            //         .fromTo(
            //             impactOneDetail,
            //             {
            //                 y: 50,
            //                 autoAlpha: 0,
            //             },
            //             {
            //                 y: 0,
            //                 autoAlpha: 1,
            //                 stagger: 0.05,
            //             }
            //         );
            //     // .fromTo(
            //     //     imgWrapper,
            //     //     {
            //     //         autoAlpha: 0,
            //     //     },
            //     //     {
            //     //         autoAlpha: 1,
            //     //         duration: 1.5,
            //     //         ease: 'power4.out',
            //     //     }
            //     // );
            // } else {
            //     timeline
            //         .from(label, {
            //             width: 0,
            //         })
            //         .fromTo(
            //             labelTitle,
            //             {
            //                 autoAlpha: 0,
            //             },
            //             {
            //                 autoAlpha: 1,
            //                 duration: 0.2,
            //             }
            //         )
            //         .fromTo(
            //             titleDescription,
            //             {
            //                 autoAlpha: 0,
            //                 x: -50,
            //             },
            //             {
            //                 x: 0,
            //                 autoAlpha: 1,
            //                 stagger: 0.05,
            //             },
            //             ''
            //         )
            //         .fromTo(
            //             impactTitle,
            //             {
            //                 autoAlpha: 0,
            //             },
            //             {
            //                 autoAlpha: 1,
            //                 duration: 0.2,
            //             },
            //             '-=0.35'
            //         )
            //         .fromTo(
            //             impactOneDetail,
            //             {
            //                 y: 50,
            //                 autoAlpha: 0,
            //             },
            //             {
            //                 y: 0,
            //                 autoAlpha: 1,
            //                 stagger: 0.05,
            //             },
            //             '-=0.2'
            //         )
            //         .from(
            //             impactBreakline,
            //             {
            //                 width: 0,
            //                 autoAlpha: 0,
            //                 duration: 0.2,
            //             },
            //             '-=0.35'
            //         )
            //         .fromTo(
            //             impactTwoDetail,
            //             {
            //                 y: 50,
            //                 autoAlpha: 0,
            //             },
            //             {
            //                 y: 0,
            //                 autoAlpha: 1,
            //                 stagger: 0.05,
            //             },
            //             '-=0.2'
            //         );
            //     // .fromTo(
            //     //     imgWrapper,
            //     //     {
            //     //         autoAlpha: 0,
            //     //     },
            //     //     {
            //     //         autoAlpha: 1,
            //     //         duration: 1.5,
            //     //         ease: 'power4.out',
            //     //     }
            //     // );
            // }
        },
    },
    mounted() {},
};
</script>
