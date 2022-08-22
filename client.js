$(document).ready(readyNow);

function readyNow(){
    console.log('test');
    $('.panel').on('click',clickEvent);
}

const clickEvent = ()=>{
    console.log('click panel');
}

