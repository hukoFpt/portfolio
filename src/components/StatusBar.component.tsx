import { FaDiscord } from "react-icons/fa";
import { MdEmail, MdFacebook } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { VscGithubInverted, VscRemote } from "react-icons/vsc";

const StatusBar = () => {
  return (
    <div className="h-6 bg-neutral-900 text-neutral-400 flex items-center border-t border-zinc-700 gap-3">
      {/* Action Button */}
      <button
        type="button"
        className="flex items-center justify-center h-full px-4 bg-sky-600 hover:bg-sky-500 text-stone-300"
        onClick={() => {
          console.log("Action button clicked!");
        }}
      >
        <VscRemote size={18} className="mr-1 stroke-1" />
      </button>
      <div className="flex h-full items-center justify-between w-full">
        <div className="flex items-center h-full px-2 gap-2">
          <p>Connect with me: </p>
          <a
            className="flex items-center px-2 h-full hover:bg-zinc-700 cursor-pointer text-stone-300"
            href="https://www.facebook.com/huko.fpt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdFacebook size={16} />
            <span className="text-sm">/huko.fpt</span>
          </a>
          <a
            className="flex items-center px-2 h-full hover:bg-zinc-700 cursor-pointer text-stone-300"
            href="https://github.com/hukoFpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubInverted size={14} />
            <span className="text-sm">/hukoFpt</span>
          </a>
          <a
            className="flex items-center px-2 h-full hover:bg-zinc-700 cursor-pointer text-stone-300"
            href="https://discordapp.com/users/486534757459558410"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={14} className="rounded-full" />
            <span className="text-sm">/hukodev_is</span>
          </a>
          <a
            className="flex items-center px-2 h-full hover:bg-zinc-700 cursor-pointer text-stone-300"
            href="mailto:lynnie.nguyen.bns@gmail.com"
          >
            <MdEmail size={14} className="rounded-full" />
            <span className="text-sm">/lynnie.nguyen.bns@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center ml-auto h-full text-stone-300 gap-1">
          <p className="text-sm">Created with</p>
          <a
            className="flex gap-1 h-full items-center cursor-pointer hover:bg-zinc-700 px-2"
            href="http://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiNextjsFill size={16} />
            <p className="text-sm">Next.js</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
