import styles from './styles.module.scss';
interface Props extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  className?: string
}

const Textarea = ({className=""}:Props) => {
  return (
    <textarea className={`${styles.textarea} ${className}`}></textarea>
  );
};

export default Textarea;