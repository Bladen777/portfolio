
import {motion} from "framer-motion";
import { useLocation } from "react-router-dom";

import {graphic_design_content} from "../data/graphic_design";
import { graphic_design_history } from "../data/graphic_design";
import Content_Page from "../components/Content_Pages/Content_Page";
import page_trans from "../animation_variants/page_trans";



export default function Graphic_Design(){

        const location = {
            this_location: 2,
            target_location:(useLocation().pathname)
        };
    return(
    
            <motion.main
                id="graphic_design" 
                className="section_container content_page"
                initial="enter"
                animate="animate"
                exit="exit"
                custom={location}
                variants={page_trans}

            >
                <Content_Page
                    section_title="Graphic Design"
                    content={graphic_design_content}
                    history={graphic_design_history}
                />
            </motion.main>
       
    );

}

