
import React, { useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/desertRens.glb')
  const { actions } = useAnimations(animations, group)
  console.log(nodes, materials, animations)
  useEffect(()=> {
    actions.working.play()})
  




  return (
    <group ref={group} {...props} dispose={null}>
      <group name="metarig" position={[-0.48, -0.47, 3.06]} rotation={[-3.14, 0.33, -3.06]}>
        <primitive object={nodes.spine} />
        <skinnedMesh geometry={nodes.Cube003.geometry} material={materials.body} skeleton={nodes.Cube003.skeleton} />
        <skinnedMesh
          geometry={nodes.Cube003_1.geometry}
          material={materials.pants}
          skeleton={nodes.Cube003_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube003_2.geometry}
          material={nodes.Cube003_2.material}
          skeleton={nodes.Cube003_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube003_3.geometry}
          material={nodes.Cube003_3.material}
          skeleton={nodes.Cube003_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube003_4.geometry}
          material={nodes.Cube003_4.material}
          skeleton={nodes.Cube003_4.skeleton}
        />
      </group>
      <group position={[2.6, 5.72, 1.81]} rotation={[1.89, 0.88, -2.05]}>
        <pointLight intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <mesh
        geometry={nodes.ScreenFrame.geometry}
        material={nodes.ScreenFrame.material}
        position={[-0.41, 0.595, 2.73]}
        scale={[1.57, 0.03, 0.92]}
      />
      <mesh
        geometry={nodes.KeyBoard.geometry}
        material={nodes.KeyBoard.material}
        position={[7.59, 0, -0.29]}
        scale={[1, 1, 0.35]}
      />
      <mesh geometry={nodes.Mouse.geometry} material={nodes.Mouse.material} position={[6.32, 0.25, 2.38]} />
      <mesh
        geometry={nodes.ScreenPanel.geometry}
        material={nodes.ScreenPanel.material}
        position={[0.18, 1.31, 1.77]}
        scale={[1.58, 0.03, 0.93]}
      />
      {/* <mesh
        geometry={nodes.Screen.geometry}
        material={nodes.Screen.material}
        position={[0.18, 1.31, 1.78]}
        rotation={[0, -0.58, -0.03]}
        scale={[0.54, 0.27, 0]}
        
      /> */}
      <mesh
        geometry={nodes.Chair.geometry}
        material={nodes.Chair.material}
        position={[-0.41, 0.62, 2.73]}
        scale={[1.57, 0.03, 0.92]}
      />
      <group position={[-0.69, 1.27, -0.13]} scale={[0.47, 0.69, 0.69]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={nodes.Cube001_1.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/desertRens.glb')
