import { Copy } from "lucide-react";
import Button from "@/components/ui/Button";
import { toast } from "sonner";
import { useState } from "react";

type ResumeLinksOutputProps = {
  viewUrl: string;
};

const ResumeLinksOutput = ({ viewUrl }: ResumeLinksOutputProps) => {
  const baseUrl = "http://localhost:5173";
  const previewUrl = `${baseUrl}${viewUrl}`;
  const directUrl = `${previewUrl}.pdf`;

  const [copiedType, setCopiedType] = useState<"preview" | "direct" | null>(
    null
  );

  const handleCopy = async (text: string, type: "preview" | "direct") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      toast.success("Link copied to clipboard!");

      // Reset the icon after 1.5s
      setTimeout(() => setCopiedType(null), 1500);
    } catch (err) {
      toast.error("Failed to copy link.");
    }
  };

  return (
    <div className='w-full mt-6 space-y-2'>
      <h3 className='text-lg font-semibold text-muted-foreground'>
        Resume Links:
      </h3>

      <div className='w-full flex flex-col justify-center gap-2 bg-card p-2 rounded-lg shadow'>
        <p className='text-sm text-muted-foreground'>Preview Page URL:</p>
        <div className='w-full h-12 flex flex-row items-center justify-between px-2 bg-background rounded-lg'>
          <p className='w-[90%] text-sm text-muted-foreground truncate'>
            {previewUrl}
          </p>
          <Button
            className='bg-card px-2 border hover:bg-card'
            onClick={() => handleCopy(previewUrl, "preview")}
          >
            <Copy
              size={18}
              className={copiedType === "preview" ? "text-green-500" : ""}
            />
          </Button>
        </div>

        <p className='text-sm text-muted-foreground mt-4'>Direct File URL:</p>
        <div className='w-full h-12 flex flex-row items-center justify-between px-2 bg-background rounded-lg'>
          <p className='w-[90%] text-sm text-muted-foreground truncate'>
            {directUrl}
          </p>
          <Button
            className='bg-card px-2 border hover:bg-card'
            onClick={() => handleCopy(directUrl, "direct")}
          >
            <Copy
              size={18}
              className={copiedType === "direct" ? "text-green-500" : ""}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeLinksOutput;
