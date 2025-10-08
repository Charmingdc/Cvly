import { Link } from "react-router-dom";
import { View, FilePenLine, ChartColumn, Trash } from "lucide-react";
import Button from "@/components/ui/Button";
import type { DisplayResume } from "@/types/index";

const ResumeUI = ({ resume }: { resume: DisplayResume }) => {
  const baseUrl = `${window.location.origin}`;

  return (
    <div
      className="w-full flex flex-col bg-card p-3 gap-3 rounded-lg shadow
    md:w-[49%]"
    >
      <h2 className="font-extrabold text-xl"> {resume.display_name} </h2>

      <p className="text-muted-foreground">
        <strong className="text-foreground">File Size: </strong>
        {resume.file_size / 1024}KB
      </p>
      <p className="text-muted-foreground -mt-3">
        <strong className="text-foreground"> Last Updated: </strong>
        {resume.updated_at}
      </p>

      <div className="w-full flex flex-row flex-wrap items-center gap-2">
        <Link
          to={`${baseUrl}/resume/${resume.storage_path}`}
          className="w-[48%] flex flex-row items-center gap-2 py-2 px-4 border rounded-lg"
        >
          <View size={18} /> View
        </Link>

        <Link
          to={`${baseUrl}/resume/${resume.storage_path}`}
          className="w-[48%] flex flex-row items-center gap-2 py-2 px-4 border rounded-lg"
        >
          <FilePenLine size={18} /> Edit
        </Link>

        <Link
          to={`${baseUrl}/analytics/${resume.storage_path}`}
          className="w-[48%] flex flex-row items-center gap-2 py-2 px-4 border rounded-lg"
        >
          <ChartColumn size={18} /> Analytics
        </Link>

        <Button
          variant="destructive"
          className="w-[3rem] py-[.6rem] px-4 !justify-start rounded-lg"
        >
          <Trash size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ResumeUI;
