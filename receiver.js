(function init(w) {
    w.onload = function() {
         
         function  getMessage(e) {
             //make sure you validate the incoming origin
             if(!e.data || e.origin !== 'http://yourUrl') return;
             
             //set any data you want to send back to sender
             var dataToSend = document.cookie;
             
             //this sends the data back to the sender
             e.source.postMessage(dataToSend, e.origin);
         }
        (w.addEventListener) ? w.addEventListener('message', getMessage) : w.attachEvent('message', getMessage); 
    } 
})(window);
