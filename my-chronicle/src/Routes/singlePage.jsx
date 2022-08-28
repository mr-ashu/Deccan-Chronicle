import React, { useEffect } from "react"
import style from "../Components/body.module.css"
import axios from "axios"
import { useState } from "react"
import { Body } from "../Components/Body"
import ReactDOM from 'react-dom/client';
import { useParams } from "react-router-dom"


const getMal=(id)=>{
    return fetch(`https://newsapi.org/v2/everything?q=${id}&pageSize=10&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`).then((res)=>res.json())
  }


export function SinglePage(){
 
    const [data,setdata]=useState([])
    const [popular,setPopular]=useState([])
    const [movie,setMovie]=useState([])
    const [business,setBusiness]=useState([])

    let {id}=useParams();
  useEffect(()=>{
     getMal(id).then((res)=>{
         setdata(res.data.articles)
     })


    axios(`https://newsapi.org/v2/everything?q=politics&pageSize=10&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
        
        setPopular(res.data.articles)
    })

    axios(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=4&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
      
        setMovie(res.data.articles)
    })

    axios(` https://newsapi.org/v2/everything?q=business&pageSize=7&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
    .then((res)=>{
      
        setBusiness(res.data.articles)
    })

  },[id])


    return( 

<div className={style.bbody}> 
        
        <div className={style.container}> 
           
        <div className={style.detailbox}> 

<h2>DETAIL</h2>
<hr/>
{popular?.map((el)=>( 

<div className={style.detail}>
{el.title}
      <img src={el.urlToImage} alt="" />
      {el.description}

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

          <h2>ENTERTAINMENT</h2>
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

         <h2>BUSINESS</h2>
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