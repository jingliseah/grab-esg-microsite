<template>
    <div
        class="thumbnail full fakePin section-6 border-t border-t-white lg:border-t-transparent"
    >
        <div class="relative h-screen lg:h-full">
            <div
                class="img-wrapper w-screen h-screen relative overflow-hidden bg-brown-dark"
            >
                <div
                    class="img-background h-[120vh] w-full bg-no-repeat bg-center bg-cover bg-[url('/images/quiz-bg-mobile.png')] lg:bg-[url('/images/quiz-bg-desktop.png')]"
                ></div>
            </div>

            <div
                class="absolute h-full w-full text-left p-8 lg:pb-28 lg:py-32 lg:pl-64 lg:pr-32 flex flex-col justify-center items-center z-50 top-0 left-0"
            >
                <div class="question flex flex-col justify-center">
                    <div class="overflow-hidden">
                        <h1
                            class="title-description font-black text-[2.571rem] lg:text-[5.714rem] leading-tight text-center"
                        >
                            Spot Quiz!
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.429rem] lg:text-[1.714rem] mt-4 font-['Inter'] text-center"
                        >
                            Can you guess what Grab is doing to protect our
                            environment?
                        </p>
                    </div>
                    <div class="flex flex-col mt-5 lg:mt-10">
                        <div
                            class="answer font-bold p-3 lg:p-5 text-[1.429rem] lg:text-[1.714rem] mt-4 font-['Inter'] cursor-pointer flex border-2 hover:bg-white hover:text-green transition ease-in-out duration-300 lg:items-center"
                            :class="
                                state.pillarTwoQuiz == 'A'
                                    ? 'bg-white text-green border-green'
                                    : 'border-white text-white bg-transparent'
                            "
                            @click="showResult('A')"
                        >
                            <div>
                                <div
                                    class="w-[2.571rem] h-[2.571rem] lg:w-14 lg:h-14 border-2 rounded-full inline-flex justify-center items-center mr-4"
                                >
                                    A
                                </div>
                            </div>
                            <span>Transitioning to low emission vehicles</span>
                        </div>
                        <div
                            class="answer font-bold p-3 lg:p-5 text-[1.429rem] lg:text-[1.714rem] mt-6 font-['Inter'] cursor-pointer flex border-2 hover:bg-white hover:text-green transition ease-in-out duration-300 lg:items-center"
                            :class="
                                state.pillarTwoQuiz == 'B'
                                    ? 'bg-white text-green border-green'
                                    : 'border-white text-white bg-transparent'
                            "
                            @click="showResult('B')"
                        >
                            <div>
                                <div
                                    class="w-[2.571rem] h-[2.571rem] lg:w-14 lg:h-14 border-2 rounded-full inline-flex justify-center items-center mr-4"
                                >
                                    B
                                </div>
                            </div>
                            <span
                                >Providing an in-app carbon offset feature</span
                            >
                        </div>
                        <div
                            class="answer font-bold p-3 lg:p-5 text-[1.429rem] lg:text-[1.714rem] mt-6 font-['Inter'] cursor-pointer flex border-2 hover:bg-white hover:text-green transition ease-in-out duration-300 lg:items-center"
                            :class="
                                state.pillarTwoQuiz == 'C'
                                    ? 'bg-white text-green border-green'
                                    : 'border-white text-white bg-transparent'
                            "
                            @click="showResult('C')"
                        >
                            <div>
                                <div
                                    class="w-[2.571rem] h-[2.571rem] lg:w-14 lg:h-14 border-2 rounded-full inline-flex justify-center items-center mr-4"
                                >
                                    C
                                </div>
                            </div>
                            <span>Using renewable energy for its premises</span>
                        </div>
                        <div
                            class="answer font-bold p-3 lg:p-5 text-[1.429rem] lg:text-[1.714rem] mt-6 font-['Inter'] cursor-pointer flex border-2 hover:bg-white hover:text-green transition ease-in-out duration-300 lg:items-center"
                            :class="
                                state.pillarTwoQuiz == 'D'
                                    ? 'bg-white text-green border-green'
                                    : 'border-white text-white bg-transparent'
                            "
                            @click="showResult('D')"
                        >
                            <div>
                                <div
                                    class="w-[2.571rem] h-[2.571rem] lg:w-14 lg:h-14 border-2 rounded-full inline-flex justify-center items-center mr-4"
                                >
                                    D
                                </div>
                            </div>
                            <span>All of the above</span>
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
                                state.pillarTwoQuiz == 'D'
                                    ? "You're Right!"
                                    : 'You might not know this but...'
                            }}
                        </h1>
                    </div>

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.429rem] lg:text-[1.714rem] mt-4 font-['Inter'] text-center"
                        >
                            Grab is doing all of these things:
                        </p>
                    </div>

                    <div class="overflow-hidden">
                        <div class="lg:flex justify-center lg:space-x-10 mt-4">
                            <div
                                class="flex lg:block p-5 text-[1.429rem] lg:text-[1.714rem] mt-4 font-['Inter'] cursor-pointer border lg:w-1/4 items-start"
                            >
                                <img
                                    class="w-[1.25rem] lg:w-10 mr-[1.25rem] mt-2 lg:mt-0 lg:mb-6"
                                    src="/images/pillar-2/section-6/checkmark-circle.svg"
                                    alt="image"
                                />
                                Transitioning to low emission vehicles
                            </div>
                            <div
                                class="flex lg:block p-5 text-[1.429rem] lg:text-[1.714rem] mt-4 font-['Inter'] cursor-pointer border lg:w-1/4 items-start"
                            >
                                <img
                                    class="w-[1.25rem] lg:w-10 mr-[1.25rem] mt-2 lg:mt-0 lg:mb-6"
                                    src="/images/pillar-2/section-6/checkmark-circle.svg"
                                    alt="image"
                                />
                                Providing an in-app carbon offset feature
                            </div>
                            <div
                                class="flex lg:block p-5 text-[1.429rem] lg:text-[1.714rem] mt-4 font-['Inter'] cursor-pointer border lg:w-1/4 items-start"
                            >
                                <img
                                    class="w-[1.25rem] lg:w-10 mr-[1.25rem] mt-2 lg:mt-0 lg:mb-6"
                                    src="/images/pillar-2/section-6/checkmark-circle.svg"
                                    alt="image"
                                />
                                Using renewable energy for its premises
                            </div>
                        </div>
                    </div>

                    <!-- <div class="flex justify-center items-center">
                        <Share :socials="socials"></Share>
                    </div> -->

                    <div class="overflow-hidden">
                        <p
                            class="title-description text-[1.429rem] lg:text-[1.714rem] mt-12 lg:mt-32 font-['Inter'] text-center font-bold"
                        >
                            Scroll on to find out more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <BlackScreen
        ref="blackscreen"
        :section="'#pillar-two .section-4'"
        :timeout="500"
    ></BlackScreen> -->
