function hasThumbnails() {
  return $('ul.thumbnails li').length > 0
}
function getSelectedImagePath() {
  if (hasThumbnails()) {
    // Getting the selected thumbnail works for both variant and no variant
    // thumbnail scenarios.
    return $('ul.thumbnails li.selected a').attr('href');
  }
  return $("#main-image img").attr('src');    
}
function updateImageViews() {
  selectedImagePath = getSelectedImagePath();
  largeImagePath = selectedImagePath.replace('/product/', '/large/');
  xlImagePath = selectedImagePath.replace('/product/', '/xl/');
  $("a.enlargeable").attr('href', largeImagePath);
  $("#zoomer").attr('href', xlImagePath);
  // Delay running refresh as fails if we don't.
  setTimeout(MagicZoom.refresh,500);
}
function initImageViews() {
  $("a.enlargeable").fancybox();
}
$(document).ready(function() {
  initImageViews();
  // Event handler called whenever the main product image changes.
  $("#main-image img").bind("load", updateImageViews);
});
