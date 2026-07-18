import type { LucideIcon } from "lucide-react";
import {
  Users, TrendingUp, GitBranch, LifeBuoy, MessageCircle, Hash, Video, Mail,
  Send, MessageSquare, Calendar, ShoppingBag, ShoppingCart, CreditCard,
  Wallet, Calculator, HardDrive, Box, FileText, Table2, Megaphone,
  ListChecks, LayoutGrid, FileSpreadsheet,
} from "lucide-react";

export interface AppIntegration {
  name: string;
  category: string;
  icon: LucideIcon;
}

// Real, named third-party apps connectable through our n8n-powered automation
// layer. Deliberately shown as name + generic icon rather than brand logos —
// see note in app/integrations/page.tsx for why.
export const appIntegrations: AppIntegration[] = [
  { name: "Salesforce", category: "CRM", icon: Users },
  { name: "HubSpot", category: "CRM", icon: TrendingUp },
  { name: "Pipedrive", category: "CRM", icon: GitBranch },
  { name: "Zendesk", category: "Support", icon: LifeBuoy },
  { name: "Freshdesk", category: "Support", icon: LifeBuoy },
  { name: "Intercom", category: "Support", icon: MessageCircle },
  { name: "Slack", category: "Communication", icon: Hash },
  { name: "Microsoft Teams", category: "Communication", icon: Video },
  { name: "Gmail", category: "Communication", icon: Mail },
  { name: "Outlook", category: "Communication", icon: Mail },
  { name: "Telegram", category: "Communication", icon: Send },
  { name: "WhatsApp Business", category: "Communication", icon: MessageSquare },
  { name: "Google Calendar", category: "Scheduling", icon: Calendar },
  { name: "Calendly", category: "Scheduling", icon: Calendar },
  { name: "Shopify", category: "E-commerce", icon: ShoppingBag },
  { name: "WooCommerce", category: "E-commerce", icon: ShoppingCart },
  { name: "Stripe", category: "Payments", icon: CreditCard },
  { name: "PayPal", category: "Payments", icon: Wallet },
  { name: "QuickBooks", category: "Finance", icon: Calculator },
  { name: "Google Drive", category: "Storage", icon: HardDrive },
  { name: "Dropbox", category: "Storage", icon: Box },
  { name: "Notion", category: "Docs", icon: FileText },
  { name: "Airtable", category: "Database", icon: Table2 },
  { name: "Mailchimp", category: "Marketing", icon: Megaphone },
  { name: "ActiveCampaign", category: "Marketing", icon: Megaphone },
  { name: "Asana", category: "Project Management", icon: ListChecks },
  { name: "Trello", category: "Project Management", icon: LayoutGrid },
  { name: "Google Sheets", category: "Data", icon: FileSpreadsheet },
];
