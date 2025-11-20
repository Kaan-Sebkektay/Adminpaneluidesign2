import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { CheckCircle2, XCircle, AlertTriangle, Wand2, Link as LinkIcon } from "lucide-react";

export function ContentPerformance() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Content Performance</h1>
        <div className="flex gap-2">
            <Button variant="outline">Select Post</Button>
            <Button className="bg-[#0073AA] hover:bg-[#006395]">Analyze Current Post</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle>Quality Assessment</CardTitle>
                    <CardDescription>Analysis for "The Ultimate Guide to Remote Work"</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="space-y-2">
                            <div className="text-sm text-slate-500">Content Score</div>
                            <div className="text-4xl font-bold text-emerald-600">85</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm text-slate-500">Readability</div>
                            <div className="text-4xl font-bold text-slate-700">Good</div>
                        </div>
                         <div className="space-y-2">
                            <div className="text-sm text-slate-500">Word Count</div>
                            <div className="text-4xl font-bold text-slate-700">1,240</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <CheckItem status="pass" text="Keyword density is within optimal range (1.2%)." />
                        <CheckItem status="pass" text="Title tag includes focus keyword." />
                        <CheckItem status="warning" text="Meta description is slightly too long (165 chars)." />
                        <CheckItem status="fail" text="Missing alt text on 2 images." />
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wand2 className="w-5 h-5 text-indigo-600" />
                        AI Suggested Improvements
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <ImprovementItem 
                        title="Improve Heading Structure"
                        description="Your H2 'Benefits' is too generic. Try 'Benefits of Remote Work for Employees' to capture long-tail traffic."
                     />
                     <ImprovementItem 
                        title="Add Semantic Keywords"
                        description="Consider adding terms like 'digital nomad', 'productivity tools', and 'work-life balance' to improve contextual relevance."
                     />
                </CardContent>
            </Card>
        </div>

        <div className="space-y-6">
            <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle>Google Discover</CardTitle>
                    <CardDescription>Suitability Check</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">High Quality Image (1200px+)</span>
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">Engaging Title</span>
                         <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <Separator />
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">Timeliness / Trending</span>
                         <AlertTriangle className="w-5 h-5 text-amber-500" />
                    </div>
                    <div className="mt-4 p-3 bg-slate-50 text-xs text-slate-500 rounded">
                        This content has a <strong>High</strong> probability of appearing in Discover if freshness is improved.
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <LinkIcon className="w-4 h-4 text-slate-500" />
                        Internal Link Suggestions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[200px] pr-4">
                        <div className="space-y-3">
                            <div className="text-sm">
                                <p className="text-slate-900 font-medium">Remote Team Management</p>
                                <p className="text-xs text-slate-500">Relevance: 92%</p>
                            </div>
                             <div className="text-sm">
                                <p className="text-slate-900 font-medium">Best Zoom Alternatives</p>
                                <p className="text-xs text-slate-500">Relevance: 85%</p>
                            </div>
                             <div className="text-sm">
                                <p className="text-slate-900 font-medium">Home Office Setup Guide</p>
                                <p className="text-xs text-slate-500">Relevance: 78%</p>
                            </div>
                             <div className="text-sm">
                                <p className="text-slate-900 font-medium">Productivity Hacks 2024</p>
                                <p className="text-xs text-slate-500">Relevance: 65%</p>
                            </div>
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

function CheckItem({ status, text }: { status: 'pass' | 'warning' | 'fail', text: string }) {
    const icons = {
        pass: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
        warning: <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />,
        fail: <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
    };
    
    return (
        <div className="flex items-start gap-3">
            {icons[status]}
            <span className="text-sm text-slate-700">{text}</span>
        </div>
    )
}

function ImprovementItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <h4 className="text-indigo-900 font-semibold text-sm mb-1">{title}</h4>
            <p className="text-indigo-800/80 text-xs leading-relaxed">{description}</p>
            <Button size="sm" variant="link" className="px-0 text-indigo-700 h-auto text-xs mt-2">Apply Fix</Button>
        </div>
    )
}
