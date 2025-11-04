import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Plus, Search, Filter, Download, Eye, Edit } from 'lucide-react';

const RecordsManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const patientRecords = [
    {
      id: 'PR-2024-001',
      patientId: 'PT-45892',
      diagnosis: 'Acute Myocardial Infarction',
      date: '2024-07-08',
      status: 'completed',
      attending: 'Dr. Rodriguez',
      type: 'Cardiology'
    },
    {
      id: 'PR-2024-002',
      patientId: 'PT-45893',
      diagnosis: 'Pneumonia',
      date: '2024-07-07',
      status: 'pending_review',
      attending: 'Dr. Chen',
      type: 'Pulmonology'
    },
    {
      id: 'PR-2024-003',
      patientId: 'PT-45894',
      diagnosis: 'Appendicitis',
      date: '2024-07-06',
      status: 'completed',
      attending: 'Dr. Johnson',
      type: 'Surgery'
    },
    {
      id: 'PR-2024-004',
      patientId: 'PT-45895',
      diagnosis: 'Diabetes Type 2',
      date: '2024-07-05',
      status: 'in_progress',
      attending: 'Dr. Williams',
      type: 'Endocrinology'
    }
  ];

  const procedures = [
    {
      id: 'PC-2024-001',
      name: 'Central Line Insertion',
      date: '2024-07-08',
      supervisor: 'Dr. Martinez',
      outcome: 'successful',
      hours: '2.5',
      specialty: 'ICU'
    },
    {
      id: 'PC-2024-002',
      name: 'Lumbar Puncture',
      date: '2024-07-07',
      supervisor: 'Dr. Anderson',
      outcome: 'successful',
      hours: '1.0',
      specialty: 'Neurology'
    },
    {
      id: 'PC-2024-003',
      name: 'Endotracheal Intubation',
      date: '2024-07-06',
      supervisor: 'Dr. Brown',
      outcome: 'successful',
      hours: '0.5',
      specialty: 'Emergency'
    }
  ];

  const clinicalCases = [
    {
      id: 'CC-2024-001',
      title: 'Complex Cardiac Case',
      presentation: 'Chest pain with ECG changes',
      date: '2024-07-08',
      complexity: 'high',
      learning_objectives: 'STEMI management, catheterization',
      reflection_status: 'completed'
    },
    {
      id: 'CC-2024-002',
      title: 'Diabetic Ketoacidosis',
      presentation: 'Altered mental status, high glucose',
      date: '2024-07-07',
      complexity: 'medium',
      learning_objectives: 'DKA management, fluid balance',
      reflection_status: 'pending'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'default',
      pending_review: 'secondary',
      in_progress: 'outline',
      successful: 'default',
      high: 'destructive',
      medium: 'secondary',
      low: 'outline'
    };
    return <Badge variant={variants[status] || 'secondary'}>{status.replace('_', ' ')}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl">Records Management</h2>
          <p className="text-gray-600">Manage your patient records, procedures, and clinical cases</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Record
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search records..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Records Tabs */}
      <Tabs defaultValue="patients" className="space-y-4">
        <TabsList>
          <TabsTrigger value="patients">Patient Records</TabsTrigger>
          <TabsTrigger value="procedures">Procedures</TabsTrigger>
          <TabsTrigger value="cases">Clinical Cases</TabsTrigger>
        </TabsList>

        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle>Patient Records</CardTitle>
              <CardDescription>
                Track your patient encounters and diagnoses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Record ID</TableHead>
                    <TableHead>Patient ID</TableHead>
                    <TableHead>Diagnosis</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Attending</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patientRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-mono text-sm">{record.id}</TableCell>
                      <TableCell>{record.patientId}</TableCell>
                      <TableCell>{record.diagnosis}</TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.type}</TableCell>
                      <TableCell>{record.attending}</TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedures">
          <Card>
            <CardHeader>
              <CardTitle>Procedures</CardTitle>
              <CardDescription>
                Log and track your procedural training
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Procedure ID</TableHead>
                    <TableHead>Procedure Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Supervisor</TableHead>
                    <TableHead>Specialty</TableHead>
                    <TableHead>Hours</TableHead>
                    <TableHead>Outcome</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {procedures.map((procedure) => (
                    <TableRow key={procedure.id}>
                      <TableCell className="font-mono text-sm">{procedure.id}</TableCell>
                      <TableCell>{procedure.name}</TableCell>
                      <TableCell>{procedure.date}</TableCell>
                      <TableCell>{procedure.supervisor}</TableCell>
                      <TableCell>{procedure.specialty}</TableCell>
                      <TableCell>{procedure.hours} hrs</TableCell>
                      <TableCell>{getStatusBadge(procedure.outcome)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cases">
          <Card>
            <CardHeader>
              <CardTitle>Clinical Cases</CardTitle>
              <CardDescription>
                Document and reflect on significant clinical cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Case ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Presentation</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Complexity</TableHead>
                    <TableHead>Learning Objectives</TableHead>
                    <TableHead>Reflection</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clinicalCases.map((case_) => (
                    <TableRow key={case_.id}>
                      <TableCell className="font-mono text-sm">{case_.id}</TableCell>
                      <TableCell>{case_.title}</TableCell>
                      <TableCell className="max-w-xs truncate">{case_.presentation}</TableCell>
                      <TableCell>{case_.date}</TableCell>
                      <TableCell>{getStatusBadge(case_.complexity)}</TableCell>
                      <TableCell className="max-w-xs truncate">{case_.learning_objectives}</TableCell>
                      <TableCell>{getStatusBadge(case_.reflection_status)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecordsManagement;