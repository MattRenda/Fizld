import React from 'react';

const Intro = ({header,description,img})=>{
    return(
        <div className='container'>           
            <div>
                <h1 style={{fontSize:'400%'}} className="display-5 fw-bold lh-1 mb-3">{header}</h1>
                <p className="lead">{description}</p>
            </div>
                {img? <img src={img} className="d-block mx-lg-auto img-fluid" alt="img" width="500" height="500"/>: ''}
        </div>
    )
}
export default Intro;