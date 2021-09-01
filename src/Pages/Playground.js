
import React, {useRef} from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import {MeshWobbleMaterial, softShadows, OrbitControls} from "@react-three/drei";
import Footer from './Components/Footer/Footer';
import '../App.css';
import './Playground.css';
import Syntax from './Components/SyntaxHighlighter/Syntax';
import ParticlesBg from 'particles-bg';
import BeetleAnimated from './Components/BeetleModel/BeetleAnimated';
import { Suspense } from 'react';
import Pirateship from './Components/ShipModel/Pirateship';
import DesertislandAnimated from './Components/DesertModel/DesertislandAnimated';
import PostHeader from './Components/PostHeader/PostHeader.js'
import CustomLoader from './Components/CustomLoader/CustomLoader.js'
import { AnimatePresence } from 'framer-motion';
import '../App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

let config = {
    num: [1, 1],
    rps: 1,
    radius: [5, 40],
    life: [3, 3],
    v: [3, 0.1],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: "pointer",
    color: ["#ff0000"],
    cross: "dead",
    emitter: "follow",
    random: 15
  };


softShadows();





function Box({speed}){
        const mesh = useRef(null)
        useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y +=0.01))
        

        return(
            <mesh ref = {mesh}>
                <boxBufferGeometry args={[1,1,1]} />
                <meshStandardMaterial/>
            </mesh> 
        )

       
    }

function ThorusKnot({position}){
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.02))
    
    return(
        <mesh castShadow position = {position} ref = {mesh}>
            <torusKnotBufferGeometry args = {[3,1.3,60,60,3,4]} speed = {2} position = {[0,1,0]}  />
            <MeshWobbleMaterial attach= 'material' color = 'red' speed = {2}  /> 
        </mesh>
    )
  }

