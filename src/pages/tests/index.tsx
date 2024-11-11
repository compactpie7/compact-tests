import { Layout } from "@/components/Layout";
import { CustomTitle } from "@/components/Title";
import { MainLink } from "@/styles";
import { List, ListItem } from "@mui/material";

export default function testsPage() {
    return (
        <>
            <Layout>
                <CustomTitle>
                    Список всех тестов
                </CustomTitle>

                <List>
                    <ListItem>
                        <MainLink href={'/test'}>Test1</MainLink>
                    </ListItem>
                    <ListItem>
                        <MainLink href={'/test'}>Test2</MainLink>
                    </ListItem>
                    <ListItem>
                        <MainLink href={'/test'}>Test3</MainLink>
                    </ListItem>
                    <ListItem>
                        <MainLink href={'/test'}>Test4</MainLink>
                    </ListItem>
                    <ListItem>
                        <MainLink href={'/test'}>Test5</MainLink>
                    </ListItem>
                    <ListItem>
                        <MainLink href={'/test'}>Test6</MainLink>
                    </ListItem>
                    <ListItem>
                        <MainLink href={'/test'}>Test7</MainLink>
                    </ListItem>
                    <ListItem>
                        <MainLink href={'/test'}>Test8</MainLink>
                    </ListItem>

                </List>
            </Layout>
        </>
    )
}