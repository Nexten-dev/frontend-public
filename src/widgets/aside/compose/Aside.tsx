import Logo from "@/shared/ui/logo";
import Nav from "../ui/Nav";
import styles from "../styles.module.scss";
import Link from "next/link";

export const Aside = () => {
  return (
    <aside className={styles['aside']}>
      <div className={styles['aside__inner']}>
        <Link href="/">
          <Logo/>
        </Link>
        <Nav/>
      </div>
    </aside>
  );
};