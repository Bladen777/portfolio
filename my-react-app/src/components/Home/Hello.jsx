import { Random_Polyline } from "./Random_Polyline"


// made this it's own component to keep the Hero component more clear
export default function Hello() {
    return (
        <>
            <Random_Polyline
                word_length = "5"
                letter_pos = "0"
                x_points={[50,20,20,0,0,20,20,50,50,70,70,50,50]}
                y_points={[30,30,0,0,100,100,50,50,100,100,0,0,30]}
            />

            <Random_Polyline
                word_length = "5"
                letter_pos = "1"
                x_points={[20,20,50,50,20,20,70,70,0,0,70,70,20]}
                y_points={[20,40,40,60,60,80,80,100,100,0,0,20,20]}
            />


            <Random_Polyline
                word_length = "5"
                letter_pos = "2"
                x_points={[0,70,70,20,20,0,0]}
                y_points={[100,100,80,80,0,0,100]}
            />

            <Random_Polyline
                word_length = "5"
                letter_pos = "3"
                x_points={[20,20,70,70,0,0,20]}
                y_points={[0,80,80,100,100,0,0]}
            />

            <Random_Polyline
                word_length = "5"
                letter_pos = "4"
                x_points={[70,70,0,0,70]}
                y_points={[100,0,0,100,100]}
            /> 

            <Random_Polyline
                word_length = "5"
                letter_pos = "4"
                x_points={[50,50,20,20,50]}
                y_points={[80,20,20,80,80]}
            />
        </>
    )
}