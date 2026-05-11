<template>
    <Transition
        appear
        @before-enter="onBeforeEnterHeader"
        @enter="onEnterHeader"
    >
        <div
            class="fixed top-0 left-0 z-[99] lg:flex"
            v-click-outside="() => (open = false)"
        >
            <!-- Start: Top Header -->
            <Transition name="fade">
                <div
                    v-if="!open"
                    class="fixed top-10 right-32 z-50 lg:text[1.143rem] hidden lg:flex items-center space-x-12 transition duration-300 ease-in-out"
                >
                    <a
                        rel="noopener"
                        href="http://www.grab.com/grab-for-good"
                        target="_blank"
                        :class="[
                            'text-base border-b tracking-widest font-bold pb-1 hover:text-green transition duration-300 ease-in-out',
                            state.darkMode ? 'text-gray' : 'text-white',
                        ]"
                        >ESG at Grab</a
                    >
                    <a
                        rel="noopener"
                        v-if="state.displayDownloadReport"
                        :class="[
                            'border-[0.4vh] h-[6.25vh] w-fit tracking-widest px-7 py-4 lg:text-[1.143rem] font-bold hover:border-green hover:bg-white hover:text-green transition duration-300 ease-in-out flex items-center space-x-4',
                            state.darkMode ? 'text-gray' : 'text-white',
                        ]"
                        target="_blank"
                        href="https://assets.grab.com/wp-content/uploads/media/si/reports/Grab-ESG-Report-2021.pdf"
                    >
                        <span>Download full report</span>
                        <SvgIcon
                            name="download"
                            class="stroke-0 w-[1.286rem] lg:w-[2.38vh]"
                        ></SvgIcon>
                    </a>
                </div>
            </Transition>
            <!-- End: Top Header -->

            <!-- Start: Side Header -->
            <div
                class="w-screen h-[60px] lg:h-screen lg:w-[16.97vh] lg:min-w-[16.97vh] flex lg:flex-col justify-between items-center px-6 py-4 lg:py-10 lg:px-5 z-50 border-green border-t-[0.66vh] lg:border-t-0 lg:border-l-[0.66vh] border-b-[1px] lg:border-b-0 lg:border-r-[0.1vh] border-b-white lg:border-r-white"
                :class="[
                    open
                        ? 'bg-[#675347] text-white'
                        : 'backdrop-blur-md bg-black/20',
                ]"
            >
                <div
                    ref="header"
                    class="transform transition duration-300 ease-in-out flex lg:flex-col items-center lg:items-start space-x-3 lg:space-x-0"
                >
                    <button
                        class="text-gray-500 w-10 h-10 relative focus:outline-none lg:mb-4"
                        @click="open = !open"
                        :class="[
                            open
                                ? 'lg:translate-x-1/4'
                                : 'lg:translate-x-0 mb-3',
                        ]"
                    >
                        <div
                            class="block w-9 lg:w-[4.375rem] absolute transform"
                        >
                            <span
                                aria-hidden="true"
                                class="block absolute h-1 lg:h-[0.66vh] bg-white transform transition duration-300 ease-in-out"
                                :class="[
                                    { 'rotate-45': open },
                                    { ' -translate-y-1.5': !open },
                                    open
                                        ? 'w-9 lg:w-12'
                                        : 'w-9 lg:w-[4.375rem]',
                                ]"
                            ></span>
                            <span
                                aria-hidden="true"
                                class="block absolute h-1 lg:h-[0.66vh] w-5 lg:w-9 bg-white transform transition duration-300 ease-in-out"
                                :class="{ 'opacity-0': open, 'top-1': !open }"
                            ></span>
                            <span
                                aria-hidden="true"
                                class="block absolute h-1 lg:h-[0.66vh] bg-white transform transition duration-300 ease-in-out"
                                :class="[
                                    { '-rotate-45': open },
                                    { ' translate-y-1.5': !open },
                                    open
                                        ? 'w-9 lg:w-12'
                                        : 'w-6 lg:w-[3.25rem] top-2',
                                ]"
                            ></span>
                        </div>
                    </button>
                    <div class="text-center lg:w-full">
                        <img
                            class="mx-auto w-[4.375rem] h-auto"
                            src="/images/logo.png"
                            alt="Grab"
                        />
                    </div>
                </div>

                <div
                    class="hidden lg:flex flex-col items-center justify-center h-[70vh]"
                >
                    <div class="lg:vertical-rl mb-7">
                        <span
                            class="text-white font-bold tracking-widest uppercase"
                            >{{ progressBarTitle }}</span
                        >
                    </div>

                    <div class="progress-bar">
                        <div
                            class="relative bg-white/30 w-1 h-96 before:content-[''] before:bg-white before:h-[var(--progress-bar-height)] before:w-full before:absolute"
                            :style="{ '--progress-bar-height': progressBar }"
                        ></div>
                    </div>
                </div>
                <div class="flex lg:block space-x-10">
                    <div
                        class="cursor-pointer text-center text-white"
                        @click="
                            open = false;
                            share = true;
                        "
                    >
                        <div class="flex flex-col justify-center items-center">
                            <SvgIcon
                                class="w-[1.429rem] h-[1.429rem] lg:w-[2.429rem] lg:h-[2.429rem]"
                                name="share"
                            ></SvgIcon>
                            <span class="lg:hidden text-[0.714rem] font-bold"
                                >Share</span
                            >
                        </div>
                    </div>
                    <a
                        rel="noopener"
                        class="lg:hidden cursor-pointer text-center text-white"
                        href="/docs/grab-esg-report-2021.pdf"
                        download
                    >
                        <div class="flex flex-col justify-center items-center">
                            <SvgIcon
                                class="stroke-0 w-[1.429rem] h-[1.429rem]"
                                name="download"
                            ></SvgIcon>
                            <span class="lg:hidden text-[0.714rem] font-bold"
                                >Report</span
                            >
                        </div>
                    </a>
                </div>
            </div>
            <!-- End: Side Header -->

            <!-- Start: Inner Header -->
            <Transition name="slide-fade">
                <div
                    v-if="open"
                    class="bg-brown-dark h-[calc(100vh-60px)] lg:h-screen w-full min-w-[60vw] z-40 pt-11 p-8 lg:px-[7.5rem] lg:py-0 flex flex-col lg:justify-center overflow-auto"
                >
                    <Transition name="slide-fade" mode="out-in">
                        <div v-if="isCeo">
                            <div
                                class="text-white cursor-pointer flex items-center space-x-2 hover:opacity-80 transition ease-in-out duration-300"
                                @click="isCeo = false"
                            >
                                <SvgIcon name="back-button"></SvgIcon>
                                <span
                                    class="text-[1.143rem] lg:text-[1.714rem] font-medium tracking-widest"
                                    >Back to menu</span
                                >
                            </div>
                            <iframe
                                class="w-full h-[25vh] lg:h-[50vh] mt-7"
                                src="https://www.youtube.com/embed/_4ukb5bMKsw"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            <p
                                class="text-[1.143rem] lg:text-[1.714rem] text-white mt-6"
                            >
                                A short message from Grab
                            </p>
                            <p
                                class="text-[1.143rem] lg:text-[1.714rem] font-bold text-white mt-6 font-bold"
                            >
                                Cheryl Goh, Group Head of Marketing &
                                Sustainability
                            </p>
                        </div>
                        <div
                            v-else
                            class="text-white max-h-[95vh] space-y-16 lg:space-y-20"
                        >
                            <div class="space-y-10">
                                <div
                                    v-for="(pillar, index) in pillars"
                                    :key="pillar.text"
                                    :class="
                                        index !== pillars.length - 1 &&
                                        'overflow-hidden'
                                    "
                                >
                                    <Transition
                                        appear
                                        name="list"
                                        tag="div"
                                        @before-enter="onBeforeEnter"
                                        @enter="onEnter"
                                    >
                                        <div>
                                            <a
                                                rel="noopener"
                                                v-if="
                                                    index !== pillars.length - 1
                                                "
                                                :data-index="index"
                                                :id="pillar.id"
                                                class="leading-none block font-black text-[2.286rem] lg:text-[4.571rem] w-fit overflow-hidden hover:text-green transform transition duration-300"
                                                :href="pillar.link"
                                                @click="
                                                    scrollToSection(
                                                        $event,
                                                        pillar.pillar
                                                    )
                                                "
                                            >
                                                {{ pillar.text }}
                                            </a>
                                            <div
                                                v-if="
                                                    pillar.subLink &&
                                                    pillar.subLink.length
                                                "
                                                class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 font-bold text-[1rem] lg:text-[1.286rem] mt-5 lg:mt-3"
                                            >
                                                <!-- :href="link.link" -->
                                                <a
                                                    rel="noopener"
                                                    v-for="(
                                                        link, index
                                                    ) in pillar.subLink"
                                                    :key="link.id"
                                                    class="cursor-pointer leading-none hover:border-white hover:!text-green transform transition duration-300"
                                                    :class="
                                                        index !== 0 &&
                                                        'lg:border-l-2 lg:pl-6 pb-1'
                                                    "
                                                    @click="
                                                        scrollToSection(
                                                            $event,
                                                            link.pillar,
                                                            link.section
                                                        )
                                                    "
                                                    >{{ link.text }}</a
                                                >
                                            </div>
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                            <div class="flex flex-col space-y-10">
                                <a
                                    rel="noopener"
                                    class="border-2 w-fit tracking-widest px-7 py-4 text-[1rem] lg:text-[1.286rem] font-bold hover:border-green hover:bg-white hover:text-green transition duration-300 ease-in-out flex items-center space-x-4"
                                    target="_blank"
                                    href="https://assets.grab.com/wp-content/uploads/media/si/reports/Grab-ESG-Report-2021.pdf"
                                >
                                    <span>Download full report</span>
                                    <SvgIcon
                                        name="download"
                                        class="stroke-0 w-[1.2rem] lg:w-[2.38vh] h-[1.2rem] lg:h-[2.38vh]"
                                    ></SvgIcon>
                                </a>
                                <ul class="space-y-6 pb-36 lg:pb-0">
                                    <li>
                                        <a
                                            rel="noopener"
                                            @click="isCeo = true"
                                            class="text-[1rem] lg:text-[1.286rem] border-b tracking-widest font-medium cursor-pointer hover:text-green transition duration-300 ease-in-out"
                                            ><strong
                                                >A message from Grab</strong
                                            ></a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            rel="noopener"
                                            href="http://www.grab.com/grab-for-good"
                                            target="_blank"
                                            class="text-[1rem] lg:text-[1.286rem] border-b tracking-widest font-medium cursor-pointer hover:text-green transition duration-300 ease-in-out"
                                            ><strong>ESG at Grab</strong></a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            rel="noopener"
                                            href="/docs/footnotes.pdf"
                                            download
                                            class="text-[1rem] lg:text-[1.286rem] border-b tracking-widest font-medium cursor-pointer hover:text-green transition duration-300 ease-in-out"
                                            ><strong>Footnotes</strong></a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Transition>
                </div>
            </Transition>
            <!-- End: Inner Header -->

            <!-- Start: Mobile Progress Bar -->
            <Transition name="fade">
                <div
                    v-if="onScroll && state.mobileView"
                    class="fixed w-screen bottom-0 px-6 pb-8 z-20 bg-gradient-to-t from-black/60"
                >
                    <div
                        class="flex lg:hidden items-center justify-between border-t-2 border-white/30 pt-4"
                    >
                        <div class="lg:vertical-rl">
                            <span
                                class="text-white font-medium text-[0.714rem] tracking-widest uppercase"
                                >{{ progressBarTitle }}</span
                            >
                        </div>

                        <div class="progress-bar w">
                            <div
                                class="relative bg-white/30 h-1 w-[50vw] before:content-[''] before:bg-white before:w-[var(--progress-bar-height)] before:h-full before:absolute"
                                :style="{
                                    '--progress-bar-height': progressBar,
                                }"
                            ></div>
                        </div>
                    </div>
                </div>
            </Transition>
            <!-- End: Mobile Progress Bar -->

            <!-- Start: Share Pop Up -->
            <Transition name="fade">
                <div
                    v-if="share"
                    class="fixed z-50 w-screen h-screen bg-black/60 flex justify-center bottom-0 lg:bottom-auto items-end lg:items-center"
                >
                    <div
                        class="relative bg-blue-light h-auto w-screen lg:h-[40vh] lg:w-[40vw]"
                    >
                        <div
                            @click="share = false"
                            class="absolute top-0 right-0 bg-green border-green border-l-2 border-b-2 hover:bg-white hover:text-green space-y-1 lg:space-y-2 w-[3.429rem] h-[3.571rem] lg:w-32 lg:h-32 flex flex-col justify-center items-center text-white cursor-pointer transition ease-in-out duration-300"
                        >
                            <div>
                                <SvgIcon
                                    class="stroke-0 h-[1.286rem] w-[1.286rem] lg:h-[2.857rem] lg:w-[2.857rem]"
                                    name="close"
                                ></SvgIcon>
                            </div>

                            <span
                                class="text-[0.857rem] lg:text-[1.143rem] font-bold leading-none"
                                >Close</span
                            >
                        </div>
                        <div
                            class="flex flex-col justify-center space-y-10 px-7 lg:pl-28 pt-10 pb-20 lg:pr-32 h-full"
                        >
                            <p
                                class="text-green font-black text-[1.714rem] lg:text-[3.429rem]"
                            >
                                Share Via
                            </p>
                            <div class="flex justify-between space-x-6">
                                <div
                                    v-for="social in socials"
                                    :key="social.text"
                                    class=""
                                >
                                    <ShareNetwork
                                        v-if="social.type !== 'copy_link'"
                                        :network="social.type"
                                        :url="url"
                                        title="Millions of New Beginnings"
                                        description="Grab’s Environmental, Social and Governance Report 2021"
                                        hash="grab"
                                    >
                                        <!-- quote="The hot reload is so fast it\'s near instant. - Evan You"
                                        hashtags="vuejs,vite" -->
                                        <div
                                            class="flex flex-col items-center justify-center space-y-4 cursor-pointer"
                                        >
                                            <SvgIcon
                                                class="stroke-0 w-10 h-10 lg:w-20 lg:h-20"
                                                :name="social.icon"
                                                width="4rem"
                                                height="4rem"
                                            ></SvgIcon>
                                            <p
                                                class="text-black font-bold text-[0.857rem] lg:text-[1.143rem]"
                                            >
                                                {{ social.text }}
                                            </p>
                                        </div>
                                    </ShareNetwork>
                                    <div v-else @click="copyLink()">
                                        <div
                                            class="flex flex-col items-center justify-center space-y-4 cursor-pointer relative"
                                        >
                                            <SvgIcon
                                                class="stroke-0 w-10 h-10 lg:w-20 lg:h-20"
                                                :name="social.icon"
                                                width="4rem"
                                                height="4rem"
                                            ></SvgIcon>
                                            <p
                                                class="text-black font-bold text-[0.857rem] lg:text-[1.143rem]"
                                            >
                                                {{ social.text }}
                                            </p>
                                            <Transition name="fade">
                                                <span
                                                    v-if="copiedLink"
                                                    class="bg-black/70 absolute top-16 lg:top-0 right-0 lg:-right-[11rem] text-white px-2 py-1 font-['Inter'] font-medium w-max lg:w-max text-[0.857rem] lg:text-[1.143rem]"
                                                    >Copied to clipboard</span
                                                >
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>

            <!-- End: Share Pop Up -->
        </div>
    </Transition>
