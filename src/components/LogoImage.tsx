import React, { useEffect, useState } from 'react';

interface LogoImageProps {
  src?: string;
  className?: string;
  alt?: string;
}

export const LogoImage: React.FC<LogoImageProps> = ({
  src = '/logo.jpeg',
  className = 'h-10 w-auto',
  alt = 'OSHO CROP CARE PVT. LTD. Official Logo'
}) => {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Make white/near-white background pixels transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // If pixel is near white (RGB all > 230), set alpha to 0
        if (r > 230 && g > 230 && b > 230) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setDataUrl(canvas.toDataURL('image/png'));
    };
  }, [src]);

  if (dataUrl) {
    return (
      <img
        src={dataUrl}
        alt={alt}
        className={className}
      />
    );
  }

  // Fallback while canvas processes
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} mix-blend-multiply`}
    />
  );
};
