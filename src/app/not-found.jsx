export default function NotFound() {
    return (
        <div className={"h-dvh flex flex-col items-center justify-center"}>
            <h1 className={"text-[180px] font-bold"}>404</h1>
            <div className={"flex flex-col items-center justify-center gap-1"}>
                <p className={"text-2xl font-medium"}>Здесь ничего нет...</p>
                <p className={"text-xl font-medium"}>Возможно страница была удалена или перенесена на другой адрес</p>
            </div>
            <a href={"/"} className={"mt-8"}>
                <button className={"bg-[#15419E] rounded-[2px] py-4 px-8 text-white"}>Вернуть на главную</button>
            </a>
        </div>
    );
}