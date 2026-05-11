<template>
    <div class="thumbnail full section-2">
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
                            Socioeconomic<br />Impact
                        </p>
                    </div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white mt-6 lg:mt-8"
                        >
                            We want to create a positive impact on our partners,
                            our customers, and our local community. Through our
                            platform, we have the unique opportunity to empower
                            people within the Grab ecosystem in three ways:
                        </p>
                    </div>
                    <div>
                        <div class="impact space-y-6 mt-16">
                            <div class="impact-1 flex">
                                <div class="overflow-hidden font-bold">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight flex items-center"
                                    >
                                        <span>
                                            <img
                                                class="w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8"
                                                src="/images/pillar-1/section-2/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </span>
                                        Economic empowerment
                                    </p>
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight flex items-center mt-8"
                                    >
                                        <span>
                                            <img
                                                class="w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8"
                                                src="/images/pillar-1/section-2/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </span>
                                        Social empowerment
                                    </p>
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight flex items-center mt-8"
                                    >
                                        <span>
                                            <img
                                                class="w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8"
                                                src="/images/pillar-1/section-2/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </span>
                                        Financial empowerment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-1/section-2/social-socioeconomic-intro-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-1/section-2/social-socioeconomic-intro-img.jpg"
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
                '#pillar-one .section-2 .label'
            );

            let labelTitle = document.querySelectorAll(
                '#pillar-one .section-2 .label-title'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-one .section-2 .title-description'
            );

            let impactDetail = document.querySelectorAll(
                '#pillar-one .section-2 .impact-detail'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-one .section-2 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-2')
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
                        : offset[index] - window.innerWidth * 1.2,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.2,
                    trigger: '#pillar-one .section-2',
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
                    impactDetail,
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
            //         duration: 0.2,
            //         ease: 'power4.out',
            //     }
            // );
        },
    },
    mounted() {},
};
</script>
