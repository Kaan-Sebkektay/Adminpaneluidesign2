import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Map, RefreshCw, ExternalLink, Globe } from "lucide-react";

export function SitemapIndexNow() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Sitemap & IndexNow</h1>
        <div className="flex gap-2">
            <Button variant="outline">View XML Sitemap</Button>
            <Button className="bg-[#0073AA] hover:bg-[#006395]">
                <RefreshCw className="w-4 h-4 mr-2" />
                Ping IndexNow
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Card className="lg:col-span-2 shadow-sm border-slate-200">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Map className="w-5 h-5 text-indigo-600" />
                    Sitemap Configuration
                </CardTitle>
                <CardDescription>Control which content types are included in your sitemap.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Post Type</TableHead>
                            <TableHead>Include in Sitemap</TableHead>
                            <TableHead>Last Modified</TableHead>
                            <TableHead>Items</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Posts</TableCell>
                            <TableCell><Switch defaultChecked /></TableCell>
                            <TableCell className="text-slate-500">2 mins ago</TableCell>
                            <TableCell>142</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Pages</TableCell>
                            <TableCell><Switch defaultChecked /></TableCell>
                            <TableCell className="text-slate-500">2 days ago</TableCell>
                            <TableCell>24</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Products</TableCell>
                            <TableCell><Switch defaultChecked /></TableCell>
                            <TableCell className="text-slate-500">5 hours ago</TableCell>
                            <TableCell>89</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Categories</TableCell>
                            <TableCell><Switch /></TableCell>
                            <TableCell className="text-slate-500">-</TableCell>
                            <TableCell>12</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Tags</TableCell>
                            <TableCell><Switch /></TableCell>
                            <TableCell className="text-slate-500">-</TableCell>
                            <TableCell>450</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-emerald-600" />
                        IndexNow Status
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Status</span>
                        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-0">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">API Key</span>
                         <span className="font-mono text-xs text-slate-400">...8f9a2</span>
                    </div>
                     <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Last Ping</span>
                         <span className="text-sm font-medium text-slate-900">10 mins ago</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                        <p className="text-xs text-slate-500 mb-3">Supported Search Engines:</p>
                        <div className="flex gap-2">
                            <Badge variant="outline" className="font-normal text-slate-600">Bing</Badge>
                            <Badge variant="outline" className="font-normal text-slate-600">Yandex</Badge>
                            <Badge variant="outline" className="font-normal text-slate-600">Naver</Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200 bg-slate-50">
                <CardContent className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Sitemap Preview</h3>
                    <div className="font-mono text-xs text-slate-500 bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                        {`<?xml version="1.0" encoding="UTF-8"?>`}
                        <br/>
                        {`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`}
                        <br/>
                        &nbsp;&nbsp;{`<url>`}
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`<loc>https://example.com/</loc>`}
                        <br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;{`<lastmod>2024-10-25</lastmod>`}
                        <br/>
                        &nbsp;&nbsp;{`</url>`}
                         <br/>
                        &nbsp;&nbsp;...
                    </div>
                     <Button variant="link" className="px-0 text-[#0073AA] mt-2 text-xs">
                        Open in new tab <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
