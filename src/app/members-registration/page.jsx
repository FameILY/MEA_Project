import Link from "next/link";
export default function page() {
  return (
    <main>
      <section className="h-44 bg-[#232323] flex justify-center items-center flex-col text-white">
        <h1 className="text-5xl p-3">Members Registration</h1>
        <p className="text-lg p-3"> Home / Members Registration</p>
      </section>
      <section className="flex justify-center items-center h-96 md:flex-row flex-col text-white">
        <Link href={'/register'}>
            <div className="w-40 h-20 bg-[#C72625]  flex justify-center items-center p-10 m-10 rounded-3xl">
                <h1 className="text-2xl">Register</h1>
            </div>
        </Link>
        <Link href={'/login'}>
            <div className="w-40 h-20 bg-[#C72625] flex justify-center items-center p-10 m-10 rounded-3xl">
                <h1 className="text-2xl">Login</h1>
            </div>
        </Link>
      </section>
    </main>
  );
}
