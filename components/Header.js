import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [value, setValue] = useState();
  const handleChange = (e, val) => {
    setValue(val);
    if (val == 0) {
      router.push("/");
    } else {
      router.push("/books");
    }
  };

  return (
    <AppBar sx={{ bgcolor: "#c83576" }} position="sticky">
      <Toolbar>
        <Box display="flex" marginRight={"auto"}>
          IMAGE LOGO
        </Box>
        <Box display="flex" marginRight={"auto"}>
          <Tabs value={value} textColor="inherit" onChange={handleChange}>
            <Tab label="Home" />
            <Tab label="All Books" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
