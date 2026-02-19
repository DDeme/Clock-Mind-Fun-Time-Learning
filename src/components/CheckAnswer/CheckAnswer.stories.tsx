import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckAnswer } from "./CheckAnswer";

const meta = {
  title: "Components/CheckAnswer",
  component: CheckAnswer,
  tags: ["autodocs"],
  args: {
    onCheckAnswer: () => {},
  },
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 448 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CheckAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
