<template>

    <transition name="flip" mode="out-in">
        <div class="visit-card-recto" v-if="!isFlipped" @mouseover="isFlipped = true" key="recto">
            <div class="uppercased">
                <div class="title">
                    Visit card
                </div>

                <div class="hover-me-hint">
                    Hover me!
                </div>
            </div>
        </div>

        <div class="visit-card-verso" v-else key="verso">
            <div class="card-container">
                <div class="row">
                    <img :src='icons.message'/>
                    mathieu@mathieubes.fr
                </div>

                <div class="row">
                    <img :src='icons.call'/>
                    07 83 15 41 82
                </div>

                <div class="row" :class="isAvailable ? 'available' : 'unavailable'">
                    <img :src='isAvailable ? icons.available : icons.unavailable'/>
                    {{ isAvailable ? "Available" : "Unavailable" }}
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
import MessageIcon from '@/assets/images/Message.svg';
import CallIcon from '@/assets/images/Call.svg';
import AvaiblePinIcon from '@/assets/images/AvailablePin.svg';
import UnavailablePinIcon from '@/assets/images/UnavailablePin.svg';

export default {
    data() {
        return {
            isAvailable: true,
            isFlipped: false,
            icons: {
                message: MessageIcon,
                call: CallIcon,
                available: AvaiblePinIcon,
                unavailable: UnavailablePinIcon
            }
        }
    }
}
</script>

<style>
.flip-enter-active, .flip-leave-active {
  transition: opacity .25s ease-in, transform .25s ease-in;
}

.flip-leave-active {
  transition: opacity .25s ease-out, transform .25s ease-out;
}

.flip-leave-to, .flip-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(1.1);
}

/* .flip-enter {
    transform: rotateY(90deg);
    filter: grayscale(50%);
} */
</style>