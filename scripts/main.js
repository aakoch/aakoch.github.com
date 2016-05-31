// Configured with Greg Franko jQuery best practices.
// http://gregfranko.com/jquery-best-practices


(function($, window, document) {

  // The $ is now locally scoped
  // Listen for the jQuery ready event on the document

  $(function() {

  // The DOM is ready!
  console.log('The DOM is ready!', 'Ready to run mission-s generator');

  });

 // The rest of code goes here!
  console.log('The DOM may not be ready!');

}(window.jQuery, window, document));
