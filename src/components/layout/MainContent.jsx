import React from 'react';
import {
    ChevronDown,
    Sparkles,
    Video,
    Code,
    PenTool,
    Briefcase,
    Languages,
    Mail,
    FileQuestion,
    SearchCode
} from 'lucide-react';
import SuggestionPill from '../ui/SuggestionPill';
import InputArea from '../ui/InputArea';

const MainContent = () => {
    return (
        <div className="flex-1 flex flex-col relative bg-[#050505] h-screen overflow-hidden text-gray-200 font-sans">



            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}>
            </div>

            {/* Top Bar */}
            <div className="flex justify-between items-center p-4 relative z-10">
                <div className="text-sm font-medium text-gray-400">DeepThink Model</div>
                <div className="flex items-center gap-2 bg-[#111] border border-[#222] px-3 py-1.5 rounded-lg cursor-pointer hover:bg-[#1a1a1a] transition-colors group">
                    <span className="text-sm text-gray-300 font-medium">Model 2.5</span>
                    <ChevronDown size={14} className="text-gray-500 group-hover:text-gray-300" />
                </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 flex flex-col items-center justify-center max-w-[720px] mx-auto w-full px-4 relative z-10 -mt-16">

                {/* Input Box Container */}
                <div className="w-full relative">
                    <InputArea />
                </div>



            </div>
        </div>
    );
};

export default MainContent;
