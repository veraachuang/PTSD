const moodButtons = document.querySelectorAll('.mood-button-2');

// Add event listener to each mood button
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.dataset.mood;
        let response = '';

        // Set response based on selected mood
        switch (mood) {
            case 'happy':
                response = 'I am glad you feel happy today! Reflect on something that made you feel happy:)';
                break;
            case 'sad':
                response = "I'm sorry to hear that you're feeling sad. Is there anything I can do to help? ";
                break;
            case 'angry':
                response = "It sounds like you're feeling angry. Take a deep breath and try to find a positive outlet for your emotions.";
                break;
            case 'excited':
                response = "That's great to hear that you're feeling excited! What's got you so excited? ";
                break;
            case 'frustrated':
                response = "I'm sorry you're feeling frustrated. Meet Snowball in the chat box to talk.";
            case 'calm':
                response = "I'm glad you are realxed. Try to reflect on things that are coming up soon. You are loved. ";
            case 'lonely':
                response = "I'm sorry you're feeling lonely. I'm always here to talk if you need. If you want, we can talk in the chat box :) - Snowball";
            case 'tired':
                    response = "Remember to always put yourself first. Take breaks and know that you are right where you're supposed to be.";
            default:
                response = "I want to know more about why you feel that way. Please click the chat box in the bottom right corner to talk!";
                break;
        }

        // Display the response
        document.getElementById('result').textContent = response;
    });
});