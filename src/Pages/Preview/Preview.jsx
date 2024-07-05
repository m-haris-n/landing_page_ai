import { Grid } from "@mantine/core";
import React from "react";
import CodeEditor from "./components/CodeEditor";
import PagePreview from "./components/PagePreview";

export default function Preview() {
   return (
      <Grid
         gutter={"xl"}
         h={"99vh"}
         w={"99%"}
      >
         <Grid.Col span={6}>
            <CodeEditor />
         </Grid.Col>
         <Grid.Col span={6}>
            <PagePreview />
         </Grid.Col>
      </Grid>
   );
}
