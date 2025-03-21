// @awe/scripting api

import {
  Object3D,
  Vector3,
  Quaternion,
  Box3,
  PerspectiveCamera,
  AnimationClip,
} from "three";
import * as Rapier from "@dimforge/rapier3d";
import { ReactNode } from "react";

// @awe/scripting api

/*
physics data provided to Components.create; 
Example:

const cube = await Components.create({
    type: "model",
    url: "...",
    collider: {
        rigidbodyType: "DYNAMIC",
        colliderType: "CUBE",
    }
})
*/
export interface PhysicsData {
  rigidbodyType?: "DYNAMIC" | "KINEMATIC" | "FIXED" | "PLAYER";
  // collider shape: MESH will use component's collision mesh, otherwise will approximate the shape with a primitive
  colliderType?: "CUBE" | "MESH" | "SPHERE" | "CAPSULE" | "CYLINDER";
  sensor?: boolean;
  // for dynamic type
  dynamicProps?: {
    mass?: number;
    friction?: number;
    restitution?: number;
    density?: number;
  };
  //left 16 bits for groups membership, right 16 bits for filter
  groups?: number;
  translationLock?: [boolean, boolean, boolean];
  rotationLock?: [boolean, boolean, boolean];
}

// any 3d vector: threejs Vector3, rapier Vector3, or an object with x, y, z properties
export interface XYZ {
  x: number;
  y: number;
  z: number;
}

export interface RigidBodyWrapper {
  colliders: ColliderWrapper[];
  component: Component3D;
  raw: any; // Returns the raw Rapier rigidbody
  enabled: boolean; // use this to enable/disable the rigidbody
  position: Vector3;
  quaternion: Quaternion;
  teleport(position: Vector3, quaternion: Quaternion): void;
  translationLock: [boolean, boolean, boolean];
  rotationLock: [boolean, boolean, boolean];
  reset(): void;
  // following methods work only on dynamic rigidbodies
  addForce(force: XYZ, relativePoint?: XYZ): void;
  resetForces(): void;
  resetVelocities(): void;
  addTorque(torque: XYZ): void;
  resetTorques(): void;
  applyImpulse(impulse: XYZ, relativePoint?: XYZ): void;
}

export interface ColliderWrapper {
  parent: RigidBodyWrapper;
  component: Component3D;
  enabled: boolean;
  raw: any; // Returns the raw Rapier collider
  mass: number;
  friction: number;
  restitution: number;
  isSensor: boolean;
}

// base class for all components's data
export interface Component3DData {
  type: string;
  position?: XYZ;
  rotation?: XYZ;
  scale?: XYZ;
  collider?: PhysicsData;
  // useful to identify the component in the scene: see Components.byName
  name?: string;
}

/**
 * CollisionEvent is triggered when two components collide.
 */
export interface CollisionEvent {
  me: Component3D;
  other: Component3D;
}

export interface ContactEvent extends CollisionEvent {
  contactPoints: Array<{
    position: Vector3;
    normal: Vector3;
    depth: number;
  }>;
}

/**
 * Base class for all components in the game.
 */
export declare class Component3D<
  Data extends Component3DData = Component3DData
> extends Object3D {
  // IMPORTANT: can't be created directly, use Components.create(data)
  constructor(data: Data);

  rigidBody: RigidBodyWrapper;

  // events
  onCollisionEnter(cb: (event: ContactEvent) => void): () => void;
  onCollisionExit(cb: (event: CollisionEvent) => void): () => void;
  onCollisionStay(cb: (event: ContactEvent) => void): () => void;
  onSensorEnter(cb: (event: ContactEvent) => void): () => void;
  onSensorExit(cb: (event: CollisionEvent) => void): () => void;
  onSensorStay(cb: (event: ContactEvent) => void): () => void;

  getBBox(): Box3;
  getDimensions(): Vector3;

  // ... inherits all threejs's Object3D methods and properties
}

/**
 * AvatarComponent is used to display VRM avatars in the game.
 * Avatars can be GPU optiimized by using the useMixer: false.
 * IMPOTANT If you plan to use avatar.getBone(id) You must set useMixer to true.
 *
 * Example:
 *
 * const avatar = await Components.create({
 *   type: "avatar",
 *   url: "...",
 *   collider: {
 *     rigidbodyType: "KINEMATIC",
 *     colliderType: "CAPSULE",
 *   }
 * })
 *
 * The forward direction is located at the back of the avatar.
 * So remember to add Math.PI when orienting the avatar to face the a direction.
 *
 */
