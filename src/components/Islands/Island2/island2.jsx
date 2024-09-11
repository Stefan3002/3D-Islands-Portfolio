/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: konstaintin (https://sketchfab.com/konstaintin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-forest-1d0772bc627940f6873f96b55e0e8980
Title: Low poly forest
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF } from '@react-three/drei'

import meshGltf from '../../../assets/models/islands/low_poly_forest.glb'
import {useFrame} from "@react-three/fiber";
import {bkPoint} from "../../../../utils/responsiveness.js";

const Island2 = ({scrollHandler, mesh, ...props}) => {
    const { nodes, materials } = useGLTF(meshGltf)

    const enlargementFactor = .5
    const rotationFactor = 1.80
    const idleRotationFactor = .2
    let targetScale = .5

    useEffect(() => {
        if(window.innerWidth < bkPoint)
            targetScale = .3
    }, []);


    useFrame((state, delta) => {
        if(mesh.current.scale.x > targetScale)
            mesh.current.scale.x = targetScale
        if(mesh.current.scale.y > targetScale)
            mesh.current.scale.y = targetScale
        if(mesh.current.scale.z > targetScale)
            mesh.current.scale.z = targetScale

        if(mesh.current.scale.x < targetScale)
            mesh.current.scale.x += (enlargementFactor * delta)
        if(mesh.current.scale.y < targetScale)
            mesh.current.scale.y += (enlargementFactor * delta)
        if(mesh.current.scale.z < targetScale)
            mesh.current.scale.z += (enlargementFactor * delta)

        if(mesh.current.rotation.y < 0)
            mesh.current.rotation.y += (rotationFactor * delta)

        mesh.current.rotation.y += (idleRotationFactor * delta)
    })

    useEffect(() => {
        if(!scrollHandler)
            return

        scrollHandler()
    }, [scrollHandler])

    return (
        <group ref={mesh} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group
                    position={[-0.149, -3.791, 3.613]}
                    rotation={[-0.077, 0.024, 1.788]}
                    scale={[0.288, 0.251, 0.286]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree017_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree017_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[-1.33, -1.422, 3.613]}
                    rotation={[0.021, 0.016, 1.51]}
                    scale={[0.256, 0.26, 0.26]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree016_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree016_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[0.144, -1.582, 3.613]}
                    rotation={[-0.035, 0.014, 1.437]}
                    scale={[0.348, 0.297, 0.342]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree015_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree015_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[-0.663, -1.063, 3.613]}
                    rotation={[-0.048, -0.08, 2.096]}
                    scale={[0.284, 0.249, 0.274]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree014_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree014_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[-1.094, -1.852, 3.613]}
                    rotation={[0.092, 0.005, 1.3]}
                    scale={[0.358, 0.266, 0.275]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree013_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree013_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[-1.45, -2.742, 3.613]}
                    rotation={[-0.044, 0.046, 0.699]}
                    scale={[0.347, 0.298, 0.242]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree012_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree012_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[-2.752, -0.906, 3.613]}
                    rotation={[-0.077, 0.024, 1.788]}
                    scale={[0.288, 0.251, 0.286]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree011_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree011_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[-1.728, -0.908, 3.613]}
                    rotation={[-0.043, -0.04, 1.62]}
                    scale={[0.249, 0.336, 0.344]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree010_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree010_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[3.573, -3.756, 3.613]}
                    rotation={[-0.022, -0.036, 1.07]}
                    scale={[0.343, 0.272, 0.291]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree009_0'].geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree009_1'].geometry}
                        material={materials.material_8}
                    />
                </group>
                <group
                    position={[4.823, -0.157, 3.772]}
                    rotation={[0.02, -0.016, 0.195]}
                    scale={[0.256, 0.26, 0.26]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree007_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree007_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[5.339, -0.492, 3.772]}
                    rotation={[-0.09, 0.026, 0.784]}
                    scale={[0.284, 0.249, 0.274]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree005_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree005_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[-1.134, -3.782, 3.761]}
                    rotation={[0.028, -0.088, -0.014]}
                    scale={[0.358, 0.266, 0.275]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree004_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree004_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[4.962, 1.349, 3.821]}
                    rotation={[0.004, 0.08, 0.472]}
                    scale={[0.288, 0.251, 0.286]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree002_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree002_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[5.22, 0.358, 3.859]}
                    rotation={[-0.05, 0.031, 0.306]}
                    scale={[0.249, 0.336, 0.344]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree001_0'].geometry}
                        material={materials.material_8}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree001_1'].geometry}
                        material={materials.material_3}
                    />
                </group>
                <group
                    position={[4.328, 0.437, 3.772]}
                    rotation={[-0.04, 0.012, -0.245]}
                    scale={[0.343, 0.272, 0.291]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree_0'].geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['pine-tree_1'].geometry}
                        material={materials.material_8}
                    />
                </group>
                <group
                    position={[-2.051, -2.179, 5.088]}
                    rotation={[0.159, -0.029, -2.65]}
                    scale={[0.579, 0.435, 0.49]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube023_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube023_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[2.826, -4.012, 5.088]}
                    rotation={[-0.162, 0.084, -0.94]}
                    scale={[0.635, 0.795, 0.43]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube021_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube021_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[1.927, -4.375, 5.088]}
                    rotation={[-0.099, -0.042, 2.126]}
                    scale={[0.522, 0.942, 0.42]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube020_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube020_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[2.895, -3.182, 4.837]}
                    rotation={[-0.049, -0.031, 2.839]}
                    scale={[0.621, 1.115, 0.364]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[2.048, -3.424, 5.011]}
                    rotation={[-0.083, -0.019, -1.579]}
                    scale={[0.42, 0.469, 0.391]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube018_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube018_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[1.201, -4.064, 5.032]}
                    rotation={[0.078, -0.135, -0.358]}
                    scale={[0.751, 0.726, 0.404]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube017_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube017_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[2.307, -2.404, 5.088]}
                    rotation={[-0.053, 0.164, -1.603]}
                    scale={[0.575, 0.665, 0.458]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube016_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube016_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[1.65, -2.265, 4.95]}
                    rotation={[-0.147, -0.083, 0.246]}
                    scale={[0.673, 0.681, 0.393]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube015_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube015_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[1.616, -2.055, 5.088]}
                    rotation={[-0.016, -0.006, 1.571]}
                    scale={[0.808, 0.69, 0.461]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[0.958, -1.452, 5.088]}
                    rotation={[-0.042, 0.035, -0.615]}
                    scale={[0.42, 0.556, 0.487]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube013_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube013_1.geometry}
                        material={materials.material_5}
                    />
                </group>
                <group
                    position={[5.81, 1.564, 3.649]}
                    rotation={[0.008, -0.042, -0.032]}
                    scale={[0.139, 0.177, 0.19]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube012_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube012_1.geometry}
                        material={materials.material_4}
                    />
                </group>
                <group
                    position={[0.563, -3.493, 3.355]}
                    rotation={[0.077, -0.013, 0.514]}
                    scale={[0.248, 0.224, 0.196]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube011_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube011_1.geometry}
                        material={materials.material_4}
                    />
                </group>
                <group
                    position={[1.41, -3.245, 3.355]}
                    rotation={[-0.085, 0.011, -0.471]}
                    scale={[0.19, 0.214, 0.223]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube010_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube010_1.geometry}
                        material={materials.material_4}
                    />
                </group>
                <group
                    position={[-0.069, -2.972, 3.355]}
                    rotation={[-0.068, -0.05, 0.364]}
                    scale={[0.222, 0.217, 0.191]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube009_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube009_1.geometry}
                        material={materials.material_4}
                    />
                </group>
                <group
                    position={[0.809, -2.391, 3.355]}
                    rotation={[-0.009, 0.002, 0.958]}
                    scale={[0.267, 0.218, 0.224]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008_1.geometry}
                        material={materials.material_4}
                    />
                </group>
                <group
                    position={[-0.506, -2.304, 3.355]}
                    rotation={[-0.024, 0.012, -0.394]}
                    scale={[0.139, 0.194, 0.237]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube007_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube007_1.geometry}
                        material={materials.material_4}
                    />
                </group>
                <group
                    position={[2.595, -2.91, 3.355]}
                    rotation={[0.007, -0.077, -0.801]}
                    scale={[0.248, 0.224, 0.196]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube005_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube005_1.geometry}
                        material={materials.material_4}
                    />
                </group>
                <group
                    position={[3.752, -3.269, 3.355]}
                    rotation={[-0.011, 0.085, -1.786]}
                    scale={[0.19, 0.214, 0.223]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube004_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube004_1.geometry}
                        material={materials.material_4}
                    />
                </group>
                <group
                    position={[-2.284, -1.572, 3.355]}
                    rotation={[0, 0.009, -0.357]}
                    scale={[0.267, 0.218, 0.224]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_0.geometry}
                        material={materials.material_3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_1.geometry}
                        material={materials.material_4}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mball039_0.geometry}
                    material={materials.material_7}
                    position={[5.334, -1.561, 3.574]}
                    rotation={[0.102, 0, 0]}
                    scale={[0.394, 0.393, 0.128]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mball006_0.geometry}
                    material={materials.material_4}
                    position={[-0.942, 0.562, 5.045]}
                    rotation={[-0.216, 0.103, 2.017]}
                    scale={0.302}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landscape_0.geometry}
                    material={materials.material_6}
                    position={[0.958, -0.256, 4.474]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={[7.633, 7.633, 6.934]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_0.geometry}
                    material={materials.material_1}
                    position={[-0.579, 2.69, 3.892]}
                    rotation={[1.739, 0.337, -2.711]}
                    scale={[0.698, 0.445, 0.619]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_0.geometry}
                    material={materials.material_3}
                    position={[-1.38, 2.623, 3.418]}
                    rotation={[0, 0, 2.693]}
                    scale={0.302}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_0.geometry}
                    material={materials.material_2}
                    position={[3.06, 2.367, 4.382]}
                    rotation={[0, 0, -0.482]}
                    scale={[0.11, 0.139, 0.139]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_0.geometry}
                    material={materials.material_1}
                    position={[0.225, 2.941, 3.495]}
                    scale={0.36}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_0.geometry}
                    material={materials.material}
                    position={[0, 3.659, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.03, 0.049, 0.049]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane000_0.geometry}
                    material={materials.material}
                    position={[0.095, 3.529, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.03, 0.049, 0.049]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_0.geometry}
                    material={materials.material}
                    position={[0.118, 3.659, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.03, 0.049, 0.049]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003_0.geometry}
                    material={materials.material}
                    position={[0.248, 2.5, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.03, 0.049, 0.049]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_0.geometry}
                    material={materials.material}
                    position={[0.225, 2.37, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.03, 0.049, 0.049]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane005_0.geometry}
                    material={materials.material}
                    position={[0.13, 2.5, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.03, 0.049, 0.049]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane006_0.geometry}
                    material={materials.material}
                    position={[0.125, 2.503, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.033, 0.053, 0.053]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane007_0.geometry}
                    material={materials.material}
                    position={[0.227, 2.363, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.033, 0.053, 0.053]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane008_0.geometry}
                    material={materials.material}
                    position={[0.252, 2.503, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.033, 0.053, 0.053]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane009_0.geometry}
                    material={materials.material}
                    position={[1.541, 1.427, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.033, 0.053, 0.053]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane010_0.geometry}
                    material={materials.material}
                    position={[1.516, 1.287, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.033, 0.053, 0.053]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane011_0.geometry}
                    material={materials.material}
                    position={[1.414, 1.427, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.033, 0.053, 0.053]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane012_0.geometry}
                    material={materials.material}
                    position={[-1.92, 2.595, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.033, 0.053, 0.053]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane013_0.geometry}
                    material={materials.material}
                    position={[-1.819, 2.455, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.033, 0.053, 0.053]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane014_0.geometry}
                    material={materials.material}
                    position={[-1.793, 2.595, 3.494]}
                    rotation={[0, 0, 1.072]}
                    scale={[0.033, 0.053, 0.053]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane015_0.geometry}
                    material={materials.material}
                    position={[5.194, 1.67, 3.677]}
                    rotation={[0, 0, 1.071]}
                    scale={[0.02, 0.032, 0.032]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane016_0.geometry}
                    material={materials.material}
                    position={[5.179, 1.586, 3.677]}
                    rotation={[0, 0, 1.071]}
                    scale={[0.02, 0.032, 0.032]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_0.geometry}
                    material={materials.material}
                    position={[5.118, 1.67, 3.677]}
                    rotation={[0, 0, 1.071]}
                    scale={[0.02, 0.032, 0.032]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018_0.geometry}
                    material={materials.material}
                    position={[3.711, 0.262, 3.539]}
                    rotation={[0, 0, 1.071]}
                    scale={[0.02, 0.032, 0.032]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane019_0.geometry}
                    material={materials.material}
                    position={[3.772, 0.178, 3.539]}
                    rotation={[0, 0, 1.071]}
                    scale={[0.02, 0.032, 0.032]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane020_0.geometry}
                    material={materials.material}
                    position={[3.787, 0.262, 3.539]}
                    rotation={[0, 0, 1.071]}
                    scale={[0.02, 0.032, 0.032]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('../../../assets/models/islands/low_poly_forest.glb')

export default Island2