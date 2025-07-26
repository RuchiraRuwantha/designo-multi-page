type ViewTextProps = {
    title: string
}
export const ViewText: React.FC<ViewTextProps> = ({ title }) => {
    return (
        <div className="absolute w-full md:text-[40px]/[48px] tracking-wide font-medium text-2xl text-[#FFFF] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span>{title}</span>
            <div className="text-[12px] leading-(auto) tracking-[5px] flex justify-center items-center w-full">
                VIEW PROJECTS
                <svg className="w-1 h-2 text-[#E7816B] dark:text-white ml-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
            </div>
        </div>
    );
}