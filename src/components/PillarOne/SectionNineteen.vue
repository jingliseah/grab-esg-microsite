<template>
    <div class="thumbnail full section-19 opacity-0">
        <div class="relative h-0 lg:h-screen pointer-events-none z-0"></div>
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
            let question = document.querySelectorAll(
                '#pillar-one .section-18 .question'
            );

            let result = document.querySelectorAll(
                '#pillar-one .section-18 .result'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-19')
            );
            if (!store.state.mobileView) {
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
                        trigger: '#pillar-one .section-19',
                        markers: store.state.markers,
                        start: store.state.mobileView
                            ? '30% 55%'
                            : offset[index] - window.innerWidth * 0.95,
                        // trigger: '#pillar-one .section-21',
                        // markers: store.state.markers,
                        id: 'section-19',
                        toggleActions: store.getters.animationDesktopReverse(),
                        pin: store.state.mobileView ? true : false,
                        pinSpacing: false,
                        onLeaveBack: () => {
                            this.$confetti.stop();
                        },
                    },
                });

                timeline
                    .to(question, {
                        autoAlpha: 0,
                        duration: 0.2,
                    })
                    .fromTo(
                        question,
                        {
                            height: '100%',
                        },
                        {
                            height: '0',
                            duration: 0.1,
                        }
                    )
                    .fromTo(
                        result,
                        {
                            autoAlpha: 0,
                            duration: 0.2,
                            display: 'none',
                        },
                        {
                            display: 'flex',
                            autoAlpha: 1,
                            duration: 0.2,
                        }
                    );
            }
        },
    },
    mounted() {},
};
</script>
