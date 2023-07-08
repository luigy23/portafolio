import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getProyectos = async () => {
    const { data, error } = await supabase.from("Proyectos").select("*");
    if (error) {
        throw error;
    }
   console.log(data)
    return data;
    }
