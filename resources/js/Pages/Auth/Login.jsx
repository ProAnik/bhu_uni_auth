import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}



            <form onSubmit={submit}>
                <div>
                    <div className='font-roboto font-bold text-[26px] leading-[100%] tracking-[0%]'>
                        Hello Again!
                    </div>
                    <div className='my-5 font-roboto font-normal text-[18px] leading-[100%] tracking-[0%]'>
                        Welcome Back
                    </div>
                </div>
                <div>

                    <div className='relative'>
                    <TextInput
                        id="email"
                        placeholder="      Email Address"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 pl-10 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                        <svg className='absolute top-[23px] left-[15px]' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 1.25L1.25 0.5H20.75L21.5 1.25V14.75L20.75 15.5H1.25L0.5 14.75V1.25ZM2 2.8025V14H20V2.804L11.465 9.35H10.55L2 2.8025ZM18.545 2H3.455L11 7.8035L18.545 2Z" fill="#333333"/>
                            </g>
                        </svg>
                    </div>

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <div className='relative'>
                        <TextInput
                            id="password"
                            placeholder="      Password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 pl-10 relative block w-[290px] md:w-[390px] w-full "
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <svg className='absolute top-[18px] left-[15px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                        <path d="M20 12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7Z" fill="#333333"/>
                        </g>
                        </svg>

                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex flex-col items-center">

                    <PrimaryButton className="ms-4 mb-5" disabled={processing}>
                        Log in
                    </PrimaryButton>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}

                </div>
            </form>
        </GuestLayout>
    );
}
