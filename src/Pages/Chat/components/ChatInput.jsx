import { Button, Flex, TextInput, Textarea } from "@mantine/core";
import { IconSend, IconSend2 } from "@tabler/icons-react";
import React from "react";

export default function ChatInput() {
   return (
      <Flex
         direction={"row"}
         align={"end"}
         w={"90%"}
         p={4}
         styles={{
            root: {
               border: "1px solid #ccc",
               borderRadius: "23px",
            },
         }}
      >
         <Textarea
            minRows={1}
            maxRows={8}
            autosize
            w={"100%"}
            styles={{ input: { border: "none", borderRadius: "21px" } }}
         />
         <Button radius={"xl"}>
            <IconSend2 />
         </Button>
      </Flex>
   );
}
