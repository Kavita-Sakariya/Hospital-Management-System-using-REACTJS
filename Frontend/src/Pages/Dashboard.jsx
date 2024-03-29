import React from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';



const Dashboard = () => {
  return (
    <>
    <Navbar></Navbar>
    <Box
        sx={{
          ml: "20rem",
          mt: "8rem",
          "& p":{
            alignContent: "center",
          }
        }}
      >
        <div>
          <Grid container spacing={10}>
            <Grid item xs={4}>
              <Link to='/'>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  alignContent: "center",
                  borderRadius: "15%",
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingInline:"85px",
                  width: 110,
                  height: 150,
                  backgroundColor: "pink",
                }}
              >
                <CardContent>
                  <p>Patients</p>
                  <p>6</p>
                </CardContent>
              </Card>
              </Link>
              <Link to='/'>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  borderRadius: "15%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: 3000,
                  paddingLeft: "60px",
                  width: 215,
                  height: 150,
                  backgroundColor: "pink",
                }}
              >
                <CardContent>
                  <p>Receptionists</p>
                  <p>1</p>
                </CardContent>
              </Card>
              </Link>
            </Grid>
            <Grid item xs={4}>
            <Link to ='/'>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  borderRadius: "15%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: 3000,
                  paddingInline:"85px",
                  width: 110,
                  height: 150,
                  backgroundColor: "pink",
                }}
              >
                <CardContent>
                  <p>Doctors</p>
                  <p>3</p>
                </CardContent>
              </Card>
              </Link>

              <Link to='/'>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  borderRadius: "15%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: 3000,
                  paddingLeft: "60px",
                  width: 215,
                  height: 150,
                  backgroundColor: "pink",
                }}
              >
                <CardContent>
                  <p>Pharmasists</p>
                  <p>2</p>
                </CardContent>
              </Card>
              </Link>


            </Grid>
            <Grid item xs={4}>
             <Link to='/'>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  borderRadius: "15%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: 3000,
                  paddingInline:"85px",
                  width: 110,
                  height: 150,
                  backgroundColor: "pink",
                }}
              >
                <CardContent>
                  <p>Nurses</p>
                  <p>3</p>
                </CardContent>
              </Card>
              </Link>
              
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  )
}

export default Dashboard