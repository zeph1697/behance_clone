"use client";

import Link from "next/link";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  isLoading: boolean;
  title: string;
  content: string;
  actionTitle: string;
  handleClick?: MouseEventHandler;
  onClose: MouseEventHandler;
};

const Popup = ({
  isLoading,
  title,
  content,
  actionTitle,
  handleClick,
  onClose,
}: Props) => {
  const router = useRouter();

  return (
    <div className="popup">
      <div className="w-full h-full flexCenter">
        <div className="popup_wrapper">
          <div className="text-start text-2xl font-bold">{title}</div>

          <p className="text-start text-base mt-6">{content}</p>

          <div className="mt-10 flex justify-end">
            <button
              type="button"
              className={`flexCenter px-6 py-2.5 rounded-full ${
                isLoading
                  ? "bg-gray cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              onClick={handleClick}
            >
              <p className="text-white text-lg">
                {isLoading ? "Processing..." : actionTitle}
              </p>
            </button>
            <button
              type="button"
              className="flexCenter px-6 py-2.5 ml-5 rounded-full border bg-white hover:bg-light-white-300"
              onClick={onClose}
            >
              <p className="text-lg">Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
