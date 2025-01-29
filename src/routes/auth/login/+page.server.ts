import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions:Actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        
        console.log(formData);
        
        const username = formData.get('username');
        const password = formData.get('password');
        if(!username || !password) {
            console.log('Login credetials are missing ');
            return fail(400, {error: 'Login credetials are missing '});
        }
    }
}