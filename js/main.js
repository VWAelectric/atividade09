const entrada = document.getElementById("enter")
const btnAdd = document.getElementById("addTarefas")
const outText = document.getElementById("saida1")

btnAdd.addEventListener('click', function() {
const texto = entrada.value 
outText.textContent = texto
entrada.value = ''
})