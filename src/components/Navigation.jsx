import Link from "next/link";
import React, { useState } from "react";
import { AppBar, Toolbar, Hidden, Box, IconButton, SwipeableDrawer, Divider, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "@/styles/Home.module.css";

/* alle skal indstallere følgende:
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react */

/* Desktop navigation */
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static" className={styles.navMenu}>
        <Toolbar className={styles.landingButtons}>
          {/*Box hider navmenuen i mobil xs er en mediaQuiery */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href="/program">
              <button>Program</button>
            </Link>
            <Link href="/map">
              <button>map</button>
            </Link>
            <Link href="/events">
              <button>events</button>
            </Link>
          </Box>
          
          {/* smUp betyder at den skal vise burgermenuen */}
          {/* Burger menu */}
          <Box display={{ xs: "block", sm: "none" }}>
            <IconButton >
              {/* Burger ikon */}
              <MenuIcon className={styles.burgerIcon} onClick={() => setOpen(true)} />
            </IconButton>
          </Box>
        </Toolbar>
        <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
          <IconButton className={styles.backIcon}>
            {/* Luk knap */}
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
          <Divider></Divider>
          <List>
            <ListItem>
            <Link href="/program">
              <button>Program</button>
            </Link>
            </ListItem>
            <ListItem>
            <Link href="/map">
              <button>map</button>
            </Link>
            </ListItem>
            <ListItem>
            <Link href="/events">
              <button>events</button>
            </Link>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </AppBar>
    </>
  );
}
