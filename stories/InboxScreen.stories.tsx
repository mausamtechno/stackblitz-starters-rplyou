import { Meta } from "@storybook/react";
import InboxScreen from "./InboxScreen";
import {
  fetchPostURL,
  GlobalStateProvider,
} from "@/app/context/GlobalStateProvider";
import { http, HttpResponse } from "msw";
import { defaultTasksData } from "./TaskList.stories";

const meta = {
  component: InboxScreen,
  title: "Example/Components/InboxScreen",
  decorators: [(story) => <GlobalStateProvider>{story()}</GlobalStateProvider>],
  tags: ["autodocs"],
} satisfies Meta<typeof InboxScreen>;

export default meta;

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get(fetchPostURL, () => {
          return HttpResponse.json(defaultTasksData, { status: 200 });
        }),
      ],
    },
  },
};

export const Error = {
  parameters: {
    msw: {
      handlers: [
        http.get(fetchPostURL, () => {
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
