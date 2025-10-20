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
    let totalCount = woodCounter + rockCounter + metalCounter;

    const [pickAxe, setPickaxe] = React.useState({
        name: "wood",
        total: totalCount,
        image: Wood
    }) 


    let items = [woodCounter, rockCounter, metalCounter];
    let resources = {woodCounter,rockCounter,metalCounter}





    function woodIncrement(){     //if user has enough wood upgrade the wood pickaxe to rock
        setWoodCounter(prev => prev + 1);  
        console.log("Wood Counter " + woodCounter);
        console.log(pickAxe.name)
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
            setPickaxe({
                name: "rock",
                image: Rock
            })
            console.log(pickAxe.name);
            setWoodCounter(prev => prev - 10);
        }
        else console.log("not enough");
    }

    function rockUpgrade(){
        if(rockCounter > 10 || rockCounter == 10)
            {
                mats = "metal";
                pickAxe.image = Metal
                console.log(pickAxe.name);
                setWoodCounter(prev => prev - 10);
            }
            else console.log("not enough");
    }


    return (
        <div className="game-container">
      
          <div className="materials">
            <button onClick={woodIncrement}>
              <img src={Wood} alt="wood" className="materialimg" />
            </button>
            <button onClick={rockIncrement}>
              <img src={Rock} alt="rock" className="materialimg" />
            </button>
            <button onClick={metalIncrement}>
              <img src={Metal} alt="metal" className="materialimg" />
            </button>
          </div>
          <div className="materials">
            <p>{"Wood: " + woodCounter}</p>
            <p>{"Rock: " + rockCounter}</p>
            <p>{"Metal: " + metalCounter}</p>
          </div>


      
          <div className="upgrades">
            <button onClick={woodUpgrade} className="upgradeBtn"><h4>Upgrade to Rock?</h4></button>
            <button onClick={rockUpgrade} className="upgradeBtn"><h4>Upgrade to Metal?</h4></button>
          </div>
      
          <img src={pickAxe.image} alt="Current Pickaxe" className="materialimg" />
        </div>
      );
      
}