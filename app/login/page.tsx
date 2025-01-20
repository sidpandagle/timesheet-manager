import { LoginForm } from "~/components/login-form";
import { Link } from "@remix-run/react";

interface LoginPageProps {
  error: string | undefined;
}

export default function LoginPage({ error }: Readonly<LoginPageProps>) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-4">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center gap-2">
                <div className="p-[13px] bg-zinc-600 rounded-md"></div>
                <h1 className="font-semibold text-[18px]">SprintSync</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm error={error} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/login_page.jpg"
          // src="/kan-liu-666k-002.jpg"
          alt="A placeholder graphic"
          className="scale-x-[-1] absolute inset-0 h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
        />
      </div>
    </div>
  );
}
