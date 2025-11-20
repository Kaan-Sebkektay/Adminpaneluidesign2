import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { BarChart3, Clock, Activity, Users } from "lucide-react";

const trafficData = [
  { name: 'Organic Search', value: 65, color: '#0073AA' },
  { name: 'Direct', value: 15, color: '#10b981' },
  { name: 'Social', value: 12, color: '#8b5cf6' },
  { name: 'Referral', value: 8, color: '#f59e0b' },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <StatsMetric 
            title="Avg. Engagement Time" 
            value="2m 45s" 
            icon={Clock}
            trend="+12%"
            trendColor="text-emerald-600"
         />
         <StatsMetric 
            title="Bounce Rate" 
            value="42.3%" 
            icon={Activity}
            trend="-2.1%"
            trendColor="text-emerald-600"
         />
         <StatsMetric 
            title="Active Users" 
            value="842" 
            icon={Users}
            trend="+5.4%"
            trendColor="text-emerald-600"
         />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-slate-200">
            <CardHeader>
                <CardTitle>Top Performing Pages</CardTitle>
                <CardDescription>Pages with highest engagement and traffic.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Page Title</TableHead>
                            <TableHead>Views</TableHead>
                            <TableHead>Engagement</TableHead>
                            <TableHead>Bounce Rate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">/blog/ultimate-guide-to-seo</TableCell>
                            <TableCell>12,450</TableCell>
                            <TableCell>4m 20s</TableCell>
                            <TableCell>35%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">/products/zen-pro</TableCell>
                            <TableCell>8,200</TableCell>
                            <TableCell>3m 10s</TableCell>
                            <TableCell>28%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">/about-us</TableCell>
                            <TableCell>5,100</TableCell>
                            <TableCell>1m 45s</TableCell>
                            <TableCell>45%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">/blog/content-marketing-tips</TableCell>
                            <TableCell>4,800</TableCell>
                            <TableCell>5m 12s</TableCell>
                            <TableCell>32%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">/contact</TableCell>
                            <TableCell>2,300</TableCell>
                            <TableCell>1m 10s</TableCell>
                            <TableCell>60%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
            <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your users are coming from.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={trafficData}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {trafficData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <RechartsTooltip />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatsMetric({ title, value, icon: Icon, trend, trendColor }: any) {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardContent className="p-6 flex justify-between items-center">
                <div>
                    <div className="text-sm text-slate-500 font-medium mb-1">{title}</div>
                    <div className="text-2xl font-bold text-slate-900">{value}</div>
                    <div className={`text-xs font-bold mt-1 ${trendColor}`}>{trend} vs last month</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                    <Icon className="w-5 h-5 text-slate-400" />
                </div>
            </CardContent>
        </Card>
    )
}
