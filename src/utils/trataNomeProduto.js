 const trataNomeProduto = (nome) => {
  nome = nome.trim();
  nome = nome[0].toUpperCase() + nome.substr(1)

  return nome;
}

export default trataNomeProduto
