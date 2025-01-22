import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200 p-4 flex flex-col">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">Qraft</span>
        </Link>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto"> {/* Ensure Menu fills remaining height */}
          <Menu />
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 bg-blue-200 overflow-y-auto"> r{/* Ensure Right fills remaining width and height */}
      </div>
    </div>
  );
}