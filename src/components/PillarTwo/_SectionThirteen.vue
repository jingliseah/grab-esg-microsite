<template>
    <div class="thumbnail full section-13 opacity-0"></div>
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
            let description = document.querySelectorAll(
                '#pillar-two .section-12 .description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-two .section-12 .impact-title'
            );
            let impactTitleOne = document.querySelectorAll(
                '#pillar-two .section-12 .impact-title-1'
            );
            // let impactTitleTwo = document.querySelectorAll(
            //     '#pillar-two .section-12 .impact-title-2'
            // );
            // let impactTitleThree = document.querySelectorAll(
            //     '#pillar-two .section-12 .impact-title-3'
            // );
            let impactOneDetail = document.querySelectorAll(
                '#pillar-two .section-12 .impact-1 .impact-detail'
            );

            let impactTwoDetail = document.querySelectorAll(
                '#pillar-two .section-12 .impact-2 .impact-detail'
            );

            let impactBreakline = document.querySelectorAll(
                '#pillar-two .section-12 .impact .breakline'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-13')
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
                        : offset[index] - window.innerWidth * 1.6,
                    trigger: '#pillar-two .section-12',
                    markers: store.state.markers,
                    id: 'section-13',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            if (store.state.mobileView) {
                timeline
                    .fromTo(
                        impactTitle,
                        {
                            autoAlpha: 0,
                        },
                        {
                            autoAlpha: 1,
                            duration: 0.2,
                        }
                    )
                    .fromTo(
                        impactTitleOne,
                        {
                            y: 50,
                            autoAlpha: 0,
                        },
                        {
                            y: 0,
                            autoAlpha: 1,
                            stagger: 0.05,
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
                        '-=0.35'
                    )
                    .fromTo(
                        impactTwoDetail,
                        {
                            y: 50,
                            autoAlpha: 0,
                        },
                        {
                            y: 0,
                            autoAlpha: 1,
                            stagger: 0.05,
                        },
                        '-=0.35'
                    );
            } else {
                timeline
                    .fromTo(
                        description,
                        {
                            autoAlpha: 1,
                        },
                        {
                            autoAlpha: 0,
                            duration: 0.2,
                        }
                    )
                    .fromTo(
                        description,
                        {
                            height: '100%',
                        },
                        {
                            height: '0',
                            duration: 0.1,
                        },
                        '-=0.2'
                    )
                    .fromTo(
                        impactTitle,
                        {
                            autoAlpha: 0,
                        },
                        {
                            autoAlpha: 1,
                            duration: 0.2,
                        }
                    )
                    .fromTo(
                        impactTitleOne,
                        {
                            y: 50,
                            autoAlpha: 0,
                        },
                        {
                            y: 0,
                            autoAlpha: 1,
                            stagger: 0.05,
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
                        '-=0.35'
                    )
                    .fromTo(
                        impactTwoDetail,
                        {
                            y: 50,
                            autoAlpha: 0,
                        },
                        {
                            y: 0,
                            autoAlpha: 1,
                            stagger: 0.05,
                        },
                        '-=0.35'
                    );
            }
        },
    },
    mounted() {},
};
</script>
