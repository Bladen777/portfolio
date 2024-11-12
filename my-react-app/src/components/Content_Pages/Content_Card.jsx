import PropTypes from "prop-types";
import { motion } from "framer-motion";


export default function Content_Card(props){

    return(
        <motion.img 
                    onClick={()=>{props.show_content(props.project_number)}}
                    className={"image_card " + (props.showing === props.title ? "image_card_active" : "")}
                    id = {props.title + "_image_holder"}
                    src={props.images[0]} 
                    alt="image slide show"    
                >
                </motion.img>


    )

}

Content_Card.propTypes ={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    showing: PropTypes.string.isRequired,
    show_content: PropTypes.func.isRequired,
    project_number: PropTypes.number.isRequired
}