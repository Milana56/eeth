import React from 'react';

const Header=()=>{
    return(
        <div className="header__main columns centered" style={{backgroundImage:'url(./assets/images/background-programming-edited.png)'}}>

            <div className="column is-full-mobile is-one-third-tablet is-half-dektop is-half-widescreen is-half-fullhd">
                <section>
                    <h2>Edgar Eduardo Torres Hernández</h2>
                    <h4>Full-Stack Developer JR</h4>
                </section>
            </div>

            <div className="column is-hidden-mobile is-two-thirds-quarter-tablet is-half-dektop is-half-widescreen is-half-fullhd">
                <figure className="image"><img src="./assets/images/fox.png" alt="fox" /></figure>
            </div>

        </div>
    );
}

export default Header;