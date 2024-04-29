import { signIn, signOut } from "@/actions/auth";

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <form action={signIn}>
        <button>login</button>
      </form>
      <form action={signOut}>
        <button>logout</button>
      </form>
    </div>
  );
}
