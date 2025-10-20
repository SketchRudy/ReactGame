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
        setWoodCounter(prev => prev + 1);  
        console.log(pickAxe.name)      
        console.log("Wood Counter " + woodCounter);
    }

    function rockIncrement(){     //if user has enough wood upgrade the wood pickaxe to rock
        setRockCounter(prev => prev + 1);  
        console.log(pickAxe.name)      
        console.log("Rock Counter " + rockCounter);
    }
    function metalIncrement(){     //if user has enough wood upgrade the wood pickaxe to rock
        setMetalCounter(prev => prev + 1);  
        console.log(pickAxe.name)      
        console.log("metal counter " + metalCounter);
    }
    


    
    function woodUpgrade(){
        if(woodCounter > 10 || woodCounter == 10)
        {
            mats = "rock";
            pickAxe.image = "../images/wood.png"
            console.log(pickAxe.name);
            setWoodCounter(prev => prev - 10);
        }
        else console.log("not enough");
    }

    function rockUpgrade(){
        if(rockCounter > 10 || rockCounter == 10)
            {
                mats = "metal";
                pickAxe.image = "../images/metal.png"
                console.log(pickAxe.name);
                setWoodCounter(prev => prev - 10);
            }
            else console.log("not enough");
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