import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles, Building2, User, FileText, Globe, MessageSquare, Copy, Check } from 'lucide-react';
import { COMPANY_CONTACT_INFO } from '../data/mockData';
import { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInquiryTypeSelect = (type: string) => {
    setFormData({
      ...formData,
      inquiryType: type
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const randomRef = `PRINSTAN-INQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    
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
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:32px_32px] opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 font-bold text-xs uppercase tracking-widest shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>EXPERT AGRICULTURAL SUPPORT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            LET'S BUILD A <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">PARTNERSHIP</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light">
            Connect directly with PRINSTAN AGRI CARE PVT. LTD. for technical product inquiry, distribution partnerships, or tailored crop protection support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Premium Contact Hub & Map Visual */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Online Status Card */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-orange-500/30 shadow-xl backdrop-blur-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Support Desk Active</h4>
                  <p className="text-[11px] text-slate-400">Response guaranteed within 2 business hours</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
                IST (GMT +5:30)
              </span>
            </div>

            {/* Contact Details Interactive Cards */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 hover:border-orange-500/50 transition-all group relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-600/20 text-orange-400 rounded-xl border border-orange-500/30 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 block">Phone Support</span>
                      <p className="text-slate-100 font-bold text-sm mt-0.5">{COMPANY_CONTACT_INFO.phonePlaceholder}</p>
                      <span className="text-[11px] text-slate-400">Mon - Sat: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(COMPANY_CONTACT_INFO.phonePlaceholder, 'phone')}
                    className="p-2 text-slate-400 hover:text-orange-400 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 hover:border-orange-500/50 transition-all group relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-600/20 text-orange-400 rounded-xl border border-orange-500/30 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 block">Official Email</span>
                      <p className="text-slate-100 font-bold text-sm mt-0.5">{COMPANY_CONTACT_INFO.emailPlaceholder}</p>
                      <span className="text-[11px] text-slate-400">Sales & Agronomic inquiries</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(COMPANY_CONTACT_INFO.emailPlaceholder, 'email')}
                    className="p-2 text-slate-400 hover:text-orange-400 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Registered Address Card */}
              <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 hover:border-orange-500/50 transition-all group relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-600/20 text-orange-400 rounded-xl border border-orange-500/30 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 block">Registered Headquarters</span>
                    <p className="text-slate-100 font-bold text-sm mt-0.5">{COMPANY_CONTACT_INFO.addressPlaceholder}</p>
                    <span className="text-[11px] text-orange-400 font-semibold mt-1 block">PRINSTAN AGRI CARE PVT. LTD.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Satellite Grid Map Placeholder Visual Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-6 space-y-4 shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')`
                }}
              />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400">
                  <Globe className="w-4 h-4" />
                  <span>REGIONAL DISTRIBUTION GRID</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  GPS: 17.3850° N, 78.4867° E
                </span>
              </div>
              <p className="relative z-10 text-xs text-slate-300 font-normal leading-relaxed">
                Operating through an accredited network of agricultural retailers and distributors to serve cash crop and food grain farmers across key growing belts.
              </p>
              <div className="relative z-10 pt-2 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] text-slate-400">Verified Corporate Supplier Registrations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Stunning Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-orange-500/30 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Send Us an <span className="text-orange-400">Inquiry</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Complete the details below to request product technical sheets, pricing quotes, or agronomic guidance.
              </p>
            </div>

            {submitted ? (
              <div className="bg-slate-950/90 border border-orange-500/40 rounded-2xl p-8 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded border border-orange-500/30 inline-block">
                    REF ID: {refNumber}
                  </span>
                  <h4 className="text-2xl font-extrabold text-white">Inquiry Successfully Transmitted</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your message regarding <span className="text-orange-400 font-semibold">{formData.inquiryType}</span> has been logged under Reference <span className="font-mono text-orange-300">{refNumber}</span>. A PRINSTAN Agri Care agronomic representative will respond shortly.
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
                  className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inquiry Type Category Selection Pills */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-3">
                    Select Inquiry Category *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {inquiryCategories.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = formData.inquiryType === cat.value;
                      return (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => handleInquiryTypeSelect(cat.value)}
                          className={`p-3 rounded-xl border text-left transition-all flex flex-col items-start gap-2 ${
                            isSelected
                              ? 'bg-orange-600 text-white border-orange-400 shadow-lg shadow-orange-600/20'
                              : 'bg-slate-950/60 text-slate-300 border-slate-800 hover:border-orange-500/40 hover:bg-slate-800'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-orange-400'}`} />
                          <span className="text-xs font-bold leading-tight">{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-orange-400" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-white text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-orange-400" />
                      <span>Company / Organization</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Agro Traders / Farm Owner"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-white text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-orange-400" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-white text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-orange-400" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-white text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
                    <span>Inquiry Message *</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify crop type, required formulation volume, or dealer inquiry details..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-white text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-xl hover:shadow-orange-500/20 transition-all group disabled:opacity-50"
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

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 Secure Corporate Transmission. Official inquiries are handled confidentially by PRINSTAN AGRI CARE PVT. LTD. representatives.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
