import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Search, Plus, Check } from "lucide-react";
import { Separator } from "../ui/separator";

export function KeywordIntelligence() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Keyword Intelligence</h1>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-6">
             <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <Input placeholder="Enter a focus keyword to research..." className="pl-10" />
                </div>
                <Button className="bg-[#0073AA] hover:bg-[#006395] px-8">Analyze</Button>
             </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Card className="shadow-sm border-slate-200">
            <CardHeader>
                <CardTitle>Keyword Overview</CardTitle>
                <CardDescription>Analysis for "sustainable packaging"</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-center">
                        <div className="text-sm text-slate-500 mb-1">Monthly Volume</div>
                        <div className="text-2xl font-bold text-slate-900">12.5k</div>
                    </div>
                     <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-center">
                        <div className="text-sm text-slate-500 mb-1">Difficulty</div>
                        <div className="text-2xl font-bold text-amber-600">45/100</div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-700">Intent</div>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">Informational</Badge>
                     <Badge className="ml-2 bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200">Commercial</Badge>
                </div>
                <Separator />
                 <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-700">CPC</div>
                    <div className="text-lg font-mono text-slate-600">$2.45</div>
                </div>
            </CardContent>
         </Card>

         <Card className="lg:col-span-2 shadow-sm border-slate-200">
            <CardHeader>
                <CardTitle>Related Keywords & Long Tail</CardTitle>
                <CardDescription>Opportunities to expand your content.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Keyword</TableHead>
                            <TableHead>Volume</TableHead>
                            <TableHead>KD%</TableHead>
                            <TableHead>Relevance</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         <TableRow>
                            <TableCell className="font-medium">eco friendly packaging materials</TableCell>
                            <TableCell>3,400</TableCell>
                            <TableCell><span className="text-emerald-600 font-medium">28</span></TableCell>
                            <TableCell>High</TableCell>
                            <TableCell className="text-right"><Button size="sm" variant="ghost" className="h-8 w-8 p-0"><Plus className="h-4 w-4" /></Button></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">sustainable packaging for small business</TableCell>
                            <TableCell>1,200</TableCell>
                            <TableCell><span className="text-emerald-600 font-medium">15</span></TableCell>
                            <TableCell>Very High</TableCell>
                            <TableCell className="text-right"><Button size="sm" variant="ghost" className="h-8 w-8 p-0"><Plus className="h-4 w-4" /></Button></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">biodegradable food packaging</TableCell>
                            <TableCell>5,600</TableCell>
                            <TableCell><span className="text-amber-600 font-medium">52</span></TableCell>
                            <TableCell>Medium</TableCell>
                            <TableCell className="text-right"><Button size="sm" variant="ghost" className="h-8 w-8 p-0"><Plus className="h-4 w-4" /></Button></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">compostable packaging</TableCell>
                            <TableCell>8,100</TableCell>
                            <TableCell><span className="text-amber-600 font-medium">48</span></TableCell>
                            <TableCell>High</TableCell>
                            <TableCell className="text-right"><Button size="sm" variant="ghost" className="h-8 w-8 p-0"><Plus className="h-4 w-4" /></Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
         </Card>
      </div>

      <Card className="shadow-sm border-slate-200 bg-slate-50 border-dashed">
        <CardHeader className="pb-2">
            <CardTitle className="text-sm uppercase text-slate-500 font-semibold tracking-wider">Smart Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                <SuggestionChip text="Add 'biodegradable' to your H2 tag" />
                <SuggestionChip text="Target 'small business' in your FAQ section" />
                <SuggestionChip text="Consider a comparison table for 'eco vs plastic'" />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SuggestionChip({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-slate-200 text-sm text-slate-700 hover:border-[#0073AA] transition-colors cursor-pointer group">
            <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-[#0073AA]">
                <Plus className="w-3 h-3 text-slate-400 group-hover:text-[#0073AA]" />
            </div>
            {text}
        </div>
    )
}
