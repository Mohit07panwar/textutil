import React, { useState } from "react";


const TextForm = (props) => {

    const handleUpClick = () => {
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log(text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (e) => {
        // console.log("OnChange");
        setText(e.target.value);
    }


    const [text, setText] = useState("");

    return (
        <>
            <h1>{props.text}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" onChange={handleOnChange} value={text} id="floatingTextarea" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>

            <h1 className="my-3">Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>Takes {.008 * text.split(" ").length} to read the words</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </>
    )
}
export default TextForm;