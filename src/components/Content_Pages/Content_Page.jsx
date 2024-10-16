import { motion, useAnimate } from "framer-motion"
import PropTypes from "prop-types";
import { useState, useRef, useEffect, useCallback } from "react";


import {  Update_Content_Context } from "../Content_Popup/Content_Context";
import title_trans from "../../animation_variants/title_trans";
import Content_Card from "./Content_Card";

import "../../styles/content_page.css"


export default function Content_Page(props){

    let content_props = {
        view: "",
        title: "", 
        images: [],
        web_skills:[],
        date: "",
        size:"",
        material:"", 
        description: "",
        link: "" 
    };

    
    function toggle_view(project){
        console.log("toggle_view project: ", project);
        content_props.view = "content";
        content_props.title = props.content[project].title;
        content_props.images = props.content[project].images;
        content_props.web_skills = props.content[project].web_skills;
        content_props.date = props.content[project].date;
        content_props.size = props.content[project].size;
        content_props.material = props.content[project].material;
        content_props.description = props.content[project].description;
        content_props.link = props.content[project].link;
        update_content(content_props);
    }

    const update_content =  Update_Content_Context();

    const projects_length = props.content.length -1;

    const [show_cert, set_show_cert] = useState(false)
    const [cert, set_cert] = useState("")
    const [scope, animate] = useAnimate()
    const [view_counter, set_view_counter]=useState(0);
    const [image_counter, set_image_counter]=useState(0);

    
    const timeout = useRef();
    const running = useRef()

    
    const view_slide_show = useCallback(async() =>{
        let current_project_num;

        view_counter === projects_length ? current_project_num = 0 : current_project_num = view_counter + 1;

        const images_length = props.content[current_project_num].images.length - 1;

        let rand_image;
        if(images_length > 0){
            rand_image = Math.floor((Math.random() * images_length) + 1);
        } else {
            rand_image = 0;
        }

        //console.log("current project: ", current_project_num);
        //console.log("images length: ", images_length);
        //console.log("view counter: ", view_counter)
        //console.log("running.current: ", running.current)
        //console.log("random image: ", rand_image);
        
        scope.current && await animate(".view_deck_image", {opacity:0}, {duration:0.5})
        scope.current && animate(".view_deck_image", {opacity:1}, {duration:1, delay: 0.17})
        
        set_image_counter(rand_image);
        set_view_counter(current_project_num);

        running.current = false;
        
    },[animate, projects_length, props.content, view_counter, scope])
    

    function toggle_show_cert(new_cert){
        set_cert(new_cert)
        console.log(`new_cert: ${new_cert} vs cert ${cert}`)
        if (cert === ""){
            set_show_cert(!show_cert)
        }
        else if (new_cert !== cert){
            return
        } else {
            set_show_cert(!show_cert)
        }
    }


    useEffect(() => {
        if (!running.current){ //prevent calling function before finishing previous cycle
            timeout.current = setTimeout(view_slide_show, 2500);
        }
        running.current = true;
        return () => clearTimeout(timeout); // Cleanup on unmount or re-run
    }, [view_counter, image_counter, view_slide_show]); // Dependencies for re-triggering

    return(
        <>
            <motion.h1
                initial="enter"
                animate="animate"
                exit="exit"
                variants={title_trans}
            >   
                {props.section_title}
            </motion.h1>

            <article className="view_deck">
                <section className="view_deck_main" ref={scope}>
                    <motion.img
                        initial={{ opacity: 0}} 
                        animate={{ opacity: 1}} 
                        transition={{ duration: 0.5 }}

                        className="view_deck_image"
                        src={props.content[view_counter].images[image_counter]} 
                        alt="image slide show"
                        onClick= {()=>{toggle_view(view_counter)}}
                    />
                </section>
                <section className="content_cards">
                    {props.content.map((content, index)=>{
                            return(
                                <Content_Card
                                    key={content.title} 
                                    title= {content.title}
                                    main_image= {content.main_image}
                                    images={content.images}
                                    description= {content.description}
                                    showing={props.content[view_counter].title}
                                    link={content.link}
                                    project_number = {index} 
                                    show_content={toggle_view}  
                                />
                            )
                        }
                    )}
                </section>
            </article>
            {props.section_title === "Web Development" &&
                <article className="web_skills">
                    {props.history.web_skills.map((item, index)=>{
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

            <article className="skill_info">
                <section className="skill_history">
                    <h2>{`My History with ${props.section_title}`}</h2>
                    <p>{props.history.history}</p>
                </section>

               <section className="skill_education">
                    <h2 >{`Education & Certificates`}</h2>
                    <ul>
                        {props.history.education.map((item, index)=>{
                            return(
                            <li key={index}>
                                <button onClick={()=>{toggle_show_cert(item.cert)}}>{item.institute}</button>
                            </li>
                            )
                        }
                    )}
                        
                        
                    </ul>
                </section>
            </article>

            <figure className={"show_cert " + (!show_cert ? "hide_cert" : "") }>
                <img src={cert} />
            </figure>
        
        </>
    )
}

Content_Page.propTypes ={
    section_title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired

}

/*

*/