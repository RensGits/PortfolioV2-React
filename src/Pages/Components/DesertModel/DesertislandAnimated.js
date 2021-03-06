/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/desertislandAnimated.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => actions.float.play());

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[4.05, 6.31, -1.05]} rotation={[1.89, 0.88, -2.05]}>
        <spotLight
          intensity={1}
          angle={1}
          penumbra={1}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Camera"
        position={[10.2, 4.96, 14.93]}
        rotation={[3.41, 3.19, 2.84]}
      >
        <PerspectiveCamera
          makeDefault={false}
          far={100}
          near={0.1}
          fov={24.83}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="Cube">
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/desertislandAnimated.glb");
