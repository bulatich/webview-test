import { useState } from "react";
import {
  Home,
  Search,
  User,
  Settings,
  MessageCircle,
  Heart,
  Bell,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Search", icon: Search },
  { href: "/messages", label: "Messages", icon: MessageCircle },
  { href: "/likes", label: "Likes", icon: Heart },
  { href: "/profile", label: "Profile", icon: User },
];

/**
 * Mobile webview navbar with bottom tab navigation (modern mobile UX pattern)
 */
export function MobileNavbar() {
  const [activeTab, setActiveTab] = useState("/");

  return (
    <div className="flex h-screen flex-col bg-background md:hidden">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="text-lg font-bold">My App</div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings className="size-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-20">
        <div className="space-y-4 p-4">
          {/* Example content with shadcn Card */}
          <Card className="p-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Welcome</h2>
              <p className="text-sm text-muted-foreground">
                This is a mobile webview navbar with bottom tab navigation
              </p>
            </div>
          </Card>
        </div>
      </main>

      {/* Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur md:hidden">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.href);
                }}
                className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className={`size-5 ${isActive ? "fill-current" : ""}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
