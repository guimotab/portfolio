export default abstract class Theme {
  static preferenceTheme() {
    const themeLocalStorage = localStorage.getItem("theme") as "dark" | "white" | null

    if (themeLocalStorage) {
      return Theme.initTheme(themeLocalStorage)
    }

    const darkThemePrefer = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemePrefer) {
      Theme.initTheme("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  static changeTheme(theme: "dark" | "white") {
    localStorage.setItem("theme", theme)
  }

  private static initTheme(themeMode: "white" | "dark") {
    const body = document.getElementsByTagName("body")[0]!
    if (themeMode === "dark") {
      this.changeClasses(body, "add", ["overflow-x-hidden", "dark"])
      this.changeClasses(body, "remove", ["overflow-x-opacity-0"])
    } else {
      this.changeClasses(body, "add", ["overflow-x-opacity-0"])
      this.changeClasses(body, "remove", ["overflow-x-hidden", "dark"])
    }
  }

  private static changeClasses(element: HTMLElement, type: "remove" | "add", classNames: string[]) {
    if (classNames && type === "add") {
      classNames.forEach(className =>
        element.classList.add(className)
      )
    } else if (classNames && type === "remove") {
      classNames.forEach(className =>
        element.classList.remove(className)
      )
    }
  }
}