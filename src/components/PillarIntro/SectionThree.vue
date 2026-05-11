<template>
    <!-- fakePin -->
    <div class="thumbnail full section-3">
        <div class="relative h-full lg:h-screen bg-[#005478]">
            <div
                class="relative lg:absolute w-full h-auto lg:w-auto lg:h-full left-0 z-20"
            >
                <img
                    class="img-background hidden lg:block h-screen w-screen object-cover pl-3"
                    src="/images/pillar-intro/blue-overlay-desktop.png"
                    alt="image"
                />

                <div
                    class="lg:absolute top-0 px-8 pt-24 lg:pl-64 lg:pr-52 lg:py-32 h-full lg:w-[55.5vw] bg-no-repeat bg-center bg-cover bg-[url('/images/pillar-intro/blue-overlay-mobile.png')] lg:bg-[url('')]"
                >
                    <div>
                        <h1
                            class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] leading-tight"
                        >
                            A Year of New Beginnings
                        </h1>
                        <p
                            class="title-description text-white z-10 text-[1.143rem] lg:text-[1.714rem] mt-6 font-['Inter'] pb-40 lg:pb-0 leading-tight"
                        >
                            In 2021, Grab sought to continue bringing about
                            millions of new beginnings for our community as they
                            resiliently fought the impacts of the prolonged
                            pandemic.
                            <br /><br />
                            Grab has set sustainability targets around climate,
                            diversity, and inclusion, reflecting some of the
                            biggest challenges facing us today, and our
                            commitment to taking action and reporting our
                            progress.
                            <br /><br />
                            <strong
                                >We are excited to share key highlights of our
                                2021 sustainability journey with you.</strong
                            >
                        </p>
                    </div>
                </div>
            </div>

            <div
                class="hidden lg:block absolute w-full h-auto lg:w-[60vw] lg:h-screen bottom-0 lg:left-1/2 z-10 blue-fade"
            ></div>

            <img
                class="img-background hidden lg:block absolute w-full h-auto lg:w-[50vw] lg:h-full bottom-0 lg:right-0 object-cover"
                src="/images/pillar-intro/section-3/intro-2021-img-desktop.jpg"
                alt="image"
            />

            <img
                class="img-background lg:hidden relative lg:absolute w-full h-auto lg:w-auto lg:h-full bottom-0 lg:right-0 -mt-[17.857rem]"
                src="/images/pillar-intro/section-3/intro-2021-img-mobile.jpg"
                alt="image"
            />
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reactive, computed } from '@vue/runtime-core';
import store from '../../store/index';

export default {
    data() {
        return {};
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let titleDescription = document.querySelectorAll(
                '#pillar-intro .section-3 .title-description'
            );

            let background = document.querySelectorAll(
                '#pillar-intro .section-3 .img-background'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-intro .section-3')
            );

            console.log('offsetttt', offset[index]);
            let timeline = gsap.timeline({
                scrollTrigger: {
                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                    scrub: false,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 0.7,
                    // end: store.state.mobileView
                    //     ? document.querySelector('#pillar-intro .section-3')
                    //           .offsetTop +
                    //       document.querySelector('#pillar-intro .section-3')
                    //           .offsetHeight
                    //     : offset[index] + window.innerWidth * 0.5,
                    end:
                        !store.state.mobileView &&
                        offset[index] + window.innerWidth * 0.5,
                    trigger: '#pillar-intro .section-3',
                    markers: store.state.markers,
                    id: 'section-3',
                    toggleActions: store.getters.animationDesktopReverse(),
                    onEnter: () => {
                        console.log('onEnter');
                    },
                    // onToggle: (scrollTrigger) => {
                    //     console.log('ontoggle quiz');
                    //     scrollTrigger.refresh();
                    // },
                },
                defaults: { ease: 'power1.out' },
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
            // .fromTo(
            //     background,
            //     {
            //         autoAlpha: 0,
            //     },
            //     {
            //         autoAlpha: 1,
            //         duration: 0.2,
            //     }
            // );
        },
    },
    mounted() {},
    setup() {
        const state = computed(() => store.state);

        return {
            state,
        };
    },
};
</script>
