import React from 'react';

const SuggestionPill = ({ icon, text }) => (
    <button className="flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#1a1a1a] border border-[#222] hover:border-[#333] text-gray-300 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
        {icon}
        <span>{text}</span>
    </button>
);

export default SuggestionPill;
