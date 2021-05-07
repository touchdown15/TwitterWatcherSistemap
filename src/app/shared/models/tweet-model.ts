export interface Tweet {
  user:{
    name: string;
    screen_name: string;
    profile_image_url: string;
  };
  full_text: string;
  created_at: string;
}
