<template>
    <div class="thumbnail full fakePin section-1">
        <div class="relative h-screen lg:h-full bg-blue-mid">
            <div
                class="absolute h-screen w-full text-left p-8 lg:py-32 lg:pl-64 lg:pr-32 flex flex-col justify-center items-center z-50 top-0 left-0"
            >
                <div class="flex flex-col justify-center">
                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-black text-[2.571rem] lg:text-[5.714rem] leading-tight text-center"
                        >
                            Grab’s ESG <br class="lg:hidden" />Report 2021
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.429rem] lg:text-[1.714rem] mt-7 font-['Inter'] text-center lg:mt-12"
                        >
                            Download the full report for more details into our
                            sustainability journey.
                        </p>
                    </div>
                    <div class="cta flex justify-center">
                        <a
                            class="border-2 w-fit tracking-widest mt-12 md:mt-[4.375rem] px-7 py-4 text-[1rem] md:text-[1.286rem] font-bold hover:border-green hover:bg-white hover:text-green transition duration-300 ease-in-out flex items-center space-x-4 text-center"
                            href="https://assets.grab.com/wp-content/uploads/media/si/reports/Grab-ESG-Report-2021.pdf"
                            rel="noopener"
                            target="_blank"
                        >
                            <span>Download now</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '@/store/index';
import Share from '../Share.vue';
import { calcDeductViewHeight } from '../../js/utils';

export default {
    data() {
        return {
            answer: false,
            nextSectionOffset: null,
            title: '“The Grab-Mastercard training programme has been the perfect opportunity for me as it provided me with training and knowledge on the latest tech topics.”',
            description: 'Didi Humaidi, Grab driver-partner, Indonesia',
        };
    },
    computed: {},
    methods: {
        calcDeductViewHeight,
        triggerAnimation(thumbNails, offset) {
            let titleDescription = document.querySelectorAll(
                '#pillar-last .section-1 .title-description'
            );

            let cta = document.querySelectorAll('#pillar-last .section-1 .cta');

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-last .section-1')
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
                    //         1,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] -
                          window.innerWidth * this.calcDeductViewHeight(2.8),
                    trigger: '#pillar-last .section-1',
                    markers: store.state.markers,
                    id: 'section-1',
                    toggleActions: store.getters.animationDesktopReverse(),
                    onEnter: () => {
                        store.state.displayDownloadReport = false;
                    },
                    onLeaveBack: () => {
                        store.state.displayDownloadReport = true;
                    },
                },
            });

            timeline
                .fromTo(
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
                )
                .fromTo(
                    cta,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: 0.2,
                    }
                );
        },
    },
    setup() {
        const state = computed(() => store.state);

        return {
            state,
        };
    },
    components: { Share },
};
</script>
