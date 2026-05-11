<template>
    <div id="pillar-three" class="pillar" data-pillar="governance">
        <div class="main-container">
            <div class="wrapper w-screen lg:h-screen lg:w-[calc(100vw*5)]">
                <SectionOne ref="sectionOne"></SectionOne>
                <SectionTwo ref="sectionTwo"></SectionTwo>
                <SectionThree ref="sectionThree"></SectionThree>
                <SectionFour ref="sectionFour"></SectionFour>
                <SectionFive ref="sectionFive"></SectionFive>
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

export default {
    components: {
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
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
                '#pillar-three .main-container'
            );
            let thumbNails = gsap.utils.toArray('#pillar-three .thumbnail');
            let scrollTween;
            let offset = this.offset;
            store.state.offset.pillarThree = offset;

            ScrollTrigger.matchMedia({
                '(min-width: 1024px)': () => {
                    store.state.mobileView = false;

                    ScrollTrigger.create({
                        trigger: '#pillar-three .main-container',
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
                                                .pillarTwo)
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
                                    trigger: '#pillar-three .wrapper',
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
                                                .pillarTwo)
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
                                    trigger: '#pillar-three .wrapper',
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

                    console.log('pillar 3::::', offset);
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
        },
        setNumberOfSection() {
            let container = document.querySelector(
                '#pillar-three .main-container'
            );
            let numberOfSection = container.querySelectorAll(
                '#pillar-three .wrapper .thumbnail'
            ).length;

            store.state.numberOfSection.pillarThree = numberOfSection;
        },
    },
    mounted() {
        this.initializeScrollTrigger();
        this.setNumberOfSection();
    },
};
</script>
