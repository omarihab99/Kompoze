import { ReactNode, useState, useEffect } from "react";
import {
  X,
  CircleAlert,
  TriangleAlert,
  CircleCheckBig,
  Info,
} from "lucide-react";

export type Animation = "FromRight" | "FromBottom" | "FadeIn";
export type NotificationType = "Success" | "Error" | "Warning" | "Info";

export type NotificationProps = {
  animation: Animation;
  message: string;
  notificationType: NotificationType;
  showIcon?: boolean;
  icon?: ReactNode;
};

const icons: Record<NotificationType, ReactNode> = {
  Success: <CircleCheckBig />,
  Error: <CircleAlert />,
  Warning: <TriangleAlert />,
  Info: <Info />,
};
const backgroundColor: Record<NotificationType, string> = {
  Success: "bg-green-500",
  Error: "bg-red-500",
  Warning: "bg-yellow-400",
  Info: "bg-blue-500",
};
const Notification = ({
  animation,
  message,
  notificationType,
  showIcon,
}: NotificationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const animations: Record<Animation, string> = {
    FromRight: `${
      isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`,
    FromBottom: `${
      isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
    }`,
    FadeIn: `${isOpen ? "opacity-100" : "opacity-0"}`,
  };

  useEffect(() => {
    setIsOpen(true);

    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className={` ${backgroundColor[notificationType]} transform transition-all duration-500 ease-out gap-9 rounded-md flex items-center justify-between px-4 py-2 lg:w-fit md:w-1/3 ml-auto h-auto ${animations[animation]}`}
      >
        {showIcon && icons[notificationType]}
        <p className="text-lg font-extrabold font-mono m-2 text-white p-2 text-wrap">
          {message}
        </p>
        <button
          className="bg-transparent border-none w-fit h-fit p-0"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Notification;
