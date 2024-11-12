import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import profile_image from "../../assets/home_images/profile.png"
import linkedin_logo from "../../assets/logos_icons/LinkedIn-Logos/LI-In-Bug.png";
import github_logo from "../../assets/logos_icons/github-mark/github-mark-white.png"



function About(){
    const [open_contact, set_open_contact] = useState(false);
    const [contact_name, set_contact_name] =useState("");
    const [contact_email, set_contact_email] =useState("");
    const [contact_message, set_contact_message] =useState("");
    const [missing_name, set_missing_name] = useState(false);
    const [missing_email, set_missing_email] = useState(false);
    const [missing_message, set_missing_message] = useState(false);
    const [sent_email, set_sent_email] = useState(false);

    const form = useRef();
    const contact_scroll = useRef();


    function toggle_contact(){
        set_open_contact(!open_contact);
        !open_contact && contact_scroll.current.scrollIntoView({behavior:"smooth"});
    }

    async function send_email(){
        set_missing_name(contact_name === "" ? true : false);
        set_missing_email(contact_email === "" ? true : false);
        set_missing_message(contact_message === "" ? true : false);

        if (contact_name !== "" && contact_email !== "" && contact_message !== ""){
            set_sent_email(true)
            console.log("form data: ", form.current)
            try {
               await emailjs.sendForm("service_u6tes5r","template_exns0rp", form.current, {publicKey:"fIeGq0CCJaHostmKe"});
             
            } catch (err) {
                console.log("The eror that occured: ", err)
            }
        }    
    }


    return(
        <>
            <article
                ref={contact_scroll}
                id="about" 
            >
                <section id="img_form_container">
                    <div id="about_img_container">
                        <img id="about_img" className={open_contact? "close_contact" : "open_contact"} src={profile_image} alt="Braden Kowalchuk Image"></img>
                    </div>
                    <div    id="contact_form_container"
                            className={open_contact?  "open_contact" : "close_contact" }
                    >
                        <form ref={form} id="contact_form" className={open_contact?  "open_form" : "close_form"} >
                            {missing_name && <h3>Please Enter your Name</h3>}
                            <input className="contact_input" type="text" id="name" name="user_name" autoComplete="true" placeholder="Your Name" value={contact_name} onChange={(e)=>{set_contact_name(e.target.value)}}></input>
                            {missing_email && <h3>Please Enter your Email</h3>}
                            <input className="contact_input" type="text" id="email" name="user_email" autoComplete="true" placeholder="Your Email" value={contact_email} onChange={(e)=>{set_contact_email(e.target.value)}}></input>
                            {missing_message && <h3>Please Enter your Message</h3>}
                            <textarea className="contact_input" id="message" name="message" placeholder="Your Message" value={contact_message} onChange={(e)=>{set_contact_message(e.target.value)}}></textarea>
                            <input  id="contact_form_btn" className={sent_email ? "disable_send" : "" } type="button" disabled={sent_email ? true : false} value={sent_email ?"Email Sent!" :"Send"} onClick={send_email}></input>
                            
                            
                            
                        </form>
                        
                    </div>
                </section>  
                
          
                <h2 id="about_title">Oh Hello There</h2>
                <p id="about_text">
                I&#39;m Braden Kowalchuk, a Certified Full Stack Web Developer. 
                My interest in web development began at Medicine Hat College while studying Art & Design. 
                A Web Design class sparked my curiosity about the technical side of things, leading me to explore development further. 
                I continue to create and design across various mediums, allowing me to blend skills from different fields.
      
      
    
        
               </p>
                <section id="contact_links">
                    <button id="contact_btn"  onClick={toggle_contact}>{open_contact ? "Return" : "Contact"}</button>
                    <a href="https://www.linkedin.com/in/braden-kowalchuk-38a5ba28a/" target="_blank"><img src={linkedin_logo} alt="LinkedIn link"></img></a>
                    <a href="https://github.com/Bladen777" target="_blank"><img src={github_logo} alt="Github link"></img></a>
                    
                </section>
            </article>
        </>
    )

}

export default About;