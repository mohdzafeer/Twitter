import { FaSearch } from "react-icons/fa";
import { TwitterTimelineEmbed, TwitterTweetEmbed, } from 'react-twitter-embed'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";


export const Widgets = () => {
    return (
        <div className="px-2">
            <div className="lg:hidden m-2 text-xl">
                <Link to={'/home/feed'}><IoMdArrowRoundBack/></Link>
            </div>
            <div className="flex items-center  my-5">
                <select className="bg-blue-500 text-white px-3 py-2 font-semibold rounded-full ">

                    <option value="English" selected>English</option>

                    <option value="Hindi" >Hindi</option>

                    {/* <option value="meat">Meat</option> */}

                </select>
            </div>
            <div className="flex items-center gap-5">
                <input className="px-3 py-2 border-gray-400 border-2 font-sans rounded-full w-10/12 bg-gray-300" type='text' placeholder='Search'></input>
                <FaSearch className="text-xl cursor-pointer opacity-60 hover:opacity-100 hover:scale-105 duration-150" />
            </div>

            <h1 className="mt-5 mb-10 text-3xl font-bold">What's happening!</h1>



            <div>
                <TwitterTweetEmbed tweetId={'1557187138352861186'} />

            </div>
            <div>
                <TwitterTimelineEmbed
                    screenName='elonmusk'
                    sourceType='profile'
                    options={{ heigth: 400 }}
                />
            </div>
        </div>
    )
}