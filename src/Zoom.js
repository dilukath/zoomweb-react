import "./Zoom.css";
import { ZoomMtg } from "@zoomus/websdk";
import { useEffect } from "react";

const Zoom = (props) => {
  // loading zoom libraries before joining on component did mount
  useEffect(() => {
    showZoomDIv();
    ZoomMtg.setZoomJSLib("https://jssdk.zoomus.cn/1.9.6/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    initiateMeeting();
  }, []);

  const showZoomDIv = () => {
    document.getElementById("zmmtg-root").style.display = "block";
  };
  
  const initiateMeeting = () => {
    debugger
    ZoomMtg.init({
      leaveUrl:process.env.REACT_APP_LEAVE_URL,
      isSupportAV: true,
      meetingInfo: ['topic','participant'],
      disableInvite: true,
      success: (success) => {
        ZoomMtg.join({
          signature: props.data.signature,
          meetingNumber: props.data.meetingNUmber,
          userName: props.data.userName,
          apiKey: process.env.REACT_APP_API_KEY,
          userEmail: props.data.userEmail,
          passWord: props.data.password,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  return (<></>);
};

export default Zoom;
