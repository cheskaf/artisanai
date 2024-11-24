// Get the file input element
const fileInput = document.getElementById('images');

// Add an event listener to the file input for the 'change' event
fileInput.addEventListener('change', handleFileSelection);

function handleFileSelection() {
  // Get the selected files
  const selectedFiles = fileInput.files;

  // Check if any file is selected
  if (selectedFiles.length > 0) {
    // Iterate through each selected file
    for (const file of selectedFiles) {
      // Check if the file type is not an image
      if (!file.type.startsWith('image/')) {
        // Display an alert
        alert('Please select only image files.');

        // Clear the file input
        fileInput.value = '';

        // Return to prevent form submission
        return;
      }
    }
  }
}