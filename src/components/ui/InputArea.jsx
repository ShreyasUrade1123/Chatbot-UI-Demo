import React, { useState } from 'react';
import {
    Plus,
    ChevronDown,
    Mic,
    Send,
    Zap,
    FlaskConical,
    Scale,
    Lightbulb,
    Leaf
} from 'lucide-react';

const InputArea = () => {
    const [showDeepThinkMenu, setShowDeepThinkMenu] = useState(true);

    return (
        <div className="relative w-full max-w-3xl mx-auto">

            {/* Gradient Border Wrapper */}
            {/* Intense Gradient Border Wrapper */}
            <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-r from-[#FF5500] via-[#2A2A2A] to-[#0055FF] opacity-100 z-10 pointer-events-none p-[1px]"></div>

            {/* Corner Glow Effects - Exact Match */}
            <div className="absolute -top-[10px] -left-[10px] w-32 h-32 bg-[#FF5500] rounded-full blur-[60px] opacity-40 pointer-events-none z-0"></div>
            <div className="absolute -bottom-[10px] -right-[10px] w-32 h-32 bg-[#0055FF] rounded-full blur-[60px] opacity-40 pointer-events-none z-0"></div>

            {/* Main Input Container */}
            <div className="w-full bg-[#0F0F0F] rounded-[24px] p-4 shadow-2xl shadow-black/80 relative z-20">

                {/* TextArea */}
                <textarea
                    placeholder="Ask anything..."
                    className="w-full bg-transparent text-gray-200 placeholder-[#666] resize-none h-14 focus:outline-none text-[16px] leading-relaxed font-light"
                />

                {/* Bottom Toolbar */}
                <div className="flex items-center justify-between mt-2 pt-2">

                    {/* Left Side Tools */}
                    <div className="flex items-center gap-2">
                        {/* Plus Button */}
                        <button className="w-8 h-8 rounded-full bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-[#333]">
                            <Plus size={16} />
                        </button>

                        {/* Normal Mode Pill */}
                        <button className="h-8 px-3 rounded-full bg-[#1A1A1A] hover:bg-[#252525] flex items-center gap-2 text-gray-400 hover:text-white transition-all border border-[#333] text-xs font-medium">
                            <Leaf size={14} className="text-green-500" />
                            <span>Normal</span>
                            <ChevronDown size={12} />
                        </button>

                        {/* DeepThink Pill (Active State Sim) */}
                        <div className="relative">
                            <button
                                className={`h-8 px-3 rounded-full flex items-center gap-2 transition-all border text-xs font-medium ${showDeepThinkMenu ? 'bg-[#1e1e2e] border-[#444] text-blue-300' : 'bg-[#1A1A1A] border-[#333] text-gray-400'}`}
                                onClick={() => setShowDeepThinkMenu(!showDeepThinkMenu)}
                            >
                                <Lightbulb size={14} className={showDeepThinkMenu ? "text-blue-400" : "text-gray-500"} />
                                <span>DeepThink</span>
                                <ChevronDown size={12} />
                            </button>

                            {/* Dropdown Menu - Positioned Absolute */}
                            {showDeepThinkMenu && (
                                <div className="absolute top-full left-0 mt-2 w-[180px] bg-[#1a1a1e] border border-[#333] rounded-xl shadow-2xl p-1.5 flex flex-col gap-0.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <MenuItem icon={<Zap size={14} />} label="Quick answer" />
                                    <MenuItem icon={<Scale size={14} />} label="Balanced" />
                                    <MenuItem icon={<Lightbulb size={14} />} label="DeepThink" active />
                                    <MenuItem icon={<FlaskConical size={14} />} label="Research" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side Tools */}
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 text-[#666] hover:text-white text-xs font-medium hover:bg-[#1A1A1A] px-3 py-1.5 rounded-full transition-colors">
                            <Mic size={16} />
                            <span>Voice</span>
                        </button>

                        {/* Gradient Send Button */}
                        <button className="w-9 h-9 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all text-white">
                            <Send size={16} className="ml-0.5" fill="white" />
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

const MenuItem = ({ icon, label, active = false }) => (
    <div className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-pointer transition-all text-[13px] ${active ? 'bg-[#2a2a35] text-white font-medium' : 'text-gray-400 hover:text-gray-200 hover:bg-[#252528]'}`}>
        <span className={active ? 'text-blue-400' : 'text-gray-500'}>{icon}</span>
        <span>{label}</span>
        {active && <div className="ml-auto w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>}
    </div>
);

export default InputArea;