</template>

<script>
import gsap from 'gsap';
import { computed } from '@vue/runtime-core';
import store from '../store/index';
import SvgIcon from './SvgIcon.vue';
import Share from './Share.vue';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    data() {
        return {
            open: false,
            onScroll: false,
            isCeo: false,
            share: false,
            copiedLink: false,
            pillars: [
                {
                    id: 'home',
                    text: 'Home',
                    link: '#pillar-intro',
                    pillar: 'Intro',
                    subLink: [],
                },
                {
                    id: 'social-impact',
                    text: 'Social Impact',
                    link: '#pillar-one',
                    pillar: 'One',
                    subLink: [
                        {
                            id: 'socioeconomic-impact',
                            text: 'Socioeconomic Impact',
                            pillar: 'One',
                            section: 2,
                        },
                        {
                            id: 'partners-welfare',
                            text: ' Partners’ Welfare',
                            pillar: 'One',
                            section: 12,
                        },
                        {
                            id: 'people-and-culture',
                            text: 'People and Culture',
                            pillar: 'One',
                            section: 15,
                        },
                    ],
                },
                {
                    id: 'environment',
                    text: 'Environment',
                    link: '#pillar-two',
                    pillar: 'Two',
                    subLink: [
                        {
                            id: 'greenhouse-gas-emissions',
                            text: 'Greenhouse Gas Emissions',
                            pillar: 'Two',
                            section: 2,
                        },
                        {
                            id: 'sustainable-packaging-solutions',
                            text: 'Sustainable Packaging Solutions',
                            pillar: 'Two',
                            section: 12,
                        },
                    ],
                },
                {
                    id: 'governance',
                    text: 'Governance',
                    link: '#pillar-three',
                    pillar: 'Three',
                    subLink: [
                        {
                            id: 'platform-safety',
                            text: 'Platform Safety',
                            pillar: 'Three',
                            section: 2,
                        },
                        {
                            id: 'governance-and-ethics',
                            text: 'Governance and Ethics',
                            pillar: 'Three',
                            section: 4,
                        },
                        {
                            id: 'data-privacy-and-cybersecurity',
                            text: 'Data Privacy and Cybersecurity',
                            pillar: 'Three',
                            section: 5,
                        },
                    ],
                },
                {
                    id: 'covid-19-response',
                    text: 'Covid-19',
                    link: '#pillar-four',
                    pillar: 'Four',
                    subLink: [],
                },
                {
                    id: 'end',
                    text: 'ESG REPORT 2021',
                    link: '#pillar-last',
                    pillar: 'Five',
                    subLink: [],
                },
            ],
            socials: [
                {
                    type: 'facebook',
                    text: 'Facebook',
                    icon: 'fb-color',
                    link: 'https://www.grab.com/my/',
                },
                {
                    type: 'twitter',
                    text: 'Twitter',
                    icon: 'twitter-color',
                    link: 'https://www.grab.com/my/',
                },
                {
                    type: 'linkedin',
                    text: 'LinkedIn',
                    icon: 'linkedin-color',
                    link: 'https://www.grab.com/my/',
                },
                {
                    type: 'copy_link',
                    text: 'Copy link',
                    icon: 'link-color',
                    link: 'https://www.grab.com/my/',
                },
            ],
            progressBarTitle: 'ESG REPORT 2021',
            progressBar: '0%',
        };
    },
    setup() {
        const state = computed(() => store.state);
        const onBeforeEnter = (el) => {
            el.style.opacity = 0;
            el.style.transform = store.state.mobileView
                ? 'translateX(-100px)'
                : 'translateY(100px)';
        };
        const onEnter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                y: !store.state.mobileView && 0,
                x: store.state.mobileView && 0,
                duration: 0.2,
                delay: el.dataset.index * 0.1,
                onComplete: done,
            });
        };

        const onBeforeEnterHeader = (el) => {
            el.style.opacity = 0;
        };
        const onEnterHeader = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                duration: 0.2,
                delay: 1.5,
                onComplete: done,
            });
        };

        return {
            state,
            onBeforeEnter,
            onEnter,
            onBeforeEnterHeader,
            onEnterHeader,
        };
    },
    watch: {
        open(value, oldValue) {
            if (value) {
                document.documentElement.style.overflow = 'hidden';
                return;
            }

            document.documentElement.style.overflow = 'auto';
            this.isCeo = false;
        },
        'state.activePillar'(value) {
            let activePillar = this.pillars.filter((item) => {
                return item.link == value;
            });

            setTimeout(() => {
                this.progressBarTitle =
                    activePillar[0].text.toLowerCase() == 'home'
                        ? 'ESG REPORT 2021'
                        : activePillar[0].text;
            }, 100);
        },
        share(value) {
            if (value) {
                document.documentElement.style.overflow = 'hidden';
                return;
            }

            document.documentElement.style.overflow = 'auto';
        },
    },
    computed: {
        url() {
            return window.location.host == 'localhost:3000'
                ? 'https://sustainability.stg-myteksi.com/'
                : window.location.origin;
        },
    },
    methods: {
        copyLink() {
            var createdInput = document.body.appendChild(
                document.createElement('input')
            );
            createdInput.value = window.location.origin;
            createdInput.select();
            document.execCommand('copy');
            createdInput.parentNode.removeChild(createdInput);
            this.copiedLink = true;

            setTimeout(() => {
                this.copiedLink = false;
            }, 3000);
        },
        scrollToSection(e, pillar, section) {
            this.open = false;

            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
            e.preventDefault();

            let desktopView = window.matchMedia('(min-width: 1024px)').matches;
            let panelsSection = document.querySelector(
                `#pillar-${pillar.toLowerCase()}  .main-container`
            );

            let target =
                '#pillar-' +
                pillar.toLowerCase() +
                (section ? ' .section-' + section : '');
            let targetElement = document.querySelector(target);
            let containerOffset =
                panelsSection.parentElement.offsetTop +
                targetElement?.offsetLeft;

            console.log('scrollToSection', target);

            if (desktopView) {
                gsap.to(window, {
                    scrollTo: {
                        y: containerOffset,
                        autoKill: false,
                    },
                    duration: 0.2,
                });
            } else {
                // gsap.to(window, {
                //     duration: 0.2,
                //     scrollTo: targetElement,
                // });
                targetElement.scrollIntoView();
            }
        },
    },
    mounted() {
        this.onScroll = false;
    },
    components: { SvgIcon, Share },
};
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
