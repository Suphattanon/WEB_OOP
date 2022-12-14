import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const data = [
  {
    name: 'Page A',
    NewConfirmed: 4000,
    NewDeaths: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    NewConfirmed: 3000,
    NewDeaths: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    NewConfirmed: 2000,
    NewDeaths: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    NewConfirmed: 2780,
    NewDeaths: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const{ classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
         <Toolbar>
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
           </IconButton>
           <Typography variant="h6" className={classes.title}>
            Simple Thaniland COVID-19 dashboard
           </Typography>
         </Toolbar>
      </AppBar>
        <Container>
         <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
           <Paper className={classes.paper}>
            <Typography>Confirmed</Typography>
            <Typography variant="h3">1000</Typography>
            <Typography variant="h3">100</Typography>
           </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
           <Paper className={classes.paper}>
              <Typography>Hospitalized</Typography>
              <Typography variant="h3">1000</Typography>
              <Typography variant="h3">100</Typography>
            </Paper> 
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Typography>Recovered</Typography>
              <Typography variant="h3">1000</Typography>
              <Typography variant="h3">100</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Typography>Death</Typography>
              <Typography variant="h3">1000</Typography>
              <Typography variant="h3">100</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="NewConfirmed" fill="#8884d8" />
          <Bar dataKey="NewDeaths" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            </Paper>
          </Grid>

        </Grid>
       </Container>
      </div>
    )
  }
}

export default withStyles(styles)(App);