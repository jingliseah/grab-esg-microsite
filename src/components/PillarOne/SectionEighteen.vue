<template>
    <div class="thumbnail full fakePin section-18">
        <div class="relative h-screen lg:h-full">
            <div
                class="img-wrapper w-screen h-screen relative overflow-hidden bg-blue"
            >
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-center bg-cover bg-[url('/images/quiz-bg-mobile.png')] lg:bg-[url('/images/quiz-bg-desktop.png')]"
                ></div>
            </div>

            <div
                class="absolute h-full w-full text-left p-8 lg:py-32 lg:pl-64 lg:pr-32 flex flex-col justify-center items-center z-50 top-0 left-0"
            >
                <div class="question flex flex-col justify-center">
                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-black text-[2.571rem] lg:text-[5.714rem] leading-tight text-center"
                        >
                            Can You Guess...
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.429rem] lg:text-[1.714rem] mt-4 font-['Inter'] text-center"
                        >
                            Is Grab within the top 100 female-friendly companies
                            in the world?
                        </p>
                    </div>
                    <div
                        class="flex justify-center space-x-10 lg:space-x-20 mt-10"
                    >
                        <div
                            class="answer font-black text-[2.286rem] lg:text-[4.286rem] p-5 min-w-[7rem] lg:min-w-[10rem] text-center cursor-pointer border-green border-2 hover:bg-white hover:text-green transition ease-in-out duration-300"
                            :class="
                                state.pillarOneQuiz == true
                                    ? 'bg-white text-green'
                                    : 'bg-green text-white'
                            "
                            @click="showResult(true)"
                        >
                            Yes
                        </div>
                        <div
                            class="answer font-black text-[2.286rem] lg:text-[4.286rem] p-5 min-w-[7rem] lg:min-w-[10rem] text-center cursor-pointer border-green border-2 hover:bg-white hover:text-green transition ease-in-out duration-300"
                            :class="
                                state.pillarOneQuiz == false
                                    ? 'text-green  bg-white'
                                    : 'bg-green text-white'
                            "
                            @click="showResult(false)"
                        >
                            No
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
                                state.pillarOneQuiz
                                    ? "You're Correct!"
                                    : 'The Answer is Yes!'
                            }}
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.429rem] lg:text-[1.714rem] mt-4 font-['Inter'] text-center"
                        >
                            As a testament to our efforts in promoting gender
                            diversity, we were ranked
                        </p>
                    </div>

                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-bold text-[1.714rem] lg:text-[4.571rem] leading-tight text-center mt-4"
                        >
                            96 in the World’s Top Female-Friendly
                            <br class="hidden lg:block" />Companies by Forbes.
                        </h1>
                    </div>

                    <!-- <div class="overflow-hidden">
                        <div
                            class="title-description flex justify-center items-center"
                        >
                            <Share :socials="socials"></Share>
                        </div>
                    </div> -->

                    <!-- <div class="overflow-hidden">
                        <p
                            class="title-description font-bold text-[1.429rem] lg:text-[1.714rem] mt-16 lg:mt-32 font-['Inter'] text-center"
                        >
                            Here’s what we did…
                        </p>
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
                section: 19,
                pillar: 'social-impact',
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
            let imgBackground = document.querySelectorAll(
                '#pillar-one .section-18 .img-background'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-one .section-18 .title-description'
            );

            let answer = document.querySelectorAll(
                '#pillar-one .section-18 .answer'
            );

            let question = document.querySelectorAll(
                '#pillar-one .section-18 .question'
            );

            let result = document.querySelectorAll(
                '#pillar-one .section-18 .result'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-18')
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
                        ? 'top 80%'
                        : offset[index] - window.innerWidth * 1,
                    end: '70% bottom',
                    trigger: '#pillar-one .section-18',
                    markers: store.state.markers,
                    id: 'section-18',
                    toggleActions: store.getters.animationDesktopReverse(),
                    // pin: store.state.mobileView ? true : false,
                    // pinSpacing: false,
                    onLeaveBack: () => {
                        store.state.pillarOneQuiz = null;
                    },
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
                        duration: 0.2,
                        // stagger: 0.05,
                    }
                )
                .fromTo(
                    answer,
                    {
                        scale: 0,
                    },
                    {
                        scale: 1.05,
                    },
                    '-=0.35'
                );

            if (store.state.mobileView) {
                let timeline2 = gsap.timeline({
                    defaults: { ease: 'power1.out' },
                    scrollTrigger: {
                        invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                        scrub: false,
                        trigger: '#pillar-one .section-18',
                        markers: store.state.markers,
                        start: store.state.mobileView
                            ? '80% 40%'
                            : offset[index] - window.innerWidth * 0.95,
                        end: 'bottom bottom',
                        id: 'section-19',
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
                    trigger: '#pillar-one .section-18',
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

            store.state.pillarOneQuiz = answer;

            let panelsSection = document.querySelector(
                '#pillar-one .main-container'
            );
            let targetElement = document.querySelector(
                '#pillar-one .section-19'
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
            } else {
                this.$confetti.stop();
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
    components: { Share },
};
</script>
