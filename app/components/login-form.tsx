import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Form, Link } from "@remix-run/react";

interface LoginFormProps {
  error?: string;
  className: string | null | undefined | string[];
}

export function LoginForm({ error, className, ...props }: Readonly<LoginFormProps>) {
  return (
    <Form
      method="post"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to login to your account
        </p>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link to="/" className="ml-auto text-sm underline-offset-4 hover:underline">Forgot your password?</Link>
          </div>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">Login</Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="underline underline-offset-4">Sign up</Link>
      </div>
    </Form>
  );
}
