import React, {useState} from 'react'
let page=0;
let arr1=[""];

let arr=[""];
export default function Searchtoolbax(){
    const[text1,settext1]=useState("");
    const handleonchange1=(event)=>{
        settext1(event.target.value);
    }
    const[text2,settext2]=useState("");
    const handleonchange2=(event)=>{
        settext2(event.target.value);
    }
    const[text3,settext3]=useState("");
    const handleonchange3=(event)=>{
        settext3(event.target.value);
    }
    const[text4,settext4]=useState("");
    const handleonchange4=(event)=>{
        settext4(event.target.value);
    }
    const [res, setres]=useState("");
    const [textt1, settextt1]=useState("");
    const [textt2, settextt2]=useState("");
    const [textt3, settextt3]=useState("");
    const [textt4, settextt4]=useState("");
    const submitt =()=>{
        settextt1(text1);
        settextt2(text2);
        settextt3(text3);
        settextt4(text4);
        page=page+1;
        arr1.push(<strong>#{page}. </strong>,<strong>NAME= </strong> ,text1," ",<strong>E-mail= </strong>,text2," ",<strong>Phone= </strong>,text3," ",<strong>Age= </strong>,text4,". ");
        settext1("");settext2("");settext3("");settext4("");
        arr.push(arr1);
        arr1=[""];
        setres("Your response submitted sucessfully");
    }
    const [arry, setarry]=useState([""]);
    const shw=()=>{
        setarry(arr);
    }
    return(
    <>
 <div className="serachbox">
    <p>Name</p>
    <input type="text" value={text1} onChange={handleonchange1}/>
    <p>Email</p>
    <input type="Email" value={text2} onChange={handleonchange2}/>
    <p>Phone</p>
    <input type="number" value={text3} onChange={handleonchange3}/>
    <p>Age</p>
    <input type="number" value={text4} onChange={handleonchange4}/>
    <input type="submit" onClick={submitt} value="SUBMIT" />
    <button id='butt' onClick={shw}>SHOW ALL</button>
    <p>{res}</p>
    <div><p>{textt1}</p><p>{textt2}</p><p>{textt3}</p><p>{textt4}</p></div>
    <p>{arry}</p>
 </div>

    </>
    )
    
}