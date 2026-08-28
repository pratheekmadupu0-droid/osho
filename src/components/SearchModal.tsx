import React, { useState } from 'react';
import { Search, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRODUCTS, CROP_SOLUTIONS } from '../data/mockData';
import { Product, PageType } from '../types';

interface SearchModalProps {
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: PageType, filter?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  onClose,
  onSelectProduct,
  onNavigate
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.targetCrops.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredCrops = CROP_SOLUTIONS.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.keyChallenges.some((ch) => ch.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-start justify-center pt-16 px-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-orange-100 animate-fadeIn">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-orange-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search crop protection solutions, insecticides, crops (e.g. Cotton, Fungicide)..."
            className="w-full bg-transparent outline-none text-slate-900 font-semibold text-sm sm:text-base placeholder:text-slate-400"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="p-1 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-md text-xs font-bold text-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          
          {/* Products Results */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Products ({filteredProducts.length})
            </h4>
            {filteredProducts.length === 0 ? (
              <p className="text-xs text-slate-500 font-normal">No matching product formulations found.</p>
            ) : (
              <div className="space-y-2">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="p-3 rounded-lg border border-slate-100 hover:border-orange-300 hover:bg-orange-50/50 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-10 h-10 rounded-md object-cover border border-slate-200"
                      />
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">
                          {product.name}
                        </h5>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {product.category} • Crops: {product.targetCrops.join(', ')}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Crops Results */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Crop Solutions ({filteredCrops.length})
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredCrops.map((crop) => (
                <button
                  key={crop.id}
                  onClick={() => {
                    onClose();
                    onNavigate('crop-solutions');
                  }}
                  className="p-2.5 rounded-md bg-slate-50 hover:bg-orange-50 border border-slate-200 text-left transition-colors flex items-center gap-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">{crop.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-center text-[11px] text-slate-500 font-medium">
          PRINSTAN AGRI CARE PVT. LTD. Product Directory Search
        </div>

      </div>
    </div>
  );
};
