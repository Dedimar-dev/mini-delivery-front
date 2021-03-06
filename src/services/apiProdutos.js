const url_Base = `https://mini-delivery.herokuapp.com/produtos`;

async function cadastrarProduto(
  dados, 
  setDadosTodosProdutos, 
  setModalCadastroProduto,
  setModalEdicaoProduto,
  limparInputs,
  token
) {

  try {
    const pedido = await fetch(`${url_Base}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token

      },

      body: JSON.stringify(dados)
    });

    const { status } = pedido;
    if (status === 200) {
      setModalCadastroProduto(false);
      setModalEdicaoProduto(false);
      limparInputs()
    }
      listarProdutos(setDadosTodosProdutos, token);

  } catch ({ message }) {
    console.log(message)
  }

}

async function atualizarProduto(
  id, 
  dados, 
  setDadosTodosProdutos, 
  setModalEdicaoProduto, 
  setModalCadastroProduto,
  limparInputs,
  token
) {

  try {
    const pedido = await fetch(`${url_Base}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token

      },
      body: JSON.stringify(dados)
    });

    const { status } = pedido;
    if (status === 200) {
      setModalCadastroProduto(false);
      setModalEdicaoProduto(false);
      limparInputs()
    }
    listarProdutos(setDadosTodosProdutos, token);

  } catch ({ message }) {
    console.log(message)
  }

}

async function listarProdutos(setDadosTodosProdutos, token) {

  try {
    const response = await fetch(`${url_Base}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    });

    const dados = await response.json();
    setDadosTodosProdutos(dados);
  } catch ({ message }) {
    console.log(message)
  }

}

async function listarProdutosPesquisado(setDadosTodosProdutos, nome, token) {

  try {
    const response = await fetch(`${url_Base}/${nome}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    });

    const dados = await response.json()
    setDadosTodosProdutos(dados)
  } catch ({ message }) {
    console.log(message)
  }

}


async function deletarProduto(id, setCondicao, setDadosTodosProdutos, token) {

  try {
    await fetch(`${url_Base}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    });

    setCondicao(false);
    listarProdutos(setDadosTodosProdutos, token);

  } catch ({ message }) {
    console.log(message)
  }

}

export {
  cadastrarProduto,
  atualizarProduto,
  listarProdutos,
  listarProdutosPesquisado,
  deletarProduto,
}
