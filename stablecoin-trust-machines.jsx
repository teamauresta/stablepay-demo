import React, { useState, useEffect } from 'react';
import { Wallet, Send, QrCode, ArrowLeftRight, History, Settings, User, Shield, TrendingUp, Copy, Check, ChevronRight, Bell, ChevronDown, Lock, Smartphone, Mail, Key, AlertTriangle, CheckCircle, X, ArrowUpRight, ArrowDownLeft, Clock, Search, Filter, Home, RefreshCw, LogOut, HelpCircle, FileText, ExternalLink, Zap, Building, Users, Briefcase, CircleDollarSign, Landmark, ShieldCheck, ArrowRightLeft, FileCheck, Scale, Coins, Banknote, Database, Server, Network, Fingerprint, ScanLine, BarChart3, PieChart, Activity, Gem, Star, Sparkles, Globe, Moon, Sun } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    /* Trust Machines Inspired - "Midnight Emerald" Palette */
    --tm-deep: #0A0F0D;
    --tm-surface: #0D1512;
    --tm-surface-1: #111A17;
    --tm-surface-2: #152320;
    --tm-surface-3: #1A2D28;
    --tm-surface-elevated: #1E3530;
    
    /* Signature Midnight Emerald */
    --tm-emerald-900: #064E3B;
    --tm-emerald-700: #047857;
    --tm-emerald-500: #10B981;
    --tm-emerald-400: #34D399;
    --tm-emerald-300: #6EE7B7;
    --tm-emerald-glow: rgba(16, 185, 129, 0.4);
    
    /* Supporting Colors */
    --tm-cyan: #06B6D4;
    --tm-purple: #8B5CF6;
    --tm-amber: #F59E0B;
    --tm-rose: #F43F5E;
    --tm-blue: #3B82F6;
    
    /* Text */
    --tm-text: #F0FDF4;
    --tm-text-secondary: #86EFAC;
    --tm-text-muted: #4ADE80;
    --tm-text-dim: #166534;
    
    /* Semantic Badge Colors */
    --badge-send: #3B82F6;
    --badge-receive: #10B981;
    --badge-exchange: #8B5CF6;
    --badge-security: #F59E0B;
    --badge-p2p: #06B6D4;
    --badge-error: #F43F5E;
    
    /* Gradients */
    --gradient-midnight: linear-gradient(135deg, #064E3B 0%, #0D1512 50%, #1E1B4B 100%);
    --gradient-emerald: linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%);
    --gradient-glow: linear-gradient(135deg, #34D399 0%, #10B981 50%, #059669 100%);
    --gradient-surface: linear-gradient(180deg, var(--tm-surface-1) 0%, var(--tm-surface) 100%);
    --gradient-card: linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.04) 50%, transparent 100%);
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background: var(--tm-deep);
    color: var(--tm-text);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
  
  .font-display {
    font-family: 'Space Grotesk', sans-serif;
  }
  
  .mono {
    font-family: 'IBM Plex Mono', monospace;
  }
  
  /* Animated Background with Floating Orbs */
  .bg-atmosphere {
    position: fixed;
    inset: 0;
    background: var(--tm-deep);
    z-index: -1;
    overflow: hidden;
  }
  
  .bg-atmosphere::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
    animation: float-slow 20s ease-in-out infinite;
  }
  
  .bg-atmosphere::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 50%;
    height: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    animation: float-slow 25s ease-in-out infinite reverse;
  }
  
  /* 3D Floating Elements */
  .float-element {
    position: absolute;
    pointer-events: none;
    z-index: 1;
  }
  
  .float-coin {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--gradient-emerald);
    box-shadow: 
      0 10px 40px rgba(16, 185, 129, 0.3),
      inset 0 -4px 8px rgba(0,0,0,0.3),
      inset 0 4px 8px rgba(255,255,255,0.2);
    animation: float-coin 6s ease-in-out infinite;
  }
  
  .float-ring {
    width: 100px;
    height: 100px;
    border: 3px solid rgba(16, 185, 129, 0.3);
    border-radius: 50%;
    animation: rotate-slow 15s linear infinite;
  }
  
  .float-cube {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 8px;
    transform: rotate(45deg);
    animation: float-cube 8s ease-in-out infinite;
  }
  
  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
  }
  
  @keyframes float-coin {
    0%, 100% { transform: translateY(0) rotateY(0deg); }
    50% { transform: translateY(-20px) rotateY(180deg); }
  }
  
  @keyframes float-cube {
    0%, 100% { transform: rotate(45deg) translateY(0); }
    50% { transform: rotate(45deg) translateY(-15px); }
  }
  
  @keyframes rotate-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px var(--tm-emerald-glow); }
    50% { box-shadow: 0 0 40px var(--tm-emerald-glow), 0 0 60px rgba(16, 185, 129, 0.2); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes scale-in {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .animate-fade-up {
    animation: fade-up 0.5s ease-out forwards;
  }
  
  .animate-scale-in {
    animation: scale-in 0.3s ease-out forwards;
  }
  
  .delay-1 { animation-delay: 0.1s; opacity: 0; }
  .delay-2 { animation-delay: 0.2s; opacity: 0; }
  .delay-3 { animation-delay: 0.3s; opacity: 0; }
  .delay-4 { animation-delay: 0.4s; opacity: 0; }
  
  /* Card Styles with Depth */
  .tm-card {
    background: var(--gradient-card);
    border: 1px solid rgba(16, 185, 129, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  
  .tm-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent);
  }
  
  .tm-card:hover {
    border-color: rgba(16, 185, 129, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 60px rgba(16, 185, 129, 0.1);
  }
  
  /* Tactile 3D Buttons - Trust Machines Style */
  .tm-btn-primary {
    position: relative;
    background: var(--gradient-emerald);
    border: none;
    border-radius: 14px;
    padding: 14px 28px;
    color: #000;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
    box-shadow: 
      0 4px 0 #047857,
      0 6px 20px rgba(16, 185, 129, 0.3),
      inset 0 1px 0 rgba(255,255,255,0.2);
    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
  }
  
  .tm-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 0 #047857,
      0 10px 30px rgba(16, 185, 129, 0.4),
      inset 0 1px 0 rgba(255,255,255,0.2);
  }
  
  .tm-btn-primary:active {
    transform: translateY(2px);
    box-shadow: 
      0 2px 0 #047857,
      0 4px 15px rgba(16, 185, 129, 0.3),
      inset 0 1px 0 rgba(255,255,255,0.2);
  }
  
  .tm-btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 4px 0 #047857;
  }
  
  .tm-btn-secondary {
    position: relative;
    background: var(--tm-surface-2);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 14px;
    padding: 14px 28px;
    color: var(--tm-emerald-400);
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
    box-shadow: 
      0 4px 0 rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.05);
  }
  
  .tm-btn-secondary:hover {
    background: var(--tm-surface-3);
    border-color: rgba(16, 185, 129, 0.4);
    transform: translateY(-2px);
    box-shadow: 
      0 6px 0 rgba(0,0,0,0.3),
      0 10px 20px rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.05);
  }
  
  .tm-btn-secondary:active {
    transform: translateY(2px);
    box-shadow: 
      0 2px 0 rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.05);
  }
  
  /* Ghost/Text Button */
  .tm-btn-ghost {
    background: transparent;
    border: none;
    padding: 10px 16px;
    color: var(--tm-emerald-400);
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-radius: 10px;
    transition: all 0.2s ease;
  }
  
  .tm-btn-ghost:hover {
    background: rgba(16, 185, 129, 0.1);
    color: var(--tm-emerald-300);
  }
  
  /* Semantic Badge System */
  .tm-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  
  .tm-badge-send {
    background: rgba(59, 130, 246, 0.15);
    color: #60A5FA;
    border: 1px solid rgba(59, 130, 246, 0.2);
  }
  
  .tm-badge-receive {
    background: rgba(16, 185, 129, 0.15);
    color: #34D399;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }
  
  .tm-badge-exchange {
    background: rgba(139, 92, 246, 0.15);
    color: #A78BFA;
    border: 1px solid rgba(139, 92, 246, 0.2);
  }
  
  .tm-badge-security {
    background: rgba(245, 158, 11, 0.15);
    color: #FBBF24;
    border: 1px solid rgba(245, 158, 11, 0.2);
  }
  
  .tm-badge-p2p {
    background: rgba(6, 182, 212, 0.15);
    color: #22D3EE;
    border: 1px solid rgba(6, 182, 212, 0.2);
  }
  
  .tm-badge-success {
    background: rgba(16, 185, 129, 0.15);
    color: #34D399;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }
  
  .tm-badge-error {
    background: rgba(244, 63, 94, 0.15);
    color: #FB7185;
    border: 1px solid rgba(244, 63, 94, 0.2);
  }
  
  /* Input Fields */
  .tm-input {
    background: var(--tm-surface-2);
    border: 2px solid rgba(16, 185, 129, 0.1);
    border-radius: 14px;
    padding: 16px 20px;
    color: var(--tm-text);
    font-size: 16px;
    width: 100%;
    transition: all 0.2s ease;
    outline: none;
  }
  
  .tm-input:focus {
    border-color: var(--tm-emerald-500);
    background: var(--tm-surface-3);
    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1), 0 0 30px rgba(16, 185, 129, 0.1);
  }
  
  .tm-input::placeholder {
    color: var(--tm-text-dim);
  }
  
  /* Persistent Conversion Panel */
  .conversion-panel {
    background: linear-gradient(145deg, var(--tm-surface-2) 0%, var(--tm-surface-1) 100%);
    border: 1px solid rgba(16, 185, 129, 0.15);
    border-radius: 24px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }
  
  .conversion-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient-emerald);
  }
  
  .conversion-panel::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
  
  /* Icon Box with Glow */
  .tm-icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    position: relative;
  }
  
  .tm-icon-box::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: inherit;
    filter: blur(10px);
    opacity: 0.5;
    z-index: -1;
  }
  
  .icon-sm { width: 40px; height: 40px; }
  .icon-md { width: 52px; height: 52px; }
  .icon-lg { width: 64px; height: 64px; }
  
  /* Glowing Status Dot */
  .status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--tm-emerald-500);
    box-shadow: 0 0 10px var(--tm-emerald-500), 0 0 20px var(--tm-emerald-glow);
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  /* Nav Item */
  .tm-nav-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    border-radius: 14px;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  
  .tm-nav-item.active {
    background: linear-gradient(90deg, rgba(16, 185, 129, 0.15) 0%, transparent 100%);
  }
  
  .tm-nav-item.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 24px;
    background: var(--gradient-emerald);
    border-radius: 0 4px 4px 0;
  }
  
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(16, 185, 129, 0.2);
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(16, 185, 129, 0.3);
  }
  
  /* Gradient Text */
  .text-gradient {
    background: linear-gradient(135deg, var(--tm-emerald-300) 0%, var(--tm-emerald-500) 50%, var(--tm-cyan) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

// Asset data with semantic colors
const assets = [
  { symbol: 'SUSD', name: 'Stable USD', balance: 24850.00, color: '#10B981', Icon: CircleDollarSign, badgeType: 'receive' },
  { symbol: 'SET', name: 'Energy Token', balance: 12500.00, color: '#8B5CF6', Icon: Zap, badgeType: 'exchange' },
  { symbol: 'SAUD', name: 'Stable AUD', balance: 5000.00, color: '#F59E0B', Icon: Landmark, badgeType: 'security' },
];

const transactions = [
  { id: 1, type: 'receive', amount: 5000, asset: 'SUSD', from: '0x1234...5678', time: '2 min ago', hash: '0xabc...def' },
  { id: 2, type: 'send', amount: 1200, asset: 'SET', to: '0x8765...4321', time: '15 min ago', hash: '0x123...789' },
  { id: 3, type: 'exchange', amount: 2500, asset: 'SUSD → SET', time: '1 hour ago', hash: '0xdef...abc' },
  { id: 4, type: 'receive', amount: 10000, asset: 'SUSD', from: '0xabcd...efgh', time: '3 hours ago', hash: '0x456...012' },
  { id: 5, type: 'p2p', amount: 500, asset: 'SET', to: 'Merchant Pro', time: '5 hours ago', hash: '0x789...345' },
];

// 3D Floating Elements Component
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating Coin 1 */}
    <div className="float-element float-coin" style={{ top: '15%', right: '10%', animationDelay: '0s' }}>
      <div className="w-full h-full flex items-center justify-center">
        <CircleDollarSign className="w-8 h-8 text-black/30" />
      </div>
    </div>
    {/* Floating Coin 2 */}
    <div className="float-element float-coin" style={{ top: '60%', right: '20%', animationDelay: '-2s', width: 40, height: 40 }}>
      <div className="w-full h-full flex items-center justify-center">
        <Zap className="w-5 h-5 text-black/30" />
      </div>
    </div>
    {/* Floating Ring */}
    <div className="float-element float-ring" style={{ top: '30%', left: '5%' }} />
    {/* Floating Cube */}
    <div className="float-element float-cube" style={{ bottom: '20%', right: '15%', animationDelay: '-1s' }} />
    {/* Small particles */}
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="float-element w-2 h-2 rounded-full"
        style={{
          background: 'rgba(16, 185, 129, 0.4)',
          top: `${15 + Math.random() * 70}%`,
          left: `${10 + Math.random() * 80}%`,
          animation: `float-slow ${8 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
);

// Transaction Type Badge Component
const TxBadge = ({ type }) => {
  const config = {
    receive: { class: 'tm-badge-receive', icon: ArrowDownLeft, label: 'Received' },
    send: { class: 'tm-badge-send', icon: ArrowUpRight, label: 'Sent' },
    exchange: { class: 'tm-badge-exchange', icon: ArrowRightLeft, label: 'Exchanged' },
    p2p: { class: 'tm-badge-p2p', icon: Users, label: 'P2P Trade' },
  };
  const { class: className, icon: Icon, label } = config[type] || config.receive;
  return (
    <span className={`tm-badge ${className}`}>
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
};

export default function TrustMachinesInspiredDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [transferStep, setTransferStep] = useState(1);
  const [transferAmount, setTransferAmount] = useState('');
  const [transferAddress, setTransferAddress] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);
  const [kycLevel, setKycLevel] = useState(2);
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);
  const [accountFrozen, setAccountFrozen] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(50000);
  const [swapFrom, setSwapFrom] = useState('SUSD');
  const [swapTo, setSwapTo] = useState('SET');
  const [swapAmount, setSwapAmount] = useState('1000');
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapComplete, setSwapComplete] = useState(false);

  const walletAddress = '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf';
  const totalBalance = assets.reduce((sum, asset) => sum + asset.balance, 0);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTransfer = () => {
    if (transferStep === 1 && transferAddress && transferAmount) {
      setTransferStep(2);
    } else if (transferStep === 2) {
      setTransferStep(3);
      setTimeout(() => {
        setTransferStep(1);
        setShowTransferModal(false);
        setTransferAmount('');
        setTransferAddress('');
      }, 2500);
    }
  };

  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
      setSwapComplete(true);
      setTimeout(() => setSwapComplete(false), 2000);
    }, 1500);
  };

  const navItems = [
    { id: 'dashboard', label: 'Overview', Icon: BarChart3 },
    { id: 'wallet', label: 'Assets', Icon: Wallet },
    { id: 'trading', label: 'Trading', Icon: ArrowRightLeft },
    { id: 'account', label: 'Security', Icon: ShieldCheck },
    { id: 'settings', label: 'Settings', Icon: Settings },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="bg-atmosphere" />
      
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-72 p-6 flex flex-col fixed h-full z-20 border-r border-emerald-900/30" style={{ background: 'rgba(10, 15, 13, 0.95)', backdropFilter: 'blur(20px)' }}>
          {/* Logo */}
          <div className="flex items-center gap-4 mb-10">
            <div className="tm-icon-box icon-md" style={{ background: 'var(--gradient-emerald)' }}>
              <Gem className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-gradient">StablePay</h1>
              <p className="text-[11px] text-emerald-700 tracking-wider uppercase">Enterprise Platform</p>
            </div>
          </div>

          {/* Quick Balance */}
          <div className="tm-card p-5 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-emerald-700 text-xs font-medium uppercase tracking-wider">Portfolio Value</span>
              <div className="status-dot" />
            </div>
            <p className="font-display text-3xl font-bold text-gradient mb-2">
              ${totalBalance.toLocaleString()}
            </p>
            <div className="flex items-center gap-2">
              <span className="tm-badge tm-badge-receive">
                <TrendingUp className="w-3 h-3" />
                +2.4%
              </span>
              <span className="text-emerald-800 text-xs">24h</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const Icon = item.Icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`tm-nav-item w-full ${activeTab === item.id ? 'active' : ''}`}
                >
                  <Icon className={`w-5 h-5 ${activeTab === item.id ? 'text-emerald-400' : 'text-emerald-700'}`} />
                  <span className={`font-medium ${activeTab === item.id ? 'text-emerald-300' : 'text-emerald-600'}`}>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Security Status Card */}
          <div className="tm-card p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="tm-icon-box icon-sm" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="font-medium text-emerald-300">Secured</p>
                <p className="text-[11px] text-emerald-700">All systems operational</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tm-badge tm-badge-receive text-[10px]">KYC Verified</span>
              <span className="tm-badge tm-badge-p2p text-[10px]">2FA Active</span>
              <span className="tm-badge tm-badge-security text-[10px]">Audited</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-72 p-8 relative">
          <FloatingElements />
          
          {/* Header */}
          <header className="flex items-center justify-between mb-8 animate-fade-up relative z-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">
                {activeTab === 'dashboard' && 'Portfolio Overview'}
                {activeTab === 'wallet' && 'Asset Management'}
                {activeTab === 'trading' && 'Trading Center'}
                {activeTab === 'account' && 'Account Security'}
                {activeTab === 'settings' && 'Platform Settings'}
              </h2>
              <p className="text-emerald-700 text-sm mt-1">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="tm-icon-box icon-sm" style={{ background: 'var(--tm-surface-2)', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                <Bell className="w-5 h-5 text-emerald-500" />
              </button>
              <button className="tm-icon-box icon-sm" style={{ background: 'var(--tm-surface-2)', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                <Search className="w-5 h-5 text-emerald-500" />
              </button>
              <div className="tm-icon-box icon-sm" style={{ background: 'var(--gradient-emerald)' }}>
                <User className="w-5 h-5 text-black" />
              </div>
            </div>
          </header>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-3 gap-6 relative z-10">
              {/* Left Column - Balance & Activity */}
              <div className="col-span-2 space-y-6">
                {/* Hero Balance Card */}
                <div className="tm-card p-8 animate-fade-up">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-emerald-600 text-sm font-medium uppercase tracking-wider">Total Balance</span>
                        <span className="tm-badge tm-badge-receive">
                          <TrendingUp className="w-3 h-3" />
                          +2.4%
                        </span>
                      </div>
                      <h2 className="font-display text-5xl font-bold text-gradient mb-6">
                        ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </h2>
                      <div className="flex gap-3">
                        {assets.map((asset) => {
                          const Icon = asset.Icon;
                          return (
                            <div key={asset.symbol} className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: 'var(--tm-surface-2)' }}>
                              <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: `${asset.color}20` }}>
                                <Icon className="w-4 h-4" style={{ color: asset.color }} />
                              </div>
                              <span className="text-sm text-emerald-300 font-medium">{asset.symbol}</span>
                              <span className="text-sm text-emerald-600">${asset.balance.toLocaleString()}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="status-dot" />
                      <span className="text-xs text-emerald-600">Live</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { Icon: Send, label: 'Send', desc: 'Transfer funds', color: '#3B82F6', badge: 'send', action: () => setShowTransferModal(true) },
                    { Icon: QrCode, label: 'Receive', desc: 'Get payment', color: '#10B981', badge: 'receive', action: () => setShowReceiveModal(true) },
                    { Icon: ArrowRightLeft, label: 'Swap', desc: 'Exchange', color: '#8B5CF6', badge: 'exchange', action: () => setActiveTab('trading') },
                    { Icon: Users, label: 'P2P', desc: 'Trade', color: '#06B6D4', badge: 'p2p', action: () => {} },
                  ].map((action, i) => (
                    <button
                      key={action.label}
                      onClick={action.action}
                      className={`tm-card p-5 text-left group animate-fade-up delay-${i + 1}`}
                    >
                      <div 
                        className="tm-icon-box icon-lg mb-4"
                        style={{ background: `${action.color}15` }}
                      >
                        <action.Icon className="w-7 h-7" style={{ color: action.color }} />
                      </div>
                      <h4 className="font-semibold text-emerald-200 text-lg">{action.label}</h4>
                      <p className="text-emerald-700 text-sm">{action.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Recent Transactions */}
                <div className="tm-card animate-fade-up delay-3">
                  <div className="p-5 border-b border-emerald-900/30 flex items-center justify-between">
                    <h3 className="font-semibold text-emerald-200 flex items-center gap-2">
                      <History className="w-5 h-5 text-emerald-600" />
                      Recent Transactions
                    </h3>
                    <button className="tm-btn-ghost">
                      View All <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="divide-y divide-emerald-900/20">
                    {transactions.slice(0, 4).map((tx) => (
                      <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-emerald-900/10 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`tm-icon-box icon-sm`} style={{ 
                            background: tx.type === 'receive' ? 'rgba(16, 185, 129, 0.15)' :
                                       tx.type === 'send' ? 'rgba(59, 130, 246, 0.15)' :
                                       tx.type === 'exchange' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(6, 182, 212, 0.15)'
                          }}>
                            {tx.type === 'receive' ? <ArrowDownLeft className="w-5 h-5 text-emerald-400" /> :
                             tx.type === 'send' ? <ArrowUpRight className="w-5 h-5 text-blue-400" /> :
                             tx.type === 'exchange' ? <ArrowRightLeft className="w-5 h-5 text-purple-400" /> :
                             <Users className="w-5 h-5 text-cyan-400" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <TxBadge type={tx.type} />
                            </div>
                            <p className="text-xs text-emerald-700">{tx.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${
                            tx.type === 'receive' ? 'text-emerald-400' : 
                            tx.type === 'send' ? 'text-blue-400' : 'text-emerald-200'
                          }`}>
                            {tx.type === 'receive' ? '+' : tx.type === 'send' ? '-' : ''}
                            {tx.amount.toLocaleString()} {tx.asset.split(' ')[0]}
                          </p>
                          <p className="text-xs text-emerald-800 mono">{tx.hash}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Persistent Conversion Panel */}
              <div className="space-y-6">
                {/* Quick Swap Panel */}
                <div className="conversion-panel animate-fade-up delay-2">
                  <h3 className="font-display font-semibold text-emerald-200 text-lg mb-6 flex items-center gap-2">
                    <ArrowRightLeft className="w-5 h-5 text-emerald-500" />
                    Quick Swap
                  </h3>
                  
                  {!swapComplete ? (
                    <>
                      {/* From */}
                      <div className="p-4 rounded-2xl mb-3" style={{ background: 'var(--tm-surface-1)' }}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-emerald-700 text-xs uppercase tracking-wider">From</span>
                          <span className="text-emerald-600 text-xs">Balance: 24,850</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <input
                            type="text"
                            value={swapAmount}
                            onChange={(e) => setSwapAmount(e.target.value)}
                            className="bg-transparent text-3xl font-display font-bold text-emerald-200 outline-none w-24"
                          />
                          <button className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'var(--tm-surface-3)' }}>
                            <CircleDollarSign className="w-5 h-5 text-emerald-400" />
                            <span className="text-emerald-200 font-medium">SUSD</span>
                            <ChevronDown className="w-4 h-4 text-emerald-600" />
                          </button>
                        </div>
                      </div>

                      {/* Swap Button */}
                      <div className="flex justify-center -my-1.5 relative z-10">
                        <button 
                          onClick={() => { const t = swapFrom; setSwapFrom(swapTo); setSwapTo(t); }}
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform hover:scale-110"
                          style={{ background: 'var(--gradient-emerald)', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)' }}
                        >
                          <ArrowRightLeft className="w-5 h-5 text-black" />
                        </button>
                      </div>

                      {/* To */}
                      <div className="p-4 rounded-2xl mb-4" style={{ background: 'var(--tm-surface-1)' }}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-emerald-700 text-xs uppercase tracking-wider">To</span>
                          <span className="text-emerald-600 text-xs">Balance: 12,500</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-display font-bold text-emerald-200">
                            {(Number(swapAmount) * 0.998).toFixed(2)}
                          </span>
                          <button className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'var(--tm-surface-3)' }}>
                            <Zap className="w-5 h-5 text-purple-400" />
                            <span className="text-emerald-200 font-medium">SET</span>
                            <ChevronDown className="w-4 h-4 text-emerald-600" />
                          </button>
                        </div>
                      </div>

                      {/* Rate Info */}
                      <div className="p-3 rounded-xl mb-4" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-emerald-600">Rate</span>
                          <span className="text-emerald-300">1 SUSD = 0.998 SET</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-emerald-600">Fee</span>
                          <span className="text-emerald-400">0.2%</span>
                        </div>
                      </div>

                      <button 
                        onClick={handleSwap}
                        disabled={isSwapping}
                        className="tm-btn-primary w-full"
                      >
                        {isSwapping ? (
                          <><RefreshCw className="w-5 h-5 animate-spin" /> Processing...</>
                        ) : (
                          'Swap Now'
                        )}
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                        <CheckCircle className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h4 className="font-display font-bold text-xl text-emerald-200 mb-2">Swap Complete!</h4>
                      <p className="text-emerald-600">{swapAmount} SUSD → SET</p>
                    </div>
                  )}
                </div>

                {/* Stats Cards */}
                <div className="space-y-4">
                  {[
                    { Icon: Activity, label: 'Today\'s Volume', value: '$12,450', badge: 'receive', change: '+12%' },
                    { Icon: ShieldCheck, label: 'Security Score', value: '98%', badge: 'security', change: 'Excellent' },
                  ].map((stat, i) => (
                    <div key={stat.label} className={`tm-card p-5 animate-fade-up delay-${i + 3}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-emerald-700 text-xs uppercase tracking-wider">{stat.label}</span>
                        <stat.Icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <p className="font-display text-2xl font-bold text-emerald-200 mb-1">{stat.value}</p>
                      <span className={`tm-badge tm-badge-${stat.badge} text-[10px]`}>
                        {stat.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Wallet Tab */}
          {activeTab === 'wallet' && (
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-3 gap-6">
                {/* Assets List */}
                <div className="col-span-2 space-y-4">
                  <h3 className="font-display text-xl font-semibold text-emerald-200 flex items-center gap-2">
                    <Coins className="w-5 h-5 text-emerald-600" />
                    Your Holdings
                  </h3>
                  {assets.map((asset, i) => {
                    const Icon = asset.Icon;
                    return (
                      <div
                        key={asset.symbol}
                        onClick={() => setSelectedAsset(asset)}
                        className={`tm-card p-6 cursor-pointer animate-fade-up delay-${i + 1} ${
                          selectedAsset.symbol === asset.symbol ? 'ring-2 ring-emerald-500/50' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="tm-icon-box icon-lg" style={{ background: `${asset.color}20` }}>
                              <Icon className="w-7 h-7" style={{ color: asset.color }} />
                            </div>
                            <div>
                              <p className="font-display font-bold text-xl text-emerald-200">{asset.symbol}</p>
                              <p className="text-emerald-600">{asset.name}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-display text-2xl font-bold text-emerald-200">
                              ${asset.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </p>
                            <p className="text-emerald-600">
                              {asset.balance.toLocaleString()} {asset.symbol}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--tm-surface-1)' }}>
                            <div
                              className="h-full rounded-full"
                              style={{ 
                                width: `${(asset.balance / totalBalance) * 100}%`,
                                background: `linear-gradient(90deg, ${asset.color}, ${asset.color}80)`
                              }}
                            />
                          </div>
                          <p className="text-xs text-emerald-700 mt-2">
                            {((asset.balance / totalBalance) * 100).toFixed(1)}% of portfolio
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Distribution & Actions */}
                <div className="space-y-6">
                  <div className="tm-card p-6 animate-fade-up delay-3">
                    <h3 className="font-semibold text-emerald-200 mb-6 flex items-center gap-2">
                      <PieChart className="w-5 h-5 text-emerald-600" />
                      Allocation
                    </h3>
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        {(() => {
                          let cumulativePercent = 0;
                          return assets.map((asset) => {
                            const percent = (asset.balance / totalBalance) * 100;
                            const circumference = 2 * Math.PI * 40;
                            const strokeDasharray = `${(percent / 100) * circumference} ${circumference}`;
                            const strokeDashoffset = -cumulativePercent / 100 * circumference;
                            cumulativePercent += percent;
                            return (
                              <circle
                                key={asset.symbol}
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke={asset.color}
                                strokeWidth="16"
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                style={{ filter: `drop-shadow(0 0 6px ${asset.color}40)` }}
                              />
                            );
                          });
                        })()}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-emerald-200">{assets.length}</p>
                        <p className="text-xs text-emerald-700">Assets</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {assets.map((asset) => {
                        const Icon = asset.Icon;
                        return (
                          <div key={asset.symbol} className="flex items-center gap-3">
                            <Icon className="w-4 h-4" style={{ color: asset.color }} />
                            <span className="text-sm text-emerald-500">{asset.symbol}</span>
                            <span className="text-sm text-emerald-300 ml-auto font-medium">
                              {((asset.balance / totalBalance) * 100).toFixed(1)}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-3">
                    <button onClick={() => setShowTransferModal(true)} className="tm-btn-primary flex-1">
                      <Send className="w-4 h-4" /> Send
                    </button>
                    <button onClick={() => setShowReceiveModal(true)} className="tm-btn-secondary flex-1">
                      <QrCode className="w-4 h-4" /> Receive
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Trading Tab */}
          {activeTab === 'trading' && (
            <div className="grid grid-cols-3 gap-6 relative z-10">
              {/* Trading Actions & History */}
              <div className="col-span-2 space-y-6">
                {/* Action Cards */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { Icon: Send, label: 'Send', desc: 'Transfer', color: '#3B82F6', action: () => setShowTransferModal(true) },
                    { Icon: QrCode, label: 'Receive', desc: 'Get paid', color: '#10B981', action: () => setShowReceiveModal(true) },
                    { Icon: Users, label: 'P2P', desc: 'Trade', color: '#06B6D4', action: () => {} },
                    { Icon: Briefcase, label: 'OTC', desc: 'Large trades', color: '#F59E0B', action: () => {} },
                  ].map((action, i) => (
                    <button
                      key={action.label}
                      onClick={action.action}
                      className={`tm-card p-5 text-left group animate-fade-up delay-${i + 1}`}
                    >
                      <div className="tm-icon-box icon-md mb-3" style={{ background: `${action.color}15` }}>
                        <action.Icon className="w-6 h-6" style={{ color: action.color }} />
                      </div>
                      <h4 className="font-semibold text-emerald-200">{action.label}</h4>
                      <p className="text-emerald-700 text-sm">{action.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Transaction History */}
                <div className="tm-card animate-fade-up delay-4">
                  <div className="p-5 border-b border-emerald-900/30 flex items-center justify-between">
                    <h3 className="font-semibold text-emerald-200 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-emerald-600" />
                      Transaction History
                    </h3>
                    <button className="tm-btn-ghost">
                      <Filter className="w-4 h-4" /> Filter
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-xs text-emerald-700 border-b border-emerald-900/20">
                          <th className="p-4 font-medium">Type</th>
                          <th className="p-4 font-medium">Amount</th>
                          <th className="p-4 font-medium">Address</th>
                          <th className="p-4 font-medium">Time</th>
                          <th className="p-4 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-emerald-900/20">
                        {transactions.map((tx) => (
                          <tr key={tx.id} className="hover:bg-emerald-900/10 transition-colors">
                            <td className="p-4">
                              <TxBadge type={tx.type} />
                            </td>
                            <td className="p-4">
                              <span className={`font-semibold ${
                                tx.type === 'receive' ? 'text-emerald-400' : 
                                tx.type === 'send' ? 'text-blue-400' : 'text-emerald-200'
                              }`}>
                                {tx.type === 'receive' ? '+' : tx.type === 'send' ? '-' : ''}
                                {tx.amount.toLocaleString()} {tx.asset.split(' ')[0]}
                              </span>
                            </td>
                            <td className="p-4 text-emerald-600 mono text-sm">{tx.from || tx.to}</td>
                            <td className="p-4 text-emerald-600">{tx.time}</td>
                            <td className="p-4">
                              <span className="tm-badge tm-badge-success text-[10px]">
                                <CheckCircle className="w-3 h-3" /> Complete
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Persistent Conversion Panel */}
              <div className="conversion-panel h-fit animate-fade-up delay-2">
                <h3 className="font-display font-semibold text-emerald-200 text-lg mb-6 flex items-center gap-2">
                  <ArrowRightLeft className="w-5 h-5 text-emerald-500" />
                  Instant Swap
                </h3>
                
                {/* From */}
                <div className="p-4 rounded-2xl mb-3" style={{ background: 'var(--tm-surface-1)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-700 text-xs uppercase tracking-wider">From</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={swapAmount}
                      onChange={(e) => setSwapAmount(e.target.value)}
                      className="bg-transparent text-3xl font-display font-bold text-emerald-200 outline-none w-24"
                    />
                    <button className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'var(--tm-surface-3)' }}>
                      <CircleDollarSign className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-200 font-medium">SUSD</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-center -my-1.5 relative z-10">
                  <button className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-emerald)' }}>
                    <ArrowRightLeft className="w-5 h-5 text-black" />
                  </button>
                </div>

                <div className="p-4 rounded-2xl mb-4" style={{ background: 'var(--tm-surface-1)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-700 text-xs uppercase tracking-wider">To</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-bold text-emerald-200">
                      {(Number(swapAmount) * 0.998).toFixed(2)}
                    </span>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'var(--tm-surface-3)' }}>
                      <Zap className="w-5 h-5 text-purple-400" />
                      <span className="text-emerald-200 font-medium">SET</span>
                    </button>
                  </div>
                </div>

                <button className="tm-btn-primary w-full">
                  Swap Now
                </button>
              </div>
            </div>
          )}

          {/* Account Tab */}
          {activeTab === 'account' && (
            <div className="space-y-6 relative z-10">
              {/* KYC Status */}
              <div className="tm-card p-6 animate-fade-up">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-emerald-200 flex items-center gap-2">
                      <Fingerprint className="w-5 h-5 text-emerald-600" />
                      Identity Verification
                    </h3>
                    <p className="text-emerald-700 text-sm mt-1">Complete verification to unlock higher limits</p>
                  </div>
                  <span className={`tm-badge ${
                    kycLevel === 3 ? 'tm-badge-receive' : kycLevel === 2 ? 'tm-badge-p2p' : 'tm-badge-security'
                  }`}>
                    Level {kycLevel} {kycLevel === 3 ? '• Verified' : kycLevel === 2 ? '• Basic' : '• Pending'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { level: 1, Icon: Mail, label: 'Email', desc: 'Basic verification', limit: '$1,000', badge: 'receive' },
                    { level: 2, Icon: FileCheck, label: 'Document', desc: 'ID verification', limit: '$50,000', badge: 'p2p' },
                    { level: 3, Icon: ScanLine, label: 'Biometric', desc: 'Full verification', limit: 'Unlimited', badge: 'security' },
                  ].map((tier) => (
                    <button
                      key={tier.level}
                      onClick={() => setKycLevel(tier.level)}
                      className={`p-5 rounded-2xl border-2 transition-all text-left ${
                        kycLevel >= tier.level
                          ? 'border-emerald-500/50 bg-emerald-500/5'
                          : 'border-emerald-900/30 hover:border-emerald-800/50'
                      }`}
                      style={{ background: kycLevel >= tier.level ? undefined : 'var(--tm-surface-1)' }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`tm-icon-box icon-sm ${kycLevel >= tier.level ? '' : ''}`} style={{ background: kycLevel >= tier.level ? 'rgba(16, 185, 129, 0.2)' : 'var(--tm-surface-3)' }}>
                          {kycLevel >= tier.level ? (
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <tier.Icon className="w-5 h-5 text-emerald-600" />
                          )}
                        </div>
                        <span className="font-medium text-emerald-200">Level {tier.level}</span>
                      </div>
                      <p className="text-sm text-emerald-600 mb-1">{tier.desc}</p>
                      <p className="text-xs text-emerald-800">Limit: {tier.limit}/day</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Security & Controls */}
              <div className="grid grid-cols-2 gap-6">
                <div className="tm-card p-6 animate-fade-up delay-1">
                  <h3 className="font-semibold text-emerald-200 mb-4 flex items-center gap-2">
                    <Key className="w-5 h-5 text-emerald-600" />
                    Security Settings
                  </h3>
                  <div className="space-y-3">
                    {[
                      { Icon: Smartphone, label: 'Two-Factor Auth', desc: 'Authenticator enabled', enabled: twoFAEnabled, toggle: () => setTwoFAEnabled(!twoFAEnabled) },
                      { Icon: Mail, label: 'Email Verified', desc: 'm***@company.com', enabled: true },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between p-4 rounded-xl" style={{ background: 'var(--tm-surface-1)' }}>
                        <div className="flex items-center gap-3">
                          <div className="tm-icon-box icon-sm" style={{ background: 'var(--tm-surface-3)' }}>
                            <item.Icon className="w-4 h-4 text-emerald-500" />
                          </div>
                          <div>
                            <p className="font-medium text-emerald-200 text-sm">{item.label}</p>
                            <p className="text-xs text-emerald-700">{item.desc}</p>
                          </div>
                        </div>
                        {item.toggle ? (
                          <button
                            onClick={item.toggle}
                            className={`w-12 h-6 rounded-full transition-all ${item.enabled ? '' : ''}`}
                            style={{ background: item.enabled ? 'var(--gradient-emerald)' : 'var(--tm-surface-3)' }}
                          >
                            <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${item.enabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                          </button>
                        ) : (
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tm-card p-6 animate-fade-up delay-2">
                  <h3 className="font-semibold text-emerald-200 mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-emerald-600" />
                    Account Controls
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl" style={{ background: 'var(--tm-surface-1)' }}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-emerald-200 text-sm font-medium">Daily Limit</span>
                        <span className="text-emerald-400 mono text-sm">${dailyLimit.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="1000"
                        value={dailyLimit}
                        onChange={(e) => setDailyLimit(Number(e.target.value))}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer"
                        style={{ background: 'var(--tm-surface-3)' }}
                      />
                    </div>
                    <button
                      onClick={() => setAccountFrozen(!accountFrozen)}
                      className={`w-full p-4 rounded-xl flex items-center justify-between transition-all ${
                        accountFrozen ? 'border-2 border-rose-500/50' : ''
                      }`}
                      style={{ background: accountFrozen ? 'rgba(244, 63, 94, 0.1)' : 'var(--tm-surface-1)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="tm-icon-box icon-sm" style={{ background: accountFrozen ? 'rgba(244, 63, 94, 0.2)' : 'var(--tm-surface-3)' }}>
                          {accountFrozen ? <AlertTriangle className="w-4 h-4 text-rose-400" /> : <Shield className="w-4 h-4 text-emerald-500" />}
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-emerald-200 text-sm">{accountFrozen ? 'Account Frozen' : 'Freeze Account'}</p>
                          <p className="text-xs text-emerald-700">{accountFrozen ? 'Click to restore' : 'Emergency protection'}</p>
                        </div>
                      </div>
                      <span className={`tm-badge ${accountFrozen ? 'tm-badge-error' : 'tm-badge-success'}`}>
                        {accountFrozen ? 'Frozen' : 'Active'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="tm-card p-6 animate-fade-up">
                  <h3 className="font-semibold text-emerald-200 mb-4 flex items-center gap-2">
                    <Moon className="w-5 h-5 text-emerald-600" />
                    Appearance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: 'var(--tm-surface-1)' }}>
                      <div className="flex items-center gap-3">
                        <Moon className="w-5 h-5 text-emerald-500" />
                        <div>
                          <p className="font-medium text-emerald-200 text-sm">Dark Mode</p>
                          <p className="text-xs text-emerald-700">Midnight emerald theme</p>
                        </div>
                      </div>
                      <span className="tm-badge tm-badge-receive">Active</span>
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: 'var(--tm-surface-1)' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-5 h-5 text-emerald-500" />
                        <p className="font-medium text-emerald-200 text-sm">Language</p>
                      </div>
                      <select className="w-full rounded-xl px-4 py-3 text-emerald-200 text-sm outline-none" style={{ background: 'var(--tm-surface-3)', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                        <option>English (US)</option>
                        <option>中文 (Chinese)</option>
                        <option>日本語 (Japanese)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="tm-card p-6 animate-fade-up delay-1">
                  <h3 className="font-semibold text-emerald-200 mb-4 flex items-center gap-2">
                    <Server className="w-5 h-5 text-emerald-600" />
                    Network
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl" style={{ background: 'var(--tm-surface-1)' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <Network className="w-5 h-5 text-emerald-500" />
                        <p className="font-medium text-emerald-200 text-sm">Environment</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="tm-btn-primary flex-1 py-3 text-sm">
                          Mainnet
                        </button>
                        <button className="tm-btn-secondary flex-1 py-3 text-sm">
                          Testnet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-emerald-800 text-xs">
                StablePay v1.0.0 • X. & L. Engineering Pty Ltd • Enterprise Edition
              </p>
            </div>
          )}
        </main>

        {/* Transfer Modal */}
        {showTransferModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="tm-card w-full max-w-md p-8 m-4 animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-emerald-200 flex items-center gap-2">
                  {transferStep === 1 && <><Send className="w-6 h-6 text-blue-400" /> Send Funds</>}
                  {transferStep === 2 && <><FileCheck className="w-6 h-6 text-purple-400" /> Confirm</>}
                  {transferStep === 3 && <><CheckCircle className="w-6 h-6 text-emerald-400" /> Complete</>}
                </h3>
                <button onClick={() => { setShowTransferModal(false); setTransferStep(1); }} className="text-emerald-600 hover:text-emerald-400">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {transferStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-emerald-600 mb-2 block">Asset</label>
                    <select className="tm-input">
                      {assets.map((a) => <option key={a.symbol}>{a.symbol} • Balance: {a.balance.toLocaleString()}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-emerald-600 mb-2 block">Recipient</label>
                    <input
                      type="text"
                      placeholder="0x..."
                      value={transferAddress}
                      onChange={(e) => setTransferAddress(e.target.value)}
                      className="tm-input mono"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-emerald-600 mb-2 block">Amount</label>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      className="tm-input"
                    />
                  </div>
                  <div className="p-4 rounded-xl flex justify-between" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                    <span className="text-emerald-600">Network Fee</span>
                    <span className="text-emerald-400 font-medium">$0.00</span>
                  </div>
                  <button
                    onClick={handleTransfer}
                    disabled={!transferAddress || !transferAmount}
                    className="tm-btn-primary w-full"
                  >
                    Continue
                  </button>
                </div>
              )}

              {transferStep === 2 && (
                <div className="space-y-4">
                  <div className="p-5 rounded-xl space-y-3" style={{ background: 'var(--tm-surface-1)' }}>
                    <div className="flex justify-between">
                      <span className="text-emerald-600">To</span>
                      <span className="text-emerald-200 mono text-sm">{transferAddress || '0x1234...5678'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-600">Amount</span>
                      <span className="text-emerald-200 font-bold">{transferAmount || '1,000'} SUSD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-600">Fee</span>
                      <span className="text-emerald-400">$0.00</span>
                    </div>
                  </div>
                  <button onClick={handleTransfer} className="tm-btn-primary w-full">
                    Confirm & Send
                  </button>
                </div>
              )}

              {transferStep === 3 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-emerald-200 mb-2">Transfer Complete!</h4>
                  <p className="text-emerald-600">{transferAmount || '1,000'} SUSD sent successfully</p>
                  <p className="text-xs text-emerald-800 mono mt-4">Tx: 0xabc123...def789</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Receive Modal */}
        {showReceiveModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="tm-card w-full max-w-md p-8 m-4 animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-emerald-200 flex items-center gap-2">
                  <QrCode className="w-6 h-6 text-emerald-400" /> Receive Funds
                </h3>
                <button onClick={() => setShowReceiveModal(false)} className="text-emerald-600 hover:text-emerald-400">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-2xl p-4 flex items-center justify-center" style={{ background: 'white' }}>
                  <div className="w-full h-full grid grid-cols-10 gap-[1px]">
                    {Array.from({ length: 100 }).map((_, i) => (
                      <div key={i} style={{ background: Math.random() > 0.5 ? '#0A0F0D' : '#fff' }} />
                    ))}
                  </div>
                </div>
                <p className="text-emerald-600 text-sm mb-4">Scan to receive payment</p>
                <div className="p-4 rounded-xl flex items-center justify-between" style={{ background: 'var(--tm-surface-1)' }}>
                  <span className="text-xs mono text-emerald-600 truncate">{walletAddress}</span>
                  <button onClick={() => copyToClipboard(walletAddress)} className="p-2 hover:bg-emerald-900/30 rounded-lg transition-colors">
                    {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-emerald-500" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
