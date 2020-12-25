import React from 'react'

function Main({ heading, details, quotes }) {
 return (
  <main className="content">
   <div className="container">
    <h1 className="content__heading">{heading}</h1>
    <p className="content__details">
     {details}
    </p>
    <img className="content__image" src={quotes} alt="off-canvas" />
   </div>
  </main>
 )
}

export default Main
