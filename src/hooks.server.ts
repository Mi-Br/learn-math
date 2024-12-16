import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
dotenv.config()

console.log(process.env)
export const supabase = createClient(process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY)


const getUsers = async () => {
    const { data, error } = await supabase
    .from('users')
    .select('*')

    if (error) {
        console.error('Error fetching users:', error)
        return { data: null, error }
    }
    return { data, error }
}
