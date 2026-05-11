<template>
    <div class="thumbnail full fakePin section-6">
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
import SvgIcon from '../SvgIcon.vue';

export default {
    data() {
        return {
            title: '“We are heartened to work closely with the Indonesian government to make the Grab vaccination centres a success for our partners and the public.”',
            description: 'Ridzki Kramadibrata, President, Grab Indonesia',
            image: '/images/pillar-4/section-6/covid19-story1-img.jpg',
            modalDesktopImage:
                '/images/pillar-4/section-6/intro-background-img-desktop-modal.jpg',
            modalMobileImage:
                '/images/pillar-4/section-6/intro-background-img-desktop-modal.jpg',
            modalContentTitle:
                'Grab accelerates distribution of vaccines in Indonesia',
            modalContentDescription:
                '<div>' +
                'Grab worked with Indonesia’s Ministry of Health and Good Doctor Technology Indonesia<sup>31</sup> to run ' +
                'vaccination centres that allowed recipients to walk in or drive-through, ' +
                'accelerating the distribution of vaccines. <br /><br />In total, Grab assisted ' +
                'in the distribution of vaccines throughout Indonesia:' +
                '<div class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20 mt-8 lg:mt-12">' +
                '<div class="text-gray flex items-center space-x-6">' +
                '<img class="w-[2.857rem] lg:w-[3.357rem]" src="/images/pillar-4/section-6/city.svg" alt="image" />' +
                `<span class="font-['Inter'] font-bold leading-tight"` +
                '>In > 54 cities' +
                '</span>' +
                '</div>' +
                '<div class="text-gray flex items-center space-x-6">' +
                '<img class="w-[2.857rem] lg:w-[4.118rem]" src="/images/pillar-4/section-6/people.svg" alt="image" />' +
                `<span class="font-['Inter'] font-bold leading-tight">To > 580,000 <br class="hidden lg:block"/>people </span>` +
                '</div>' +
                '</div>' +
                '<div class="mt-8 lg:mt-12 space-y-4">' +
                '<p>Grab also donated:</p>' +
                '<div class="flex space-x-4 items-start lg:items-center">' +
                '<img class="w-[1.25rem] lg:w-[1.875rem] mt-1 lg:mt-0" src="/images/pillar-4/section-6/checkmark.svg" alt="image" />' +
                '<span>1,000 oxygen concentrators and oxygen cylinders</span>' +
                '</div>' +
                '<div class="flex space-x-4 items-start lg:items-center">' +
                '<img class="w-[1.25rem] lg:w-[1.875rem] mt-1 lg:mt-0" src="/images/pillar-4/section-6/checkmark.svg" alt="image" />' +
                '<span>One million doses of vitamins to healthcare workers</span>' +
                '</div>' +
                '<div class="flex space-x-4 items-start lg:items-center">' +
                '<img class="w-[1.25rem] lg:w-[1.875rem] mt-1 lg:mt-0" src="/images/pillar-4/section-6/checkmark.svg" alt="image" />' +
                '<span>10,000 free rides for those donating convalescent plasma</span>' +
                '</div>' +
                '</div>' +
                '</div>',
        };
    },
    computed: {
        socials() {
            let result = {
                section: 6,
                pillar: 'covid-19-response',
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
                '#pillar-four .section-6 .title-description'
            );

            let social = document.querySelectorAll(
                '#pillar-four .section-6 .social'
            );

            let background = document.querySelectorAll(
                '#pillar-four .section-6 .img-background'
            );

            let index = thumbNails.indexOf(
                document.querySelector('#pillar-four .section-6')
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
                    //         : window.innerWidth),
                    start: store.state.mobileView
                        ? 'top 70%'
                        : offset[index] - window.innerWidth * 2.5,
                    end:
                        !store.state.mobileView &&
                        offset[index] - window.innerWidth * 1.6,
                    trigger: '#pillar-four .section-6',
                    markers: store.state.markers,
                    id: 'section-6',
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
    components: { Share, Story, SvgIcon },
};
</script>
