import React, { Component, Fragment } from "react";
import { Link, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { footerData } from "../../../constants/footer";
import { colorConfig } from "../../../constants/colorConfig";
import Copyright from "@mui/icons-material/CopyrightRounded";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

import { mapAPIPublicKey } from "../../../config/backendConfig";
import ReactMapGL, { Marker } from "react-map-gl"; 
import { routesData } from "../../../constants/routesData";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: "300px",
        height: "200px",
        latitude: footerData[footerData.length - 1].mapData?.latitude,
        longitude: footerData[footerData.length - 1].mapData?.longitude,
        zoom: footerData[footerData.length - 1].mapData?.zoom,
      },
      officeLocation: {
        latitude: footerData[footerData.length - 1].mapData?.latitude,
        longitude: footerData[footerData.length - 1].mapData?.longitude,
      },
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { viewport, officeLocation } = this.state;
  }

  render() {
    const { viewport, officeLocation } = this.state;
    console.log(viewport, officeLocation);

    return (
      <div className="footerMain" style={{ backgroundColor: colorConfig.mainColor, display: "flex", flexDirection: "column", flexFlow: "column" }}>
        <div
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 10,
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            flexFlow: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "top",
          }}
        >
          {footerData.map((footer) => (
            <div>
              <Typography sx={{ mt: 2 }} variant="h6" component="div" style={{ fontSize: 16, textAlign: footer.horizontalAlignment, color: footer.fontColor }}>
                {footer.categoryName}
              </Typography>
              {footer.content.map((categorySubContent) => (
                <div style={{ fontSize: 14, color: "aliceblue", textAlign: "left", padding: 2 }}>{categorySubContent.name}</div>
              ))}
              {footer.location ? (
                <div style={{ fontSize: 14, color: "aliceblue", textAlign: "left", padding: 2, marginBottom: "5px" }}>{footer.location}</div>
              ) : null}
              {footer.mapData ? (
                <ReactMapGL
                  mapboxApiAccessToken={mapAPIPublicKey}
                  {...viewport}
                  onViewportChange={(viewport) => this.setState({ viewport })}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                >
                  <Marker latitude={officeLocation.latitude} longitude={officeLocation.longitude}>
                    <RoomOutlinedIcon />
                  </Marker>
                </ReactMapGL>
              ) : null}
            </div>
          ))}
        </div>
        <Divider />
        <div
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 5,
            display: "flex",
            flexDirection: "row",
            flexFlow: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            minHeight: "30px",
            color: "white",
          }}
        >
          <div style={{ paddingRight: "5px", paddingRight: "5px", paddingLeft: "5px" }}>
            <Link href={routesData.returnPolicy} underline="none" color="inherit" style={{ color: "white", marginLeft: "4px" }}>
              Return Policy
            </Link>
          </div>
          <div style={{ paddingRight: "5px", paddingRight: "5px", paddingLeft: "5px" }}>
            <Link href={routesData.termOfUse} underline="none" color="inherit" style={{ color: "white", marginLeft: "4px" }}>
              Term of Use
            </Link>
          </div>
          <div style={{ paddingRight: "5px", paddingRight: "5px", paddingLeft: "5px" }}>
            <Link href={routesData.faqs} underline="none" color="inherit" style={{ color: "white", marginLeft: "4px" }}>
              FAQs
            </Link>
          </div>
          <div style={{ paddingRight: "5px", paddingRight: "5px", paddingLeft: "5px" }}>
            <Link href={routesData.raiseTicket} underline="none" color="inherit" style={{ color: "white", marginLeft: "4px" }}>
              Raise a Ticket
            </Link>
          </div>
          <div style={{ paddingRight: "5px", paddingRight: "5px", paddingLeft: "5px" }}>
            <Link href={routesData.security} underline="none" color="inherit" style={{ color: "white", marginLeft: "4px" }}>
              Security
            </Link>
          </div>
        </div>

        <div
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 5,
            display: "flex",
            flexDirection: "row",
            flexFlow: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            minHeight: "30px",
            color: "white",
          }}
        >
          <div>
            {" "}
            In case of query, contact us at support@xmart.com or raise a
            <Link href={routesData.raiseTicket} underline="always" color="inherit" style={{ color: "white", marginLeft: "4px" }}>
              ticket
            </Link>
          </div>
        </div>

        <div
          className="footerCopyright"
          style={{
            height: "30px",
            display: "flex",
            flexDirection: "row",
            flexFlow: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Copyright style={{ fontSize: "16px" }} />
          <span style={{ marginBottom: "3px", paddingLeft: "5px" }}>2021 XMart.com</span>
        </div>
      </div>
    );
  }
}

export default Footer;
