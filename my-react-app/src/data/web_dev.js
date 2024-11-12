//certification images
import udemy from "../assets/certifications/udemy.jpg"
import mhc from "../assets/certifications/mhc.jpg"

//web_dev skills icons
import html_img from "../assets/logos_icons/web_skills/html5.svg";
import css_img from "../assets/logos_icons/web_skills/css3.svg";
import js_img from "../assets/logos_icons/web_skills/javascript_1.svg";
import react_img from "../assets/logos_icons/web_skills/react.svg";
import npm_img from "../assets/logos_icons/web_skills/npm.svg";
import node_img from "../assets/logos_icons/web_skills/nodejs.svg";
import express_img from "../assets/logos_icons/web_skills/express.svg";
import git_img from "../assets/logos_icons/web_skills/git.svg"
import postgre_img from "../assets/logos_icons/web_skills/postgresql.svg";
import internet_computer_img from "../assets/logos_icons/web_skills/internet_computer.svg";

export const web_dev_history ={
    history:` 
           My journey into web development started while I was attending Medicine Hat College for the Art & Design Program.
            After taking a Web Design class I became interested in how things were working behind the designs, and began down the road of web development.
            I have since expanded my skills in development, learning JavaScript, Node.js, NPM, PostGreSQL as well as working with Web3 through the Internet Computer.

         

    `,

    education:[
        {
            id:1,
            institute: "Udemy",
            course: "The Complete 2024 Web Development Bootcamp",
            cert: udemy
        },
        {
            id:2,
            institute: "Medicine Hat College",
            course: "Applied Bachelor's of Art & Design",
            cert: mhc
        },
       

    ],
    

    web_skills:[
        {
            name: "HTML5",
            icon: html_img
        },
        {
            name: "CSS3",
            icon:css_img
        },
        {
            name: "JavaScript",
            icon:js_img
        },
        {
            name: "React",
            icon:react_img
        },
        {
            name: "Node.js",
            icon:node_img
        },
        {
            name: "NPM",
            icon:npm_img
        },
        {
            name: "Express.js",
            icon:express_img
        },
        {
            name: "Git",
            icon:git_img
        },
        {
            name: "PostGreSQL",
            icon:postgre_img
        },  
        {
            name: "Internet Computer",
            icon:internet_computer_img
        },
        
    ]
}



//project 1
import p1_img_1 from "../assets/project_images/web_development/opend/img_1.png";
import p1_img_2 from "../assets/project_images/web_development/opend/img_2.png";
import p1_img_3 from "../assets/project_images/web_development/opend/img_3.png";
import p1_img_4 from "../assets/project_images/web_development/opend/img_4.png";

//project 2
import p2_img_1 from "../assets/project_images/web_development/book_notes/book_notes_cover.jpg";

//project 3
import p3_img_1 from "../assets/project_images/web_development/freeform/img1.jpg";
import p3_img_2 from "../assets/project_images/web_development/freeform/img2.jpg";
import p3_img_3 from "../assets/project_images/web_development/freeform/img3.jpg";
import p3_img_4 from "../assets/project_images/web_development/freeform/img4.jpg";
import p3_img_5 from "../assets/project_images/web_development/freeform/img5.jpg";

//project 4
import p4_img_1 from "../assets/project_images/web_development/grab_a_drink/img_1.png";
import p4_img_2 from "../assets/project_images/web_development/grab_a_drink/img_2.png";
import p4_img_3 from "../assets/project_images/web_development/grab_a_drink/img_3.png";

//project 5
import p5_img_1 from "../assets/project_images/web_development/token/img_1.png";
import p5_img_2 from "../assets/project_images/web_development/token/img_2.png";
import p5_img_3 from "../assets/project_images/web_development/token/img_3.png";

//project 6
import p6_img_1 from "../assets/project_images/web_development/portfolio_website/img_1.png";
import p6_img_2 from "../assets/project_images/web_development/portfolio_website/img_2.png";
import p6_img_3 from "../assets/project_images/web_development/portfolio_website/img_3.png";

