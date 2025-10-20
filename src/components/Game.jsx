// At least one number
// At least one array
// at least one object (current upgrade with name, cost, etc) (stats button)
import React from "react";
import Wood from "../images/wood.png"
import Rock from "../images/rock.png"
import Metal from "../images/metal.png"

export default function Game() { 

    let mats = "wood"  
    const [woodCounter, setWoodCounter] = React.useState(0);
    const [rockCounter, setRockCounter] = React.useState(0);
    const [metalCounter, setMetalCounter] = React.useState(0);  


    let items = [woodCounter, rockCounter, metalCounter];
    let totalCount = woodCounter + rockCounter + metalCounter;
    let resources = {woodCounter,rockCounter,metalCounter}

    const pickAxe = {name:mats, total:totalCount, image:"../images/wood.png"};




    function woodIncrement(){     //if user has enough wood upgrade the wood pickaxe to rock
        setWoodCounter(woodCounter+1);
        console.log(woodCounter);
    }

    function rockIncrement(){     //if user has enough wood upgrade the wood pickaxe to rock
        setRockCounter(rockCounter+1);
        console.log(rockCounter);
    }
    function metalIncrement(){     //if user has enough wood upgrade the wood pickaxe to rock
        setMetalCounter(metalCounter+1);
        console.log(metalCounter);
    }
    


    
    function woodUpgrade(){
        if(woodCounter > 10 || woodCounter == 10)
        {
            pickAxe.name = "rock";
            pickAxe.image = "../images/wood.png"
            woodCounter = 0;
        }
    }
    function rockUpgrade(){
        console.log(prop);
    }


    return (
        <>
          <h1>Game Testing</h1>
          
          <img src={Wood} alt="photo of wood" className = "materialimg"/>
          <button onClick={woodIncrement}>Wood</button>
          <br></br><br></br>
          <img src={Rock} alt="photo of rock" className = "materialimg"/>
          <button onClick={rockIncrement}>Rock</button>
          <br></br><br></br>
          <img src={Metal} alt="photo of metal" className = "materialimg"/>
          <button onClick={metalIncrement}>Metal</button>
          <br></br><br></br>
          <button onClick={woodUpgrade}>Upgrade to Rock?</button>
          <button onClick={rockUpgrade}>Upgrade to metal?</button>

          <img src={Rock} alt="Upgradable" className = "materialimg"/>






        </>
      )
}