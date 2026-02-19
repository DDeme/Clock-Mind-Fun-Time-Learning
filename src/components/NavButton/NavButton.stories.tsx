import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavButton } from "./NavButton";

const meta = {
  title: "Components/NavButton",
  component: NavButton,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "text",
      description: "Material Symbols icon name",
    },
    label: {
      control: "text",
      description: "Button label text",
    },
    active: {
      control: "boolean",
      description: "Whether the button is in active state",
    },
    fill: {
      control: "boolean",
      description: "Whether to use the filled icon variant",
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "menu_book",
    label: "LEARN",
    active: false,
  },
};

export const Active: Story = {
  args: {
    icon: "videogame_asset",
    label: "PLAY",
    active: true,
    fill: true,
  },
};

export const Inactive: Story = {
  args: {
    icon: "emoji_events",
    label: "AWARDS",
    active: false,
  },
};

export const Profile: Story = {
  args: {
    icon: "person",
    label: "PROFILE",
    active: false,
  },
};

export const ActiveWithoutFill: Story = {
  args: {
    icon: "menu_book",
    label: "LEARN",
    active: true,
    fill: false,
  },
};

export const AllNavButtons: Story = {
  args: {
    icon: "menu_book",
    label: "LEARN",
    active: false,
  },
  render: () => (
    <nav className="flex justify-around items-center gap-8 bg-white border-t border-slate-100 pb-8 pt-3 px-6">
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
  ),
};
