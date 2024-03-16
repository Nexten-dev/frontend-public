import styles from './styles.module.scss';
interface Props extends React.PropsWithChildren {
  className?: string
}

const Text = ({className="", children}:Props) => {
  return (
    <div className={`${styles.text} ${className}`}>
      {children}
    </div>
  );
};

export default Text;