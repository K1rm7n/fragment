import { ModelViewerElement } from '@google/model-viewer'
export default defineNuxtPlugin(() => {
  const modelViewers = document.getElementsByTagName('model-viewer')
  for (let i = 0; i < modelViewers.length; i++) {
    const modelViewer = modelViewers[i]
    ModelViewerElement(modelViewer)
  }
})
