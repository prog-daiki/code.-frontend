import { createClient } from "@/lib/supabase/server";

export const getUser = async () => {
  const supabase = createClient();
  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }

  return user;
};

// const {data,error} = await supabase.from('users').select('*').eq('id', user?.user?.id);
