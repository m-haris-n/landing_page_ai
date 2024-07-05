import { Overlay, Container, Title, Button, Text, Flex } from "@mantine/core";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
   const nav = useNavigate();

   return (
      <div className={classes.hero}>
         <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
         />
         <Container
            className={classes.container}
            size="md"
         >
            <Title className={classes.title}>
               A fully featured React components library
            </Title>
            <Text
               className={classes.description}
               size="xl"
               mt="xl"
            >
               Build fully functional accessible web applications faster than
               ever – Mantine includes more than 120 customizable components and
               hooks to cover you in any situation
            </Text>
            <Flex columnGap={16}>
               <Button
                  size="xl"
                  radius="xl"
                  className={classes.control}
                  onClick={() => nav("/register")}
               >
                  Register
               </Button>
               <Button
                  variant={"outline"}
                  bg={"white"}
                  size="xl"
                  radius="xl"
                  className={classes.control}
                  onClick={() => nav("/login")}
               >
                  Login{" "}
               </Button>
            </Flex>
         </Container>
      </div>
   );
}
