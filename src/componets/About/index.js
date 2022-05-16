import React from 'react';
import ME from '../../assets/img/ME.png'

function About() {

    return(
        <>
        <div className='text-center'>
        <h3 className='my-3'> Welcome! </h3>
        <img src={ME} className='img-fluid mx-auto d-flex'></img>
        <a href='../assets/Resume-Matthew-Eayres.pdf' download><i class="fa-solid fa-download fa-xl my-5"> Resume</i></a>
        <p className='my-3'> Im a professional web developer with proficiency in the following technologies: </p>
        </div>
        <div className='flex-row d-flex justify-content-center'>
            <div className='col-3 text-center py-3 my-4'>
                <i className="fa-brands fa-react fa-2xl"></i>
                <h4>React</h4>
            </div>
            <div className='col-3 text-center py-3 my-4'>
                <i className="fa-brands fa-js fa-2xl"></i>
                <h4>Javascript</h4>
            </div>
            <div className='col-3 text-center py-3 my-4'>
                <i className="fa-brands fa-html5 fa-2xl"></i>
                <h4>html5</h4>
            </div>
        </div>
        <div className='flex-row d-flex justify-content-center'>
            <div className='col-3 text-center py-3 my-4'>
                <i className="fa-brands fa-node-js fa-2xl"></i>
                <h4>node-js</h4>
            </div>
            <div className='col-3 text-center py-3 my-4'>
                <i className="fa-brands fa-css3 fa-2xl"></i>
                <h4>css3</h4>
            </div>
            <div className='col-3 text-center py-3 my-4'>
                <i className="fa-brands fa-git-alt fa-2xl"></i>
                <h4>git</h4>
            </div>
        </div>
        </>
    )
}

export default About;