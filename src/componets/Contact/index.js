import React from 'react';

function Contact() {
    return(
        <>
        <div className='text-center'>
            <h3 className='my-3'>Contact</h3>
            <p>Please use the following links to reach out!</p>
        </div>
        <div className='flex-row justify-content-center text-center'>
            <a href='https://www.linkedin.com/in/matthew-eayres-7bbab61b3/' target="_blank">
            <div className='col-8 p-4 text-center mx-auto border-bottom'>
                
                <i className="fa-brands fa-linkedin fa-2xl"></i>
                <h4 className=''>Linkedin</h4>
                
            </div>
            </a>
            <a href='https://github.com/immemx' target="_blank">
            <div className='col-8 p-4 text-center mx-auto border-bottom'>
                <i className="fa-brands fa-github-square fa-2xl"></i>
                <h4 className=''>Github</h4>
            </div>
            </a>
            <a href='mailto:eayresm4@gmail.com' target="_blank">
            <div className='col-8 p-4 text-center mx-auto border-bottom'>
                <i className="fa-solid fa-at fa-2xl"></i>
                <h4 className=''>Email</h4>
            </div>
            </a>
        </div>
        </>
    )
}
export default Contact;