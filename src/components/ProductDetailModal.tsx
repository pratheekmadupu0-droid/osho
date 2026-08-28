import React, { useState } from 'react';
import { X, CheckCircle2, Download, AlertTriangle, FileText, Share2, Check, Video } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!product) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSpec = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Technical Data Sheet for "${product.name}" requested. Official document will download when supplied.`);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-orange-100 my-8 relative flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="bg-orange-600 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded">
              {product.category}
            </span>
            {product.hasVideo && (
              <span className="bg-orange-500/20 text-orange-300 border border-orange-500/30 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded flex items-center gap-1">
                <Video className="w-3 h-3 text-orange-400" />
                <span>DYNAMIC VIDEO AVAILABLE</span>
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Top Row: Video Player or Image */}
          {product.hasVideo && product.videoUrl ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                <Video className="w-4 h-4" />
                <span>Official Product Demonstration Video</span>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-300 bg-black shadow-lg">
                <video
                  src={product.videoUrl}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 relative h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
              <div className="sm:col-span-7 space-y-3">
                <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
                  {product.name}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {product.shortDescription}
                </p>
              </div>
            </div>
          )}

          {/* Product Overview Heading if video is present */}
          {product.hasVideo && (
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {product.name}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {product.shortDescription}
              </p>
            </div>
          )}

          {/* Technical Specifications Tag Box */}
          <div className="bg-orange-50 border border-orange-200/80 rounded-lg p-4 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-orange-800 font-bold">
              <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Technical Data Sheet Information:</span>
            </div>
            <div className="text-xs text-slate-700 space-y-1 font-mono">
              <div><strong>Formulation Type:</strong> {product.formulationType}</div>
              <div><strong>Available Packages:</strong> {product.packageSizes.join(', ')}</div>
              <div><strong>Active Composition:</strong> {product.chemicalCompositionPlaceholder}</div>
              <div><strong>Registration No:</strong> {product.registrationNoPlaceholder}</div>
              <div><strong>Recommended Dosage:</strong> {product.dosagePlaceholder}</div>
            </div>
          </div>

          {/* Targeted Crops & Application Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-700">Target Crops</h4>
              <div className="flex flex-wrap gap-1.5">
                {product.targetCrops.map((crop, idx) => (
                  <span key={idx} className="bg-white border border-slate-300 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-700">Target Pests / Diseases</h4>
              <div className="flex flex-wrap gap-1.5">
                {product.targetPestsWeeds.map((pest, idx) => (
                  <span key={idx} className="bg-orange-100 border border-orange-200 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                    {pest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Benefits List */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase font-extrabold tracking-wider text-slate-900">
              Key Benefits & Performance Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Usage Information */}
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Recommended Usage Guidelines</span>
            </div>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">
              {product.recommendedUsage}
            </p>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownloadSpec}
              disabled={downloading}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Preparing Sheet...' : 'Download Product Details'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-3 bg-white border border-slate-300 text-slate-700 hover:text-orange-600 hover:border-orange-400 rounded-md transition-colors"
              title="Share Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-md shadow"
          >
            <span>Inquire Bulk Order / Dosage</span>
          </button>
        </div>

      </div>
    </div>
  );
};
