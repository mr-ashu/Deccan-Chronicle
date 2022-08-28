import React from 'react'
 import style from "./body.module.css"
function Footer() {
  return (
    <div className={style.footerbox}>
     
     <input type="text" placeholder="ENHANCED BY Google" />
     <button> search</button>

     <div className={style.footer}>
      <p>HOME</p>
      <p>ASIAN AGE</p>
      <p>ANDHRABHOOMI</p>
      <p>FINANCIAL CHRONICLE</p>
      <p>ABOUT US</p>
      <p>CONTECT US</p>
      <p>CLASSIFIED</p>
      <p>BOOK CLASSIFIED</p>
      <p>FEEDBACK</p>
      <p>CAREERS</p>
      <p>E-PAPER</p>
     </div>
            <p>PRIVACY POLICY</p>
     
    <div className={style.botm}>
    <p>Copyright © 2015 - 2022 Deccan Chronicle.</p>
      <p>
         Designed, Developed & Maintained By Daksham</p>
    </div>
     

    </div>
  )
}

export default Footer
 
 