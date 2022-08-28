import {Link} from 'react-router-dom';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    
    Button,
    Icon,
 
    
  } from '@chakra-ui/react'
  
  import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'

  import style from "./Navbar.module.css"
import { useEffect, useState } from 'react';

import {
    faAppStore,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Navbar=()=>{

    const [time,setTime] =useState("")
 

    useEffect(()=>{
        setTime(Date())
    },[])

    console.log(time)

    return( 
     <>

     <div className={style.topNavbar}>
        <div className={style.subNavbar}>  
     <div className={style.subNavbar1}>  
         <Menu>
                <MenuButton bg="none" as={Button}  
                 >
                <Icon as={HamburgerIcon}/>
                </MenuButton>

                
                        <MenuList >
                            <MenuItem>Business</MenuItem>
                            <MenuItem>Option</MenuItem>
                            <MenuItem>Sunday Chronicle</MenuItem>
                            <MenuItem>Featured</MenuItem>
                            <MenuItem>Hydrabad Chronicle</MenuItem>
                            <MenuItem>Science</MenuItem>
                            <MenuItem>Editors Picks</MenuItem>
                            <MenuItem>Just In</MenuItem>
                            <MenuItem>Astroguide</MenuItem>
                        </MenuList>
        </Menu>
         <p>e-Paper |Sunday Chronicle</p>
         <FontAwesomeIcon className={style.xyz} icon={faFacebook} size="2x" />
         <FontAwesomeIcon className={style.xyz} icon={faTwitter} size="2x" />
         <FontAwesomeIcon className={style.xyz} icon={faInstagram} size="2x" />
         <FontAwesomeIcon icon={faAppStore} size="2x" />
     </div>
     <div className={style.subNavbar2}>
        <input type="checkbox"/>
        <p>Auto Refresh | Corporate Insolvency Resolvency Resolution Process</p>
     </div>
     </div>
     </div>
     <div className={style.logo}>
        <img  src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.jpg" alt="" />

        <p>{time}</p>
     </div>
    
        <div className={style.navbar}>
        <Link to="/"><Icon as={HamburgerIcon}/> </Link>
        <Link to="/nation"><h2>Nation</h2></Link>
        <Link to="/world"><h2>World</h2></Link>
        <Link to="/entertainment"><h2>Entertainment</h2></Link>
        <Link to="/education"><h2>job & Education</h2></Link>
        <Link to="/sports"><h2>Sports</h2></Link>
        <Link to="/technology"><h2>Technology</h2></Link>
        <Link to="/lifestyle"><h2>Lifestyle</h2></Link>
        <Link to="/gallery"><h2>Gallery</h2></Link>
        <Menu>
                <MenuButton bg="none" as={Button}  
                rightIcon={<ChevronDownIcon />}>
                    More...
                </MenuButton>

                
                        <MenuList >
                            <MenuItem>Business</MenuItem>
                            <MenuItem>Option</MenuItem>
                            <MenuItem>Sunday Chronicle</MenuItem>
                            <MenuItem>Featured</MenuItem>
                            <MenuItem>Hydrabad Chronicle</MenuItem>
                            <MenuItem>Science</MenuItem>
                            <MenuItem>Editors Picks</MenuItem>
                            <MenuItem>Just In</MenuItem>
                            <MenuItem>Astroguide</MenuItem>
                        </MenuList>
        </Menu>



        
        
        </div>
   </>
    )
}