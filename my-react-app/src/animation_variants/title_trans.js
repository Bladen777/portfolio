const enter_exit_trans ={
    transition:{
        duration:2,
        delay:0.6,
        type:"spring"
    }
}

const title_trans={
    animate: ()=>{
        return{
            y: 0,
            opacity: 1,
            transition: enter_exit_trans.transition
        }
    },

    enter: () =>{
        return{
            y: -20,
            opacity: 0,
        }
    },

    exit: () =>{
        return{
            y: -20,
            opacity: 0,
            transition: {duration:0.5}
        }
    },
    
}

export default title_trans;