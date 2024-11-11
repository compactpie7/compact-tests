import { DescriptionProps } from "@/types/description";
import { Typography } from "@mui/material";
import { FC } from "react";

export const CustomDescription: FC<DescriptionProps> = ({ children }) => {
    return (
        <Typography variant="body1" paragraph>
            {children}
        </Typography>
    )
}