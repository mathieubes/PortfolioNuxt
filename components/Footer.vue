<template>
    <footer>
        made with a lot of 
        <img :src="heartIcon" />
         by 
        <span class="text-gradient">mathieu</span>
    </footer>
</template>

<script>
import HeartIcon from '@/assets/images/Heart.svg';

export default {
    data() {
        return {
            heartIcon: HeartIcon
        }
    }
}
</script>
