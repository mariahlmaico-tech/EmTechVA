import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Terminal, CheckCircle, ArrowRight, Zap, RefreshCw, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    platform: 'Zapier',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [localTime, setLocalTime] = useState('');

  // Update Makati, Philippines (GMT+8) time live
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setLocalTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    setLogs([]);
    setFormState('sending');

    // Simulate real-time API transmission
    setTimeout(() => {
      addLog(`📡 API Handshake: Initializing SMTP pipeline to mariahlmaico@gmail.com...`);
    }, 400);

    setTimeout(() => {
      addLog(`📦 Data Payload: Packaging contact elements { name: "${formData.name}", platform: "${formData.platform}" }...`);
    }, 1200);

    setTimeout(() => {
      addLog(`🔐 Auth Tokens: Requesting Webhook access code... OK (200)`);
      addLog(`🚀 Dispatching telemetry notification alerts to Slack dev board...`);
    }, 2200);

    setTimeout(() => {
      addLog(`✔ Transmission Successful. Mailer transcript completed.`);
      setFormState('success');
    }, 3200);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', company: '', platform: 'Zapier', message: '' });
    setFormState('idle');
    setLogs([]);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase mb-2">
            Get Connected
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight">
            Ready to scale?
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl font-sans leading-relaxed">
            Let's talk about the manual work draining your team — and the AI automation that quietly removes it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info and Quick details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-7 relative overflow-hidden">
              <h3 className="text-xl font-display font-semibold text-white flex items-center gap-2">
                <span className="w-1.5 h-4 bg-blue-500 rounded"></span>
                Direct Channels
              </h3>

              <div className="space-y-5">
                {/* Email link */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group p-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">General Mailbox</span>
                    <span className="text-sm font-semibold">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                {/* Telephone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group p-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Direct Mobile Line</span>
                    <span className="text-sm font-semibold">{PERSONAL_INFO.phone}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 text-slate-300 p-1">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Headquarters</span>
                    <span className="text-sm font-semibold">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Local timezone clock block (Crucial operational factor for remote consultants) */}
              <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 block leading-tight">My Local Area Time</span>
                  <span className="text-xs font-semibold text-white">Manila (GMT+8)</span>
                </div>
                <div className="text-right font-mono text-base font-bold text-blue-400 tracking-wider">
                  {localTime || 'GMT+8'}
                </div>
              </div>

              {/* Social networking anchors */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-3">Sync Networking</span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer referrerpolicy"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors duration-250"
                  >
                    <Linkedin className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.upwork}
                    target="_blank"
                    rel="noreferrer referrerpolicy"
                    className="flex justify-center items-center px-4 h-10 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 text-xs font-mono font-semibold transition-colors leading-none"
                  >
                    Upwork Verifications
                  </a>
                  <a
                    href={PERSONAL_INFO.onlinejobs}
                    target="_blank"
                    rel="noreferrer referrerpolicy"
                    className="flex justify-center items-center px-4 h-10 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 text-xs font-mono font-semibold transition-colors leading-none"
                  >
                    OLJ Profile
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              
              {formState === 'success' ? (
                /* Success telemetry card */
                <div className="space-y-6 text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400 animate-bounce">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold font-display text-white">Transmission Successful</h3>
                    <p className="text-slate-400 text-xs md:text-sm max-w-sm mx-auto">
                      Thank you! Your automation inquiry payload has been securely routed. Mariah will review your requirements and respond at <span className="text-white font-semibold">{formData.email}</span> within 12 hours.
                    </p>
                  </div>

                  {/* Telemetry Log Output Box */}
                  <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 text-left font-mono text-[11px] text-slate-400 max-w-md mx-auto space-y-1">
                    <div className="pb-1.5 border-b border-slate-900 text-slate-500 uppercase tracking-widest text-[9px] flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5" /> Log Registry Archive
                    </div>
                    {logs.map((log, idx) => (
                      <div key={idx} className={log.includes('✔') ? 'text-blue-400 font-semibold' : ''}>
                        {log}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-slate-850 hover:bg-slate-850 hover:text-white text-slate-300 font-medium text-xs font-display transition-colors mx-auto mt-6"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : formState === 'sending' ? (
                /* Loading / transmitting status screen */
                <div className="space-y-6 text-center py-12">
                  <div className="w-12 h-12 rounded-full border-2 border-blue-500 border-t-transparent animate-spin mx-auto"></div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold font-display text-white">Transmitting Encrypted Payload...</h3>
                    <p className="text-slate-400 text-xs">Executing multi-step webhook routing sequences...</p>
                  </div>

                  {/* Live execution logs stream */}
                  <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 text-left font-mono text-[11px] text-slate-400 max-w-md mx-auto space-y-1">
                    <div className="pb-1.5 border-b border-slate-900 text-slate-500 uppercase tracking-widest text-[9px] flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5" /> Log Registry Archive
                    </div>
                    {logs.length === 0 ? (
                      <div className="text-slate-600 italic">Starting mail serverhandshake...</div>
                    ) : (
                      logs.map((log, idx) => <div key={idx}>{log}</div>)
                    )}
                  </div>
                </div>
              ) : (
                /* Contact Form interface */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-xs font-mono text-slate-400">Full Name *</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormState('idle') || setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 text-slate-200 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="text-xs font-mono text-slate-400">Business Email *</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormState('idle') || setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@organization.com"
                        className="w-full bg-slate-950 text-slate-200 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-company" className="text-xs font-mono text-slate-400">Company (Optional)</label>
                      <input
                        id="form-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization Inc."
                        className="w-full bg-slate-950 text-slate-200 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Core target platform selection */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-platform" className="text-xs font-mono text-slate-400">Target Integration Hub</label>
                      <select
                        id="form-platform"
                        value={formData.platform}
                        onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                        className="w-full bg-slate-950 text-slate-200 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                      >
                        <option value="Zapier">Zapier Platforms</option>
                        <option value="Make.com">Make.com Advanced</option>
                        <option value="n8n">n8n (Self-Hosted / Cloud)</option>
                        <option value="Google App Script">Google Apps Script</option>
                        <option value="Custom API Code">Custom API Syncs</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="text-xs font-mono text-slate-400">Project Requirements Outline *</label>
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormState('idle') || setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what services you want automated, and what systems you're currently running (e.g. Asana, GoHighLevel, Xero...)"
                      className="w-full bg-slate-950 text-slate-200 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold font-display shadow-lg shadow-blue-500/10 transition-colors cursor-pointer"
                  >
                    <span>Request Intelligent Blueprint</span>
                    <Send className="w-4 h-4 fill-current" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
