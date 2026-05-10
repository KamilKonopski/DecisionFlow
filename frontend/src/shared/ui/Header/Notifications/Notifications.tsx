import { IoNotificationsOutline } from "react-icons/io5";

const Notifications = () => {
  const notificationsCount = 3;

  return (
    <button
      aria-label="Notifications"
      className="
        relative
        flex h-10 w-10
        shrink-0
        items-center justify-center
        rounded-xl
        transition-colors
        hover:bg-background
      "
    >
      <IoNotificationsOutline className="text-[24px] text-text-primary" />
      {notificationsCount > 0 && (
        <span
          className="
            absolute -right-1 -top-1
            flex h-5 min-w-5
            items-center justify-center
            rounded-full
            bg-primary
            px-1
            text-[10px]
            font-medium
            text-white
          "
        >
          {notificationsCount}
        </span>
      )}
    </button>
  );
};

export default Notifications;
