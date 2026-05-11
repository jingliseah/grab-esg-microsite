<template>
    <div class="thumbnail full fakePin section-4">
        <div class="relative h-screen lg:h-full">
            <div
                class="img-wrapper w-screen h-screen relative overflow-hidden bg-purple-mid"
            >
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-center bg-cover bg-[url('/images/quiz-bg-mobile.png')] lg:bg-[url('/images/quiz-bg-desktop.png')]"
                ></div>
            </div>

            <div
                class="absolute h-full w-full text-left p-8 pb-28 lg:py-32 lg:pl-64 lg:pr-32 flex flex-col justify-center items-center z-50 top-0 left-0"
            >
                <div class="question flex flex-col justify-center">
                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-black text-[2.571rem] lg:text-[5.714rem] leading-tight text-center"
                        >
                            Take a Wild Guess
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.429rem] lg:text-[1.714rem] mt-4 font-['Inter'] text-center"
                        >
                            What’s the percentage of Grab driver-partners who
                            are vaccinated?
                        </p>
                    </div>
                    <div class="flex flex-col mt-10">
                        <div class="answer">
                            <QuizSlider></QuizSlider>
                        </div>
                    </div>
                </div>
                <div ref="result"></div>
                <div class="result flex flex-col justify-center">
                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-black text-[2.571rem] lg:text-[5.714rem] leading-tight text-center"
                        >
                            {{
                                state.pillarFourQuiz.result
                                    ? "You're Right!"
                                    : 'You might not know this but...'
                            }}
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-bold text-[1.714rem] lg:text-[4.571rem] leading-tight text-center mt-10"
                        >
                            Over 95% of our driver-partners
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter'] text-center"
                        >
                            in Singapore, Indonesia, Philippines, Malaysia,
                            Vietnam, and Cambodia are fully vaccinated.
                        </p>
                    </div>

                    <!-- <div class="flex justify-center items-center">
                        <Share :socials="socials"></Share>
                    </div> -->
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
import QuizSlider from '../QuizSlider.vue';

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
                pillar: 'covid-19-response',
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
    watch: {
        'state.pillarFourQuiz.percentage'(val) {
            this.showResult(val == 100 ? true : false);
        },
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let imgBackground = document.querySelectorAll(
                '#pillar-four .section-4 .img-background'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-four .section-4 .title-description'
            );

            let answer = document.querySelectorAll(
                '#pillar-four .section-4 .answer'
            );

            let question = document.querySelectorAll(
                '#pillar-four .section-4 .question'
            );

            let result = document.querySelectorAll(
                '#pillar-four .section-4 .result'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-four .section-4')
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
                    //         1.9,

                    start: store.state.mobileView
                        ? 'top 80%'
                        : offset[index] - window.innerWidth * 2.5,
                    end: '70% bottom',
                    trigger: '#pillar-four .section-4',
                    markers: store.state.markers,
                    id: 'section-4',
                    toggleActions: store.getters.animationDesktopReverse(),
                    // pin: store.state.mobileView ? true : false,
                    // pinSpacing: false,
                },
            });

            timeline
                .fromTo(
                    imgBackground,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: 0.2,
                    }
                )
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        // duration: 0.2,
                        stagger: 0.1,
                        // ease: 'power4.inOut',
                    }
                )
                .fromTo(
                    answer,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: 0.2,
                        ease: 'power4.inOut',
                    }
                );

            if (store.state.mobileView) {
                let timeline2 = gsap.timeline({
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
                            ? '85% 35%'
                            : offset[index] - window.innerWidth * 2.5,
                        end: 'bottom bottom',
                        trigger: '#pillar-four .section-4',
                        markers: store.state.markers,
                        // markers: true,
                        id: 'section-5',
                        toggleActions: store.getters.animationDesktopReverse(),
                        // pin: store.state.mobileView ? true : false,
                        // pinSpacing: false,
                        onLeaveBack: () => {
                            this.$confetti.stop();
                        },
                    },
                });

                timeline2
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

                ScrollTrigger.create({
                    trigger: '#pillar-four .section-4',
                    start: 'top top',
                    end: '+=100%',
                    // markers: true,
                    pin: true,
                });
            }

            this.nextSectionOffset = offset[index + 1];
        },
        showResult(answer) {
            const _this = this;
            gsap.registerPlugin(ScrollToPlugin);

            store.state.pillarFourQuiz.result = answer;

            let panelsSection = document.querySelector(
                '#pillar-four .main-container'
            );
            let targetElement = document.querySelector(
                '#pillar-four .section-5'
            );
            let containerOffset =
                panelsSection.parentElement.offsetTop +
                targetElement?.offsetLeft;

            gsap.to(window, {
                scrollTo: {
                    y: store.state.mobileView ? scrollY + _this.$refs.result.offsetTop : containerOffset,
                    autoKill: false,
                },
                duration: 0.2,
            });

            if (answer) {
                this.triggerConfetti();
            }
        },
        triggerConfetti() {
            this.$confetti.start({
                particles: [
                    {
                        type: 'rect',
                    },
                ],
                defaultDropRate: 8,
                defaultSize: 10,
                particlesPerFrame: 0.25,
            });
        },
    },
    setup() {
        const state = computed(() => store.state);

        return {
            state,
        };
    },
    components: { Share, QuizSlider },
};
</script>
