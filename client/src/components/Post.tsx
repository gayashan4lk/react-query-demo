import { useQuery } from "@tanstack/react-query"
import { getPost } from "../util-funcs/index"
import { getUser } from "../util-funcs/index"

export function Post({ id }: { id: string }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  })

  const {
    data: userData,
    isLoading: userIsLoading,
    isError: userIsError,
    error: userError,
    isSuccess: userIsSuccess,
  } = useQuery({
    queryKey: ["users", data?.userId],
    enabled: !!data?.userId,
    queryFn: () => getUser(data?.userId),
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <pre>Oh no, Error occured! {JSON.stringify(error)}</pre>

  return (
    <>
      <h1 className="font-bold">{data.title}</h1>
      <sub>
        {userIsLoading && "Loading user..."}
        {userIsError && "Error loading user..."}
        {userIsSuccess && `By ${userData.name}`}
      </sub>
      <p>{data.body}</p>
    </>
  )
}
