import The_Routes from "../routes/The_Routes";


function find_position(location){
    let destination;

    if (location.target_location === "/"){
        destination = 0;
    } else {
        destination = The_Routes.findIndex((this_place)=>{
            return  this_place.path === location.target_location;
            }
        )
    };

    return destination;
}


let old_location;
const enter_exit_trans ={
    transition:{
        duration:1,
        type:"spring"
    }
}


const page_trans={
    animate: ()=>{
        return{
            x: 0,
            position:"relative",
            transition: enter_exit_trans.transition 
        }
    },

    enter: (location) =>{
        const position = find_position(location);
        return{
            x: old_location > position ? "-100%" : "100%",
            position:"absolute",
        }
    },

    exit: (location) =>{
        const position = find_position(location);
        old_location = position;
        return{
            x: location.this_location > position ? "100%" : "-100%",
            position:"absolute",
            transition: enter_exit_trans.transition
            
        }
    },
    
}

export default page_trans;