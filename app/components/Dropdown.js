import styles from '../styles/Dropdown.module.css';
import Link from 'next/link';

export default function HomeDropdown() {
    return (
        <>
        <Dropdown />
        </>
    );
}

export function Dropdown() {
    return (
        <>
        <div className={styles.dropdowncard}>
            <div className={styles.dropdownbtn}>What do you need ?</div>
            <span className={styles.space}>

            </span>
            <div className={styles.dropdowncontent}>
            <Link href="/PassGen">Password generator</Link>
            <Link href="/AV">Antivirus</Link>
            <Link href="/FindYou">FindYou</Link>
            </div>
        </div>
        </>
    );
}
