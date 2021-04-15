<template>
    <div class="container project-container">
        <img class="logo" :src="require(`~/assets/images/projects/${currentProject()}.png`)" />

        <h1 class="project-name">{{ getProjectName() }} <NuxtLink class="close-icon" to="/projects"><img :src="closeIcon"></NuxtLink></h1>

        <div class="group-info">
            <div class="info">
                <ProjectInfo title="Period" :content="getPeriod()" />
                <ProjectInfo title="Compagnies" :content="getCompagnies()" />
                <ProjectInfo title="Skills" :content="getSkills()" />
            </div>
            <div class="desc">
                <p v-for="(paragraph, key) in getDesc()" :key="key">
                    {{ paragraph }}
                </p>
            </div>
        </div>

        <div class="image-mosaique" v-if="hasProjectImages()">
            <h3>Assets</h3>
            <img v-for="projectImage in getProjectImages()" :key="projectImage" :src="require(`~/assets/images/projects/${currentProject()}/${projectImage}`)" />
        </div>
    </div>
</template>

<script>
import CloseSquareIcon from '@/assets/images/CloseSquare.svg';

export default {
    data: function() {
        return {
            closeIcon: CloseSquareIcon,
            'autosur': {
                projectName: 'Time clock Autosur',
                period: 'spring 2021',
                compagnies: 'autosur',
                skills: ['csharp', '.net core 5', 'wpf', 'sql server'],
                desc: [
                    'Since the Autosur\'s technical control of Champlan change his whole computer pool they wanted a new time clock software for their employees.',
                    'The development of this project is in progress...',
                    'It will be available for Windows, MacOS and Linux with the new DotNET Core 5.'
                ],
                projectImages: []
            },
            '03-july': {
                projectName: 'Gasoil Now OSM',
                period: 'winter 2020',
                compagnies: '03july & leonard.agency',
                skills: ['html / css', 'php', 'ajax', 'asp.net'],
                desc: [
                    'The OSM Gasoil Now project is a project that “migrated” the “Gasoil Now” mobile application to a website.',
                    'This web application is, unlike the application, primarily intended for times of crisis and fuel shortages.',
                    'The main goal for this app was optimization. The site needed to be able to handle the load of thousands of users. For this, a personalized caching system has been set up to support the load both on the web server and also on the API server.'
                ],
                projectImages: ['map.png']
            }
        }
    },
    methods: {
        currentProject: function() {
            return this.$route.params.name
        },
        getProjectName: function() {
            return this[this.currentProject()].projectName
        },
        getPeriod: function() {
            return this[this.currentProject()].period
        },
        getCompagnies: function() {
            return this[this.currentProject()].compagnies
        },
        getSkills: function() {
            return this[this.currentProject()].skills
        },
        getDesc: function() {
            return this[this.currentProject()].desc
        },
        getProjectImages: function() {
            return this[this.currentProject()].projectImages
        },
        hasProjectImages: function() {
            return this[this.currentProject()].projectImages == 0 ? false : true
        }
    }
}
</script>