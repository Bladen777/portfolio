import {
 Link
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

    const active_link = useRef(true)

    const [current_page, set_current_page] = useState("")
    const page_track = useRef("")
    page_track.current = window.location.pathname;

    function toggle_nav(){
        active_link.current = true;
        set_nav_open(!nav_open)
    }

   // normal links
    function links(value){
        if (value.name !== "Home"){
            return(
                <Link
                    key={value.name} 
                    to={value.path}
                >
                    <button className={"nav_btn " + (current_page === value.path ? "current_btn" : "")}
                            onClick={()=>{set_current_page(value.path)}}
                    >
                        {value.name}
                    </button> 
                </Link>  
            )
        }
    }
    

    const links_variants={
        open:(index)=>{
            const animation_delay = index * ((index/1.6)*0.15) + 0.6;
            return{
                opacity:1,
                transition:{
                    opacity:{delay:animation_delay, duration:1.4},
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
                    delay: 0.6,
           
                }
            }
        },
        closed:()=>{
            return{
                height:"0px"
            }
        }

    }

    //animated links for drop_down
    function animate_links(value, index){
        console.log("the active_link is: ", active_link.current);
        if (value.name !== "Home"){
            return(
                <Link
                    key={value.name} 
                    to={value.path}
                > 
                    <motion.button 
                        variants={links_variants}    
                        custom={index}
                        className={"nav_btn nav_btn_dd " + (current_page === value.path ? "current_btn" : "")}
                        onAnimationComplete={()=>{
                            active_link.current = (index === 3 && false)}}
                        onClick={(e) => {
                            if (active_link.current) {
                                e.preventDefault(); // Prevent click action
                            } else {
                                toggle_nav()
                                set_current_page(value.path)
                            }
                        }}
                        >
                      {value.name} 
                    </motion.button> 
            
                </Link>  
            )
        }
    } 
    


    useEffect(()=>{
        set_current_page(page_track.current)
        window
        .matchMedia("(max-width: 450px)")
        .addEventListener('change', e => set_reform_nav(e.matches));
        set_nav_open(false)
    },[reform_nav])

    return(
        <>
            <header className="header">
                    <Link 
                        className="nav_logo"
                        onClick={()=>{
                            set_current_page("");
                            set_nav_open(false);
                        }}
                        
                    > 
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
