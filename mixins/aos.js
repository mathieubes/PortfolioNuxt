import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    mounted() {
        AOS.init({
            offset: 300,
            once: true
        })
    }
}