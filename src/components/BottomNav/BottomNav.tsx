import React from 'react'
import { NavButton } from '../NavButton'

export const BottomNav: React.FC = () => (
    <nav className="flex items-center justify-around border-t border-slate-100 bg-white px-6 pt-3 pb-8">
        <NavButton
            icon="menu_book"
            label="LEARN"
            active={false}
        />
        <NavButton
            icon="videogame_asset"
            label="PLAY"
            active={true}
            fill={true}
        />
        <NavButton
            icon="emoji_events"
            label="AWARDS"
            active={false}
        />
        <NavButton
            icon="person"
            label="PROFILE"
            active={false}
        />
    </nav>
)
