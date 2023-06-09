import * as THREE from './build/three.module.js'
import { GLTFLoader } from './build/GLTFLoader.js'
import SceneInit from 'build/SceneInit.js'
import { OrbitControls } from './build/OrbitControls.js'

const test = new SceneInit('Canvas') //utilizando a cena do SceneInit.js
test.initialize()
test.animate()

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
camera.position.z = 20
scene.add(camera)

//Criando uma esfera
/*
  const geometry = new THREE.SphereGeometry(3, 64, 64)
  const material = new THREE.MeshStandardMaterial({
    color: '#00FF83'
  })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
*/

//Luz
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(10, 10, 10)
scene.add(light)

const glftLoader = new GLTFLoader()

//Orbita
const controls = new OrbitControls(camera, renderer.domElement)

glftLoader.load('./assets/Gloria1.glb', glb => {
  const model = glb.scene
  model.scale.set(1, 1, 1)
  test.scene.add(model)
  //scene.add(model)
})

function animate() {
  requestAnimationFrame(animate)
  controls.update()

  // Esse aqui fica no final
  renderer.render(scene, camera)
}

animate()
