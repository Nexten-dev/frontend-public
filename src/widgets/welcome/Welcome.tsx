import Link from 'next/link';
import styles from './styles.module.scss';

const Welcome = () => {
  return (
    <div className={styles.block}>
   
      Добро пожаловать в ад <br/>
      Считаем, что ты авторизуешься, нажав <br/>
      <Link className={styles.link} href="/home">СЮДА</Link>

   
    </div>
  );
};

export default Welcome;