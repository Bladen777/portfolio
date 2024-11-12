import {  useLocation } from "react-router-dom";

import { motion } from "framer-motion";


//local imports
import "../styles/home.css";

import The_Routes from "./The_Routes";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import page_trans from "../animation_variants/page_trans";
import Link_Container from "../components/Home/Link_Container";


function Home(){

    const location = {
        this_location: 0,
        target_location:(useLocation().pathname)
    };

    function links(vals,index){
        let initial_direction;
        if (index%2 === 0){
            initial_direction =1;
        } else {
            initial_direction = -1;
        }

        //console.log("vals.id: ",vals.id)
        if (vals.name !== "Home"){
            return(
                <Link_Container
                    key={vals.id}
                    id={vals.id}
                    initial_direction={initial_direction}
                    name={vals.name}
                    path={vals.path}
                />   
            )
        }
    }

   

    return(
            <motion.main
                id="home"
                className={"section_container"}
                initial="enter"
                animate="animate"
                exit="exit"
                custom={location}
                variants={page_trans}
                >
                <Hero />
                {The_Routes.map(links)}
                <About />
            </motion.main>
    );

}

export default Home;