import { Link } from 'react-router-dom';
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from 'components/CabecalhoLink';

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to='./'>
        <img src={logo} alt='Cinetag Logo' />
      </Link>
      <nav>
        <CabecalhoLink url='./' children='Início' />
        <CabecalhoLink url='./favoritos' children='Favoritos' />
      </nav>
    </header>
  )
}

export default Cabecalho;