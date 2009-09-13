class ZoomPhotosExtension < Spree::Extension
  version "1.0"
  description "Allows customers to zoom in on your product photos"
  url "http://github.com/eliotsykes/spree-zoom-photos"

  def activate
    
    # Add an extra large (xl) size to use for zooming.
    Image.attachment_definitions[:attachment][:styles] = 
      { :mini => '48x48>', :small => '100x100>', :product => '240x240>', 
        :large => '600x600>', :xl => '1200x1200>' }
    
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
    
    ProductsHelper.class_eval do
      def image_controls
        @image_controls ||= ZoomPhotos::ImageControls.new(@product)
      end
    end
    
    Product.class_eval do
      def has_image_without_style?(style)
        return true if contains_image_without_style?(images, style)
        if !variants.blank?
          variants.each do |variant|
            return true if contains_image_without_style?(variant.images, style)
          end
        end
        return false
      end
      
      private
      
      def contains_image_without_style?(images, style)
        return false if images.blank?
        images.each do |image|
          path = image.attachment.path(style)
          return true if !File.exists?(path)
        end
        return false
      end
    end
    
  end
end
