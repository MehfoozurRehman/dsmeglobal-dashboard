import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({
  placeholder,
  style,
  className,
  path,
  onClick,
}) {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        onClick={
          onClick
            ? onClick
            : () => {
                navigate(path);
              }
        }
        className={className}
        style={style}
      >
        {placeholder}
      </button>
    </>
  );
}