export type RenderMode = "default" | "toon" | "glitch" | "ghost";

export interface AvatarComponentData extends Component3DData {
  type: "avatar";
  // vrm url
  url: string;
  // shown on top the avatar
  text?: string;
  renderMode?: RenderMode;
  // CPU or GPU Animation
  useMixer?: boolean;
  opacity?: number;
}

export type Bone =
  | "chest"
  | "head"
  | "hips"
  | "jaw"
  | "leftEye"
  | "leftFoot"
  | "leftHand"
  | "leftIndexDistal"
  | "leftIndexIntermediate"
  | "leftIndexProximal"
  | "leftLittleDistal"
  | "leftLittleIntermediate"
  | "leftLittleProximal"
  | "leftLowerArm"
  | "leftLowerLeg"
  | "leftMiddleDistal"
  | "leftMiddleIntermediate"
  | "leftMiddleProximal"
  | "leftRingDistal"
  | "leftRingIntermediate"
  | "leftRingProximal"
  | "leftShoulder"
  | "leftThumbDistal"
  | "leftThumbMetacarpal"
  | "leftThumbProximal"
  | "leftToes"
  | "leftUpperArm"
  | "leftUpperLeg"
  | "neck"
  | "rightEye"
  | "rightFoot"
  | "rightHand"
  | "rightIndexDistal"
  | "rightIndexIntermediate"
  | "rightIndexProximal"
  | "rightLittleDistal"
  | "rightLittleIntermediate"
  | "rightLittleProximal"
  | "rightLowerArm"
  | "rightLowerLeg"
  | "rightMiddleDistal"
  | "rightMiddleIntermediate"
  | "rightMiddleProximal"
  | "rightRingDistal"
  | "rightRingIntermediate"
  | "rightRingProximal"
  | "rightShoulder"
  | "rightThumbDistal"
  | "rightThumbMetacarpal"
  | "rightThumbProximal"
  | "rightToes"
  | "rightUpperArm"
  | "rightUpperLeg"
  | "spine"
  | "upperChest";

export declare class AvatarComponent extends Component3D<AvatarComponentData> {
  play(name: string): void;
  stop(name: string): void;
  stopAll(): void;
  getBone(id: Bone): Object3D;

  url: string;
  text: string;
  animation: string;
  renderMode: RenderMode;
  useMixer: boolean;
  opacity: number;
}

/**
 *  ObjectComponent can be used to create a Component from a threejs Object3D.
 *  a collision mesh will be automatically generated from the object's merged geometries.
 *
 * Example:
 *
 * const box = new Mesh(...)
 * const sphere = new Mesh(...)
 * const object = new Object3D()
 * object.add(box, sphere)
 *
 * const objectComponent = await Components.create({
 *   type: "object",
 *   object,
 *   // ...
 * })
 *
 */
export interface ObjectComponentData extends Component3DData {
  type: "object";
  object: Object3D;
}

export declare class ObjectComponent extends Component3D<ObjectComponentData> {
  object: Object3D;
}

/**
 * ModelComponent is used to display gltf/glb models in the game.
 *
 * Example:
 *
 * const model = await Components.create({
 *   type: "model",
 *   url: "...",
 * })
 *
 */
export interface ModelComponentData extends Component3DData {
  type: "model";
  // url of the gltf/glb
  url: string;
  renderMode?: RenderMode;
  opacity?: number;
}

export declare class ModelComponent extends Component3D<ModelComponentData> {
  play(name: string): void;
  stop(name: string): void;
  stopAll(): void;
  // return available gltf animations
  getAnimationData(): Record<string, AnimationClip>;
  renderMode: RenderMode;
  opacity: number;
}

/**
 * TextComponent is used to display text in the game (not an UI overlay but webgl).
 *
 * Example:
 *
 * const text = await Components.create({
 *   type: "text",
 *   text: "Hello, world!",
 * })
 *
 */
export type TextAlignment = "left" | "center" | "right";
export type FontFamily =
  | "aeonik-bold"
  | "aeonik-medium"
  | "playfair-regular"
  | "playfair-italic";
export type TextTransform =
  | "none"
  | "uppercase"
  | "lowercase"
  | "capitalize"
  | "togglecase";

