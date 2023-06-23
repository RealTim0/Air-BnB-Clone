import React from "react"
import Card from "./Card"
import Hero from "./Hero"
import Navbar from "./Navbar"
import data from "./data"

export default () => {

  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})    
  return(
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
    </>
  )
}