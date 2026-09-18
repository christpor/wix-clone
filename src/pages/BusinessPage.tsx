import React, { useState } from 'react';
import { 
  Calendar, Users, DollarSign, Clock, CheckCircle2, ArrowRight, 
  Sparkles, Check, ChevronRight, Plus, Phone, Mail, Filter 
} from 'lucide-react';

interface BusinessPageProps {
  onNavigate: (path: string) => void;
}

interface BookingService {
  id: string;
  name: string;
  duration: string;
  price: number;
  specialist: string;
  description: string;
}

interface CRMLead {
  id: string;
  name: string;
  company: string;
  stage: 'New' | 'Contacted' | 'Proposal' | 'Won';
  value: number;
  date: string;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'booking' | 'crm'>('booking');

  // Booking State
  const services: BookingService[] = [
    {
      id: 'srv-1',
      name: 'Hair Architecture & Tone Styling',
      duration: '60 min',
      price: 95,
      specialist: 'Luna Vance',
      description: 'Personalized cut, precision coloring, and restorative scalp therapy treatment.'
    },
    {
      id: 'srv-2',
      name: 'Brand Strategy & Visual Direction',
      duration: '90 min',
      price: 250,
      specialist: 'Marcus Sterling',
      description: 'Comprehensive brand identity audit, positioning sprint, and digital lookbook review.'
    },
    {
      id: 'srv-3',
      name: 'Full-Stack Architecture Consultation',
      duration: '45 min',
      price: 180,
      specialist: 'Elena Rostova',
      description: 'Cloud scalability audit, multi-region CDN routing, and headless CMS integration.'
    }
  ];

