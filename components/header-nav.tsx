import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeaderNav = () => {
  return (
    <div className="flex gap-x-4">
      <Button variant="ghost" asChild>
        <Link href="/">ログイン</Link>
      </Button>
      <Button className="bg-blue-500 hover:bg-blue-600" asChild>
        <Link href="/">会員登録</Link>
      </Button>
    </div>
  );
};
