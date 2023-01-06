import React from 'react';
import fimg from '../data/fstimg.png';
import sdimg from '../data/sdimg.png';
import tdimg from '../data/tdimg.png';
import fhimg from '../data/fhimg.png';


export default function Hpagepart2() {
    return (
        <>
            <div className="p2main">
                <div className='bcarso text-light'>
                    <h3 style={{color:'#FF7F27'}}>Let Your Data Take Your Business to Higher Grounds</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                </div>
                <div className='carso'>
                    <div className='carso1'>

                        <div className="card bg-dark text-primary" >
                            <img src={fimg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
Cloud Analytics Modernization</h5>
                                <p className="card-text text-muted"  >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                        <div className="card bg-dark text-primary" >
                            <img src={sdimg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Versatility in Application</h5>
                                <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='carso2'>
                        <div className="card bg-dark text-primary">
                            <img src={tdimg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Data Science Acceleration</h5>
                                <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                        <div className="card bg-dark text-primary" >
                            <img src={fhimg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
Full Customer Experience Service</h5>
                                <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}