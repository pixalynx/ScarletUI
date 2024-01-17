import type { Meta, StoryObj } from "@storybook/react";
import { PageContainer } from "./PageContainer";

const meta: Meta<typeof PageContainer> = {
  title: "Components/Layouts/Page",
  component: PageContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a Heading",
  },
};
