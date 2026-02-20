import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { within, userEvent, expect } from "storybook/test";
import { MultipleChoice } from "./MultipleChoice";

const meta = {
  title: "Components/MultipleChoice",
  component: MultipleChoice,
  tags: ["autodocs"],
  args: {
    onSelectOption: fn(),
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MultipleChoice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ["3:45", "6:30", "9:15", "12:00"],
    selectedOption: null,
  },
};

export const WithSelection: Story = {
  args: {
    options: ["3:45", "6:30", "9:15", "12:00"],
    selectedOption: "3:45",
  },
};

export const TwoOptions: Story = {
  args: {
    options: ["6:00", "12:00"],
    selectedOption: null,
  },
};

export const ClickOption: Story = {
  args: {
    options: ["3:45", "6:30", "9:15", "12:00"],
    selectedOption: null,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const option = canvas.getByText("6:30");
    await userEvent.click(option);
    await expect(args.onSelectOption).toHaveBeenCalledWith("6:30");
  },
};
