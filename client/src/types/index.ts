export interface Resume {
  _id?: string;
  user_id: string;
  username: string;
  resume_name: string;
  display_name: string;
  storage_path: string; // where it's saved in your storage
  file_url: string; // public or signed URL
  file_size: number;
  created_at: Date;
  updated_at: Date;
  views_by_date: Record<string, number>;
  downloads_by_date: Record<string, number>;
}

export type DisplayResume = Omit<
  Resume,
  | "user_id"
  | "username"
  | "file_url"
  | "created_at"
  | "views_by_date"
  | "downloads_by_date"
>;
