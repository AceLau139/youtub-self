import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort = (type) =>{
    setSort(type)
    setOpen(false)
  }
  return (
  <div className="gigs">
    <div className="container">
      <span className="breadcrumbs">FIVERR GRAPHICS & DESIGN</span>
      <h1>AI Artists</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed voluptas, voluptatibus quidem explicabo doloribus totam fugiat dignissimos amet quaerat, mollitia pariatur nam aliquid ratione fugit hic. Minima, rerum nisi!
      </p>
      <div className="menu">
      <div className="left">
        <span>Budged</span>
        <input type="text" placeholder="min" />
        <input type="text" placeholder="max" />
        <button>Apply</button>
      </div>
      <div className="right">
        <span className="sortBy">SortBy</span>
        <span className="sortBy">{sort==="sales" ? "Best Selling" : "Newest"}</span>
        <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
        {open && (
        <div className="rightMenu">
          {sort === "sales" ? ( 
          <span onClick={()=>reSort("createAt")}>Newest</span>
          ) : (
          <span onClick={()=>reSort("sales")}>Best Selling</span>
          )}
        </div>
        )}
        </div>
        </div>
        <div className="cards">
          {gigs.map(gig => (
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
    </div>
  </div>  
  )
}

export default Gigs;
