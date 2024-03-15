import React , {useState} from 'react'

export default function Textfi(props) {

      const [textColor, settextColor] = useState('black')
  const handleu =()=> {
        const newText =text.toUpperCase();
        setText(newText);
        props.showalert("converted to uper" , "success")
      }
      const handlerem =()=> {
        const newText =text.replace(text, "");
        setText(newText);
      }
      
      const handlel =()=> {
        const newText =text.toLowerCase();
        setText(newText);
        props.showalert("converted to lover" , "success")
      }
      const handlecol    =()=> {
     

        
        const newText = 'red';
        
        settextColor(newText);
      }
      
      const handleonchange =(event)=> {
        setText(event.target.value)
        
      }
 const [text , setText] = useState('enter text here');

 
  return (
    <div>
      <h1>{props.heading}</h1>
      <textarea style={{ color: textColor }} className='form-control' id="mybox" value={text} onChange={handleonchange} cols="70" rows="15"></textarea>
      <button className='btn btn-primary me-2' onClick={handlel}>convert to lover case</button>     
      <button className='btn btn-primary ms-2' onClick={handleu}>convert to upper case</button>
      <button className='btn btn-primary ms-2' onClick={handlerem}>clear</button>
      <button className='btn btn-primary ms-2' onClick={handlecol}>colr bdl lo</button>
    <div className="container">
              
              <p>words are {text.split(" ").length} and charc are {text.length} </p>

              <h1>{text}</h1>

    </div>
    
    </div>
  )
}
