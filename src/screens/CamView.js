import { View, Text } from 'react-native'
import React from 'react'
import CameraPermissionCheckWrapper from '../components/CameraPermissionCheckWrapper'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

export default function CamView() {
  const devices = useCameraDevices()
  const device = devices?.back
  return (
    <CameraPermissionCheckWrapper>
      <View style={{ flex: 1 }}>
        <View style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}>
          {device == null ? null :
            <Camera
              style={{ flex: 1 }}
              device={device}
              isActive={true}
              // frameProcessor={frameProcessor}
              // frameProcessorFps={5}
            />}
        </View>
      </View>
    </CameraPermissionCheckWrapper>
  )
}