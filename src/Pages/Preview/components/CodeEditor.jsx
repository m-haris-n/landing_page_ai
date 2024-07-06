import { RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import "highlight.js/styles/github.css";
import html from "highlight.js/lib/languages/xml";
import { Box, Button, Flex, ScrollArea } from "@mantine/core";
import {
   IconPlayCard,
   IconPlayerPlay,
   IconPlayerPlayFilled,
   IconRun,
} from "@tabler/icons-react";

const lowlight = createLowlight();

// register languages that you are planning to use
// lowlight.register({ html });

function escapeHtml(unsafe) {
   return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

const codeExample = escapeHtml(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <header class="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div class="flex space-x-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
        </div>
        <div>
            <img src="logo.png" alt="Logo" class="h-10">
        </div>
    </header>
</body>
</html>
`);

export default function CodeEditor() {
   const editor = useEditor({
      extensions: [
         StarterKit.configure({ codeBlock: true }),
         CodeBlockLowlight.configure({ lowlight }),
      ],
      content: `<pre><code>${codeExample}</code></pre>`,
   });

   return (
      <Box p={4}>
         <RichTextEditor
            editor={editor}
            h={"calc(100vh - 20px)"}
         >
            <RichTextEditor.Toolbar>
               <Flex
                  w={"100%"}
                  justify={"end"}
               >
                  <Button>
                     <IconPlayerPlayFilled />
                  </Button>
               </Flex>
            </RichTextEditor.Toolbar>

            <ScrollArea h={"calc(100vh - 60px)"}>
               <RichTextEditor.Content />
            </ScrollArea>
         </RichTextEditor>
      </Box>
   );
}
