import { supabase } from './supabase';

export async function userSignup(email: string, password: string, firstName: string, lastName: string) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { first_name: firstName, last_name: lastName, role: 'user' }
        }
    });
    if (error) throw error;
    return data;
}

export async function userSignin(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
}

export async function adminSignup(email: string, password: string, firstName: string, lastName: string) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { first_name: firstName, last_name: lastName, role: 'admin' }
        }
    });
    if (error) throw error;
    return data;
}

export async function adminSignin(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();

    if (profile?.role !== 'admin') {
        await supabase.auth.signOut();
        throw new Error('Not authorized as admin');
    }
    return data;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

export async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}