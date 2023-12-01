function toggleMode() {
  const html = document.documentElement
  // Toggle verifica a classe, se tem ele tira, se não tem ele coloca
  html.classList.toggle("light")

  // IF / ELSE maneira basica original

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }
  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")) {
    img.setAttribute('src', './assets/my-eyes.png')
  } else {
    img.setAttribute("src", "./assets/a1.png")
  }
}
