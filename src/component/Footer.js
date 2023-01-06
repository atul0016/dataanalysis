import React,{useState} from 'react';
import logo from './logo.png'

export default function Footer() {
    const handlechange=(event)=>{
        settext(event.target.value);
    }
    const [text, settext]=useState("");
    return (
        <> <hr />
            <div className="footer" style={{
                color: 'gray'
            }}>
                <div className="f1">
                    <a className="text-light" style={{
                        display: 'flex', textDecoration: 'none', alignItems: 'center'
                    }} href="/"><img style={{ height: '32px' }} src={logo} alt="" /><strong><h2>DATON</h2></strong></a>
                    <div><h6>123-456-7890</h6>
                        <h6>Info@mysite.com</h6>
                        <h6>500 Terry Francois St</h6>
                        <h6>San Francisco, CA 94158</h6>
                    </div></div>
                <div className="f2" >
                    <h6>Solution</h6>
                    <h6>Vision</h6>
                    <h6>Program</h6>
                    <h6>Blog</h6>
                    <button >Get Started</button>
                </div>
                <div className="f3">
                    <h6>Subscribe to Our Newsletter</h6>
                    <p>Email*</p>
                    <input className='textwritten' type="text" value={text} onChange={handlechange}  />
                    <button onClick={()=>{settext("")}}>Submit</button>
                </div>
                <div className="f4">
                   <h6>Follow US On</h6>
                   <p>© 2035 by DATON <br /> Powered and <br /> secured by daton co.</p>
                </div>
            </div>
        </>
    )
}