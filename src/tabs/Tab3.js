import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import LargeButton from '../components/Buttons/LargeButton'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import { useNavigation } from '@react-navigation/native'

export default function Screen1() {
  const [isCamPermitted, setIsCamPermitted] = useState(false)
  // useEffect(()=>{
  //   const cameraPermission = Camera.getCameraPermissionStatus().then(response => {
  //     console.log('Cam status', response)
  //   })
  // },[])
  const navigation = useNavigation()
  const clickHandler = () => {
    console.log('click handler pressed')
    navigation.navigate('CamView')
  }
  return (
<View style={{
      backgroundColor:'pink'
    }}>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <LargeButton label = "Camera" onPress = {clickHandler}/>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
    </View>
  )
}