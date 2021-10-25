import { useLoader } from '@react-three/fiber'
import React, { ReactElement, useMemo } from 'react'
import { MTLLoader, OBJLoader } from 'three-stdlib'
import { Mesh } from 'three'
export interface Bitcoin3DBitcoin3DProps {}

export default function Bitcoin3D(
  props: Bitcoin3DBitcoin3DProps
): ReactElement | null {
  const materials = useLoader(MTLLoader, 'Bitcoin3DModel/Bitcoin.mtl')
  const obj = useLoader(
    OBJLoader,
    'Bitcoin3DModel/Bitcoin.obj',
    (loader: any) => {
      materials.preload()
      loader.setMaterials(materials)
    }
  )
  const geometry = useMemo(() => {
    let g
    obj.traverse((c) => {
      if (c.type === 'Mesh') {
        const _c = c as Mesh
        g = _c.geometry
      }
    })
    return g
  }, [obj])
  return (
    <>
      <pointLight intensity={1} position={[5, 20, 0]} />
      <pointLight intensity={1} position={[25, 5, 5]} />
      <ambientLight intensity={0.4} />
      <mesh scale={[0.02, 0.02, 0.02]} geometry={geometry}>
        <primitive object={obj} />
      </mesh>
    </>
  )
}
