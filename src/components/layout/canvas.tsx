import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei/web'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control) {
      dom.current.style['touch-action'] = 'none'
    }
  }, [dom, control])
  // @ts-ignore
  return (
    <OrbitControls
      ref={control}
      domElement={dom.current}
      minPolarAngle={-Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 8}
      maxAzimuthAngle={Math.PI / 8}
      enableZoom={false}
    />
  )
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <LControl />
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas
