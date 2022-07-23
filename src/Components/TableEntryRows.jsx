import React from "react";
import { EntryInfoRowData } from "./EntryInfoRowData";

export default function TableEntryRows({ tableEntryInfoRow }) {
  return (
    <div className="entry__info__row">
      {tableEntryInfoRow.map((item, i) => (
        <EntryInfoRowData
          key={i}
          value={item.info}
          variant={
            item.type === "btn_secondary"
              ? "btn_secondary"
              : item.type === "btn_primary"
              ? "btn_primary"
              : item.type === "img"
              ? "img"
              : item.type === "message"
              ? "message"
              : null
          }
          placeholder={item.placeholder}
          path={item.path}
          onClick={item.onClick}
          label={item.label}
        />
      ))}
    </div>
  );
}
