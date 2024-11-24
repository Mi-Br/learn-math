import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
dotenv.config()

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)


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

console.log(await getUsers())

