<template>
    <div class="thumbnail full section-5 opacity-0">
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
                '#pillar-four .section-4 .question'
            );

            let result = document.querySelectorAll(
                '#pillar-four .section-4 .result'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-four .section-5')
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
                        //         : window.innerWidth * 1.5),
                        start: store.state.mobileView
                            ? '30% 55%'
                            : offset[index] - window.innerWidth * 2.5,
                        trigger: '#pillar-four .section-5',
                        markers: store.state.markers,
                        id: 'section-5',
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
