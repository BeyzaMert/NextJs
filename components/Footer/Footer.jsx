import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import classes from './footer.module.css'
import Link from 'next/link'
const NAV__LINK=[
  { path:'/',
   display:'About Us'
  },
  { path:'#ourinformation',
  display:'Our Information'
  },
  { path:'#myaccount',
 display:'My Account'
  },
  { path:'#connect',
 display:'Connect'
  },
  
 ]
 
const Footer = () => {
  const date= new Date()
  const year=date.getFullYear()
  return <footer>
    <Container>
      <Row>
        {/* ====footer top=====*/}
        <Col lg='6'> </Col>
        <div className={`${classes.nav__menu}`}>
            {
              NAV__LINK.map((item,index)=>(
                  <Link href={item.path} key={index}>{item.display}
                  </Link>
              ))
            }
          
          </div>
         
        {/* <Col lg='6'>
          <div className={`${classes.footer__creator}`}>
              created by bezo
          </div>
           </Col> */}
            {/* ====footer bottom=====*/}
           <Col lg='12'>
            <div className={`${classes.footer__copyright}`}>
            <p>&copy; Copyright {year}-Developed by Beyza Nur Mert.All right reserved.{" "}</p>
            </div>
           </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
