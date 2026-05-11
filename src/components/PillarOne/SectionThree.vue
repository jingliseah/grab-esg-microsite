<template>
    <div id="socioeconomic-impact" class="thumbnail full section-3">
        <div
            class="relative h-full bg-blue py-24 lg:pb-0 px-8 lg:pl-64 lg:pr-32 lg:py-32 border-t border-t-white lg:border-t-transparent"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-none"
                        >
                            Economic
                            <br />empowerment
                        </p>
                    </div>
                    <div class="overflow-hidden description">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-6 lg:mt-8"
                        >
                            In 2021, we expanded earning opportunities for our
                            partners through our different business segments. We
                            also continued to bring small businesses online and
                            provided them with tools to ensure they are able to
                            thrive on our platform.
                        </p>
                    </div>
                    <div>
                        <div class="overflow-hidden mt-10">
                            <p
                                class="impact-title font-bold text-[1.429rem] lg:text-[2.286rem] font-['Inter']"
                            >
                                Our impact
                            </p>
                        </div>

                        <div class="impact space-y-12 mt-6 lg:mt-8">
                            <div class="impact-1 space-y-4">
                                <!-- <div class="overflow-hidden">
                                    <img
                                        class="impact-detail w-16 lg:w-24"
                                        src="/images/pillar-1/section-4/data.svg"
                                        alt="image"
                                    />
                                </div> -->
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        Over 680,000
                                    </p>
                                </div>

                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter']"
                                    >
                                        small merchant-partners<sup>2</sup> were onboarded
                                        in 2021, a 13% growth year-on-year
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
                                        Over 4 million
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight lg:w-4/5"
                                    >
                                        registered merchant-partners and
                                        GrabKios agents on our platform as of 31
                                        December 2021
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-1/section-3/economic-empowerment-intro-img-desktop.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-1/section-3/economic-empowerment-intro-img-mobile.jpg"
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
                '#pillar-one .section-3 .label'
            );

            let labelTitle = document.querySelectorAll(
                '#pillar-one .section-3 .label-title'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-one .section-3 .title-description'
            );

            // let targets = document.querySelectorAll(
            //     '#pillar-one .section-3 .targets'
            // );

            let impactTitle = document.querySelectorAll(
                '#pillar-one .section-3 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-one .section-3 .impact-1 .impact-detail'
            );

            let impactTwoDetail = document.querySelectorAll(
                '#pillar-one .section-3 .impact-2 .impact-detail'
            );

            let impactBreakline = document.querySelectorAll(
                '#pillar-one .section-3 .impact .breakline'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-one .section-3 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-3')
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
                        ? 'top bottom'
                        : offset[index] - window.innerWidth * 1.5,
                    trigger: '#pillar-one .section-3',
                    markers: store.state.markers,
                    id: 'section-3',
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

            // if (!store.state.mobileView) {
            //     timeline.fromTo(
            //         titleDescription,
            //         {
            //             autoAlpha: 0,
            //         },
            //         {
            //             autoAlpha: 1,

            //             duration: 0.2,
            //             stagger: 0.3,
            //         }
            //     );
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
            //             }
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
