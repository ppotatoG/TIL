const btn01 = document.querySelector('button');

function addEvent(target, eventType,eventHandler, useCapture) {
    if (target.addEventListener) { // W3C DOM
        target.addEventListener(eventType,eventHandler,useCapture?useCapture:false);
        console.log('w3c')
    } else if (target.attachEvent) {  // IE DOM
        var r = target.attachEvent("on"+eventType, eventHandler);
        console.log('ie')
    
    } else { 
        target["on"+eventType] = eventHandler;
        console.log('else')
   }
 }

const changeStyle = () => {btn01.classList.toggle('on')}

addEvent(btn01, 'click', changeStyle)