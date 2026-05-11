<template>
    <!-- fakePin -->
    <!-- :class="[!state.mobileView && 'fakePin']" -->
    <div class="thumbnail full section-2">
        <div class="relative">
            <div class="img-wrapper w-screen h-screen relative overflow-hidden">
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-center bg-cover bg-[url('/images/pillar-intro/section-2/intro-background-img-mobile.jpg')] lg:bg-[url('/images/pillar-intro/section-2/intro-background-img-desktop.jpg')]"
                ></div>
            </div>

            <div
                class="absolute h-full w-full text-left p-8 lg:px-64 flex flex-col justify-center z-50 top-0 left-0"
            >
                <div class="overflow-hidden">
                    <h1
                        class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] min-h-full leading-tight"
                    >
                        Can a tech company help to<br class="hidden lg:block" />
                        uplift the lives of millions<br
                            class="hidden lg:block"
                        />
                        across Southeast Asia?
                    </h1>
                </div>

                <!-- <div class="overflow-hidden">
                    <p
                        class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter']"
                    >
                        Millions of new beginnings
                    </p>
                </div> -->
                <!-- <ScrollToBack></ScrollToBack> -->
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reactive, computed } from '@vue/runtime-core';
import store from '../../store/index';
import ScrollToBack from '../ScrollToBack.vue';

export default {
    data() {
        return {
            containerOffset: null,
        };
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let background = document.querySelector(
                '#pillar-intro .section-2 .img-background'
            );
            let titleDescription = document.querySelectorAll(
                '#pillar-intro .section-2 .title-description'
            );
            let index = thumbNails.indexOf(
                document.querySelector('#pillar-intro .section-2')
            );

            let panelsSection = document.querySelector(
                `#pillar-intro .main-container`
            );

            let target = '#pillar-intro .section-2';
            let targetElement = document.querySelector(target);
            this.containerOffset =
                panelsSection.parentElement.offsetTop +
                targetElement?.offsetLeft;

            let timeline = gsap.timeline({
                defaults: { ease: 'power1.out' },
                scrollTrigger: {
                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                    scrub: false,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : this.containerOffset - window.innerWidth * 0.7,
                    end:
                        !store.state.mobileView &&
                        this.containerOffset + window.innerWidth * 0.2,
                    trigger: '#pillar-intro .section-2',
                    markers: store.state.markers,
                    id: 'section-2',
                    toggleActions: store.getters.animationDesktopReverse(),
                    // onToggle: (scrollTrigger) => {
                    //     console.log('ontoggle')
                    //     scrollTrigger.refresh();
                    // },
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

            // ScrollTrigger.refresh();
        },
        // handleResize() {
        //     let panelsSection = document.querySelector(
        //         `#pillar-intro .main-container`
        //     );
        //     let target = '#pillar-intro .section-2';
        //     let targetElement = document.querySelector(target);
        //     this.containerOffset =
        //         panelsSection.parentElement.offsetTop +
        //         targetElement?.offsetLeft;
        // },
    },
    setup() {
        const state = computed(() => store.state);
        return {
            state,
        };
    },
    components: { ScrollToBack },
    // created() {
    //     window.addEventListener('resize', this.handleResize);
    // },
    // destroyed() {
    //     window.removeEventListener('resize', this.handleResize);
    // },
};
</script>
