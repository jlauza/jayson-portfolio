"use client";
import Image from "next/image";
import photo from "../../public/photo.jpg";
import InformationTabs from "./components/tabs";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="grid xl:w-full lg:w-full sm:w-full max-w-[650px] mx-auto grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Box maxWidth="240px" className="w-full">
          <Card
            className="flex flex-col items-center justify-center gap-3"
            padding="4"
            radius="8"
            shadow="2"
            width="100%"
          >
            <Flex
              gap="3"
              align="center"
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={photo}
                alt="Jayson Lauza"
                width={100}
                height={100}
                className="rounded-full"
              />
              <Box className="flex flex-col items-center justify-center my-5">
                <Typography variant="h4" fontWeight={700} className="lowercase">
                  jayson lauza
                </Typography>
                <Text as="div" size="2" color="gray">
                  Web Developer | Software Developer
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>

        <InformationTabs />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jlauza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/jayson-lauza-a4441948/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogoIcon />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </footer>
    </div>
  );
}
