import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    currentQuestionIdx: {
      control: { type: "number", min: 1, max: 20 },
      description: "Current question number",
    },
    totalQuestions: {
      control: { type: "number", min: 1, max: 20 },
      description: "Total number of questions",
    },
    score: {
      control: { type: "number", min: 0 },
      description: "Current score",
    },
    onClose: {
      action: "close",
      description: "Called when the close button is clicked",
    },
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentQuestionIdx: 1,
    totalQuestions: 5,
    score: 120,
  },
};

export const MidProgress: Story = {
  args: {
    currentQuestionIdx: 3,
    totalQuestions: 5,
    score: 60,
  },
};

export const LastQuestion: Story = {
  args: {
    currentQuestionIdx: 5,
    totalQuestions: 5,
    score: 200,
  },
};

export const ZeroScore: Story = {
  args: {
    currentQuestionIdx: 1,
    totalQuestions: 10,
    score: 0,
  },
};

export const HighScore: Story = {
  args: {
    currentQuestionIdx: 8,
    totalQuestions: 10,
    score: 9999,
  },
};
