//

import React,{ useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label : 'African',
        value : 'af'
    },
    {
        label : 'Arabic',
        value : 'ar'
    },
    {
        label : 'Hindi',
        value : 'hi'
    }
];

const Translate = () => {

    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState('');

    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="inputText">Enter text here : </label>
                <input value={text} onChange = {(e) => setText(e.target.value)} id="inputText" type="text" />
            </div>
            <div className="field">
                <Dropdown selected={language} onSelectedChange = {setLanguage} options = {options}
                label = "Select a Language" />
            </div>
            <div className="ui header">
                <h4>Output</h4>
                <Convert text={text} language= {language}/>
            </div>
        </div>
    );

};

export default Translate;