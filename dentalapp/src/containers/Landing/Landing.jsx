import React from 'react';
import './Landing.css';
import logo from '../../img/logo.jpg';
import sponsors from '../../img/partners.png';
import health from '../../img/health.png';
import safety from '../../img/safety.png';
import science from '../../img/science.png';

class Landing extends React.Component {


    render(){
        return (
            <div id="body">
                <section className="section" id="first">
                    <img src={logo} id="logoLanding" alt="Imagen del logo"/>
                    <article id="Introduction">
                        <h2 className="title" id="firstTitle">Tu bienestar <br></br> es nuestra prioridad</h2>
                        <h3 className="subtitle" id="firstSubtitle">Ponte en manos de nuestros profesionales.
                        <br></br>Y luce tu sonrisa más radiante.</h3>
                        <input type="email" id="emailInputLanding" placeholder="Tu correo electrónico" autoFocus /> 
                        <button type="submit" id="orderButtonLanding">Pide cita</button>
                        <div id="sponsors">Con los últimos avances
                            <img id="sponsorsLogo" src={sponsors} alt="Imágenes de los sponsors"/>
                        </div>
                    </article>
                </section>
                <section className="section" id="second">
                    <div id="rightSecond">
                        <h2 className="title" id="secondTitle">Los mejores profesionales <br></br> para cuidarte como te mereces</h2>
                        <h3 className="subtitle" id="secondSubtitle">Cuando se trata de la salud, es importante ponerse en buenas manos.
                        <br></br>Déjanos cuidar de tu salud dental y la de los tuyos.
                        <br></br>Vuestra tranquilidad es nuestro principal objetivo.</h3>
                        <div id="firstMotive">
                            <img className="icon" id="maskIcon" src={health} alt="Icono de mascarilla"/>
                            <div id="blockContent1">
                                <div id="titleSpanMotive">Con las mejores condiciones sanitarias</div>
                                <div id="subtitleSpanMotive">Nuestros centros se desinfectan entre sesiones todos los días con ozono.</div>
                            </div>
                        </div>
                        <div id="secondMotive">
                            <img className="icon" id="icon2" src={safety} alt="Icono de cruz médica"/>
                            <div id="blockContent2">
                                <div id="titleSpanMotive">Los mejores profesionales para ti</div>
                                <div id="subtitleSpanMotive">Los profesionales con una experiencia más amplia y mejores conocimientos dispuestos a ayudarte.</div>
                            </div>
                        </div>
                        <div id="thirdMotive">
                            <img className="icon" id="icon3" src={science} alt="Icono de ADN"/>
                            <div id="blockContent3">
                                <div id="titleSpanMotive">Con los últimos avances</div>
                                <div id="subtitleSpanMotive">Contamos con la última tecnología en prevención del dolor para la mejora de tus dientes. </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="third">

                </section>
            </div>
        )
    }
}

export default Landing;