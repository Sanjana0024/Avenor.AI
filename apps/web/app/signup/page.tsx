import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-2xl border p-8">
        <h1 className="text-3xl font-bold">
          Create Avenor Account
        </h1>

        <SignupForm />
      </div>
    </main>
  );
}