<template>
    <div>
        <Header ref="header"></Header>
        <div>
            <router-view v-slot="{ Component }">
                <transition>
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <StoryModal></StoryModal>
        <Transition name="fade">
            <LoadingScreen v-if="!loaded"></LoadingScreen>
        </Transition>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '../store/index';
import Header from '../components/Header.vue';
import ScrollToBegin from '../components/ScrollToBegin.vue';
import StoryModal from '../components/StoryModal.vue';
import LoadingScreen from '../components/LoadingScreen.vue';
import detectZoom from 'detect-zoom';

export default defineComponent({
    components: {
        Header,
        ScrollToBegin,
        StoryModal,
        LoadingScreen,
    },
    data() {
        return {
            sectionObserver: null,
            loaded: false,
        };
    },
    methods: {
        handleResize() {
            if (store.state.mobileView) {
                localStorage.removeItem('resize');
                return;
            }
            localStorage.setItem('resize', 1);
            location.reload();
        },
        handleScroll() {
            // handle header progress bar
            this.$refs.header.open = false;
            this.$refs.header.onScroll = true;

            let winScroll =
                document.body.scrollTop || document.documentElement.scrollTop;
            let height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            this.$refs.header.progressBar = scrolled + '%';
        },
        stopScroll() {
            this.$refs.header.onScroll = false;
        },
        scrollToPosition() {
            const _this = this;
            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

            let desktopView = window.matchMedia('(min-width: 1024px)').matches;

            let container, pillar, num;
            let zoom = store.state.browserZoomLevel;

            switch (this.$route.hash) {
                case '#home':
                    container = '#pillar-intro';
                    pillar = 'Intro';
                    num = 0;
                    break;
                case '#social-impact':
                    container = '#pillar-one';
                    pillar = 'One';
                    num =
                        1 +
                        (zoom == 125
                            ? 0.025
                            : zoom == 150
                            ? 0.05
                            : zoom == 175
                            ? 0.09
                            : 0);
                    break;
                case '#environment':
                    container = '#pillar-two';
                    pillar = 'Two';
                    num =
                        2 +
                        (zoom == 125
                            ? 0.04
                            : zoom == 150
                            ? 0.1
                            : zoom == 175
                            ? 0.14
                            : 0);
                    break;
                case '#governance':
                    container = '#pillar-three';
                    pillar = 'Three';
                    num =
                        3 +
                        (zoom == 125
                            ? 0.06
                            : zoom == 150
                            ? 0.15
                            : zoom == 175
                            ? 0.21
                            : 0);
                    break;
                case '#covid-19-response':
                    container = '#pillar-four';
                    pillar = 'Four';
                    num =
                        4 +
                        (zoom == 125
                            ? 0.09
                            : zoom == 150
                            ? 0.2
                            : zoom == 175
                            ? 0.28
                            : 0);
                    break;
                case '#esg-report-2021':
                    container = '#pillar-last';
                    pillar = 'Last';
                    num = 5;
                    break;
            }
            let panelsSection = document.querySelector(
                `#pillar-${pillar?.toLowerCase()}  .main-container`
            );
            let section = this.$route.query.section;
            if (!section) return;
            let targetElement = document.querySelector(
                container + ' .section-' + this.$route.query.section
            );
            const containerOffset =
                panelsSection.parentElement.offsetTop +
                targetElement.offsetLeft;
            if (desktopView) {
                let pos = targetElement?.offsetLeft;
                // console.log('pos', pos);
                gsap.to(window, {
                    scrollTo: {
                        y: containerOffset,
                        autoKill: false,
                    },
                    duration: 0.2,
                    onComplete: () => {
                        setTimeout(() => {
                            _this.loaded = true;
                            localStorage.setItem('resize', 0);
                        }, 800);
                    },
                });
            } else {
                // gsap.to(window, {
                //     duration: 0.2,
                //     scrollTo: targetElement,
                //     onComplete: () => {
                //         _this.loaded = true;
                // localStorage.setItem('resize', 0);
                //     },
                // });

                targetElement.scrollIntoView();
                setTimeout(() => {
                    _this.loaded = true;
                    localStorage.setItem('resize', 0);
                }, 800);
            }

            if (this.$route.query.story) {
                store.state.storyModal = true;
            }
        },
        getSectionNumber(entry) {
            let targetClass = entry.target.className;
            let section = targetClass.match(/(\bsection\S+\b)/gi);
            return section[0].split('-')[1];
        },
        observeSections() {
            try {
                this.sectionObserver.disconnect();
            } catch (error) {}

            const options = {
                rootMargin: store.state.mobileView ? '0px 0px' : '0px 200px',
                threshold: store.state.mobileView ? 0 : 1,
            };
            this.sectionObserver = new IntersectionObserver(
                this.sectionObserverHandler,
                options
            );

            // Observe each section
            const sections = document.querySelectorAll('.thumbnail');
            sections.forEach((section) => {
                this.sectionObserver.observe(section);
            });
        },
        sectionObserverHandler(entries) {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const root = entry.target.closest('.pillar');
                    const sectionId = root.id;
                    const pillar = root.dataset.pillar;

                    // set header to black in bright screen
                    if (entry.target.classList.contains('light')) {
                        store.state.darkMode = true;
                    } else {
                        store.state.darkMode = false;
                    }

                    // Push sectionId to router here
                    this.$router.push({
                        name: this.$route.name,
                        hash: `#${pillar ? pillar : sectionId}`,
                        query: { section: this.getSectionNumber(entry) },
                    });

                    store.state.activePillar = `#${sectionId}`;
                }
            }
        },
        // isInViewport(element) {
        //     var position = element.getBoundingClientRect();
        //     // checking for partial visibility
        //     // if (position.top < window.innerHeight && position.bottom >= 0) {
        //     //     console.log('Element is partially visible in screen');
        //     // } else {
        //     //     console.log('false');
        //     // }
        //     return position.top < window.innerHeight && position.bottom >= 0;
        // },
        detectZoom() {
            var ratio = 0,
                screen = window.screen,
                ua = navigator.userAgent.toLowerCase();

            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio;
            } else if (~ua.indexOf('msie')) {
                if (screen.deviceXDPI && screen.logicalXDPI) {
                    ratio = screen.deviceXDPI / screen.logicalXDPI;
                }
            } else if (
                window.outerWidth !== undefined &&
                window.innerWidth !== undefined
            ) {
                ratio = window.outerWidth / window.innerWidth;
            }

            if (ratio) {
                ratio = Math.round(ratio * 100);
            }

            return ratio;
        },
    },
    created() {
        let desktopView = window.matchMedia('(min-width: 1024px)').matches;
        const _this = this;
        // Setup isScrolling variable
        let isScrolling;
        // Listen for scroll events
        window.addEventListener(
            'scroll',
            (event) => {
                // Clear our timeout throughout the scroll
                this.handleScroll();
                window.clearTimeout(isScrolling);
                // Set a timeout to run after scrolling ends
                isScrolling = setTimeout(function () {
                    // Run the callback
                    _this.stopScroll();
                }, 200);
            },
            false
        );
        if (desktopView) {
            window.addEventListener('resize', this.handleResize);
        }

        // Scale zoom level to 1
        document.body.style.zoom = 1;
        // store.state.browserZoomLevel = Math.round(
        //     window.devicePixelRatio * 100
        // );
        store.state.browserZoomLevel = this.detectZoom();
    },
    destroyed() {
        let desktopView = window.matchMedia('(min-width: 1024px)').matches;
        if (desktopView) {
            window.removeEventListener('resize', this.handleResize);
        }
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
        const _this = this;

        setTimeout(
            () => {
                _this.$nextTick(() => {
                    _this.scrollToPosition();
                });

                _this.observeSections();

                if (!(this.$route.hash || this.$route.query.section)) {
                    this.loaded = true;
                    localStorage.setItem('resize', 0);
                }
            },
            store.state.mobileView ? 4500 : 3000
        );
    },
});
</script>
