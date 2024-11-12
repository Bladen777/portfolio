
//local imports
import Home from "./Home";
import Web_Dev from './Web_Dev';
import Graphic_Design from './Graphic_Design';
import Sculpture from './Sculpture';

const The_Routes = [
    { name: "Home",
      index: true,
      element:
          <Home 
          />
    },
    { id:"web_dev",
      name: "Web Development",
      path:"/web_development",
      element:
          <Web_Dev />
    },
    { id:"graphic_design",
      name: "Graphic Design",
      path: "/graphic_design",
      element:
          <Graphic_Design />        
    },
    { id: "sculpture",
      name: "Sculpture",
      path: "/sculpture",
      element:
        <Sculpture />

    }    
  ]
  



export default The_Routes;