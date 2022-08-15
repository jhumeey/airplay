import * as React from "react";
import { ToggleModalProps } from "./types";

export default function DashTopBar(props: ToggleModalProps) {
  return (
    <div>
      <div className="flex justify-between flex-1 space-x-4 md:justify-end">
        <button onClick={() => props.setShowModal(true)} className="inline-flex border border-gray-brand-03 text-green-brand-01 py-3 px-6 focus:outline-none rounded-lg text-lg hover:animate-bounce hover:text-white">Suggest a resource</button>
      </div>
    </div>
  );
}
