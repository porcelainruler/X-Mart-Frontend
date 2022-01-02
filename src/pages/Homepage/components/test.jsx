import { Button } from "@mui/material";
import * as React from "react";
import { connect, useDispatch } from "react-redux";
// import { userActionCreators, userActions } from "../../../state/user/userAction";
import { userActionCreators } from "../../../state/user/userAction";

const Tester = ({ profileGlobal }) => {
  const dispatch = useDispatch();
  const [profile, setProfile] = React.useState({
    ...profileGlobal.profile,
  });

  React.useEffect(() => {
    setProfile({
      ...profileGlobal.profile,
    });
  }, [profileGlobal]);

  const clickOrderHandler = () => {
    if (profile && profile.orderCount === 1) dispatch(userActionCreators.login({ profile: { ...profile, orderCount: 30 } }));
    else dispatch(userActionCreators.login({ profile: { ...profile, orderCount: 1 } }));
  };

  const clickMessageHandler = () => {
    if (profile && profile.messageCount === 1) dispatch(userActionCreators.login({ profile: { ...profile, messageCount: 99 } }));
    else dispatch(userActionCreators.login({ profile: { ...profile, messageCount: 1 } }));
  };

  const clickNotificationHandler = () => {
    if (profile && profile.notificationCount === 1) dispatch(userActionCreators.login({ profile: { ...profile, notificationCount: 10 } }));
    else dispatch(userActionCreators.login({ profile: { ...profile, notificationCount: 1 } }));
  };

  return (
    <div>
      <Button onClick={clickOrderHandler}> Order Update </Button>
      <Button onClick={clickMessageHandler}> Message Update </Button>
      <Button onClick={clickNotificationHandler}> Notification Update </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profileGlobal: state.user,
  };
};

export default connect(mapStateToProps)(Tester);
