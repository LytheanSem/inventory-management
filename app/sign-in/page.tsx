import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black to-blue-500 flex items-center justify-center">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg ">
        <SignIn />
        <Link href="/" className="text-white font-medium underline hover:text-gray-300 mt-4 block text-center">Go back</Link>
      </div>
    </div>
  )
}
