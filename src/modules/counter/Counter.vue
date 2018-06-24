<template>
    <div class="counter">
        <p class="counter-detail"><span class="label">Current:</span>{{ count }}</p>
        <button class="btn btn-increase" @click="onIncreaseClick">Increase</button>
    </div>
</template>

<style lang="scss">
    .counter {
        .counter-detail {
            font-size: 1.2rem;
            .label {
                display: inline-block;
                margin-right: 0.5rem;
                font-weight: 600;
            }
        }

        .btn-increase {
            background-color: #111;
            color: #fafafa;
        }
    }
</style>

<script>
    export default {
        name: 'counter',
        computed: {
            count() {
                return this.$store.state.counter
            },
        },
        methods: {
            onIncreaseClick() {
                this.$store.commit('counter_increase');
            },
        },
    }
</script>
