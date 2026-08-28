import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_CONTACT_INFO } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Product Inquiry / Agronomic Support',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-orange-50/30">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-16 relative overflow-hidden border-b border-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-100 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Contact Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading">
            CONNECT WITH <span className="text-amber-200">OSHO CROP CARE</span>
          </h1>
          <p className="text-orange-50 text-base sm:text-lg mt-3 max-w-2xl font-light">
            Have questions about formulation dosage, dealership inquiries, or crop defense advisory? Our technical team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white text-slate-900 p-8 rounded-3xl border border-orange-200 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>CORPORATE HEADQUARTERS</span>
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                OSHO CROP CARE PVT. LTD.
              </h2>

              <div className="space-y-6 pt-4 border-t border-orange-100 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Office Address:</strong>
                    <p className="leading-relaxed text-slate-600">
                      {COMPANY_CONTACT_INFO.addressPlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Customer Helpline:</strong>
                    <a href="tel:18004256746" className="text-orange-600 hover:underline font-extrabold text-base">
                      1800-425-6746 / +91 40-27170099
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Email Inquiries:</strong>
                    <a href="mailto:info@oshocropcare.com" className="text-slate-600 hover:text-orange-600 font-mono">
                      info@oshocropcare.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Business Hours:</strong>
                    <p className="text-slate-600">
                      {COMPANY_CONTACT_INFO.businessHours}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-orange-200 shadow-xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  Inquiry Submitted Successfully!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to OSHO CROP CARE PVT. LTD. Our technical representative will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                    Send an Official Inquiry
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Fill out the form below and our agronomic specialist will get back to you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ramesh@agrimail.com"
                    className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Inquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                  >
                    <option value="Product Inquiry / Agronomic Support">Product Inquiry / Agronomic Support</option>
                    <option value="Dealership & Distribution Application">Dealership & Distribution Application</option>
                    <option value="Bulk Formulation Order">Bulk Formulation Order</option>
                    <option value="Technical Dossier Request">Technical Dossier Request</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Message / Requirements</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify crop type, pest challenges, or distribution inquiry details..."
                    className="w-full px-4 py-3 bg-orange-50/40 border border-orange-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-orange-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT OFFICIAL INQUIRY</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </div>

    </div>
  );
};
