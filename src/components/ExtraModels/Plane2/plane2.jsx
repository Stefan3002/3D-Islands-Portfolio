/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Petru Grati (https://sketchfab.com/petru5)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dae-the-flying-circus-koi-fish-081c814886c94e8db742560ac3225e78
Title: DAE The Flying Circus Koi Fish
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import meshGltf from '../../../assets/models/extra/dae_the_flying_circus_koi_fish.glb'
import {useFrame} from "@react-three/fiber";
import {bkPoint} from "../../../../utils/responsiveness.js";


const Plane2 = (props) => {
    const meshRef = useRef()
    const group = useRef()
    const { nodes, materials, animations } = useGLTF(meshGltf)
    const { actions } = useAnimations(animations, meshRef)

    const enlargementFactor = .55
    let targetScale = .25



    useEffect(() => {
        actions['Scene'].play()
        if(window.innerWidth < bkPoint) {
            targetScale = .15
            meshRef.current.position.set(0, 2, 0)
        }
    }, []);

    useFrame((state, delta) => {
        meshRef.current.rotation.z = Math.cos(state.clock.getElapsedTime()) * .4

        if(meshRef.current.scale.x < targetScale)
            meshRef.current.scale.x += enlargementFactor * delta
        if(meshRef.current.scale.y < targetScale)
            meshRef.current.scale.y += enlargementFactor * delta
        if(meshRef.current.scale.z < targetScale)
            meshRef.current.scale.z += enlargementFactor * delta
    })

    return (
        <group ref={meshRef} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="6c90d7a520c643688ad6271f824cdcf8fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Main"
                                    position={[0, 5.239, -190.819]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}
                                />
                                <group
                                    name="Armature"
                                    position={[0, -7.793, 86.294]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}>
                                    <group name="Object_6">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_9"
                                            geometry={nodes.Object_9.geometry}
                                            material={materials.M_PlaneTex}
                                            skeleton={nodes.Object_9.skeleton}
                                        />
                                        <group
                                            name="Object_8"
                                            position={[0, 5.239, -190.819]}
                                            rotation={[-Math.PI / 2, 0, 0]}
                                            scale={100}
                                        />
                                    </group>
                                </group>
                                {/*<group name="Sphere" rotation={[-Math.PI / 2, 0, -Math.PI]} scale={3234.942}>*/}
                                {/*    <mesh*/}
                                {/*        name="Sphere_M_SkyTex_0"*/}
                                {/*        castShadow*/}
                                {/*        receiveShadow*/}
                                {/*        geometry={nodes.Sphere_M_SkyTex_0.geometry}*/}
                                {/*        material={materials.M_SkyTex}*/}
                                {/*    />*/}
                                {/*</group>*/}
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/dae_the_flying_circus_koi_fish.glb')

export default Plane2
