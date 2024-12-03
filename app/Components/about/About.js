import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <img src= "/girl.png" alt='' className='about__img'/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
        I am passionate about building a dynamic career in IT, where I can utilize my software development and UX design expertise to contribute to forward-thinking, innovative projects. I am eager to take on challenges that drive creativity and push the boundaries of technology, while continuously growing and enhancing my skills.
        </p>
        <a href='#' className='btn' download={"Pranati's Resume"}>Download Resume</a>
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Development
            </h3>
            <span className='skills__number'>90%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>UI/UX Designing</h3>
            <span className='skills__number'>70%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage ui__design'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>DSA</h3>
            <span className='skills__number'>35%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage DSA'></span>
          </div>
        </div>

      </div>

    </div>
    </div>

    <AboutBox/>

    </section>
  )
}

export default About