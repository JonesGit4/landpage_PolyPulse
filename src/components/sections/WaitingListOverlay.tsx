'use client';
import { useState, FormEvent } from 'react';
import Image from 'next/image';

interface Props { dict: any; }

export default function WaitingListOverlay({ dict }: Props) {
  const t = dict.waitingList;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!whatsapp.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('https://webn8n.duobro.com.br/webhook/polypulse_waiting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'Outfit, sans-serif',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    boxSizing: 'border-box' as const,
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      backgroundColor: 'rgba(8, 10, 18, 0.55)',
    }}>
      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '15%', left: '20%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: 250, height: 250, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)' }} />

      {/* Card */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: 440, margin: '0 20px',
        padding: '40px 36px',
        background: 'linear-gradient(145deg, rgba(15,18,30,0.95), rgba(10,12,22,0.98))',
        border: '1px solid rgba(0,212,255,0.15)', borderRadius: 20,
        boxShadow: '0 0 60px rgba(0,212,255,0.08), 0 25px 50px rgba(0,0,0,0.4)',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <Image src="/logo-sm.png" alt="PolyPulse" width={40} height={40} style={{ borderRadius: 10 }} />
            <span style={{ fontFamily: 'Sora, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff' }}>
              Poly<span style={{ color: '#00D4FF' }}>Pulse</span>
            </span>
          </div>
        </div>

        {/* Badge */}
        <div style={{ marginBottom: 16 }}>
          <span style={{
            display: 'inline-block', padding: '5px 16px', borderRadius: 50,
            background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)',
            color: '#00D4FF', fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', fontFamily: 'Sora, sans-serif',
          }}>
            🚀 {t.badge}
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.2 }}>{t.title}</h1>
        <p style={{ color: 'rgba(156,163,175,0.9)', fontSize: 14, lineHeight: 1.6, marginBottom: 28, fontFamily: 'Outfit, sans-serif' }}>{t.subtitle}</p>

        {status === 'success' ? (
          <div style={{ padding: '20px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 22, fontWeight: 700, color: '#00FF88', marginBottom: 8 }}>{t.success}</h3>
            <p style={{ color: '#9CA3AF', fontSize: 14 }}>{t.successSub}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input type="text" placeholder={t.namePlaceholder} value={name} onChange={e => setName(e.target.value)} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 20px rgba(0,212,255,0.08)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
            />
            <input type="email" placeholder={t.emailPlaceholder} value={email} onChange={e => setEmail(e.target.value)} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 20px rgba(0,212,255,0.08)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
            />
            <input type="tel" placeholder={t.whatsappPlaceholder} value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 20px rgba(0,212,255,0.08)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
            />
            <button type="submit" disabled={status === 'sending'} style={{
              width: '100%', padding: 16, borderRadius: 12, border: 'none',
              background: status === 'sending' ? 'rgba(0,212,255,0.3)' : 'linear-gradient(135deg, #00D4FF, #0099CC)',
              color: status === 'sending' ? 'rgba(255,255,255,0.5)' : '#fff',
              fontSize: 15, fontWeight: 700, fontFamily: 'Sora, sans-serif',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 30px rgba(0,212,255,0.2)', marginTop: 4, letterSpacing: '0.5px',
            }}>
              {status === 'sending' ? t.sending : t.cta}
            </button>

            {status === 'error' && <p style={{ color: '#FF6B6B', fontSize: 13, marginTop: 4 }}>{t.error}</p>}
            <p style={{ color: 'rgba(156,163,175,0.5)', fontSize: 11, marginTop: 4, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Sora, sans-serif' }}>⚡ {t.spots}</p>
          </form>
        )}
      </div>
    </div>
  );
}
