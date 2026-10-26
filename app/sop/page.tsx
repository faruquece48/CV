import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SopBuilder } from "@/components/SopBuilder";

export const metadata: Metadata = {
  title: "Statement of Purpose Builder — Faruque Abdullah",
  description: "Create, preview and download a tailored PhD Statement of Purpose.",
};

export default function SopPage() {
  return <PageShell><main><SopBuilder /></main></PageShell>;
}
