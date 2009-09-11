= Zoom Photos

Want lightbox+zoomable product photos for your Spree store's customers?  

This extension might be what you're looking for.  It gives lightbox and zoom functionality to your photos.

The lightbox uses the existing large image size of 600x600.

For the zoom, it uses a new extra large image size of 1200x1200 (see zoom_photos_extension.rb).  This image
size will be generated when you upload an image in Spree.  To take advantage of this with existing product
images you'll need to generate the extra large size.  I believe paperclip has a rake task to help
with regenerating images (unconfirmed).

The lightbox is done with the fancybox jquery plugin.  Many thanks to the author who's name I'd love to know so I can put it here.

[Demos of Fancy box](http://fancybox.net/example) (these demos are not in a Spree app).

The zoom is done with the [jqzoom evolution jquery plugin](http://www.mind-projects.it/projects/jqzoom/) (version 1.0.1) courtesy of Renzi Marco, many thanks.

[Demos of jqzoom](http://www.mind-projects.it/projects/jqzoom/demos.php) (these demos are not in a Spree app).

The extension has a blank zoomphotos.css file that you may want to override in your own extension to customise
the styling for fancybox and jqzoom.

The extension has extension points where you can override the defaults easily enough by 
overriding the default partial templates (_zoom_options.html.erb, _image_instructions.html.erb, etc.).  
If you'd like another extension point send me a github pull request with it in.

Contributions, bug reports, etc. welcome.

Best regards,

Eliot Sykes

TODO:
- Make javascript OO (candidate classes: ImageControls, ZoomControl, EnlargeControl)
- Only enable image controls if the product has the large and xl image sizes required.

[http://github.com/eliotsykes/spree-zoom-photos]

[http://blog.eliotsykes.com/]

