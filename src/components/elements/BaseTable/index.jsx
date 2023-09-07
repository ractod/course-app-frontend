const BaseTable = ({ heads, children }) => {
  return (
    <div className="overflow-x-auto -my-6">
      <table className="w-full table-auto text-right border-spacing-y-6">
        <thead>
          <tr className="bg-gray-200">
            {heads.map((head) => (
              <th
                key={head.id}
                className="truncate px-5 py-4 text-sm text-mute font-black first-of-type:rounded-r-[15px] 
                last-of-type:rounded-l-[15px] md:text-[15px] lg:text-base"
              >
                {head.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
