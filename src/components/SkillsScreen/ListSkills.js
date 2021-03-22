import React from 'react';

const ListSkills =({skill,level})=>{

    return(
        <li>
            <h4>{skill}</h4>
            {
                (level===25)&&
                <progress className="progress is-danger"  value={level} max="100"></progress>
            }
            {
                (level===50)&&
                <progress className="progress is-success"  value={level} max="100"></progress>
            }
            {
                (level===75)&&
                <progress className="progress is-info"  value={level} max="100"></progress>
            }
            {
                (level===100)&&
                <progress className="progress is-link"  value={level} max="100"></progress>
            }
        </li>
    );
}

export default ListSkills;