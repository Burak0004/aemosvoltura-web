import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "@/components/layout/navbar-new";
import Landing from "@/pages/landing";
import Platform from "@/pages/platform";
import Modules from "@/pages/modules";
import SolutionsPage from "@/pages/solutions";
import ReactivePowerPage from "@/pages/reactive-power";
import CBAMPage from "@/pages/cbam";
import CaseStudies from "@/pages/case-studies";
import Blog from "@/pages/blog";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import P2PEnergyPage from "@/pages/p2p-energy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/platform" component={Platform} />
      <Route path="/modules/:slug?" component={Modules} />
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/reactive-power" component={ReactivePowerPage} />
      <Route path="/cbam" component={CBAMPage} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/blog/:slug?" component={Blog} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/p2p-energy" component={P2PEnergyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Helmet>
            <html lang="tr" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Helmet>
          <Navbar />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
