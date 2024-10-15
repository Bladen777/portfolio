import {
    NavLink, Link
} from "react-router-dom";
import { useEffect,  useRef, useState } from "react";
import { motion } from "framer-motion";

//local imports
import "../../styles/header.css"
import The_Routes from "../../routes/The_Routes";
import logo from "../../assets/logos_icons/logo.png";
import Drop_Down_Button from "./Drop_Down_Button";




function Header(){

    const [reform_nav, set_reform_nav] = useState(
        window.matchMedia("(max-width: 450px)").matches
    )
    const [nav_open, set_nav_open] = useState(false);
    const nav_open_ref = useRef()
    nav_open_ref.current = nav_open 

    const active_link = useRef(true)


    function toggle_nav(){
        console.log("toggle_nav called");
        active_link.current = true;
        set_nav_open(!nav_open)
    }

   // normal links
    function links(value){
        if (value.name !== "Home"){
            return(
           
                <NavLink
                    key={value.name} 
                    to={value.path}
                >  {({ isActive }) => (
                    <button className={
                        "nav_btn " + 
                        (isActive ? "btn_active " : " ")
                        
                    }>
                     {value.name}
                    </button> 
                  )} 
                </NavLink>  
        )}
    }
    

    const links_variants={
     
        open:(index)=>{
            const animation_delay = index * ((index/1.6)*0.15) + 0.6;
            return{
                opacity:1,
                transition:{
                    opacity:{delay:animation_delay, duration:0.4}
                }
            }
        },
        closed:()=>{
            return{
                opacity:0,
            }
        }
    }

    const menu_variants = {
        open:()=>{
            return{
                height:"170px",
                transition:{
                    duration:1,
                    delay: 0.6
                }
            }
        },
        closed:()=>{
            return{
                height:"0px"
            }
        }

    }

    //links for drop_down
    function animate_links(value, index){
        console.log("the active_link is: ", active_link.current);
        if (value.name !== "Home"){
            return(
                <NavLink
                    key={value.name} 
                    to={value.path}
                >  {({ isActive }) => (
                    <motion.button 
                        variants={links_variants}    
                        custom={index}
                        className={
                            "nav_btn " +
                            (isActive ? "btn_active " : " ")
                        }
                        onAnimationComplete={()=>{active_link.current = index === 3 && false }}
                        onClick={(e) => {
                            if (active_link.current) {
                                e.preventDefault(); // Prevent click action
                            }
                        }}
                        >
                      {value.name} 
                    </motion.button> 
                  )} 
                </NavLink>  
        )
    }
    } 
    


    useEffect(()=>{
        window
        .matchMedia("(max-width: 450px)")
        .addEventListener('change', e => set_reform_nav(e.matches));
        set_nav_open(false)
    },[reform_nav])

    return(
        <>
            <header className="header">
                    <Link className="nav_logo"> 
                        <img  src={logo} alt="logo image"></img>
                    </Link>
                    {!reform_nav &&
                        <nav className="nav_links">
                            {The_Routes.map(links)}
                        </nav>
                    }
                    
                    {reform_nav && 
                        <div className="drop_down">
                            <Drop_Down_Button 
                                nav_open = {nav_open}
                                toggle_nav={toggle_nav}
                            
                            />
                        
                            {nav_open && 
                                <motion.nav
                                    initial="closed"
                                    animate= "open"
                                    className="nav_links_dd "
                                    variants={menu_variants}
                                >
                                {The_Routes.map(animate_links)}
                                </motion.nav>

                                
                            }
                       </div> 
                    }
                   
               


            </header>
                
        </>
    );

}

export default Header;
