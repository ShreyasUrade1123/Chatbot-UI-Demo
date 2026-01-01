import React from 'react';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  return (
    <div className="flex h-screen w-full bg-black text-[#ececec] font-sans overflow-hidden selection:bg-blue-500/30">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <MainContent />
    </div>
  );
};

export default App;
