$(document).ready(readyNow);

function readyNow(){
    console.log('test');
    $('.container').on('click','.panel',clickEvent);
}

const clickEvent = (event)=>{
    console.log('hey');
    $('.panel').removeClass('active');
    $(event.currentTarget).addClass('active');
}

