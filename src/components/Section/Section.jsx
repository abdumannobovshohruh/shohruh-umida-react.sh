import React from 'react'
import './Section.css'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import logo from './img/QPICK.png'
import map1 from './img/Rectangle 6.png'
export default function Section() {
    return (
        <div>
            <header>
                <Nav>
                    <Container>
                        <Row className='justify-content-between mt-2'>
                            <Col xs={12} xl={2}>
                                <div className='photoLogo'>
                                    <img src={logo} alt="" />
                                </div>
                            </Col>
                            <Col xs={12}  xl={2}>
                                <div className="model-phone">
                                    <i class="fa-sharp fa-solid fa-mobile zero"></i>
                                    <select className='tele-option'>
                                        <option>Выбрать модель телефона</option>
                                        <option>Выбрать модель телефона</option>
                                    </select>
                                </div>
                            </Col>
                            <Col xs={12} xl={2}>
                                <div className="two-heart">
                                    <i class="fa-sharp fa-regular fa-heart zero"></i>
                                    <i class="fa-solid fa-cart-shopping zero"></i>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Nav>
               
            </header>
            <section>
                    <Container>
                        <Row>
                            <Col xl={3}>
                                <p className="zakaz">Оформление заказа</p>
                            </Col>
                        </Row>
                        <Row className='justify-content-between'>
                            <Col xl={4}>
                                <div className="card-1">
                                    <div className="card-2">
                                        <p className="kuryer">Доставка курьером</p>
                                        <p className="number"> 499 ₸</p>
                                    </div>
                                    <div className="card-3">
                                        <img src={map1} alt="" className="map" />
                                    </div>
                                    <div className="card-4">
                                        <div className="adresCard">
                                            <i class="fa-solid fa-location-dot gpsIcon"></i>
                                            <p className="adres-dostavka">Адрес доставки</p>
                                        </div>
                                        <select className="city-select">
                                            <option>Город </option>
                                            <option>Дом</option>
                                        </select>
                                        <form className='free'>
                                            <input type="text" placeholder='Улица / Район' className='house-input'/>
                                            <i class="fa-solid fa-pencil qalam1"></i>
                                            <div  className="two-house">
                                                <input type="text"  placeholder='Дом' className='input-home'/>
                                                <i class="fa-solid fa-pencil qalam1 d-none d-sm-block"></i>
                                                <input type="text"  placeholder='Подъезд' className='input-home'/>
                                                <i class="fa-solid fa-pencil qalam1  d-none d-sm-block"></i>
                                                <input type="text"  placeholder='Квартира' className='input-home2'/>
                                                <i class="fa-solid fa-pencil qalam1  d-none  d-sm-block"></i>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                            {/* <Col xs={5}>
     <div className='card'>
     <p className='zakaz1'>Ваш заказ</p>
        <div className='key'>
            <p className='number1'>1х</p>
            <p className='nauwnik'>Наушники Apple BYZ S852I</p>
            <p className='sale'>₸ 2 927</p>
        </div>
        <div className='key'>
            <p className='nauwnik max'>Наушники Apple BYZ S852I</p>
            <p className='sale'>₸ 2 927</p>
        </div>
        <div className='key'>
            <p className='nauwnik max'>Наушники Apple BYZ S852I</p>
            <p className='sale'>₸ 2 927</p>
        </div>
     </div>
     <div className='card1-1'>
     <p className='zakaz1'>Способ оплаты</p>
     <div className='key'>
     <i class="fa-brands fa-cc-visa"></i>
     <p className='kaspi'>Счет на kaspi.kz</p>
     <select>
      <option>
      </option>
      <option>
        card
      </option>
     </select>
     </div>
     <div className='key'>
     <i class="fa-solid fa-share"></i>
     <p className='promocod'>Есть промокод?</p>
     <i class="fa-solid fa-arrow-right"></i>
     </div>
     </div>
     <div className='card2-1'>
        <p className='zakaz1'>Номер получателя</p>
        <input type="number" required="+7 ___ ___  " ></input>
     </div>
     <button className="btn">Закончить оформление</button>
     </Col> */}
                        </Row>
                    </Container>
                </section>
            <footer>
                <Container className='main'>
                    <Row>
                        <Col lg={3}>
                            <h1 className='qpick'>QPICK</h1>
                        </Col>      
                        <Col lg={3}>
                            <p className='izbranoe like'>Избранное</p>
                            <p className='izbranoe'>Корзина</p>
                            <p className='izbranoe'>Контакты</p>
                        </Col>   
                        <Col lg={3}>
                        <p className='izbranoe like'>Условия сервиса</p>
                       <div className='key'>
                       <i class="fa-solid fa-globe"></i>
                        <p className='uzb'>Каз</p>
                        <p className='uzb'>Рус</p>
                        <p className='uzb'>Eng</p>
                       </div>
                        </Col>      
                        <Col lg={3}>
                            <div className='mini'>
                            <i class="fa-brands iconk fa-vk fa-2x"></i>
                            <i class="fa-brands iconk fa-instagram fa-2x"></i>
                            <i class="fa-brands iconk fa-telegram fa-2x"></i>
                            <i class="fa-brands iconk fa-whatsapp fa-2x"></i>
                            </div>
                        </Col>   
                          </Row>
                </Container>
            </footer>
        </div>
    )
}
