<template>
    <div class="thumbnail full fakePin section-12">
        <div
            class="relative h-full bg-brown-dark lg:pb-0 px-8 py-24 lg:pl-64 lg:pr-32 lg:py-32 border-t border-t-white lg:border-t-transparent"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight lg:mt-8"
                        >
                            Reduce Waste
                        </p>
                    </div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white mt-6 lg:mt-8"
                        >
                            We protect our environment by managing the food
                            packaging waste generated on our platform.
                        </p>
                    </div>
                    <div>
                        <div class="overflow-hidden mt-10">
                            <p
                                class="impact-title font-bold text-[1.143rem] lg:text-[1.714rem] font-['Inter']"
                            >
                                We do this by:
                            </p>
                        </div>
                        <div class="impact space-y-6 mt-8">
                            <div class="impact-1 flex">
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight flex items-center"
                                    >
                                        <span class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8">
                                            <img
                                                class=""
                                                src="/images/pillar-2/section-12/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </span>
                                        <span>Reducing waste</span>
                                    </p>
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight flex items-center mt-4"
                                    >
                                        <span class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8">
                                            <img
                                                class=""
                                                src="/images/pillar-2/section-12/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </span>
                                        <span
                                            >Encouraging reusable
                                            packaging</span
                                        >
                                    </p>
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight flex items-center mt-4"
                                    >
                                        <span class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8">
                                            <img
                                                class=""
                                                src="/images/pillar-2/section-12/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </span>
                                        <span>Facilitating recycling</span>
                                    </p>
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white leading-tight flex items-center mt-4"
                                    >
                                        <span class="flex-shrink-0 w-[1.25rem] lg:w-10 mr-[1.25rem] lg:mr-8">
                                            <img
                                                class=""
                                                src="/images/pillar-2/section-12/checkmark-circle.svg"
                                                alt="image"
                                            />
                                        </span>
                                        <span
                                            >Replacing packaging with
                                            eco-friendly alternatives</span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden mt-10">
                            <p
                                class="impact-title-2 font-bold text-[1.143rem] lg:text-[1.714rem] font-['Inter']"
                            >
                                Our impact
                            </p>
                        </div>
                        <div class="impact space-y-12 mt-2">
                            <div class="impact-2 flex">
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.714rem] lg:text-[3.429rem] mt-4 font-bold text-green leading-tight"
                                    >
                                        774 Million
                                    </p>
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter'] leading-tight"
                                    >
                                        sets of cutlery saved in 2021 as a
                                        result of our default cutlery opt-out toggle, which has been widely accepted
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-2/section-12/environment-reducewaste-intro-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-2/section-12/environment-reducewaste-intro-mobile-img.jpg"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    </div>
    <BlackScreen
        ref="blackscreen"
        :section="'#pillar-two .section-6'"
        :timeout="500"
    ></BlackScreen>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '@/store/index';
import BlackScreen from '../BlackScreen.vue';

export default {
    data() {
        return {};
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let _this = this;
            let label = document.querySelectorAll(
                '#pillar-two .section-12 .label'
            );

            let labelTitle = document.querySelectorAll(
                '#pillar-two .section-12 .label-title'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-12 .title-description'
            );
            let impactTitle = document.querySelectorAll(
                '#pillar-two .section-12 .impact-title'
            );
            let impactDetail = document.querySelectorAll(
                '#pillar-two .section-12 .impact-1 .impact-detail'
            );
            let impactTitleTwo = document.querySelectorAll(
                '#pillar-two .section-12 .impact-title-2'
            );
            let impactDetailTwo = document.querySelectorAll(
                '#pillar-two .section-12 .impact-2 .impact-detail'
            );
            let imgWrapper = document.querySelectorAll(
                '#pillar-two .section-12 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-12')
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
                        ? 'top 80%'
                        : offset[index] - window.innerWidth * 1.7,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.8,
                    trigger: '#pillar-two .section-12',
                    markers: store.state.markers,
                    id: 'section-12',
                    toggleActions: store.getters.animationDesktopReverse(),
                    onLeaveBack: () => {
                        // store.state.pillarTwoQuiz = null;
                        _this.$refs.blackscreen.removeBlack();
                    },
                    onEnter: () => {
                        _this.$refs.blackscreen.triggerBlack();
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
                    impactDetail,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        stagger: 0.05,
                    }
                )
                .fromTo(
                    impactTitleTwo,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,

                        duration: 0.2,
                    }
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
                        duration: store.state.mobileView ? 0 : 0.5,
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
            //         ease: 'power4.out',
            //     }
            // );
        },
    },
    mounted() {},
    components: { BlackScreen },
};
</script>
