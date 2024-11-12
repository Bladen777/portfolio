
import {motion} from "framer-motion";
import { useLocation } from "react-router-dom";

import {web_dev_content} from "../data/web_dev";
import { web_dev_history } from "../data/web_dev";
import Content_Page from "../components/Content_Pages/Content_Page";
import page_trans from "../animation_variants/page_trans";



export default function Web_Development(){

        const location = {
            this_location: 1,
            target_location:(useLocation().pathname)
        };
    return(
    
            <motion.main
                id="web_development" 
                className="section_container content_page"
                initial="enter"
                animate="animate"
                exit="exit"
                custom={location}
                variants={page_trans}

            >
                <Content_Page
                    section_title="Web Development"
                    content={web_dev_content}
                    history={web_dev_history}
                />
            </motion.main>
       
    );

}

