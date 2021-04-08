<template>
    <div class="container">
        <div class="welcome">
            <div>
                <h1>Mathieu Bes</h1>
                <h2>Student web developer & design lover based in Paris.</h2>
            </div>
            <div>
                <VisitCard />
            </div>
        </div>

        <div class="skills-socials">
            <KeywordList :title="skills.title" :keywords="skills.keywords" :has-links="skills.hasLinks" />
            <KeywordList :title="socials.title" :keywords="socials.keywords" :has-links="socials.hasLinks" />
        </div>

        <div class="quote">
            <div class=""
            <span class="author"></span>
        </div>
    </div>
</template>

<script>
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
                    {text: 'instagram', link: 'https://google.com/'},
                    {text: 'linkedin', link: 'https://www.linkedin.com/in/mathieu-bes-498085155/'},
                    {text: 'malt', link: 'https://google.com/'},
                    {text: 'medium', link: 'https://google.com/'},
                    {text: 'twitter', link: 'https://google.com/'},
                ],
                hasLinks: true
            }
        }
    }
}
</script>
