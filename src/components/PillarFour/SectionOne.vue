three
<template>
    <div class="thumbnail full section-1">
        <div class="relative h-full">
            <div class="img-wrapper w-screen h-screen relative overflow-hidden">
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-center bg-cover bg-[url('/images/pillar-4/section-1/covid19-background-img-mobile.jpg')] lg:bg-[url('/images/pillar-4/section-1/covid19-background-img.jpg')]"
                ></div>
            </div>

            <div
                class="absolute h-full w-full text-left p-8 lg:px-64 py-40 flex flex-col justify-between z-50 top-0"
            >
                <div class="overflow-hidden lg:ml-20">
                    <h1
                        class="title-description font-black text-[3rem] lg:text-[7.143rem] leading-tight"
                    >
                        4
                    </h1>
                </div>

                <div class="lg:ml-20">
                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-black text-[3rem] lg:text-[7.143rem] leading-tight"
                        >
                            Covid-19 <br />
                            Response
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter']"
                        >
                            Can we help to make living with Covid-19 safer and
                            easier for everyone?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reactive, computed } from '@vue/runtime-core';
import store from '@/store/index';
import { calcDeductViewHeight } from '../../js/utils';

export default {
    data() {
        return {};
    },
    methods: {
        calcDeductViewHeight,
        triggerAnimation(thumbNails, offset) {
            let titleDescription = document.querySelectorAll(
                '#pillar-four .section-1 .title-description'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-four .section-1')
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
                    //         2.1,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * this.calcDeductViewHeight(2.1),
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 1.3,
                    trigger: '#pillar-four .section-1',
                    markers: store.state.markers,
                    id: 'section-1',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline.fromTo(
                titleDescription,
                {
                    autoAlpha: 0,
                    y: 50,
                },
                {
                    y: 0,
                    autoAlpha: 1,
stagger: 0.05,
                }
            );
        },
    },
};
</script>