  const [selectedService, setSelectedService] = useState<BookingService>(services[0]);
  const [selectedDate, setSelectedDate] = useState('Tomorrow, Oct 12');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // CRM State
  const [leads, setLeads] = useState<CRMLead[]>([
    { id: 'l1', name: 'Sophia Chen', company: 'Atelier Minimal', stage: 'New', value: 3400, date: '10m ago' },
    { id: 'l2', name: 'Liam O’Connor', company: 'Kinetic Labs', stage: 'Contacted', value: 8200, date: '2h ago' },
    { id: 'l3', name: 'Amira Patel', company: 'Nova Living', stage: 'Proposal', value: 12500, date: '1d ago' },
    { id: 'l4', name: 'Julian Mercer', company: 'Monochrome Studios', stage: 'Won', value: 18900, date: '2d ago' },
  ]);
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadCompany, setNewLeadCompany] = useState('');
  const [newLeadValue, setNewLeadValue] = useState('4500');

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName.trim()) return;
    const newLead: CRMLead = {
      id: `l-${Date.now()}`,
      name: newLeadName,
      company: newLeadCompany || 'Independent Client',
      stage: 'New',
      value: parseInt(newLeadValue) || 2500,
      date: 'Just now'
    };
    setLeads([newLead, ...leads]);
    setNewLeadName('');
    setNewLeadCompany('');
  };

  const advanceStage = (id: string) => {
    const stages: CRMLead['stage'][] = ['New', 'Contacted', 'Proposal', 'Won'];
    setLeads(prev => prev.map(lead => {
      if (lead.id === id) {
        const nextIndex = Math.min(stages.length - 1, stages.indexOf(lead.stage) + 1);
        return { ...lead, stage: stages[nextIndex] };
      }
      return lead;
    }));
  };

  return (
    <div className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-20">

        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#116DFF]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Wix Bookings & Operations • Business Suite</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.035em] text-[#0F172A] leading-[1.1]">
            A better way to run your entire day-to-day business
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Manage client appointments, automate staff schedules, track customer inquiries in real time, and get paid with zero manual friction.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button 
              onClick={() => onNavigate('/builder/drag-and-drop')}
              className="px-7 py-3.5 rounded-full text-sm font-medium bg-[#0F172A] hover:bg-black text-white shadow-md transition-all flex items-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setActiveTab(activeTab === 'booking' ? 'crm' : 'booking')}
              className="px-6 py-3.5 rounded-full text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center gap-2"
            >
              <span>Switch to {activeTab === 'booking' ? 'CRM Simulator' : 'Booking Sandbox'}</span>
            </button>
          </div>
        </div>

        {/* Real Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">150M+</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Bookings Accepted</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">2.5x</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Lead Conversion Velocity</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">190+</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Tax Regimes Handled</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-emerald-600 tracking-tight">0%</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Booking Commission</div>
          </div>
        </div>

        {/* Master Showcase with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="p-8 sm:p-10 space-y-4">
              <span className="text-xs uppercase font-semibold text-[#116DFF] tracking-wider">Automated Scheduling</span>
              <h3 className="text-2xl font-semibold text-slate-900">Seamless Appointment & Calendar Booking</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Empower your clients to book appointments, classes, and private consultations 24/7 with instant calendar sync across Google Calendar, Outlook, and Apple iCal.
              </p>
            </div>
            <div className="h-64 sm:h-72 overflow-hidden bg-slate-100 border-t border-slate-200">
              <img 
                src="/assets/images/wix-bookings.jpg" 
                alt="Wix Bookings Interface" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="p-8 sm:p-10 space-y-4">
              <span className="text-xs uppercase font-semibold text-[#116DFF] tracking-wider">Customer Intelligence</span>
              <h3 className="text-2xl font-semibold text-slate-900">Full Lifecycle CRM & Lead Pipelines</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Capture website visitors with smart forms, trigger automated WhatsApp and email follow-ups, and convert prospect chats into multi-thousand-dollar deals.
              </p>
            </div>
            <div className="h-64 sm:h-72 overflow-hidden bg-slate-100 border-t border-slate-200">
              <img 
                src="/assets/images/wix-leads.jpg" 
                alt="Wix CRM Lead Management Interface" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>

        {/* Interactive Sandbox Section */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Interactive Business Operations Sandbox</h3>
              <p className="text-sm text-slate-500 mt-0.5">Experience how clients interact with appointments and how your team manages pipelines.</p>
            </div>
            
            <div className="flex rounded-full bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('booking')}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeTab === 'booking' ? 'bg-[#0F172A] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1. Client Booking Flow
              </button>
              <button
                onClick={() => setActiveTab('crm')}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeTab === 'crm' ? 'bg-[#0F172A] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                2. CRM Lead Pipeline
              </button>
            </div>
          </div>

          {/* TAB 1: Booking Flow Simulator */}
          {activeTab === 'booking' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Service Selection */}
              <div className="lg:col-span-6 space-y-4">
                <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider text-[11px]">Select Service</h4>
                <div className="space-y-3">
                  {services.map(s => (
                    <div 
                      key={s.id}
                      onClick={() => {
                        setSelectedService(s);
                        setBookingConfirmed(false);
                      }}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        selectedService.id === s.id
                          ? 'border-[#116DFF] bg-blue-50/40 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h5 className="text-base font-semibold text-slate-900">{s.name}</h5>
                        <span className="text-sm font-bold text-slate-900">${s.price}.00</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{s.description}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs font-medium text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {s.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          Staff: {s.specialist}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slot Picker & Confirmation */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">Live Calendar</span>
                    <h4 className="text-base font-semibold text-slate-900 mt-0.5">Select Date & Available Slot</h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Live Sync
                  </span>
                </div>

                {/* Dates */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700">Preferred Date</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Tomorrow, Oct 12', 'Wed, Oct 13', 'Thu, Oct 14'].map(d => (
                      <button
                        key={d}
                        onClick={() => {
                          setSelectedDate(d);
                          setBookingConfirmed(false);
                        }}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                          selectedDate === d
                            ? 'border-[#116DFF] bg-blue-50 text-[#116DFF] font-semibold'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slots */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700">Available Time Slots</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['09:30 AM', '11:00 AM', '02:30 PM', '04:00 PM'].map(slot => (
                      <button
                        key={slot}
                        onClick={() => {
                          setSelectedSlot(slot);
                          setBookingConfirmed(false);
                        }}
                        className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                          selectedSlot === slot
                            ? 'border-[#116DFF] bg-[#116DFF] text-white font-semibold'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary Card */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between font-medium text-slate-700">
                    <span>Service:</span>
                    <span className="font-semibold text-slate-900">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between font-medium text-slate-700">
                    <span>Provider:</span>
                    <span className="text-slate-900">{selectedService.specialist}</span>
                  </div>
                  <div className="flex justify-between font-medium text-slate-700">
                    <span>Time & Date:</span>
                    <span className="text-slate-900">{selectedDate} @ {selectedSlot}</span>
                  </div>
                  <div className="flex justify-between font-medium text-slate-700 border-t border-slate-100 pt-2">
                    <span>Deposit Due:</span>
                    <span className="text-sm font-bold text-blue-600">${selectedService.price}.00</span>
                  </div>
                </div>

                {bookingConfirmed ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1.5">
                    <div className="flex items-center justify-center gap-1.5 text-emerald-700 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Appointment Confirmed!</span>
                    </div>
                    <p className="text-xs text-emerald-600">
                      Calendar invite sent to client inbox with automated reminder SMS.
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => setBookingConfirmed(true)}
                    className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Confirm Client Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: CRM Lead Pipeline Simulator */}
          {activeTab === 'crm' && (
            <div className="space-y-6">
              {/* Quick Add Lead Bar */}
              <form onSubmit={handleAddLead} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-3 items-center">
                <input 
                  type="text" 
                  placeholder="Lead / Client Name (e.g. Maya Lin)" 
                  value={newLeadName} 
                  onChange={e => setNewLeadName(e.target.value)}
                  className="w-full sm:flex-1 px-4 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#116DFF]"
                />
                <input 
                  type="text" 
                  placeholder="Organization or Company" 
                  value={newLeadCompany} 
                  onChange={e => setNewLeadCompany(e.target.value)}
                  className="w-full sm:w-56 px-4 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#116DFF]"
                />
                <input 
                  type="number" 
                  placeholder="Value ($)" 
                  value={newLeadValue} 
                  onChange={e => setNewLeadValue(e.target.value)}
                  className="w-full sm:w-28 px-4 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#116DFF]"
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs font-semibold bg-[#0F172A] hover:bg-black text-white flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Lead</span>
                </button>
              </form>

              {/* Kanban Pipeline Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(['New', 'Contacted', 'Proposal', 'Won'] as CRMLead['stage'][]).map(stage => {
                  const stageLeads = leads.filter(l => l.stage === stage);
                  const stageTotal = stageLeads.reduce((s, l) => s + l.value, 0);

                  return (
                    <div key={stage} className="p-4 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            stage === 'Won' ? 'bg-emerald-500' : stage === 'Proposal' ? 'bg-blue-500' : 'bg-slate-400'
                          }`} />
                          <h5 className="text-xs font-bold text-slate-900">{stage} ({stageLeads.length})</h5>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500">${stageTotal.toLocaleString()}</span>
                      </div>

                      <div className="space-y-2.5">
                        {stageLeads.length === 0 ? (
                          <div className="text-center py-6 text-[11px] text-slate-400">No leads in this column</div>
                        ) : (
                          stageLeads.map(lead => (
                            <div key={lead.id} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h6 className="text-xs font-semibold text-slate-900">{lead.name}</h6>
                                  <span className="text-[10px] text-slate-400 block">{lead.company}</span>
                                </div>
                                <span className="text-xs font-bold text-slate-900">${lead.value.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                                <span>{lead.date}</span>
                                {stage !== 'Won' && (
                                  <button
                                    onClick={() => advanceStage(lead.id)}
                                    className="px-2 py-0.5 rounded-md bg-blue-50 text-[#116DFF] font-semibold hover:bg-blue-100 flex items-center gap-0.5"
                                  >
                                    <span>Advance</span>
                                    <ChevronRight className="w-2.5 h-2.5" />
                                  </button>
                                )}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
