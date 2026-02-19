import type { Meta, StoryObj } from "@storybook/react-vite";
import { Answers } from "./Answers";

const meta = {
  title: "Components/Answers",
  component: Answers,
  tags: ["autodocs"],
  args: {
    onSelectOption: () => {},
    onChangeHours: () => {},
    onChangeMinutes: () => {},
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
} satisfies Meta<typeof Answers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultipleChoice: Story = {
  args: {
    mode: "multiple-choice",
    options: ["3:45", "6:30", "9:15", "12:00"],
    selectedOption: null,
    userInputHours: "",
    userInputMinutes: "",
  },
};

export const MultipleChoiceSelected: Story = {
  args: {
    mode: "multiple-choice",
    options: ["3:45", "6:30", "9:15", "12:00"],
    selectedOption: "3:45",
    userInputHours: "",
    userInputMinutes: "",
  },
};

export const Input: Story = {
  args: {
    mode: "input",
    options: [],
    selectedOption: null,
    userInputHours: "",
    userInputMinutes: "",
  },
};

export const InputWithValues: Story = {
  args: {
    mode: "input",
    options: [],
    selectedOption: null,
    userInputHours: "3",
    userInputMinutes: "45",
  },
};
