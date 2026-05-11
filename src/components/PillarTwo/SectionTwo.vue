<template>
    <div class="thumbnail full section-2">
        <div
            class="relative h-full bg-brown-dark lg:pb-0 px-8 py-24 lg:pl-64 lg:pr-32 lg:py-32"
        >
            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-14 lg:gap-y-0"
            >
                <div>
                    <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight lg:mt-8"
                        >
                            Combating Climate Change
                        </p>
                    </div>
                    <div class="overflow-hidden description">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] font-['Inter'] mt-8"
                        >
                            Climate change is one of the greatest challenges
                            facing humanity today. It is expected to have a
                            disproportionate impact on Southeast Asians due to
                            the region’s economic reliance on agriculture and
                            the impact of rising sea levels on coastal
                            communities.
                            <br /><br />
                            Grab believes that business, society, and the
                            environment are intricately linked. Therefore, as we
                            take strides to grow our business, we will
                            prioritise managing our greenhouse gas emissions and
                            do our part to combat a warming planet.
                        </p>
                    </div>
                </div>

                <div class="img-wrapper">
                    <img
                        class="hidden lg:block w-full h-[80vh] object-cover"
                        src="/images/pillar-2/section-2/environment-climatechange-img.jpg"
                        alt="image"
                    />
                    <img
                        class="lg:hidden w-full"
                        src="/images/pillar-2/section-2/environment-climatechange-img-mobile.jpg"
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
            //     '#pillar-two .section-2 .label'
            // );

            // let labelTitle = document.querySelectorAll(
            //     '#pillar-two .section-2 .label-title'
            // );

            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-2 .title-description'
            );

            // let targets = document.querySelectorAll(
            //     '#pillar-one .section-10 .targets'
            // );

            let imgWrapper = document.querySelectorAll(
                '#pillar-two .section-2 .img-wrapper'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-2')
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
                    //         1.7,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.7,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.8,
                    trigger: '#pillar-two .section-2',
                    markers: store.state.markers,
                    id: 'section-2',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                // .from(
                //     titleDescription,
                //     {
                //         autoAlpha: 0,
                //         x: -50,
                //     },
                //     {
                //         autoAlpha: 1,
                //         x: 0,
                //         duration: 0.2,
                //         stagger: 0.05,
                //     }
                // )
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,

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
            //         duration: 1.5,
            //         ease: 'power4.out',
            //     }
            // );
        },
    },
    mounted() {},
};
</script>
