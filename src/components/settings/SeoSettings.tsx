import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Globe, Lock, Share2, Smartphone } from "lucide-react";

export function SeoSettings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">SEO Settings</h1>
        <Button className="bg-[#0073AA] hover:bg-[#006395]">Save Changes</Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-white border border-slate-200 p-1 h-auto mb-6">
            <TabsTrigger value="general" className="data-[state=active]:bg-slate-100 data-[state=active]:text-[#0073AA]">General & Titles</TabsTrigger>
            <TabsTrigger value="indexing" className="data-[state=active]:bg-slate-100 data-[state=active]:text-[#0073AA]">Indexing & Robots</TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-slate-100 data-[state=active]:text-[#0073AA]">Social Media</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
            <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-[#0073AA]" />
                        Title & Meta Description Templates
                    </CardTitle>
                    <CardDescription>Configure default patterns for your content titles and descriptions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Post Type</Label>
                            <Select defaultValue="posts">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select post type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="posts">Posts (Blog)</SelectItem>
                                    <SelectItem value="pages">Pages</SelectItem>
                                    <SelectItem value="products">Products</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    
                    <Separator />

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>SEO Title Template</Label>
                            <div className="flex gap-2">
                                <Input defaultValue="{title} - {sitename}" className="font-mono text-sm" />
                            </div>
                            <p className="text-xs text-slate-500">Available variables: <span className="bg-slate-100 px-1 rounded text-slate-700">{`{title}`}</span>, <span className="bg-slate-100 px-1 rounded text-slate-700">{`{sitename}`}</span>, <span className="bg-slate-100 px-1 rounded text-slate-700">{`{category}`}</span>, <span className="bg-slate-100 px-1 rounded text-slate-700">{`{location}`}</span></p>
                        </div>

                        <div className="space-y-2">
                            <Label>Meta Description Template</Label>
                            <Input defaultValue="{excerpt}" className="font-mono text-sm" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="indexing" className="space-y-6">
            <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lock className="w-5 h-5 text-rose-600" />
                        Canonical & Robots Rules
                    </CardTitle>
                    <CardDescription>Control how search engines index your site.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Auto-Canonical</Label>
                            <p className="text-sm text-slate-500">Automatically generate self-referencing canonical tags.</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Noindex Expired Events</Label>
                            <p className="text-sm text-slate-500">Automatically add noindex tag to past events.</p>
                        </div>
                        <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Noindex Tag Archives</Label>
                            <p className="text-sm text-slate-500">Prevent tag pages from bloating your index.</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
            <Card className="shadow-sm border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Share2 className="w-5 h-5 text-indigo-600" />
                        OpenGraph & Twitter Cards
                    </CardTitle>
                    <CardDescription>Customize how your content looks when shared on social media.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                     <div className="space-y-2">
                        <Label>Default OG Image</Label>
                        <div className="flex gap-2 items-center">
                             <div className="w-32 h-20 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-slate-400">
                                Preview
                             </div>
                             <Button variant="outline">Upload Image</Button>
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <Label>Twitter Card Type</Label>
                        <Select defaultValue="summary_large_image">
                            <SelectTrigger>
                                <SelectValue placeholder="Select card type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="summary">Summary</SelectItem>
                                <SelectItem value="summary_large_image">Summary with Large Image</SelectItem>
                                <SelectItem value="app">App</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
