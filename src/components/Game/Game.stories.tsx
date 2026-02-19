import type { Meta, StoryObj } from "@storybook/react-vite";
import { Game } from "./Game";

const meta = {
  title: "Components/Game",
  component: Game,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Game>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
