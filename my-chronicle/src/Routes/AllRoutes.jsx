import { Route, Routes } from "react-router-dom"
import { Education } from "../Components/Education"
import { Entertainment } from "../Components/Entertainment"
import { Gallery } from "../Components/Gallery"
import { Home } from "../Components/Home"
import { Lifestyle } from "../Components/Lifestyle"
import { Nation } from "../Components/Nation"
import { Sports } from "../Components/Sport"
import { Technology } from "../Components/Technology"
import { World } from "../Components/World"
import { SinglePage } from "./singlePage"


export const AllRoutes=()=>{

    return(
        
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/nation" element={<Nation/>}/>
    <Route path="/world" element={<World/>}/>
    <Route path="/entertainment" element={<Entertainment/>}/>
    <Route path="/education" element={<Education/>}/>
    <Route path="/sports" element={<Sports/>}/>
    <Route path="/technology" element={<Technology/>}/>
    <Route path="/lifestyle" element={<Lifestyle/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/news/:id" element={<SinglePage/>}/>
   </Routes>
    )

}