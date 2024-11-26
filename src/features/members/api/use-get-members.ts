import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface Props {
  workspaceId: Id<"workspaces">;
}

export const useGetMember = ({ workspaceId }: Props) => {
  const data = useQuery(api.members.get, { workspaceId });

  const isLoading = data === undefined;

  return { data, isLoading };
};