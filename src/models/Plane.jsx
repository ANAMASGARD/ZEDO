/* eslint-disable react/no-unknown-property */
import React from 'react'
import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from '@react-three/drei';

const Plane = ({isRotating, ...props}) => {
    const { scene ,aniamtions } = useGLTF(planeScene);
  return (
    <mesh {...props}>
        <primitive object={scene} /> 
    </mesh>
  )
}

export default Plane