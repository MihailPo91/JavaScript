function encodeAndDecodeMessages() {
    const allTextAreas = Array.from(document.getElementsByTagName('textarea'));
    const messageTextArea = allTextAreas[0];
    const receiverTextArea = allTextAreas[1];

    const encodeSendBtn = Array.from(document.getElementsByTagName('button'))[0];
    const decodeReadBtn = Array.from(document.getElementsByTagName('button'))[1];

    encodeSendBtn.addEventListener('click', encodeMessageHandler);
    decodeReadBtn.addEventListener('click', decodeAndReadMessaveHandler);


    function encodeMessageHandler() {
        let message = messageTextArea.value.split('');
        let result = '';

        for (const char of message) {
            let asciiCode = char.charCodeAt(0) + 1;
            let newChar = String.fromCharCode(asciiCode);
            result += newChar;
        }

        receiverTextArea.value = result;
        messageTextArea.value = '';
    }

    function decodeAndReadMessaveHandler() {
        let message = receiverTextArea.value.split('');
        let result = '';

        for (const char of message) {
            let asciiCode = char.charCodeAt(0) - 1;
            let newChar = String.fromCharCode(asciiCode);
            result += newChar;
        }

        receiverTextArea.value = result;
    }
}