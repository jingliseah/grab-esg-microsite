<template>
    <div class="thumbnail full section-4">
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
                            Governance
                            <br />and Ethics
                        </p>
                    </div>
                    <div class="overflow-hidden description">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-8"
                        >
                            A strong corporate governance structure that
                            provides oversight and control of our business is
                            essential to our long-term success and ensuring
                            accountability to our stakeholders.
                            <br /><br />
                            We also maintain a robust risk management approach
                            that ensures we conduct ourselves with high ethical
                            standards.
                        </p>
                    </div>
                    <div>
                        <div class="overflow-hidden mt-20">
                            <p
                                class="impact-title font-bold text-[1.143rem] lg:text-[1.714rem] font-['Inter']"
                            >
                                Our impact
                            </p>
                        </div>

                        <div class="impact space-y-12 mt-8">
                            <div class="impact-1 space-y-4">
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        No significant fines
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight"
                                    >
                                        In 2021, we did not receive any
                                        significant monetary fines<sup>28</sup> or
                                        significant non-monetary sanctions for
                                        non-compliance with applicable laws and
                                        regulations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <div class="img-wrapper">
                        <img
                            class="hidden lg:block w-full h-[80vh] object-cover"
                            src="/images/pillar-3/section-4/governance-governance-intro-img.jpg"
                            alt="image"
                        />
                        <img
                            class="lg:hidden w-full"
                            src="/images/pillar-3/section-4/governance-governance-intro-img.jpg"
                            alt="image"
                        />
                    </div>
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
                '#pillar-three .section-4 .title-description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-three .section-4 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-three .section-4 .impact-1 .impact-detail'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-three .section-4 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-three .section-4')
            );

            let timeline = gsap.timeline({
                defaults: { ease: 'power1.out' },
                scrollTrigger: {
                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                    scrub: false,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 2.2,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 1.2,
                    trigger: '#pillar-three .section-4',
                    markers: store.state.markers,
                    id: 'section-4',
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
