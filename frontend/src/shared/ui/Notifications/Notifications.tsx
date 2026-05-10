import { IoNotificationsOutline } from "react-icons/io5";

const Notifications = () => {
  const notificationsCount = 3;
  return (
    <button className="relative flex items-center justify-center p-2" aria-label="Notifications">
      <IoNotificationsOutline className="text-2xl" />

      {notificationsCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs text-surface">
          {notificationsCount}
        </span>
      )}
    </button>
  );
};

export default Notifications;
