import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'

export const Videocall = () => {

  const {roomID} = useParams();
  const Mymeetingconference = async (element)=>{
    const appID = 1303224606;
    const serversecret = '18d0a91fba0083264b0d85a080198fd6';

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serversecret, roomID,Date.now().toString(), 'Vikram');
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    zp.joinRoom({
      container : element,
      scenario : {
        mode : ZegoUIKitPrebuilt.VideoConference
      }
    })

  } 

  return (
    <div>
      <div ref={Mymeetingconference}></div>
    </div>
  )
}
