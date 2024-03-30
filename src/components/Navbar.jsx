'use client'
import styles from '../app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>

        <div className={styles.navbar1}>
          <div className={styles.navbar11}><img src="/logo.png" alt="" height={50} /></div>
          <div className={styles.navbar12}><h1><Link href="/">SHOPTRONICS</Link></h1></div>
          <div className={styles.navbar13}>
            <img src="/search.png" alt="" height={40} />
            <img src="/heart.png" alt="" height={30} />
            <img src="/bag.png" alt="" height={40} />
            <img src="/login.png" alt="" height={30} />
            <select className={styles.navselect}>
              <option value="eng">ENG</option>
              <option value="mar">MAR</option>
              <option value="hnd">HND</option>
            </select>
          </div>
        </div>

        <div className={styles.navbar21}>
          <ul className={styles.navbar2}>
            <li className={styles.navbarli}>
              <Link href="/shop/">Shop</Link>
            </li>
            <li className={styles.navbarli}><Link href="/products/">Skils</Link></li>
            <li className={styles.navbarli}><Link href="/stories/">Stories</Link></li>
            <li className={styles.navbarli}><Link href="/about/">About</Link></li>
            <li className={styles.navbarli}><Link href="/contactus/">Contact us</Link></li>
          </ul>

        </div>

      </div>
      <hr />
    </>
  )
}

export default Navbar
