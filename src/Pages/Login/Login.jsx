import {
   TextInput,
   PasswordInput,
   Checkbox,
   Anchor,
   Paper,
   Title,
   Text,
   Container,
   Group,
   Button,
} from "@mantine/core";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const nav = useNavigate();

   return (
      <Container
         size={420}
         my={40}
      >
         <Title
            ta="center"
            className={classes.title}
         >
            Welcome back!
         </Title>
         <Text
            c="dimmed"
            size="sm"
            ta="center"
            mt={5}
         >
            Do not have an account yet?{" "}
            <Anchor
               size="sm"
               component="button"
               onClick={() => nav("/register")}
            >
               Create account
            </Anchor>
         </Text>

         <Paper
            withBorder
            shadow="md"
            p={30}
            mt={30}
            radius="md"
         >
            <TextInput
               label="Email"
               placeholder="you@mantine.dev"
               required
            />
            <PasswordInput
               label="Password"
               placeholder="Your password"
               required
               mt="md"
            />
            <Group
               justify="space-between"
               mt="lg"
            >
               <Checkbox label="Remember me" />
               <Anchor
                  component="button"
                  size="sm"
               >
                  Forgot password?
               </Anchor>
            </Group>
            <Button
               fullWidth
               mt="xl"
               onClick={() => nav("/chat")}
            >
               Login
            </Button>
         </Paper>
      </Container>
   );
}
