<template>
    <a class="go-top text-gradient" href="#">
        Go top <img :src="goTopIcon" />
    </a>
</template>

<script>
import GoTopIcon from '@/assets/images/GoTop.svg';

export default {
    data() {
        return {
            goTopIcon: GoTopIcon
        }
    }
}
</script>
