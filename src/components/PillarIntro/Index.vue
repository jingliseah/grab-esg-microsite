<template>
    <div id="pillar-intro" class="pillar" data-pillar="home">
        <div class="main-container">
            <div class="wrapper lg:h-screen w-screen lg:w-[calc(100vw*5)]">
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
                '#pillar-intro .main-container'
            );
            let thumbNails = gsap.utils.toArray('#pillar-intro .thumbnail');
            let scrollTween;
            let offset = this.offset;
            store.state.offset.pillarIntro = offset;

            ScrollTrigger.matchMedia({
                '(min-width: 1024px)': () => {
                    store.state.mobileView = false;

                    ScrollTrigger.create({
                        trigger: '#pillar-intro .main-container',
                        start: 'top top',
                        end: () =>
                            '+=' +
                            (store.state.mobileView
                                ? container.scrollHeight - window.innerHeight
                                : container.scrollWidth - window.innerWidth),
                        pin: true,
                        anticipatePin: 0.7,
                        scrub: scrubValue,
                        invalidateOnRefresh: false,
                        // markers: store.state.markers,
                    });

                    console.log(
                        'container scroll height::',
                        container.scrollHeight,
                        container.scrollHeight - window.innerHeight
                    );

                    thumbNails.forEach((thumb, i) => {
                        if (thumb.classList.contains('fakePin')) {
                            offset.push(this.getTotalWidthToMove(thumb));
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
                                    trigger: '#pillar-intro .wrapper',
                                    start: 'top top',
                                    scrub: scrubValue,
                                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                                    // snap: true,
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
                                    trigger: '#pillar-intro .wrapper',
                                    start: 'top top',
                                    scrub: scrubValue,
                                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                                    // snap: thumb.offsetLeft,
                                    end: () =>
                                        '+=' +
                                        (store.state.mobileView
                                            ? container.scrollHeight
                                            : container.scrollWidth),
                                },
                            });
                        }
                    });
                    console.log('pillar intro::::', offset);
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
            this.$refs.sectionTwo.triggerAnimation(thumbNails, offset);
            this.$refs.sectionThree.triggerAnimation(thumbNails, offset);
            this.$refs.sectionFour.triggerAnimation(thumbNails, offset);
            this.$refs.sectionFive.triggerAnimation(thumbNails, offset);
        },
        setNumberOfSection() {
            let container = document.querySelector(
                '#pillar-intro .main-container'
            );
            let numberOfSection = container.querySelectorAll(
                '#pillar-intro .wrapper .thumbnail'
            ).length;

            store.state.numberOfSection.pillarIntro = numberOfSection;
        },
    },
    mounted() {
        this.initializeScrollTrigger();
        this.setNumberOfSection();

        console.log('numberOfSection', store.state.numberOfSection.pillarIntro);
    },
};
</script>
