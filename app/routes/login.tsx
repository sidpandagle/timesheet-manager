import { Form, useActionData, redirect, Link } from "@remix-run/react";
import { APIURL } from "./../shared/constants"

// Action function to handle form submission
export const action = async ({ request }) => {
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

export default function Login() {
  const actionData = useActionData();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-[calc(100vh-40px)]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight dark:text-white text-gray-900">Sign in to your account</h2>
      </div>

      <Form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-4" method="post">
        {actionData?.error && (
          <p className="text-red-500">{actionData.error}</p>
        )}
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium dark:text-white text-gray-900">Email address</label>
          <div className="">
            <input id="email" value={'test@gmail.com'} name="email" type="email" required className="block w-full rounded-md px-2 border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:dark:text-white text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium dark:text-white text-gray-900">Password</label>
            <div className="text-sm">
              <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
            </div>
          </div>
          <div className="">
            <input id="password" value={'test'} name="password" type="password" required className="block w-full rounded-md px-2 border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:dark:text-white text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </Form>
    </div>
  );
}
