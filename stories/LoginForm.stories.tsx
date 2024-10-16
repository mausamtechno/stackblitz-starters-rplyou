import LoginForm from "@/app/components/storybook/LoginForm";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { userEvent, within, expect } from '@storybook/test';

const meta = {
  title: "Example/Components/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  args: { onSubmit: action("clicked") },
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const LoginFormStory: Story = {};

export const FilledForm: Story = {
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
   
      await userEvent.type(canvas.getByTestId('email-input'), 'email@provider.com');
   
      await userEvent.type(canvas.getByTestId('password-input'), 'a-random-password');
   
      await userEvent.click(canvas.getByRole('button'));
   
    },
  };