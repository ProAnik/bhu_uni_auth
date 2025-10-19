export default function GuestLayout({ children }) {
    return (
        <div className="flex h-screen flex-col md:flex-row">
            <div className="relative h-1/3 md:h-screen md:basis-2/3  w-full bg-red-300 bg-gradient-to-b from-[#0575E6] via-[#02298A] to-[#021B79]">
                <div className="absolute top-[30%] left-[40%]">
                    <div className="text-white font-roboto font-bold text-[64px] leading-[100%] tracking-[0%]">
                        CRM
                    </div>
                    <div className="mt-5 text-white font-roboto font-medium text-[24px] leading-[100%] tracking-[0%]">
                        The most popular peer to peer lending at SEA
                    </div>
                </div>
                <img className="absolute bottom-0" src="/images/o.svg"/>
            </div>
            <div className="md:basis-1/3 h-2/3 md:h-screen w-full bg-[#F6F6F6] px-6 py-4 flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}