export interface TextComponentData extends Component3DData {
  type: "text";
  text: string;
  font?: FontFamily;
  // Width of the text box. Defaults to 500. Use this to avoid breaking a long into multiple lines
  width?: number;
  // Defaults to 60
  lineHeight?: number;
  // Defaults to "#ffffff"
  textColor?: string;
  // Defaults to "left"
  align?: TextAlignment;
  textTransform?: TextTransform;
  // defaults to 1
  opacity?: number;
}

export declare class TextComponent extends Component3D<TextComponentData> {
  text: string;
  font: FontFamily;
  width: number;
  lineHeight: number;
  textColor: string;
  align: TextAlignment;
  textTransform: TextTransform;
  opacity: number;
}

/**
 * TerrainComponent is used to display a terrain in the game with various config options: noise, color, texture, etc.
 *
 * Example:
 *
 * const terrain = await Components.create({
 *   type: "terrain",
 * })
 */
export interface TerrainComponentData extends Component3DData {
  type: "terrain";
  shape?: "plane" | "circle";
  scale?: XYZ; // defaults to { x: 1000, y: 1, z: 1000 }

  // noise config
  noiseEnabled?: boolean; // defaults to false

  mode?: "color" | "texture" | "shader"; // defaults to "shader"

  // color config
  color?: string;

  // shader config
  shader?: "grid" | "biplanar"; // defaults to "grid" when mode is "shader"
  // grid config
  griddiv?: number; // number of divisions of the grid, defaults to 180
  lineWidth?: number; // defaults to 0.5
  gridColor?: string; // defaults to "#000000"

  // texture config
  textureOpts?: {
    // predefined texture id
    id?:
      | "wooden"
      | "rock"
      | "grass"
      | "sand"
      | "snow"
      | "rust"
      | "marble"
      | "brick";
    // or path to a custom texture
    path?: string;
  };
}

export declare class TerrainComponent extends Component3D<TerrainComponentData> {
  // no methods, just config when creating the component
}

/**
 * BackgroundComponent is used to display a background in the game.
 * To modify use ComponentManager.background to get the component.
 */
export interface BackgroundComponentData extends Component3DData {
  type: "background";
}

export interface SkyOpts {
  turbidity: number; //default 10
  rayleigh: number; //default 3
  mieCoefficient: number; //default 0.005
  mieDirectionalG: number; //default 0.7
  azimuth: number; //default 180
  elevation: number; //default 2
}

export declare class BackgroundComponent extends Component3D<BackgroundComponentData> {
  //
  setAsColor(color: string): void;
  // preset name or url
  // presets: day, orbit, space, mountains, night, mud_road
  setAsImage(image: string, format?: ".jpg" | ".jpeg" | ".png" | ".hdr"): void;

  setAsSky(options: SkyOpts): void;
}

/**
 * MainCamera is the main camera in the game. This can be accessed using Camera singleton.
 *
 * Example:
 *
 * import { Camera, Player } from "@awe/scripting";
 *
 * Camera.useControls("thirdperson");
 * Camera.usePointerLock = true;
 * Camera.target = Player.avatar;
 * Camera.maxZoomOut = 10;
 * Camera.heightOffset = 2;
 */
export declare class MainCamera extends PerspectiveCamera {
  useControls(controls: "thirdperson" | "firstperson" | any): void;
  // if true clicking on the canvas will lock the pointer
  usePointerLock: boolean;
  // Usually Player.avatar, but can be any object
  target: Object3D;
  // max distance from the target object, used with useControls
  maxZoomOut: number;
  // vert offset from the target object, used with useControls
  heightOffset: number;
}

/**
 * Manage the components in the game. Can be accessed using Components singleton.
 */
export declare class ComponentManager extends Object3D {
  // lookup by data.id
  byType(type: string): Component3D[];
  // lookup by data.name
  byName(name: string): Component3D[];
  filter(f: Function): Component3D[];
  find(f: Function): Component3D;
  forEach(f: Function): void;
  // create a component
  create(data: ModelComponentData): Promise<ModelComponent>;
  create(data: TerrainComponentData): Promise<TerrainComponent>;
  create(data: AvatarComponentData): Promise<AvatarComponent>;
  create(data: ObjectComponentData): Promise<ObjectComponent>;
  create(data: TextComponentData): Promise<TextComponent>;
  // destroy a component
  destroy(comp: Component3D): boolean;
  // duplicate a component
  duplicate<T extends Component3D>(comp: T): Promise<T>;

