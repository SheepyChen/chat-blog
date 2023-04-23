import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="mb-32 grid text-center">
          <Link href="/introduction" className="text-left">
            introduction
          </Link>
        </div>
        <div>
          <Link href="/posts">posts</Link>
        </div>
      </div>
    </main>
  );
}
