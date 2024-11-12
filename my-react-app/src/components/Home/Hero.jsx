import { useEffect, useState } from "react";

import { motion } from "framer-motion";

//local imports
import  Hello  from "./Hello";

function Hero(){

    const [start_animation, set_start_animation] = useState(false)

    useEffect(()=>{

        set_start_animation(true)
    },[])

    const intro_variants ={
        start:()=>{

            return{
                y:"0px", 
                opacity:0
            
            }
            
        },

        end:()=>{

            return{
                y:"-300px", 
                opacity:1,
                transition:{
                    delay:1, 
                    duration:0.7,
                    type:"spring",
                    bounce:0.4,
                }
            }
        }

    }

    console.log("start_animation: ", start_animation);
    return(
            <article id="hero_box">
                <svg id="hero_svg">
                    <Hello />
                    <Hello />
                    <Hello />
                    <Hello />
                </svg>
                    <motion.h1
                        id="introduction"
                        animate={start_animation ? "end" : "start"}
                        exit={{opacity:0}}
                        variants={intro_variants}
                    >
                        My name is Braden and here is some of what I do
                    </motion.h1>
       
            </article>
    )

}

export default Hero;