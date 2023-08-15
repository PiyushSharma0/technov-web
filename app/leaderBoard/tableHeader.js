const TableHeader = () => {
  return (
    // <thead>
    //   <tr>
    //     <th className="px-4 py-5 border-b-2 border-gray-200 bg-lightblack text-center text-base font-semibold text-darkwhite uppercase tracking-wider lg:hidden">
    //       SL No.
    //     </th>
    //     <th className="px-4 py-5 border-b-2 border-gray-200 bg-lightblack text-center text-base font-semibold text-darkwhite uppercase tracking-wider lg:text-sm">
    //       Rank
    //     </th>
    //     <th className="px-4 py-5 border-b-2 border-gray-200 bg-lightblack text-left text-base font-semibold text-darkwhite uppercase tracking-wider lg:text-sm">
    //       Participant&apos;s Info
    //     </th>
    //     <th className="px-4 py-5 border-b-2 border-gray-200 bg-lightblack text-left text-base font-semibold text-darkwhite uppercase tracking-wider lg:hidden">
    //       GitHub Handle
    //     </th>
    //     <th className="px-4 py-5 border-b-2 border-gray-200 bg-lightblack text-left text-base font-semibold text-darkwhite uppercase tracking-wider lg:hidden">
    //       View All PRs
    //     </th>
    //     <th className="px-4 py-5 border-b-2 border-gray-200 bg-lightblack text-center text-base font-semibold text-darkwhite uppercase tracking-wider lg:text-sm xs:hidden">
    //       Points
    //     </th>
    //   </tr>
    // </thead>
    <thead>
      <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
        <th class="px-4 py-3">SL No.</th>
        <th class="px-4 py-3">Participant&apos;s Info</th>
        <th class="px-4 py-3">Rank</th>
        <th class="px-4 py-3">Points</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
