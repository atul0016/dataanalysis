import React from 'react'
import Footerpart2 from '../parts/Footerpart2'
import Hpagepart2 from '../parts/Hpagepart2'
import Hpagestart from '../parts/hpagestart'
import Footer from './Footer'
export default function Hpage(props){
    return(<>
    <div className="Hpagemain">
    <Hpagestart/>
    <Hpagepart2/>
    <Footerpart2/>
    <Footer/>
    
    </div>

    </>)
}