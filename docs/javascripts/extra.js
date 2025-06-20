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
  function handleCopyAction() {
    // First clear both regions to ensure fresh announcement
    assertiveRegion.textContent = '';
    politeRegion.textContent = '';
    
    // Use setTimeout to ensure the announcement happens after the copy
    setTimeout(function() {
      // Use both regions to maximize compatibility
      assertiveRegion.textContent = 'Copied to clipboard';
      politeRegion.textContent = 'Copied to clipboard';
      
      // Clear after a delay
      setTimeout(function() {
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
      handleCopyAction();
    }
  });
  
  // Find and enhance all copy buttons
  function setupCopyButtons() {
    const copyButtons = document.querySelectorAll('.md-clipboard, button[title*="Copy"]');
    copyButtons.forEach(button => {
      // Skip if already processed
      if (button.dataset.a11yEnhanced) return;
      
      if (!button.hasAttribute('aria-label')) {
        button.setAttribute('aria-label', 'Copy to clipboard');
      }
      if (!button.hasAttribute('tabindex')) {
        button.setAttribute('tabindex', '0');
      }
      // Add role for clarity
      button.setAttribute('role', 'button');
      
      // Add explicit keyboard support for copy buttons
      button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
          handleCopyAction();
        }
      });
      
      // Mark as enhanced
      button.dataset.a11yEnhanced = 'true';
    });
  }
  
  // Initial setup
  setupCopyButtons();
  
  // MkDocs might load syntax highlighting asynchronously, so check again after a delay
  setTimeout(setupCopyButtons, 1000);
  
  // Also handle dynamically added content
  const observer = new MutationObserver(function(mutations) {
    setupCopyButtons();
  });
  
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
});