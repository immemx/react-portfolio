import React from 'react';
import workerBee from '../../assets/img/Worker-bee.png';

function Work() {
    return (
        <>
            <div className='text-center'>
            <h3 className='my-3'> My Projects </h3>
            <div className='flex-row d-flex justify-content-center my-5'>
                <div className='col-3 border text-center p-0'>
                    <a href='https://github.com/immemx/Worker-Bee' target="_blank">
                    <img src={workerBee} className='img-fluid'></img>
                        <h4 className='py-2'>Worker Bee</h4>
                        <div className='py-2'>
                        <i className="fa-brands fa-github fa-2xl"></i>
                        </div>
                    </a>
                </div>
                <div className='col-3 border text-center p-0'>
                    <a href='https://github.com/immemx/Worker-Bee' target="_blank">
                    <img src={workerBee} className='img-fluid'></img>
                        <h4 className='py-2'>Worker Bee</h4>
                        <div className='py-2'>
                        <i className="fa-brands fa-github fa-2xl"></i>
                        </div>
                    </a>
                </div>
                <div className='col-3 border text-center p-0'>
                    <a href='https://github.com/immemx/Worker-Bee' target="_blank">
                    <img src={workerBee} className='img-fluid'></img>
                        <h4 className='py-2'>Worker Bee</h4>
                        <div className='py-2'>
                        <i className="fa-brands fa-github fa-2xl"></i>
                        </div>
                    </a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Work;