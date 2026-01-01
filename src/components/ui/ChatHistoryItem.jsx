import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const ChatHistoryItem = ({ label, active = false }) => (
    <div className={`group flex items-center justify-between px-2 py-1.5 text-[13px] cursor-pointer rounded-md transition-all ${active ? 'bg-[#1a1a1a] text-white font-medium shadow-sm' : 'text-[#888] hover:text-gray-200 hover:bg-[#121212]'}`}>
        <span className="truncate max-w-[180px]">{label}</span>
        <div className={`flex items-center text-gray-500 transition-opacity ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <MoreHorizontal size={14} className="hover:text-white" />
        </div>
    </div>
);

export default ChatHistoryItem;
