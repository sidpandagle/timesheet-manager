import { useActionData, redirect } from "@remix-run/react";
import { APIURL } from "~/shared/constants";
import LoginPage from "~/login/page";

// Action function
export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(`${APIURL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    return redirect(`/dashboard/${data?.data?.id}`);
  } else {
    const error = await response.json();
    return { error: error.message };
  }
};

export default function Login() {
  const actionData = useActionData();

  return (
    <div>
      <LoginPage error={actionData?.error} />
    </div>
  );
}
