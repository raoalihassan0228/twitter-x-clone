import Image from "next/image";
import { LuSearch } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { MdOutlinePermIdentity } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { BsTwitterX } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { FaSquarePollVertical } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import { GrFormSchedule } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa6";
import { TbRepeat } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { MdBarChart } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function Home() {
  return (
    <div className="h-full bg-black text-white ">
      <div className="flex container mx-auto">
        {/* First div */}
        <div className="first w-10 md:w-[70%] sticky top-0">
          <div className="sidebar ml-2 flex items-end md:items-end flex-col sticky top-0">
            <div className="logo invert mt-4 flex self-start text-start justify-start md:mx-16">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-8 m-auto r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
              >
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </g>
              </svg>
            </div>

            <ul className="flex flex-col text-xl px-11 font-semibold w-full">
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                <GoHomeFill className="text-2xl" />{" "}
                <span className="hidden md:block">Home</span>
              </li>
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                {" "}
                <LuSearch className="text-2xl" />{" "}
                <span className="hidden md:block">Explore</span>
              </li>
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                <IoNotificationsOutline className="text-2xl" />{" "}
                <span className="hidden md:block">Notificatons</span>
              </li>
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                {" "}
                <FiMail />
                <span className="hidden md:block">Messages</span>
              </li>
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                <MdOutlineFeaturedPlayList />
                <span className="hidden md:block">Lists</span>
              </li>
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                <BsTwitterX />
                <span className="hidden md:block">Premium</span>
              </li>
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                <FaRegBookmark />
                <span className="hidden md:block">BookMarks</span>
              </li>
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                <RiGroupLine />
                <span className="hidden md:block">Communities</span>
              </li>
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                <MdOutlinePermIdentity />
                <span className="hidden md:block">Profile</span>
              </li>
              <li className="flex md:justify-start items-center gap-3 justify-center w-fit hover:bg-gray-900 hover:cursor-pointer md:px-5 ml-3 py-3 hover:rounded-full">
                {" "}
                <CgMoreO />
                <span className="hidden md:block">More</span>
              </li>
              <div className="button w-full text-center">
                <button className="bg-[#219df0] px-20 text-xl rounded-full font-semibold hidden md:block  py-2">
                  Post
                </button>
                <button className="bg-[#219df0] ml-[5px] px-2 text-xl rounded-full font-semibold block md:hidden py-2">
                  <FaPenFancy />
                </button>
              </div>
            </ul>

              <div className="profile w-full  mt-10 hidden md:flex">
              <div className="item px-3 space-y-1  p-3 flex items-center gap-5 justify-center mx-5 hover:bg-gray-800 rounded-full duration-500 cursor-pointer w-fit">
              
                <div className="p1">
                  <img
                    className=" w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1652665740120432640/K3GGsgb5_normal.jpg"
                    alt=""
                  />
                </div>
                <div className="p2">
                  <div>Rao Ali Hassan</div>
                  <div className="text-gray-500">@RaoAliHassan228</div>
                </div>
              <div className="p3 text-2xl">...</div>
        
            </div>

              </div>

          </div>
        </div>

        {/* Second div */}
        <div className="second w-full border-[1px] border-gray-700 border-y-black">
          <div className="top flex p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80">
            <div className="absolute w-[67px] h-1 rounded-full bg-blue-500 bottom-0 left-[17%] z-10"></div>
            <div className="left  w-1/2 flex justify-center font-bold hover:cursor-pointer text-lg">
              For You
            </div>
            <div className="right  w-1/2 flex justify-center hover:cursor-pointer font-bold text-lg">
              Following
            </div>
            <div className="settings text-2xl mt-1 mx-2">
              <CiSettings />{" "}
            </div>
          </div>

          <div className="h-[1px] w-full bg-gray-700"></div>

          <div className="whatishapp flex gap-4">
            <div className="img p-5">
              <img
                className="rounded-full"
                src="https://pbs.twimg.com/profile_images/1652665740120432640/K3GGsgb5_normal.jpg"
                alt=""
              />
            </div>
            <input
              className="w-full h-7 my-6 outline-none bg-black text-xl text-white"
              type="text"
              placeholder="What is happening?!"
            />
          </div>
          <div className="text-blue-400 flex items-center mx-5 gap-3 mb-3 ml-24 cursor-pointer">
            <FaGlobeAmericas />
            <span className="font-semibold text-sm">Everyone can reply</span>
          </div>
          <div className="h-[1px] w-[80%] ml-16 bg-gray-700 "></div>
          <div className="flex justify-between">
          <div className="blueicons flex gap-4 my-4 text-blue-400 ml-24">
            <GoFileMedia className="cursor-pointer text-xl" />
            <MdOutlineGifBox className="cursor-pointer text-xl" />{" "}
            <FaSquarePollVertical className="cursor-pointer text-xl" />{" "}
            <BsEmojiSmile className="cursor-pointer text-xl" />{" "}
            <GrFormSchedule className="cursor-pointer text-xl" />{" "}
            <HiOutlineLocationMarker className="cursor-pointer text-xl" />
          </div>
            <div className="btn">
              <button className="bg-[#219df0] px-5 mx-5 mt-2 text-sm rounded-full font-semibold  py-2">
                Post
              </button>
            </div>
          </div>

          {/* line */}
          <div className="h-[1px] w-full bg-gray-700"></div>

          <div className="posts">
            <div className="post">
              <div className="flex">
                <div className="image m-4">
                  <img
                    className="w-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg"
                    alt=""
                  />
                </div>
                <div className="content my-4">
                  <span className="font-bold hover:underline cursor-pointer text-white">
                    <div className="flex items-center">
                      Elon Musk
                      <MdVerified className="text-blue-400 inline-block" />
                    </div>
                  </span>
                  <span className="text-gray-500"> @elonmusk · Jan 20</span>
                  <div>Post your music videos to 𝕏</div>
                  <div className="postimg m-3 ml-0"></div>
                  <div className="icons justify-between text-[#63686c] flex text-sm mx-3">
                    <div className="icon flex items-center justify-center gap-1 hover:text-blue-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegComment /> 90K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-green-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <TbRepeat /> 11K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-pink-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegHeart />
                      228K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-indigo-400 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <MdBarChart />
                      1M
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-blue-400 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegBookmark />
                      50K
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-700"></div>
            </div>

            <div className="post">
              <div className="flex">
                <div className="image m-4">
                  <img
                    className="w-16 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1652665740120432640/K3GGsgb5_normal.jpg"
                    alt=""
                  />
                </div>
                <div className="content my-4">
                  <span className="font-bold hover:underline cursor-pointer text-white">
                    <div className="flex items-center">
                      Rao Ali Hassan
                      <MdVerified className="text-blue-400 inline-block" />
                    </div>
                  </span>
                  <span className="text-gray-500"> @RaoAliHassan228 · 25m</span>
                  <div className="text-sm font-serif">Happy Coding!</div>
                  <div className="postimg m-3 ml-0">
                    <img
                      className="rounded-lg"
                      src="https://pbs.twimg.com/media/GEROB6NWcAAgbAk?format=png&name=small"
                      alt=""
                    />
                  </div>
                  <div className="icons justify-between text-[#63686c] flex text-sm mx-3">
                    <div className="icon flex items-center justify-center gap-1 hover:text-blue-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegComment /> 90K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-green-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <TbRepeat /> 11K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-pink-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegHeart />
                      228K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-indigo-400 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <MdBarChart />
                      1M
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-blue-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegBookmark />
                      50K
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-700"></div>
            </div>

            <div className="post">
              <div className="flex">
                <div className="image m-4">
                  <img
                    className="w-64 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1697749409851985920/HbrI04tM_normal.jpg"
                    alt=""
                  />
                </div>
                <div className="content my-4">
                  <span className="font-bold hover:underline cursor-pointer text-white">
                    <div className="flex items-center">
                      SpaceX
                      <MdVerified className="text-blue-400 inline-block" />
                    </div>
                  </span>
                  <span className="text-gray-500"> @SpaceX · Jan 19</span>
                  <div>
                    SpaceX was founded to help create a future where not just
                    hundreds but thousands and ultimately millions of people can
                    travel off Earth, to live and work in space and on other
                    planets.
                  </div>
                  <div className="postimg m-3 ml-0">
                    <img
                      className="rounded-lg"
                      src="https://pbs.twimg.com/media/GEJ2gbrbAAEJ0Jh?format=jpg&name=4096x4096"
                      alt=""
                    />
                  </div>
                  <div className="icons justify-between text-[#63686c] flex text-sm mx-3">
                    <div className="icon flex items-center justify-center gap-1 hover:text-blue-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegComment /> 90K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-green-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <TbRepeat /> 11K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-red-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegHeart />
                      228K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-indigo-400 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <MdBarChart />
                      1M
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-blue-400 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegBookmark />
                      50K
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-700"></div>
            </div>
            <div className="post">
              <div className="flex">
                <div className="image m-4">
                  <img
                    className="w-64 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1548735070030204929/SE6zZzFV_200x200.jpg"
                    alt=""
                  />
                </div>
                <div className="content my-4">
                  <span className="font-bold hover:underline cursor-pointer text-white">
                    <div className="flex items-center">
                      Imran Khan
                      <MdVerified className="text-blue-400 inline-block" />
                    </div>
                  </span>
                  <span className="text-gray-500"> @ImranKhanPTI · Jan 19</span>
                  <div className="postimg m-3 ml-0">
                    <img
                      className="rounded-lg"
                      src="https://pbs.twimg.com/media/F-ajLaMaIAEYJwh?format=jpg&name=large"
                      alt=""
                    />
                  </div>
                  <div className="icons justify-between text-[#63686c] flex text-sm mx-3">
                    <div className="icon flex items-center justify-center gap-1 hover:text-blue-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegComment /> 172K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-green-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <TbRepeat /> 111K
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-red-500 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegHeart />
                      1M
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-indigo-400 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <MdBarChart />
                      10M
                    </div>
                    <div className="icon flex items-center justify-center gap-1 hover:text-blue-400 hover:cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                      <FaRegBookmark />
                      99K
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-700"></div>
            </div>
          </div>
        </div>

        {/* Third div */}
        <div className="third w-full hidden md:block ">
          <div className="search m-3">
            <input
              type="text"
              className="w-3/4 rounded-full bg-[#16181c] px-4 py-2 text-white"
              placeholder="Search"
            />
          </div>

          <div className="whats sticky top-0 m-3 bg-[#16181c] w-3/4 py-5 rounded-xl space-y-3">
            <h1 className="text-xl font-bold px-3">Trends for you</h1>

            <div className="item px-3 hover:bg-gray-800 cursor-pointer p-3">
              <div className="text-sm text-gray-500">Trending in Pakistan</div>
              <div className="font-semibold font-sans">
                عمران_کا_پلڑا_بھاری_ہے#
              </div>
              <div className="text-sm text-gray-500">999.2K</div>
            </div>

            <div className="item px-3 hover:bg-gray-800 cursor-pointer p-3">
              <div className="text-sm text-gray-500">Trending in Pakistan</div>
              <div className="font-semibold">#InternetDown</div>
              <div className="text-sm text-gray-500">68.2K</div>
            </div>

            <div className="item px-3 hover:bg-gray-800 cursor-pointer p-3">
              <div className="text-sm text-gray-500">Trending · Politics</div>
              <div className="font-semibold">Imran Khan PTI</div>
              <div className="text-sm text-gray-500">804.2K</div>
            </div>

            <div className="item px-3 hover:bg-gray-800 cursor-pointer p-3">
              <div className="text-sm text-gray-500">Trending in Pakistan</div>
              <div className="font-semibold">Shoaib Malik and Sana Javed</div>
              <div className="text-sm text-gray-500">57.2K</div>
            </div>
          </div>

          <div className="who sticky top-[80vh] m-3 bg-[#16181c] w-3/4 py-5 rounded-xl space-y-1">
            <h1 className="text-xl font-bold px-3">Who To Follow</h1>

            <div className="item px-3 space-y-1  p-3 flex items-center gap-1 hover:bg-gray-800 cursor-pointer justify-between">
              <div className="flex gap-3">
                <div className="p1">
                  <img
                    className=" w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1455242126275526659/zNCAAELg_200x200.png"
                    alt=""
                  />
                </div>
                <div className="p2">
                  <div>Meta</div>
                  <div className="text-gray-500">@Meta</div>
                </div>
              </div>
              <div className="p3">
                <button className="bg-white text-black px-5 text-sm py-2 rounded-full font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div className="item px-3 space-y-1  p-3 flex items-center gap-1 hover:bg-gray-800 cursor-pointer justify-between">
              <div className="flex gap-3">
                <div className="p1">
                  <img
                    className=" w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_200x200.jpg"
                    alt=""
                  />
                </div>
                <div className="p2">
                  <div>Google</div>
                  <div className="text-gray-500">@Google</div>
                </div>
              </div>
              <div className="p3">
                <button className="bg-white text-black px-5 text-sm py-2 rounded-full font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div className="item px-3 space-y-1  p-3 flex items-center gap-1 hover:bg-gray-800 cursor-pointer justify-between">
              <div className="flex gap-3">
                <div className="p1">
                  <img
                    className=" w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1557445557026754560/BnOHhbBr_200x200.jpg"
                    alt=""
                  />
                </div>
                <div className="p2">
                  <div className="flex items-center">
                    PTI <MdVerified className="text-blue-400 inline-block" />
                  </div>
                  <div className="text-gray-500">@PTIofficial</div>
                </div>
              </div>
              <div className="p3">
                <button className="bg-white text-black px-5 text-sm py-2 rounded-full font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div className="item px-3 space-y-1  p-3 flex items-center gap-1 hover:bg-gray-800 cursor-pointer justify-between">
              <div className="flex gap-3">
                <div className="p1">
                  <img
                    className=" w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1652665740120432640/K3GGsgb5_normal.jpg"
                    alt=""
                  />
                </div>
                <div className="p2">
                  <div className="flex items-center">
                    Rao Ali Hassan{" "}
                    <MdVerified className="text-blue-400 inline-block" />
                  </div>
                  <div className="text-gray-500">@RaoAliHassan228</div>
                </div>
              </div>
              <div className="p3">
                <button className="bg-white text-black px-5 text-sm py-2 rounded-full font-semibold">
                  Follow
                </button>
              </div>
            </div>

            <div className="text-blue-600 hover:underline ml-3 cursor-pointer">
              Show More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
