import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { CheckCircle2, FileJson, Plus, Code2 } from "lucide-react";

export function SchemaEngine() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Schema Engine</h1>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Validate Schema
        </Button>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <FileJson className="w-5 h-5 text-indigo-600" />
                Global Schema Mapping
            </CardTitle>
            <CardDescription>Assign base schema types to your content types.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Post Type</TableHead>
                        <TableHead>Base Schema</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Posts (Blog)</TableCell>
                        <TableCell>
                            <Badge variant="outline" className="font-mono bg-slate-50">Article / BlogPosting</Badge>
                        </TableCell>
                        <TableCell>
                            <span className="flex items-center text-emerald-600 text-sm">
                                <CheckCircle2 className="w-3 h-3 mr-1" /> Active
                            </span>
                        </TableCell>
                        <TableCell className="text-right"><Button variant="ghost" size="sm">Edit</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Pages</TableCell>
                        <TableCell>
                            <Badge variant="outline" className="font-mono bg-slate-50">WebPage</Badge>
                        </TableCell>
                        <TableCell>
                            <span className="flex items-center text-emerald-600 text-sm">
                                <CheckCircle2 className="w-3 h-3 mr-1" /> Active
                            </span>
                        </TableCell>
                        <TableCell className="text-right"><Button variant="ghost" size="sm">Edit</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Products</TableCell>
                        <TableCell>
                            <Select defaultValue="product">
                                <SelectTrigger className="h-8 w-[180px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="product">Product</SelectItem>
                                    <SelectItem value="software">SoftwareApplication</SelectItem>
                                    <SelectItem value="service">Service</SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                         <TableCell>
                            <span className="flex items-center text-amber-600 text-sm">
                                <Code2 className="w-3 h-3 mr-1" /> Configuration Needed
                            </span>
                        </TableCell>
                        <TableCell className="text-right"><Button variant="ghost" size="sm">Configure</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Locations (CPT)</TableCell>
                        <TableCell>
                             <Select defaultValue="local">
                                <SelectTrigger className="h-8 w-[180px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="local">LocalBusiness</SelectItem>
                                    <SelectItem value="restaurant">Restaurant</SelectItem>
                                    <SelectItem value="organization">Organization</SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                         <TableCell>
                            <span className="flex items-center text-slate-400 text-sm">
                                Disabled
                            </span>
                        </TableCell>
                        <TableCell className="text-right"><Button variant="ghost" size="sm">Enable</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-slate-200">
        <CardHeader>
            <CardTitle>Category-Based Mapping Rules</CardTitle>
            <CardDescription>Override schema based on specific categories.</CardDescription>
        </CardHeader>
        <CardContent>
             <div className="rounded-md border border-dashed border-slate-300 p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-200">
                        <Plus className="w-5 h-5 text-slate-600" />
                    </div>
                    <h3 className="font-medium text-slate-900">Add New Mapping Rule</h3>
                    <p className="text-sm text-slate-500">Apply 'Recipe' schema to posts in 'Food' category, etc.</p>
                </div>
             </div>
        </CardContent>
      </Card>
    </div>
  );
}
