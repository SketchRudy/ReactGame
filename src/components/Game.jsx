// At least one number
// At least one array
// at least one object (current upgrade with name, cost, etc) (stats button)

export default function Game() {
    let woodCounter = 0;
    let rockCounter = 0;
    let metalCounter = 0;
    let playerName = "beginner"

    let totalCount = woodCounter + rockCounter + metalCounter;
    let resources = {woodCounter,rockCounter,metalCounter}

    const player = {name:playerName, total:totalCount};


    function Materials() {
        
    }

    function increment(){
        let [woodCounting, setWood] = React.useState("Yes");

    }

    return (
        <>
          <h1>Game Testing</h1>
          
          <button onClick={increment}>Wood</button>
          <br></br><br></br>
          <button>Rock</button>
          <br></br><br></br>
          <button>Metal</button>
          <br></br><br></br>


        </>
      )
}