<template>
    <div>
        <Transition name="fade">
            <div
                @click="scrollTo($event)"
                class="scroll-to-back lg:w-[12.5rem] lg:h-[11rem] lg:flex lg:justify-center lg:items-center button-pulse absolute bg-green bottom-32 right-6 lg:right-32 z-50 p-5 lg:px-8 lg:py-10 text-white cursor-pointer opacity-1 hover:bg-white hover:text-green transform transition ease-in-out duration-300"
            >
                <span class="hidden lg:block font-bold text-[1.429rem]">
                    Scroll up<br />
                    to return
                </span>
                <SvgIcon
                    class="lg:hidden stroke-0 h-5 w-5 rotate-180"
                    name="arrow-down"
                ></SvgIcon>
            </div>
        </Transition>
    </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SvgIcon from './SvgIcon.vue';

export default {
    data() {
        return {
            buttonClicked: false,
            scrolled: false,
        };
    },
    methods: {
        scrollTo(e) {
            this.scrolled = true;
            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
            e.preventDefault();
            let targetElement = document.querySelector(
                '#pillar-intro .section-1'
            );
            const desktopView = window.matchMedia('(min-width: 1024px)').matches;
            if (desktopView) {
                let pos = targetElement.offsetLeft;
                gsap.to(window, {
                    scrollTo: {
                        y: pos,
                        autoKill: false,
                    },
                    duration: 0.2,
                });
            } else {
                gsap.to(window, {
                    duration: 0.2,
                    scrollTo: targetElement,
                });
            }
        },
    },
    mounted() {},
    components: { SvgIcon },
};
</script>
