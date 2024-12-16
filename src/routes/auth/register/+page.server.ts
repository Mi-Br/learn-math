import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const actions:Actions = {
    default: async ({request}) => {
        const formData = await request.formData();

        const email = formData.get('email').toString();
        const username = formData.get('username').toString();
        const password = formData.get('password').toString();
        const password_confirm = formData.get('password_confirm').toString();


    //     if(password.length < 6 ) {
    //         errors.push({'password': 'Password must be at least 6 characters'});
    //     }

    //     if(password !== password_confirm) {
    //         errors.push({'password': 'Passwords do not match'});
    //     }

    //     if (!email || validateEmail(email)) {
    //         errors.push({'email': 'Invalid email'});
    //     }

    //     if (errors.length) {
    //         return fail ( 400, {errors})
    //    }
    //     //    else register user

       let { data, error } = await supabase.auth.signUp({
        email,
        password,
        })
        if(error) {
            return fail(400, {error})
        } else {
            return {registered: 'success'}
        }
    }



}

function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
