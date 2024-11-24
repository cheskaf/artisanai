$(document).ready(function() {
    $('#selectFileBtn').click(function() {
        // Trigger a click on the hidden file input
        $('#uploaded_image').click();
    });
    
    // Event listener for the file input
    $('#uploaded_image').change(function() {
        // Get the selected file
        const selectedFile = this.files[0];

        if (selectedFile) {
            const allowedFormats = [
                'image/jpeg',   // JPEG
                'image/jpg',    // JPG
                'image/png',    // PNG
                'image/gif',    // GIF
                'image/bmp',    // BMP
                'image/tiff',   // TIFF
                'image/webp',   // WebP
                'image/heic',   // HEIC (iOS specific)
            ];
                
            if (allowedFormats.indexOf(selectedFile.type) === -1) {
                alert('Invalid file format. Please upload an image.');
                // Clear the file input
                $(this).val('');
                return;
            }
            
            // Check if the file size exceeds the maximum allowed size (10 MB)
            const maxSize = 10 * 1024 * 1024; // 10 MB in bytes
            if (selectedFile.size > maxSize) {
                alert('File size exceeds the maximum allowed size of 10 MB.');
                // Clear the file input
                $(this).val('');
                return;
            }
            
            // Read the selected file as a data URL
            const reader = new FileReader();
    
            reader.onload = function(e) {
                // Update the src attribute of the image tag with the data URL
                $('#photoimagearea').attr('src', e.target.result);
    
                // Set the value of the hidden input field with the base64-encoded data
                $('#crochet_image_data').val(e.target.result);
            };
    
            // Read the file as a data URL
            reader.readAsDataURL(selectedFile);
        }
    });
    
    // Additional script to display an alert if the image URL doesn't start with "data:image/"
    $("#countBtn").click(function(event) {
        // Get the source URL of the image
        const imageSrc = $('#photoimagearea').attr('src');

        // Check if the image URL starts with "data:image/"
        if (!imageSrc.startsWith('data:image/')) {
            // Display an alert or message indicating that the image URL is not valid
            alert("Please upload a new image.");
            // Prevent the default form submission behavior
            event.preventDefault();
        } else {
            $('#loadStitchCounter').modal('show');  
        }
    });
    
    // Camera JS 
    
    // Variable to store the captured image data
    var capturedImageData = '';
    
    // Variable to store the current camera
    let currentCamera = 'environment'; // 'environment' refers to the rear camera
    
    // Event listener for the camera button
    $('#cameraBtn').click(function() {
        // Check if there are multiple cameras with different facing modes
        hasMultipleCameras().then(multipleCameras => {            
            if (multipleCameras) {
                // Show the switch camera button
                // $('#switchCamBtn').show();
                startCamera('environment'); // Start the camera when the button is clicked
            } else {
                // Hide the switch camera button
                // $('#switchCamBtn').hide();
                startCamera('user'); // Start the camera when the button is clicked
            }                    
        });        
    });    
    
    // Function to start the camera
    async function startCamera(facingMode) {
        // Stop the camera before starting a new one (if it's already active)
        stopCamera();               
        try {            
            console.log('Accessing camera... (', facingMode, ')');
            
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment',
                },
            });
            const video = document.getElementById('cameraPreview');
            video.srcObject = stream;
        } catch (error) {
            // If the rear camera is not available, try accessing the front camera
            console.log('Rear camera not found. Accessing front camera...');
            if (facingMode === 'environment') {
                stopCamera();
                console.log('Accessing camera... (', facingMode, ')');
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: user,
                    },
                });
                const video = document.getElementById('cameraPreview');
                video.srcObject = stream;               
            } else {
                alert('Unable to access the camera. Please check your camera settings.');
                console.error('Error accessing the camera:', error);
            }
        }
        
        // Check if there is a captured image to display
        if (capturedImageData) {
            $('#cameraModal #capturedImage').attr('src', capturedImageData);
            $('#cameraModal #cameraPreview').hide();
            $('#cameraModal #capturedImage').show();
            $('#cameraModal #retakeBtn').show();            
            $('#cameraModal #captureBtn').hide(); // Hide the capture button            
            $('#cameraModal #confirmBtn').show(); // Show the confirm button
        } else {
            // If no captured image, show the retake button and hide the captured image
            $('#cameraModal #retakeBtn').hide();
            $('#cameraModal #capturedImage').hide();
            $('#cameraModal #captureBtn').show(); // Show the capture button            
            $('#cameraModal #confirmBtn').hide(); // Hide the confirm button         
        }
    }

    // Function to check if there are multiple cameras with different facing modes
    async function hasMultipleCameras() {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            console.log('Video devices found:', videoDevices.length);
            return videoDevices.length > 1;
        } catch (error) {
            console.error('Error enumerating devices:', error);
            return false;
        }
    }

    // Function to stop the camera
    async function stopCamera() {
        const video = document.getElementById('cameraPreview');
        
        // Check if the video element has an active stream
        if (video.srcObject) {
            // Get the stream tracks
            const tracks = video.srcObject.getTracks();
            
            // Stop each track
            tracks.forEach(track => track.stop());
            
            // Remove the stream from the video element
            video.srcObject = null;
        }
    }
        
    // Event listener for the capture button
    $('#captureBtn').click(function() {
        const video = document.getElementById('cameraPreview');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert the captured image to base64
        capturedImageData = canvas.toDataURL('image/jpeg');

        // Set the captured image to the img element inside the modal
        $('#cameraModal #capturedImage').attr('src', capturedImageData);
        $('#cameraModal #cameraPreview').hide(); // Hide the camera preview
        $('#cameraModal #capturedImage').show(); // Show the captured image
        
        stopCamera();
        
        // Show the retake button
        $('#cameraModal #retakeBtn').show();
        $('#cameraModal #captureBtn').hide(); // Hide the capture button
        $('#cameraModal #confirmBtn').show(); // Show the confirm button
        // $('#cameraModal #switchCamBtn').hide();

        $('#crochet_image_data').val(capturedImageData);
        
        // Do something with the captured image, e.g., upload to S3
        console.log('Captured Image:', capturedImageData);
    });

    // Event listener for the switch camera button
    // $('#switchCamBtn').click(function () {
    // Toggle between 'environment' (rear) and 'user' (front) facing modes
    //    if (currentCamera === 'environment') {
    //         console.log('Switching to front camera...');
    //        currentCamera = 'user';
    //    } else if (currentCamera === 'user') {
    //        console.log('Switching to rear camera...');
    //        currentCamera = 'environment';
    //    } else {
    //        console.error('Invalid camera:', currentCamera);
    //        console.log('Error switching cameras. Please try again.')
    //        return;
    //    }
    //   startCamera(currentCamera);
    // });    
    
    // Event listener for the retake button
    $('#retakeBtn').click(function() {
        // Clear the captured image, hide it, and display the camera preview again
        capturedImageData = ''; // Clear the stored image data
        $('#cameraModal #capturedImage').attr('src', '');
        $('#cameraModal #capturedImage').hide();
        $('#cameraModal #cameraPreview').show();
        
        startCamera('environment');
        
        // Hide the retake button
        $('#cameraModal #retakeBtn').hide();
        $('#cameraModal #captureBtn').show(); // Show the capture button        
        $('#cameraModal #confirmBtn').hide(); // Hide the confirm button
        
        // Check if there are multiple cameras with different facing modes
        hasMultipleCameras().then(multipleCameras => {            
            if (multipleCameras) {
                // Show the switch camera button
                // $('#switchCamBtn').show();
                startCamera('environment'); // Start the camera when the button is clicked
            } else {
                // Hide the switch camera button
                // $('#switchCamBtn').hide();
                startCamera('user'); // Start the camera when the button is clicked
            }                    
        });        
    });

    // Event listener for the confirm button
    $('#confirmBtn').click(function() {
        $('#cameraModal').modal('hide');

        // Show the captured image in the specified img tag
        var crochetImageTag = $('.photoarea');
        crochetImageTag.attr('src', capturedImageData);

        // Create a new File object from the captured image data
        const blob = dataURItoBlob(capturedImageData);
        const file = new File([blob], 'captured_image.jpeg');
       
        // Create a DataTransfer object
        const dataTransfer = new DataTransfer();

        // Add the File object to the DataTransfer object
        dataTransfer.items.add(file);

         // Set the 'files' property of the input element with the DataTransfer object
        $('#uploaded_image').prop('files', dataTransfer.files);
        
        
    });
    
    // Show the capture button
    $('#cameraModal #captureBtn').show(); 
    // Hide the captured image, retake, and confirm buttons initially
    $('#cameraModal #capturedImage, #cameraModal #retakeBtn, #cameraModal #confirmBtn').hide();

    $('#cameraModal').on('hidden.bs.modal', function (e) {
        console.log('Clearing captured image data...')
        // Clear the captured image, hide it, and display the camera preview again
        capturedImageData = ''; // Clear the stored image data
        $('#cameraModal #capturedImage').attr('src', '');
        $('#cameraModal #capturedImage').hide();
        $('#cameraModal #cameraPreview').show();
                
        // Hide the retake button
        $('#cameraModal #retakeBtn').hide();
        $('#cameraModal #captureBtn').show(); // Show the capture button        
        $('#cameraModal #confirmBtn').hide(); // Hide the confirm button
        
        // Check if there are multiple cameras with different facing modes
        hasMultipleCameras().then(multipleCameras => {            
            if (multipleCameras) {
                // Show the switch camera button
                // $('#switchCamBtn').show();
            } else {
                // Hide the switch camera button
                // $('#switchCamBtn').hide();
            }                    
        });   
        
        // Stop the camera stream
        stopCamera();
    });
    
    // Orientation JS =================================================================================================

    // Call the function on page load to initialize the orientation
    orientationChangeListener();

    // Event listener for when the camera modal is shown
    $('#cameraModal').on('show.bs.modal', function (e) {
        console.log('Camera modal shown');
        handleOrientation(); // Start handling orientation events
        logInitialOrientation(); // Log the initial orientation when the modal is shown
        logOrientationSupport(); // Log if handling orientation is supported
    });

    // Event listener for when the camera modal is hidden
    $('#cameraModal').on('hidden.bs.modal', function (e) {
        console.log('Camera modal hidden');
        stopOrientationHandling(); // Stop handling orientation events
        unlockScreenOrientation(); // Unlock the screen orientation (reset to portrait)
        stopCamera(); // Stop the camera stream
    });

    // Function to start handling orientation events
    function handleOrientation() {
        console.log('Handling orientation events');
        window.addEventListener('orientationchange', orientationChangeListener);
    }

    // Function to stop handling orientation events
    function stopOrientationHandling() {
        console.log('Stopping orientation handling');
        window.removeEventListener('orientationchange', orientationChangeListener);
    }

    /// Function to handle orientation change events
    function orientationChangeListener() {
        // Use window.matchMedia to check for orientation changes
        const isPortrait = window.matchMedia("(orientation: portrait)").matches;

        // Log the orientation to the console
        console.log('Orientation changed:', isPortrait ? 'Portrait' : 'Landscape');

        // Adjust modal styling based on orientation
        const cameraModal = $('#cameraModal');

        cameraModal.removeClass('landscape portrait').addClass(isPortrait ? 'portrait' : 'landscape');
    }

    // Function to unlock the screen orientation (reset to portrait)
    function unlockScreenOrientation() {
        console.log('Unlocking screen orientation');
        if (screen.orientation && screen.orientation.unlock) {
            screen.orientation.unlock();
        }
    }
    
    // Function to log the initial orientation when the modal is shown
    function logInitialOrientation() {
        // Use window.matchMedia to check for initial orientation
        const isPortrait = window.matchMedia("(orientation: portrait)").matches;
        
        // Log the initial orientation to the console
        console.log('Initial Orientation:', isPortrait ? 'Portrait' : 'Landscape');
    }
    
    // Function to log if handling orientation is supported
    function logOrientationSupport() {
        const isOrientationSupported = window.matchMedia("(orientation: portrait)").matches ||
                                        window.matchMedia("(orientation: landscape)").matches;
        console.log('Orientation Support:', isOrientationSupported ? 'Supported' : 'Not Supported');
    }

});

async function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}