<template>
    <div class="thumbnail full section-15">
        <div
            class="relative h-full bg-blue py-24 lg:pb-0 px-8 lg:pl-64 lg:pr-32 lg:py-32"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight text-white"
                        >
                            People and Culture
                        </p>
                    </div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] text-white mt-8 leading-tight"
                        >
                            Our employees are at the core of our ability to achieve our mission, and we strive to create an inclusive workplace where employees are engaged.
                            <br /><br />
                            In 2021, we developed programmes and initiatives to
                            enhance the way we attract, retain, and develop our
                            employees. We launched mentorship and leadership
                            programmes, flexible work options, and mental
                            wellbeing programmes.
                        </p>
                    </div>
                    <div>
                        <div class="overflow-hidden mt-10">
                            <p
                                class="impact-title font-bold text-[1.429rem] lg:text-[2.286rem] font-['Inter'] text-white"
                            >
                                Our target
                            </p>
                        </div>

                        <div class="impact space-y-12 mt-8">
                            <div class="impact-1 space-y-4">
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail font-bold text-green text-[1.714rem] lg:text-[3.429rem] min-w-[6rem] leading-tight"
                                    >
                                        Double
                                    </p>
                                </div>
                                <div class="overflow-hidden">
                                    <p
                                        class="impact-detail text-[1.143rem] lg:text-[1.714rem] font-['Inter'] leading-tight w-4/5"
                                    >
                                        the number of employee resource groups
                                        from 3 to 6 by 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-1/section-15/social-peopleculture-intro-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-1/section-15/social-peopleculture-intro-img.jpg"
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
                '#pillar-one .section-15 .label'
            );

            let labelTitle = document.querySelectorAll(
                '#pillar-one .section-15 .label-title'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-one .section-15 .title-description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-one .section-15 .impact-title'
            );
            let impactDetailImg = document.querySelectorAll(
                '#pillar-one .section-15 .impact-detail-img'
            );
            let impactDetail = document.querySelectorAll(
                '#pillar-one .section-15 .impact-detail'
            );

            let imgWrapper = document.querySelectorAll(
                '#pillar-one .section-15 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-15')
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
                    trigger: '#pillar-one .section-15',
                    markers: store.state.markers,
                    id: 'section-15',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                // .from(label, {
                //     width: 0,
                // })
                // .fromTo(
                //     labelTitle,
                //     {
                //         autoAlpha: 0,
                //     },
                //     {
                //         autoAlpha: 1,
                //         duration: 0.2,
                //     }
                // )
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                        x: -10,
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
                        y: 50,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.2,
                    },
                    '-=0.35'
                )
                .fromTo(
                    impactDetailImg,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: 0.2,
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
                    '-=0.2'
                    
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
