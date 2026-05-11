<template>
    <div ref="sliderContainer" class="quiz-slider-container">
        <div ref="slider" class="quiz-slider">
            <div ref="sliderTrack" class="quiz-slider-track"></div>
            <div ref="sliderProgress" class="quiz-slider-progress"></div>
            <div
                ref="sliderStepsIndicators"
                class="quiz-slider-indicators"
            ></div>
            <div ref="sliderSteps" class="quiz-slider-steps"></div>
            <div
                ref="sliderThumbs"
                class="quiz-slider-thumb flex justify-center items-center"
            >
                <SvgIcon
                    class="w-[1.5rem] h-[1.5rem] lg:w-[3.214rem] lg:h-[3.214rem]"
                    name="favorite"
                ></SvgIcon>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import SvgIcon from './SvgIcon.vue';
import store from '@/store/index';

export default {
    data() {
        return {
            maxSteps: 4,
            stepsRange: [15, 35, 55, 75, 95],
        };
    },
    props: {
        socials: {
            type: Object,
            default: null,
        },
    },
    computed: {
        container() {
            return document.querySelector('.quiz-slider-container');
        },
        slider() {
            return document.querySelector('.quiz-slider');
        },
        progress() {
            return document.querySelector('.quiz-slider-progress');
        },
        thumb() {
            return document.querySelector('.quiz-slider-thumb');
        },
        indicators() {
            return document.querySelector('.quiz-slider-indicators');
        },
        steps() {
            return document.querySelector('.quiz-slider-steps');
        },
        rect() {
            return this.$refs.slider.getBoundingClientRect();
        },
    },
    methods: {
        handleMove(x) {
            var x = x - this.rect.left;
            if (x < 0) {
                x = 0;
            } else if (x > this.rect.width) {
                x = this.rect.width;
            }
            var step = Math.round((x / this.rect.width) * this.maxSteps);
            var percent = (step / this.maxSteps) * 100;

            this.thumb.style.left = `${percent}%`;
            this.progress.style.width = `${percent}%`;

            store.state.pillarFourQuiz.percentage = percent;
        },
        handleDrag(x) {
            var x = x - this.rect.left;
            if (x < 0) {
                x = 0;
            } else if (x > this.rect.width) {
                x = this.rect.width;
            }

            var percent = (x * 100) / this.rect.width;
            this.thumb.style.left = `${percent}%`;
            this.progress.style.width = `${percent}%`;
        },
        handleMouseUp(x) {
            if (window.pressed) {
                window.pressed = false;
                this.slider.classList.remove('drag-in-progress');
                this.handleMove(x);
            }
        },
        handleMouseDown(e) {
            e.stopPropagation();
            e.preventDefault();

            window.pressed = true;
            this.slider.classList.add('drag-in-progress');
        },
        handleMouseMove(x) {
            if (window.pressed) {
                this.handleDrag(x);
            }
        },
        renderSteps() {
            var _steps = [];
            var _indicators = [];
            for (var i = 0; i < this.maxSteps; i++) {
                var offset = Math.round(100 / this.maxSteps) * i;
                _steps.push(
                    `<span style='left: ${offset}%' data-id=${i}></span>`
                );

                _indicators.push(
                    `<span style='left: ${offset - 2}%' data-id=${i}>${
                        this.stepsRange[i] + '%'
                    }</span>`
                );
            }

            _steps.push(`<span style='left: 98%' data-id=${i}></span>`);

            _indicators.push(
                `<span style='left: 96%' data-id=${i}>${
                    this.stepsRange[4] + '%'
                }</span>`
            );

            this.steps.innerHTML = _steps.join('');
            this.indicators.innerHTML = _indicators.join('');
        },
        initializeQuizSlider() {
            // console.log('initialize quiz slider');

            const _this = this;

            window.pressed = false;

            this.renderSteps();

            document.addEventListener('mouseup', function (e) {
                if (window.pressed) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('MOUSEUP');
                    _this.handleMouseUp(e.clientX);
                }
            });

            this.thumb.addEventListener('mousedown', this.handleMouseDown);

            document.addEventListener('mousemove', function (e) {
                _this.handleMouseMove(e.clientX);
            });

            // Mobile
            document.addEventListener('touchend', function (e) {
                if (window.pressed) {
                    e.stopPropagation();
                    e.preventDefault();

                    console.log('TOUCHEND');
                    _this.handleMouseUp(e.changedTouches[0].clientX);
                }
            });

            this.thumb.addEventListener('touchstart', this.handleMouseDown);

            document.addEventListener('touchmove', function (e) {
                _this.handleMouseMove(e.changedTouches[0].clientX);
            });

            this.slider.addEventListener('mousedown', function (e) {
                _this.handleMove(e.clientX);
            });
        },
    },
    mounted() {
        this.initializeQuizSlider();
    },
    components: { SvgIcon },
};
</script>
