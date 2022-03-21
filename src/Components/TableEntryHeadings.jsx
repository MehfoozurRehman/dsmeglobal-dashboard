import React from "react";

function EntryHeadingData({ value }) {
  return (
    <div
      className="table__container__header__entry"
      style={value === "" ? { maxWidth: 100, minWidth: 100 } : null}
    >
      {value}
    </div>
  );
}
export default function TableEntryHeadings({ tableHeadingEntryRow }) {
  return (
    <div className="table__container__header">
      {tableHeadingEntryRow.map((item, i) => (
        <EntryHeadingData key={i} value={item.heading} />
      ))}
    </div>
  );
}
