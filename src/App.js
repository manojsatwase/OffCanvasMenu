import React from 'react'
import "./index.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import quotes from "./image/quotes.png";
import offcanvas from "./image/off-canvas.png";
function App() {
 return (
  <React.Fragment>
   <Sidebar />
   <Main heading="Learning to Build an Off Canvas Menu" details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quidem
   ducimus maxime aperiam consequatur magni similique, cum officiis dicta
   sint hic amet necessitatibus reprehenderit labore ipsam. Est dolorem
   aliquam ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Recusandae unde facilis quod cumque! Autem, officiis dolore rem at
   voluptatibus enim ea nobis labore soluta! Consectetur veritatis
   molestias ut libero rem?" quotes={quotes} />
   <Main heading="Learning to Build an Off Canvas Menu" details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quidem
   ducimus maxime aperiam consequatur magni similique, cum officiis dicta
   sint hic amet necessitatibus reprehenderit labore ipsam. Est dolorem
   aliquam ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Recusandae unde facilis quod cumque! Autem, officiis dolore rem at
   voluptatibus enim ea nobis labore soluta! Consectetur veritatis
   molestias ut libero rem?" quotes={offcanvas} />
  </React.Fragment>
 )
}

export default App
