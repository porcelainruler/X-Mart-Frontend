import React, { Component, Fragment } from "react";
import segmentData from "../../../constants/segments";
import { Box, Grid, Paper, Skeleton, Stack } from "@mui/material";
import { ListItem, ListItemIcon, ListItemText, List, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { compIdentifier } from "../../../constants/componentIdentifiersList";
import "../../../public/css/segmentNavbar.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

class Segments extends Component {
  constructor(props) {
    super(props);

    console.log(segmentData);
    this.state = {
      segments: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    console.log("Segments1", this.state.segments);
    setTimeout(() => {
      this.setState({
        isLoading: false,
        segments: segmentData,
      });
      console.log("Segments2", this.state.segments);
    }, 2000);
  }

  render() {
    const { isLoading, segments } = this.state;

    return (
      <Fragment>
        {!isLoading ? (
          <List className="segmentMainContainer">
            <ListItem>
              <Stack
                container
                direction="row"
                alignItems="center"
                spacing={{ xs: 1, sm: 2, md: 3 }}
                style={{ overflow: "scroll", marginLeft: "auto", marginRight: "auto", padding: "5px" }}
                className="segmentNavStack"
              >
                {segmentData.segments.map((segment, idx) => [
                  <Stack item key={compIdentifier.segGrid + "_" + idx}>
                    {/* <LinkIcon className={classes.linkIcon} /> */}
                    <Item style={{ minWidth: "80px" }}>
                      <img src={segment.imagePath} style={{ width: "50px", height: "50px" }}></img>
                      <span style={{ whiteSpace: "nowrap" }}>{segment.displayName}</span>
                    </Item>
                  </Stack>,
                ])}
              </Stack>
            </ListItem>
            <Divider />
          </List>
        ) : (
          <Grid container wrap="nowrap" style={{display: "flex", flexDirection: "row", flexFlow: "row", justifyContent: "space-evenly"}}>
            <Box style={{ width: 86, padding: 16 }}>
              <Skeleton variant="rectangular" width={86} height={76} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>

            <Box style={{ width: 86, padding: 16 }}>
              <Skeleton variant="rectangular" width={86} height={76} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>

            <Box style={{ width: 86, padding: 16 }}>
              <Skeleton variant="rectangular" width={86} height={76} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>

            <Box style={{ width: 86, padding: 16 }}>
              <Skeleton variant="rectangular" width={86} height={76} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>

            <Box style={{ width: 86, padding: 16 }}>
              <Skeleton variant="rectangular" width={86} height={76} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>

            <Box style={{ width: 86, padding: 16 }}>
              <Skeleton variant="rectangular" width={86} height={76} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>

            <Box style={{ width: 86, padding: 16 }}>
              <Skeleton variant="rectangular" width={86} height={76} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>

            <Box style={{ width: 86, padding: 16 }}>
              <Skeleton variant="rectangular" width={86} height={76} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>

            <Box style={{ width: 86, padding: 16 }}>
              <Skeleton variant="rectangular" width={86} height={76} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          </Grid>
        )}
      </Fragment>
    );
  }
}

export default Segments;
