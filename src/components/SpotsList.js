import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/SpotsListStyles";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650
//   }
// });

function SpotsList(props) {
  // const classes = useStyles();
  const { classes, spots } = props;

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
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
            {spots.map(spot => (
              <TableRow key={spot.name}>
                <TableCell component="th" scope="row">
                  {spot.name}
                </TableCell>
                <TableCell align="right">{spot.country}</TableCell>
                <TableCell align="right">{spot.lat}</TableCell>
                <TableCell align="right">{spot.long}</TableCell>
                <TableCell align="right">{spot.probability}</TableCell>
                <TableCell align="right">{spot.month}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Button onClick={fetchData}>Get Data</Button> */}
    </div>
  );
}

export default withStyles(styles)(SpotsList);
