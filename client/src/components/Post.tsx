import { useQuery } from "@tanstack/react-query"
import { getPost } from "../util-funcs/api-functions"
import { getUser } from "../util-funcs/api-functions"
import { IPost } from "@/types"

export function Post({ id }: { id: number }) {
  const {
    data: postData,
    isLoading: postIsLoading,
    isError: postIsError,
    error: postError,
  } = useQuery({
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
    queryKey: ["users", postData?.userId],
    enabled: !!postData?.userId,
    queryFn: () => getUser(postData?.userId),
  })

  if (postIsLoading) return <>Loading...</>
  if (postIsError)
    return <pre>Oh no, Error occured! {JSON.stringify(postError)}</pre>

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">{postData.title}</h1>
      <p>{postData.body}</p>
      <sub>
        {userIsLoading && "Loading user..."}
        {userIsError && "Error loading user..."}
        {userIsSuccess && `By ${userData.name}`}
      </sub>
    </>
  )
}
