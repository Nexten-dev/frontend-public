import styles from './styles.module.scss';

interface Props extends React.PropsWithChildren {
  className?: string;
}

const BoldText = ({children, className=""}:Props) => {
  return (
    <b className={`${styles.text} ${className}`}>
      {children}
    </b>
  );
};

export default BoldText;