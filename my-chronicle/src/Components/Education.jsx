import React, { useEffect } from "react"
import style from "./body.module.css"
import axios from "axios"
import { useState } from "react"
import { Body } from "./Body"
import ReactDOM from 'react-dom/client';


export function Education(){
    const [data,setData]=useState([])
    
    const [popular,setPopular]=useState([])
    const [movie,setMovie]=useState([])
    
  useEffect(()=>{
      
    axios (` https://newsapi.org/v2/top-headlines?country=in&category=science&pageSize=20&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
        setData(res.data.articles)
    })

  


    axios(`https://newsapi.org/v2/everything?q=education&pageSize=20&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
        
        setPopular(res.data.articles)
    })

    axios(`https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=4&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
      
        setMovie(res.data.articles)
    })

 

  },[])





    return( 
        <div className={style.bbody}> 
        
        <div className={style.container}> 
           
  

        
        <div className={style.middlebox}> 
        <h2>EDUCATION</h2>
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
      
            <div  className={style.right}>
                      {el.title}
                    <img src={el.urlToImage} alt="" />
                    
            </div>
    
          
        ))}
        </div>
         
    
      

    </div>
      {/* -----------horizintal-part-------- */}
      <div className={style.entertainment}>

          <h2>TECHNOLOGY</h2>
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
    
   
 </div>
    )
}