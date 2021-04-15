<template>
    <div class="project-info">
        <h3>{{ title }}</h3>
        <p v-if="(typeof content == 'string')">{{ content }}</p>
        <ul v-else>
            <li v-for="element in content" :key="element">{{ element }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['title', 'content']
}
</script>
