import styles from '../styles.module.scss';
interface Props extends React.PropsWithChildren<unknown> {
  className?: string
}

const RowInput = ({className="", children}:Props) => {
  return (
    <div className={`${styles["row"]} ${className}`}>
      {children}
    </div>
  );
};

export default RowInput;