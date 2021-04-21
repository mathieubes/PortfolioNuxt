<template>
    <div class="container about-container">
        <div class="flex">
            <div data-aos="fade-right" class="picture">
                <img src="~/assets/images/me.png" alt="Picture of me">
            </div>
            <div data-aos="fade-left" class="content">
                <h1 class="title uppercased">Joy of living</h1>
                <p>
                    I am often defined as the joy of living.<br/>
                    <br/>
                    And I try to show it as much as possible in the projects I am involved in.<br/>
                    <br/>
                    French developer I don't just have to write lines of code, I am a source of ideas and innovations.
                </p>
            </div>
        </div>

        <div class="emojis">
            <span data-aos="zoom-in" data-aos-offset="0" data-aos-delay="300">🇫🇷</span>
            <span data-aos="zoom-in" data-aos-offset="0" data-aos-delay="600">😁</span>
            <span data-aos="zoom-in" data-aos-offset="0" data-aos-delay="900">💻</span>
        </div>
    </div>
</template>

<script>
export default {
    transition: 'fade-page-transition'
}
</script>
