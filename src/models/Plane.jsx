/* eslint-disable react/no-unknown-property */
import React from 'react'
import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from '@react-three/drei';

const Plane = () => {
    const { scene ,aniamtions } = useGLTF(planeScene);
  return (
    <mesh>
        <primitive object={scene} /> 
    </mesh>
  )
}

export default Plane