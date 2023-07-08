"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { deleteProject, fetchToken } from "@/lib/actions";
import Popup from "./Popup";

type Props = {
  projectId: string;
};

const ProjectActions = ({ projectId }: Props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const router = useRouter();

  const [isShowPopup, setIsShowPopup] = useState(false);

  const closePopup = () => {
    setIsShowPopup(false);
  };

  const handleDeleteProject = async () => {
    setIsDeleting(true);

    const { token } = await fetchToken();

    try {
      await deleteProject(projectId, token);

      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencile.svg" width={15} height={15} alt="edit" />
      </Link>

      <button
        type="button"
        disabled={isDeleting}
        className={`flexCenter delete-action_btn ${
          isDeleting ? "bg-gray" : "bg-primary-purple"
        }`}
        onClick={() => {
          setIsShowPopup(true);
        }}
      >
        <Image src="/trash.svg" width={15} height={15} alt="delete" />
      </button>

      {isShowPopup && (
        <Popup
          isLoading={isDeleting}
          title="Delete this project"
          content="This post will be remove permanently, are you confirm to continue"
          actionTitle="Remove"
          handleClick={handleDeleteProject}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default ProjectActions;
