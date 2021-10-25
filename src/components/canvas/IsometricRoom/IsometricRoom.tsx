import useStore from '@/helpers/store'
import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { PerspectiveCamera } from '@react-three/drei/web'
import * as THREE from 'three'
import { Vector3 } from 'three'
const RoomComponent = () => {
  const materials = useLoader(MTLLoader, '/3d/Room.mtl')
  const object = useLoader(OBJLoader, '/3d/Room.obj', (loader: any) => {
    materials.preload()
    loader.setMaterials(materials)
  })
  const myLight = useRef<THREE.SpotLight>()
  const myCamera = useRef<THREE.Camera>()
  const myPos = new THREE.Vector3(0, 10, 0)

  useEffect(() => {
    console.debug('render')
    myCamera.current.lookAt(myPos)
    object.rotateY((-2 * Math.PI) / 3)
    object.translateY(-3)
    myLight.current.lookAt(myPos)
  }, [])
  return (
    <>
      <PerspectiveCamera
        ref={myCamera}
        position={[10, 10, 30]}
        zoom={2.2}
        makeDefault
      />
      <primitive object={object} />
      <mesh rotation-x={-Math.PI / 2} scale={100} position={[0, -3, 0]}>
        <planeGeometry />
        <meshStandardMaterial color='#370617' />
      </mesh>
      <pointLight intensity={1} position={[0, 20, 0]} />
      <spotLight ref={myLight} position={[5, 5, 20]} intensity={0.6} />
      <color attach='background' args={['#101010']} />
    </>
  )
}
export default RoomComponent
