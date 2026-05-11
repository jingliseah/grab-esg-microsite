<template>
    <div class="flex space-x-7 lg:space-x-10 mt-10">
        <div v-for="social in socials.list" :key="social.text" class="social">
            <!-- socials:{{ socials }} -->
            <!-- <ShareNetwork
                v-if="social.type !== 'copy_link'"
                :network="social.type"
                :url="social.link"
                :title="social.title"
                :description="social.description"
                :quote="social.quote"
                :hashtags="social.hashtags"
            > -->
            <a
                rel="noopener"
                v-if="social.type !== 'copy_link'"
                class="flex flex-col items-center justify-center space-y-4 cursor-pointer"
                @click="
                    shareControl(
                        socials.section,
                        socials.pillar,
                        social.title,
                        social.description,
                        social.type
                    )
                "
            >
                <SvgIcon
                    class="stroke-0 w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem]"
                    :name="social.icon"
                ></SvgIcon>
                <!-- <p class="text-black font-bold">
                        {{ social.text }}
                    </p> -->
            </a>
            <!-- </ShareNetwork> -->
            <div v-else @click="copyLink()" class="social">
                <div
                    class="flex flex-col items-center justify-center space-y-4 cursor-pointer relative"
                >
                    <SvgIcon
                        class="stroke-0 w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem]"
                        :name="social.icon"
                    ></SvgIcon>
                    <!-- <p class="text-black font-bold">
                        {{ social.text }}
                    </p> -->
                    <Transition name="fade">
                        <span
                            v-if="copiedLink"
                            class="bg-black/70 absolute top-0 -right-[11rem] text-white px-2 py-1 font-['Inter'] font-medium"
                            >Copied to clipboard</span
                        >
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import SvgIcon from './SvgIcon.vue';
import store from '../store/index';

export default {
    data() {
        return {
            copiedLink: false,
        };
    },
    props: {
        socials: {
            type: Object,
            default: null,
        },
    },
    methods: {
        copyLink() {
            var createdInput = document.body.appendChild(
                document.createElement('input')
            );
            createdInput.value = window.location.href;
            createdInput.select();
            document.execCommand('copy');
            createdInput.parentNode.removeChild(createdInput);
            this.copiedLink = true;

            setTimeout(() => {
                this.copiedLink = false;
            }, 3000);
        },
        shareControl(section, pillar, title, description, shareType) {
            let currentDomain =
                window.location.host == 'localhost:3000'
                    ? 'https://sustainability.stg-myteksi.com/my/'
                    : window.location.origin + window.location.pathname;

            let storyModal = store.state.storyModal;

            let url = encodeURIComponent(
                currentDomain +
                    '?section=' +
                    section +
                    (storyModal ? '&story=' + storyModal : '') +
                    '#' +
                    pillar
            );

            // // Set title
            // document.querySelector("[property='og:title']")?.remove();
            // document.querySelector("[property='twitter:title']")?.remove();
            // var metaTitle = document.createElement('meta');
            // metaTitle.setAttribute(
            //     'property',
            //     shareType == 'twitter' ? 'twitter:title' : 'og:title'
            // );
            // metaTitle.content = title;
            // document.getElementsByTagName('head')[0].appendChild(metaTitle);

            // // Set description
            // document.querySelector("[property='og:description']")?.remove();
            // document
            //     .querySelector("[property='twitter:description']")
            //     ?.remove();
            // var metaDescription = document.createElement('meta');
            // metaDescription.setAttribute(
            //     'property',
            //     shareType == 'twitter'
            //         ? 'twitter:description'
            //         : 'og:description'
            // );
            // metaDescription.content = description;
            // document
            //     .getElementsByTagName('head')[0]
            //     .appendChild(metaDescription);

            if (shareType == 'facebook') {
                //facebook share
                window.open(
                    'https://www.facebook.com/sharer/sharer.php?u=' + url,
                    '_blank',
                    'width=400,height=500'
                );
            } else if (shareType == 'twitter') {
                //twitter share
                window.open(
                    'https://twitter.com/intent/tweet?url=' + url,
                    '_blank',
                    'width=400,height=500'
                );
            } else {
                //linkedin share
                window.open(
                    'https://www.linkedin.com/shareArticle?mini=true&url=' +
                        url,
                    '_blank',
                    'width=400,height=500'
                );
            }
        },
    },
    mounted() {},
    components: { SvgIcon },
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
