import Image from "next/image";
import { MdMinimize, MdCropSquare, MdClose } from "react-icons/md"; // Import Material Icons from React Icons
import { VscArrowLeft, VscArrowRight, VscSearch } from "react-icons/vsc";

const TitleBar = () => {
  return (
    <div className="flex items-center h-9 pl-2.5 bg-neutral-900 border-b border-zinc-700">
      {/* Logo section */}
      <div className="flex items-center h-full text-sm text-neutral-400">
        <Image
          src="/takodachi.png"
          alt="Logo"
          width={24}
          height={24}
          className="mr-2"
        />
        <p>TakoStudio</p>
      </div>
      {/* Search section */}
      <div className="flex items-center justify-center h-full ml-4 gap-1 flex-grow">
        <div className="flex items-center justify-center p-0.5 rounded hover:bg-zinc-800 text-stone-300 cursor-pointer">
          <VscArrowLeft size={20} />
        </div>
        <div className="flex items-center justify-center p-0.5 rounded text-neutral-500">
          <VscArrowRight size={20} />
        </div>
        <div className="flex items-center justify-center gap-2 w-[600px] bg-neutral-800 rounded-md border border-zinc-700 p-0.5 hover:bg-neutral-700 hover:border-neutral-500">
          <div className="text-stone-300">
            <VscSearch size={16} />
          </div>
          <p className="text-white text-sm">huko portfolio</p>
        </div>
      </div>
      {/* Control section */}
      <div className="flex items-center h-full ml-auto ">
        <div className="h-full px-2.5 flex items-center justify-center hover:bg-neutral-700 text-stone-300">
          <MdMinimize size={16} />
        </div>
        <div className="h-full px-2.5 flex items-center justify-center hover:bg-neutral-700 text-stone-300">
          <MdCropSquare size={16} />
        </div>
        <div className="h-full px-2.5 flex items-center justify-center hover:bg-red-600 text-stone-300">
          <MdClose size={16} />
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
