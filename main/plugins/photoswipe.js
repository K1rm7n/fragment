import PhotoSwipeLightbox from 'photoswipe/lightbox'
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css'
export default defineNuxtPlugin(() => {
  return {
    provide: {
      PhotoSwipeLightbox,
      PhotoSwipe,
    },
  }
})
