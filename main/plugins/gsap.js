// Plugins
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import { Power2 } from 'gsap/gsap-core'
// Core
import { gsap } from 'gsap'
export default defineNuxtPlugin(() => {
  gsap.registerPlugin(Draggable, ScrollTrigger, Power2)
  return {
    provide: {
      Draggable,
      gsap,
    },
  }
})
