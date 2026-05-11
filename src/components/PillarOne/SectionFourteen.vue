<template>
    <div class="thumbnail full section-14">
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
            title: '“The Grab-Mastercard training programme has been the perfect opportunity for me as it provided me with training and knowledge on the latest tech topics.”',
            description: 'Didi Humaidi, Grab driver-partner, Indonesia',
            image: '/images/pillar-1/section-14/intro-background-img-desktop.jpg',
            modalDesktopImage:
                '/images/pillar-1/section-14/intro-background-img-desktop-modal.jpg',
            modalMobileImage:
                '/images/pillar-1/section-14/intro-background-img-mobile-modal.jpg',
            modalContentTitle:
                'A driver-partner prepares for a brighter future with Grab',
            modalContentDescription:
                'Didi Humaidi is a Grab-driver partner who participated in the Cyber Security Training programme that Grab made available to eligible driver-partners and family members through our partnership with Mastercard and InfraDigital Foundation (IDF).<br/><br/>“I have always been interested in information technology and dreamt of pursuing a career in that field. The <strong>Grab-Mastercard training programme<sup>12</sup></strong> has been the perfect opportunity for me as it provided me with training and knowledge on the latest tech topics, such as cybersecurity, which I believe would make me more attractive to potential employers. I hope my training allows me to get my foot in the door and I can realise my goal of transitioning back into the IT sector.”'
        };
    },
    computed: {
        socials() {
            let result = {
                section: 14,
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
                '#pillar-one .section-14 .title-description'
            );

            let social = document.querySelectorAll(
                '#pillar-one .section-14 .social'
            );

            let background = document.querySelectorAll(
                '#pillar-one .section-14 .img-background'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-14')
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
                    end: !store.state.mobileView && offset[index] - window.innerWidth * 0.2,
                    trigger: '#pillar-one .section-14',
                    markers: store.state.markers,
                    id: 'section-14',
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
