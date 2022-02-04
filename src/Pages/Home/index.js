import './style.css'
import Tabela from '../../components/Tabela';
import DivFood from '../../components/divfood';
import ModalProdutoCadastroEdicao from '../../components/ModalProdutoCadastroEdicao';
import Header from '../../components/Header';
// import Manutencao from '../../components/Manutencao';

function Home() {

  return (
    <div className="Home">
      <Header/>
      <DivFood />
      <Tabela />
      <ModalProdutoCadastroEdicao />        
    </div>
  );
}

export default Home;