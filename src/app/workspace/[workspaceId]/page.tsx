"use client";

import { useGetChannel } from "@/features/channels/api/use-get-channel";
import { useCreateChannelModal } from "@/features/channels/store/use-create-channel";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Loader, TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

const WorkspaceIdPage = () => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();

  const [open, setOpen] = useCreateChannelModal();

  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });
  const { data: channels, isLoading: channelsLoading } = useGetChannel({
    workspaceId,
  });

  const channelId = useMemo(() => channels?.[0]?._id, [channels]);

  useEffect(() => {
    if (workspaceLoading || channelsLoading || !workspace) return;

    if (channelId) {
      router.push(`/workspace/${workspaceId}/channel/${channelId}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [
    channelId,
    workspaceLoading,
    channelsLoading,
    workspace,
    router,
    workspaceId,
    open,
    setOpen,
  ]);

  if (workspaceLoading || channelsLoading) {
    return (
      <div className="h-full flex-1 flex items-center justify-center flex-col gap-2">
        <Loader className="animate-spin text-muted-foreground size-6" />
      </div>
    );
  }

  if (!workspace) {
    return (
      <div className="h-full flex-1 flex items-center justify-center flex-col gap-2">
        <TriangleAlert className="text-muted-foreground size-6" />
        <span>Workspace not found</span>
      </div>
    );
  }

  return null;
};

export default WorkspaceIdPage;
