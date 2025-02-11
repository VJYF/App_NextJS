import styles from '../styles/Form.module.css';
import Link from 'next/link';

export default function Form() {
    return (
        <>
        <div className={styles.formCard}>
            <form action="/api/findyou" method="get" encType="multipart/form-data" className={styles.form}>
                {/* <label htmlFor="image">Upload Image:</label>
                <input className={styles.formGroup} type="file" id="image" name="image" accept="image/*" /> */}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}