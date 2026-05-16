import { Config } from "@/config";

export default function Loading() {
  return (
    <div className={`flex h-screen w-full items-center justify-center bg-white dark:bg-${Config.DarkColorProject}`}>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
    </div>
  );
}