  background: BackgroundComponent;
}

/**
 * Control the game loop. Can be accessed using World singleton.
 */
export declare class Space {
  /**
   * Start the game loop
   */
  start(payload?: any): void;
  /**
   * Stop the game loop
   */
  stop(payload?: any): void;
}

/**
 * Wrapper for the physics engine, currently using Rapier3D; can be accessed using Physics singleton.
 */
export declare class PhysicsRapierWrapper extends Object3D {
  // Current Rapier world instance
  world: Rapier.World;
  active: boolean;
}

/**
 * This provides a conveneince around Rapier character controller to move kinematic characters in the scene.
 * Use this to create custom player controls.
 */
export interface BasicCharacterControllerOpts {
  // gap preserved between character and its env; defaults to 0.08
  offset: number;
  // defaults to true
  applyImpulsesToDynamicBodies: boolean;
  // defaults to 1
  characterMass: number;
  // enable sliding along the ground; defaults to true
  slideEnabled: boolean;
  // Snap to ground if vert. distance to ground is less than this value; defaults to 1
  snapToGround: number;
  // defaults to 30 degrees
  maxSlopeClimbAngle: number;
  // defaults to 20 degrees
  minSlopeSlideAngle: number;
  // auto step config
  autoStep: {
    // max height the character can step over; defaults to 0.3
    maxHeight: number;
    // min horizontal available space for the character to step over; defaults to 0.2
    minWidth: number;
  };
}

export declare class BasicCharacterController {
  constructor(options: BasicCharacterControllerOpts);

  /**
   * this applies the movement to the target component but takes into account
   * the physics collisions and adjustements/constraionts defined in this controller's options
   * Will also take care of firing appropriate collision/sensor events
   */
  update(
    target: Component3D,
    movement: Vector3,
    deltaTime: number
  ): { onFloor: boolean };
}

/**
 * This class implements the default platformer controls, with support for jumping, running, etc
 * use WASD or Arrow keys for movement, and SPACE for jumping; shift key for running
 */
export interface DefaultPlayerControlsOpts {
  // the object to move, defaults to Player.avatar
  object: Object3D;
  // the target is used to determine the forward direction of the movement, defaults to Camera singleton
  target: Object3D;
  // defaults to -1.81
  gravity?: number;
  // Params to controls walking and running of the target object
  run?: {
    // walk speed
    speed?: number;
    // how much to speedup, activated when the user presses the shift key
    boost?: number;
  };
  // Params to controls the jump of the target object
  jump?: {
    // how high the character will jump, defaults to 4
    height?: number;
    // duration of the jump in seconds, defaults to 1
    duration?: number;
    // acceleration of the jump, defaults to 1
    airAcceleration?: number;
    // max number of jumps, defaults to 1
    maxJumps?: number;
    // the time in seconds after the character has left the ground that the character can still jump - Infinity by default
    coyoteTime?: number;
    // the maximum speed the character can fall
    maxFallSpeed?: number;
    // the speed at which the character reaches the peak of the jump
    peakSpeed?: number;
    // the delay in seconds before the character can jump again
    delay?: number;
  };
  // character options
  character?: BasicCharacterControllerOpts;
}

export declare class DefaultPlayerControls {
  constructor(options: Partial<DefaultPlayerControlsOpts>);
}

/**
 * class for the current player. can be accessed using Player singleton.
 */
export declare class PlayerWrapper {
  avatarReady: Promise<AvatarComponent>;
  avatar: AvatarComponent;
  sessionId: string;
  userId: string;
  name: string;
}

/**
 * UI is a singleton that can be used to create a UI renderer for react components.
 */
export declare const UI: {
  createRenderer(): {
    unmount: () => void;
    render: (node: ReactNode) => boolean;
    renderSync: (node: ReactNode) => boolean;
  };
};

// to use with useStore hook
export declare class Store<State> {
  constructor(state: State);
  get state(): State;
  update: (newState: Partial<State>) => void;
  subscribe: (cb: () => void) => () => void;
}
// react hook
export declare function useStore<T>(store: Store<T>): T;

// singletons exposed from the package
// camera used to render the scene
export declare const Camera: MainCamera;
// physics engine wrapper
export declare const Physics: PhysicsRapierWrapper;
// main player
export declare const Player: PlayerWrapper;

// component manager
export declare const Components: ComponentManager;

export declare const World: Space;
