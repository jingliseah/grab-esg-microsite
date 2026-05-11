<template>
    <div class="thumbnail full section-8">
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
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight lg:mt-8"
                        >
                            Transitioning to low emission vehicles
                        </p>
                    </div>
                    <div class="overflow-hidden description">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-8"
                        >
                            Grab is committed to supporting our driver-partners’
                            <strong>transition to low emission vehicles</strong
                            >. We will partner with private and public
                            stakeholders to build a sustainable and inclusive
                            electrification ecosystem in Southeast Asia.
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
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        Over 150,000
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5"
                                    >
                                        JustGrab Green rides in 2021, after the
                                        pilot allowing consumers to prioritise
                                        low emission vehicles launched in Singapore<sup>20</sup>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-2/section-8/environment-lowemission-intro-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-2/section-8/environment-lowemission-intro-img.jpg"
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
            // let label = document.querySelectorAll(
            //     '#pillar-two .section-9 .label'
            // );

            // let labelTitle = document.querySelectorAll(
            //     '#pillar-two .section-9 .label-title'
            // );

            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-8 .title-description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-two .section-8 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-two .section-8 .impact-1 .impact-detail'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-two .section-8 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-8')
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
                    //         1.5,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.5,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.7,

                    trigger: '#pillar-two .section-8',
                    markers: store.state.markers,
                    id: 'section-8',
                    toggleActions: store.getters.animationDesktopReverse(),
                    onUpdate: () => {
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
                    }
                )
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
