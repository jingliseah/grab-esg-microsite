<template>
    <div class="thumbnail full section-5 opacity-0"></div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '@/store/index';

export default {
    data() {
        return {
            answer: false,
            nextSectionOffset: null,
            title: '“The Grab-Mastercard training programme has been the perfect opportunity for me as it provided me with training and knowledge on the latest tech topics.”',
            description: 'Didi Humaidi, Grab driver-partner, Indonesia',
        };
    },
    computed: {
        socials() {
            let result = {
                section: 5,
                pillar: 'environment',
                list: [
                    {
                        type: 'facebook',
                        text: 'Facebook',
                        icon: 'fb',
                        title: this.title,
                        description: this.description,
                    },
                    {
                        type: 'twitter',
                        text: 'Twitter',
                        icon: 'twitter',
                        title: this.title,
                        description: this.description,
                    },
                    {
                        type: 'linkedin',
                        text: 'LinkedIn',
                        icon: 'linkedin',
                        title: this.title,
                        description: this.description,
                    },
                    {
                        type: 'copy_link',
                        text: 'Copy link',
                        icon: 'link',
                        title: this.title,
                        description: this.description,
                    },
                ],
            };
            return result;
        },
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let description = document.querySelectorAll(
                '#pillar-two .section-4 .description'
            );

            let impactTitle = document.querySelectorAll(
                '#pillar-two .section-4 .impact-title'
            );

            let impactOne = document.querySelectorAll(
                '#pillar-two .section-4 .impact-1'
            );

            let impactTwoDetail = document.querySelectorAll(
                '#pillar-two .section-4 .impact-2 .impact-detail'
            );

            let impactBreakline = document.querySelectorAll(
                '#pillar-two .section-4 .impact .breakline'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-5')
            );
            let timeline;

            if (!store.state.mobileView) {
                timeline = gsap.timeline({
                    scrollTrigger: {
                        scrub: false,
                        start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.35,
                        trigger: '#pillar-two .section-4',
                        markers: store.state.markers,
                        id: 'section-5',
                        toggleActions: store.getters.animationDesktopReverse(),
                    },
                });

                timeline
                    .fromTo(
                        impactOne,
                        {
                            autoAlpha: 1,
                        },
                        {
                            autoAlpha: 0,
                            duration: 0.2,
                        }
                    )
                    .fromTo(
                        impactOne,
                        {
                            height: '100%',
                        },
                        {
                            height: '0',
                            duration: 0.1,
                        }
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
