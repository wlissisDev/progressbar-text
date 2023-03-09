import { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Feather} from '@expo/vector-icons'
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { styles } from './style'

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

type Props={
    value:number;
    onMoveTop: () => void;
}

export function Progressbar({value,onMoveTop}:Props) {
  const withContainer = useSharedValue(200);

  //saber se chegou ao fim do texto
  const endReached = value >= 95;


  const animatedStyle = useAnimatedStyle(()=>{
    return {
      width:withContainer.value
    }
  });

  useEffect(()=>{
    withContainer.value = withSpring(endReached ? 56 : 200, {mass:0.4});
  },[value])

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {
        endReached ?
        <TouchableOpacityAnimated
          entering={FadeIn}
          exiting={FadeOut}
          onPress={onMoveTop}
        >
          <Feather name="arrow-up" size={24} color="#c4c4cc"/>
        </TouchableOpacityAnimated>
         :
      <Animated.View 
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.progressContent}
      >
        <Text style={styles.value}>
          {value.toFixed(0)}%
        </Text>

        <View style={styles.tracker}>
            <View style={[styles.progress,{width:`${value}%`}]}/>
        </View>
      </Animated.View>
      }
    </Animated.View>
  )
}