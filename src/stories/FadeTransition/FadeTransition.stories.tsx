import type { Meta, StoryObj } from "@storybook/react";

import FadeTransition from "./FadeTransition";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Framer/Fade",
  component: FadeTransition,
  tags: ["autodocs"],
} satisfies Meta<typeof FadeTransition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
