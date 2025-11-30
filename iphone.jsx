import React, { useState } from 'react';
import { Wallet, Send, QrCode, ArrowLeftRight, History, Settings, User, Shield, TrendingUp, Copy, Check, ChevronRight, Bell, ChevronDown, Lock, Smartphone, Mail, Key, AlertTriangle, CheckCircle, X, ArrowUpRight, ArrowDownLeft, Clock, Search, Filter, Home, RefreshCw, LogOut, HelpCircle, FileText, ExternalLink, Zap, Building, Users, Briefcase, CircleDollarSign, Landmark, ShieldCheck, ArrowRightLeft, FileCheck, Scale, Coins, Banknote, Database, Server, Network, Fingerprint, ScanLine, BarChart3, PieChart, Activity, Gem, Star, Sparkles, Globe, Moon, Sun, ChevronLeft, Eye, EyeOff, Scan } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    /* Trust Machines "Midnight Emerald" */
    --tm-deep: #0A0F0D;
    --tm-surface: #0D1512;
    --tm-surface-1: #111A17;
    --tm-surface-2: #152320;
    --tm-surface-3: #1A2D28;
    --tm-surface-elevated: #1E3530;
    
    /* Signature Emerald */
    --tm-emerald-900: #064E3B;
    --tm-emerald-700: #047857;
    --tm-emerald-500: #10B981;
    --tm-emerald-400: #34D399;
    --tm-emerald-300: #6EE7B7;
    --tm-emerald-glow: rgba(16, 185, 129, 0.4);
    
    /* Supporting */
    --tm-cyan: #06B6D4;
    --tm-purple: #8B5CF6;
    --tm-amber: #F59E0B;
    --tm-rose: #F43F5E;
    --tm-blue: #3B82F6;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #0a0a0f;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }
  
  /* iPhone 15 Pro Frame */
  .iphone-frame {
    width: 393px;
    height: 852px;
    background: var(--tm-deep);
    border-radius: 55px;
    position: relative;
    box-shadow: 
      0 0 0 12px #1a1a1a,
      0 0 0 14px #2a2a2a,
      0 50px 100px rgba(0,0,0,0.5),
      0 0 100px rgba(16, 185, 129, 0.1);
    overflow: hidden;
  }
  
  /* Dynamic Island */
  .dynamic-island {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 126px;
    height: 37px;
    background: #000;
    border-radius: 20px;
    z-index: 100;
  }
  
  .dynamic-island::before {
    content: '';
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #0a3d2e 0%, #064E3B 100%);
    border-radius: 50%;
  }
  
  /* Status Bar */
  .status-bar {
    height: 54px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 28px 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--tm-emerald-300);
  }
  
  /* Scroll Content */
  .scroll-content {
    height: calc(100% - 54px - 88px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .scroll-content::-webkit-scrollbar { display: none; }
  
  /* Tab Bar */
  .tab-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 88px;
    background: rgba(13, 21, 18, 0.95);
    backdrop-filter: blur(20px);
    border-top: 0.5px solid rgba(16, 185, 129, 0.15);
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 34px;
  }
  
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 12px;
    position: relative;
  }
  
  .tab-item.active::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: var(--tm-emerald-400);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--tm-emerald-400);
  }
  
  .tab-item span { font-size: 10px; font-weight: 500; }
  
  /* Animations */
  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 10px var(--tm-emerald-glow); }
    50% { box-shadow: 0 0 20px var(--tm-emerald-glow), 0 0 30px rgba(16, 185, 129, 0.2); }
  }
  
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  
  .animate-slide-up { animation: slideUp 0.35s cubic-bezier(0.32, 0.72, 0, 1); }
  .animate-fade-in { animation: fadeIn 0.25s ease-out; }
  
  /* iOS Sheet */
  .ios-sheet {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--tm-surface-1);
    border-radius: 20px 20px 0 0;
    z-index: 200;
    border-top: 1px solid rgba(16, 185, 129, 0.15);
  }
  
  .sheet-handle {
    width: 36px;
    height: 5px;
    background: rgba(16, 185, 129, 0.3);
    border-radius: 3px;
    margin: 8px auto 16px;
  }
  
  .ios-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
    z-index: 150;
  }
  
  /* TM Card */
  .tm-card {
    background: linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.04) 50%, transparent 100%);
    border: 1px solid rgba(16, 185, 129, 0.12);
    border-radius: 20px;
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
  
  /* 3D Tactile Buttons */
  .tm-btn-primary {
    background: linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%);
    border: none;
    border-radius: 14px;
    padding: 14px 24px;
    color: #000;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    box-shadow: 0 4px 0 #047857, 0 6px 20px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255,255,255,0.2);
    transition: all 0.15s ease;
  }
  
  .tm-btn-primary:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #047857, 0 4px 15px rgba(16, 185, 129, 0.3);
  }
  
  .tm-btn-primary:disabled { opacity: 0.5; transform: none; }
  
  .tm-btn-secondary {
    background: var(--tm-surface-2);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 14px;
    padding: 14px 24px;
    color: var(--tm-emerald-400);
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    box-shadow: 0 4px 0 rgba(0,0,0,0.3);
    transition: all 0.15s ease;
  }
  
  .tm-btn-secondary:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 rgba(0,0,0,0.3);
  }
  
  /* Semantic Badges */
  .tm-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 11px;
    font-weight: 600;
  }
  
  .tm-badge-send { background: rgba(59, 130, 246, 0.15); color: #60A5FA; border: 1px solid rgba(59, 130, 246, 0.2); }
  .tm-badge-receive { background: rgba(16, 185, 129, 0.15); color: #34D399; border: 1px solid rgba(16, 185, 129, 0.2); }
  .tm-badge-exchange { background: rgba(139, 92, 246, 0.15); color: #A78BFA; border: 1px solid rgba(139, 92, 246, 0.2); }
  .tm-badge-security { background: rgba(245, 158, 11, 0.15); color: #FBBF24; border: 1px solid rgba(245, 158, 11, 0.2); }
  .tm-badge-p2p { background: rgba(6, 182, 212, 0.15); color: #22D3EE; border: 1px solid rgba(6, 182, 212, 0.2); }
  .tm-badge-success { background: rgba(16, 185, 129, 0.15); color: #34D399; border: 1px solid rgba(16, 185, 129, 0.2); }
  .tm-badge-error { background: rgba(244, 63, 94, 0.15); color: #FB7185; border: 1px solid rgba(244, 63, 94, 0.2); }
  
  /* Input */
  .tm-input {
    background: var(--tm-surface-2);
    border: 2px solid rgba(16, 185, 129, 0.1);
    border-radius: 14px;
    padding: 14px 16px;
    color: #F0FDF4;
    font-size: 16px;
    width: 100%;
    outline: none;
    transition: all 0.2s ease;
  }
  
  .tm-input:focus {
    border-color: var(--tm-emerald-500);
    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
  }
  
  .tm-input::placeholder { color: #166534; }
  
  /* iOS List Item */
  .ios-list-item {
    display: flex;
    align-items: center;
    padding: 14px 16px;
    background: var(--tm-surface-1);
    border-bottom: 0.5px solid rgba(16, 185, 129, 0.1);
  }
  
  .ios-list-item:last-child { border-bottom: none; }
  
  /* Status Dot */
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--tm-emerald-500);
    box-shadow: 0 0 10px var(--tm-emerald-500);
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  /* Gradient Text */
  .text-gradient {
    background: linear-gradient(135deg, #6EE7B7 0%, #10B981 50%, #06B6D4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* Floating Elements */
  .float-coin {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: float 4s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }
  
  .float-ring {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 2px solid rgba(16, 185, 129, 0.2);
    border-radius: 50%;
    animation: spin 20s linear infinite;
    pointer-events: none;
  }
  
  /* Conversion Panel */
  .conversion-panel {
    background: linear-gradient(145deg, var(--tm-surface-2) 0%, var(--tm-surface-1) 100%);
    border: 1px solid rgba(16, 185, 129, 0.15);
    border-radius: 20px;
    padding: 20px;
    position: relative;
  }
  
  .conversion-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #10B981, transparent);
    border-radius: 1px;
  }
`;

// Data
const assets = [
  { symbol: 'SUSD', name: 'Stable USD', balance: 24850.00, color: '#10B981', Icon: CircleDollarSign },
  { symbol: 'SET', name: 'Energy Token', balance: 12500.00, color: '#8B5CF6', Icon: Zap },
  { symbol: 'SAUD', name: 'Stable AUD', balance: 5000.00, color: '#F59E0B', Icon: Landmark },
];

const transactions = [
  { id: 1, type: 'receive', amount: 5000, asset: 'SUSD', from: '0x1234...5678', time: '2 min ago', hash: '0xabc...def' },
  { id: 2, type: 'send', amount: 1200, asset: 'SET', to: '0x8765...4321', time: '15 min ago', hash: '0x123...789' },
  { id: 3, type: 'exchange', amount: 2500, asset: 'SUSD → SET', time: '1 hour ago', hash: '0xdef...abc' },
  { id: 4, type: 'receive', amount: 10000, asset: 'SUSD', from: '0xabcd...efgh', time: '3 hours ago', hash: '0x456...012' },
  { id: 5, type: 'p2p', amount: 500, asset: 'SET', to: 'CryptoWhale', time: '5 hours ago', hash: '0x789...345' },
];

const p2pOrders = [
  { id: 1, merchant: 'CryptoWhale', rating: 4.9, trades: 1250, type: 'buy', price: 1.001, amount: 5000, asset: 'SUSD' },
  { id: 2, merchant: 'DiamondHands', rating: 4.8, trades: 890, type: 'sell', price: 0.999, amount: 3000, asset: 'SUSD' },
  { id: 3, merchant: 'MoonTrader', rating: 4.7, trades: 567, type: 'buy', price: 1.002, amount: 10000, asset: 'SET' },
];

// Badge Component
const TxBadge = ({ type }) => {
  const config = {
    receive: { class: 'tm-badge-receive', icon: ArrowDownLeft, label: 'Received' },
    send: { class: 'tm-badge-send', icon: ArrowUpRight, label: 'Sent' },
    exchange: { class: 'tm-badge-exchange', icon: ArrowRightLeft, label: 'Swapped' },
    p2p: { class: 'tm-badge-p2p', icon: Users, label: 'P2P' },
  };
  const { class: className, icon: Icon, label } = config[type] || config.receive;
  return (
    <span className={`tm-badge ${className}`}>
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
};

export default function iPhoneTrustMachinesEdition() {
  const [activeTab, setActiveTab] = useState('home');
  const [showSendSheet, setShowSendSheet] = useState(false);
  const [showReceiveSheet, setShowReceiveSheet] = useState(false);
  const [showSwapSheet, setShowSwapSheet] = useState(false);
  const [showP2PSheet, setShowP2PSheet] = useState(false);
  const [sendStep, setSendStep] = useState(1);
  const [sendAmount, setSendAmount] = useState('');
  const [sendAddress, setSendAddress] = useState('');
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);
  const [balanceHidden, setBalanceHidden] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Swap state
  const [swapAmount, setSwapAmount] = useState('1000');
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapComplete, setSwapComplete] = useState(false);
  
  // Security state
  const [kycLevel, setKycLevel] = useState(2);
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);
  const [accountFrozen, setAccountFrozen] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(50000);
  
  // Settings state
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [network, setNetwork] = useState('mainnet');

  const totalBalance = assets.reduce((sum, a) => sum + a.balance, 0);
  const walletAddress = '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf';

  const copyAddress = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = () => {
    if (sendStep < 3) {
      setSendStep(sendStep + 1);
    } else {
      setTimeout(() => {
        setShowSendSheet(false);
        setSendStep(1);
        setSendAmount('');
        setSendAddress('');
      }, 2000);
    }
  };

  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
      setSwapComplete(true);
      setTimeout(() => {
        setSwapComplete(false);
        setShowSwapSheet(false);
      }, 1500);
    }, 1500);
  };

  const tabs = [
    { id: 'home', label: 'Home', Icon: Home },
    { id: 'wallet', label: 'Assets', Icon: Wallet },
    { id: 'trade', label: 'Trade', Icon: ArrowRightLeft },
    { id: 'security', label: 'Security', Icon: ShieldCheck },
    { id: 'settings', label: 'Settings', Icon: Settings },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="iphone-frame">
        <div className="dynamic-island" />
        
        {/* Status Bar */}
        <div className="status-bar">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
              <path d="M1 4C1 3.45 1.45 3 2 3H3C3.55 3 4 3.45 4 4V11C4 11.55 3.55 12 3 12H2C1.45 12 1 11.55 1 11V4Z"/>
              <path d="M6 2C6 1.45 6.45 1 7 1H8C8.55 1 9 1.45 9 2V11C9 11.55 8.55 12 8 12H7C6.45 12 6 11.55 6 11V2Z"/>
              <path d="M11 0.5C11 0.22 11.22 0 11.5 0H13.5C13.78 0 14 0.22 14 0.5V11C14 11.55 13.55 12 13 12H12C11.45 12 11 11.55 11 11V0.5Z"/>
            </svg>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
              <path d="M8.5 2.5C10.8 2.5 12.9 3.4 14.4 4.9L15.8 3.5C13.9 1.6 11.3 0.5 8.5 0.5C5.7 0.5 3.1 1.6 1.2 3.5L2.6 4.9C4.1 3.4 6.2 2.5 8.5 2.5Z"/>
            </svg>
            <svg width="27" height="13" viewBox="0 0 27 13" fill="currentColor">
              <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="currentColor" strokeOpacity="0.35" fill="none"/>
              <rect x="2" y="2" width="20" height="9" rx="2"/>
            </svg>
          </div>
        </div>

        {/* Scroll Content */}
        <div className="scroll-content">
          {/* HOME TAB */}
          {activeTab === 'home' && (
            <div className="p-5 animate-fade-in">
              {/* Balance Card */}
              <div className="tm-card p-5 mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span style={{ color: '#047857', fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>TOTAL BALANCE</span>
                  <div className="flex items-center gap-2">
                    <div className="status-dot" />
                    <button onClick={() => setBalanceHidden(!balanceHidden)} className="p-1">
                      {balanceHidden ? <EyeOff className="w-4 h-4" style={{ color: '#047857' }} /> : <Eye className="w-4 h-4" style={{ color: '#047857' }} />}
                    </button>
                  </div>
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-gradient" style={{ fontSize: 38, fontWeight: 700 }}>
                    {balanceHidden ? '••••••' : `$${totalBalance.toLocaleString()}`}
                  </span>
                  <span className="tm-badge tm-badge-receive">
                    <TrendingUp className="w-3 h-3" /> +2.4%
                  </span>
                </div>
                
                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { Icon: ArrowUpRight, label: 'Send', color: '#3B82F6', action: () => setShowSendSheet(true) },
                    { Icon: ArrowDownLeft, label: 'Receive', color: '#10B981', action: () => setShowReceiveSheet(true) },
                    { Icon: ArrowRightLeft, label: 'Swap', color: '#8B5CF6', action: () => setShowSwapSheet(true) },
                    { Icon: Users, label: 'P2P', color: '#06B6D4', action: () => setShowP2PSheet(true) },
                  ].map((action) => (
                    <button key={action.label} onClick={action.action} className="flex flex-col items-center gap-2 py-3 rounded-2xl" style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${action.color}15` }}>
                        <action.Icon className="w-5 h-5" style={{ color: action.color }} />
                      </div>
                      <span style={{ fontSize: 11, color: '#34D399', fontWeight: 500 }}>{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Assets */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-3 px-1">
                  <span style={{ fontSize: 18, fontWeight: 600, color: '#F0FDF4' }}>Assets</span>
                  <button style={{ color: '#10B981', fontSize: 13, fontWeight: 500 }}>See All</button>
                </div>
                <div className="tm-card overflow-hidden">
                  {assets.map((asset) => (
                    <div key={asset.symbol} className="ios-list-item" onClick={() => setSelectedAsset(asset)}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mr-3" style={{ background: `${asset.color}15` }}>
                        <asset.Icon className="w-5 h-5" style={{ color: asset.color }} />
                      </div>
                      <div className="flex-1">
                        <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 16 }}>{asset.symbol}</p>
                        <p style={{ color: '#047857', fontSize: 13 }}>{asset.name}</p>
                      </div>
                      <div className="text-right">
                        <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 16 }}>${asset.balance.toLocaleString()}</p>
                        <p style={{ color: '#047857', fontSize: 13 }}>{((asset.balance / totalBalance) * 100).toFixed(1)}%</p>
                      </div>
                      <ChevronRight className="w-5 h-5 ml-2" style={{ color: '#064E3B' }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Transactions */}
              <div>
                <div className="flex items-center justify-between mb-3 px-1">
                  <span style={{ fontSize: 18, fontWeight: 600, color: '#F0FDF4' }}>Recent Activity</span>
                  <button style={{ color: '#10B981', fontSize: 13, fontWeight: 500 }}>See All</button>
                </div>
                <div className="tm-card overflow-hidden">
                  {transactions.slice(0, 4).map((tx) => (
                    <div key={tx.id} className="ios-list-item">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{ background: tx.type === 'receive' ? 'rgba(16, 185, 129, 0.15)' : tx.type === 'send' ? 'rgba(59, 130, 246, 0.15)' : tx.type === 'exchange' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(6, 182, 212, 0.15)' }}>
                        {tx.type === 'receive' ? <ArrowDownLeft className="w-5 h-5" style={{ color: '#34D399' }} /> : tx.type === 'send' ? <ArrowUpRight className="w-5 h-5" style={{ color: '#60A5FA' }} /> : tx.type === 'exchange' ? <ArrowRightLeft className="w-5 h-5" style={{ color: '#A78BFA' }} /> : <Users className="w-5 h-5" style={{ color: '#22D3EE' }} />}
                      </div>
                      <div className="flex-1">
                        <TxBadge type={tx.type} />
                        <p style={{ color: '#047857', fontSize: 12, marginTop: 2 }}>{tx.time}</p>
                      </div>
                      <div className="text-right">
                        <p style={{ fontWeight: 600, fontSize: 15, color: tx.type === 'receive' ? '#34D399' : tx.type === 'send' ? '#60A5FA' : '#F0FDF4' }}>
                          {tx.type === 'receive' ? '+' : tx.type === 'send' ? '-' : ''}{tx.amount.toLocaleString()}
                        </p>
                        <p style={{ color: '#047857', fontSize: 11 }}>{tx.asset.split(' ')[0]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* WALLET TAB */}
          {activeTab === 'wallet' && (
            <div className="p-5 animate-fade-in">
              <h1 className="text-gradient" style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Assets</h1>
              
              {/* Portfolio Card */}
              <div className="tm-card p-5 mb-5">
                <p style={{ color: '#047857', fontSize: 12, marginBottom: 4, letterSpacing: 1 }}>PORTFOLIO VALUE</p>
                <p className="text-gradient" style={{ fontSize: 34, fontWeight: 700 }}>${totalBalance.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="tm-badge tm-badge-receive"><TrendingUp className="w-3 h-3" /> +$985.20</span>
                  <span style={{ color: '#047857', fontSize: 12 }}>Today</span>
                </div>
              </div>

              {/* Allocation Chart */}
              <div className="tm-card p-5 mb-5">
                <p style={{ fontSize: 15, fontWeight: 600, color: '#F0FDF4', marginBottom: 16 }}>Allocation</p>
                <div className="flex gap-1 h-3 rounded-full overflow-hidden mb-4">
                  {assets.map((asset) => (
                    <div key={asset.symbol} style={{ width: `${(asset.balance / totalBalance) * 100}%`, background: asset.color, boxShadow: `0 0 10px ${asset.color}40` }} />
                  ))}
                </div>
                <div className="flex justify-between">
                  {assets.map((asset) => (
                    <div key={asset.symbol} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: asset.color, boxShadow: `0 0 6px ${asset.color}40` }} />
                      <span style={{ color: '#34D399', fontSize: 12 }}>{asset.symbol} {((asset.balance / totalBalance) * 100).toFixed(0)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assets List */}
              <div className="tm-card overflow-hidden">
                {assets.map((asset) => (
                  <div key={asset.symbol} className="p-4 border-b border-emerald-900/20 last:border-b-0">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3" style={{ background: `${asset.color}15` }}>
                        <asset.Icon className="w-6 h-6" style={{ color: asset.color }} />
                      </div>
                      <div className="flex-1">
                        <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 17 }}>{asset.name}</p>
                        <p style={{ color: '#047857', fontSize: 14 }}>{asset.balance.toLocaleString()} {asset.symbol}</p>
                      </div>
                      <p style={{ fontWeight: 700, color: '#F0FDF4', fontSize: 18 }}>${asset.balance.toLocaleString()}</p>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                      <div className="h-full rounded-full" style={{ width: `${(asset.balance / totalBalance) * 100}%`, background: `linear-gradient(90deg, ${asset.color}, ${asset.color}80)`, boxShadow: `0 0 10px ${asset.color}40` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TRADE TAB */}
          {activeTab === 'trade' && (
            <div className="p-5 animate-fade-in">
              <h1 className="text-gradient" style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Trade</h1>
              
              {/* Trade Actions */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { Icon: Send, label: 'Send', desc: 'Transfer funds', color: '#3B82F6', action: () => setShowSendSheet(true) },
                  { Icon: QrCode, label: 'Receive', desc: 'Get payment', color: '#10B981', action: () => setShowReceiveSheet(true) },
                  { Icon: ArrowRightLeft, label: 'Swap', desc: 'Exchange', color: '#8B5CF6', action: () => setShowSwapSheet(true) },
                  { Icon: Users, label: 'P2P', desc: 'Peer trade', color: '#06B6D4', action: () => setShowP2PSheet(true) },
                ].map((action) => (
                  <button key={action.label} onClick={action.action} className="tm-card p-4 text-left">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: `${action.color}15` }}>
                      <action.Icon className="w-6 h-6" style={{ color: action.color }} />
                    </div>
                    <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 16 }}>{action.label}</p>
                    <p style={{ color: '#047857', fontSize: 13 }}>{action.desc}</p>
                  </button>
                ))}
              </div>

              {/* Quick Swap Panel */}
              <div className="conversion-panel mb-5">
                <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 16, marginBottom: 16 }}>Quick Swap</p>
                <div className="p-4 rounded-xl mb-3" style={{ background: 'var(--tm-surface)' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span style={{ color: '#047857', fontSize: 11, letterSpacing: 1 }}>FROM</span>
                    <span style={{ color: '#047857', fontSize: 11 }}>Bal: 24,850</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: 26, fontWeight: 700, color: '#F0FDF4' }}>{swapAmount}</span>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'var(--tm-surface-2)' }}>
                      <CircleDollarSign className="w-4 h-4" style={{ color: '#10B981' }} />
                      <span style={{ color: '#F0FDF4', fontWeight: 600, fontSize: 14 }}>SUSD</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981, #059669)', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}>
                    <ArrowRightLeft className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="p-4 rounded-xl mb-4" style={{ background: 'var(--tm-surface)' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span style={{ color: '#047857', fontSize: 11, letterSpacing: 1 }}>TO</span>
                    <span style={{ color: '#047857', fontSize: 11 }}>Bal: 12,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: 26, fontWeight: 700, color: '#F0FDF4' }}>{(Number(swapAmount) * 0.998).toFixed(2)}</span>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'var(--tm-surface-2)' }}>
                      <Zap className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                      <span style={{ color: '#F0FDF4', fontWeight: 600, fontSize: 14 }}>SET</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-xl mb-4" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                  <div className="flex justify-between text-sm mb-1">
                    <span style={{ color: '#047857' }}>Rate</span>
                    <span style={{ color: '#34D399' }}>1 SUSD = 0.998 SET</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: '#047857' }}>Fee</span>
                    <span style={{ color: '#34D399' }}>0.2%</span>
                  </div>
                </div>
                <button onClick={() => setShowSwapSheet(true)} className="tm-btn-primary">Swap Now</button>
              </div>

              {/* Recent Trades */}
              <div className="tm-card overflow-hidden">
                <div className="p-4 border-b border-emerald-900/20">
                  <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 15 }}>Recent Trades</p>
                </div>
                {transactions.slice(0, 3).map((tx) => (
                  <div key={tx.id} className="ios-list-item">
                    <TxBadge type={tx.type} />
                    <div className="flex-1 ml-3">
                      <p style={{ color: '#047857', fontSize: 12 }}>{tx.time}</p>
                    </div>
                    <p style={{ fontWeight: 600, fontSize: 14, color: tx.type === 'receive' ? '#34D399' : tx.type === 'send' ? '#60A5FA' : '#F0FDF4' }}>
                      {tx.type === 'receive' ? '+' : tx.type === 'send' ? '-' : ''}{tx.amount.toLocaleString()} {tx.asset.split(' ')[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === 'security' && (
            <div className="p-5 animate-fade-in">
              <h1 className="text-gradient" style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Security</h1>
              
              {/* KYC Level */}
              <div className="tm-card p-5 mb-5">
                <div className="flex items-center justify-between mb-4">
                  <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 16 }}>Identity Verification</p>
                  <span className={`tm-badge ${kycLevel === 3 ? 'tm-badge-receive' : kycLevel === 2 ? 'tm-badge-p2p' : 'tm-badge-security'}`}>Level {kycLevel}</span>
                </div>
                <div className="space-y-3">
                  {[
                    { level: 1, Icon: Mail, label: 'Email', limit: '$1,000/day' },
                    { level: 2, Icon: FileCheck, label: 'Document', limit: '$50,000/day' },
                    { level: 3, Icon: ScanLine, label: 'Biometric', limit: 'Unlimited' },
                  ].map((tier) => (
                    <button key={tier.level} onClick={() => setKycLevel(tier.level)} className={`w-full p-4 rounded-xl flex items-center justify-between border-2 transition-all ${kycLevel >= tier.level ? 'border-emerald-500/50' : 'border-transparent'}`} style={{ background: kycLevel >= tier.level ? 'rgba(16, 185, 129, 0.1)' : 'var(--tm-surface)' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: kycLevel >= tier.level ? 'rgba(16, 185, 129, 0.2)' : 'var(--tm-surface-2)' }}>
                          {kycLevel >= tier.level ? <CheckCircle className="w-5 h-5" style={{ color: '#34D399' }} /> : <tier.Icon className="w-5 h-5" style={{ color: '#047857' }} />}
                        </div>
                        <div className="text-left">
                          <p style={{ fontWeight: 500, color: '#F0FDF4', fontSize: 15 }}>Level {tier.level}: {tier.label}</p>
                          <p style={{ color: '#047857', fontSize: 12 }}>Limit: {tier.limit}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5" style={{ color: '#047857' }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Security Settings */}
              <div className="tm-card overflow-hidden mb-5">
                <div className="p-4 border-b border-emerald-900/20">
                  <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 15 }}>Security Settings</p>
                </div>
                
                {/* 2FA Toggle */}
                <div className="ios-list-item">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                    <Smartphone className="w-5 h-5" style={{ color: '#34D399' }} />
                  </div>
                  <div className="flex-1">
                    <p style={{ fontWeight: 500, color: '#F0FDF4', fontSize: 15 }}>Two-Factor Auth</p>
                    <p style={{ color: '#047857', fontSize: 12 }}>Authenticator app</p>
                  </div>
                  <button onClick={() => setTwoFAEnabled(!twoFAEnabled)} className="w-12 h-7 rounded-full transition-all" style={{ background: twoFAEnabled ? 'linear-gradient(135deg, #10B981, #059669)' : 'var(--tm-surface-2)' }}>
                    <div className="w-6 h-6 rounded-full bg-white shadow transition-transform" style={{ transform: twoFAEnabled ? 'translateX(22px)' : 'translateX(2px)' }} />
                  </button>
                </div>

                {/* Daily Limit */}
                <div className="p-4 border-b border-emerald-900/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
                        <Scale className="w-5 h-5" style={{ color: '#FBBF24' }} />
                      </div>
                      <div>
                        <p style={{ fontWeight: 500, color: '#F0FDF4', fontSize: 15 }}>Daily Limit</p>
                        <p style={{ color: '#047857', fontSize: 12 }}>Max transaction amount</p>
                      </div>
                    </div>
                    <span style={{ color: '#34D399', fontWeight: 600, fontSize: 15 }}>${dailyLimit.toLocaleString()}</span>
                  </div>
                  <input type="range" min="1000" max="100000" step="1000" value={dailyLimit} onChange={(e) => setDailyLimit(Number(e.target.value))} className="w-full h-2 rounded-full appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, #10B981 0%, #10B981 ${(dailyLimit - 1000) / 990}%, var(--tm-surface-2) ${(dailyLimit - 1000) / 990}%, var(--tm-surface-2) 100%)` }} />
                </div>

                {/* Account Freeze */}
                <button onClick={() => setAccountFrozen(!accountFrozen)} className="ios-list-item w-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{ background: accountFrozen ? 'rgba(244, 63, 94, 0.15)' : 'rgba(16, 185, 129, 0.15)' }}>
                    {accountFrozen ? <AlertTriangle className="w-5 h-5" style={{ color: '#FB7185' }} /> : <Shield className="w-5 h-5" style={{ color: '#34D399' }} />}
                  </div>
                  <div className="flex-1 text-left">
                    <p style={{ fontWeight: 500, color: '#F0FDF4', fontSize: 15 }}>{accountFrozen ? 'Account Frozen' : 'Freeze Account'}</p>
                    <p style={{ color: '#047857', fontSize: 12 }}>{accountFrozen ? 'Tap to restore access' : 'Emergency protection'}</p>
                  </div>
                  <span className={`tm-badge ${accountFrozen ? 'tm-badge-error' : 'tm-badge-success'}`}>{accountFrozen ? 'Frozen' : 'Active'}</span>
                </button>
              </div>

              {/* Security Score */}
              <div className="tm-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 16 }}>Security Score</p>
                  <span className="tm-badge tm-badge-receive">Excellent</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 100 100" className="transform -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--tm-surface-2)" strokeWidth="8" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="url(#scoreGrad)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${98 * 2.51} 251`} />
                      <defs>
                        <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span style={{ fontSize: 20, fontWeight: 700, color: '#34D399' }}>98%</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" style={{ color: '#34D399' }} /><span style={{ color: '#34D399', fontSize: 13 }}>2FA Enabled</span></div>
                    <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" style={{ color: '#34D399' }} /><span style={{ color: '#34D399', fontSize: 13 }}>KYC Level {kycLevel}</span></div>
                    <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" style={{ color: '#34D399' }} /><span style={{ color: '#34D399', fontSize: 13 }}>Email Verified</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className="p-5 animate-fade-in">
              <h1 className="text-gradient" style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Settings</h1>
              
              {/* Profile */}
              <div className="tm-card p-5 mb-5 flex items-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mr-4" style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
                  <User className="w-7 h-7 text-black" />
                </div>
                <div className="flex-1">
                  <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 17 }}>Momo</p>
                  <p style={{ color: '#047857', fontSize: 13 }}>Verified Account</p>
                </div>
                <span className="tm-badge tm-badge-receive">KYC {kycLevel}</span>
              </div>

              {/* Appearance */}
              <div className="mb-4">
                <p style={{ color: '#047857', fontSize: 12, marginBottom: 8, paddingLeft: 4, letterSpacing: 1 }}>APPEARANCE</p>
                <div className="tm-card overflow-hidden">
                  <div className="ios-list-item">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3" style={{ background: 'rgba(139, 92, 246, 0.15)' }}>
                      <Moon className="w-4 h-4" style={{ color: '#A78BFA' }} />
                    </div>
                    <p style={{ color: '#F0FDF4', fontSize: 15, flex: 1 }}>Dark Mode</p>
                    <button onClick={() => setDarkMode(!darkMode)} className="w-12 h-7 rounded-full" style={{ background: darkMode ? 'linear-gradient(135deg, #10B981, #059669)' : 'var(--tm-surface-2)' }}>
                      <div className="w-6 h-6 rounded-full bg-white shadow" style={{ transform: darkMode ? 'translateX(22px)' : 'translateX(2px)', transition: 'transform 0.2s' }} />
                    </button>
                  </div>
                  <div className="ios-list-item">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3" style={{ background: 'rgba(6, 182, 212, 0.15)' }}>
                      <Globe className="w-4 h-4" style={{ color: '#22D3EE' }} />
                    </div>
                    <p style={{ color: '#F0FDF4', fontSize: 15, flex: 1 }}>Language</p>
                    <div className="flex items-center gap-1">
                      <span style={{ color: '#047857', fontSize: 14 }}>English</span>
                      <ChevronRight className="w-4 h-4" style={{ color: '#047857' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Network */}
              <div className="mb-4">
                <p style={{ color: '#047857', fontSize: 12, marginBottom: 8, paddingLeft: 4, letterSpacing: 1 }}>NETWORK</p>
                <div className="tm-card overflow-hidden">
                  <div className="ios-list-item">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                      <Server className="w-4 h-4" style={{ color: '#34D399' }} />
                    </div>
                    <p style={{ color: '#F0FDF4', fontSize: 15, flex: 1 }}>Environment</p>
                    <div className="flex gap-2">
                      <button onClick={() => setNetwork('mainnet')} className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: network === 'mainnet' ? 'linear-gradient(135deg, #10B981, #059669)' : 'var(--tm-surface-2)', color: network === 'mainnet' ? '#000' : '#047857' }}>Mainnet</button>
                      <button onClick={() => setNetwork('testnet')} className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: network === 'testnet' ? 'linear-gradient(135deg, #10B981, #059669)' : 'var(--tm-surface-2)', color: network === 'testnet' ? '#000' : '#047857' }}>Testnet</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="mb-4">
                <p style={{ color: '#047857', fontSize: 12, marginBottom: 8, paddingLeft: 4, letterSpacing: 1 }}>NOTIFICATIONS</p>
                <div className="tm-card overflow-hidden">
                  <div className="ios-list-item">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
                      <Bell className="w-4 h-4" style={{ color: '#FBBF24' }} />
                    </div>
                    <p style={{ color: '#F0FDF4', fontSize: 15, flex: 1 }}>Push Notifications</p>
                    <button onClick={() => setNotifications(!notifications)} className="w-12 h-7 rounded-full" style={{ background: notifications ? 'linear-gradient(135deg, #10B981, #059669)' : 'var(--tm-surface-2)' }}>
                      <div className="w-6 h-6 rounded-full bg-white shadow" style={{ transform: notifications ? 'translateX(22px)' : 'translateX(2px)', transition: 'transform 0.2s' }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="mb-4">
                <p style={{ color: '#047857', fontSize: 12, marginBottom: 8, paddingLeft: 4, letterSpacing: 1 }}>ABOUT</p>
                <div className="tm-card overflow-hidden">
                  <div className="ios-list-item">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                      <HelpCircle className="w-4 h-4" style={{ color: '#34D399' }} />
                    </div>
                    <span style={{ color: '#F0FDF4', fontSize: 15, flex: 1 }}>Help Center</span>
                    <ChevronRight className="w-5 h-5" style={{ color: '#047857' }} />
                  </div>
                  <div className="ios-list-item">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                      <FileText className="w-4 h-4" style={{ color: '#34D399' }} />
                    </div>
                    <span style={{ color: '#F0FDF4', fontSize: 15, flex: 1 }}>Terms of Service</span>
                    <ChevronRight className="w-5 h-5" style={{ color: '#047857' }} />
                  </div>
                </div>
              </div>

              <p className="text-center mt-6" style={{ color: '#064E3B', fontSize: 11 }}>SparkToken v1.0.0 • X. & L. Engineering Pty Ltd</p>
            </div>
          )}
        </div>

        {/* Tab Bar */}
        <div className="tab-bar">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}>
              <tab.Icon className="w-6 h-6" style={{ color: activeTab === tab.id ? '#34D399' : '#064E3B' }} />
              <span style={{ color: activeTab === tab.id ? '#34D399' : '#064E3B' }}>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* SEND SHEET */}
        {showSendSheet && (
          <>
            <div className="ios-backdrop animate-fade-in" onClick={() => { setShowSendSheet(false); setSendStep(1); }} />
            <div className="ios-sheet animate-slide-up" style={{ height: sendStep === 3 ? 340 : 480 }}>
              <div className="sheet-handle" />
              <div className="px-5 pb-10">
                {sendStep === 1 && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-gradient" style={{ fontSize: 22, fontWeight: 700 }}>Send Funds</h3>
                      <button onClick={() => { setShowSendSheet(false); setSendStep(1); }}><X className="w-6 h-6" style={{ color: '#047857' }} /></button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label style={{ fontSize: 12, color: '#047857', marginBottom: 8, display: 'block', letterSpacing: 1 }}>ASSET</label>
                        <select className="tm-input">{assets.map((a) => <option key={a.symbol}>{a.symbol} • {a.balance.toLocaleString()}</option>)}</select>
                      </div>
                      <div>
                        <label style={{ fontSize: 12, color: '#047857', marginBottom: 8, display: 'block', letterSpacing: 1 }}>RECIPIENT</label>
                        <input className="tm-input" placeholder="0x..." value={sendAddress} onChange={(e) => setSendAddress(e.target.value)} style={{ fontFamily: 'monospace' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: 12, color: '#047857', marginBottom: 8, display: 'block', letterSpacing: 1 }}>AMOUNT</label>
                        <input className="tm-input" placeholder="0.00" type="number" value={sendAmount} onChange={(e) => setSendAmount(e.target.value)} />
                      </div>
                      <div className="p-4 rounded-xl flex justify-between" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                        <span style={{ color: '#047857', fontSize: 14 }}>Network Fee</span>
                        <span style={{ color: '#34D399', fontSize: 14, fontWeight: 600 }}>$0.00</span>
                      </div>
                      <button onClick={handleSend} disabled={!sendAddress || !sendAmount} className="tm-btn-primary">Continue</button>
                    </div>
                  </>
                )}
                {sendStep === 2 && (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <button onClick={() => setSendStep(1)}><ChevronLeft className="w-6 h-6" style={{ color: '#34D399' }} /></button>
                      <h3 className="text-gradient" style={{ fontSize: 22, fontWeight: 700 }}>Confirm</h3>
                    </div>
                    <div className="tm-card p-4 mb-4">
                      <div className="flex justify-between py-3 border-b" style={{ borderColor: 'rgba(16, 185, 129, 0.1)' }}>
                        <span style={{ color: '#047857' }}>To</span>
                        <span style={{ color: '#F0FDF4', fontFamily: 'monospace', fontSize: 13 }}>{sendAddress || '0x1234...5678'}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b" style={{ borderColor: 'rgba(16, 185, 129, 0.1)' }}>
                        <span style={{ color: '#047857' }}>Amount</span>
                        <span style={{ color: '#F0FDF4', fontWeight: 600 }}>{sendAmount || '1,000'} SUSD</span>
                      </div>
                      <div className="flex justify-between py-3">
                        <span style={{ color: '#047857' }}>Fee</span>
                        <span style={{ color: '#34D399' }}>$0.00</span>
                      </div>
                    </div>
                    <button onClick={handleSend} className="tm-btn-primary">Confirm & Send</button>
                  </>
                )}
                {sendStep === 3 && (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                      <CheckCircle className="w-10 h-10" style={{ color: '#34D399' }} />
                    </div>
                    <h3 className="text-gradient" style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Sent!</h3>
                    <p style={{ color: '#047857' }}>{sendAmount || '1,000'} SUSD sent successfully</p>
                    <p style={{ color: '#064E3B', fontSize: 12, marginTop: 12, fontFamily: 'monospace' }}>Tx: 0xabc123...def789</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* RECEIVE SHEET */}
        {showReceiveSheet && (
          <>
            <div className="ios-backdrop animate-fade-in" onClick={() => setShowReceiveSheet(false)} />
            <div className="ios-sheet animate-slide-up" style={{ height: 420 }}>
              <div className="sheet-handle" />
              <div className="px-5 pb-10 text-center">
                <h3 className="text-gradient" style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Receive Payment</h3>
                <div className="w-48 h-48 mx-auto mb-4 rounded-2xl p-4 flex items-center justify-center" style={{ background: 'white' }}>
                  <div className="w-full h-full grid grid-cols-10 gap-[1px]">
                    {Array.from({ length: 100 }).map((_, i) => (<div key={i} style={{ background: Math.random() > 0.5 ? '#0A0F0D' : '#fff' }} />))}
                  </div>
                </div>
                <p style={{ color: '#047857', fontSize: 14, marginBottom: 16 }}>Scan to receive any asset</p>
                <button onClick={copyAddress} className="tm-card p-4 w-full flex items-center justify-center gap-3">
                  <span style={{ color: '#047857', fontSize: 12, fontFamily: 'monospace' }}>{walletAddress.substring(0, 12)}...{walletAddress.substring(walletAddress.length - 8)}</span>
                  {copied ? <Check className="w-5 h-5" style={{ color: '#34D399' }} /> : <Copy className="w-5 h-5" style={{ color: '#10B981' }} />}
                </button>
              </div>
            </div>
          </>
        )}

        {/* SWAP SHEET */}
        {showSwapSheet && (
          <>
            <div className="ios-backdrop animate-fade-in" onClick={() => { setShowSwapSheet(false); setSwapComplete(false); }} />
            <div className="ios-sheet animate-slide-up" style={{ height: swapComplete ? 300 : 480 }}>
              <div className="sheet-handle" />
              <div className="px-5 pb-10">
                {!swapComplete ? (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-gradient" style={{ fontSize: 22, fontWeight: 700 }}>Swap Tokens</h3>
                      <button onClick={() => setShowSwapSheet(false)}><X className="w-6 h-6" style={{ color: '#047857' }} /></button>
                    </div>
                    <div className="p-4 rounded-xl mb-3" style={{ background: 'var(--tm-surface)' }}>
                      <div className="flex items-center justify-between mb-2">
                        <span style={{ color: '#047857', fontSize: 11, letterSpacing: 1 }}>FROM</span>
                        <span style={{ color: '#047857', fontSize: 11 }}>Balance: 24,850</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <input type="text" value={swapAmount} onChange={(e) => setSwapAmount(e.target.value)} className="bg-transparent outline-none w-24" style={{ fontSize: 28, fontWeight: 700, color: '#F0FDF4' }} />
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'var(--tm-surface-2)' }}>
                          <CircleDollarSign className="w-5 h-5" style={{ color: '#10B981' }} />
                          <span style={{ color: '#F0FDF4', fontWeight: 600 }}>SUSD</span>
                          <ChevronDown className="w-4 h-4" style={{ color: '#047857' }} />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center -my-2 relative z-10">
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981, #059669)', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}>
                        <ArrowRightLeft className="w-5 h-5 text-black" />
                      </button>
                    </div>
                    <div className="p-4 rounded-xl mb-4" style={{ background: 'var(--tm-surface)' }}>
                      <div className="flex items-center justify-between mb-2">
                        <span style={{ color: '#047857', fontSize: 11, letterSpacing: 1 }}>TO</span>
                        <span style={{ color: '#047857', fontSize: 11 }}>Balance: 12,500</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span style={{ fontSize: 28, fontWeight: 700, color: '#F0FDF4' }}>{(Number(swapAmount) * 0.998).toFixed(2)}</span>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'var(--tm-surface-2)' }}>
                          <Zap className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                          <span style={{ color: '#F0FDF4', fontWeight: 600 }}>SET</span>
                          <ChevronDown className="w-4 h-4" style={{ color: '#047857' }} />
                        </div>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl mb-4" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                      <div className="flex justify-between mb-1">
                        <span style={{ color: '#047857', fontSize: 13 }}>Rate</span>
                        <span style={{ color: '#34D399', fontSize: 13 }}>1 SUSD = 0.998 SET</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: '#047857', fontSize: 13 }}>Fee</span>
                        <span style={{ color: '#34D399', fontSize: 13 }}>0.2%</span>
                      </div>
                    </div>
                    <button onClick={handleSwap} disabled={isSwapping} className="tm-btn-primary">
                      {isSwapping ? <><RefreshCw className="w-5 h-5 animate-spin" /> Processing...</> : 'Swap Now'}
                    </button>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                      <CheckCircle className="w-10 h-10" style={{ color: '#34D399' }} />
                    </div>
                    <h3 className="text-gradient" style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Swap Complete!</h3>
                    <p style={{ color: '#047857' }}>{swapAmount} SUSD → {(Number(swapAmount) * 0.998).toFixed(2)} SET</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* P2P SHEET */}
        {showP2PSheet && (
          <>
            <div className="ios-backdrop animate-fade-in" onClick={() => setShowP2PSheet(false)} />
            <div className="ios-sheet animate-slide-up" style={{ height: 500 }}>
              <div className="sheet-handle" />
              <div className="px-5 pb-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gradient" style={{ fontSize: 22, fontWeight: 700 }}>P2P Trading</h3>
                  <button onClick={() => setShowP2PSheet(false)}><X className="w-6 h-6" style={{ color: '#047857' }} /></button>
                </div>
                <div className="flex gap-2 mb-4">
                  <button className="flex-1 py-3 rounded-xl font-medium text-sm" style={{ background: 'linear-gradient(135deg, #10B981, #059669)', color: '#000' }}>Buy</button>
                  <button className="flex-1 py-3 rounded-xl font-medium text-sm" style={{ background: 'var(--tm-surface-2)', color: '#047857' }}>Sell</button>
                </div>
                <div className="space-y-3">
                  {p2pOrders.map((order) => (
                    <div key={order.id} className="tm-card p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
                            <Briefcase className="w-5 h-5 text-black" />
                          </div>
                          <div>
                            <p style={{ fontWeight: 600, color: '#F0FDF4', fontSize: 15 }}>{order.merchant}</p>
                            <div className="flex items-center gap-2">
                              <Star className="w-3 h-3" style={{ color: '#FBBF24', fill: '#FBBF24' }} />
                              <span style={{ color: '#047857', fontSize: 12 }}>{order.rating} • {order.trades} trades</span>
                            </div>
                          </div>
                        </div>
                        <span className={`tm-badge ${order.type === 'buy' ? 'tm-badge-receive' : 'tm-badge-send'}`}>{order.type === 'buy' ? 'Buying' : 'Selling'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p style={{ color: '#047857', fontSize: 11 }}>Amount</p>
                          <p style={{ color: '#F0FDF4', fontWeight: 600 }}>{order.amount.toLocaleString()} {order.asset}</p>
                        </div>
                        <div className="text-right">
                          <p style={{ color: '#047857', fontSize: 11 }}>Price</p>
                          <p style={{ color: '#34D399', fontWeight: 600 }}>${order.price.toFixed(3)}</p>
                        </div>
                        <button className="px-4 py-2 rounded-xl text-sm font-medium" style={{ background: 'linear-gradient(135deg, #10B981, #059669)', color: '#000' }}>Trade</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
