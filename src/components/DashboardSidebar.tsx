import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  Home, 
  FileText, 
  Calendar, 
  Users, 
  Settings,
  LogOut,
  Stethoscope,
  ClipboardList,
  BookOpen,
  TrendingUp
} from 'lucide-react';

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  user: any;
  onLogout: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ 
  activeSection, 
  setActiveSection, 
  user, 
  onLogout 
}) => {
  const menuItems = [
    {
      id: 'overview',
      label: 'Dashboard',
      icon: Home
    },
    {
      id: 'records',
      label: 'Records',
      icon: FileText
    },
    {
      id: 'cases',
      label: 'Cases',
      icon: ClipboardList
    },
    {
      id: 'schedule',
      label: 'Schedule',
      icon: Calendar
    },
    {
      id: 'rotations',
      label: 'Rotations',
      icon: BookOpen
    },
    {
      id: 'evaluations',
      label: 'Evaluations',
      icon: TrendingUp
    },
    {
      id: 'colleagues',
      label: 'Colleagues',
      icon: Users
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: Settings
    }
  ];

  return (
    <Sidebar className="border-r bg-white">
      <SidebarHeader className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg">Resident Portal</h2>
            <p className="text-sm text-gray-600">Medical Training</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex-1 p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() => setActiveSection(item.id)}
                isActive={activeSection === item.id}
                className="w-full justify-start"
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate">{user.name}</p>
            <p className="text-xs text-gray-500">{user.year}</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={onLogout}
        >
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;