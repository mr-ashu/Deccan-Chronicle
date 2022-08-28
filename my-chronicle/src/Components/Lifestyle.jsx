import React, { useEffect } from "react"
import style from "./body.module.css"
import axios from "axios"
import { useState } from "react"
import { Body } from "./Body"
import ReactDOM from 'react-dom/client';


export function Lifestyle(){
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])
    const [popular,setPopular]=useState([])
    const [movie,setMovie]=useState([])
    const [business,setBusiness]=useState([])
  useEffect(()=>{
      
    axios (`https://newsapi.org/v2/everything?q=health&pageSize=10&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
        setData(res.data.articles)
    })

    axios (`https://newsapi.org/v2/everything?q=health&pageSize=3&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
        setData1(res.data.articles)
    })


    axios(`https://newsapi.org/v2/everything?q=medicine&pageSize=10&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
        
        setPopular(res.data.articles)
    })

    axios(`https://newsapi.org/v2/everything?q=infection&pageSize=6&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
      
        setMovie(res.data.articles)
    })

    axios(`https://newsapi.org/v2/everything?q=health&pageSize=7&apiKey=e3d9b1100f4a480fb9831e24ed16aacc `)
    .then((res)=>{
      
        setBusiness(res.data.articles)
    })

  },[])





    return( 
        <div className={style.bbody}> 
        
        <div className={style.container}> 
           
          <div className={style.leftbox}>
            <h2>LIFE STYLE</h2>
          {data1.map((el)=>( 
      
      <div className={style.left}>

              <img src={el.urlToImage} alt="" />
              {el.title}
      </div>

    
         ))}
          </div>

        
        <div className={style.middlebox}> 
        <hr/>
      {data.map((el)=>( 
                    
            <div className={style.middle}>
                
                    <img src={el.urlToImage} alt="" />
                    {el.title}
            </div>
    
          
        ))}
        </div>


        <div className={style.rightbox}> 

              <h2>MOST POPULAR</h2>
              <hr/>
      {popular?.map((el)=>( 
      
            <div className={style.right}>
                      {el.title}
                    <img src={el.urlToImage} alt="" />
                    
            </div>
    
          
        ))}
        </div>
         
    
      

    </div>
      {/* -----------horizintal-part-------- */}
      <div className={style.entertainment}>

          <h2>HEALTH</h2>
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

         <h2>MEDICINE</h2>
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