export default function Playground() {
    return (
        <AnimatePresence>
            
        <div className = 'playgroundBody'>
        <ParticlesBg style = {{ position: 'absolute', top: '0 !important', left: '0', marginTop: '-50em', backgroundColor: 'white'}} type= 'custom' config = {config} bg={true} />
            {/* <PostHeader subject = 'Parallax with react-spring' date = '18/8/2021'/> */}
        <PostHeader subject = '@react-spring/parallax (scroll me)' date = '17/08/2021'/>
     
        <Parallax className = 'parallaxHorizontal' scrollLeft = '100'  style = {{height: '40em', width: '57em', backgroundColor: 'black', position: 'relative', marginBottom: '3em'}}  pages = '1.5'>
        <Suspense fallback = {<CustomLoader/>}>
            <ParallaxLayer style = {{}} offset={0} speed={0}>
                <img alt = '' src = '/bgOne.jpg' style = {{marginLeft: '-8em', marginTop: '0em', height: '160%', width: '160%'}}/>
            </ParallaxLayer>

            <ParallaxLayer style = {{}} offset={0} speed={0.005}>
                <img alt = '' src = '/bgTwo.png' style = {{marginLeft: '-12em', height: '140%', width: '140%'}}/>
            </ParallaxLayer>

            <ParallaxLayer style = {{}} offset={0} speed={0.005}>
                <img alt = '' src = '/bgThree.png' style = {{marginLeft: '-8em',marginTop: '0em', height: '160%', width: '160%'}}/>
            </ParallaxLayer>

            <ParallaxLayer style = {{}} offset={0} speed={0.1}>
                <img alt = '' src = '/bgFour.png' style = {{marginLeft: '-8em',marginTop: '0em', height: '170%', width: '170%'}}/>
            </ParallaxLayer>

            <ParallaxLayer style = {{}} offset={0} speed={0.4}>
                <img alt = '' src = '/bgFive.png' style = {{marginLeft: '-8em',marginTop: '0em', height: '180%', width: '180%'}}/>
            </ParallaxLayer>

            <ParallaxLayer style = {{}} offset={0} speed={0.7}>
                <img alt = '' src = '/bgSix.png' style = {{marginLeft: '-8em',marginTop: '0em', height: '200%', width: '200%'}}/>
            </ParallaxLayer>

            <ParallaxLayer style = {{}} offset={0.1} speed={0.8}>
                <img alt = '' src = '/bgSeven.png' style = {{marginLeft: '-8em',marginTop: '0em', height: '180%', width: '180%'}}/>
            </ParallaxLayer>
          
            </Suspense>

        </Parallax>
       
       
       
              
            {/* <p style = {{fontSize: '0.9em', marginBottom: '5em'}}>On this page you can find out more about what i'm up to at the moment. Let me share with you what i'm learning.</p> */}
            <PostHeader subject = 'Low-poly practice (turn me)' date = '23/07/2021'/>
            
            <Canvas style = {{height: '40em', marginBottom: '4em'}} className = 'canvas canvasGeneral' shadows colorManangement camera = {{position: [-20, 0, 20], fov: 50}}>
                
                <color attach="background" args={'#ddfcfe'} />
                <ambientLight intensity = {0.8}/>
                <directionalLight
                    castShadow 
                    position = {[0,10,0]} 
                    intensity = {1.5} 
                    shadow-mapSize-Width = {1024}
                    shadow-mapSize-Height = {1024}
                    shadow-camera-far = {50}
                    shadow-camera-left = {-15}
                    shadow-camera-right = {10}
                    shadow-camera-top = {15}
                    shadow-camera-bottom = {-15}/>
                <pointLight position = {[-10,0,20]} intensity={0.5}/>
                <pointLight position = {[-5,0,10]} intensity={0.5}/>   
                
                <mesh receiveShadow rotation = {[-Math.PI / 2,0,1]} position = {[0,-4,0]}>
                    <planeBufferGeometry args = {[200,200]} />
                    <shadowMaterial opacity = {0.3} />  
                </mesh>

                <Suspense fallback = {<CustomLoader color = 'black'/>}>
                    <Pirateship position = {[0,-4,1]}/>
                </Suspense>

                <OrbitControls/>

            </Canvas>
            <Canvas style = {{height: '40em'}} className = 'canvas canvasGeneral' shadows colorManangement camera = {{position: [-10, 0, 10], fov: 50}}>
                <color attach="background" args={'#ddfcfe'} />
            

                <Suspense fallback = {<CustomLoader color = 'black'/>}>
                    <DesertislandAnimated position={[0, -2,0]} />
                </Suspense>

                <OrbitControls/>

            </Canvas>

            <PostHeader subject = 'Loading animated GLTF into react-three-fiber' date = '20/07/2021'/>
            <p style = {{fontSize: '0.9em', marginBottom: '4em'}}>
                With a little bit of knowledge of Blender, displaying 3D animations in the browser become really easy with Poinmanders 'gltfjsx' command line tool. 
                <br/><br/>
            To start off this project, I've created this low-poly beetle in blender, rigged the model with a skeleton and added inverse kinematics to the leg bones, making it easier to animate the leg positions when for instance landing back on the ground. Setting up the inverse kinematics and configuring which meshes should be transformed by which bone can be quite some work, but once ready animating becomes a lot easier and a lot of fun. Animating your model is then as simple as dragging the bones into position every few frames and blender takes care of the rest.</p>
            <img style = {{width: '100%', marginBottom: '2em'}} src="/beetleRig.gif" alt="" />            
            <p style = {{fontSize: '0.9em', marginBottom: '2em'}}>I then exported the model as .glb and ran 'npx gltfjsx beetle.glb' to create a jsx component that will look something like this (I've added the useEffect hook to play the animation, and castShadow to the meshes): </p>
            <Syntax codeString = {`export default function Model(props) {
            const group = useRef()
            const { nodes, materials, animations } = useGLTF('/beetleAnimated.glb')
            const { actions } = useAnimations(animations, group)
            useEffect(() => {
                actions.idleanimations.play();
            })
            return (
                <group ref={group} {...props} dispose={null}>
                <group name="Armature" rotation={[0.06, 0, 0]}>
                    <primitive object={nodes.root} />
                    <primitive object={nodes.IKtargetL} />
                    <primitive object={nodes.arm1upL005} />
                    <primitive object={nodes.IKtarget2L} />
                    <primitive object={nodes.IKpole2L} />
                    <primitive object={nodes.IKtarget3L} />
                    <primitive object={nodes.IKTarget3L} />
                    <primitive object={nodes.IKTargetM} />
                    <primitive object={nodes.IKtargetR} />
                    <primitive object={nodes.arm1upR005} />
                    <primitive object={nodes.IKtarget2R} />
                    <primitive object={nodes.IKpole2R} />
                    <primitive object={nodes.IKtarget3R} />
                    <primitive object={nodes.IKTarget3R} />
                    <skinnedMesh castShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials.Material}
                    skeleton={nodes.Cube002.skeleton}
                    />
                    <skinnedMesh castShadow
                    geometry={nodes.Cube002_1.geometry}
                    material={materials['Material.001']}
                    skeleton={nodes.Cube002_1.skeleton}
                    />
                    <skinnedMesh castShadow
                    geometry={nodes.Cube002_2.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Cube002_2.skeleton}
                    />
                </group>
                </group>
            )
            }

            useGLTF.preload('/beetleAnimated.glb')`} />         

            <p style = {{fontSize: '0.9em', marginBottom: '2em', marginTop: '3em'}}>{`Then throw your model into the Canvas, wrap it in a <Suspense></Suspense> and you are good to go!`}</p>
                    
            <Canvas style = {{height: '40em'}} className = 'canvas canvasGeneral' shadows colorManangement camera = {{position: [-20, 0, 20], fov: 50}}>
                
                <ambientLight intensity = {0.8}/>
                <directionalLight
                        castShadow 
                        position = {[0,10,0]} 
                        intensity = {1.5} 
                        shadow-mapSize-Width = {1024}
                        shadow-mapSize-Height = {1024}
                        shadow-camera-far = {50}
                        shadow-camera-left = {-15}
                        shadow-camera-right = {10}
                        shadow-camera-top = {15}
                        shadow-camera-bottom = {-15}/>
                <pointLight position = {[-10,0,20]} intensity={0.5}/>
                <pointLight position = {[-5,0,10]} intensity={0.5}/>   
                
                <mesh receiveShadow rotation = {[-Math.PI / 2,0,1]} position = {[0,-4,0]}>
                    <planeBufferGeometry args = {[200,200]} />
                    <shadowMaterial opacity = {0.3} />  
                </mesh>

                <Suspense fallback = {<CustomLoader color = 'black'/>}>
                    <BeetleAnimated position = {[0,-4,1]}/>
                </Suspense>

                <OrbitControls/>

            </Canvas>

            <PostHeader subject = "React-Three-Fiber basics: setting up a scene, lighting & orbital controls" date = '16/07/2021'/>
            <p style = {{fontSize: '0.8em', marginBottom: '2em'}}>At the time of making this website, react-three-fiber was not compatible with react version 16.8. As I just invested my time in creating page transitions with <span><a href = 'https://www.framer.com/docs/' target = '_blank'> framer-motion</a></span> , and since framer motion requires react 16.8 and up, i decided to integrate my models using google's <span><a href = 'https://modelviewer.dev/' target="_blank">Model-Viewer</a></span>.I ran into some compatibility issues and was able to get my models up by launching a seperate react project and framing my models with Iframe. It wasn't a great solution and I decided to wait until React-three-fiber released an update that would allow me to use it with react 16.8. And long behold, shortly after they rolled out a release that supports react 16.8: <span><a href = 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction' target = '_blank'> @react-three/fiber.</a></span></p>
            <p style = {{fontSize: '0.8em'}}>
            {"To display 3D models we need to set up a 3D environment for the object to live in. This environment consists of a scene, a camera and a renderer. In react this is simplified by combining the scene and camera in the <Canvas> component. By placing a <mesh></mesh> jsx element we can render objects in the scene. Our mesh element requires two components; a geometry that defines the shape of the object and a material that defines the look of the object (texture, color, light-effects etc). In this case I used a boxBufferGeometry that you guessed it, defines the geometry of a cube, and a meshStandardMaterial. Any geometry in three-fiber requires an args prop that takes in an array defining the objects proportions or other parameters that concern it's form factor. In the case of our box-geometry, it takes an array of 3 parameters controlling it's size on the x, y & z axis. For all the available geometries and their args input I recommend checking out "}<span><a target = '_blank' href = 'https://threejsfundamentals.org/threejs/lessons/threejs-primitives.html#:~:text=Three.js%20has%20a%20large%20number%20of%20primitives.%20Primitives,primitives%20to%20experiment%20and%20get%20started%20with%203D.'> threejsfundamentals.org</a></span>.
            </p>
            <Syntax codeString = {`export default function Example(){
                return(
                    <Canvas>
                        <mesh>
                            <boxBufferGeometry args={[1,1,1]} />
                            <meshStandardMaterial/>   
                        </mesh>
                    </Canvas> 
                    )
                }`}/><br/>
            <p style = {{fontSize: '0.8em'}}>To have the model automatically rotating, we need to update our model by re-rendering our component for each frame. We get the objects current state by using the useRef hook on our mesh. In this case we want to retrieve the rotation around the x axis. We then update the mesh with the useFrame hook which comes with react-three-fiber. The useFrame hook allows you to execute code on each frame of the animation. The last thing we need to do is add a directional light to our canvas. This will create difference in value depending on what parts of our model are facing the light, allowing us to see the depth of our object. </p>
            <Syntax codeString = {`function Box(){

        const meshRef = useRef(null)
        useFrame(() => (meshRef.current.rotation.x = meshRef.current.rotation.y +=0.01))

        return(
        
            <mesh ref = meshRef>
                    <boxBufferGeometry args={[1,1,1]} />
                    <meshStandardMaterial/>   
            </mesh>
        )
        }

        export default function Example(){
            return(
            <Canvas>
                    <directionalLight intensity={0.5} />
                    <Box/>
            </Canvas> 
            )
        }


        `}/>
            <Canvas style = {{height: '40em', marginBottom: '2em'}} className = 'canvas'>
                <Suspense fallback = {<CustomLoader color = 'black'/>}>
                <directionalLight intensity={0.5} />
                <Box speed = {1}/>
                </Suspense>
            </Canvas>
                            
            <p style = {{fontSize: '0.8em'}}>{`Now let's do something a little more interesting. Instead of a cube let's use a thorusknot. We set the args of the torusKnotBufferGeometry to the following array: [3,1.3,60,60,3,4], representing radius, tubeRadius, tubularSegments, radialSegments, p, q respectively. To add a shadow to our object , we need to do the following things:`}
                <span><ul>
                    <li>Add a 'castShadow' prop on the lights that you want to generate shadows.</li>
                    <li>Set the shadowmap height and width for each light that you want to generate shadows. In this case, I've set it to 1024 x 1024 px.</li>
                    <li>Add a 'castShadow' prop to any object that you want to have shadows projected off.</li>
                    <li>Add a 'recieveShadow' prop to any object that you want to project the shadows on. In this case, I've created a planeBufferGeometry and rotated it 90 degrees to have a horizontal floor.</li>
                </ul> </span>
                
                {`We also want to be able to move our object. We will use the <OrbitControls/> component from`}<span> <a target = '_blank' href = 'https://drei.pmnd.rs/?path=/story/controls-orbitcontrols--orbit-controls-story' >@react-three/drei</a>.</span> {`Just for the heck of it I've set the material to <MeshWobbleMaterial/>, another drei component, making the model wobble.`} 

                </p>
                <Syntax codeString = {`function ThorusKnot({position}){
        const mesh = useRef(null)
        useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.02))
                            
        return(
            <mesh castShadow position = {position} ref = {mesh}>
                <torusKnotBufferGeometry
                    args = {[3,1.3,60,60,3,4]} 
                    speed = {2} 
                    position = {[0,1,0]} />
                <MeshWobbleMaterial color = 'red' speed = {2} /> 
            </mesh>
            );
        }
                        
    export default function Example(){
        return(
            <Canvas shadows camera = {{position: [-20, 0, 20], fov: 50}}>
                <ambientLight intensity = {0.2}/>
                        
                <directionalLight
                    castShadow 
                    position = {[0,10,0]} 
                    intensity = {1.5} 
                    shadow-mapSize-Width = {1024}
                    shadow-mapSize-Height = {1024} />
                        
                <pointLight position = {[-10,0,20]} intensity={0.5} />
                    
                <mesh receiveShadow rotation = {[-Math.PI / 2,0,1]} position = {[0,-7,0]}>
                    <planeBufferGeometry args = {[200,200]} />
                    <shadowMaterial opacity = {0.3} />  
                </mesh>

                <ThorusKnot />
                        
                <OrbitControls/>
            </Canvas>
            );
        }`} />


                        <Canvas style = {{height: '40em', marginBottom: '0em'}} className = 'canvas canvasGeneral' shadows colorManangement camera = {{position: [-20, 0, 20], fov: 50}}>
                                <ambientLight intensity = {0.2}/>
                                <directionalLight
                                castShadow 
                                position = {[0,10,0]} 
                                intensity = {1.5} 
                                shadow-mapSize-Width = {1024}
                                shadow-mapSize-Height = {1024}
                                shadow-camera-far = {50}
                                shadow-camera-left = {-10}
                                shadow-camera-right = {10}
                                shadow-camera-top = {10}
                                shadow-camera-bottom = {-10}/>
                                <pointLight position = {[-10,0,20]} intensity={0.5}/>
                            

                                {/* Adds a plane for a shadow to be cast on */}
                                <mesh receiveShadow rotation = {[-Math.PI / 2,0,1]} position = {[0,-7,0]}>
                                <planeBufferGeometry attach='geometry' args = {[200,200]}/>
                                <shadowMaterial attach='material' opacity = {0.3}/>  
                                </mesh>
                                <ThorusKnot/>
                                {/* radius, tubeRadius, tubularSegments, radialSegments, p, q); */}
                                <OrbitControls/>

                        </Canvas>

                        <p style = {{fontSize: '0.8em'}}>Et voilà!</p>

                



                    <Footer/>
                </div>
                </AnimatePresence>
                
                );
            }
            