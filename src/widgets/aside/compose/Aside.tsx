import Logo from "@/shared/ui/logo";
import Nav from "../ui/Nav";
import styles from "../styles.module.scss";

export const Aside = () => {
  return (
    <aside className={styles['aside']}>
      <div className={styles['aside__inner']}>
        <Logo/>
        <Nav/>
      </div>
    </aside>
  );
};