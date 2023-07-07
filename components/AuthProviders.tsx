"use client";

import { getProviders, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";

import Button from "./Button";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div className="">
        {Object.values(providers).map((provider: Provider, i) => (
          <Button
            key={i}
            title="Continue with Google"
            textColor="text-gray font-sans font-bold w-full py-4"
            bgColor="bg-white hover:bg-black/5 border-black/10"
            rightIcon="/google.svg"
            handleClick={() => signIn(provider?.id)}
          />
        ))}
      </div>
    );
  }
};

export default AuthProviders;
