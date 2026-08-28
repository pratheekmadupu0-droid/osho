import React, { useState, useEffect } from 'react';
import { PageType, Product } from '../types';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/mockData';
import { ChevronRight, Search, Filter, ArrowRight, Video } from 'lucide-react';
import { ProductDetailModal } from '../components/ProductDetailModal';

interface ProductsPageProps {
  onNavigate: (page: PageType) => void;
  initialCategory?: string;
  onOpenContact: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  initialCategory,
  onOpenContact
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'ALL' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.targetCrops.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="bg-slate-950 text-white py-16 relative overflow-hidden border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Products Catalog</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading">
            PRODUCT <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">DIRECTORY</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl font-light">
            Search and filter our comprehensive catalog of insecticides, fungicides, herbicides, bio-nutritionals, and specialty crop protection solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, category, or target crop (e.g. Cotton, Rice, Insecticide)..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 transition-all"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <Filter className="w-4 h-4 text-orange-600" />
              <span>Showing {filteredProducts.length} Formulations</span>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'ALL'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              ALL CATEGORIES
            </button>

            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Media Container: 9:16 Video Preview if available, or Photo */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  {product.hasVideo && product.videoUrl ? (
                    <video
                      src={product.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md shadow">
                    {product.category}
                  </span>

                  {product.hasVideo && (
                    <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-orange-400 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border border-orange-500/40 flex items-center gap-1">
                      <Video className="w-3 h-3 text-orange-400" />
                      <span>9:16 REEL</span>
                    </span>
                  )}
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {product.shortDescription}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1.5">
                      Target Crops:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {product.targetCrops.map((crop, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-800 text-[11px] font-semibold px-2 py-0.5 rounded"
                        >
                          {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveProductModal(product)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow transition-all duration-300"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {activeProductModal && (
        <ProductDetailModal
          product={activeProductModal}
          onClose={() => setActiveProductModal(null)}
          onOpenContact={() => {
            setActiveProductModal(null);
            onOpenContact();
          }}
        />
      )}
    </div>
  );
};
