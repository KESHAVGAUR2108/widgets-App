import React,{useState,useEffect} from "react";
import axios from "axios";

const Convert = ({language,text}) => {
    
    const [result,setResult] = useState('');
    const [debouncedText,setDebouncedText] = useState(text);

    useEffect(()=>{

        const timeoutId = setTimeout(()=>{
            setDebouncedText(text);
        },1000);

        return () => {
            clearTimeout(timeoutId);
        };

    },[text]);

    useEffect(() => {

        const translate = async () => {

            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                parms : {
                    q : debouncedText,
                    target : language.value,
                    key : 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setResult(data.data.translations[0].translatedText);
        };

        translate();
    },[ debouncedText ,language]);
    
    return (
        <div>
            <h1 className="ui header">{result}</h1>
        </div>
    );
};

export default Convert;