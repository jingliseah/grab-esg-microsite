<template>
    <div class="thumbnail full section-3">
        <div class="relative">
            <div class="img-wrapper w-screen h-screen relative overflow-hidden">
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-[center_bottom_9rem] lg:bg-[center_bottom_ 1rem] bg-cover bg-[url('/images/pillar-4/section-3/covid19-vaccination-img-mobile.png')] lg:bg-[url('/images/pillar-4/section-3/covid19-vaccination-img.png')]"
                ></div>
            </div>
            <div
                class="absolute h-full w-full text-left p-8 pb-28 lg:py-32 lg:pl-64 lg:pr-32 flex flex-col lg:justify-end items-start z-50 top-0 left-0"
            >
                <div
                    class="bg-purple-mid/90 title-description-container max-w-screen-sm mt-20 lg:mt-0"
                >
                    <div class="overflow-hidden py-9 px-10">
                        <p
                            class="title-description text-[1.429rem] lg:text-[2.286rem] font-['Inter'] font-bold leading-none"
                        >
                            Our impact
                        </p>
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter']"
                        >
                            In 2021, we committed
                        </p>
                        <p
                            class="title-description text-[2.286rem] lg:text-[5.714rem] mt-4 font-bold text-green leading-none"
                        >
                            US$20 million
                        </p>
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter']"
                        >
                            towards Covid-19 vaccinations through the GrabForGood fund
                        </p>
                    </div>
                </div>
            </div>
            <!-- <div
                class="hidden absolute h-full w-full text-left p-8 pb-8 lg:py-12 lg:pl-64 lg:pr-32 lg:flex flex-col justify-end items-start z-50 top-0 left-0"
            >
                <div class="title-description-legend title-description">
                    <div class="flex items-center">
                        <img
                            src="/images/pillar-4/section-3/covid-19-legend.svg"
                            alt=""
                            class="h-[3rem]"
                        />
                        <p
                            class="text-[1rem] font-['Inter'] leading-tight pl-4"
                        >
                            = US$1 million worth of vaccinations donated
                        </p>
                    </div>
                </div>
            </div> -->
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
            let titleDescriptionContainer = document.querySelector(
                '#pillar-four .section-3 .title-description-container'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-four .section-3 .title-description'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-four .section-3')
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
                    //         2.2,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 2.5,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 1.5,
                    trigger: '#pillar-four .section-3',
                    markers: store.state.markers,
                    id: 'section-3',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                .fromTo(
                    titleDescriptionContainer,
                    {
                        height: 0,
                        opacity: 0,
                    },
                    {
                        height: 'auto',
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                    }
                )
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                        x: -50,
                    },
                    {
                        x: 0,
                        autoAlpha: 1,
                        stagger: 0.05,
                    },
                    '-=0.2'
                );
        },
    },
};
</script>
