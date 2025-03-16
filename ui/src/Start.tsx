import React from 'react'

export const Start = ({onGameStart}) => {

    return <div>

    <h1>Create Project</h1>
    
    <a>
    <img  
        className="Mainscreenfabrik"    
        src="https://cdn.pixabay.com/photo/2013/07/12/14/09/industry-147863_1280.png"     
        width = "400px" 
        height="400px" />
    </a>
    
    <button>Toutorial</button>
    <button onClick={onGameStart}>Spielen</button>
    
    
    
    </div>
}