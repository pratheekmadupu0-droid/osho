import React, { useState } from 'react';
import { PageType } from '../types';
import { ContactSection } from '../components/ContactSection';
import { ChevronRight, HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How can I obtain sample quantities or bulk pricing for OSHO products?',
      a: 'Please complete the official inquiry form selecting "Bulk Purchase & Commercial Supply". Our sales department will review your required volume and provide official commercial quotes.'
    },
    {
      q: 'Where can I find exact chemical active ingredient percentages and CIR registration numbers?',
      a: 'Technical specifications, CIR numbers, and chemical active percentages are printed on official product containers and verified technical data sheets. You can request a data sheet through our contact form.'
    },
    {
      q: 'Does OSHO CROP CARE offer regional dealership and distribution rights?',
      a: 'Yes, we welcome partnerships with established agricultural retailers and distributors across India. Select "Distributor / Dealership Inquiry" on our contact form to start the onboarding process.'
    },
    {
      q: 'What precautions should applicators follow during field spraying?',
      a: 'Always wear protective personal equipment (gloves, face shield, long sleeves), adhere strictly to label water ratios, and spray during early morning or late afternoon hours to prevent drift.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-16 relative overflow-hidden border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Contact Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            CONNECT WITH <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">OSHO CROP CARE</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl font-light leading-relaxed">
            Our technical support specialists, distribution managers, and agronomic team are here to assist you with inquiries across all crop protection segments.
          </p>
        </div>
      </div>

      {/* Main Redesigned Contact Section */}
      <ContactSection />

      {/* Frequently Asked Questions Accordion */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 font-bold text-xs uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-orange-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              COMMONLY ASKED INQUIRIES
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-white hover:text-orange-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-orange-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>OSHO CROP CARE PVT. LTD. Official Support Protocol</span>
          </div>
        </div>
      </section>
    </div>
  );
};
