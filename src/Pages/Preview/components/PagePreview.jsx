import { Box } from "@mantine/core";
import React from "react";
import { AspectRatio } from "@mantine/core";

export default function PagePreview() {
   return (
      <Box p={4}>
         <iframe
            src="https://landing-page-ai-sigma.vercel.app/chat"
            title="W3Schools Free Online Web Tutorials"
            width={"100%"}
            style={{ height: "98vh" }}
         ></iframe>
      </Box>
   );
}
