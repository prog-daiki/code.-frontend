import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="border-t sticky top-full">
      <div className="container h-16 flex items-center justify-between">
        <p>&copy; dai</p>
        <ModeToggle />
      </div>
    </footer>
  );
};
