function attachEvents() {
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const textArea = document.getElementById('messages');

    sendBtn.addEventListener('click', createNewMessage);
    refreshBtn.addEventListener('click', loadAllMessages);


    async function createNewMessage() {
        const nameInputValue = document.querySelector('#controls div input[name="author"]').value;
        const messageInputValue = document.querySelector('#controls div input[name="content"]').value;
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'author': nameInputValue,
                    'content': messageInputValue,
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }

    }

    async function loadAllMessages() {

        try {
            const allMessagesResponse = await fetch(BASE_URL);
            const messagesData = await allMessagesResponse.json();

            let output = '';

            for (const message in messagesData) {
                output += `${messagesData[message].author}: ${messagesData[message].content}`;
                if (message !== Object.keys(messagesData)[Object.keys(messagesData).length - 1]) {
                    output += '\n';
                }
            }
            textArea.value = output;
        } catch (error) {
            console.error(error);
        }
    }

    return [
        createNewMessage,
        loadAllMessages,
    ];
}

attachEvents();