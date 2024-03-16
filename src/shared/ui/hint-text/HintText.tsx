import styles from './styles.module.scss';

interface Props extends React.DOMAttributes<HTMLDivElement> {
  className?: string
}

const HintText = ({children, className=""}:Props) => {
  return (
    <div className={`${styles.text} ${className}`}>
      {children}
    </div>
  );
};

export default HintText;