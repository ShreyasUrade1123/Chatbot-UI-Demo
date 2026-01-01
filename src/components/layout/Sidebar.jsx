import React from 'react';
import {
    Search,
    Plus,
    Folder,
    BookOpen,
    Settings,
    ChevronDown,
    LayoutGrid,
    PanelLeftClose,
    PanelLeftOpen,
    MessageSquare,
    History
} from 'lucide-react';
import NavItem from '../ui/NavItem';
import ChatHistoryItem from '../ui/ChatHistoryItem';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    return (
        <div
            onClick={() => isCollapsed && toggleSidebar()}
            className={`${isCollapsed ? 'w-[72px] cursor-pointer' : 'w-[260px]'} flex-shrink-0 flex flex-col border-r border-[#1F1F1F] bg-[#050505] relative z-20 h-screen transition-all duration-300 ease-in-out`}
        >

            {/* Header / Logo Area */}
            <div className={`px-4 pt-5 pb-2 flex items-center group/header ${isCollapsed ? 'justify-center flex-col gap-4' : 'justify-between'}`}>
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/20 flex-shrink-0">
                        <div className="w-3.5 h-3.5 border-[2px] border-white rounded-full"></div>
                    </div>
                    {!isCollapsed && <span className="text-white font-bold text-[16px] tracking-wide whitespace-nowrap">Logoipsum</span>}
                </div>

                {/* Toggle Button */}
                <button
                    onClick={(e) => { e.stopPropagation(); toggleSidebar(); }}
                    className={`text-[#666] hover:text-white transition-opacity duration-300 ${isCollapsed ? 'opacity-0 group-hover/header:opacity-100' : ''}`}
                >
                    {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
                </button>
            </div>

            {/* Sidebar Search */}
            <div className={`px-4 mb-4 mt-2 ${isCollapsed ? 'flex justify-center' : ''}`}>
                {isCollapsed ? (
                    <button className="w-9 h-9 rounded-lg bg-[#121212] flex items-center justify-center text-gray-400 hover:text-white border border-[#222]">
                        <Search size={16} />
                    </button>
                ) : (
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-[#121212] hover:bg-[#1a1a1a] border border-[#222] focus:border-[#333] rounded-lg py-2 pl-9 pr-3 text-[13px] focus:outline-none transition-all placeholder-[#555] text-gray-300 h-9"
                        />
                    </div>
                )}
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-3 flex flex-col gap-6 sidebar-mask pb-4">

                {/* Main Menu */}
                <div>
                    {!isCollapsed && <div className="text-[10px] uppercase tracking-wider font-bold text-[#444] mb-2 px-2">Main Menu</div>}
                    <nav className="space-y-[1px]">
                        <NavItem icon={<Plus size={18} />} label="New Chat" highlight isCollapsed={isCollapsed} />

                        <NavItem
                            icon={<Folder size={18} />}
                            label="Projects"
                            hasDropdown
                            isCollapsed={isCollapsed}
                        />

                        <NavItem icon={<Plus size={18} />} label="New Project" isCollapsed={isCollapsed} />
                        <NavItem icon={<Folder size={18} />} label="Gullmit" isCollapsed={isCollapsed} />
                        <NavItem icon={<BookOpen size={18} />} label="Knowledge" isCollapsed={isCollapsed} />
                        <NavItem icon={<LayoutGrid size={18} />} label="Sheets" isCollapsed={isCollapsed} />
                        <NavItem icon={<Settings size={18} />} label="Settings" hasDropdown isCollapsed={isCollapsed} />
                    </nav>
                </div>

                {/* Chat History Section */}
                <div className={isCollapsed ? 'hidden' : 'block'}>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-[#444] mb-2 px-2 group cursor-pointer hover:text-gray-400">
                        <span>Chat History</span>
                        <Search size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="space-y-4">
                        {/* Today Group */}
                        <div>
                            <div className="px-2 text-[10px] font-semibold text-[#555] mb-1">Today</div>
                            <div className="space-y-[1px]">
                                <ChatHistoryItem label="Translation of Ruhi Sharif" active />
                                <ChatHistoryItem label="React Native Image Picker" />
                                <ChatHistoryItem label="Modern UI Design Systems" />
                            </div>
                        </div>

                        {/* Yesterday Group */}
                        <div>
                            <div className="px-2 text-[10px] font-semibold text-[#555] mb-1">Yesterday</div>
                            <div className="space-y-[1px]">
                                <ChatHistoryItem label="AI Dashboard Architecture" />
                                <ChatHistoryItem label="Reduce and share project" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Collapsed History Icon */}
                {isCollapsed && (
                    <div className="flex justify-center mt-2 border-t border-[#1F1F1F] pt-4">
                        <button className="text-[#666] hover:text-white" title="History">
                            <History size={20} />
                        </button>
                    </div>
                )}

            </div>

            {/* Footer Area */}
            <div className="p-3 bg-[#050505] border-t border-[#1F1F1F]">


                {/* User Profile */}
                <div className={`flex items-center gap-2.5 px-2 py-2 hover:bg-[#121212] rounded-lg cursor-pointer transition-colors border border-transparent hover:border-[#222] ${isCollapsed ? 'justify-center px-0' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px] flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=Shahzaib&background=000&color=fff" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    {!isCollapsed && (
                        <>
                            <div className="flex-1 min-w-0">
                                <div className="text-[13px] font-medium text-white truncate">Shahzaib</div>
                                <div className="text-[10px] text-gray-500 truncate">Free Plan</div>
                            </div>
                            <ChevronDown size={12} className="text-gray-500" />
                        </>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
