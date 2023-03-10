import React from "react";
import Header from "../components/Header";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { ColorModeContext } from "../theme";
import { useContext } from "react";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { LineChart } from "../components/LineChart";
import { BarChart } from "../components/BarChart";
import { GeoChart } from "../components/GeoChart";
import { StatBox } from "../components/StatBox";
import { ProgressCircle } from "../components/Progress";
export const Dashboard = () => {
  const { theme } = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"1px 20px 1px 20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StatBox
            title="12,361"
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[400],
                  fontSize: "26px",
                }}
              />
            }
          ></StatBox>
        </Box>

        {/* ROW 2 */}

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[400],
                  fontSize: "26px",
                }}
              />
            }
          ></StatBox>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[400],
                  fontSize: "26px",
                }}
              />
            }
          ></StatBox>
        </Box>
        {/* ROW 4 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[400],
                  fontSize: "26px",
                }}
              />
            }
          ></StatBox>
        </Box>
      </Box>

      {/* Grid CHARTS 2 */}

      <Box
        gridColumn="span 8"
        gridRow="span 2"
        marginTop="20px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box width="60%" height="300px" backgroundColor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[400]}
              >
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: colors.greenAccent[400],
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* TRANSACTION */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          width="400px"
          height="300px"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} fontWeight="600" variant="h5">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[400]}
                  fontWeight="600"
                  variant="h5"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[400]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {/* GRID CHART 3 */}
     <Box  
      display="grid"
      gridTemplateColumns="repeat(12,1fr)"
      gridAutoRows="140px"
      gap="20px"
      sx={{
        mt:"20px",
        mb:"20px"
      }}
        >
       {/* Progress */}
       <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
       
      >
        <Typography variant="h5" fontWeight="600">
          Campaign
        </Typography>
        <Box
        
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
        >
          <ProgressCircle size="125"  />
          <Typography variant="h5" color={colors.greenAccent[400]} sx={{mt:"15px"}}>
            $48,352 revenue generated
          </Typography>
          <Typography variant="h5" fontWeight="600">
            Includes extra misc expendeturesand costs
          </Typography>
        </Box>
      </Box>

      {/* BarChart */}
      <Box
    
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        position="relative"
       
      >
        <Typography variant="h5" fontWeight="600" sx={{p:"30px 30px -10px 30px"}} position="absolute" top="10%" left="10%" >
          Sales Quantity
        </Typography>
        <Box
         height="250px"
          
          mt="25px"
        >
          <BarChart isDashboard={true}/>
        </Box>
      </Box>
      {/* Geography */}

      <Box
        gridColumn="span 4"
        gridRow="span 2"
  
        backgroundColor={colors.primary[400]}
       p="30px"
      >
        <Typography variant="h5" fontWeight="600" sx={{mb:"15px"}}>
         Geography Based Trafic
        </Typography>
        <Box
         height="200px"
          mt="25px"
        >
          <GeoChart isDashboard={true}/>
        </Box>
      </Box>
     </Box>
    </Box>
  );
};
