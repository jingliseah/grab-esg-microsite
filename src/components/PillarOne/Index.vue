<template>
    <div id="pillar-one" class="pillar" data-pillar="social-impact">
        <div class="main-container">
            <div class="wrapper w-screen lg:h-screen lg:w-[calc(100vw*20)]">
                <SectionOne ref="sectionOne"></SectionOne>
                <SectionTwo ref="sectionTwo"></SectionTwo>
                <SectionThree ref="sectionThree"></SectionThree>
                <SectionFour ref="sectionFour"></SectionFour>
                <SectionFive ref="sectionFive"></SectionFive>
                <SectionSix ref="sectionSix"></SectionSix>
                <SectionSeven ref="sectionSeven"></SectionSeven>
                <SectionEight ref="sectionEight"></SectionEight>
                <SectionNine ref="sectionNine"></SectionNine>
                <SectionTen ref="sectionTen"></SectionTen>
                <SectionEleven ref="sectionEleven"></SectionEleven>
                <SectionTwelve ref="sectionTwelve"></SectionTwelve>
                <SectionThirteen ref="sectionThirteen"></SectionThirteen>
                <SectionFourteen ref="sectionFourteen"></SectionFourteen>
                <SectionFifteen ref="sectionFifteen"></SectionFifteen>
                <SectionSixteen ref="sectionSixteen"></SectionSixteen>
                <SectionSeventeen ref="sectionSeventeen"></SectionSeventeen>
                <SectionEighteen ref="sectionEighteen"></SectionEighteen>
                <SectionNineteen ref="sectionNineteen"></SectionNineteen>
                <SectionTwenty ref="sectionTwenty"></SectionTwenty>
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
import SectionSeven from './SectionSeven.vue';
import SectionEight from './SectionEight.vue';
import SectionNine from './SectionNine.vue';
import SectionTen from './SectionTen.vue';
import SectionEleven from './SectionEleven.vue';
import SectionTwelve from './SectionTwelve.vue';
import SectionThirteen from './SectionThirteen.vue';
import SectionFourteen from './SectionFourteen.vue';
import SectionFifteen from './SectionFifteen.vue';
import SectionSixteen from './SectionSixteen.vue';
import SectionSeventeen from './SectionSeventeen.vue';
import SectionEighteen from './SectionEighteen.vue';
import SectionNineteen from './SectionNineteen.vue';
import SectionTwenty from './SectionTwenty.vue';

export default {
    components: {
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
        SectionSeven,
        SectionEight,
        SectionNine,
        SectionTen,
        SectionEleven,
        SectionTwelve,
        SectionThirteen,
        SectionFourteen,
        SectionFifteen,
        SectionSixteen,
        SectionSeventeen,
        SectionEighteen,
        SectionNineteen,
        SectionTwenty,
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
                '#pillar-one .main-container'
            );
            let thumbNails = gsap.utils.toArray('#pillar-one .thumbnail');
            let scrollTween;
            let offset = this.offset;
            store.state.offset.pillarOne = offset;

            ScrollTrigger.matchMedia({
                '(min-width: 1024px)': () => {
                    store.state.mobileView = false;

                    ScrollTrigger.create({
                        trigger: '#pillar-one .main-container',
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
                                        store.state.numberOfSection.pillarIntro
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
                                    trigger: '#pillar-one .wrapper',
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
                                        store.state.numberOfSection.pillarIntro
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
                                    trigger: '#pillar-one .wrapper',
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

                    console.log('pillar 1::::', offset);
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
            this.$refs.sectionSeven.triggerAnimation(thumbNails, offset);
            this.$refs.sectionEight.triggerAnimation(thumbNails, offset);
            this.$refs.sectionNine.triggerAnimation(thumbNails, offset);
            this.$refs.sectionTen.triggerAnimation(thumbNails, offset);
            this.$refs.sectionEleven.triggerAnimation(thumbNails, offset);
            this.$refs.sectionTwelve.triggerAnimation(thumbNails, offset);
            this.$refs.sectionThirteen.triggerAnimation(thumbNails, offset);
            this.$refs.sectionFourteen.triggerAnimation(thumbNails, offset);
            this.$refs.sectionFifteen.triggerAnimation(thumbNails, offset);
            this.$refs.sectionSixteen.triggerAnimation(thumbNails, offset);
            this.$refs.sectionSeventeen.triggerAnimation(thumbNails, offset);
            this.$refs.sectionEighteen.triggerAnimation(thumbNails, offset);
            this.$refs.sectionNineteen.triggerAnimation(thumbNails, offset);
            this.$refs.sectionTwenty.triggerAnimation(thumbNails, offset);
        },
        setNumberOfSection() {
            let container = document.querySelector(
                '#pillar-one .main-container'
            );
            let numberOfSection = container.querySelectorAll(
                '#pillar-one .wrapper .thumbnail'
            ).length;

            store.state.numberOfSection.pillarOne = numberOfSection;
        },
    },
    mounted() {
        this.initializeScrollTrigger();
        this.setNumberOfSection();
    },
};
</script>
