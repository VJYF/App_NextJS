import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return ( 
        < >
        <nav className={styles.nav}>
        <Link className={styles.navlink} href="/">
            <Image
              aria-hidden
              src="/home.svg"
              alt="Home icon"
              width={20}
              height={20}
              />
            Home
          </Link>
          <Link className={styles.navlink} href="/PassGen">
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={20}
              height={20}
              />
            PassGen
          </Link>
          <Link className={styles.navlink} href="/AV">
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={20}
              height={20}
              />
            Antivirus
          </Link>
          <Link className={styles.navlink} href="/FindYou">
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={20}
              height={20}
              />
            FindYou
          </Link>
        </nav>
        </>
    )
}