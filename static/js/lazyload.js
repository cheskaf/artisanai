document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.onerror = function() {
              lazyImage.src = '/../static/images/error.jpg'; // replace with your error image
            };
            lazyImage.removeAttribute("data-src");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Fallback for browsers that do not support IntersectionObserver
      lazyImages.forEach(function(lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.onerror = function() {
          lazyImage.src = '/../static/images/error.jpg'; // replace with your error image
        };
        lazyImage.removeAttribute("data-src");
      });
    }
  });