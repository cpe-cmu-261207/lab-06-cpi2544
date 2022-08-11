import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

import { useState } from "react";
import UserCardDetail from "./UserCardDetail";
export default function UserCard(props) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="border-bottom" onClick={() => setDropdown(!dropdown)}>
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.img} width="90px" className="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {dropdown ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {dropdown && (
        <UserCardDetail email={props.email} address={props.address} />
      )}
      {/* UserCardDetail is hidden */}
    </div>
  );
}
