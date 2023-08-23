export default function scrollWindow(idElement: string) {
    const element = document.querySelector(idElement)!
    const coordinates = element.getBoundingClientRect()
    window.scroll({ top: coordinates.top, behavior: "smooth" })
  }