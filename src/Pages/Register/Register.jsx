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
import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
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
            Register
         </Title>
         <Text
            c="dimmed"
            size="sm"
            ta="center"
            mt={5}
         >
            Already have an account?{" "}
            <Anchor
               size="sm"
               component="button"
               onClick={() => nav("/login")}
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
               label="Username"
               placeholder="Your Username"
               required
            />
            <TextInput
               label="Email"
               placeholder="Your Email Address"
               mt="md"
               required
            />
            <PasswordInput
               label="Password"
               placeholder="Your password"
               required
               mt="md"
            />

            <Button
               fullWidth
               mt="xl"
            >
               Register
            </Button>
         </Paper>
      </Container>
   );
}
