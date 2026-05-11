<template>
    <div
        class="thumbnail full section-9 border-green border-t lg:border-t-0"
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
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-none"
                        >
                            Financial
                            <br />empowerment
                        </p>
                    </div>
                    <div class="overflow-hidden description">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-8"
                        >
                            Grab looks to enable financial empowerment in a
                            responsible, sustainable, and inclusive way.
                            <br /><br />
                            In 2021, we grew disbursals of loans to provide
                            access to capital for small businesses, partners, and
                            consumers. We also accelerated GrabPay acceptance,
                            and introduced PayLater, our Buy Now Pay later
                            (BNPL) product in Singapore, Malaysia and Vietnam.
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

                        <div class="impact space-y-12 mt-8">
                            <div class="impact-1 space-y-4">
                                <!-- <div class="overflow-hidden">
                                    <img
                                        class="impact-detail w-[2.063rem] lg:w-[3.189rem]"
                                        src="/images/pillar-1/section-11/data.svg"
                                        alt="image"
                                    />
                                </div> -->
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        72% year-on-year growth
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5"
                                    >
                                        in the number of merchant-partners
                                        onboarded to GrabPay<sup>6</sup>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-1/section-9/social-financial-empowerment-intro-img-desktop.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-1/section-9/social-financial-empowerment-intro-img-mobile.jpg"
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
                '#pillar-one .section-9 .label'
            );

            let labelTitle = document.querySelectorAll(
                '#pillar-one .section-9 .label-title'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-one .section-9 .title-description'
            );

            // let targets = document.querySelectorAll(
            //     '#pillar-one .section-10 .targets'
            // );

            let impactTitle = document.querySelectorAll(
                '#pillar-one .section-9 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-one .section-9 .impact-1 .impact-detail'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-one .section-9 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-9')
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
                        ? 'top 80%'
                        : offset[index] - window.innerWidth * 1.5,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.2,
                    trigger: '#pillar-one .section-9',
                    markers: store.state.markers,
                    id: 'section-9',
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
                        autoAlpha: 1,
                        x: 0,
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
            //                 autoAlpha: 1,
            //                 x: 0,
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
            // }
        },
    },
    mounted() {},
};
</script>
