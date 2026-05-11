<template>
    <!-- fakePin  -->
    <!-- :class="[!state.mobileView && 'fakePin']" -->
    <div class="thumbnail full fakePin section-5">
        <div class="relative h-screen lg:h-full">
            <div
                class="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
            >
                <SvgIcon
                    name="play"
                    width="8rem"
                    height="8rem"
                    @click="playVideo"
                ></SvgIcon>
            </div>
            <div class="absolute z-20 top-0 left-0" id="video-thumbnail">
                <img
                    class="hidden lg:block object-cover w-screen h-screen"
                    src="/images/pillar-intro/section-5/ceo-interview-desktop.jpg"
                    alt="image"
                />
                <img
                    class="lg:hidden object-cover w-screen h-screen"
                    src="/images/pillar-intro/section-5/ceo-interview-mobile.jpg"
                    alt="image"
                />
            </div>
            <div class="video-container w-full inline-block">
                <div class="w-[100vw] h-[100vh] bg-black/20"></div>
                <div class="absolute top-0 left-0 right-0 bottom-0">
                    <Youtube ref="youtube"></Youtube>
                </div>
            </div>
            <div
                class="absolute h-full w-full text-left p-8 lg:py-32 lg:px-64 flex flex-col justify-end z-30 top-0 pb-32 hero-cover"
            >
                <div class="overflow-hidden">
                    <h1
                        class="title-description font-bold text-[2.286rem] lg:text-[4.571rem] lg:mt-40 leading-tight"
                    >
                        A short message from Grab
                    </h1>
                </div>

                <div class="overflow-hidden">
                    <p
                        class="title-description font-bold text-[1.143rem] lg:text-[1.714rem] mt-4 font-['Inter']"
                    >
                        Cheryl Goh, Group Head of Marketing & Sustainability
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToBegin from '../ScrollToBegin.vue';
import { reactive, computed } from '@vue/runtime-core';
import SvgIcon from '../SvgIcon.vue';
import Youtube from '../Youtube.vue';
import store from '@/store/index';

export default {
    data() {
        return {};
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let titleDescription = document.querySelectorAll(
                '#pillar-intro .section-5 .title-description'
            );
            let index = thumbNails.indexOf(
                document.querySelector('#pillar-intro .section-5')
            );
            let player = document.querySelectorAll(
                '#pillar-intro .section-5 .svg-icon'
            );
            let thumbnail = document.querySelectorAll(
                '#pillar-intro .section-5 #video-thumbnail'
            );
            let _this = this;
            let timeline = gsap.timeline({
                scrollTrigger: {
                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                    scrub: false,
                    start: store.state.mobileView
                        ? 'top 10%'
                        : offset[index] - window.innerWidth * 0.7,
                    end:
                        !store.state.mobileView &&
                        offset[index] + window.innerWidth * 0.2,
                    trigger: '#pillar-intro .section-5',
                    markers: store.state.markers,
                    id: 'section-5',
                    toggleActions: store.getters.animationDesktopReverse(),
                    onLeave: () => {
                        _this.stopVideo();
                    },
                    onLeaveBack: () => {
                        _this.stopVideo();
                    },
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
        },
        stopVideo() {
            this.$refs.youtube.stopCurrentVideo();
            let player = document.querySelectorAll(
                '#pillar-intro .section-5 .svg-icon'
            );
            let thumbnail = document.querySelectorAll(
                '#pillar-intro .section-5 #video-thumbnail'
            );
            let heroCover = document.querySelectorAll(
                '#pillar-intro .section-5 .hero-cover'
            );
            let titleDescription = document.querySelectorAll(
                '#pillar-intro .section-5 .title-description'
            );
            gsap.to(player, {
                opacity: 1,
                duration: 0.2,
            });
            gsap.to(thumbnail, {
                opacity: 1,
                display: 'block',
                duration: 0.2,
            });
            gsap.to(heroCover, {
                opacity: 1,
                display: 'flex',
                duration: 0.2,
            });
            gsap.to(titleDescription, {
                opacity: 1,
                display: 'block',
                duration: 0.2,
            });
        },
        scrollToSection() {
            let panelsSection = document.querySelector(
                '#pillar-intro .main-container'
            );
            let targetElement = document.querySelector(
                '#pillar-intro .section-5'
            );
            let containerOffset =
                panelsSection.parentElement.offsetTop +
                targetElement?.offsetLeft;

            gsap.to(window, {
                scrollTo: {
                    y: store.state.mobileView ? targetElement : containerOffset,
                    autoKill: false,
                },
                duration: 0.2,
            });
        },
        playVideo() {
            this.scrollToSection();
            this.$refs.youtube.playCurrentVideo();
            let player = document.querySelectorAll(
                '#pillar-intro .section-5 .svg-icon'
            );
            let cover = document.querySelectorAll(
                '#pillar-intro .section-5 .hero-cover'
            );
            let thumbnail = document.querySelectorAll(
                '#pillar-intro .section-5 #video-thumbnail'
            );
            let titleDescription = document.querySelectorAll(
                '#pillar-intro .section-5 .title-description'
            );
            let timeline = gsap.timeline();
            gsap.to(player, {
                opacity: 0,
                duration: 0.2,
            });
            timeline
                .to(thumbnail, {
                    opacity: 0,
                    display: 'none',
                    duration: 0.2,
                })
                .to(titleDescription, {
                    opacity: 0,
                    display: 'none',
                    duration: 0.2,
                })
                .to(cover, {
                    opacity: 0,
                    display: 'none',
                    duration: 1,
                });
        },
    },
    setup() {
        const state = computed(() => store.state);

        return {
            state,
        };
    },
    components: { SvgIcon, Youtube },
};
</script>
