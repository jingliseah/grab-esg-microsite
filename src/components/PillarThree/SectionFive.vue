<template>
    <div class="thumbnail full fakePin section-5">
        <div
            class="relative h-full bg-purple-dark lg:pb-0 px-8 py-24 lg:pl-64 lg:pr-32 lg:py-32 border-t border-t-white lg:border-t-transparent"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <!-- <div class="label bg-blue inline-flex">
                        <span
                            class="label-title lg:text-lg uppercase font-bold mx-5 my-2"
                            >Socio-economic impact</span
                        >
                    </div> -->
                    <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight lg:mt-8"
                        >
                            Data Privacy
                            <br />and Cybersecurity
                        </p>
                    </div>
                    <div class="overflow-hidden description">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-8"
                        >
                            At Grab, data privacy and cybersecurity are
                            strategic priorities, fundamental to our business.
                            We are continuously strengthening and investing in
                            our data privacy and cybersecurity measures to
                            safeguard all users of our platform.
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
                                        class="impact-detail w-[3.75rem] lg:w-[5.25rem]"
                                        src="/images/pillar-3/section-5/complaints.svg"
                                        alt="image"
                                    />
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        0 substantiated complaints
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight"
                                    >
                                        made by third-parties or regulators that
                                        are significant in scale and impact
                                        concerning breaches of customer privacy<sup>29</sup>
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
                            src="/images/pillar-3/section-5/governance-dataprivacy-intro-img.jpg"
                            alt="image"
                        />
                        <img
                            class="lg:hidden w-full"
                            src="/images/pillar-3/section-5/governance-dataprivacy-intro-img.jpg"
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
                '#pillar-three .section-5 .title-description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-three .section-5 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-three .section-5 .impact-1 .impact-detail'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-three .section-5 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-three .section-5')
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
                    trigger: '#pillar-three .section-5',
                    markers: store.state.markers,
                    id: 'section-5',
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
