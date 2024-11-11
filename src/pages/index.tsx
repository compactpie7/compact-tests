// pages/index.tsx
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@mui/material";
import Link from "next/link";
import { CustomTitle } from "@/components/Title";
import { CustomDescription } from "@/components/Description";

const CompactTests: React.FC = () => {
  return (
    <Layout>
      <CustomTitle>
        Тесты
      </CustomTitle>
      <CustomDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nulla eum corporis tempore. Natus, numquam? Quam quia reprehenderit repellendus porro, voluptates omnis sed modi nihil commodi rerum totam nemo architecto.
      </CustomDescription>
      <Link passHref href={'/tests'}>
        <Button variant="contained" color="primary">
          Перейти к тестам
        </Button>
      </Link>
    </Layout>
  );
};

export default CompactTests;
