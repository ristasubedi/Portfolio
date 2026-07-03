'use client';

import React, { useState, useEffect } from 'react';

interface NetworkNode {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  type: 'client' | 'gateway' | 'cache' | 'service' | 'database';
}

interface LogEntry {
  timestamp: string;
  step: string;
  message: string;
  type: 'info' | 'success' | 'warn' | 'metric';
}

export default function ArchitectureExplorer() {
  const [activeStep, setActiveStep] = useState<string>('idle');
  const [payloadType, setPayloadType] = useState<'REST' | 'GraphQL' | 'gRPC'>('REST');
  const [cacheHit, setCacheHit] = useState<boolean>(true);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [latency, setLatency] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const nodes: NetworkNode[] = [
    { id: 'client', label: 'Client (UI)', description: 'Browser / Mobile', x: 10, y: 50, type: 'client' },
    { id: 'gateway', label: 'API Gateway', description: 'Reverse Proxy / Auth', x: 32, y: 50, type: 'gateway' },
    { id: 'cache', label: 'Redis Cache', description: 'In-Memory Key-Value', x: 55, y: 15, type: 'cache' },
    { id: 'service', label: 'SWE Core Microservice', description: 'Business Logic Run', x: 55, y: 80, type: 'service' },
    { id: 'database', label: 'Edge Replica DB', description: 'Postgres / Distributed', x: 88, y: 80, type: 'database' }
  ];

  const addLog = (step: string, message: string, type: 'info' | 'success' | 'warn' | 'metric') => {
    const now = new Date().toLocaleTimeString([], { hour12: false, minute: '2-digit', second: '2-digit' });
    setLogs(prev => [{ timestamp: now, step, message, type }, ...prev].slice(0, 15));
  };

  const dispatchPayload = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setLogs([]);
    setLatency(0);

    // Phase 1: Client Sending
    setActiveStep('client-to-gateway');
    addLog('Client', `Dispatching outbound ${payloadType} envelope...`, 'info');
    await delay(700);

    // Phase 2: Gateway Analysis
    setActiveStep('gateway');
    addLog('API Gateway', `SSL terminated. Routing request through service mesh.`, 'info');
    await delay(600);

    if (cacheHit) {
      setActiveStep('gateway-to-cache');
      addLog('API Gateway', `Cache validation requested...`, 'info');
      await delay(500);

      setActiveStep('cache');
      addLog('Redis Cache', `Cache HIT on key metadata query lookup.`, 'success');
      await delay(500);

      setActiveStep('cache-to-gateway');
      addLog('API Gateway', `Payload resolved directly from Redis edge cache memory.`, 'success');
      await delay(500);

      setActiveStep('gateway-to-client');
      setLatency(4); // 4ms mock cache-hit latency
      addLog('Client', `Response unpacked. Total telemetry round-trip resolved in 4ms.`, 'metric');
    } else {
      setActiveStep('gateway-to-cache');
      addLog('API Gateway', `Checking lookup index validation...`, 'info');
      await delay(400);

      setActiveStep('cache');
      addLog('Redis Cache', `Cache MISS. Relaying execution down pipeline.`, 'warn');
      await delay(400);

      setActiveStep('gateway-to-service');
      addLog('API Gateway', `Delegating dynamic compute query handler...`, 'info');
      await delay(500);

      setActiveStep('service');
      addLog('Microservice', `Dynamic processing complete. Executing persistence query...`, 'info');
      await delay(600);

      setActiveStep('service-to-db');
      addLog('Microservice', `Incurring secondary system disk reading latency...`, 'info');
      await delay(500);

      setActiveStep('database');
      addLog('Postgres DB', `Transaction committed. Data replica fetched.`, 'success');
      await delay(500);

      setActiveStep('db-to-service');
      await delay(400);

      setActiveStep('service-to-gateway');
      addLog('API Gateway', `Dynamic stream response packet compiled.`, 'info');
      await delay(500);

      setActiveStep('gateway-to-client');
      setLatency(98); // 98ms database fallback execution latency
      addLog('Client', `Dynamic response unpacked. Total round-trip resolved in 98ms.`, 'metric');
    }

    await delay(600);
    setActiveStep('idle');
    setIsProcessing(false);
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[460px]">
      
      {/* Topology Control Interface Head */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            System Topology Stream
          </div>
          <p className="text-xs text-slate-500 mt-0.5">Visualize real-time routing sequences and edge-cache efficiency.</p>
        </div>

        {/* Runtime Controls */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Protocol Selection */}
          <select 
            disabled={isProcessing}
            value={payloadType}
            onChange={(e) => setPayloadType(e.target.value as any)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-slate-700 outline-none focus:border-indigo-500 cursor-pointer disabled:opacity-50"
          >
            <option value="REST">REST (JSON)</option>
            <option value="GraphQL">GraphQL (POST)</option>
            <option value="gRPC">gRPC (HTTP/2)</option>
          </select>

          {/* Cache hit switch simulation */}
          <button 
            disabled={isProcessing}
            onClick={() => setCacheHit(!cacheHit)}
            className={`text-xs px-3 py-1.5 rounded-lg font-bold border transition-all ${
              cacheHit 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                : 'bg-rose-50 border-rose-200 text-rose-700'
            }`}
          >
            {cacheHit ? 'Cache: Enabled' : 'Cache: Bypass'}
          </button>

          {/* Trigger Request Outlets */}
          <button
            onClick={dispatchPayload}
            disabled={isProcessing}
            className="text-xs px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all disabled:opacity-50 flex items-center gap-1.5 shadow-sm"
          >
            <svg className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {isProcessing ? 'Routing...' : 'Send Request'}
          </button>
        </div>
      </div>

      {/* Network Nodes Vector Canvas Grid */}
      <div className="relative w-full h-56 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner flex-1 min-h-0">
        
        {/* Dynamic Canvas Background Wire Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 pointer-events-none" />

        {/* Vector SVG Routing Paths & Animated Packets */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Client to Gateway Link */}
          <line x1="10%" y1="50%" x2="32%" y2="50%" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Gateway to Cache Link */}
          <path d="M 32% 50% Q 43.5% 15% 55% 15%" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Gateway to Service Link */}
          <path d="M 32% 50% Q 43.5% 80% 55% 80%" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Service to DB Link */}
          <line x1="55%" y1="80%" x2="88%" y2="80%" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />

          {}
          {activeStep === 'client-to-gateway' && (
            <circle cx="21%" cy="50%" r="5" className="fill-indigo-500 animate-pulse shadow-[0_0_8px_#6366f1]" />
          )}
          {activeStep === 'gateway-to-cache' && (
            <path d="M 32% 50% Q 43.5% 15% 55% 15%" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_1s_linear_infinite]" />
          )}
          {activeStep === 'gateway-to-service' && (
            <path d="M 32% 50% Q 43.5% 80% 55% 80%" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_1s_linear_infinite]" />
          )}
          {activeStep === 'service-to-db' && (
            <line x1="55%" y1="80%" x2="88%" y2="80%" stroke="#eab308" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_1s_linear_infinite]" />
          )}
          {activeStep === 'db-to-service' && (
            <line x1="88%" y1="80%" x2="55%" y2="80%" stroke="#3b82f6" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_1s_linear_infinite]" />
          )}
          {activeStep === 'cache-to-gateway' && (
            <path d="M 55% 15% Q 43.5% 15% 32% 50%" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_1s_linear_infinite]" />
          )}
          {activeStep === 'service-to-gateway' && (
            <path d="M 55% 80% Q 43.5% 80% 32% 50%" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_1s_linear_infinite]" />
          )}
          {activeStep === 'gateway-to-client' && (
            <circle cx="21%" cy="50%" r="5" className="fill-emerald-400 animate-ping" />
          )}
        </svg>

        {/* Network Element Node Badges */}
        {nodes.map(node => {
          const isNodeActive = activeStep === node.id || 
            (node.id === 'client' && activeStep.includes('client')) ||
            (node.id === 'gateway' && activeStep.includes('gateway')) ||
            (node.id === 'cache' && activeStep.includes('cache')) ||
            (node.id === 'service' && activeStep.includes('service')) ||
            (node.id === 'database' && activeStep.includes('db'));

          let nodeBorderColor = 'border-slate-800';
          let glowStyle = {};
          if (isNodeActive) {
            if (node.type === 'client') { nodeBorderColor = 'border-indigo-500'; glowStyle = { boxShadow: '0 0 15px rgba(99,102,241,0.3)' }; }
            else if (node.type === 'gateway') { nodeBorderColor = 'border-purple-500'; glowStyle = { boxShadow: '0 0 15px rgba(168,85,247,0.3)' }; }
            else if (node.type === 'cache') { nodeBorderColor = 'border-emerald-500'; glowStyle = { boxShadow: '0 0 15px rgba(16,185,129,0.3)' }; }
            else if (node.type === 'service') { nodeBorderColor = 'border-blue-500'; glowStyle = { boxShadow: '0 0 15px rgba(59,130,246,0.3)' }; }
            else if (node.type === 'database') { nodeBorderColor = 'border-yellow-500'; glowStyle = { boxShadow: '0 0 15px rgba(234,179,8,0.3)' }; }
          }

          return (
            <div
              key={node.id}
              style={{ 
                left: `${node.x}%`, 
                top: `${node.y}%`, 
                transform: 'translate(-50%, -50%)',
                ...glowStyle
              }}
              className={`absolute z-10 w-32 md:w-40 bg-slate-900 border ${nodeBorderColor} rounded-xl p-2.5 transition-all duration-300`}
            >
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isNodeActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
                <h4 className="text-[10px] md:text-xs font-bold text-white tracking-tight">{node.label}</h4>
              </div>
              <p className="text-[8px] md:text-[9px] text-slate-400 mt-0.5 truncate">{node.description}</p>
            </div>
          );
        })}

        {/* Real-time latency analytics overlay badge */}
        {latency > 0 && (
          <div className="absolute top-4 right-4 bg-slate-900/95 border border-slate-800 rounded-lg px-3 py-1.5 text-right flex flex-col z-20">
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Metrics</span>
            <span className={`text-sm font-mono font-bold ${cacheHit ? 'text-emerald-400' : 'text-amber-400'}`}>
              RTT: {latency}ms
            </span>
          </div>
        )}
      </div>

      {/* Traversal Command-line Logs Terminal Wrapper */}
      <div className="w-full bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-[10px] h-32 mt-4 overflow-y-auto flex flex-col-reverse gap-1 shadow-inner select-text select-all">
        {logs.length === 0 ? (
          <div className="text-slate-600 italic">Network telemetry stream idle... Tap 'Send Request' to pipeline payload signals.</div>
        ) : (
          logs.map((log, index) => {
            let textColor = 'text-slate-400';
            if (log.type === 'success') textColor = 'text-emerald-400';
            else if (log.type === 'warn') textColor = 'text-amber-400';
            else if (log.type === 'metric') textColor = 'text-cyan-400 font-bold';

            return (
              <div key={index} className="flex items-start gap-2 leading-relaxed">
                <span className="text-slate-600 shrink-0">[{log.timestamp}]</span>
                <span className="text-indigo-400 font-bold shrink-0">{log.step}:</span>
                <span className={textColor}>{log.message}</span>
              </div>
            );
          })
        )}
      </div>

      {/* Dynamic Keyframes inject stylesheet for SVG pathing animations */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20px;
          }
        }
      `}</style>
    </div>
  );
}