import React from 'react'
import fimg from '../data/fstimg.png';
import sdimg from '../data/sdimg.png';
import tdimg from '../data/tdimg.png';
export default function Prob2() {
    return (
        <>
            <div className="prb">
                <div className="card1" >
                    <img src={fimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p >$80.00</p>
                        <a href="/" className="btn btn-primary">Join</a>
                    </div>
                </div>
                <div className="card1">
                    <img src={sdimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p >$120.00</p>
                        <a href="/" className="btn btn-primary">Join</a>
                    </div>
                </div>
                <div className="card1">
                    <img src={tdimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p >$150.00</p>
                        <a href="/" className="btn btn-primary">Join</a>
                    </div>
                </div>
            </div>
        </>
    )
}