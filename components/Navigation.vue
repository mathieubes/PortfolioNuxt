<template>
    <nav class="main-navigation">
        <div class="row center navigation" v-if="currentPage != 'project-name'">
            <div class="nav-link" v-for="page in this.pages" :key="page.id">
                <NuxtLink :to='page.route'>
                    <img :src='page.activeIcon' v-if='page.filename === currentPage'/>
                    <img :src='page.icon' v-else/>
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script>
    import HomeIcon from '@/assets/images/Home.svg';
    import PaperIcon from '@/assets/images/Paper.svg';
    import ProfileIcon from '@/assets/images/Profile.svg';
    import SendIcon from '@/assets/images/Send.svg';
    import HomeActiveIcon from '@/assets/images/nav-active/Home.svg';
    import PaperActiveIcon from '@/assets/images/nav-active/Paper.svg';
    import ProfileActiveIcon from '@/assets/images/nav-active/Profile.svg';
    import SendActiveIcon from '@/assets/images/nav-active/Send.svg';


    export default {
        data() {
            return {
                pages: [
                    { filename: "index", route: "/", title: "home", icon: HomeIcon, activeIcon: HomeActiveIcon },
                    { filename: "projects", route: "/projects", title: "projects", icon: PaperIcon, activeIcon: PaperActiveIcon },
                    { filename: "about", route: "/about", title: "about", icon: ProfileIcon, activeIcon: ProfileActiveIcon },
                    { filename: "contact", route: "/contact", title: "contact", icon: SendIcon, activeIcon: SendActiveIcon }
                ],
            }
        },
        computed: {
            currentPage: function() {
                return this.$nuxt.$route.name
            }
        }
    }
</script>
