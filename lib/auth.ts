import { createClient } from '@/utils/supabase/server'

export async function getUser() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    return user
}

export async function signOut() {
    const supabase = await createClient()
    return await supabase.auth.signOut()
}
