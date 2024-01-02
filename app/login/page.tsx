import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-4">Log in to Telos</h1>

      <Button>
        <GitHubLogoIcon className="mr-2 h-4 w-4" /> Login with GitHub
      </Button>

      <div className="flex flex-col items-center justify-center">
        <p className="text-xs text-center">
          *Your first login triggers automatic membership registration.
        </p>
      </div>
    </div>
  );
}
