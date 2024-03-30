'use client'

import styles from"../app/page.module.css"

function Home() {
  return (
    <>
    <div className={styles.home}>
        <h1 className={styles.home11}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.homeh3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet laborum suscipit dolorum voluptatum expedita placeat fugit nulla in asperiores? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, alias.</p>
    </div>
    <hr />
      {/* ------------------------------------------------------------- */}

      <div className={styles.list}>
        <h3 className={styles.list1}> 3425 items</h3>
        <select className={styles.list2}>
          <option value="rec">RECMENDED</option>
          <option value="new">NEWEST FIRST</option>
          <option value="pop">POPULAR</option>
          <option value="high">PRICE: HIGH TO LOW </option>
          <option value="low">PRICE: LOW TO HIGH </option>
        </select>

      </div>
      <hr />
      {/* --------------------------------- */}
      <div className={styles.products}>

        <div className={styles.products1}>
           <input type="checkbox" /><b>COUSTMIZABLE</b>
           <hr className={styles.productshr}/>

            <select name="" id=""  className={styles.product1}>
              <option value="ideal">IDEAL FOR</option>
            </select>
            <br />
            <p>All</p>
            <input type="checkbox" /> MEN <br />
            <input type="checkbox" />WOMEN <br />
            <input type="checkbox" />BABY &KIDS
            <hr className={styles.productshr}/>

            <select name="" id=""  className={styles.product1}>
              <option value="oca">OCCASION</option>
            </select>
            <br />
            <p>All</p>
            <hr className={styles.productshr}/>

            <select name="" id=""  className={styles.product1}>
              <option value="wrk">WORK</option>
            </select>
            <br />
            <p>All</p>
            <hr className={styles.productshr}/>

            <select name="" id=""  className={styles.product1}>
              <option value="fab">FABRIC</option>
            </select>
            <br />
            <p>All</p>
            <hr className={styles.productshr}/>

            <select name="" id=""  className={styles.product1}>
              <option value="seg">SEGMENT</option>
            </select>
            <br />
            <p>All</p>
            <hr className={styles.productshr}/>

            <select name="" id=""  className={styles.product1}>
              <option value="sut">SUITABLE FOR</option>
            </select>
            <br />
            <p>All</p>
            <hr className={styles.productshr}/>

            <select name="" id=""  className={styles.product1}>
              <option value="raw">RAW MATERIALS</option>
            </select>
            <br />
            <p>All</p>
            <hr className={styles.productshr}/>

            <select name="" id=""  className={styles.product1}>
              <option value="pat">PATTERN</option>
            </select>
            <br />
            <p>All</p>
            <hr className={styles.productshr}/>
        </div>

        <div className={styles.products2}>


          <div className={styles.products21}>
            <div>
              <img src="/bat.jpg" alt="bat image"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
               </div>
            <div>
            <img src="/freez.jpg" alt=" freez img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
            <div>
            <img src="/teddy.jpg" alt=" teddy img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
          </div>

          <div className={styles.products21}>
            <div>
              <img src="/mobile.webp" alt="mobile img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
               </div>
            <div>
            <img src="/tv.jpg" alt="tv img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
            <div>
            <img src="/washing.jpg" alt="washing machine img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
          </div>

          <div className={styles.products21}>
            <div>
              <img src="/bat.jpg" alt="bat image"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
               </div>
            <div>
            <img src="/freez.jpg" alt=" freez img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
            <div>
            <img src="/teddy.jpg" alt=" teddy img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
          </div>

          <div className={styles.products21}>
            <div>
              <img src="/mobile.webp" alt="mobile img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
               </div>
            <div>
            <img src="/tv.jpg" alt="tv img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
            <div>
            <img src="/washing.jpg" alt="washing machine img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
          </div>

          <div className={styles.products21}>
            <div>
              <img src="/bat.jpg" alt="bat image"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
               </div>
            <div>
            <img src="/freez.jpg" alt=" freez img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
            <div>
            <img src="/teddy.jpg" alt=" teddy img"  className={styles.products22}/>
              <h3>PPXOC MILKWAT DRESS IN...</h3>
              <p className={styles.products2}>sign in or create account to see pricing</p>
            </div>
          </div>

          
        </div>
      </div>
      {/* ------------------------------------------- */}

      <div className={styles.footer}>

        <div className={styles.footer1}>
           <div className={styles.footer11}>
            <h3>BE THE FIRST  TO KNOW </h3>
            <p className={styles.footerp}>sign up for the updates metta muse</p>
            <input type="email"  placeholder="Enter your e-mail.." className={styles.footerip}/>
            <button className={styles.footerbtn}>suscribe</button>
           </div>
           <div className={styles.footer11} >
            <h3>CONTACT US</h3>
            <p className={styles.footerp}>+44 221 133 5360</p>
            <p className={styles.footerp}>coustomer@mettamuse.com</p>
            <h3>CURRENCY</h3>
            <img src="/usa.png" alt="" height={20} /><span><b>USD</b></span>
            <p className={styles.footerp}>Transaction will be completed in euros </p>
           </div>
        </div>

        <hr className={styles.footerhr} />

        <div className={styles.footer2}>
          <div>
            <h3>metta muse</h3>
            <p>About us</p>
            <p> Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p> contact</p>
            <p>EU Compinance</p>
          </div>
          <div>
          <h3>Quick links</h3>
            <p>orders &shipping</p>
            <p> join/login as seller</p>
            <p>payments & Refunds</p>
            <p>FAQs</p>
            <p> privacy</p>
            <p>terms &conditions</p>
          </div>
          <div>
            <h3>follow us</h3>
            <img src="/insta.png" alt="" height={30} />
            <img src="/facebook.png" alt="" height={30} />
            <h3>metta muse ACCEPTS</h3>
            <img src="/google.png" alt="" height={30} />
            <img src="/master.png" alt="" height={30} />
            <img src="/paypal.png" alt="" height={30} />
          </div>

         
        </div>
        <div className={styles.footer22}><p>copyright &#169;metta muse.All rights reserved </p></div>
      </div>
      
    </>
  )
}

export default Home
