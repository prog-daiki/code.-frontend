import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeaderNav = () => {
  return (
    <div className="flex gap-x-4">
      <Button variant="ghost" asChild>
        <Link href="/">ログイン</Link>
      </Button>
      <Button className="bg-primary hover:bg-primary-hover" asChild>
        <Link href="/">会員登録</Link>
      </Button>
    </div>
  );
};
