import { FC } from "react";
import { Typography } from "@mui/material";
import { TitleProps } from "@/types/title";


export const CustomTitle: FC<TitleProps> = ({ children }) => {
    return (
        <Typography variant="h3" gutterBottom>
            {children}
        </Typography>
    )
}