document.addEventListener('DOMContentLoaded', function() {
  // Create two live regions - one assertive and one polite
  // Narrator sometimes needs assertive announcements to interrupt current reading
  let assertiveRegion = document.getElementById('sr-announce-assertive');
  if (!assertiveRegion) {
    assertiveRegion = document.createElement('div');
    assertiveRegion.id = 'sr-announce-assertive';
    assertiveRegion.className = 'sr-announce';
    assertiveRegion.setAttribute('aria-live', 'assertive');
    assertiveRegion.setAttribute('aria-atomic', 'true');
    assertiveRegion.setAttribute('role', 'alert'); // This helps Narrator
    document.body.appendChild(assertiveRegion);
  }
  
  let politeRegion = document.getElementById('sr-announce');
  if (!politeRegion) {
    politeRegion = document.createElement('div');
    politeRegion.id = 'sr-announce';
    politeRegion.className = 'sr-announce';
    politeRegion.setAttribute('aria-live', 'polite');
    politeRegion.setAttribute('aria-atomic', 'true');
    document.body.appendChild(politeRegion);
  }
  
  // Function to handle copy button activation
  let outerTimeoutId = null;
  let innerTimeoutId = null;
  function handleCopyAction() {
    // First clear both regions to ensure fresh announcement
    assertiveRegion.textContent = '';
    politeRegion.textContent = '';
    
    // Clear any existing timeouts
    if (outerTimeoutId !== null) {
      clearTimeout(outerTimeoutId);
    }
    if (innerTimeoutId !== null) {
      clearTimeout(innerTimeoutId);
    }
    
    // Use setTimeout to ensure the announcement happens after the copy
    outerTimeoutId = setTimeout(function() {
      // Use both regions to maximize compatibility
      assertiveRegion.textContent = 'Copied to clipboard';
      politeRegion.textContent = 'Copied to clipboard';
      
      // Clear after a delay
      innerTimeoutId = setTimeout(function() {
        assertiveRegion.textContent = '';
        politeRegion.textContent = '';
      }, 3000);
    }, 100);
  }
  
  // Monitor for copy button clicks
  document.addEventListener('click', function(event) {
    const target = event.target;
    // Check if it's a copy button (using multiple selectors to cover different themes)
    if (target.classList.contains('md-clipboard') || 
        target.closest('.md-clipboard') || 
        (target.tagName === 'BUTTON' && target.getAttribute('title')?.includes('Copy'))) {
      
      // Use the handleCopyAction function for consistent behavior
      handleCopyAction();
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