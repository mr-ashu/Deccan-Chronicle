import React, { useEffect } from "react"
import style from "./body.module.css"
import axios from "axios"
import { useState } from "react"
import { Body } from "./Body"
import ReactDOM from 'react-dom/client';
import {getData} from "./Api"

export function Gallery(){
    
    const [movie,setMovie]=useState([])
    const [business,setBusiness]=useState([])
  useEffect(()=>{
      
    

    axios(`https://newsapi.org/v2/everything?q=gallery&pageSize=6&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
   
    .then((res)=>{
      
        setMovie(res.data.articles)
    })

    axios(`https://newsapi.org/v2/everything?q=city&pageSize=20&apiKey=e3d9b1100f4a480fb9831e24ed16aacc `)
    .then((res)=>{
      
        setBusiness(res.data.articles)
    })

  },[])





    return( 
        <div className={style.bbody}> 
        
        
 
      {/* -----------horizintal-part-------- */}
      <div className={style.entertainment}>

          <h2>GALLERY</h2>
    <div className={style.enterbox}> 
     
      {movie?.map((el)=>( 
      
            <div className={style.enter}>
                     
                    <img src={el.urlToImage} alt="" />
                    {el.title}
            </div>
    
          
        ))}


        </div>
        </div>
{/*  --------------------------------- */}
   <hr/>
   <hr/>
    <div className={style.business}>

         <h2>CITY</h2>
        <div className={style.enterbox}> 
     
     {business?.map((el)=>( 
     
           <div className={style.enter}>
                    
                   <img src={el.urlToImage} alt="" />
                   {el.title}
           </div>
   
         
       ))}


       </div>
       </div>
 </div>
    )
}