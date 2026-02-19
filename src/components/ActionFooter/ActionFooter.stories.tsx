import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionFooter } from "./ActionFooter";

const meta = {
  title: "Components/ActionFooter",
  component: ActionFooter,
  tags: ["autodocs"],
  args: {
    onCheckAnswer: () => {},
    onNext: () => {},
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
} satisfies Meta<typeof ActionFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isFeedbackVisible: false,
    isCorrect: null,
    isDisabled: false,
    correctTimeLabel: "3:45",
  },
};

export const Disabled: Story = {
  args: {
    isFeedbackVisible: false,
    isCorrect: null,
    isDisabled: true,
    correctTimeLabel: "3:45",
  },
};

export const CorrectFeedback: Story = {
  args: {
    isFeedbackVisible: true,
    isCorrect: true,
    isDisabled: false,
    correctTimeLabel: "3:45",
  },
};

export const IncorrectFeedback: Story = {
  args: {
    isFeedbackVisible: true,
    isCorrect: false,
    isDisabled: false,
    correctTimeLabel: "3:45",
  },
};
