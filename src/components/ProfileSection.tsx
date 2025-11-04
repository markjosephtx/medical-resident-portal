import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  GraduationCap,
  Award,
  Target,
  Clock
} from 'lucide-react';

interface ProfileSectionProps {
  user: any;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ user }) => {
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    phone: '+1 (555) 123-4567',
    specialty: user.specialty,
    year: user.year,
    hospital: user.hospital,
    graduationDate: '2026-06-15',
    medicalSchool: 'Harvard Medical School',
    bio: 'Passionate about internal medicine with a focus on cardiology. Committed to providing excellent patient care and advancing medical knowledge through research.'
  });

  const rotationProgress = [
    { name: 'Internal Medicine', completed: 12, total: 12, status: 'completed' },
    { name: 'Surgery', completed: 8, total: 12, status: 'in_progress' },
    { name: 'Pediatrics', completed: 0, total: 8, status: 'upcoming' },
    { name: 'Emergency Medicine', completed: 0, total: 6, status: 'upcoming' },
    { name: 'Psychiatry', completed: 0, total: 6, status: 'upcoming' }
  ];

  const achievements = [
    {
      title: 'Excellent Patient Care Award',
      date: '2024-06-15',
      description: 'Recognized for outstanding patient care during Internal Medicine rotation'
    },
    {
      title: 'Research Presentation',
      date: '2024-05-20',
      description: 'Presented research on cardiac outcomes at Regional Medical Conference'
    },
    {
      title: 'Procedure Milestone',
      date: '2024-04-10',
      description: 'Successfully completed 50 supervised procedures'
    }
  ];

  const learningGoals = [
    {
      goal: 'Complete Cardiology Elective',
      target: '2024-09-30',
      progress: 25,
      priority: 'high'
    },
    {
      goal: 'Master ECG Interpretation',
      target: '2024-08-15',
      progress: 70,
      priority: 'medium'
    },
    {
      goal: 'Research Publication',
      target: '2024-12-31',
      progress: 40,
      priority: 'high'
    }
  ];

  const handleSave = () => {
    // Mock save functionality
    console.log('Saving profile data:', profileData);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl">Profile &amp; Settings</h2>
          <p className="text-gray-600">Manage your profile information and track your progress</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="goals">Learning Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Image and Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-lg">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  Change Photo
                </Button>
                <div className="text-center">
                  <p className="font-medium">{profileData.name}</p>
                  <p className="text-sm text-gray-600">{profileData.year}</p>
                  <Badge className="mt-2">{profileData.specialty}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Profile Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal and professional details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Residency Year</Label>
                    <Select value={profileData.year}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PGY-1">PGY-1</SelectItem>
                        <SelectItem value="PGY-2">PGY-2</SelectItem>
                        <SelectItem value="PGY-3">PGY-3</SelectItem>
                        <SelectItem value="PGY-4">PGY-4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Specialty</Label>
                    <Input
                      id="specialty"
                      value={profileData.specialty}
                      onChange={(e) => setProfileData(prev => ({ ...prev, specialty: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hospital">Hospital/Institution</Label>
                    <Input
                      id="hospital"
                      value={profileData.hospital}
                      onChange={(e) => setProfileData(prev => ({ ...prev, hospital: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                    rows={3}
                  />
                </div>
                <Button onClick={handleSave}>Save Changes</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Rotation Progress</CardTitle>
              <CardDescription>
                Track your progress through required rotations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {rotationProgress.map((rotation, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{rotation.name}</p>
                        <p className="text-sm text-gray-600">
                          {rotation.completed} of {rotation.total} weeks completed
                        </p>
                      </div>
                      <Badge 
                        variant={
                          rotation.status === 'completed' ? 'default' : 
                          rotation.status === 'in_progress' ? 'secondary' : 
                          'outline'
                        }
                      >
                        {rotation.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <Progress 
                      value={(rotation.completed / rotation.total) * 100} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Achievements &amp; Recognition</CardTitle>
              <CardDescription>
                Your accomplishments and milestones during residency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-2">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>Learning Goals</CardTitle>
              <CardDescription>
                Set and track your professional development objectives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {learningGoals.map((goal, index) => (
                  <div key={index} className="space-y-3 p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium">{goal.goal}</h3>
                        <p className="text-sm text-gray-600 mt-1">Target: {goal.target}</p>
                      </div>
                      <Badge 
                        variant={goal.priority === 'high' ? 'destructive' : 'secondary'}
                      >
                        {goal.priority} priority
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  <Target className="h-4 w-4 mr-2" />
                  Add New Goal
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileSection;