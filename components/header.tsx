import React from "react";
import { Logo } from "@/components/logo";
import { HeaderNav } from "@/components/header-nav";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="h-20 container flex items-center justify-between">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
};
