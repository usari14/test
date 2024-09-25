import React, { useState } from 'react'



export default function TextForm({ headingTextArea = "Set Heading", mode, showAlert }) {

    const ClearClick = () => {
        // console.log("UpperClick was clicked" + text)
        let clearText = " ";
        setText(clearText);
        showAlert("Text is cleared", "success")
    }

    const upperClick = () => {
        // console.log("UpperClick was clicked" + text)
        let upperText = text.toUpperCase();
        setText(upperText);
        showAlert("Text is UpperCase", "success")
    }

    const lowerClick = () => {
        console.log("UpperClick was clicked" + text)
        let lowerText = text.toLowerCase();
        setText(lowerText);
        showAlert("Text is LowerCase", "success")
    }

    const handleinverseclick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newtext += text[i];
        }
        setText(newtext);
        showAlert("Text is Reversed", "success")
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        showAlert("Text is in speech Mode", "success")
    }

   const handleSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    showAlert("Spaces Removed", "success")
   }

    const changeHandle = (e) => {
        console.log("On Changed")
        setText(e.target.value);
    }

    // hook
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: mode === "dark" ? "white" : "black"}}>
                <h2 >{headingTextArea}</h2>
                <div className="mt-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: mode === "dark" ? "grey" : "white", color: mode === "dark" ? "white" : "black"}}  onChange={changeHandle} id="myTextBox" rows="10"></textarea>
                </div>
                <button className="btn btn-success mt-3" onClick={ClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3 mt-3" onClick={upperClick}>To: UPPER-CASE</button>
                <button className="btn btn-secondary mx-3 mt-3" onClick={lowerClick}>To: LOWER-CASE</button>
                <button className="btn btn-warning mx-3 mt-3" onClick={handleinverseclick}>To: Inverse</button>
                <button className="btn btn-warning mx-3 mt-3" onClick={speak}>To: Speech</button>
                <button className="btn btn-warning mx-3 mt-3" onClick={handleSpaces}>Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: mode === "dark" ? "white" : "black"}}>
                <h1>Your Text Analyizing Summary Is:</h1>
                <p>{text.split(/\s+/).filter(word => word).length} Words and {text.length} Characters</p>
                <p>You can read this text in {0.008 * text.split(" ").length} Minutes</p>
                <h3>See Preview Here:</h3>
                <p>{text.length > 0 ? text : "Enter Some text for Quick-Preview"}</p>
            </div>
        </>
    )
}
