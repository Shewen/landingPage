import React from 'react'
import "./Hero.css";
import heroImg from "../../asset/hero-img.png"

const Hero = ({myTheme}) => {
  return (
    <section className='hero' data-theme={myTheme}>
        <div className='container --grid-15'>
            <div className='hero-text'>
                <h1>Bitcoin made Easy with Parsia</h1>
                <p>Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
                </p>
                <div className='--flex-start'>
                    <button className='--btn btn-p'>Learn more</button>
                    <button className='--btn --btn-danger'>Signup</button>

                </div>

            </div>
            <div className='text-center'>
                <img src={heroImg} alt='phone' width={300}/>

            </div>

        </div>

      
    </section>
  )
}

export default Hero
