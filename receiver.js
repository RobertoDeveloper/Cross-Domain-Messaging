(function init(w) {
    w.onload = function() {
         
         function  getMessage(e) {
             //you can also validate the origin below -> e.origin === 'yourOrigin'
             if(!e.data) return;
             
             //set any data you want to send back to sender
             var dataToSend = document.cookie;
             
             //this sends the data back to the sender
             e.source.postMessage(dataToSend, e.origin);
         }
        (w.addEventListener) ? w.addEventListener('message', getMessage) : w.attachEvent('message', getMessage); 
    }
})(window);