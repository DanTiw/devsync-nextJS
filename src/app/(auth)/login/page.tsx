import AuthForm from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="mb-6 text-center text-2xl font-bold text-foreground">Login</h1>
        <AuthForm mode="login" />
      </div>
    </div>
  );
} 