import React from "react";

const TextForm = (props) => {
    return (
        <>
        <h1>{props.text}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Convert To UpperCase</button>
            
        </>
    )
}
export default TextForm;