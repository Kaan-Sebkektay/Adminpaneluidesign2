import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ScrollArea } from "../ui/scroll-area";
import { Trash2, Database, Key, FileText } from "lucide-react";

export function SystemTools() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">System Tools</h1>

      <Tabs defaultValue="cache" className="w-full">
        <TabsList className="bg-white border border-slate-200 p-1 h-auto mb-6">
            <TabsTrigger value="cache" className="data-[state=active]:bg-slate-100 data-[state=active]:text-[#0073AA]">Cache & Data</TabsTrigger>
            <TabsTrigger value="api" className="data-[state=active]:bg-slate-100 data-[state=active]:text-[#0073AA]">API Keys</TabsTrigger>
            <TabsTrigger value="logs" className="data-[state=active]:bg-slate-100 data-[state=active]:text-[#0073AA]">Error Logs</TabsTrigger>
             <TabsTrigger value="info" className="data-[state=active]:bg-slate-100 data-[state=active]:text-[#0073AA]">Plugin Info</TabsTrigger>
        </TabsList>

        <TabsContent value="cache" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card className="shadow-sm border-slate-200">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Database className="w-5 h-5 text-slate-500" />
                            Cache Management
                        </CardTitle>
                        <CardDescription>Clear internal caches to force data refresh.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <div>
                                <div className="font-medium text-slate-900">Object Cache</div>
                                <div className="text-xs text-slate-500">24MB used</div>
                            </div>
                            <Button variant="outline" size="sm" className="text-rose-600 border-rose-200 hover:bg-rose-50">Clear</Button>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <div>
                                <div className="font-medium text-slate-900">Analysis Cache</div>
                                <div className="text-xs text-slate-500">156MB used</div>
                            </div>
                            <Button variant="outline" size="sm" className="text-rose-600 border-rose-200 hover:bg-rose-50">Clear</Button>
                        </div>
                         <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <div>
                                <div className="font-medium text-slate-900">Transient Data</div>
                                <div className="text-xs text-slate-500">1.2MB used</div>
                            </div>
                            <Button variant="outline" size="sm" className="text-rose-600 border-rose-200 hover:bg-rose-50">Clear</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
             <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Key className="w-5 h-5 text-amber-500" />
                        API Connections
                    </CardTitle>
                    <CardDescription>Manage connections to third-party services.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label>Google Search Console API Key</Label>
                        <div className="flex gap-2">
                             <Input type="password" value="************************" readOnly />
                             <Button variant="outline">Update</Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Google Analytics 4 Property ID</Label>
                         <div className="flex gap-2">
                             <Input value="G-XXXXXXXXXX" />
                             <Button className="bg-[#0073AA] hover:bg-[#006395]">Save</Button>
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label>IndexNow API Key</Label>
                         <div className="flex gap-2">
                             <Input value="8f9a2d..." readOnly className="bg-slate-50 text-slate-500" />
                             <Button variant="outline">Regenerate</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-6">
             <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-slate-500" />
                        System Logs
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[300px] w-full rounded-md border border-slate-200 bg-slate-900 p-4">
                        <div className="font-mono text-xs text-slate-300 space-y-1">
                            <div>[2024-11-20 10:23:14] INFO: Cron job executed successfully.</div>
                            <div>[2024-11-20 10:15:00] INFO: Sitemap regenerated (142 urls).</div>
                            <div className="text-yellow-400">[2024-11-20 09:45:12] WARN: Slow response from GSC API (2.4s).</div>
                            <div>[2024-11-20 08:00:00] INFO: Daily scan started.</div>
                            <div className="text-red-400">[2024-11-19 23:12:44] ERROR: Failed to connect to Image Optimization server.</div>
                        </div>
                    </ScrollArea>
                    <div className="mt-4 flex justify-end">
                        <Button variant="outline" className="text-rose-600 border-rose-200 hover:bg-rose-50">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Clear Logs
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

         <TabsContent value="info" className="space-y-6">
             <Card className="shadow-sm border-slate-200">
                <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                             <span className="text-2xl font-bold text-emerald-600">Z</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">Zen Optimize</h3>
                            <p className="text-slate-500">Version 1.0.0</p>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="secondary">Pro License</Badge>
                            <Badge variant="outline">Up to date</Badge>
                        </div>
                        <div className="text-sm text-slate-500 max-w-md pt-4 border-t border-slate-100">
                            Zen Optimize is a lightweight, professional SEO and Content Intelligence plugin for WordPress. Designed for speed and simplicity.
                        </div>
                    </div>
                </CardContent>
            </Card>
         </TabsContent>
      </Tabs>
    </div>
  );
}
