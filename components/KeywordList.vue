<template>
    <div class="keyword-list">
        <div class="title">
            {{ title }} -
        </div>

        <div class="content">
            <div class="keyword" v-for="keyword in keywords" :key="keyword.text">
                <a v-if="hasLinks" :href="keyword.link" target="_blank">{{ keyword.text }}</a>
                <span v-else :class="{ favorite: keyword.favorite }">{{ keyword.text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'keywords', 'hasLinks']
}
</script>

<style>

</style>