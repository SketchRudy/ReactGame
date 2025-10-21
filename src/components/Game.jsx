// At least one number
// At least one array
// at least one object (current upgrade with name, cost, etc) (stats button)
import React from "react";
import Wood from "../images/wood.png"
import Rock from "../images/rock.png"
import Metal from "../images/metal.png"

export default function Game() { 
    const [woodCounter, setWoodCounter] = React.useState(0);
    const [rockCounter, setRockCounter] = React.useState(0);
    const [metalCounter, setMetalCounter] = React.useState(0);  
    const [upgrades, setUpgrades] = React.useState([
    { id: 'rock',  name: 'Rock Pickaxe',  cost: { wood: 10 },  bought: false },
    { id: 'metal', name: 'Metal Pickaxe', cost: { rock: 10 },  bought: false }
    ]);

    const totalCount = woodCounter + rockCounter + metalCounter;

    const [pickAxe, setPickaxe] = React.useState({
        name: "wood",
        // total: totalCount, 
        image: Wood,
        // items: [woodCounter, rockCounter, metalCounter]
    }) 

    function woodIncrement(){     //incrementing wood and keeping track of the old 
        setWoodCounter(prev => prev + 1);  
        console.log("Wood Counter " + woodCounter);
        console.log(pickAxe.name)
    }

    function rockIncrement(){     //incrementing rock and keeping track of the old 
        setRockCounter(prev => prev + 1);  
        console.log(pickAxe.name)      
        console.log("Rock Counter " + rockCounter);
    }
    function metalIncrement(){     //incrementing metal and keeping track of the old 
        setMetalCounter(prev => prev + 1);  
        console.log(pickAxe.name)      
        console.log("metal counter " + metalCounter);
    }
    


    //if the player has enough wood change the name and image of the "rock pickaxe"
    function woodUpgrade(){     
        const rockU = upgrades.find(u => u.id === 'rock') || { cost: { wood: 10 } };
        if(canAfford(rockU.cost))
        {
            setPickaxe(prev => ({ ...prev, name: "rock", image: Rock }))
            console.log(pickAxe.name);
            setWoodCounter(prev => prev - (rockU.cost.wood ?? 10));
            markBought('rock');
        }
        else console.log("not enough");
    }

    //if the player has enough rock change the name and image of the "metal pickaxe"
    function rockUpgrade(){
        const metalU = upgrades.find(u => u.id === 'metal') || { cost: { rock: 10 } };
        if(canAfford(metalU.cost))
            {
                setPickaxe(prev => ({ ...prev, name: "metal", image: Metal }))
                console.log(pickAxe.name);
                setRockCounter(prev => prev - (metalU.cost.rock ?? 10));
                markBought('metal');
            }
            else console.log("not enough");
    }

    function canAfford(cost) {
      return (!cost.wood  || woodCounter  >= cost.wood) &&
              (!cost.rock  || rockCounter  >= cost.rock) &&
              (!cost.metal || metalCounter >= cost.metal);
      }

    function markBought(id) {
      setUpgrades(prev => prev.map(u => u.id === id ? { ...u, bought: true } : u));
    }

    const rockU  = upgrades.find(u => u.id === 'rock')  || { cost: { wood: 10 },  bought: false };
    const metalU = upgrades.find(u => u.id === 'metal') || { cost: { rock: 10 }, bought: false };

    const canBuyRock  = canAfford(rockU.cost);
    const canBuyMetal = canAfford(metalU.cost);

    const rockBought  = !!rockU.bought;
    const metalBought = !!metalU.bought;

    <ul>
      {upgrades.map(u => (
        <li key={u.id}>{u.name} — {u.bought ? 'Owned' : 'Locked'}</li>
      ))}
    </ul>


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
            {!rockBought && (
            <button onClick={woodUpgrade} className="upgradeBtn" disabled = {!canBuyRock}>
              <h4>Upgrade to Rock? ({woodCounter}/{rockU?.cost?.wood ?? 10})</h4>
              </button>
            )}
            {rockBought && !metalBought && (
            <button onClick={rockUpgrade} className="upgradeBtn" disabled={!canBuyMetal}>
              <h4>Upgrade to Metal? ({rockCounter}/{metalU?.cost?.rock ?? 10})</h4>
            </button>
            )}
        </div>
      
          <img src={pickAxe.image} alt="Current Pickaxe" className="materialimg" />
          <p>{"Total Count: " + totalCount}</p>
        </div>
        
      );
      
}