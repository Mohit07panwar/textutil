import React from "react";

const DarkMode = () => {

    return (
        <>
            <div className="container">
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={{ color: "black" }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h3><b> Welcome to the TextUtils</b></h3>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h5> A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, remove extra spaces, copy text and clear the entire text.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4><b>Ease of Use</b></h4>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h5><strong>1. Upper Case</strong> <br />
                                    The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).</h5>
                                <h5><strong>2. Lower Case</strong> <br />
                                    The Lower case transformer will take any text that you have and will generate all the letters into Lower case ones. It will essentially make all Upper case letters into SMALLS (as well as keep Lower case letters as Lower case letters).</h5>
                                <h5><strong>3. Capatalized Case</strong> <br />
                                    The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.</h5>
                                <h5><strong>4. Extra Spaces</strong> <br />
                                    The Extra spaces case will remove the extra spaces from the text and this allow user to write the text fast without having concern of putting appropriate spaces in between the text.This case will do it.</h5>
                                <h5><strong>5. Copy Text</strong> <br />
                                    The Copy text case will copy the exact text which is written in the text area and user can use it and paste in the clipboard to reuse those text.</h5>
                                <h5><strong>6. Clear Text</strong> <br />
                                    The Clear text case will clear the entire text which is written in the text field.</h5>


                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default DarkMode;