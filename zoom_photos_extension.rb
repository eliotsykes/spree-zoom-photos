class ZoomPhotosExtension < Spree::Extension
  version "1.0"
  description "Allows customers to zoom in on your product photos"
  url "http://github.com/eliotsykes/spree-zoom-photos"

  def activate
    
    Spree::BaseHelper.class_eval do
      
      # image_style will typically be one of :mini, :small, :product, :large, :original
      def product_image_path(product, image_style=:original)
        if product.images.empty?
          image_path "noimage/#{image_style.to_s}.jpg"
        else
          image_path product.images.first.attachment.url(image_style)  
        end
      end
      
    end
    
  end
end
