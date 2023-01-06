import React from 'react'
import fimg from '../data/fstimg.png';
import sdimg from '../data/sdimg.png';
import tdimg from '../data/tdimg.png';
import fhimg from '../data/fhimg.png';
export default function Servb2() {
    return (
        <>
            <div className="mainsb">
                <div className="sbb1">
                    <img src={fimg} alt="" />
                    <div><h6>Cloud Analytics Modernization</h6>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p></div>
                </div>
                <div className="sbb2">
                    <img src={sdimg} alt="" />
                    <div><h6>Cloud Analytics Modernization</h6>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p></div>
                </div>
                <div className="sbb3">
                    <img src={tdimg} alt="" />
                    <div><h6>Versatility in Application</h6>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p></div>
                </div>
                <div className="sbb4">
                    <img src={fhimg} alt="" />
                    <div><h6>Full Customer Experience Service</h6>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p></div>
                </div>
            </div>
        </>
    )
}