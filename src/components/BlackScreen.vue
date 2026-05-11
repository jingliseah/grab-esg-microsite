<template></template>

<script>
import { gsap } from 'gsap';

export default {
    name: 'BlackScreen',
    data() {
        return {};
    },
    props: {
        section: String,
        timeout: {
            type: Number,
            default: 100,
        },
    },
    methods: {
        triggerBlack() {
            let desktopView = window.matchMedia('(min-width: 1024px)').matches;
            if (desktopView) {
                let background = document.querySelectorAll(this.section);

                gsap.to(background, {
                    opacity: 0,
                    duration: 0.2,
                });
            }
        },
        removeBlack() {
            let desktopView = window.matchMedia('(min-width: 1024px)').matches;
            if (desktopView) {
                let background = document.querySelectorAll(this.section);

                setTimeout(() => {
                    gsap.to(background, {
                        opacity: 1,
                        duration: 0.2,
                    });
                }, this.timeout);
            }
        },
    },
};
</script>
