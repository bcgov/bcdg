// Create live region for screen reader announcements if it doesn't exist
document.addEventListener('DOMContentLoaded', function() {
  let liveRegion = document.getElementById('sr-announce');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'sr-announce';
    liveRegion.className = 'sr-announce';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    document.body.appendChild(liveRegion);
  }
  
  // Monitor for copy button clicks
  document.addEventListener('click', function(event) {
    const target = event.target;
    // Check if it's a copy button (adjust selector as needed)
    if (target.classList.contains('md-clipboard') || 
        target.closest('.md-clipboard') || 
        (target.tagName === 'BUTTON' && target.getAttribute('title')?.includes('Copy'))) {
      
      // Announce to screen readers
      if (window.announceTimeout) {
        clearTimeout(window.announceTimeout);
      }
      if (window.clearTimeout) {
        clearTimeout(window.clearTimeout);
      }
      window.announceTimeout = setTimeout(function() {
        liveRegion.textContent = 'Copied to clipboard';
        // Clear after a delay
        window.clearTimeout = setTimeout(function() {
          liveRegion.textContent = '';
        }, 3000);
      }, 100);
    }
  });
});
