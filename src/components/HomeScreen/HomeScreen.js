import React from 'react';

const HomeScreen =()=>{
    return(
        <div className="home__main">
            <div className="header-screen">
                <h2>HOME</h2>
                <hr/>
            </div>
            <div className="home__header columns is-centered mt-10">

                <div className="card column is-full-mobile is-two-thirds-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd animate__animated animate__fadeIn">
                    
                    <div className="card-header">
                        <h4 className="card-header-title">EDUCATION</h4>
                    </div>

                    <section className="card-content">
                        <div className="content">
                            <div>
                                <h5>BACHELOR DEGREE</h5>
                                <p>COMPUTER ENGINEERING<br/>
                                UTEG OLIMPICA / 2016 - 2020 / FINISHED
                                </p>
                            </div>
                            <br/>
                            <div>
                                <h5>CERTIFICATES</h5>

                                <h6>PROYECTOS EMPRENDEDORES / 228hrs</h6>
                                <p>Guadalajara, Jalisco, Mexíco, a 09 de junio del 2016</p>
                                
                                <h6>PROGRAMACION WEB / 228hrs</h6>
                                <p>Guadalajara, Jalisco, Mexíco, a 09 de junio del 2016</p>

                                <h6>REDES DE COMPUTADORAS (BASICO) / 20hrs</h6>
                                <p>Guadalajara, Jalisco, Mexíco, a 01 de noviembre del 2018</p>

                                <h6>PROULEX ENGLISH / 480hrs</h6>
                                <p>Guadalajara, Jalisco, Mexíco, a 15 de diciembre del 2020</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="card column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd animate__animated animate__fadeIn">
                    
                    <div className="card-header">
                        <h4 className="card-header-title">OBJECTIVES</h4>
                    </div>

                    <section className="card-content">
                        <div className="content">
                            <ul>
                                <li>#.Get more experience as Web Developer</li>
                                <li>#.Work with teams to complete many tasks/projects </li>
                                <li>#.Perfect english</li>
                                <li>#.Learn new technologies</li>
                                <li>#.Optimize code blocks / apply good practices on my projects</li>
                                <li>#.Learn more design to have new/great techniques</li>
                                <li>#.Up-to-date every day</li>
                                <li>#.Be more quick designing and programming</li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>

            <div className="home__content columns mt-10 ">

                <div className="card column is-four-fifths mt-10 animate__animated animate__fadeInUp">

                    <div className="card-header">
                       <h4 className="card-header-title">Hello World... I am Edgar</h4> 
                    </div>
                    
                    <section className="card-content">
                        <div className="content">
                            <p>I studied computer engineering. I focus on my skills and experiences that i realize as web programmer. <br/>
                            I have been working many projects as freelancer, helping family and friends about how to solve their problems using my skills as developer, also i have
                            been working many tasks and projects in my university. I have been creating and developing as front-end and back-end, programming, designing styles and creating database structure, pseudocode, documentations and handbooks.<br/>
                            I work not only in the web, also create software in desktop, mobile, electronics and Networks.
                            </p>
                        </div>       
                    </section>

                    <footer className="card-footer">
                        <p>Thanks for visit my web site!.</p>
                    </footer>

                </div>

            </div>

        </div>


    );
}

export default HomeScreen;