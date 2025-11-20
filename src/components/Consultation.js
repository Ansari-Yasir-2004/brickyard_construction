import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Manimage from "../assets/images/webp/consulation-img.webp"
import ContentTitle from './ContentTitle'
import ContentPara from './ContentPara'

const Consultation = () => {
  return (
    <section>
        <Container className='bg-cultured'>
            <Row className='align-items-center ps-4 pe-1 position-relative'>
                <Col>
                <ContentTitle>Contact Us Today for a <span className='text-deep-moss-green'>Free Consultation</span> </ContentTitle>
                <ContentPara textColor={"text-eerie-black"}>At Brickyard, we believe that every construction project is an opportunity to create something exceptional.</ContentPara>
                </Col>
                <Col className='position-relative'>
                <img className='position-absolute end-0' src={Manimage} alt="" />

                </Col>
            </Row>


        </Container>
    </section>
  )
}

export default Consultation