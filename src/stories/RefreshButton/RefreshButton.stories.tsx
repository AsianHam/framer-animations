import type { Meta, StoryObj } from "@storybook/react";

import RefreshButton from "./RefreshButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Framer/Refresh Button",
  component: RefreshButton,
  tags: ["autodocs"],
} satisfies Meta<typeof RefreshButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const refreshButton: Story = {};
