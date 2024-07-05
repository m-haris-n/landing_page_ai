import { AppShell, Burger, Group, Skeleton, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ChatArea from "./components/ChatArea";

export default function Chat() {
   const [opened, { toggle }] = useDisclosure();

   return (
      <AppShell
         header={{ height: { base: 60, md: 70, lg: 80 } }}
         navbar={{
            width: { base: 200, md: 250, lg: 300, xl: 350 },
            breakpoint: "sm",
            collapsed: { mobile: !opened },
         }}
         padding="md"
      >
         <AppShell.Header>
            <Group
               h="100%"
               px="md"
            >
               <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
               />
               <Title
                  order={2}
                  fw={500}
                  ff={"heading"}
               >
                  AI Landing Page Maker
               </Title>
            </Group>
         </AppShell.Header>
         <AppShell.Navbar p="md">
            {Array(15)
               .fill(0)
               .map((_, index) => (
                  <Skeleton
                     key={index}
                     h={28}
                     mt="sm"
                     animate={false}
                  />
               ))}
         </AppShell.Navbar>
         <AppShell.Main>
            <ChatArea />
         </AppShell.Main>
      </AppShell>
   );
}
