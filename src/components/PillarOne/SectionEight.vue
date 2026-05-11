<template>
    <div class="thumbnail full section-8">
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
            title: '“There are not many job opportunities for deaf people. But once I got my driving licence, I realised I could apply to become a Grab driver.”',
            description:
                'Charles Thin, PWD driver-partner, Malaysia',
            image: '/images/pillar-1/section-8/intro-background-img-desktop.jpg',
            modalDesktopImage:
                '/images/pillar-1/section-8/intro-background-img-desktop-modal.jpg',
            modalMobileImage:
                '/images/pillar-1/section-8/intro-background-img-mobile-modal.jpg',
            modalContentTitle:
                'A disabled Grab driver-partner dreams big for his kids',
            modalContentDescription:
                'Charles Thin was born deaf and is mute, and can only communicate through sign language. When his father passed away from cancer when he was 15, Charles had to assume the responsibility of taking care of his mother and younger sister. After trying many different jobs, he eventually became a Grab driver-partner. Now married with two young children, Charles is working towards buying a modest two-storey house for himself, and sending his girls to college. <br/><br/>“There are not many job opportunities for deaf people. But once I got my driving licence, I realised I could apply to become a Grab driver. I wasn’t sure my application would be accepted, but when I was invited to the onboarding session, I was given one-on-one training. That’s when I knew I had Grab’s support. For me, driving is a way to be free. To explore. And now, to be financially independent.”',
        };
    },
    computed: {
        socials() {
            let result = {
                section: 8,
                pillar: 'social-impact',
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
                '#pillar-one .section-8 .title-description'
            );

            let social = document.querySelectorAll(
                '#pillar-one .section-8 .social'
            );

            let background = document.querySelectorAll(
                '#pillar-one .section-8 .img-background'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-8')
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
                    //         1.2,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1.2,
                    end: !store.state.mobileView && offset[index] + window.innerWidth * 0.2,
                    trigger: '#pillar-one .section-8',
                    markers: store.state.markers,
                    id: 'section-8',
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
