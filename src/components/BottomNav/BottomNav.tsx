import React from "react";
import { NavButton } from "../NavButton";

export const BottomNav: React.FC = () => (
  <nav className="flex justify-around items-center bg-white  border-t border-slate-100  pb-8 pt-3 px-6">
    <NavButton icon="menu_book" label="LEARN" active={false} />
    <NavButton
      icon="videogame_asset"
      label="PLAY"
      active={true}
      fill={true}
    />
    <NavButton icon="emoji_events" label="AWARDS" active={false} />
    <NavButton icon="person" label="PROFILE" active={false} />
  </nav>
);
