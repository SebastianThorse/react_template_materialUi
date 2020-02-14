import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import {AppBar, Drawer, Toolbar, CssBaseline, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import BarChartIcon from '@material-ui/icons/BarChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import CommentIcon from '@material-ui/icons/Comment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        },
        title: {
            flexGrow: 1,
            paddingTop: '14px',
            fontWeight: 600,
        },
        logo: {
            color: "#000",
            textDecoration: "none",
            '&:hover': {
                color: "#000",
                textDecoration: "none",
            }
        },
        hide: {
            display: 'none',
        },
        drawer: {
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    }),
);

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="relative" className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
                <Toolbar>
                    <Typography variant="h2" noWrap className={classes.title}>
                        <Link to="/" className={classes.logo}>Origo Group</Link>
                    </Typography>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerOpen} className={clsx(open && classes.hide)}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper,}}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <Link to="/">
                        <ListItem button>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary={'Hem'}/>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List>
                    <ListItem button>
                        <ListItemIcon><EmailIcon/></ListItemIcon>
                        <Link to="/samples">
                            <ListItemText primary={'Beställ'}/>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><ViewCompactIcon/></ListItemIcon>
                        <Link to="/act">
                            <ListItemText primary={'Agera'}/>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><DashboardIcon/></ListItemIcon>
                        <Link to="/dashboard">
                            <ListItemText primary={'Analysera'}/>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><BarChartIcon/></ListItemIcon>
                        <Link to="/barchart">
                            <ListItemText primary={'Resultat'}/>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><TimelineIcon/></ListItemIcon>
                        <Link to="/linechart">
                            <ListItemText primary={'Resultat - över tid'}/>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><CommentIcon/></ListItemIcon>
                        <Link to="/comments">
                            <ListItemText primary={'Kommentarer'}/>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}