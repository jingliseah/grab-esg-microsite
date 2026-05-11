<template>
    <div class="thumbnail full section-9">
        <Story
            :title="title"
            :description="description"
            :socials="socials"
            :image="image"
            :modalContentTitle="modalContentTitle"
            :modalContentDescription="modalContentDescription"
            :modalDesktopImage="modalDesktopImage"
            :modalMobileImage="modalMobileImage"
        ></Story>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import store from '@/store/index';
import Share from '../Share.vue';
import Story from '../Story.vue';

export default {
    data() {
        return {
            title: '“Using an electric motorbike that I rented from Grab to earn money has been very convenient. I don’t have to worry about topping up gas as we can swap the batteries, and it also helps reduce pollution.”',
            description:
                'Uci Mariana, Grab driver-partner, Indonesia',
            image: '/images/pillar-2/section-9/intro-background-img.jpg',
            modalDesktopImage:
                '/images/pillar-2/section-9/intro-background-img-desktop-modal.jpg',
            modalMobileImage:
                '/images/pillar-2/section-9/intro-background-img-mobile-modal.jpg',
            modalContentTitle:
                'Developing an EV ecosystem in Indonesia',
            modalContentDescription:
                'In 2021, Grab rolled out around 8,500 electric vehicles through our partnerships with Viar Motor, Kymco, and Gesits, making us the largest EV fleet owner in Indonesia. <br/><br/>We worked with Kymco to develop Battery Swap Stations, and deployed them at Grab premises as well as six stations owned by Perusahaan Listrik Negara (PLN), Indonesia’s state energy company. <br/><br/>This helps to build up the EV ecosystem as driver-partners can conveniently swap out batteries that are low in power for fully charged ones. '
        };
    },
    computed: {
        socials() {
            let result = {
                section: 9,
                pillar: 'environment',
                list: [
                    {
                        type: 'facebook',
                        text: 'Facebook',
                        icon: 'fb-color',
                        title: this.title,
                        description: this.description,
                    },
                    {
                        type: 'twitter',
                        text: 'Twitter',
                        icon: 'twitter-color',
                        title: this.title,
                        description: this.description,
                    },
                    {
                        type: 'linkedin',
                        text: 'LinkedIn',
                        icon: 'linkedin-color',
                        title: this.title,
                        description: this.description,
                    },
                    {
                        type: 'copy_link',
                        text: 'Copy link',
                        icon: 'link-color',
                        title: this.title,
                        description: this.description,
                    },
                ],
            };
            return result;
        },
    },
    methods: {
        triggerAnimation(thumbNails, offset) {
            let titleDescription = document.querySelectorAll(
                '#pillar-two .section-9 .title-description'
            );

            let social = document.querySelectorAll(
                '#pillar-two .section-9 .social'
            );

            let background = document.querySelectorAll(
                '#pillar-two .section-9 .img-background'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-two .section-9')
            );

            let modalContent = store.state.storyModalContent;

            let timeline = gsap.timeline({
                defaults: { ease: 'power1.out' },
                scrollTrigger: {
                    invalidateOnRefresh: store.getters.stInvalidateOnRefresh(),
                    scrub: false,
                    // start:
                    //     offset[index] -
                    //     (store.state.mobileView
                    //         ? window.innerHeight
                    //         : window.innerWidth) *
                    //         1.5,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.5,
                    end: !store.state.mobileView && offset[index] - window.innerWidth * 0.7,
                    trigger: '#pillar-two .section-9',
                    markers: store.state.markers,
                    id: 'section-9',
                    toggleActions: store.getters.animationDesktopReverse(),
                },
            });

            timeline
                .fromTo(
                    titleDescription,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        stagger: 0.05,
                        ease: 'power4.out',
                    }
                )
                .fromTo(
                    social,
                    {
                        autoAlpha: 0,
                        // x: -50,
                    },
                    {
                        // x: 0,
                        autoAlpha: 1,
                        duration: 0.2,
                        // stagger: 0.1,
                    }
                )
                // .fromTo(
                //     background,
                //     {
                //         autoAlpha: 0,
                //     },
                //     {
                //         autoAlpha: 1,
                //         duration: 0.2,
                //         // delay: 1,
                //         ease: 'power4.out',
                //     }
                // );
        },
        triggerPopUp() {
            alert('story pop up');
        },
    },
    mounted() {},
    components: { Share, Story },
};
</script>
