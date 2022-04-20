import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

const App = () => {
    return (
        <Container maxwidth="lg ">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Opportunities
                </Typography>
                <img src={opportunities} alt="opportunities" height="60" />
            </AppBar>
        </Container>
    );
}

export default App;