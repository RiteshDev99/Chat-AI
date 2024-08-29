import axios from "axios";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const Main = () => {
    const [questions, setQuestions] = useState("")
    const [answer, setAnswer] = useState("")
    async function generateAnswer(): Promise<void> {
        try {
            setAnswer("loading...");

            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD5QnYWkgBvct99P_ehAitL87zGbT5iZiM",
                method: "post",
                data: {
                    contents: [
                        { parts: [{ text: questions }] }
                    ]
                }
            });

            setAnswer(response.data.candidates[0].content.parts[0].text);
        } catch (error) {
            console.error("Error generating answer:", error);
        }
    }
    return (
        <>
            <div className="h-[100vh] w-full bg-zinc-900 ">
                <h1 className="text-gray-200 p-7 text-2xl">Chat-AI</h1>
                <div className="h-[4vh] w-full bg-[#041e49] flex items-center justify-center gap-2">
                    <MdVerified className="text-gray-200" />
                    <h1 className="text-gray-200">See the latest updates to the Chat-AI Apps Privacy Hub</h1>
                </div>
                <div className="h-[100vh] w-full mt-[2vh]">
                    <div className="h-[68vh] w-full ">
                        <div className="text-white flex items-center justify-center p-[8vh] text-lg">
                            {
                                answer
                            }
                        </div>
                    </div>
                    <div className="flex justify-center pt-[7vh]">
                        <div className="h-[6vh] w-[50vw] bg-zinc-700 rounded-[4vw] flex items-center p-4 ">
                            <input onChange={(e) => setQuestions(e.target.value)} value={questions} type="text"
                                placeholder="Enter a propt here" className="h-[6vh] w-[48vw] rounded-[4vw] p-3 outline-none cursor-pointer bg-zinc-700 text-gray-100" />
                            <IoSearch onClick={generateAnswer} className="text-3xl cursor-pointer text-gray-100 hover:text-[#15803d]" />
                        </div>
                    </div>

                </div>


            </div>


        </>
    )


}

export default Main;