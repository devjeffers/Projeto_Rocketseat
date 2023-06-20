function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*if(html.classList.contains("light")) {
    html.classList.remove("light")
} else {
    html.classList.add("light") }
*/

//pegar a tag img
  const img = document.querySelector("#profile img")
    //substituir a imagem
  if(html.classList.contains("light")) {
      //se estiver no light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Jefferson.png")
}  else {
    img.setAttribute("src", "./assets/avatar.png")
}
  //se estiver sem o light mode, manter a imagem normal
}