import React from 'react';

import getSkillsByCategory from '../../selectors/getSkillsByCategory';
import ListSkills from './ListSkills';

const SkillCard =({category})=>{

    const skills = getSkillsByCategory(category);
  
    return(
        <div className="column card is-full-mobile is-full-tablet is-half-desktop is-half-widescreen is-half-fullhd animate__animated animate__backInUp">
            <div className="card-header">
                <h2>{category.toUpperCase()}</h2>
            </div>

            <div className="card-content">
                <ul>
                {
                    skills.map(skill => (
                        <ListSkills key={skill.id}  {...skill} />
                    ))
                }
                </ul>

            </div>
        </div>
    );
}

export default SkillCard;