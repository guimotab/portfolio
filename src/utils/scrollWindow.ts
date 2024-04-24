export default function scrollWindow(idElement: string) {
    const element = document.getElementById(idElement)!
    element.scrollIntoView({behavior: "smooth"})
  }