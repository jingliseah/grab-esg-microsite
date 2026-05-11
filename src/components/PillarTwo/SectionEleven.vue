<template>
    <div class="thumbnail full section-11">
        <div
            class="relative h-full bg-brown-dark lg:pb-0 px-8 py-24 lg:pl-64 lg:pr-32 lg:py-32 border-t border-t-white lg:border-t-transparent"
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
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight"
                        >
                            Carbon avoidance and removal programmes
                        </p>
                    </div>
                    <div class="overflow-hidden description">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-8"
                        >
                            In 2021, Grab introduced an in-app carbon offset
                            feature in six countries<sup>24</sup> to empower consumers to
                            take action against climate change.
                            <!-- <br /><br />
                            The voluntary contributions from consumers go
                            towards nature-based solutions such as forest
                            conservation and restoration projects in Southeast
                            Asia. -->
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
                        <div class="impact-exp">
                            <div class="overflow-hidden lg:mt-6">
                                <p
                                    class="impact-title-1 text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5 mt-4"
                                >
                                    Contributions from consumers went towards:
                                </p>
                            </div>
                        </div>

                        <div class="impact space-y-12 mt-8">
                            <div class="impact-1 space-y-4">
                                <div class="overflow-hidden">
                                    <div class="impact-detail flex">
                                        <div class="flex-shrink-0 w-20 mr-6">
                                            <img
                                                src="/images/pillar-2/section-11/plant.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5 pt-1"
                                        >
                                            Planting of around
                                            <strong>30,000 trees</strong> in the
                                            region
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="impact-2 space-y-4">
                                <div class="overflow-hidden">
                                    <div class="impact-detail flex">
                                        <div class="flex-shrink-0 w-20 mr-6">
                                            <img
                                                src="/images/pillar-2/section-11/emission.svg"
                                                alt="image"
                                            />
                                        </div>
                                        <p
                                            class="text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5"
                                        >
                                            Avoided the emissions of more than
                                            <strong>2,300 tonnes</strong> of
                                            greenhouse gases through verified
                                            carbon credits<sup>25</sup>
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
                        src="/images/pillar-2/section-11/environment-carbonoffset-intro-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-2/section-11/environment-carbonoffset-intro-img.jpg"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    </div>
    <!-- <BlackScreen
        ref="blackscreen"
        :section="'#pillar-two .section-7'"
        :timeout="100"
    ></BlackScreen> -->
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '@/store/index';
import BlackScreen from '../BlackScreen.vue';

export default {
    components: { BlackScreen },
    data() {
        return {};
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let _this = this;
            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-11 .title-description'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-two .section-11 .img-wrapper'
            );

            let description = document.querySelectorAll(
                '#pillar-two .section-11 .description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-two .section-11 .impact-title'
            );
            let impactTitleOne = document.querySelectorAll(
                '#pillar-two .section-11 .impact-title-1'
            );
            // let impactTitleTwo = document.querySelectorAll(
            //     '#pillar-two .section-12 .impact-title-2'
            // );
            // let impactTitleThree = document.querySelectorAll(
            //     '#pillar-two .section-12 .impact-title-3'
            // );
            let impactOneDetail = document.querySelectorAll(
                '#pillar-two .section-11 .impact-1 .impact-detail'
            );

            let impactTwoDetail = document.querySelectorAll(
                '#pillar-two .section-11 .impact-2 .impact-detail'
            );

            let impactBreakline = document.querySelectorAll(
                '#pillar-two .section-11 .impact .breakline'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-11')
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
                    //         1.5,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.7,
                    trigger: '#pillar-two .section-11',
                    markers: store.state.markers,
                    id: 'section-11',
                    toggleActions: store.getters.animationDesktopReverse(),
                    // onLeaveBack: () => {
                    //     _this.$refs.blackscreen.removeBlack();
                    // },
                    // onEnter: () => {
                    //     _this.$refs.blackscreen.triggerBlack();
                    // },
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
                    }
                )
                .fromTo(
                    impactTitleOne,
                    {
                        y: 50,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        stagger: 0.05,
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
                    '-=0.35'
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
