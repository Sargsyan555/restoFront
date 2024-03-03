import { useState } from "react";
import Foods from "./Foods";
import "./Menu.css"
export default function Menu(){
    const [whichContent, setContent] = useState("menu")
    const [selectedFood, setSelectedFood] = useState("");
    function setSelectedFoodf(type){
        setSelectedFood(type)
        setContent("horisontalMenu")
    }
        return(
            <>
                <div className="typeOfFood">
                    <ul className={whichContent}> 
                        <li  onClick={() => setSelectedFoodf('pizza')}>
                            <h2>Pizza</h2>
                        </li>
                        <li onClick={() => setSelectedFoodf("salads")}>
                            <h2>Salats</h2>
                        </li>
                        <li onClick={() => setSelectedFoodf("soups")}>
                            <h2>Soap</h2>
                        </li>
                        <li onClick={() => setSelectedFoodf("desserts")}>
                            <h2>Desserts</h2>
                        </li>
                        <li onClick={() => setSelectedFoodf("drinks")}>
                            <h2>Drinks</h2>
                        </li>
                        
                    </ul>
                </div>
                 {selectedFood != ""? <Foods selectedFood={selectedFood}/> : <></>}
                
            </>
        )
}