import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Link from "next/link";

export const MainLayout = styled(Box)`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled(Box)`
  width: 300px;
  padding: 16px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContentArea = styled(Box)`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainLink = styled(Link)`
    color: #1565c0;
    text-decoration: underline;
`