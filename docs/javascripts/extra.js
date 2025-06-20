document.addEventListener('DOMContentLoaded', function() {
  // Create live region for screen reader announcements if it doesn't exist
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
    // Check if it's a copy button (using multiple selectors to cover different themes)
    if (target.classList.contains('md-clipboard') || 
        target.closest('.md-clipboard') || 
        (target.tagName === 'BUTTON' && target.getAttribute('title')?.includes('Copy'))) {
      
      // Announce to screen readers
      liveRegion.textContent = 'Copied to clipboard';
      
      // Clear any pending timeout before scheduling a new one
      if (clearTimeoutId) {
        clearTimeout(clearTimeoutId);
      }
      
      // Schedule clearing the live region text after a delay
      clearTimeoutId = setTimeout(function() {
        liveRegion.textContent = '';
        clearTimeoutId = null; // Reset the timeout ID
      }, 3000);
    }
  });
  
  // Add ARIA attributes to copy buttons
  document.querySelectorAll('.md-clipboard').forEach(button => {
    if (!button.hasAttribute('aria-label')) {
      button.setAttribute('aria-label', 'Copy to clipboard');
    }
    if (!button.hasAttribute('tabindex')) {
      button.setAttribute('tabindex', '0');
    }
  });
});