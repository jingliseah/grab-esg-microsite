<template>
    <div id="pillar-last" class="pillar" data-pillar="esg-report-2021">
        <div class="main-container">
            <div class="wrapper lg:h-screen w-screen lg:w-[calc(100vw*1)]">
                <SectionOne ref="sectionOne"></SectionOne>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '@/store/index';
import SectionOne from './SectionOne.vue';

export default {
    components: {
        SectionOne,
    },
    data() {
        return {
            totalWidthToMove: null,
        };
    },
    methods: {
        initializeScrollTrigger() {
            gsap.registerPlugin(ScrollTrigger);

            const scrubValue = 0.7;
            let container = document.querySelector(
                '#pillar-last .main-container'
            );
            let thumbNails = gsap.utils.toArray('#pillar-last .thumbnail');
            let scrollTween;
            let offset = [];

            ScrollTrigger.matchMedia({
                '(min-width: 1024px)': () => {
                    store.state.mobileView = false;

                    ScrollTrigger.create({
                        trigger: '#pillar-last .main-container',
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
                        // markers: store.state.markers,
                    });

                    console.log(
                        'container scroll height::',
                        container.scrollHeight,
                        container.scrollHeight - window.innerHeight
                    );

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
                                                .pillarThree +
                                            store.state.numberOfSection
                                                .pillarFour)
                                );
                            } else {
                                offset.push(
                                    this.getTotalWidthToMove(thumb, i) +
                                        this.offset[0]
                                );
                            }
                            scrollTween = gsap.to(thumb, {
                                y: () => {
                                    return (
                                        store.state.mobileView &&
                                        -this.getTotalWidthToMove(thumb)
                                    );
                                },
                                x: () => {
                                    return (
                                        !store.state.mobileView &&
                                        -this.getTotalWidthToMove(thumb)
                                    );
                                },
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: '#pillar-last .wrapper',
                                    start: 'top top',
                                    scrub: scrubValue,
                                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                                    end: () =>
                                        '+=' + this.getTotalWidthToMove(thumb),
                                },
                            });

                            // console.log('fakePin', this.getTotalWidthToMove(thumb));
                        } else {
                            offset.push(thumb.offsetLeft);
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
                                    trigger: '#pillar-last .wrapper',
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
                    console.log('pillar last::::', offset);
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
        getTotalWidthToMove(thumb) {
            this.totalWidthToMove = 0;

            this.prevAll(thumb).forEach((thumbBefore, i) => {
                let style =
                    thumbBefore.currentStyle ||
                    window.getComputedStyle(thumbBefore);
                let marginRight = parseInt(style.marginRight);

                let offset = store.state.mobileView
                    ? thumbBefore.offsetHeight
                    : thumbBefore.offsetWidth;

                this.totalWidthToMove += offset + marginRight;
                // console.log('style', marginRight);
                // console.log(
                //     'thumbBefore',
                //     thumbBefore,
                //     thumbBefore.offsetHeight,
                //     this.totalWidthToMove
                // );
            });

            return this.totalWidthToMove;
        },
        triggerAnimation(thumbNails, offset) {
            this.$refs.sectionOne.triggerAnimation(thumbNails, offset);
        },
        setNumberOfSection() {
            let container = document.querySelector(
                '#pillar-last .main-container'
            );
            let numberOfSection = container.querySelectorAll(
                '#pillar-last .wrapper .thumbnail'
            ).length;

            store.state.numberOfSection.pillarIntro = numberOfSection;
        },
    },
    mounted() {
        this.initializeScrollTrigger();
        this.setNumberOfSection();
    },
};
</script>
