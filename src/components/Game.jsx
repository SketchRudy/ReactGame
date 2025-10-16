// At least one number
// At least one array
// at least one object (current upgrade with name, cost, etc) (stats button)
import React from "react";
import Wood from "../images/wood.png"
import Rock from "../images/rock.png"
import Metal from "../images/metal.png"

export default function Game() { 
    let woodCounter = 0;
    let rockCounter = 0;
    let metalCounter = 0;
    let playerName = "beginner"
    let [woodCounting, setWood] = React.useState("Yes");


    let totalCount = woodCounter + rockCounter + metalCounter;
    let resources = {woodCounter,rockCounter,metalCounter}

    const player = {name:playerName, total:totalCount};


    function Materials() {
        
    }

    function increment(){
        console.log("Counting...");
    }

    return (
        <>
          <h1>Game Testing</h1>
          
          <img src={Wood} alt="photo of wood" className = "materialimg"/>
          <button onClick={increment}>Wood</button>
          <br></br><br></br>
          <img src={Rock} alt="photo of rock" className = "materialimg"/>
          <button>Rock</button> 
          <br></br><br></br>
          <img src={Metal} alt="photo of metal" className = "materialimg"/>
          <button>Metal</button>
          <br></br><br></br>


        </>
      )
}