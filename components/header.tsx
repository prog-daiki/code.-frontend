import { Logo } from "@/components/logo";
import { HeaderNav } from "@/components/header-nav";

export const Header = () => {
  return (
    <div className="h-16 container flex items-center justify-between border-b">
      <Logo />
      <HeaderNav />
    </div>
  );
};
