
import AuthForm from "@/components/auth/AuthForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        <AuthForm mode="signup" />
      </div>
    </div>
  );
} 