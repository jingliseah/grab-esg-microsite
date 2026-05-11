<template>
    <div class="thumbnail full section-11">
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
    <!-- <BlackScreen ref="blackscreen" :section="'#pillar-one .section-10'"></BlackScreen> -->
</template>

<script>
import { gsap } from 'gsap';
import store from '@/store/index';
import Share from '../Share.vue';
import Story from '../Story.vue';
import BlackScreen from '../BlackScreen.vue'

export default {
    data() {
        return {
            title: '“The Merchant Cash Advance allowed us to be able to leverage the growth of our business, without the burden of monthly lump sum payments, which helped us manage our cash flow better.”',
            description:
                'Nattakarn Khingpat (Mac), owner of <br/>Restaurant Khaw Kaeng Kin Keng, Thailand',
            image: '/images/pillar-1/section-11/intro-background-img-desktop.jpg',
            modalDesktopImage:
                '/images/pillar-1/section-11/intro-background-img-desktop-modal.jpg',
            modalMobileImage:
                '/images/pillar-1/section-11/intro-background-img-mobile-modal.jpg',
            modalContentTitle:
                'A Thai restaurateur <br class="hidden lg:block"/>upsizes with Grab',
            modalContentDescription:
                'Mac left his full-time job to start Khaw Kaeng Kin Keng. He tapped on Grab’s business loan offerings to scale up his business and better manage the business’ cash flow. <br/><br/> “Within a week after we offered the food delivery service, our orders went up to more than 20-30 per day which generated a continual income growth beyond our expectations. The <strong>Merchant Cash Advance</strong> allowed us to be able to leverage the growth of our business, without the burden of monthly lump sum payments, which helped us manage our cash flow better.”'
        };
    },
    computed: {
        socials() {
            let result = {
                section: 11,
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
            let _this = this;
            let titleDescription = document.querySelectorAll(
                '#pillar-one .section-11 .title-description'
            );

            let social = document.querySelectorAll(
                '#pillar-one .section-11 .social'
            );

            let background = document.querySelectorAll(
                '#pillar-one .section-11 .img-background'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-11')
            );

            let modalContent = store.state.storyModalContent;

            let timeline = gsap.timeline({
                defaults: { ease: 'power1.out' },
                scrollTrigger: {
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
                    end: !store.state.mobileView && offset[index] - window.innerWidth * 0.1,
                    trigger: '#pillar-one .section-11',
                    markers: store.state.markers,
                    id: 'section-11',
                    toggleActions: store.getters.animationDesktopReverse(),
                    // onEnter:() => {
                    //     _this.$refs.blackscreen.triggerBlack();
                    // },
                    // onLeaveBack:() => {
                    //     _this.$refs.blackscreen.removeBlack();
                    // },
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
    components: { Share, Story, BlackScreen },
};
</script>
