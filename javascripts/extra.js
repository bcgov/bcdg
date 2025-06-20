// Add a live region to the page for screen reader announcements
(function() {
  var liveRegion = document.createElement('div');
  liveRegion.id = 'copy-live-region';
  liveRegion.setAttribute('aria-live', 'polite');
  document.body.appendChild(liveRegion);

  // Listen for copy button clicks
  document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('md-clipboard')) {
      liveRegion.textContent = 'Code copied to clipboard';
    }
  });
})();
