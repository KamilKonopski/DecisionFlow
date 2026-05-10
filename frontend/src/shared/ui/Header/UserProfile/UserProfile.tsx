import useMe from "@/features/authentication/service/useMe";
import { FiChevronDown } from "react-icons/fi";

const UserProfile = () => {
  const { data: user } = useMe();

  return (
    <button
      className="
        flex shrink-0 items-center gap-2
        rounded-xl
        p-1.5
        transition-colors
        hover:bg-background
      "
    >
      <img
        src="https://i.pravatar.cc/100?img=12"
        alt="User avatar"
        className="
          h-10 w-10
          rounded-full
          border border-border
          object-cover
        "
      />
      <div
        className="
          hidden
          min-w-0
          sm:flex sm:flex-col
          sm:items-start
          sm:text-left
        "
      >
        <span
          className="
            truncate
            text-sm font-semibold
            leading-tight
            text-text-primary
          "
        >
          {user?.fullName || "Alex Carter"}
        </span>
        <span
          className="
            text-xs
            leading-tight
            text-text-secondary
          "
        >
          Platform Team
        </span>
      </div>
      <FiChevronDown
        className="
          hidden
          text-[18px]
          text-text-secondary
          sm:block
        "
      />
    </button>
  );
};

export default UserProfile;
