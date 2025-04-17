const Blank = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center h-full">
      <img
        src="/takodachi.anim.gif"
        alt="Animated GIF"
        className="w-64 h-64 opacity-50"
      />
      <p className="text-lg text-neutral-500 animate-pulse">Give me more cookie...</p>
    </div>
  );
};

export default Blank;
