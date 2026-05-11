<template>
    <div class="thumbnail full section-5">
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
import StoryModal from '../_StoryModal.vue'
import BlackScreen from '../BlackScreen.vue'

export default {
    data() {
        return {
            title: '“We had never used the internet before, or owned a computer. But we believed we could do it, and so with a second-hand laptop and some guidance from a friend, we became a GrabFood merchant-partner.” ',
            description:
                'Mohammed Karim and Siti Nur Aisyah, Owners of Tandoori CT House, Malaysia',
            image: '/images/pillar-1/section-5/social-economic-empowerment-hero-img.jpg',
            modalDesktopImage:
                '/images/pillar-1/section-5/intro-background-img-desktop-modal.jpg',
            modalMobileImage:
                '/images/pillar-1/section-5/intro-background-img-mobile-modal.jpg',
            modalContentTitle:
                'A small business owner goes digital thanks to Grab',
            modalContentDescription:
                'Restoran Karim Tandoori CT House is one of the merchant-partners who is part of Malaysia’s GrabFood small business programme. Prior to the restaurant’s digitalisation, the owners had set up their shop in various locations, but faced several challenges, such as the lack of customers and the difficulty of finding reliable staff for multiple shops. When they eventually decided to concentrate their efforts back at their first location, footfall was low, which eventually pushed them to go online.<br/><br/>“We had never used the internet before, or owned a computer. But we believed we could do it, and so with a second-hand laptop and some guidance from a friend, we became a GrabFood merchant-partner. You could say technology saved us twice, when we first went online, and again when the MCO [Malaysia’s movement control order due to the pandemic] hit. So now, we constantly do what we can to promote ourselves online.”',
        };
    }, 
    computed: {
        url() {
            return window.location.host == 'localhost:3000'
                ? encodeURIComponent(
                      'https://sustainability.stg-myteksi.com/my/?section=5#social-impact'
                  )
                : encodeURIComponent(this.url);
        },
        socials() {
            let result = {
                section: 5,
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
                '#pillar-one .section-5 .title-description'
            );

            let social = document.querySelectorAll(
                '#pillar-one .section-5 .social'
            );

            let background = document.querySelectorAll(
                '#pillar-one .section-5 .img-background'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-one .section-5')
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
                    //         : window.innerWidth * 1),
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 1,
                    end: !store.state.mobileView && offset[index] - window.innerWidth * 0.1,
                    trigger: '#pillar-one .section-5',
                    markers: store.state.markers,
                    id: 'section-5',
                    toggleActions: store.getters.animationDesktopReverse(),
                    // onEnter:() => {
                    //     _this.$refs.blackscreen.triggerBlack();
                    // },
                    // onLeaveBack:() => {
                    //     _this.$refs.blackscreen.removeBlack();
                    // },
                    // onUpdate: () => {
                    //     modalContent.title =
                    //         'A small business owner goes digital thanks to Grab';
                    //     modalContent.description =
                    //         'Restoran Karim Tandoori CT House is one of the merchant-partners who is part of Malaysia’s GrabFood small business programme. Prior to the restaurant’s digitalisation, the owners had set up their shop in various locations, but faced several challenges, such as the lack of customers and the difficulty of finding reliable staff for multiple shops. When they eventually decided to concentrate their efforts back at their first location, footfall was low, which eventually pushed them to go online.<br/><br/>“We had never used the internet before, or owned a computer. But we believed we could do it, and so with a second-hand laptop and some guidance from a friend, we became a GrabFood merchant-partner. You could say technology saved us twice, when we first went online, and again when the MCO [Malaysia’s movement control order due to the pandemic] hit. So now, we constantly do what we can to promote ourselves online.”';
                    //     modalContent.desktopImage = this.modalDesktopImage
                    //         ? this.modalDesktopImage
                    //         : this.image;
                    //     modalContent.mobileImage = this.modalMobileImage
                    //         ? this.modalMobileImage
                    //         : this.modalDesktopImage;
                    //     modalContent.socials = this.socials;
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
    components: { Share, Story, BlackScreen, StoryModal },
};
</script>
