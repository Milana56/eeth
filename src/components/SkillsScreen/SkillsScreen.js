import React from 'react';
import SkillCard from './SkillCard';

const SkillsScreen =()=>{

    return(
        <div className="skills__main">

            <div className="skills__content">
                <div className="header-screen">
                    <h2>SKILLS</h2>
                    <hr/>
                </div>
                <div className="columns is-centered">
                    
                    <SkillCard category={'languages'} />

                    <SkillCard category={'frameworks/libraries'} />

                </div>

            </div>

        </div>
    );
}

export default SkillsScreen;