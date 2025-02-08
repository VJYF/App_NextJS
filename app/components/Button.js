import styles from '../styles/Button.module.css';

export default function Button({ text, onClick }) {
    return (
        <div className={styles.buttoncard} onClick={onClick}>
            <div className={styles.buttoncontent}>{text}</div>
        </div>
    );
}