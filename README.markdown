# Zoom Photos #
_Want lightbox+zoomable product photos for your Spree store's customers?_  
This extension might be what you're looking for.  It gives lightbox and zoom
functionality to your photos.

### Image sizes ###
The lightbox uses the existing large image size of 600x600.

For the zoom, it uses a new extra large image size of 1200x1200
(see zoom_photos_extension.rb).  This image size will be generated when you
upload an image in Spree.  To take advantage of this with existing product
images you'll need to generate the extra large size.  I believe paperclip has a
rake task to help with regenerating images (unconfirmed).

### Jquery plugins ###
The lightbox is done with the fancybox jquery plugin.  Many thanks to the author
who's name I'd love to know so I can put it here.

[Demos of Fancy box](http://fancybox.net/example)
(these demos are not in a Spree app).

The zoom is done with [MagicZoom](http://www.magictoolbox.com/magiczoom/).  If you
want to use zoom you'll want to get a license from MagicToolbox and put the javascript and css
files into your app, the files are *not* included in this extension. I looked
into free zoom scripts however MagicZoom suited my needs best and was easiest to integrate.
Thanks to MagicToolbox for providing a great tool.

[Demos of MagicZoom](http://www.magictoolbox.com/magiczoom_examples/)
(these demos are not in a Spree app).

The extension has a blank zoomphotos-custom.css file that you may want to override in
your own extension to customise the styling.

There are extension points where you can override the defaults of this extension easily.
If you'd like another extension point send me a github pull request with it in.

Contributions, bug reports, feature requests welcome.

Best regards,

Eliot Sykes

[http://github.com/eliotsykes/spree-zoom-photos](http://github.com/eliotsykes/spree-zoom-photos)   
[http://blog.eliotsykes.com/](http://blog.eliotsykes.com/)

### TODO ###

*   Make javascript OO (candidate classes: ImageControls, ZoomControl, EnlargeControl)
*   Make image controls smarter - enable/disable per image, not per product.  Suggest
    putting an available images array in javascript.  Will allow removal of the
    ZoomPhotos::ImageControl ruby class.
*   Possibly use ImgZoom instead of FancyBox http://odyniec.net/projects/imgzoom/ and
    consider making image instruction contain no links.

