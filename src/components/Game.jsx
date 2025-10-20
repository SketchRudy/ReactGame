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

    const pickAxe = {name:mats, total:totalCount};


    function Materials(prop) {
        setMaterial(prop + 1)
        console.log(prop)
    }

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
    


    
    function increment(prop){
        console.log(prop);
    }


    return (
        <>
          <h1>Game Testing</h1>
          
          <img src={Wood} alt="photo of wood" className = "materialimg"/>
          <button onClick={() => woodIncrement}>Wood</button>
          <br></br><br></br>
          <img src={Rock} alt="photo of rock" className = "materialimg"/>
          <button onClick={() => Materials(rockCounter)}>Rock</button>
          <br></br><br></br>
          <img src={Metal} alt="photo of metal" className = "materialimg"/>
          <button onClick={() => Materials(metalCounter)}>Metal</button>
          <br></br><br></br>
          {/*<button onClick={increment}>Upgrade to Rock?</button>
          <button onClick={increment}>Upgrade to metal?</button>*/}

          <img src={Rock} alt="Upgradable" className = "materialimg"/>






        </>
      )
}