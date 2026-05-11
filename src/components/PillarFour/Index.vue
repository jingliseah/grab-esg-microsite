<template>
    <div id="pillar-four" class="pillar" data-pillar="covid-19-response">
        <div class="main-container">
            <div class="wrapper w-screen lg:w-[calc(100vw*6)]">
                <SectionOne ref="sectionOne"></SectionOne>
                <SectionTwo ref="sectionTwo"></SectionTwo>
                <SectionThree ref="sectionThree"></SectionThree>
                <SectionFour ref="sectionFour"></SectionFour>
                <SectionFive ref="sectionFive"></SectionFive>
                <SectionSix ref="sectionSix"></SectionSix>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '@/store/index';
import SectionOne from './SectionOne.vue';
import SectionTwo from './SectionTwo.vue';
import SectionThree from './SectionThree.vue';
import SectionFour from './SectionFour.vue';
import SectionFive from './SectionFive.vue';
import SectionSix from './SectionSix.vue';

export default {
    components: {
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
    },
    data() {
        return {
            totalWidthToMove: null,
            offset: [],
        };
    },
    methods: {
        initializeScrollTrigger() {
            gsap.registerPlugin(ScrollTrigger);

            const scrubValue = 0.7;
            let container = document.querySelector(
                '#pillar-four .main-container'
            );
            let thumbNails = gsap.utils.toArray('#pillar-four .thumbnail');
            let scrollTween;
            let offset = this.offset;
            store.state.offset.pillarFour = offset;

            ScrollTrigger.matchMedia({
                '(min-width: 1024px)': () => {
                    store.state.mobileView = false;

                    ScrollTrigger.create({
                        trigger: '#pillar-four .main-container',
                        start: 'top top',
                        end: () =>
                            '+=' +
                            (store.state.mobileView
                                ? container.scrollHeight - window.innerHeight
                                : container.scrollWidth - window.innerWidth),
                        pin: true,
                        anticipatePin: 0.7,
                        scrub: scrubValue,
                        invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                        markers: store.state.markers,
                    });

                    thumbNails.forEach((thumb, i) => {
                        if (thumb.classList.contains('fakePin')) {
                            if (i == 0) {
                                offset.push(
                                    (!store.state.mobileView
                                        ? window.innerWidth
                                        : window.innerHeight) *
                                        (store.state.numberOfSection
                                            .pillarIntro +
                                            store.state.numberOfSection
                                                .pillarOne +
                                            store.state.numberOfSection
                                                .pillarTwo +
                                            store.state.numberOfSection
                                                .pillarThree)
                                );
                            } else {
                                offset.push(
                                    this.getTotalWidthToMove(thumb, i) +
                                        this.offset[0]
                                );
                            }

                            // console.log('offset', offset);

                            scrollTween = gsap.to(thumb, {
                                y: () => {
                                    return (
                                        store.state.mobileView &&
                                        -this.getTotalWidthToMove(thumb, i)
                                    );
                                },
                                x: () => {
                                    return (
                                        !store.state.mobileView &&
                                        -this.getTotalWidthToMove(thumb, i)
                                    );
                                },
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: '#pillar-four .wrapper',
                                    start: 'top top',
                                    scrub: scrubValue,
                                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                                    end: () =>
                                        '+=' +
                                        this.getTotalWidthToMove(thumb, i),
                                },
                            });

                            // console.log(
                            //     'fakePin 2',
                            //     this.getTotalWidthToMove(thumb, i)
                            // );
                        } else {
                            if (i == 0) {
                                offset.push(
                                    (!store.state.mobileView
                                        ? window.innerWidth
                                        : window.innerHeight) *
                                        (store.state.numberOfSection
                                            .pillarIntro +
                                            store.state.numberOfSection
                                                .pillarOne +
                                            store.state.numberOfSection
                                                .pillarTwo +
                                            store.state.numberOfSection
                                                .pillarThree)
                                );
                            } else {
                                offset.push(thumb.offsetLeft + offset[0]);
                            }

                            // console.log('full', thumb.offsetLeft);

                            scrollTween = gsap.to(thumb, {
                                x: () => {
                                    return (
                                        !store.state.mobileView &&
                                        -container.scrollWidth
                                    );
                                },
                                y: () => {
                                    return (
                                        store.state.mobileView &&
                                        -container.scrollHeight
                                    );
                                },
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: '#pillar-four .wrapper',
                                    start: 'top top',
                                    scrub: scrubValue,
                                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                                    end: () =>
                                        '+=' +
                                        (store.state.mobileView
                                            ? container.scrollHeight
                                            : container.scrollWidth),
                                },
                            });
                        }
                    });

                    console.log('pillar 4::::', offset);
                },
                '(max-width: 1023px)': () => {
                    store.state.mobileView = true;
                },
            });

            this.triggerAnimation(thumbNails, offset);
        },
        prevAll(element) {
            var result = [];

            while ((element = element.previousElementSibling))
                result.push(element);
            return result;
        },
        getTotalWidthToMove(thumb, thumbIndex) {
            this.totalWidthToMove = 0;
            let finalWidth = 0;

            this.prevAll(thumb).forEach((thumbBefore, i) => {
                let style =
                    thumbBefore.currentStyle ||
                    window.getComputedStyle(thumbBefore);
                let marginRight = parseInt(style.marginRight);

                let offset = store.state.mobileView
                    ? thumbBefore.offsetHeight
                    : thumbBefore.offsetWidth;

                this.totalWidthToMove += offset + marginRight;
            });

            return this.totalWidthToMove;
        },
        triggerAnimation(thumbNails, offset) {
            this.$refs.sectionOne.triggerAnimation(thumbNails, offset);
            this.$refs.sectionTwo.triggerAnimation(thumbNails, offset);
            this.$refs.sectionThree.triggerAnimation(thumbNails, offset);
            this.$refs.sectionFour.triggerAnimation(thumbNails, offset);
            this.$refs.sectionFive.triggerAnimation(thumbNails, offset);
            this.$refs.sectionSix.triggerAnimation(thumbNails, offset);
        },
        setNumberOfSection() {
            let container = document.querySelector(
                '#pillar-four .main-container'
            );
            let numberOfSection = container.querySelectorAll(
                '#pillar-four .wrapper .thumbnail'
            ).length;

            store.state.numberOfSection.pillarFour = numberOfSection;
        },
    },
    mounted() {
        this.initializeScrollTrigger();
        this.setNumberOfSection();
    },
};
</script>
