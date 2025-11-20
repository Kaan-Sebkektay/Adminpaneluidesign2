import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { ArrowUp, ArrowDown, ExternalLink, Search } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', clicks: 400, impressions: 2400 },
  { name: 'Tue', clicks: 300, impressions: 1398 },
  { name: 'Wed', clicks: 500, impressions: 9800 },
  { name: 'Thu', clicks: 278, impressions: 3908 },
  { name: 'Fri', clicks: 189, impressions: 4800 },
  { name: 'Sat', clicks: 239, impressions: 3800 },
  { name: 'Sun', clicks: 349, impressions: 4300 },
];

export function SearchConsole() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Search Console</h1>
        <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            API Connected
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <Card className="shadow-sm border-slate-200 lg:col-span-3">
            <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>Clicks vs Impressions (Last 7 Days)</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0073AA" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#0073AA" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorImp" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                            <Tooltip />
                            <Area type="monotone" dataKey="impressions" stroke="#82ca9d" fillOpacity={1} fill="url(#colorImp)" />
                            <Area type="monotone" dataKey="clicks" stroke="#0073AA" fillOpacity={1} fill="url(#colorClicks)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="shadow-sm border-slate-200 bg-[#0073AA] text-white">
                <CardContent className="p-6">
                    <div className="text-blue-100 text-sm mb-1">Total Clicks</div>
                    <div className="text-4xl font-bold mb-4">2.4k</div>
                    <div className="flex items-center text-sm text-blue-100 bg-blue-800/30 rounded p-1 w-fit">
                        <ArrowUp className="w-3 h-3 mr-1" /> +12%
                    </div>
                </CardContent>
            </Card>
            <Card className="shadow-sm border-slate-200">
                <CardContent className="p-6">
                    <div className="text-slate-500 text-sm mb-1">Avg. Position</div>
                    <div className="text-4xl font-bold text-slate-900 mb-4">14.2</div>
                     <div className="flex items-center text-sm text-emerald-600 bg-emerald-50 rounded p-1 w-fit">
                        <ArrowUp className="w-3 h-3 mr-1" /> +2.1
                    </div>
                </CardContent>
            </Card>
             <Card className="shadow-sm border-slate-200">
                <CardContent className="p-6">
                    <div className="text-slate-500 text-sm mb-1">CTR</div>
                    <div className="text-4xl font-bold text-slate-900 mb-4">3.2%</div>
                     <div className="flex items-center text-sm text-rose-500 bg-rose-50 rounded p-1 w-fit">
                        <ArrowDown className="w-3 h-3 mr-1" /> -0.4%
                    </div>
                </CardContent>
            </Card>
         </div>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-slate-500" />
                Top Queries & Opportunities
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Query</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>Impressions</TableHead>
                        <TableHead>CTR</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">minimalist desk setup</TableCell>
                        <TableCell>1,240</TableCell>
                        <TableCell>12,000</TableCell>
                        <TableCell>10.3%</TableCell>
                        <TableCell>2.1</TableCell>
                        <TableCell><Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-0">Ranking High</Badge></TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">ergonomic office chair review</TableCell>
                        <TableCell>890</TableCell>
                        <TableCell>24,000</TableCell>
                        <TableCell>3.7%</TableCell>
                        <TableCell>8.4</TableCell>
                        <TableCell><Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-0">Opportunity</Badge></TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">best monitor for coding 2024</TableCell>
                        <TableCell>450</TableCell>
                        <TableCell>8,000</TableCell>
                        <TableCell>5.6%</TableCell>
                        <TableCell>4.2</TableCell>
                         <TableCell><Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-0">Ranking High</Badge></TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">standing desk benefits</TableCell>
                        <TableCell>120</TableCell>
                        <TableCell>15,000</TableCell>
                        <TableCell>0.8%</TableCell>
                        <TableCell>18.2</TableCell>
                        <TableCell><Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200 border-0">Poor CTR</Badge></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
