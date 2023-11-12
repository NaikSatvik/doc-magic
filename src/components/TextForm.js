import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }

    const handleOnClear = (event) => {
        setText('');
        props.showAlert("Textbox cleared", "success");
    }

    const handleExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(" "))
    }

    const [text, setText] = useState('');
    // setText("Enter your text here...");  // Correct way to change the state
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#232D3F':'white', color: props.mode==='dark'?'white':'black'} } id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} disabled={text.length===0}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} disabled={text.length===0}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-2" onClick={handleOnClear} disabled={text.length===0}>Clear Textbox</button>
        </div>

        <div className="container my-3">
            <h2>Preview</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#232D3F':'white', color: props.mode==='dark'?'white':'black'} } id="myBox" rows="6" readOnly></textarea>
            </div>
        </div>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.replace(/\s+/g, '').length} characters, {text.trim() === '' ? 0 : text.match(/\S+/g).length} words</p>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length * 0.008} minutes read</p>
        </div>
        </>
    )
}
