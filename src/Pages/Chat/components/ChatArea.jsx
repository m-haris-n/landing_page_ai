import { Flex, ScrollArea } from "@mantine/core";
import React from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

export default function ChatArea() {
   return (
      <Flex
         direction={"column"}
         w={"100%"}
         h={"calc(100vh - 120px)"}
         align={"center"}
      >
         <ScrollArea my={8}>
            <ChatMessages />
         </ScrollArea>
         <ChatInput />
      </Flex>
   );
}
