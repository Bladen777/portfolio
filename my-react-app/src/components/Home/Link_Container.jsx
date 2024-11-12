
import { useRef, useState } from "react";

import {motion, useScroll, useTransform, useMotionValue, useAnimationFrame} from "framer-motion";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//local imports
import {web_dev_content} from "../../data/web_dev";
import {graphic_design_content} from "../../data/graphic_design";
import {sculpture_content} from "../../data/sculpture";


export default function Link_Container(props){

    const [link_container_in_view, set_link_container_in_view] = useState(false);
    const [img_container_width, set_img_container_width] = useState("");

    //track scroll position
    const scroll_ref = useRef(null);
    
    const {scrollYProgress} = useScroll({
        target: scroll_ref,
        offset:["start end", "start center"]
    });

    // swich content based on link
    let bg_image_src;
    switch(props.id){
        case "web_dev": bg_image_src = web_dev_content; break;
        case "graphic_design": bg_image_src = graphic_design_content; break;
        case "sculpture": bg_image_src = sculpture_content; break;
    }

    //get viewport width
    const window_width = useRef()
    window.addEventListener("resize", () => {window_width.current = window.innerWidth })
    window_width.current = window.innerWidth;

    //get container width
    const img_container = document.getElementById(`${props.id}_img_slider`);
    if(img_container && img_container_width === ""){
        set_img_container_width(img_container.offsetWidth)
    }



    //image slider
    const slide_motion_value = useMotionValue(0); 
    const x = useTransform(() =>slide_motion_value.get());
    const slide_direction = useRef(props.initial_direction);
    useAnimationFrame(()=>{
        let position = slide_motion_value.get();
        let img_chunk_eles = document.getElementsByClassName(`${props.id}_img_chunk`);
        
        let img_chunk_width = 0;
            for(let i=0; i < img_chunk_eles.length; i++){
                img_chunk_width += img_chunk_eles[i].offsetWidth;
            }
            
        let img_offset = window_width.current - img_chunk_width;           
        let width = ((img_container_width - window_width.current)/2 -(img_chunk_width - img_offset))*slide_direction.current;
        let reset_width = (img_container_width - window_width.current)/2;

        if(position !== 0){
            if((position < width) && slide_direction.current === -1){
                slide_motion_value.set(reset_width * (slide_direction.current*-1))
            }else if ((position > width) && slide_direction.current === 1){
                slide_motion_value.set(reset_width * (slide_direction.current*-1))    
            }
        }
        let move_by = slide_direction.current*4;
        link_container_in_view && slide_motion_value.set(slide_motion_value.get() + move_by);
        
    })


    function map_images_initial(project){
        return(
            <img    
                className={`${props.id}_img_chunk`}
                key={project.id} 
                src={project.images[0]}
            />)
    }

    function map_images(project){
            return(
                <img    
                    key={project.id}
                    src={project.images[0]}
                />
            )
    }

    // link variants to add more interactive animation 
    const link_variants ={
        gone: ()=>{
            return{
           
                
            }
        },
        present:()=>{
            return{
              
            }
        }



    }


    if (props.name !== "Home"){
    return(
            <motion.article
                ref={scroll_ref}
                className="link_container" 
                key={props.name} 
        
                style={{
                    opacity:scrollYProgress
                }}

                animate={link_container_in_view ? "present" : "gone" }
                onViewportEnter={()=>{set_link_container_in_view(true)}}
                onViewportLeave={()=>{set_link_container_in_view(false)}}
                variants={link_variants}
            >
                <motion.div
                    id={`${props.id}_img_slider`}
                    className="img_slider"
                    style={{x}}

                >
       
                    {bg_image_src.map(map_images_initial)}
                    {bg_image_src.map(map_images)}
                    {bg_image_src.map(map_images)}

                </motion.div>
                
                <Link
                    className="link_container_link"
                    to={props.path}
                >
                      <h1>  {props.name} </h1>
                </Link>
            </motion.article>
        
    )}
} 

Link_Container.propTypes ={
    id: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string,
    initial_direction: PropTypes.number

}