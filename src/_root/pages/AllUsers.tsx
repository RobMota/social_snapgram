import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetCreator } from "@/lib/react-query/querysAndMutations";

const AllUsers = () => {
  const { data: creators, isPending } = useGetCreator();
  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isPending && !creators ? (
          <div className="flex-center w-full h-full">
            <Loader />
          </div>
        ) : (
          <ul className="user-grid">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className="flex-1 min-w-[200px] w-full">
                <UserCard creator={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
