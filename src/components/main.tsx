import axios from "axios";
import { useRef, useState } from "react";
import { MdVerified } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import ReactMarkdown from 'react-markdown'



const Main = () => {

    const [questions, setQuestions] = useState("")
    const [answer, setAnswer] = useState("")
    async function generateAnswer(): Promise<void> {
        try {
            setAnswer("loading....");

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

    const [input, setInput] = useState<string | undefined>("")
    const inputRef = useRef<HTMLInputElement>(null);
    const fetchData = async () => {
        setInput(inputRef.current?.value)
       
    

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
                    <div className="h-[55vh] w-full">
                        <div className="text-white p-[8vh] flex justify-center">
                            <div className="whitespace-pre-wrap overflow-y-scroll scroll scroll-smooth h-[50vh] overflow-hidden ">
                                <ReactMarkdown>{answer}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    <div className="h-[20vh] w-full  flex justify-end  ">
                        <div className="h-[22vh] w-[40vw]  flex items-center justify-center">
                            <p className="text-white text-xl font-extralight tracking-wide">
                                {
                                    
                                    input
                                }

                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center pt-2">
                        <div className="h-[6vh] w-[50vw] bg-zinc-700 rounded-[4vw] flex items-center p-4 ">
                            <input onChange={(e) => setQuestions(e.target.value)} value={questions} type="text" ref={inputRef}
                                placeholder="Enter a propt here" className="h-[6vh] w-[48vw] rounded-[4vw] p-3 outline-none cursor-pointer bg-zinc-700 text-gray-100" />
                            <IoSend 
                                onClick={() => {
                                    generateAnswer();
                                    fetchData();
                                }}
                                className="text-2xl cursor-pointer text-zinc-300 hover:text-slate-500"
                            />
                            
                        </div>
                    </div>

                </div>


            </div>


        </>
    )


}

export default Main;