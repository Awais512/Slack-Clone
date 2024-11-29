import React, { useRef } from "react";

import dynamic from "next/dynamic";
import Quill from "quill";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

interface Props {
  placeholder: string;
}

export const ChatInput = ({ placeholder }: Props) => {
  const editorRef = useRef<Quill | null>(null);

  const handleSubmit = ({
    body,
    image,
  }: {
    body: string;
    image: File | null;
  }) => {
    console.log({ body, image });
  };

  return (
    <div className="px-5 w-full">
      <Editor
        placeholder={placeholder}
        onSubmit={handleSubmit}
        disabled={false}
        innerRef={editorRef}
      />
    </div>
  );
};
