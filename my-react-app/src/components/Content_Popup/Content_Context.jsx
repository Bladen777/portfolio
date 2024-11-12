import { createContext, useContext, useState } from "react"

import PropTypes from "prop-types";

import Content from "./Content_Detail";


const Content_Context = createContext();
const Content_Update = createContext();


export function Use_Content_Context(){
    return useContext(Content_Context);
} 
export function Update_Content_Context(){
    return useContext(Content_Update);
}


export function Content_Provider({children}){
    const [content_data, set_content_data] = useState("");

    function get_data(values){
        set_content_data(values)
    }

    function overflow(flow){
     document.body.style.overflow = flow
    }

    return(
        <Content_Context.Provider value={content_data}>
            <Content_Update.Provider value={get_data}>
                {content_data.view === "content" &&<Content />}
                {content_data.view === "content" ? (overflow("hidden")):(overflow("visible")) }
                {children}
            </Content_Update.Provider>
        </Content_Context.Provider>

    )
}

Content_Provider.propTypes ={
    children: PropTypes.array

}

