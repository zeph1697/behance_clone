import Image from "next/image";

import { useRouter, redirect } from "next/navigation";

import AuthProviders from "@/components/AuthProviders";
import { getCurrentUser } from "@/lib/session";
import Button from "@/components/Button";

const LoginPage = async () => {
  const session = await getCurrentUser();
  if (session?.user) redirect("/");

  return (
    <>
      <div className="absolute flex items-center w-full h-full overflow-hidden -z-10">
        <Image src="/bg-login.jpg" width={1920} height={1080} alt="bg-login" />
      </div>

      <div className="absolute grid grid-cols-[40%_55%_5%] w-full h-full overflow-hidden -z-10">
        <div className="flex gap-4 items-center justify-center">
          <div>
            <Image
              src="/logo-icon.ico"
              width={40}
              height={40}
              alt="loco-icon"
            />
          </div>
          <h1 className="font-sans font-normal text-4xl text-white">Behalve</h1>
        </div>

        <div className="flex w-full h-full items-center justify-center ">
          <div className="w-[60%] h-[85%] bg-white rounded-lg p-14">
            <div className="font-sans font-semibold text-4xl mb-16">
              Sign in
            </div>

            <div className="flex flex-col gap-3">
              <AuthProviders />

              <div className="flex relative items-center justify-center my-6 border-t border-nav-border">
                <div className="absolute bg-white p-3 text-sm font-thin text-gray">
                  Or
                </div>
              </div>

              <Button
                disable={true}
                title="Continue with Facebook"
                textColor="text-white font-sans font-bold w-full py-4"
                bgColor="bg-primary-blue border-black/10"
                rightIcon="/facebook.svg"
              />
              <Button
                disable={true}
                title="Continue with Apple"
                textColor="text-white font-sans font-bold w-full py-4"
                bgColor="bg-black border-black/10"
                rightIcon="/apple.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
