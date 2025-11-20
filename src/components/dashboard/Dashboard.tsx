import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { ArrowUpRight, AlertCircle, CheckCircle2, BarChart, Zap } from "lucide-react";
import { Button } from "../ui/button";

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Zen Optimize</h1>
          <p className="text-slate-500">Smart SEO & Content Intelligence Dashboard</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">Refresh Data</Button>
            <Button className="bg-[#0073AA] hover:bg-[#006395]">Quick Scan</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          title="Search Visibility" 
          score={78} 
          trend="+5.2%" 
          color="text-blue-600"
          progressColor="bg-blue-600"
        />
        <StatsCard 
          title="SEO Health" 
          score={92} 
          trend="+1.4%" 
          color="text-emerald-600" 
          progressColor="bg-emerald-600"
        />
        <StatsCard 
          title="Content Quality" 
          score={64} 
          trend="-2.1%" 
          color="text-amber-500"
          progressColor="bg-amber-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Opportunities */}
        <Card className="lg:col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Recent Opportunities
            </CardTitle>
            <CardDescription>High impact actions to improve your ranking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <OpportunityItem 
                title="Low CTR on High Impression Pages" 
                description="3 pages ranking in top 5 have < 2% CTR."
                action="Fix Meta Tags"
                type="critical"
              />
              <OpportunityItem 
                title="Striking Distance Keywords" 
                description="5 keywords ranking between position 6-20."
                action="Optimize Content"
                type="warning"
              />
              <OpportunityItem 
                title="Missing Schema Markup" 
                description="Product schema missing on 12 product pages."
                action="Add Schema"
                type="warning"
              />
              <OpportunityItem 
                title="New Keyword Discovered" 
                description="'Minimalist office decor' is trending (+400%)."
                action="Create Content"
                type="info"
              />
            </div>
          </CardContent>
        </Card>

        {/* Diagnostics */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              System Diagnostics
            </CardTitle>
            <CardDescription>Status of core connections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <DiagnosticItem label="Sitemap Status" status="Healthy" lastCheck="2 mins ago" />
              <DiagnosticItem label="IndexNow API" status="Active" lastCheck="1 hour ago" />
              <DiagnosticItem label="Google Search Console" status="Connected" lastCheck="5 mins ago" />
              <DiagnosticItem label="Google Analytics 4" status="Connected" lastCheck="5 mins ago" />
              <DiagnosticItem label="Keyword API" status="Connected" lastCheck="5 mins ago" />
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100">
               <div className="p-3 bg-slate-50 rounded-md border border-slate-200 text-sm text-slate-600">
                  <span className="font-semibold">Note:</span> Next scheduled crawl in 4 hours.
               </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatsCard({ title, score, trend, color, progressColor }: { title: string, score: number, trend: string, color: string, progressColor: string }) {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium text-slate-500">{title}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full bg-slate-100 ${trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {trend}
                    </span>
                </div>
                <div className="flex items-end gap-3 mb-2">
                    <span className={`text-4xl font-bold ${color}`}>{score}</span>
                    <span className="text-slate-400 text-sm mb-1">/ 100</span>
                </div>
                {/* Custom Progress Bar */}
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                        className={`h-full ${progressColor} transition-all duration-500 ease-out`} 
                        style={{ width: `${score}%` }}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

function OpportunityItem({ title, description, action, type }: { title: string, description: string, action: string, type: 'critical' | 'warning' | 'info' }) {
    const bgColors = {
        critical: 'bg-rose-50 border-rose-100',
        warning: 'bg-amber-50 border-amber-100',
        info: 'bg-blue-50 border-blue-100'
    }
    const textColors = {
        critical: 'text-rose-700',
        warning: 'text-amber-700',
        info: 'text-blue-700'
    }

    return (
        <div className={`p-4 rounded-lg border ${bgColors[type]} flex justify-between items-center`}>
            <div>
                <h4 className={`font-semibold text-sm ${textColors[type]}`}>{title}</h4>
                <p className="text-xs text-slate-600 mt-1">{description}</p>
            </div>
            <Button size="sm" variant="outline" className="bg-white text-slate-700 border-slate-200 hover:bg-slate-50 h-8 text-xs">
                {action} <ArrowUpRight className="w-3 h-3 ml-1" />
            </Button>
        </div>
    )
}

function DiagnosticItem({ label, status, lastCheck }: { label: string, status: string, lastCheck: string }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-medium text-slate-700">{label}</span>
            </div>
            <div className="text-right">
                <div className="text-sm text-slate-900 font-medium">{status}</div>
                <div className="text-xs text-slate-400">{lastCheck}</div>
            </div>
        </div>
    )
}
