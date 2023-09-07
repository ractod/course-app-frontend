const Informations = ({ course: { details } }) => {
  return (
    <div className="flex-auto">
      <h2 className="text-lg font-black text-typography md:text-xl lg:text-2xl">
        توضیحات
      </h2>
      <p dangerouslySetInnerHTML={{ __html: details.description }} className="mt-5 text-sm font-medium text-mute md:text-[15px] lg:text-base">
      </p>
    </div>
  );
};

export default Informations;