</template>

<script>
import { computed } from '@vue/runtime-core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '@/store/index';
import Share from '../Share.vue';
import BlackScreen from '../BlackScreen.vue';

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
                section: 7,
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
            let _this = this;
            let imgBackground = document.querySelectorAll(
                '#pillar-two .section-6 .img-background'
            );

            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-6 .title-description'
            );

            let answer = document.querySelectorAll(
                '#pillar-two .section-6 .answer'
            );

            let result = document.querySelectorAll(
                '#pillar-two .section-6 .result'
            );

            let question = document.querySelectorAll(
                '#pillar-two .section-6 .question'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-6')
            );

            let timeline = gsap.timeline({
                defaults: { ease: 'power1.out' },
                scrollTrigger: {
                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                    scrub: false,
                    start: store.state.mobileView
                        ? 'top 80%'
                        : offset[index] - window.innerWidth * 1.5,
                    end: '70% bottom',
                    trigger: '#pillar-two .section-6',
                    markers: store.state.markers,
                    id: 'section-6',
                    toggleActions: store.getters.animationDesktopReverse(),
                    // pin: store.state.mobileView ? true : false,
                    // pinSpacing: false,
                    // onLeaveBack: () => {
                    //     store.state.pillarTwoQuiz = null;
                    //     _this.$refs.blackscreen.removeBlack();
                    // },
                    // onEnter: () => {
                    //     _this.$refs.blackscreen.triggerBlack();
                    // },
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
                        duration: 0.5,
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
                        stagger: 0.05,
                    },
                    '-=0.35'
                )
                .fromTo(
                    answer,
                    {
                        scale: 0,
                    },
                    {
                        scale: 1.05,
                        stagger: 0.05,
                    },
                    '-=0.8'
                );

            if (store.state.mobileView) {
                let timeline2 = gsap.timeline({
                    defaults: { ease: 'power1.out' },
                    scrollTrigger: {
                        invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                        scrub: false,
                        start: store.state.mobileView
                            ? '85% 35%'
                            : offset[index] - window.innerWidth * 1.3,
                        end: 'bottom bottom',
                        trigger: '#pillar-two .section-6',
                        markers: store.state.markers,
                        id: 'section-7',
                        toggleActions: store.getters.animationDesktopReverse(),
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
                    trigger: '#pillar-two .section-6',
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

            store.state.pillarTwoQuiz = answer;

            let panelsSection = document.querySelector(
                '#pillar-two .main-container'
            );
            let targetElement = document.querySelector(
                '#pillar-two .section-7'
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

            if (answer == 'D') {
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
    components: { Share, BlackScreen },
};
</script>
