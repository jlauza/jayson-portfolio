import * as React from "react";
import { Tabs } from "radix-ui";

const InformationTabs = () => (
  <Tabs.Root className="flex w-full flex-col" defaultValue="tab1">
    <Tabs.List
      className="flex shrink-0 border-b border-mauve6"
      aria-label="Manage your account"
    >
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none text-gray-300 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-blue-400 data-[state=active]:text-blue-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-blue-500"
        value="tab1"
      >
        Profile
      </Tabs.Trigger>
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none text-gray-300 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-blue-400 data-[state=active]:text-blue-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-blue-500"
        value="tab2"
      >
        Projects
      </Tabs.Trigger>
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none text-gray-300 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-blue-400 data-[state=active]:text-blue-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-blue-500"
        value="tab3"
      >
        Contact
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="grow rounded-b-md p-5" value="tab1">
      <p className="mb-5 text-[15px] leading-normal text-mauve11">
        Make changes to your account here. Click save when you're done.
      </p>
      <fieldset className="mb-[15px] flex w-full flex-col justify-start">
        <label
          className="mb-2.5 block text-[13px] leading-none text-violet12"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
          id="name"
          defaultValue="Pedro Duarte"
        />
      </fieldset>
      <fieldset className="mb-[15px] flex w-full flex-col justify-start">
        <label
          className="mb-2.5 block text-[13px] leading-none text-violet12"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
          id="username"
          defaultValue="@peduarte"
        />
      </fieldset>
      <div className="mt-5 flex justify-end">
        <button className="inline-flex h-[35px] cursor-default items-center justify-center rounded bg-green4 px-[15px] text-[15px] font-medium leading-none text-green11 outline-none hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7">
          Save changes
        </button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="grow rounded-b-md p-5" value="tab2">
      <p className="mb-5 text-[15px] leading-normal text-mauve11">
        Change your password here. After saving, you'll be logged out.
      </p>
      <fieldset className="mb-[15px] flex w-full flex-col justify-start">
        <label
          className="mb-2.5 block text-[13px] leading-none text-violet12"
          htmlFor="currentPassword"
        >
          Current password
        </label>
        <input
          className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
          id="currentPassword"
          type="password"
        />
      </fieldset>
      <fieldset className="mb-[15px] flex w-full flex-col justify-start">
        <label
          className="mb-2.5 block text-[13px] leading-none text-violet12"
          htmlFor="newPassword"
        >
          New password
        </label>
        <input
          className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
          id="newPassword"
          type="password"
        />
      </fieldset>
      <fieldset className="mb-[15px] flex w-full flex-col justify-start">
        <label
          className="mb-2.5 block text-[13px] leading-none text-violet12"
          htmlFor="confirmPassword"
        >
          Confirm password
        </label>
        <input
          className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
          id="confirmPassword"
          type="password"
        />
      </fieldset>
      <div className="mt-5 flex justify-end">
        <button className="inline-flex h-[35px] cursor-default items-center justify-center rounded bg-green4 px-[15px] text-[15px] font-medium leading-none text-green11 outline-none hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7">
          Change password
        </button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="grow rounded-b-md p-5" value="tab3">
      <p className="mb-5 text-[15px] leading-normal text-mauve11">
        Change your password here. After saving, you'll be logged out.
      </p>
      <fieldset className="mb-[15px] flex w-full flex-col justify-start">
        <label
          className="mb-2.5 block text-[13px] leading-none text-violet12"
          htmlFor="currentPassword"
        >
          Current password
        </label>
        <input
          className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
          id="currentPassword"
          type="password"
        />
      </fieldset>
      <fieldset className="mb-[15px] flex w-full flex-col justify-start">
        <label
          className="mb-2.5 block text-[13px] leading-none text-violet12"
          htmlFor="newPassword"
        >
          New password
        </label>
        <input
          className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
          id="newPassword"
          type="password"
        />
      </fieldset>
      <fieldset className="mb-[15px] flex w-full flex-col justify-start">
        <label
          className="mb-2.5 block text-[13px] leading-none text-violet12"
          htmlFor="confirmPassword"
        >
          Confirm password
        </label>
        <input
          className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
          id="confirmPassword"
          type="password"
        />
      </fieldset>
      <div className="mt-5 flex justify-end">
        <button className="inline-flex h-[35px] cursor-default items-center justify-center rounded bg-green4 px-[15px] text-[15px] font-medium leading-none text-green11 outline-none hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7">
          Change password
        </button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default InformationTabs;
