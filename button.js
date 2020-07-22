import React from 'react'; //import react dependencies

// functional componenet Button
function Button(props){
var box = (`box${props.count}`); // to render diffrent background images for each option selected
    return(
        // using props we get count value (1-4) and click value (true or false) and use to render differt styling 
        <div className={box} >
             <ul className={props.click  ? "head" : "headto"}> 
                <li className={props.count == 1 ? "game" : "head1"}>Game  </li> 
                <li className={props.count == 2 ? "game" : "head1"} >Music </li> 
                <li className={props.count == 3 ? "game" : "head1"} >TODO  </li>
                <li className={props.count == 4 ? "game" : "head1"} >TEXTS </li> 
            </ul>
            </div>
    )
}

export default  Button; // export buttton component

