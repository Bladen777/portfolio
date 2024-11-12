
import {motion} from "framer-motion";
import { useLocation } from "react-router-dom";

import {sculpture_content} from "../data/sculpture";
import { sculpture_history } from "../data/sculpture";
import Content_Page from "../components/Content_Pages/Content_Page";
import page_trans from "../animation_variants/page_trans";



export default function Sculpture(){

        const location = {
            this_location: 3,
            target_location:(useLocation().pathname)
        }; 
    return(
            <motion.main 
                id="sculpture"
                className="section_container content_page"
                initial="enter"
                animate="animate" 
                exit="exit"
                custom={location}
                variants={page_trans}

            >
                <Content_Page
                    section_title="Sculpture"
                    content={sculpture_content}
                    history={sculpture_history}
                />
            </motion.main>
       
    );

}

