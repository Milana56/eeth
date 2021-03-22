import React from 'react';

const ProjectCard =({name,image})=>{

    return(
        <div className="card animate__animated animate__pulse">
            <figure className="card-content image">
                <img src={image} alt={name} />
                <h4>{name}</h4>
            </figure>
        </div>
    );
}

export default ProjectCard;