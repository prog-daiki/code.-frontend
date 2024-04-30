import { LogIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsGithub } from "react-icons/bs";
import { signIn, signOut } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { getUser } from "@/data/user";
import Image from "next/image";

export const HeaderNav = async () => {
  const user = await getUser();
  console.log(user);
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full">
            <Image
              src={user.user.user_metadata.avatar_url}
              alt="avatar"
              width={48}
              height={48}
              className="rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem>
              <form action={signOut}>
                <button>ログアウト</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Dialog>
          <DialogTrigger>
            <div className="flex items-center gap-x-2 border p-4 rounded-md hover:opacity-80 transition-all">
              <LogIn />
              ログイン
            </div>
          </DialogTrigger>
          <DialogContent className="px-24 py-12">
            <DialogHeader>
              <DialogTitle className="text-center text-4xl font-semibold mb-8">
                code.
              </DialogTitle>
              <DialogDescription className="text-center text-md">
                作って学べる、
                <br />
                プログラミング学習サービス
              </DialogDescription>
            </DialogHeader>
            <form className="cursor-pointer mt-4" action={signIn}>
              <Button
                variant="outline"
                className="w-full p-6 flex gap-x-2 justify-start"
              >
                <BsGithub className="h-6 w-6" />
                <p>Githubアカウントでログイン</p>
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
