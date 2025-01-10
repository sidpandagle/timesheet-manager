/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, useActionData, redirect, Link } from "@remix-run/react";
import { APIURL } from "~/shared/constants";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { FaArrowLeft } from "react-icons/fa6";

// Action function to handle form submission
export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Mock API call, replace this with your actual API endpoint
  const response = await fetch(APIURL + "/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    // Assuming the response includes a token
    // const token = data.token;

    // Save the token or set cookies as needed
    // Redirect to the dashboard on successful login
    return redirect("/dashboard/" + data?.data?.id);
  } else {
    // Handle login error
    const error = await response.json();
    return { error: error.message };
  }
};

interface ActionData {
  error?: string;
}

export default function Login() {
  const actionData: ActionData = useActionData() || {};

  return (
    <div className="h-screen">
      <Link to="/" className="flex items-center gap-2 p-4 font-semibold text-sm">
        <FaArrowLeft />
        Head Back!
      </Link>
      <div className="flex justify-center items-center">
        {/* Tabs component to organize login and sign-up forms */}
        <Tabs defaultValue="login" className="w-[400px]">
          {/* Tab navigation */}
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          {/* Login tab content */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Sign in to your account.</CardDescription>
              </CardHeader>
              {/* Login form */}
              <Form method="post">
                <CardContent className="space-y-2">
                  {/* Display error message if login fails */}
                  {actionData.error && (
                    <p className="text-red-500 text-sm">{actionData.error}</p>
                  )}
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value="test@gmail.com"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value="test"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  {/* Forgot password link */}
                  <div className="text-sm text-right">
                    <Link to="/forgot-password" className="text-zinc-400 font-semibold text-xs hover:text-zinc-200 duration-300">
                      Forgot Password?
                    </Link>
                  </div>
                </CardContent>
                {/* Submit button */}
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Sign in
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </TabsContent>
          {/* Sign-Up tab content */}
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  Create a new account by filling out the information below.
                </CardDescription>
              </CardHeader>
              {/* Sign-up form */}
              <Form method="post">
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </CardContent>
                {/* Submit button */}
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
