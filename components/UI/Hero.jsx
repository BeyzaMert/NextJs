import React from 'react'
import SectionSubtitle from './SectionSubtitle'
import SmallSubtitle from './SmallSubtitle'
import {Container,Row,Col} from 'reactstrap'
import Image from "next/image"
import Link from "next/link"
import heroImg from '../../public/images/topimage.png'
import classes from '../../styles/hero.module.css'
const Hero = () => {
  return <section className={`${classes.hero}`}>
    <Container>
        <Row>
            { /*=====hero content ======*/}
            <Col lg='6' md='6'>
                <div className={`${classes.hero__content}`}>
                    <SectionSubtitle subtitle='Creativity starts with viewing the whole world differently'/>
                    <SmallSubtitle subtitle='A service agency with customer satisfaction'/>
            <Row lg='6'>
            <div className='mt-5'>
                    {/* <button className='primary_btn' > <Link href='#'>Get Started </Link></button> */}
                    </div>
            </Row>
                </div>
            </Col>
            { /*=====hero img ======*/}
            <Col lg='11' md='6'>
                <div className={`${classes.hero__img} text-end`}>
                    <Image alt="hero-image" src={heroImg} width='1084' height='563'/>
                    
                    <span></span>
                </div>
            </Col>

        </Row>
    </Container>

  </section>
}

export default Hero
