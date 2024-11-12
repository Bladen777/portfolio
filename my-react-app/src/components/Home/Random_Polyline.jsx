import { motion, useAnimate } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef, useState, } from "react";

//local imports
import { hero_animation_colours } from "../../data/colours_data";


export function Random_Polyline(props){

    const [scope, animate] = useAnimate()
    const [polyline_points, set_polyline_points] = useState("");
    const [rand_colour, set_rand_colour]= useState("")

    // tracking window size & adjust accordinly
    window.addEventListener("resize", () => {svg_width.current = window.innerWidth })
    const svg_box = document.getElementById("hero_box");
    const svg_width = useRef(0)
    const svg_height = useRef(0)
                                          
    if(svg_box){
        svg_width.current = window.innerWidth;
        svg_height.current = svg_box.offsetHeight;   
    }
    
    async function adjust_points(){
        let letter_width = 70;
        /* This dynamically finds the letter width, results in inconsitent spacing
        for(let i = 0; i<props.x_points.length; i++){
            if (props.x_points[i] > letter_width){ letter_width = props.x_points[i]}
        }
        */

        let letter_height = 100;
        /* This dynamically finds the letter width, results in inconsitent spacing
        for(let i = 0; i<props.y_points.length; i++){
            if (props.y_points[i] > letter_height){ letter_height = props.y_points[i]}
        }
        */

        const letter_spacing = letter_width/2;
        const word_size = (props.word_length*letter_width+(letter_spacing*(props.word_length -1)));
        const letter_position = (letter_width+letter_spacing)*props.letter_pos;
        const scale= (svg_width.current*.8)/word_size;
        

        const start_x = svg_width.current/2 - word_size*scale/2 + letter_position*scale ;
        const start_y = svg_height.current/3 - letter_height/3;

        const x_points = props.x_points.map((num)=>{return num*scale + start_x});
        const y_points = props.y_points.map((num)=>{return num*scale + start_y});


        let new_points = "";
        for(let i=0; i < y_points.length; i++){
            new_points += `${x_points[i]},${y_points[i]} `
        }
        const rand_x =(Math.floor(Math.random()*svg_width.current))
        const rand_y =(Math.floor(Math.random()*svg_height.current))


        // set the points for the polyline animation
        set_polyline_points(rand_x + "," + rand_y + " " + new_points);
        set_rand_colour(hero_animation_colours[Math.floor(Math.random()*hero_animation_colours.length)])
        const random_delay = Math.floor(Math.random()*5);
        const random_duration = Math.floor(Math.random()*5);
        const random_start_width = Math.floor(Math.random()*150);

        if(scope.current){
            // the animation
            await animate(scope.current,{
                opacity:[0,1],
                pathLength: [0,1],
                pathOffset:[0,0.75],
                strokeWidth:[`${random_start_width}px`, "5px"]
                }, {
                    delay:random_delay, 
                    duration:random_duration, 
                    repeat:1, 
                    repeatType:"reverse",
                }
            )
     
        // call the function again after the animation completes
        adjust_points()
        }
    }
        

        useEffect(()=>{
        if(svg_box){
        adjust_points()
        }
        //  eslint-disable-next-line react-hooks/exhaustive-deps
        },[svg_box])



    return(

        <motion.polyline
            ref={scope}
            points={polyline_points }
            stroke={rand_colour}
            fill="none"
            strokeWidth="5px"
            strokeLinecap="round"
            />
    )

}


Random_Polyline.propTypes ={
    x_points: PropTypes.array.isRequired,
    y_points: PropTypes.array.isRequired,
    letter_pos: PropTypes.string.isRequired,
    word_length: PropTypes.string.isRequired

}

