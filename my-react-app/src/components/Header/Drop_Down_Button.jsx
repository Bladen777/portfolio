import { motion } from "framer-motion"
import PropTypes from "prop-types";
import {  useState } from "react";
import { theme_colours } from "../../data/colours_data";

export default function Drop_Down_Button(props){
    const [nav_used, set_nav_used] = useState(false);
 
    

    function toggle_nav(){
        set_nav_used(true)
        props.toggle_nav()
    }

    function Hamb_Line(vals){
        return(
            <motion.line
                strokeLinecap= "round"
                x1={vals.x1 ? vals.x1 : "10"}
                y1={vals.y1}
                x2={vals.x2 ? vals.x2 : "90"}
                y2={vals.y2 ? vals.y2 : vals.y1}
                strokeWidth= "6px"
                stroke={theme_colours.third}
                variants={hamb_variants}
                custom={vals.custom}  
            />
        );
    }

   

    function exit_animation(line_delay){
        return{
            pathLength: [1,0],
            opacity: [1,0],
            transition: {
                pathLength: { delay: line_delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: {  delay: line_delay, duration: 0.6 }
            }
        }
        
    }

    function enter_animation(line_delay){
        return{
            pathLength: [0,1],
            opacity: [0,1],
            transition: {
                pathLength: { delay: line_delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay: line_delay, duration: 1 }
            }
        }      
    }


    const hamb_variants={
        lines: (custom_vals) => {
            //console.log("lines custom_vals: ", custom_vals);
        
                const line_delay =  (custom_vals * 0.2) - 0.2;
                if (custom_vals === 1 && nav_used){
                    return  
                } else if (custom_vals <= 3){
                    return enter_animation(line_delay);
                } else if(custom_vals > 3){
                    return exit_animation(0);
                }
      
        },

        triangle: (custom_vals) => {
            //console.log("triangle custom_vals: ", custom_vals);

                const line_delay =  (custom_vals * 0.2) - 0.6;
                if (custom_vals === 2 || custom_vals === 3 ){
                    const line_delay = custom_vals === 3 ? 0 : 0.2;
                    return {
                        pathLength: [1,0],
                        opacity: [1,0],
                        transition: {
                            pathLength: { delay: line_delay, type: "spring", duration: 0.2, bounce: 0 },
                            opacity: {  delay: line_delay, duration: 0.4 }
                        }
                    };
                } else if(custom_vals > 3){
                    return enter_animation(line_delay);
                } 

          },
    }


    console.log("BTN nav_open: ", props.nav_open);
    return(
        <motion.svg
                            className="nav_hamburger"
                            onClick={toggle_nav}
                            viewBox="0 0 100 100"
                            initial={false}
                            animate={props.nav_open ? "triangle" : "lines"}

                        >
                            <Hamb_Line 
                                y1="30"
                                custom={1}
                            />
                            <Hamb_Line 
                                y1="50"
                                custom={2}
                            />
                            <Hamb_Line 
                                y1="70"
                                custom={3}
                            />

                            <Hamb_Line 
                                x1="10"
                                y1="30"
                                x2="50"
                                y2="80"
                                custom={4}
                            />
                            
                            <Hamb_Line
                                x1="90"
                                y1="30"
                                x2="50"
                                y2="80"
                                custom={4}
                            />
                            
                            

                        </motion.svg>
    )
}
Drop_Down_Button.propTypes ={
    toggle_nav: PropTypes.func,
    nav_open: PropTypes.bool

}