import React, { useState } from 'react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarInitials } from './ui/avatar';
import { Badge } from './ui/badge';
import DashboardSidebar from './DashboardSidebar';
import RecordsManagement from './RecordsManagement';
import ProfileSection from './ProfileSection';
import { 
  FileText, 
  Calendar, 
  Users, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  BookOpen
} from 'lucide-react';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    {
      title: 'Total Cases',
      value: '127',
      description: '+12 this month',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Procedures Completed',
      value: '45',
      description: '+5 this week',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Hours Logged',
      value: '2,340',
      description: '78 hrs this week',
      icon: Clock,
      color: 'text-purple-600'
    },
    {
      title: 'Pending Reviews',
      value: '8',
      description: '3 urgent',
      icon: AlertCircle,
      color: 'text-amber-600'
    }
  ];

  const recentActivities = [
    {
      type: 'case',
      title: 'Completed Surgery Case #SC-2024-089',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      type: 'procedure',
      title: 'Attended Cardiology Procedure',
      time: '5 hours ago',
      status: 'attended'
    },
    {
      type: 'review',
      title: 'Case Review with Dr. Martinez',
      time: '1 day ago',
      status: 'reviewed'
    },
    {
      type: 'training',
      title: 'Emergency Medicine Rotation Started',
      time: '3 days ago',
      status: 'active'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'records':
        return <RecordsManagement />;
      case 'profile':
        return <ProfileSection user={user} />;
      default:
        return (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl mb-2">Welcome back, {user.name}</h1>
                  <p className="text-gray-600">
                    {user.year} - {user.specialty} at {user.hospital}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {user.year}
                  </Badge>
                  <Avatar>
                    <AvatarFallback>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl">{stat.value}</div>
                    <p className="text-xs text-gray-600">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your latest cases, procedures, and training activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        {activity.type === 'case' && <FileText className="h-5 w-5 text-blue-600" />}
                        {activity.type === 'procedure' && <CheckCircle className="h-5 w-5 text-green-600" />}
                        {activity.type === 'review' && <Users className="h-5 w-5 text-purple-600" />}
                        {activity.type === 'training' && <BookOpen className="h-5 w-5 text-amber-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                      <Badge 
                        variant={activity.status === 'completed' ? 'default' : 'secondary'}
                        className="capitalize"
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50">
        <DashboardSidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          user={user}
          onLogout={onLogout}
        />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <SidebarTrigger className="md:hidden mr-4" />
              <div className="flex-1">
                {activeSection === 'overview' && <h2 className="text-xl">Dashboard Overview</h2>}
                {activeSection === 'records' && <h2 className="text-xl">Records Management</h2>}
                {activeSection === 'profile' && <h2 className="text-xl">Profile Settings</h2>}
              </div>
            </div>
            {renderContent()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;