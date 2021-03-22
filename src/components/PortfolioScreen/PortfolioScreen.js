import React from 'react';
import PortfolioCards from './PortfolioCards';

const PortfolioScreen =()=>{

    return(
        <div className="portfolio___main">
            <div className="portfolio__content">
                <div className="header-screen">
                    <h2>PORTFOLIO</h2>
                    <hr/>
                </div>
                <PortfolioCards />
            </div>
        </div>
    );
}

export default PortfolioScreen;