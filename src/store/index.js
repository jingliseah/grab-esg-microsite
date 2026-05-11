import { reactive } from 'vue';

const store = {
    state: reactive({
        mobileView: false,
        darkMode: false,
        storyModal: false,
        displayDownloadReport: true,
        storyModalContent: {
            title: '',
            description: '',
            desktopImage: '',
            mobileImage: '',
            socials: {},
        },
        activePillar: null,
        activeSection: null,
        pillarOneQuiz: null,
        pillarTwoQuiz: null,
        pillarFourQuizPercentage: 0,
        pillarFourQuiz: {
            percentage: 0,
            result: false,
        },
        count: null,
        numberOfSection: {
            pillarIntro: 0,
            pillarOne: 0,
            pillarTwo: 0,
            pillarThree: 0,
            pillarFour: 0,
        },
        offset: {
            pillarIntro: [],
            pillarOne: [],
            pillarTwo: [],
            pillarThree: [],
            pillarFour: [],
            pillarLast: [],
        },
        markers: false,
        browserZoomLevel: null,
    }),
    getters: {
        getCount() {
            return store.state.count;
        },
        animationDesktopReverse() {
            // let desktopView = window.matchMedia('(min-width: 1024px)').matches;
            // if(desktopView) return 'play none none reverse';
            return 'play none none reverse';
        },
        stInvalidateOnRefresh() {
            let desktopView = window.matchMedia('(min-width: 1024px)').matches;
            if(desktopView) return true;
            return false;
        },
    },
    mutations: {
        incrementCount() {
            store.state.count++;
        },
        setNumberOfSection(state, { pillar, number }) {
            state.numberOfSection[pillar] = number;
        },
    },
    actions: {
        initializeCount() {
            store.state.count = 0;
        },
    },
};

export default store;
