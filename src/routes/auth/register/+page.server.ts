import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions:Actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const password_confirm = formData.get('password_confirm');

        if(password !== password_confirm) {
            console.log('Passwords do not match');
            return fail(400, {error: 'Passwords do not match'});
        }
    }
}
