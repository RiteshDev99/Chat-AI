import { MdAdd } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";



const SideBar = () => {
    return (
        <>
            <div className="h-[100vh] w-[5vw] bg-zinc-800">
                <div className=" flex flex-col gap-[5vh] pt-[3vh]">
                    <div className="h-[3vw] w-full  flex justify-center items-center">
                        <VscThreeBars className="text-2xl text-gray-400" />

                    </div>

                    <div className="h-[4vw] w-full  flex justify-center">
                        <div className="h-[2.5vw] w-[2.5vw] bg-zinc-700 rounded-full flex items-center justify-center">
                            <MdAdd className="text-3xl text-gray-400" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar;