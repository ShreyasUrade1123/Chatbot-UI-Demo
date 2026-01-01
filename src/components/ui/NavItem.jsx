import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavItem = ({ icon, label, highlight = false, hasDropdown = false, isCollapsed = false }) => (
    <div
        className={`flex items-center items-center gap-3 px-2 py-2 text-[13px] rounded-md cursor-pointer transition-all group overflow-hidden
    ${highlight ? 'text-white' : 'text-[#888] hover:text-white hover:bg-[#121212]'}
    ${isCollapsed ? 'justify-center px-0' : ''}
    `}
        title={isCollapsed ? label : ''}
    >
        <span className={`transition-colors flex-shrink-0 ${highlight ? 'text-white' : 'text-[#666] group-hover:text-white'}`}>
            {icon}
        </span>

        {!isCollapsed && (
            <>
                <span className="flex-1 font-medium whitespace-nowrap overflow-hidden text-ellipsis">{label}</span>
                {hasDropdown && (
                    <ChevronDown size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 flex-shrink-0" />
                )}
            </>
        )}
    </div>
);

export default NavItem;
