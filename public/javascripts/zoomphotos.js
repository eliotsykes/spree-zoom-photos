function getPathImageViewsAreFor() {
  return $('#main-image').data('pathImageViewsAreFor');
}
function areImageViewsInitialized() {
  pathImageViewsAreFor = getPathImageViewsAreFor();
  return undefined != pathImageViewsAreFor && '' != pathImageViewsAreFor;
}
function hasThumbnails() {
  return $('ul.thumbnails li').length > 0
}
function getSelectedImagePath() {
  if (hasThumbnails() && areImageViewsInitialized()) {
    // Getting the selected thumbnail works for both variant and no variant
    // thumbnail scenarios.
    return $('ul.thumbnails li.selected a').attr('href');
  }
  return $("#main-image img").attr('src');    
}
function setupEnlarge() {
  if (!areImageViewsInitialized()) {
    // One time setup for fancybox when page is loaded.
    $("a.enlargeable").fancybox();
  }
}
function setupZoom() {
  // Remove existing zoom event handlers, this stops the jqzoom event handlers from
  // accumulating each time the jqzoom function is called.
  $('.zoomable').unbind();
  // Reapply jqzoom function so the correct zoom image is used.
  $('.zoomable').jqzoom(zoomOptions);
}
function areImageViewsForSelectedImage() {
  // Thumbnail hovers will not pass this test which is what we want.
  return getPathImageViewsAreFor() == getSelectedImagePath();
}
function setupImageViews() {
  if (!areImageViewsForSelectedImage()) {
    // The image views need setting up for the selected image.
    selectedImagePath = getSelectedImagePath();
    largeImagePath = selectedImagePath.replace('/product/', '/large/');
    xlImagePath = selectedImagePath.replace('/product/', '/xl/');
    $("a.enlargeable").attr('href', largeImagePath);
    $("a.zoomable").attr('href', xlImagePath);
    setupEnlarge();
    setupZoom();
    $('#main-image').data('pathImageViewsAreFor', selectedImagePath);
  }
}
$(document).ready(function() {
  setupImageViews();
  // Event handler called whenever the main product image changes.
  $("#main-image img").bind("load", setupImageViews);
});


