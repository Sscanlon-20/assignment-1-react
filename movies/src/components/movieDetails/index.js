import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 2,
    margin: 0,
    gap: 4,
    fontSize: "1em",

};

const chip = {margin: 1,
fontSize: "1.5em",
};

const MovieDetails = ({ movie, credits }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(10);

    const [pg2, setpg2] = React.useState(0);
    const [rpg2] = React.useState(10);
  
    function handleCastPage(event, newpage) {
        setpg(newpage);
    }
  
    function handleCastRowsPerPage(event) {
        setrpg(parseInt(credits.cast.length/10));
        setpg(0);
    }
  
    function handleCrewPage(event, newpage) {
        setpg2(newpage);
    }
  
    function handleCrewRowsPerPage(event) {
        setrpg(parseInt(credits.crew.length/10));
        setpg2(0);
    }
    
  return (
    <>
      <Typography variant="h3" component="h4">
        Overview
      </Typography>
      <Typography variant="h5" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip  label="Genres" sx={{...chip}} color="primary" size="large" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}}/>
          </li>
        ))}
      </Paper>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper> 

      <Paper component="ul" sx={{...root}}>
        <Chip  icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        
        <Chip size="large"
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      


      <Typography variant="h3" component="h4">
        Credits
      </Typography>
      <Typography align="center" variant="h3" component="h4">
        Cast
      </Typography>
      
      <Paper>
      <TableContainer component={Paper}>
      <Table sx={{minWidth: 350}} aria-label="Cast table">
        <TableHead>
          <TableRow color="primary">
            <TableCell  align="center" ><h1>NAME</h1></TableCell>
            <TableCell  align="center"><h1>CHARACTER</h1></TableCell>
            <TableCell  align="center"><h1>POPULARITY</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.cast.slice(pg * rpg, pg * rpg + rpg).map((c) => (
            <TableRow key={c.name}>
              <TableCell align="center" component="th" scope="row">
                <h2>{c.name}</h2>
              </TableCell>
              <TableCell align="center"><h2>{c.character}</h2></TableCell>
              <TableCell align="center"><h2>{c.popularity}</h2></TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
    <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={credits.cast.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleCastPage}
                onRowsPerPageChange={handleCastRowsPerPage}
            />
</Paper>

<Typography align="center" variant="h3" component="h4">
      Crew
      </Typography>
<Paper>
      <TableContainer component={Paper}>
      <Table sx={{minWidth: 350}} aria-label="Crew table">
        <TableHead>
          <TableRow>
            <TableCell  align="center" ><h1>NAME</h1></TableCell>
            <TableCell  align="center"><h1>DEPARTMENT</h1></TableCell>
            <TableCell  align="center"><h1>JOB</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.crew.slice(pg2 * rpg2, pg2 * rpg2 + rpg2).map((c) => (
            <TableRow key={c.name}>
              <TableCell align="center" component="th" scope="row"><h2>{c.name}</h2></TableCell>
              <TableCell align="center"><h2>{c.department}</h2></TableCell>
              <TableCell align="center"><h2>{c.job}</h2></TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
    <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={credits.crew.length}
                rowsPerPage={rpg2}
                page={pg2}
                onPageChange={handleCrewPage}
                onRowsPerPageChange={handleCrewRowsPerPage}
            />
</Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>

      <Link to={`/movies/recommended/${movie.id}`}>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '12em'
        }}
      >
        <MovieIcon/>
        Recommendations
      </Fab>
      </Link>    
      </>
  );
};
export default MovieDetails ;