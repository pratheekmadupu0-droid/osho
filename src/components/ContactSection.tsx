import React, { useState } from 'react';
import { COMPANY_CONTACT_INFO } from '../data/mockData';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, 
  Copy, Check, Globe, ShieldCheck, Building2, Sparkles, FileText 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const randomRef = `OSHO-INQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setRefNumber(randomRef);
      setSubmitted(true);
    }, 1100);
  };

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const inquiryCategories = [
    { label: 'General Corporate', value: 'General Inquiry', icon: Building2 },
    { label: 'Agronomic Advice', value: 'Agronomic Support', icon: Sparkles },
    { label: 'Dealership / Dist.', value: 'Product Distribution', icon: Globe },
    { label: 'Bulk Commercial', value: 'Bulk Purchase', icon: FileText }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50/50 via-white to-orange-50/30 text-slate-900 relative overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:32px_32px] opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 border border-orange-200 rounded-full text-orange-700 font-bold text-xs uppercase tracking-widest shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>EXPERT AGRICULTURAL SUPPORT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            LET'S BUILD A <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">PARTNERSHIP</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Connect directly with OSHO CROP CARE PVT. LTD. for technical product inquiry, distribution partnerships, or tailored crop protection support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Premium Contact Hub & Map Visual */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Online Status Card */}
            <div className="bg-white rounded-2xl p-6 border border-orange-200 shadow-lg backdrop-blur-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Support Desk Active</h4>
                  <p className="text-[11px] text-slate-500">Response guaranteed within 2 business hours</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-orange-700 bg-orange-100 px-2.5 py-1 rounded border border-orange-200">
                IST (GMT +5:30)
              </span>
            </div>

            {/* Contact Details Interactive Cards */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-5 border border-orange-200 hover:border-orange-500 transition-all group relative overflow-hidden shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl border border-orange-200 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-500 block">Phone Support</span>
                      <p className="text-slate-900 font-bold text-sm mt-0.5">{COMPANY_CONTACT_INFO.phonePlaceholder}</p>
                      <span className="text-[11px] text-slate-500">Mon - Sat: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(COMPANY_CONTACT_INFO.phonePlaceholder, 'phone')}
                    className="p-2 text-slate-400 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-5 border border-orange-200 hover:border-orange-500 transition-all group relative overflow-hidden shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl border border-orange-200 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-500 block">Official Email</span>
                      <p className="text-slate-900 font-bold text-sm mt-0.5">{COMPANY_CONTACT_INFO.emailPlaceholder}</p>
                      <span className="text-[11px] text-slate-500">Sales & Agronomic inquiries</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(COMPANY_CONTACT_INFO.emailPlaceholder, 'email')}
                    className="p-2 text-slate-400 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Registered Address Card */}
              <div className="bg-white rounded-2xl p-5 border border-orange-200 hover:border-orange-500 transition-all group relative overflow-hidden shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-xl border border-orange-200 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-500 block">Registered Headquarters</span>
                    <p className="text-slate-900 font-bold text-sm mt-0.5">{COMPANY_CONTACT_INFO.addressPlaceholder}</p>
                    <span className="text-[11px] text-orange-600 font-bold mt-1 block">OSHO CROP CARE PVT. LTD.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Satellite Grid Map Placeholder Visual Card */}
            <div className="relative rounded-2xl overflow-hidden border border-orange-200 bg-white p-6 space-y-4 shadow-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')`
                }}
              />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600">
                  <Globe className="w-4 h-4" />
                  <span>REGIONAL DISTRIBUTION GRID</span>
                </div>
                <span className="text-[10px] font-mono text-slate-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                  GPS: 17.3850° N, 78.4867° E
                </span>
              </div>
              <p className="relative z-10 text-xs text-slate-600 font-normal leading-relaxed">
                Operating through an accredited network of agricultural retailers and distributors to serve cash crop and food grain farmers across key growing belts.
              </p>
              <div className="relative z-10 pt-2 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[11px] text-slate-500">Verified Corporate Supplier Registrations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-orange-200 shadow-2xl relative overflow-hidden">
            
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Send Us an <span className="text-orange-600">Inquiry</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Complete the details below to request product technical sheets, pricing quotes, or agronomic guidance.
              </p>
            </div>

            {submitted ? (
              <div className="bg-orange-50/60 border border-orange-200 rounded-2xl p-8 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold text-orange-700 uppercase tracking-widest bg-orange-100 px-3 py-1 rounded border border-orange-200 inline-block">
                    REF ID: {refNumber}
                  </span>
                  <h4 className="text-2xl font-extrabold text-slate-900">Inquiry Successfully Transmitted</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your message regarding <span className="text-orange-600 font-semibold">{formData.inquiryType}</span> has been logged under Reference <span className="font-mono text-orange-700">{refNumber}</span>. An OSHO Crop Care agronomic representative will respond shortly.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      phone: '',
                      email: '',
                      inquiryType: 'General Inquiry',
                      message: ''
                    });
                  }}
                  className="px-6 py-3 bg-slate-900 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inquiry Category Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Select Category</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {inquiryCategories.map((cat) => {
                      const IconComp = cat.icon;
                      const selected = formData.inquiryType === cat.value;
                      return (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: cat.value })}
                          className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                            selected
                              ? 'bg-orange-600 text-white border-orange-600 shadow-md'
                              : 'bg-orange-50/50 border-orange-200 text-slate-700 hover:border-orange-300'
                          }`}
                        >
                          <IconComp className={`w-4 h-4 mb-2 ${selected ? 'text-white' : 'text-orange-600'}`} />
                          <span className="text-[11px] font-bold leading-tight">{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Company / Farm Name</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Green Valley Agro"
                      className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@agrimail.com"
                      className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message / Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe crop defense challenges, required quantities, or dealership inquiries..."
                    className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Official Inquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 Secure Corporate Transmission. Official inquiries are handled confidentially by OSHO CROP CARE PVT. LTD. representatives.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
