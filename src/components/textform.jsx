import React, { useState } from "react";


const TextForm = (props) => {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.setShow("success", "Coverted to UpperCase");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.setShow("success", "Coverted to LowerCase");

    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleCapatalizedClick = () => {
        let arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            //  console.log(arr);
        }
        //  console.log(arr);
        let newText = arr.join(" "); // will join all the array elements in a string.
        //  console.log(newText);
        setText(newText);
    }
    const handleCopy = () => {
        // let text = document.getElementById("floatingTextarea").value;
        navigator.clipboard.writeText(text);
        //  document.getSelection().removeAllRanges(); //Selected test will got removed ..try it without using it and then see.
        props.setShow("success", "Text is Copied");

    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }


    const [text, setText] = useState("");

    return (
        <>
            <h1>{props.text}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" onChange={handleOnChange} value={text} id="floatingTextarea" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-secondary mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-warning mx-2 my-2" onClick={handleCapatalizedClick}>Capitalized Case</button>
            <button disabled={text.length === 0} type="button" className="btn btn-dark mx-2 my-2" onClick={handleSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length === 0} type="button" className="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} type="button" className="btn btn-success mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

            <h1 className="my-3">Text Summary</h1>
            <p>{text.split(/\s+/).filter((el) => { return el.length !== 0 }).length} words and {text.length} character</p>
            <p>Takes {.008 * text.split(" ").length} to read the words</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </>
    )
}
export default TextForm;