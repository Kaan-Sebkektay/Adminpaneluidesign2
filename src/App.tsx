import React, { useState } from "react";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./components/dashboard/Dashboard";
import { SeoSettings } from "./components/settings/SeoSettings";
import { SchemaEngine } from "./components/schema/SchemaEngine";
import { SearchConsole } from "./components/search-console/SearchConsole";
import { Analytics } from "./components/analytics/Analytics";
import { KeywordIntelligence } from "./components/keywords/KeywordIntelligence";
import { ContentPerformance } from "./components/content/ContentPerformance";
import { SitemapIndexNow } from "./components/sitemap/SitemapIndexNow";
import { SystemTools } from "./components/system/SystemTools";

export default function App() {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderContent = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "seo-settings":
        return <SeoSettings />;
      case "schema-engine":
        return <SchemaEngine />;
      case "search-console":
        return <SearchConsole />;
      case "analytics":
        return <Analytics />;
      case "keyword-intelligence":
        return <KeywordIntelligence />;
      case "content-performance":
        return <ContentPerformance />;
      case "sitemap":
        return <SitemapIndexNow />;
      case "system-tools":
        return <SystemTools />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} setCurrentView={setCurrentView}>
      {renderContent()}
    </Layout>
  );
}
