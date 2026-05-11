<template>
    <div class="thumbnail full section-4 opacity-0"></div>
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
                '#pillar-one .section-3 .description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-one .section-3 .impact-title'
            );

            let impactOneDetail = document.querySelectorAll(
                '#pillar-one .section-3 .impact-1 .impact-detail'
            );

            let impactTwoDetail = document.querySelectorAll(
                '#pillar-one .section-3 .impact-2 .impact-detail'
            );

            let impactBreakline = document.querySelectorAll(
                '#pillar-one .section-3 .impact .breakline'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-4')
            );
            let timeline;

            if (!store.state.mobileView) {
                timeline = gsap.timeline({
                    scrollTrigger: {
                        scrub: false,
                        start: store.state.mobileView
                            ? 'top bottom'
                            : offset[index] - window.innerWidth * 1.13,
                        trigger: '#pillar-one .section-3',
                        markers: store.state.markers,
                        id: 'section-4',
                        toggleActions: store.getters.animationDesktopReverse(),
                    },
                });

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
                        }
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
                        }
                    )
                    .from(
                        impactBreakline,
                        {
                            width: 0,
                            autoAlpha: 0,
                            duration: 0.2,
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
                        }
                    );
            }
        },
    },
    mounted() {},
};
</script>
