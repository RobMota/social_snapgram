import Loader from "@/components/shared/Loader";
import { useGetSavedPosts } from "@/lib/react-query/querysAndMutations";
import { Models } from "appwrite";
import GridPostList from "./GridPostList";

const Saved = () => {
  const { data: currentUser, isPending } = useGetSavedPosts();

  const savePosts = currentUser?.save.map((savePost: Models.Document) => ({
    ...savePost.post,
    creator: {
      imageUrl: currentUser.imageUrl,
    },
  }));
  return (
    <div className="common-container">
      {isPending ? (
        <div className="flex-center w-full h-full">
          <Loader />
        </div>
      ) : (
        <div className="user-container">
          <div className="max-w-5xl flex-start gap-3 justify-start w-full">
            <img
              src="/assets/icons/bookmark.svg"
              alt="saved"
              width={36}
              height={36}
              className="invert-white"
            />
            <h2 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h2>
          </div>

          <GridPostList posts={savePosts} showStats={false} />
        </div>
      )}
    </div>
  );
};

export default Saved;
