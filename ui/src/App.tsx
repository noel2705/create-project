// @ts-ignore

import {use, useActionState, useDebugValue, useEffect, useReducer, useState,} from 'react'
import './App.css'
import { Start } from './Start';

var intervall;

function App() {
    // @ts-ignore
const [mainscreen, setMainscreen] = useState(true)
const [gamemenu, setGamemenu] = useState(false)
const[minemenu, setMinemenu] = useState(false)
const[Cash, setCash] = useState(1000)
const [mine, setMine] = useState("")
const [Coalmineactive, setCoalmineactive] = useState(false)
const [coalincome, setCoalincome] = useState(1)
const [Mineupgrademenu, setMineupgrademenu] = useState(false)
const [minenlvl, setMinenlvl] = useState({
    "Coal" : 0,
    "Iron" : 0,
    "Gold": 0,
    "Andesit": 0
})
const [inventory, setInventory] = useState({
    Coal: 0
})
useEffect(() => {
    if (intervall) {
        clearInterval(intervall)
    }
    intervall = setInterval(() => {

        if (Coalmineactive === true) {
            const newInventory = {...inventory}
            newInventory["Coal"] += coalincome
            setInventory(newInventory)
        }
        
        }, 10000);
}, [Coalmineactive, inventory, coalincome ])



function gamestart(){
    setMainscreen(false)
    setGamemenu(true)
    setCoalmineactive(false)
}

function buycoalmine(){
    if (Cash >= 100 && Coalmineactive != true) {
        setMinemenu(false)
        setCash(Cash - 100)
        setMine("Coal-mine")
        minenlvl["Coal"] = 1
        setMinenlvl(minenlvl)
        setCoalmineactive(true)
    }

}

function Coalupgrade(){

    if (Cash >= 100) {
setCoalincome(coalincome *2)
    }
}

function minebutton(){
    setGamemenu(false)
    setMinemenu(true)
}

function upgradeMenuMine (){    
    setMineupgrademenu(true)
}

    return (
        <>


<div>

{mainscreen && <Start onGameStart={gamestart} />}



{gamemenu == true &&  

<div>

<h1>Was möchtest du machen?</h1>

<a>
    <img src="/img/crl.jpg" alt="" width="100%" height="100%"/>
</a>


<button className='Mine' onClick={minebutton}>Mine</button>

<button className='Werkstatt'>Werkstatt</button>

</div>

} 



{minemenu == true &&  
<div>
<h1 className='mineh1'>Mine:</h1>


<img src="/img/goldmine.png" alt="" className='goldmine' onClick={buycoalmine}/>




</div>

} 
{mine === "Coal-mine" && 

<div className="layout">

    <div className='headline'><h1 className='Coalh1'>Coal Mine</h1></div>
    <div className="content">
        <div className='contentLeft'>
            <p className='Coalminelvl'>Level: {minenlvl.Coal}</p>
            <a className='Coalmineincome'>Coal / Min: {coalincome}</a>
            <h2>Kohle: {inventory.Coal}</h2>
        </div>
        <div className='contentCenter'>

        {Mineupgrademenu === true && <div className='UpgradeMineGUI'>
            <button>bla</button>
            </div>
        }
        </div>
        <div className='contentRight'>
            <button onClick={upgradeMenuMine} className='upgradeMineButton'>UPGRADEN!</button>
        </div>
    </div>
    <img src="/img/Coalmine.png" className='coalmine'/>

</div>

}



</div>
    


    


        </>
    )
    
}
export default App