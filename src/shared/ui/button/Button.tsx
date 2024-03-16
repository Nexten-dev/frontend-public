import styles from './styles.module.scss';
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  view?: "primary" | "secondary"
}
const Button = ({className="", view = "primary", children, ...props}: Props) => {
  return (
    <button className={`btn-reset ${styles["btn"]} ${styles["btn--"+view]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;