<template>
    <div class="thumbnail full fakePin section-20">
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
            title: '“Meeting other leaders through the Lead The Way programme allowed me, especially as a woman leader, to discuss common challenges and share our perspectives in a safe space.”',
            description: 'Rita Jararatnam, Head of Customer Support, Singapore',
            image: '/images/pillar-1/section-20/social-peopleculture-hero-img.jpg',
            modalDesktopImage:
                '/images/pillar-1/section-20/intro-background-img-desktop-modal.jpg',
            modalMobileImage:
                '/images/pillar-1/section-20/intro-background-img-mobile-modal.jpg',
            modalContentTitle: 'A Grab leader sharpens her decision making',
            modalContentDescription:
                'Rita Jararatnam, who leads over 500 employees across different countries, attended Grab’s Lead The Way programme, which seeks to develop the leadership skills of new leaders<sup>13</sup>. <br/><br/>“Meeting other leaders through the <strong>Lead The Way programme</strong> allowed me, especially as a woman leader, to discuss common challenges and share our perspectives in a safe space. The support and resources made available to me through this programme, helps me make the best decisions for my team, our consumers, and myself every day.”',
        };
    },
    computed: {
        socials() {
            let result = {
                section: 20,
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
                '#pillar-one .section-20 .title-description'
            );

            let social = document.querySelectorAll(
                '#pillar-one .section-20 .social'
            );

            let background = document.querySelectorAll(
                '#pillar-one .section-20 .img-background'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-20')
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
                    //         1,
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 0.2,
                    trigger: '#pillar-one .section-20',
                    markers: store.state.markers,
                    // markers: true,
                    id: 'section-20',
                    toggleActions: store.getters.animationDesktopReverse(),
                    onEnter: () => {
                        this.$confetti.stop();
                    },
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
                );
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
