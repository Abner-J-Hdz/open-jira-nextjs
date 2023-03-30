import { Box } from "@mui/material"
import Head from "next/head"
import { FC, ReactNode } from "react"
import { NavBar } from "../ui";
import SideBar from "../ui/SideBar";

// sx tiene acceso al tema, por lo tanto se puede alterar desde el layout

interface Props{
    title?: string
    children: ReactNode;
}

export const Layout: FC<Props> = ({ title = 'OpenJira - App', children }) => {
  return (
    <Box sx={{ flexFlow:1, }} >
        <Head>
            <title>{ title }</title>
        </Head>

        <NavBar />
        <SideBar/>

        <Box sx={{padding: '10px 20px'}}>
            {children}
        </Box>
    </Box>
  )
}

