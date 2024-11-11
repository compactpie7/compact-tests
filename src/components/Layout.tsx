import { ContentArea, MainLayout, MainLink, Sidebar } from "@/styles"
import { LayoutProps } from "@/types/layout"
import { List, ListItem, TextField, Typography } from "@mui/material"
import { FC } from "react"

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>

            <MainLayout>
                <Sidebar>
                    <TextField label="Поиск по тестам" variant="outlined" />
                    <Typography variant="h4" sx={{ color: 'black' }}>Тесты</Typography>
                    <List>
                        <ListItem><MainLink href={'/test'}>Тест</MainLink></ListItem>
                    </List>
                </Sidebar>

                <ContentArea>
                    {children}
                </ContentArea>
            </MainLayout>
        </>
    )
}