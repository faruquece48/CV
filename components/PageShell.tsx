import { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="page-shell"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}
