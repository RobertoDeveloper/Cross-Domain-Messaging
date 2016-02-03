
    (function init(w) {

        var iframeReference = document.getElementById('iframe');
        var buttonReference = document.getElementById('btn');

        function sendMessage(e) {
            e.preventDefault();
            iframeReference.contentWindow.postMessage("Data", 'http://localhost:32150/');
        }

        function getMessage(e) {
            console.log('ReplayMessage: ' + e.data);
        }

        if (w.addEventListener) {
            buttonReference.addEventListener('click', sendMessage);
            w.addEventListener('message', getMessage);
        } else {
            buttonReference.onclick = sendMessage;
            w.attachEvent('message', getMessage);
        }
    })(window); 