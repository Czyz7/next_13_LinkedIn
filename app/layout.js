import Link from "next/link"
import styles from './page.module.css'

/* Menu Component here */
function Menu() {
    return(
        <ul>
            <Link href="/">Home</Link>&nbsp;
            <Link href="/contacts">Contacts</Link>
        </ul>
    )
}

export default function Layout({children }) {
    return(
        <div className={styles.container}>
            {/* insert Menu here */}
            <Menu />
            {children}
        </div>)
}