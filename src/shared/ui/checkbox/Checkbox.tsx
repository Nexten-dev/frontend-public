import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  className?: string
}

const Checkbox = ({className="", children, ...props}:Props) => {
  return (
    <label className={`${styles["label"]} ${className}`}>
      <input type="checkbox" {...props} className={styles["input"]}/>
      <span className={styles["text"]}>
        <span>{children}</span>
      </span>
    </label>
  );
};

export default Checkbox;