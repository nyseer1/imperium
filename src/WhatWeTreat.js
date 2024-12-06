import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import { Masonry } from "@mui/lab";
//various components
import { Box, Divider, ListItemIcon, ListItemButton, Paper, styled, Typography } from "@mui/material";

//for menu button
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu"; //for menu icon

// to use themes
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";
import { Container } from "@mui/material";
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import { Css, Html, Javascript, Php , RadioOutlined,CircleTwoToneIcon, Radio , RadioButtonUncheckedTwoTone , ChevronRight} from "@mui/icons-material";

function WhatWeTreat() {
    return (
        <Box

        sx={{

            display: "grid", //creates flexbox to arrange content


            alignItems: "flex-start", //centers items inside box horizontally (for when column)
          }}


        >
            <Typography
                sx={{ textAlign: "center", p: 1, fontSize: [30, 50, 80] }}
                variant="h1"
            >
                What We Treat
            </Typography>

            <Paper sx={{ background: "aqua" }}>
                <Container>
                    <Divider  variant="h3" sx={{ background: '#3FAE46', borderRadius: 10 }}>
                    <Typography variant="h3" gutterBottom sx={{
                        color:"white",
                         fontSize:28 ,
                         paddingTop:2}}>Neck</Typography>
                            <List    sx={{
                            listStyleType: "disc",
                            listStylePosition: "inside",
                        }}>
                                <ListItem  divider>

                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"white", fontSize:15}}
                                        primary="Cervical radiculopathy" />

                                </ListItem>
                                <ListItem divider>

                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"white", fontSize:15}}
                                        primary="ACDF" />

                                </ListItem>

                                <ListItem divider>

                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"white", fontSize:15}}
                                        primary="Herniated Discs" />

                                </ListItem>
                                <ListItem divider>

                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"white", fontSize:15}}
                                        primary="Stenosis" />

                                </ListItem>
                            </List>
                    </Divider>
                    <Divider  variant="h3" sx={{ background: 'white', borderRadius: 10 }}>
                    <Typography variant="h3" gutterBottom sx={{
                        color:"black",
                         fontSize:28 ,
                         paddingTop:2}}>Shoulder</Typography>
                            <List    sx={{
                            listStyleType: "disc",
                            listStylePosition: "inside",
                        }}>
                                <ListItem  divider>

                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"black", fontSize:15}}
                                        primary="Shoulder replacement" />

                                </ListItem>
                                <ListItem divider>

                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"black", fontSize:15}}
                                        primary="Shoulder pain" />

                                </ListItem>

                                <ListItem divider>

                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"black", fontSize:15}}
                                        primary="Rotator Cuff repair" />

                                </ListItem>
                                <ListItem divider> <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"black", fontSize:15}}
                                        primary="Frozen shoulder" /></ListItem>

                                        <ListItem divider> <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"black", fontSize:15}}
                                        primary="Instability" /></ListItem>

                                        <ListItem divider> <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"black", fontSize:15}}
                                        primary="Labral tear" /></ListItem>

<ListItem divider> <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color:"black", fontSize:15}}
                                        primary="Dislocation" /></ListItem>
                            </List>
                    </Divider>

                </Container>
            </Paper>
        </Box>
    );
}

export default WhatWeTreat;
