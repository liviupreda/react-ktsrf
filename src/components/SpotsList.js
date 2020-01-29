import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const API_URL = "https://5e3064ed576f9d0014d63faf.mockapi.io";
const rows = [
  seedData("Test Spot", "Botswana", 25.25, 75.75, 50 + "%", "January")
];

function seedData(
  name,
  country,
  latitude,
  longitude,
  windProbability,
  whenToGo
) {
  axios.get(API_URL + "/spot").then(response => {
    response.data.map(spot => {
      let seeder = {
        name: spot.name,
        country: spot.country,
        lat: spot.lat,
        long: spot.long,
        probability: spot.probability,
        month: spot.month
      };
      rows.push(seeder);
    });
    console.log(rows);
  });
  return { name, country, latitude, longitude, windProbability, whenToGo };
}

export default function SpotsList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Spot Name</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
            <TableCell align="right">Wind Probability</TableCell>
            <TableCell align="right">When To Go</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
              <TableCell align="right">{row.windProbability}</TableCell>
              <TableCell align="right">{row.whenToGo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
