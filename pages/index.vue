<template>
    <div class="container">
        <div class="welcome">
            <div>
                <h1 data-aos="fade-down" data-aos-duration="1500">Mathieu Bes</h1>
                <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">Student web developer & design lover based in Paris.</h2>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
                <VisitCard />
            </div>
        </div>

        <div class="skills-socials">
            <KeywordList data-aos="fade-right" :title="skills.title" :keywords="skills.keywords" :has-links="skills.hasLinks" />
            <KeywordList data-aos="fade-left" data-aos-offset="300" :title="socials.title" :keywords="socials.keywords" :has-links="socials.hasLinks" />
        </div>

        <div data-aos="fade-up" class="quote">
            <div class="text text-gradient">Things should be made as simple as possible, but not simpler.</div>
            <span class="author">- Albert Einstein</span>
        </div>
    </div>
</template>

<script>
import aos from '~/mixins/aos'

export default {
    data() {
        return {
            skills: {
                title: 'Skills',
                keywords: [
                    {text: 'csharp', link: null, favorite: false},
                    {text: 'html&css', link: null, favorite: true},
                    {text: 'figma', link: null, favorite: false},
                    {text: 'java', link: null, favorite: false},
                    {text: 'javascript', link: null, favorite: true},
                    {text: 'kotlin', link: null, favorite: true},
                    {text: 'react', link: null, favorite: false},
                    {text: 'react native', link: null, favorite: false},
                    {text: 'swift', link: null, favorite: true},
                ],
                hasLinks: false
            },
            socials: {
                title: 'Socials',
                keywords: [
                    {text: 'dribbble', link: 'https://google.com/'},
                    {text: 'github', link: 'https://github.com/mathieubes'},
                    {text: 'instagram', link: 'https://instagram.com/bs.mathieu'},
                    {text: 'linkedin', link: 'https://www.linkedin.com/in/mathieu-bes-498085155/'},
                    {text: 'malt', link: 'https://www.malt.fr/profile/mathieubes'},
                    {text: 'medium', link: 'https://google.com/'},
                    {text: 'twitter', link: 'https://www.twitter.com/mathieubes_'},
                ],
                hasLinks: true
            }
        }
    },
    mixins: [aos],
    transition: 'fade-page-transition'
}
</script>