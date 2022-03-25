// Main Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Styled Dependencies
const Chart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  {
    ssr: false,
  }
);

// Chakra Dependencies
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

// Components
import HeaderComponent from "../components/Header";
import SidebarComponent from "../components/Sidebar";

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2022-03-05T00:00:000Z",
      "2022-03-06T00:00:000Z",
      "2022-03-07T00:00:000Z",
      "2022-03-08T00:00:000Z",
      "2022-03-09T00:00:000Z",
      "2022-03-10T00:00:000Z",
      "2022-03-11T00:00:000Z",
    ],
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  { name: "subscribers", data: [140, 115, 95, 180, 68, 90, 100] },
];

const Dashboard: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | prisma.dash</title>
      </Head>
      <Flex flexDirection="column" h="100vh">
        <HeaderComponent />

        <Flex
          width="100%"
          marginY="6"
          maxWidth={1480}
          marginX="auto"
          paddingX="6"
        >
          <SidebarComponent />

          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            alignItems="flex-start"
          >
            <Box
              padding={["6", "8"]}
              backgroundColor="gray.800"
              borderRadius="8"
              paddingBottom="4"
            >
              <Text fontSize="lg" marginBottom="4">
                Inscritos da semana
              </Text>
              <Chart
                type="area"
                options={options}
                series={series}
                height="192"
              />
            </Box>

            <Box
              padding={["6", "8"]}
              backgroundColor="gray.800"
              borderRadius="8"
              paddingBottom="4"
            >
              <Text fontSize="lg" marginBottom="4">
                Taxa de abertura
              </Text>
              <Chart
                type="area"
                options={options}
                series={series}
                height="192"
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Dashboard;
