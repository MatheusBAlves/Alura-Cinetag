import Titulo from 'components/Titulo';
import styles from './Player.module.css';
import Banner from 'components/Banner';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
  const [video, setVideo] = useState([]);
  const parametros = useParams();
  const url = 'https://my-json-server.typicode.com/MatheusBAlves/cinetag-api/videos';

  useEffect(() => {
    fetch(`${url}?id=${parametros.id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(...dados);
      })
  }, []);

  if (!video) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem='player' />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width='100%'
          height='100%'
          src={video.link}
          title={video.titulo}
          frameborder='0'
          allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture' allowFullScreen />
      </section>
    </>
  )
}

export default Player;