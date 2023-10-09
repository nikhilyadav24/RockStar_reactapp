import React from 'react'
import vg from "../assets/2.png"
import {AiFillGoogleCircle , AiFillAmazonCircle , AiFillYoutube , AiFillInstagram  } from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution For Everything</p>
        </main>
    </div>
    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation.
            Everyone has the right to the protection of the law against such interference or attacks.
            </p>
        </div>
    </div>

    <div className="home3">
      <div>
        <h1>Who we Are?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui sapiente repellendus in fuga. Quo nesciunt optio vel, praesentium qui a eos maiores odio porro, nulla accusamus animi aperiam laudantium!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, blanditiis eum! Sequi harum laudantium iste repellat atque recusandae consectetur. Facilis, veniam obcaecati. In debitis assumenda, nobis reiciendis tempora voluptatibus asperiores!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed obcaecati a non perspiciatis harum necessitatibus laborum maxime, tempora ducimus natus optio deleniti voluptatem exercitationem atque quam fugit quaerat doloremque!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ut totam porro laborum possimus magnam expedita aspernatur sint molestiae vel nesciunt tenetur laudantium deleniti est recusandae sit, incidunt deserunt quis!
        </p>

      </div>
    </div>

    <div className="home4">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{animationDelay:"0.9s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home