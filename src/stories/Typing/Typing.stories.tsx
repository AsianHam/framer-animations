import type { Meta, StoryObj } from "@storybook/react";

import Typing from "./Typing";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Framer/Typing",
  component: Typing,
  tags: ["autodocs"],
} satisfies Meta<typeof Typing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const typingAnimation: Story = {
  args: {
    textContent: "typing text here",
  },
};
