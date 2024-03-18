import { type InputProps} from './model/types';
import styles from "./styles.module.scss" 

const Input = ({className = '', ...props}:InputProps) => {
  return (
    <input className={`${styles.input} ${className}`} {...props}/>
  );
};

export default Input;