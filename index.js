function abrirmenu() {
  let nav = document.getElementsByTagName('nav')[0]
  nav.style.display = "block"
  
  let abrir = document.getElementById('menu')
  abrir.style.display = "none"
  
  let conteudo = document.getElementsByClassName('conteudo')[0]
}
function fecharmenu() {
  let nav = document.getElementsByTagName('nav')[0]
  nav.style.display = "none"
  
  let abrir = document.getElementById('menu')
  abrir.style.display = "block"
}