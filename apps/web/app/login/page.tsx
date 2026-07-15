import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-2xl border p-8">

        <h1 className="text-3xl font-bold">
          Welcome Back to Avenor
        </h1>

        <LoginForm />

      </div>
    </main>
  );
}