import { ModeToggle } from "@/components/mode-toggle";

export const Footer = () => {
  return (
    <footer className="border-t sticky top-full">
      <div className="container h-20 flex items-center justify-between">
        <p>&copy; dai</p>
        <ModeToggle />
      </div>
    </footer>
  );
};
