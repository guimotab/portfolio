import Theme from "@/classes/Theme"

export function changeTheme(themeMode: string) {
  const body = document.getElementsByTagName("body")[0]!
  const divDarkMode = document.getElementById("divDarkMode")!
  const divWhiteMode = document.getElementById("divWhiteMode")!

  if (themeMode === "dark") {
    changeClasses(body, "add", ["overflow-x-hidden", "dark"])
    changeClasses(body, "remove", ["overflow-x-opacity-0"])

    changeClasses(divDarkMode, "remove", ["opacity-100", "animate-slideinTheme", "z-20"])
    changeClasses(divDarkMode, "add", ["opacity-0", "animate-slideOutTheme", "z-0"])

    changeClasses(divWhiteMode, "remove", ["opacity-0", "animate-slideOutTheme", "z-0"])
    changeClasses(divWhiteMode, "add", ["opacity-100", "animate-slideinTheme", "z-20"])
    Theme.changeTheme("dark")
  } else {
    changeClasses(body, "add", ["overflow-x-opacity-0"])
    changeClasses(body, "remove", ["overflow-x-hidden", "dark"])

    changeClasses(divDarkMode, "remove", ["opacity-0", "animate-slideOutTheme", "z-0"])
    changeClasses(divDarkMode, "add", ["opacity-100", "animate-slideinTheme", "z-20"])

    changeClasses(divWhiteMode, "remove", ["opacity-100", "animate-slideinTheme", "z-20"])
    changeClasses(divWhiteMode, "add", ["opacity-0", "animate-slideOutTheme", "z-0"])
    Theme.changeTheme("white")
  }
}

function changeClasses(element: HTMLElement, type: "remove" | "add", classNames: string[]) {
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

