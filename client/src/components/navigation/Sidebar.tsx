import { Link } from "react-router-dom";
import { LayoutDashboard, FilePlus2, FolderOpen, Settings } from "lucide-react";

const Sidebar = ({
  currentPath,
  openMenu
}: {
  currentPath: string;
  openMenu: boolean;
}) => {
  const paths: { icon: React.ReactNode; text: string; url: string }[] = [
    { icon: LayoutDashboard, text: "Dashboard", url: "/dashboard" },
    { icon: FilePlus2, text: "New Resume", url: "/new" },
    { icon: FolderOpen, text: "Resumes", url: "/resumes" },
    { icon: Settings, text: "Settings", url: "/settings" }
  ];

  return (
    <aside>
      <div
        className={`w-[50%] h-[100vh] fixed ${
          openMenu ? "left-[0%]" : "-left-[50%]"
        } flex flex-col bg-card pt-16 border-r transition-all duration-500 ease-in-out md:w-fit md:pr-6`}
      >
        {paths.map((path, i) => {
          const Icon = path.icon;

          return (
            <Link
              to={path.url}
              className={`${
                currentPath === path.url
                  ? "text-blue-800"
                  : "text-foreground-muted"
              } flex flex-row gap-2 p-4 border-b`}
            >
              <Icon /> {path.text}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
