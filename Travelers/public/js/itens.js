



function listar() {

	var idCapitalDestino = "select-capital-destino";
	var idCapitalOrigem = "select-capital-origem";
    var capital = [
		"Aracajú",
		"Belém",
		"Belo Horizonte",
		"Boa Vista",
		"Brasília",
		"Campo Grande",
		"Cuiabá",
		"Curitiba",
		"Florianópolis",
		"Fortaleza",
		"Goiânia",
		"João Pessoa",
		"Maceió",
		"Manaus",
		"Natal",
		"Palmas",
		"Porto Alegre",
		"Porto Velho",
		"Recife",
		"Rio Branco",
		"Rio de Janeiro",
		"Salvador",
		"São Luis",
		"São Paulo",
		"Teresina",
		"Vitória"]
    
	gerar(capital, idCapitalOrigem);
	gerar(capital, idCapitalDestino);
    
}
function gerar(lista, id) {
	let optionSelect = document.getElementById(id)
	for (let i = 0; i < lista.length; i++) {
		let option = document.createElement("option")
		option.value = lista[i]
		option.text = lista[i]
		optionSelect.appendChild(option)
	}

}

listar()



