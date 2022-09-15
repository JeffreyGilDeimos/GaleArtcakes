import React from "react";

export default function Loading() {
  return (
    <div className="loading-base">
      <div className="loading-auth bg-white rounded-circle">
        <Spinner name="ball-spin-fade-loader" style={{ color: "#6a2101" }} />
      </div>
    </div>
  );
}
