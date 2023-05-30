import "./place.css";
import { SignUp } from "../SignUp/SignUp";

export const Place = () =>{
    return(
        <>
            <div className="place">
                <div className="container text-align-center">
                    <h3 className="place_heeding">Buyurtma berish</h3>
                    <p className="place_p">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                    <SignUp/>
                </div>
            </div>
        </>
    )
}