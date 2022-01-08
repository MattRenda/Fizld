import React from 'react';

const Intro = ({header,description,img})=>{
    return(
        <div className='hero container'>
                    
            <div>
                <h1 class="display-5 fw-bold lh-1 mb-3">{header}</h1>
                <p class="lead">{description}</p>
            </div>
            <div>
                {img? <img src={img} class="d-block mx-lg-auto img-fluid" alt="img" width="800" height="500" loading="lazy"/>: ''}
            </div>
        </div>
    )
}
export default Intro;