import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className='relative'>
                    <TextInput
                        placeholder="Full Name"
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 pl-10 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <svg className='absolute top-[18px] left-[15px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                    <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11C14.481 11 16.5 8.981 16.5 6.5C16.5 4.019 14.481 2 12 2C9.519 2 7.5 4.019 7.5 6.5ZM20 21H21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H20Z" fill="#333333"/>
                    </g>
                    </svg>
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    <TextInput
                        placeholder="Email Address"
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 pl-10 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <svg className='absolute top-[23px] left-[15px]' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 1.25L1.25 0.5H20.75L21.5 1.25V14.75L20.75 15.5H1.25L0.5 14.75V1.25ZM2 2.8025V14H20V2.804L11.465 9.35H10.55L2 2.8025ZM18.545 2H3.455L11 7.8035L18.545 2Z" fill="#333333"/>
                        </g>
                    </svg>

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    <TextInput
                        id="password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 pl-10 relative block w-[290px] md:w-[390px] w-full "
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                        <svg className='absolute top-[18px] left-[15px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                        <path d="M20 12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7Z" fill="#333333"/>
                        </g>
                        </svg>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <PrimaryButton className="" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
