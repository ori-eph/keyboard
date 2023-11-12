import { useState } from "react";
import {lang} from "../data" 
import Button from "./Button";

function findLangChars(currentLang){
    for (key in lang){
        if (key===currentLang){
            return lang[key];
        }
    }
}

function onKeyClick=(setText, char)=>{
    setText(prevText=>prevText+=char);
}

function getKeyboard(chars, setText){
    const keyboard=chars.map(char=><Button key={`key-${char}`} onClick={()=>onKeyClick(setText, {char})}>{char}</Button>);
}

function Keyboard(props) {
    const currentLang=props.lang||'eng';
    const chars=findLangChars(currentLang);
    const keyboard=getKeyboard(chars, props.setText);
    return ( 
        <div id='keyboard-flex'>
            {keyboard}
        </div>
     );
}

export default Keyboard;