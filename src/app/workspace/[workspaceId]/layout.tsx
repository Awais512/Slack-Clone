"use client";
import React from "react";
import { Toolbar } from "./toolbar";

interface Props {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceIdLayout;