export const web_dev_content = [
    {
        id: 1,
        title:"opend NFT market",
        images:[p1_img_1,p1_img_2,p1_img_3,p1_img_4,],
        web_skills:[
            {
                name: "HTML5",
                icon: html_img
            },
            {
                name: "CSS3",
                icon:css_img
            },
            {
                name: "JavaScript",
                icon:js_img
            },
            {
                name: "React",
                icon:react_img
            },
            {
                name: "Node.js",
                icon:node_img
            },
            {
                name: "NPM",
                icon:npm_img
            },
            {
                name: "Internet Computer",
                icon:internet_computer_img
            },
            
        ], 
        date:"2024",   
        description:`
            This was the final project done through my Udemy Web Development course, build a functioning NFT market.
            The website is capable of minting, purchasing, or even selling NFTs on it's own market, with all purchases running though a previously created token website.

        
        `,
        link: "",

    },
    {
        id: 2,
        title:"Book Notes", 
        images:[p2_img_1, ],
        web_skills:[
            {
                name: "HTML5",
                icon: html_img
            },
            {
                name: "CSS3",
                icon:css_img
            },
            {
                name: "JavaScript",
                icon:js_img
            },
            {
                name: "Node.js",
                icon:node_img
            },
            {
                name: "NPM",
                icon:npm_img
            },
            {
                name: "Express.js",
                icon:express_img
            },
            {
                name: "PostGreSQL",
                icon:postgre_img
            },
            
        ],
        date:"2024",  
        description:`
            This website was completed just before I began to learn about React and I really wanted to push myself and see what I could achieve with the skills I had.
            It incorperated a PostGreSQL database to log any books added, as well as a build in book search utilizing API's from Open Library.
            Users can look up books, and add them to their own collection sorting them based on completion level.
            They can also add reviews as well as ratings for each book. 
        `,
        link:"https://braden-book-notes.onrender.com/",

    },
    {
        id: 3,
        title:"FreeForm",
        date:"2021",    
        images:[p3_img_1, p3_img_2, p3_img_3, p3_img_4, p3_img_5,],
        web_skills:[
            {
                name: "HTML5",
                icon: html_img
            },
            {
                name: "CSS3",
                icon:css_img
            },
            {
                name: "JavaScript",
                icon:js_img
            },    
        ],
        description:`
            For my final year of the Art & Design Program at Medicine Hat College a website was a crucial part of making any kind of show happen, due to the circumstances of the Covid-19 pandemic. I and one other student were tasked with building this website. The design was a group effort, but the task of coding the website was my main task as an individual. I saw this as a great opportunity to learn more about HTML and CSS coding and led me to learn a little bit about java script. The Matterport environment was done by an outside source, but I did the coding to embed it into the site.
        `,
        link:"https://bladen777.github.io/freeform/",

    },
    {
        id: 4,
        title:"Grab a Drink",
        date:"2023",    
        images:[p4_img_1, p4_img_2, p4_img_3,],
        web_skills:[
            {
                name: "HTML5",
                icon: html_img
            },
            {
                name: "CSS3",
                icon:css_img
            },
            {
                name: "JavaScript",
                icon:js_img
            },
            {
                name: "Node.js",
                icon:node_img
            },
            {
                name: "NPM",
                icon:npm_img
            },
            {
                name: "Express.js",
                icon:express_img
            },    
        ],
        description:`
            For my final year of the Art & Design Program at Medicine Hat College a website was a crucial part of making any kind of show happen, due to the circumstances of the Covid-19 pandemic. I and one other student were tasked with building this website. The design was a group effort, but the task of coding the website was my main task as an individual. I saw this as a great opportunity to learn more about HTML and CSS coding and led me to learn a little bit about java script. The Matterport environment was done by an outside source, but I did the coding to embed it into the site.
        `,
        link:"",

    },
    {
        id: 5,
        title:"Token Bank and Tracking",
        images:[p5_img_1,p5_img_2,p5_img_3,],
        web_skills:[
            {
                name: "HTML5",
                icon: html_img
            },
            {
                name: "CSS3",
                icon:css_img
            },
            {
                name: "JavaScript",
                icon:js_img
            },
            {
                name: "React",
                icon:react_img
            },
            {
                name: "Node.js",
                icon:node_img
            },
            {
                name: "NPM",
                icon:npm_img
            },
            {
                name: "Internet Computer",
                icon:internet_computer_img
            },
            
        ], 
        date:"2024",   
        description:`
            This website introduced me to the complexities in dealing with crypto currencies, as well as the ledger style information tracking that is utilized through blockchain.
            It features Authentication thorough Internet Computer to properly track ones account and funds, and was build as the currency backbone for a later website.

        
        `,
        link: "",

    },
    {
        id: 6,
        title:"Portfolio website",
        date:"2021",    
        images:[p6_img_1, p6_img_2, p6_img_3],
        web_skills:[
            {
                name: "HTML5",
                icon: html_img
            },
            {
                name: "CSS3",
                icon:css_img
            },
            {
                name: "JavaScript",
                icon:js_img
            },    
        ],
        description:`
            While in the process of finishing my final semester at Medicine Hat College I needed a way to showcase my works, what better way than to use my web design & development skills.
            This was my last project in web design before I decided to persue Web development in a more full form, and now I am able to achieve much better results as well as incorperating backends.
        `,
        link:"https://bladen777.github.io/portflio_mk1/",

    },


];



