import { useMutation } from "@apollo/client";
import getCurrentUser from "../../query/getCurrentUser";
import updateTask from "../updateTask";

const useUpdateTask = () => {
  const [mutation, { data }] = useMutation(updateTask, {
    refetchQueries: [{ query: getCurrentUser }],
  });

  const update = async (id, title, description) => {
    await mutation({ variables: { id, title, description } });
  };

  return {
    update,
    data,
  };
};

export default useUpdateTask;
