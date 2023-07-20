import React, {useState} from 'react'

export default function TextForm(props) {
     const handleUpCase = ()=>{
          let newText = text.toUpperCase();
          setText(newText);
          props.showAlert("Converted into UpperCase", "success")
     }
     const handleLoCase = ()=>{
          let newText = text.toLowerCase();
          setText(newText);
          props.showAlert("Converted into LowerCase", "success")
     }
     const handleClearCase = ()=>{
          let newText = ('');
          setText(newText);
          props.showAlert("Text is cleared", "success")
     }
     const handleCopyText = ()=>{
          navigator.clipboard.writeText(text);
          props.showAlert("Text is copid", "success")
     }
     const handleExtraSpace = ()=>{
          let newText = text.split(/[ ]+/)
          setText(newText.join(" "));
          props.showAlert("Extra space is removed", "success")
     }
     const handleOnChange = (event)=>{     
          setText(event.target.value);
     }
     const [text, setText] = useState("");
     return (
          <>
     <div style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
          <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'rgb(1 1 34)' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} id="textArea" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2 my-2" disabled = {text.length===0} onClick={handleUpCase}>Convert to upperCase</button>
     <button className="btn btn-primary mx-2 my-2" disabled = {text.length===0} onClick={handleLoCase}>Convert to lowerCase</button>
     <button className="btn btn-primary mx-2 my-2" disabled = {text.length===0} onClick={handleClearCase}>Clear text</button>
     <button className="btn btn-primary mx-2 my-2" disabled = {text.length===0} onClick={handleCopyText}>Copy text</button>
     <button className="btn btn-primary mx-2 my-2" disabled = {text.length===0} onClick={handleExtraSpace}>Remove Extra Space</button>
     </div>

     <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
          <h2>Your text Summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.0032 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read.</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter text on the textBox to preview here."}</p>
     </div>
     </>
     )
}
