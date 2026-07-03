// src/components/interactive/DataVisualizer.tsx
'use client';

import React, { useState } from 'react';
import { BarChart3, RefreshCw, Sliders } from 'lucide-react';

export default function DataVisualizer() {
  const [dataPoints, setDataPoints] = useState([45, 72, 58, 84, 91, 63]);
  const [varianceMode, setVarianceMode] = useState<'stable' | 'medium' | 'high'>('stable');
  const [isMutating, setIsMutating] = useState(false);

  const simulateDataStream = (mode: 'stable' | 'medium' | 'high') => {
    setVarianceMode(mode);
    setIsMutating(true);
    
    const basePoints = [45, 72, 58, 84, 91, 63];
    const rangeMultiplier = mode === 'stable' ? 8 : mode === 'medium' ? 22 : 45;

    // Apply a rolling distribution deviation mirroring dataset variance
    const mutated = basePoints.map(val => {
      const delta = (Math.random() - 0.5) * rangeMultiplier;
      return Math.max(15, Math.min(100, Math.floor(val + delta)));
    });

    // Deliberate minor timeout timeout to give the user a tactile processing feel
    setTimeout(() => {
      setDataPoints(mutated);
      setIsMutating(false);
    }, 250);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-64">
      
      {/* Component Header */}
      <div className="flex justify-between items-start gap-4 mb-2 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            Algorithm Telemetry Stream
          </div>
          <p className="text-xs text-slate-500 mt-0.5">Simulate distribution noise trends across the model pipeline.</p>
        </div>

        {/* Controller Configuration Selectors */}
        <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200/60 shrink-0">
          {(['stable', 'medium', 'high'] as const).map((mode) => (
            <button
              key={mode}
              disabled={isMutating}
              onClick={() => simulateDataStream(mode)}
              className={`text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider transition-all duration-150 ${
                varianceMode === mode
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 disabled:opacity-50'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Graphing Canvas */}
      <div className="flex-1 flex items-end justify-between gap-3 pt-6 pb-2 px-2 bg-slate-50/50 rounded-xl border border-slate-100 min-h-0">
        {dataPoints.map((value, index) => (
          <div key={index} className="w-full flex flex-col items-center gap-1.5 h-full justify-end group">
            <span className={`text-[10px] font-mono font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ${isMutating ? 'animate-pulse' : ''}`}>
              {value}%
            </span>
            <div 
              style={{ height: `${value}%` }}
              className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-md transition-all duration-300 ease-out shadow-[0_0_12px_rgba(99,102,241,0.12)] group-hover:from-blue-500 group-hover:to-indigo-400"
            />
            <span className="text-[9px] font-mono text-slate-400 mt-1 uppercase tracking-tight shrink-0">
              node-0{index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}