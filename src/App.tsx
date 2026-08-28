import { useState, useEffect } from 'react';
import { PageType, Product } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProductsShowcase } from './components/ProductsShowcase';
import { DynamicFeaturedProducts } from './components/DynamicFeaturedProducts';
import { CropSolutionsSection } from './components/CropSolutionsSection';
import { QualitySection } from './components/QualitySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SustainabilitySection } from './components/SustainabilitySection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { VisualStorytellingBanner } from './components/VisualStorytellingBanner';

// Pages
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { CropSolutionsPage } from './pages/CropSolutionsPage';
import { QualityPage } from './pages/QualityPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageType, filter?: string) => {
    setCurrentPage(page);
    setCategoryFilter(filter);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Sticky Pill Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} onSelectProduct={handleSelectProduct} />
            <About onNavigate={handleNavigate} />
            <ProductsShowcase onNavigate={handleNavigate} />
            <DynamicFeaturedProducts onNavigate={handleNavigate} onSelectProduct={handleSelectProduct} />
            <CropSolutionsSection onNavigate={handleNavigate} />
            <QualitySection />
            <WhyChooseUs />
            <VisualStorytellingBanner />
            <SustainabilitySection onNavigate={handleNavigate} />
          </>
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'products' && (
          <ProductsPage
            initialCategory={categoryFilter}
            onNavigate={handleNavigate}
            onOpenContact={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'crop-solutions' && (
          <CropSolutionsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'quality' && <QualityPage onNavigate={handleNavigate} />}

        {currentPage === 'sustainability' && (
          <SustainabilityPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Detail Spec Drawer Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenContact={() => {
            setSelectedProduct(null);
            handleNavigate('contact');
          }}
        />
      )}

      {/* Global Live Search Overlay */}
      {isSearchOpen && (
        <SearchModal
          onClose={() => setIsSearchOpen(false)}
          onSelectProduct={(p) => {
            setIsSearchOpen(false);
            handleSelectProduct(p);
          }}
          onNavigate={(page, filter) => {
            setIsSearchOpen(false);
            handleNavigate(page, filter);
          }}
        />
      )}

    </div>
  );
}

export default App;
