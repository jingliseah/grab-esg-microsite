<template>
    <svg class="svg-icon" :width="width" :height="height">
        <use :xlink:href="symbolId" fill="currentColor" stroke="currentColor" />
    </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
    name: 'SvgIcon',
    props: {
        prefix: {
            type: String,
            default: 'i',
        },
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: '#333',
        },
        width: {
            type: String,
            default: '24px',
        },
        height: {
            type: String,
            default: '24px',
        },
    },
    setup(props) {
        const symbolId = computed(() => `#${props.prefix}-${props.name}`)
        return { symbolId }
    },
})
</script>
