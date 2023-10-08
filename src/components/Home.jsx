import React from 'react'
import vg from "../assets/2.png"

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
    </>
  )
}

export default Home