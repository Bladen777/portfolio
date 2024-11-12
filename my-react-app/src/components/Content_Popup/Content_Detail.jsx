import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";

//local imports
import "../../styles/content_detail.css"
import { Use_Content_Context } from "./Content_Context";
import {  Update_Content_Context } from "./Content_Context";


export default function Content_Detail(){

    const context = Use_Content_Context();
    const update_content =  Update_Content_Context();
    const[scope, animate] = useAnimate(); 

    
    console.log(" the context: ", context);

    const imgs_length = context.images.length - 1;

    const [counter, set_counter]=useState(0);

    async function handle_click(way){
        await animate(scope.current,{
            opacity:[1,0]
        },{
            duration:0.3
        })
        if(way === "back"){
            counter === 0 ? set_counter(imgs_length) : set_counter(counter - 1);
        } else if (way === "forw"){
            counter === imgs_length ? set_counter(0) : set_counter(counter + 1);
        };
    }


    function initial_animate(){
        animate(scope.current,{
            opacity:[0,1]
        },{
            duration:0.3
        })
    }


    

    console.log(" the context: ", context);

        const auto_scroll_here = useRef();
 
        useEffect(() => { 
            auto_scroll_here.current.scrollIntoView({behavior:"smooth"});
        },[]);
            
    console.log("context.web_skills", context.web_skills)

    return(

            <motion.article 
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}

                transition={{duration:0.5}}
                className="content_details"
            
            >
                <section className="image_carousel"> 
                    {context.images.length > 1 &&
                        <button id="carousel_btn_left" className="carousel_btn material-symbols-outlined" onClick={()=>{handle_click("back")}}>arrow_back_ios_new</button>
                    }
                    <img ref={scope} id="carousel_image_holder" src={context.images[counter]} alt="image carousel" onLoad={initial_animate}></img>
                    {context.images.length > 1 &&
                        <button id="carousel_btn_right" className="carousel_btn material-symbols-outlined" onClick={()=>{handle_click("forw")}}>arrow_forward_ios</button>
                    }
                </section>
                {context.web_skills !== undefined  &&
                <article className="web_skills">
                    {context.web_skills.map((item, index)=>{
                        return(
                            <figure key={index} className="web_skill_figure">
                              <svg>
                                <image className="web_icon" href={item.icon} alt={item.name}/>
                               </svg>
                                <p> {item.name}</p>
                            </figure>
                        )
                    })}
                </article>     
                }

                <section className="details" ref={auto_scroll_here}>
                    <h2>{context.title} </h2>
                    <p>{context.date}</p>
                    {context.size !=="" && <p>{context.size}</p>}
                    {context.material !=="" && <p>{context.material}</p>}
                    <p>{context.description}</p>
                    {context.link !=="" && <a className="project_context.link" href={context.link} target="_blank"><h3>Check it out here!</h3></a>}
                 
                </section>
                <button 
                    onClick={()=>{update_content("image_slide")}}
                    className="content_exit_btn material-symbols-outlined"
                >close</button>   


            </motion.article>
    )

}



Content_Detail.propTypes ={
    title: PropTypes.string,
    images: PropTypes.array,
    web_skills: PropTypes.array,
    date: PropTypes.string,
    size: PropTypes.string,
    material: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    
}
