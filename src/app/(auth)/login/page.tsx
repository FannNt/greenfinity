// app/login/page.tsx
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <AuthForm mode="login" />
    </div>
  );
}
