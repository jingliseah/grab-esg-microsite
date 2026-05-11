<template>
    <div class="thumbnail full section-2">
        <div
            class="relative h-full bg-purple-mid px-8 lg:pb-0 py-24 lg:pl-64 lg:pr-32 lg:py-32"
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
                            Covid-19 Response
                        </p>
                    </div>
                    <div class="overflow-hidden description">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-8"
                        >
                            In the face of new waves of Covid-19 variants
                            spreading across the region, Grab
                            <strong>facilitated vaccinations</strong> and
                            provided <strong>financial assistance</strong> for
                            our partners who were impacted by the pandemic.
                            <br /><br />
                            We also
                            <strong>supported medical frontliners</strong> and
                            took measures to ensure the
                            <strong>health and safety</strong> of those using
                            our platform.
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
                                    <img
                                        class="impact-detail w-[4.5rem] lg:w-[9rem]"
                                        src="/images/pillar-4/section-2/90-percent.svg"
                                        alt="image"
                                    />
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight"
                                    >
                                        driver-partners were satisfied with the
                                        assistance Grab provided during the
                                        pandemic<sup>30</sup>
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
                            src="/images/pillar-4/section-2/covid19-intro-img.jpg"
                            alt="image"
                        />
                        <img
                            class="lg:hidden w-full"
                            src="/images/pillar-4/section-2/covid19-intro-img.jpg"
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
                '#pillar-four .section-2 .title-description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-four .section-2 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-four .section-2 .impact-1 .impact-detail'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-four .section-2 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-four .section-2')
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
                    //         2.5,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 2.7,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 1.4,
                    trigger: '#pillar-four .section-2',
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
