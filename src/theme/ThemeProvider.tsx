import { ChakraProvider ,extendTheme } from "@chakra-ui/react";
import { config } from ".";


 const theme = extendTheme({config});

 type Props = {children:React.ReactNode | React.ReactNode[] };

export function ThemeProvider({children}:Props){
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}