<template>
    <div>
        <div class="project-link" v-for="project in this.projects" :key="project">
            <NuxtLink class="text-gradient" :to="'/project/' + project">
                {{ formatTitle(project) }}
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    data: function() {
        return {
            projects: [
                'autosur',
                'intolerences',
                '03-july',
                'school-projects'
            ]
        }
    },
    methods: {
        formatTitle(title) {
            return title.replace('-', ' ').toUpperCase()
        }
    }
}
</script>
