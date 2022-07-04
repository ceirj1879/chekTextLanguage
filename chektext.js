'use strict';
const cti=(selector)=>{
    const textInputs=document.querySelectorAll(selector);
    textInputs.forEach(i=>{
        i.addEventListener('keypress',(e)=>{
            if(e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault();
            }
        });
    });
    textInputs.forEach(i=>{
        i.addEventListener('input',()=>{
            i.value=i.value.replace(/[^а-яё 0-9]/ig,'');
        });
    });
    
};

export default cti;
