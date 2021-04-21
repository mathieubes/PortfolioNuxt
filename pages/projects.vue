<template>
    <div class="projects-container">
        <div :data-aos="isEven(project)" data-aos-offset="150" class="project-link" v-for="project in this.projects" :key="project">
            <NuxtLink class="text-gradient" :to="'/project/' + project">
                {{ formatTitle(project) }}
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import aos from '~/mixins/aos'

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
        },
        isEven(project) {
            let transition = 'fade-'
            if (this.projects.indexOf(project) % 2 == 0)
                transition += 'right'
            else
                transition += 'left'
            return transition
        }
    },
    mixins: [aos],
    transition: 'fade-page-transition'
}
</script>
