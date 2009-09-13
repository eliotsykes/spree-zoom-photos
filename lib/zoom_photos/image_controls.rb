module ZoomPhotos
  class ImageControls
    
    def initialize(product)
      @product = product
    end
    
    def enable_any?
      enable_enlarge? || enable_zoom?
    end
    
    def enable_enlarge?
      @enable_enlarge ||= !@product.images.blank? && !@product.has_image_without_style?(:large)
    end
    
    def enable_zoom?
      @enable_zoom ||= !@product.images.blank? && !@product.has_image_without_style?(:xl)
    end
    
  end
end
