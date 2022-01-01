import React, { Component, Fragment } from "react";
import { Box, Grid, Paper, Skeleton, Stack, Typography } from "@mui/material";
import { ListItem, ListItemIcon, ListItemText, List, Divider } from "@mui/material";
import { footerData } from "../../../constants/footer";
import * as Colors from "@mui/material/colors";
import { colorConfig } from "../../../constants/colorConfig";

class Footer extends Component {
  constructor(props) {
    super(props);
    // this.incrementAge = this.incrementAge.bind(this);
  }

  render() {
    return (
      <div className="footerMain" style={{ backgroundColor: colorConfig.mainColor }}>
        <Grid container spacing={2} style={{ paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>
          {footerData.map((footer) => (
            <Grid item xs={footer.rowSizeCSS} md={footer.rowSizeCSS}>
              <Typography
                sx={{ mt: 4, mb: 2 }}
                variant="h6"
                component="div"
                style={{ fontSize: 16, textAlign: footer.horizontalAlignment, minWidth: 220, color: footer.fontColor, overflow: "hidden" }}
              >
                {footer.categoryName}
              </Typography>
              {footer.content.map((categorySubContent) => (
                <List dense>
                  <ListItem>
                    <ListItemText primary={categorySubContent.name} />
                  </ListItem>
                </List>
              ))}
            </Grid>
          ))}
        </Grid>
        <Divider />
        <Grid container spacing={2} style={{ paddingLeft: 10, paddingRight: 10, marginTop: 10, marginBottom: 10 }}>
          <Grid item xs={2} md={2}>
              <Typography
                variant="h6"
                component="div"
                style={{ fontSize: 16, minWidth: 220, color: "white", overflow: "hidden" }}
              >
                Something
              </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;
