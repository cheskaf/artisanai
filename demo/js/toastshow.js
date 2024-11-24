function showToast(message) {
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
  
    var toastInstance = new bootstrap.Toast(document.getElementById('liveToast'));
    toastInstance.show();
}