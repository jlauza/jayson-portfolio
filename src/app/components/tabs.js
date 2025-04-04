"use client";
import * as React from "react";
import { Tabs } from "radix-ui";
import { Flex, Heading } from "@radix-ui/themes";
import { Chip } from "@mui/material";
import ClientFeedback from "./feedbacks";
import ProjectCard from "./projects";

const InformationTabs = () => {
  return (
    <>
      <Tabs.Root
        className="flex w-full min-w-[300px] max-w-[650px] self-center flex-col"
        defaultValue="tab1"
      >
        <Tabs.List
          className="flex shrink-0 border-b border-mauve6"
          aria-label="Manage your account"
        >
          <Tabs.Trigger
            className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md hover:text-blue-400 data-[state=active]:text-blue-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
            value="tab1"
          >
            About
          </Tabs.Trigger>
          <Tabs.Trigger
            className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md hover:text-blue-400 data-[state=active]:text-blue-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
            value="tab2"
          >
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger
            className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md hover:text-blue-400 data-[state=active]:text-blue-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
            value="tab3"
          >
            Feedback
          </Tabs.Trigger>
          <Tabs.Trigger
            className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md hover:text-blue-400 data-[state=active]:text-blue-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
            value="tab4"
          >
            Contact
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="grow rounded-b-md p-5" value="tab1">
          <p className="mb-5 text-[15px] leading-normal text-mauve11">
            I am a web developer with expertise in building websites and web
            applications, ranging from simple business websites to full-scale
            web-based applications. I specialize in the MERN stack, leveraging
            Next.js for optimized performance and Redis for efficient data
            caching.
          </p>
          <p className="mb-5 text-[15px] leading-normal text-mauve11">
            With a focus on clean, scalable, and high-performance solutions, I
            ensure that every project meets modern web standards while
            delivering seamless user experiences. Whether it&apos;s a dynamic
            web app or a business site, I bring efficiency and reliability to
            the digital space
          </p>
          <p className="mb-5 text-[15px] leading-normal text-mauve11">
            Let&apos;s build something great together! 🚀
          </p>

          <Flex gap="2" className="flex flex-row overflow-x-wrap">
            <Heading>Skills:</Heading>{" "}
            <Chip
              label="Node"
              color="primary"
              size="small"
              className="ml-2"
              variant="outlined"
            />
            <Chip
              label="MongoDB"
              color="secondary"
              size="small"
              className="ml-2"
              variant="outlined"
            />
            <Chip
              label="Express"
              color="warning"
              size="small"
              className="ml-2"
              variant="outlined"
            />
            <Chip
              label="React"
              color="info"
              size="small"
              className="ml-2"
              variant="outlined"
            />
            <Chip
              label="NextJS"
              color="warning"
              size="small"
              className="ml-2"
              variant="outlined"
            />
            <Chip
              label="Redis"
              color="error"
              size="small"
              className="ml-2"
              variant="outlined"
            />
            <Chip
              label="PHP"
              color="primary"
              size="small"
              className="ml-2"
              variant="outlined"
            />
            <Chip
              label="SQL"
              color="warning"
              size="small"
              className="ml-2"
              variant="outlined"
            />
          </Flex>

          <Flex gap="2" className="flex flex-row mt-5">
            Rate: $20/hour
            <Chip
              label="Available"
              color="success"
              size="small"
              className="ml-2"
              variant="outlined"
            />
            <Chip
              label="Remote"
              color="primary"
              size="small"
              className="ml-2"
              variant="outlined"
            />
            <Chip
              label="Part-time"
              color="secondary"
              size="small"
              className="ml-2"
              variant="outlined"
            />
          </Flex>
        </Tabs.Content>
        <Tabs.Content className="grow rounded-b-md p-5" value="tab2">
          <ProjectCard
            name="Pro Dance Suite"
            authors="Jayson Lauza"
            image="/mock-up.png"
            demoLink="https://pro-dance-suite.vercel.app/"
            description="A web application designed for dance studios."
          />
        </Tabs.Content>
        <Tabs.Content className="grow rounded-b-md p-5" value="tab3">
          <ClientFeedback
            name="Jane Smith"
            position="Marketing Manager"
            rating={4}
            feedback="Amazing experience! The team delivered exactly what we needed."
            image="https://randomuser.me/api/portraits/women/44.jpg"
          />
          {/* Add more component feedback here */}
        </Tabs.Content>
        <Tabs.Content className="grow rounded-b-md p-5" value="tab4">
          <p className="mb-5 text-[15px] leading-normal text-mauve11">
            Got questions? Send me inquiries.
          </p>
          <fieldset className="mb-[15px] flex w-full flex-col justify-start">
            <label
              className="mb-2.5 block text-[13px] leading-none text-violet12"
              htmlFor="currentPassword"
            >
              Name
            </label>
            <input
              className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="name"
              type="name"
            />
          </fieldset>
          <fieldset className="mb-[15px] flex w-full flex-col justify-start">
            <label
              className="mb-2.5 block text-[13px] leading-none text-violet12"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="email"
              type="email"
            />
          </fieldset>
          <fieldset className="mb-[15px] flex w-full flex-col justify-start">
            <label
              className="mb-2.5 block text-[13px] leading-none text-violet12"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="h-[85px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="message"
              type="message"
            />
          </fieldset>
          <div className="mt-5 flex justify-end">
            <button
              onClick={() => {
                alert("[Testmode only:] Message sent!");
              }}
              className="inline-flex h-[35px] cursor-default items-center justify-center rounded bg-green4 px-[15px] text-[15px] font-medium leading-none text-green11 border-1 focus:border-0 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7"
            >
              Submit
            </button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

export default InformationTabs;
