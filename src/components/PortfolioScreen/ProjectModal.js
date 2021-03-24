import React from 'react';

const ProjectModal =({func})=>{
    return(
        <div className="modal is-centered" id="projectModal">
            <div className="modal-background"></div>
            <div className="modal-content is-centered animate__animated animate__fadeIn">
                <section>
                    <iframe id="source" src="." frameBorder="0" allowFullScreen />
                    <div className="portfolio__modal-content">
                        <h3 id="portfolio__modal-title">Project's title</h3>
                        <p>Project's Description</p>
                    </div>                    
                </section>
                
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={()=>func("close")}></button>
        </div>
    );
}

export default ProjectModal;