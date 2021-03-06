/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/beetle.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 3.38, 0]}>
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/beetle.glb");
