import React from 'react'
import data from './data'
import Card from './components/Card'
import Nav from './components/Nav'

export default function App() {
    const cards = data.map((item) => {
        return <Card 
            key={item.imdbID}
            item={item}
        />
    })
    
    
    return (
        <div className="main-container">
            <Nav />
            {cards}
        </div>
    )
}