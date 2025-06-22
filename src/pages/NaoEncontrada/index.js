import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>404</h1>
      <p className={styles.texto}>Ops! A página que você está procurando não existe.</p>
    </section>
  );
}

export default NaoEncontrada;