import { useState, ImgHTMLAttributes, SyntheticEvent } from "react";
import { ImageOff } from "lucide-react";

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const ImageWithFallback = ({ src, alt, className = "", style, ...props }: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image: ${src}`, e);
    setError(true);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`} style={style}>
        <div className="text-center p-4">
          <ImageOff size={48} className="text-muted-foreground mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative" style={style}>
      {!loaded && (
        <div className={`absolute inset-0 animate-pulse bg-muted rounded ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onError={handleError}
        onLoad={handleLoad}
        style={style}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
