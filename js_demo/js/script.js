document.getElementById('chat-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('ai-response').textContent = '...'; // Clear previous response
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value;
    if (!userMessage) return;

    
    appendMessage(userMessage, 'user-message');
    userInput.value = '';

    const chatWindow = document.getElementById('chat-window');
    const loadingMessage = appendMessage('...', 'ai-message');
    
    // IMPORTANT: Replace this with your actual OpenRouter API key
    const openrouterApiKey = btoa('c2stb3ItdjEtM2I1MDVlOTc0MGI2NjY3NWZlY2Y2ZGI2NmJjNjc0YjAwZTRhYmMzNWFlYjdkZDQwYzVmZmM2NThmNjQ2ZWEzMA=='); 

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${openrouterApiKey}`,
                'Content-Type': 'application/json',
                // Optional headers for OpenRouter leaderboards
                // 'HTTP-Referer': 'YOUR_SITE_URL',
                // 'X-Title': 'YOUR_SITE_NAME',
            },
            body: JSON.stringify({
                model: 'nvidia/nemotron-nano-12b-v2-vl:free', // Example model, consider using a free one for testing
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: userMessage },
                ],
            }),
        });

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        console.log(aiResponse);
        document.getElementById('ai-response').textContent = aiResponse;
        // Remove the loading message and display the AI's response
        loadingMessage.textContent = aiResponse;
        chatWindow.scrollTop = chatWindow.scrollHeight;

    } catch (error) {
        console.error('Error:', error);
        loadingMessage.textContent = 'Error connecting to the AI.';
    }
});

function appendMessage(text, className) {
    
}
function getBirthdateFromAge(age) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; 
  const currentDay = currentDate.getDate();
  const birthYear = currentYear - age;
  let calculatedBirthMonth = currentMonth;
  let calculatedBirthDay = currentDay;
  const formattedMonth = String(calculatedBirthMonth).padStart(2, '0');
  const formattedDay = String(calculatedBirthDay).padStart(2, '0');
  const formattedYear = String(birthYear).slice(-2); 

  return `${formattedMonth}/${formattedDay}/${formattedYear}`;
}

