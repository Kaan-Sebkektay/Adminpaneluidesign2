import React from "react";
import { 
  LayoutDashboard, 
  Settings, 
  FileJson, 
  Search, 
  BarChart3, 
  Lightbulb, 
  FileBarChart, 
  Map, 
  Cpu 
} from "lucide-react";
import { cn } from "../../components/ui/utils";
import { ZenNoteFullLogo } from "../ZenLogo";

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "seo-settings", label: "SEO Settings", icon: Settings },
  { id: "schema-engine", label: "Schema Engine", icon: FileJson },
  { id: "search-console", label: "Search Console", icon: Search },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "keyword-intelligence", label: "Keyword Intelligence", icon: Lightbulb },
  { id: "content-performance", label: "Content Performance", icon: FileBarChart },
  { id: "sitemap", label: "Sitemap & IndexNow", icon: Map },
  { id: "system-tools", label: "System Tools", icon: Cpu },
];

export function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 border-b border-slate-100 flex items-center justify-center">
        <ZenNoteFullLogo className="scale-90" />
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200",
                    isActive 
                      ? "bg-[#0073AA] text-white" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0073AA]"
                  )}
                >
                  <item.icon size={18} className={isActive ? "text-white" : "text-slate-400"} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-slate-100">
        <div className="text-xs text-slate-400 text-center">
          Zen Optimize v1.0.0
        </div>
      </div>
    </div>
  );
}
