const DotsLoading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-x-2">
      <span
        className="aspect-square min-w-[10px] w-full max-w-[24px] 
        rounded-full bg-primary-500 animate-zoom_in_out"
      ></span>
      <span
        className="aspect-square min-w-[10px] w-full max-w-[24px] 
        rounded-full bg-primary-500 animate-zoom_in_out [animation-delay:400ms_!important]"
      ></span>
      <span
        className="aspect-square min-w-[10px] w-full max-w-[24px] 
        rounded-full bg-primary-500 animate-zoom_in_out"
      ></span>
    </div>
  );
};

export default DotsLoading;
