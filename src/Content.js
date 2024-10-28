import React from 'react'

export const Content = () => {
    function intial() {
        const names = ["joy", "peace", "freedom"]
        const int = Math.floor(Math.random() * 3)
        return names[int]
    }
    const handleClick = (name) =>{
        console.log(`Hello boys ${name}`)
    }
    return (
        <main>
            <p className='App'>Content {intial()}</p>
            <button className='App,buttoncolor' onClick={() => handleClick("Yuvan")}>subscribe</button>
        </main>
  )
}
