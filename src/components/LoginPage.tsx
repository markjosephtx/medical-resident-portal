import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Stethoscope, GraduationCap } from 'lucide-react';

interface LoginPageProps {
  onLogin: (userData: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app this would call an API
    const mockUser = {
      id: '1',
      name: 'Dr. Sarah Johnson',
      email: credentials.email,
      year: 'PGY-2',
      specialty: 'Internal Medicine',
      hospital: 'Metro General Hospital'
    };
    onLogin(mockUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Stethoscope className="h-12 w-12 text-blue-600" />
              <GraduationCap className="h-6 w-6 text-indigo-600 absolute -top-1 -right-1" />
            </div>
          </div>
          <CardTitle className="text-2xl">Resident Portal</CardTitle>
          <CardDescription>
            Sign in to access your Sagis Resident account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@hospital.edu"
                value={credentials.email}
                onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <p className="text-xs text-gray-600 text-center">
              Demo credentials: Use any email and password to log in
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;