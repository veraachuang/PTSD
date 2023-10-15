document.getElementById('save-button').addEventListener('click', function() {
    const journalEntry = document.getElementById('journal-entry').value;

    // Create a new Blob object with the journal entry content
    const blob = new Blob([journalEntry], { type: 'text/plain' });

    // Create a new anchor element to download the file
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = 'journal-entry.txt';

    // Simulate a click on the anchor element to trigger the download
    anchor.click();

    // Clear the journal entry textarea
    document.getElementById('journal-entry').value = '';

    // Show a confirmation message
    alert('Journal entry saved!');
});