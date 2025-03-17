import { AllowedPointerEventsType } from "@pmndrs/uikit/dist/panel";
import { AnimationClip } from "three";
import { AppStateOpts } from "..";
import { BaseEvent } from "three";
import { BatchComponentData as BatchComponentData_2 } from "./batchdata";
import { BirdStaticComponentData } from "./birddata";
import { Box3 } from "three";
import { BoxGeometry } from "three";
import { BufferAttribute } from "three";
import { BufferGeometry } from "three";
import { Camera as Camera_2 } from "three";
import { CatmullRomCurve3 } from "three";
import type { CharacterCollision } from "@dimforge/rapier3d";
import { CircleGeometry } from "three";
import { Clock } from "three";
import type { Collider as Collider_3 } from "@dimforge/rapier3d";
import type { ColliderDesc } from "@dimforge/rapier3d";
import { Color as Color_2 } from "three";
import { ColorSpace } from "three";
import { Component3D as Component3D_2 } from "../../scripting";
import { Component3DData as Component3DData_2 } from "../../../../scripting";
import { Component3DData as Component3DData_3 } from "engine/scripting";
import { Component3DData as Component3DData_4 } from "../../scripting";
import { Component3DData as Component3DData_5 } from "../../../scripting";
import { Component3DData as Component3DData_6 } from "../scripting";
import type { ConnectedSolanaWallet } from "@privy-io/react-auth";
import type { ConnectedWallet as ConnectedWallet_2 } from "@privy-io/react-auth";
import { ConnectedWallet as ConnectedWallet_3 } from "./providers";
import { Crowd } from "recast-navigation";
import { CrowdAgent } from "recast-navigation";
import { CrowdParams } from "recast-navigation";
import { DebugDrawer } from "@recast-navigation/three";
import { default as default_2 } from "../../abstract/pipelinelines";
import { default as default_3 } from "../../abstract/instancemeshwrapper";
import { default as default_4 } from "../../../abstract/instancemeshwrapper";
import type { EngineEdit } from "../../../../engine-edit/src/index";
import { Euler } from "three";
import EventEmitter from "events";
import { EventListener as EventListener_2 } from "three";
import type { EventQueue } from "@dimforge/rapier3d";
import { Game as Game_2 } from "..";
import { GameSignals } from "..";
import { GrassComponentData as GrassComponentData_2 } from "./grassdata";
import { Group } from "three";
import _gsap from "gsap";
import { InstancedBufferGeometry } from "three";
import { InternalConfig as InternalConfig_2 } from "../api/scriptparams";
import { Intersection } from "three";
import { JsonRpcApiProvider } from "ethers/providers";
import type { JsonRpcProvider } from "ethers";
import { Layers } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { MagnificationTextureFilter } from "three";
import { MapSchema } from "@colyseus/schema";
import { Material } from "three";
import { Matrix3 } from "three";
import { Matrix4 } from "three";
import { Mesh } from "three";
import { MeshBasicMaterial } from "three";
import { MeshLambertMaterial } from "three";
import { MeshPhongMaterial } from "three";
import { MeshStandardMaterial } from "three";
import { MeshToonMaterial } from "three";
import { MinificationTextureFilter } from "three";
import type { NarrowPhase } from "@dimforge/rapier3d";
import { NavMesh } from "recast-navigation";
import { NavMeshQuery } from "recast-navigation";
import { NormalBufferAttributes } from "three";
import { Object3D } from "three";
import { Object3DEventMap } from "three";
import { ParamsBinder } from "engine/space/params/binder";
import { PerspectiveCamera } from "three";
import { PlayerSchema as PlayerSchema_2 } from "./types";
import type { Provider } from "ethers";
import type { ProxyEmitter } from "game-loader/types";
import { Quaternion } from "three";
import type { QueryFilterFlags } from "@dimforge/rapier3d";
import type RAPIER from "@dimforge/rapier3d";
import { Ray } from "three";
import { Raycaster } from "three";
import type { ReactNode } from "react";
import { RecastBuildContext } from "@recast-navigation/core";
import { RecastCompactHeightfield } from "@recast-navigation/core";
import { RecastContourSet } from "@recast-navigation/core";
import { RecastHeightfield } from "@recast-navigation/core";
import { RecastPolyMesh } from "@recast-navigation/core";
import { RecastPolyMeshDetail } from "@recast-navigation/core";
import { RigidBody } from "@dimforge/rapier3d";
import { RigidBodyType as RigidBodyType_3 } from "engine/components/physics/types";
import { Scene } from "three";
import { Schema } from "@colyseus/schema";
import { ScriptComponent as ScriptComponent_2 } from "../api/scriptcomponent";
import { ScriptResource } from "engine/space/resources/scripts/scriptresource";
import { ScriptResource as ScriptResource_2 } from "./scripts/scriptresource";
import { ScriptResourceFactory } from "./scripts";
import { Server } from "../@types/states";
import { ShaderMaterial } from "three";
import type { Signer } from "ethers";
import { SoloNavMeshGeneratorIntermediates } from "recast-navigation/generators";
import { Space as Space_2 } from "engine/index";
import { Sphere } from "three";
import { Spherical } from "three";
import { Texture } from "three";
import * as _THREE from "three";
import { TypedArray } from "three";
import { Vector2 } from "three";
import { Vector3 } from "three";
import { WalletWithMetadata } from "@privy-io/react-auth";
import { WaveComponentData as WaveComponentData_2 } from "./wavedata";
import { WebGLRenderer } from "three";
import { WindComponentData as WindComponentData_2 } from "./winddata";
import type { World as World_2 } from "@dimforge/rapier3d";
import { Wrapping } from "three";

/**
 * @public
 */
export declare class $Param {
  private static _parseArgs;
  static String(def: string, opts?: StringParam): string;
  static String(opts: StringParam): string;
  static String(): string;
  static Secret(opts?: StringParam): string;
  static Number(def: number, opts?: NumberParam): number;
  static Number(opts: NumberParam): number;
  static Number(): Number;
  static Boolean(def: boolean, opts?: BooleanParam): boolean;
  static Boolean(opts: BooleanParam): boolean;
  static Boolean(): boolean;
  static Color(def: string, opts?: ColorParam): string;
  static Color(opts: ColorParam): string;
  static Color(): string;
  static Animation(def: string, opts?: AnimationParam): string;
  static Animation(opts: AnimationParam): string;
  static Animation(): string;
  static Vector2(x: number, y: number, opts?: Vec2Param): Vector2;
  static Vector2(def: XY_2, opts?: Vec2Param): Vector2;
  static Vector2(opts: Vec2Param): Vector2;
  static Vector2(): Vector2;
  static Vector3(x: number, y: number, z: number, opts?: Vec3Param): Vector3;
  static Vector3(def: XYZ_3, opts?: Vec3Param): Vector3;
  static Vector3(opts: Vec3Param): Vector3;
  static Vector3(): Vector3;
  static Select<T extends OptId, V extends T, O extends Opt<T>>(
    options: Options<T>,
    opts?: SelectParam<V>
  ): T;
  static Select<T extends OptId, V extends T, O extends Opt<T>>(
    options: Options<T>,
    def: V,
    opts?: SelectParam<V>
  ): T;
  static Select<const T extends OptId>(opts: SelectParam<T>): T;
  static Trigger(action: () => void, opts?: TriggerParam): null;
  static Trigger(opts: TriggerParam): null;
  static Action<T>(
    argType: T,
    callback: (value: T) => void,
    opts?: ReceiverParam
  ): SignalAction<T>;
  static Action(
    callback: (value: void) => void,
    opts?: ReceiverParam
  ): SignalAction<void>;
  static Action(opts: ReceiverParam): SignalAction<unknown>;
  static Resource<T extends keyof ResourceMap>(of: T): ResourceMap[T];
  static Component<T extends Component3D>(of: new () => T): T;
  static Component(of: "any"): Component3D;
  static Component<T extends keyof ComponentMap>(of: T): ComponentMap[T];
  static Signal<T>(type: T, opts?: SignalParam): SignalEmitter<T>;
  static Signal(opts?: SignalParam): SignalEmitter<unknown>;
  static Object<T>(instanceOrClass: T | (new () => T), opts?: GroupParam): T;
  static Folder<T>(label: string, t: T): T;
  static Union<const T extends Array<Tagged<any>>>(
    options: T,
    opts?: UnionParam
  ): T[number];
  static Array<T>(init: Array<T>, opts?: ArrayParam<T>): Array<T>;
  static Array<T>(itemType: T, opts?: ArrayParam<T>): Array<InstanceType_2<T>>;
  static Map<T>(
    itemType: T,
    opts?: MapParam
  ): Record<string, InstanceType_2<T>>;
}

declare type ABI = AnyMutArray<{
  name?: string;
  outputs?: any;
  inputs?: any;
  stateMutability?: any;
  type?: string;
}>;

/**
 * @public
 */
declare class AbstractCamera extends PerspectiveCamera {
  constructor(fov: any, aspect: any, near: any, far: any);
  resizeEvent: any;
  resize(w: any, h: any): void;
}

declare class AbstractLens<T = any> {
  componentId: string;
  get(): T;
  getOwn(): T;
  set(
    value: T,
    opts?: {
      isProgress: boolean;
    }
  ): unknown;
  reset(): void;
  apply(): void;
  unapply(state: any): void;
  get source(): any;
  get prop(): any;
  get isOverride(): boolean;
  get isLocked(): boolean;
}

export declare interface AbstractParam<T = any> {
  name?: string;
  label?: string;
  info?: string;
  dataKey?: string;
  visible?: string | ((self: any) => boolean);
  bindable?: boolean;
  format?: Format;
  group?: FolderData;
  skipLabel?: boolean;
  useFolder?: FolderData;
  defaultValue?: T;
}

declare interface AddOpts {
  abort?: AbortSignal;
  parent?: Object3D;
  persistent?: boolean;
}

/**
 * @public
 */
declare interface AgentParams {
  radius: number;
  height: number;
  maxAcceleration: number;
  maxSpeed: number;
}

declare type AgentState = "Idle" | "Moving" | "Invalid";

/**
 * @public
 * @deprecated
 *
 * A component to manage WebRTC voice and screenshare streams
 *
 * See {@link AgoraComponentData} for the data schema used to create a agora component
 */
declare class AgoraComponent extends Component3D<AgoraComponentData> {
  voiceStreams: {};
  shareStreams: {};
  volumes: {};
  conn: any;
  gameId: any;
  userId: string;
  private _voiceState;
  private _screenshareState;
  localUuid: any;
  localStream: any;
  get voiceState(): string;
  get screenshareState(): string;

  pcs: {};
  updatePeerConnections: (peers: any) => void;
  createPeerConnection: (userId: any) => void;
  onOffer: (from: any, data: any) => Promise<void>;
  onAnswer: (from: any, data: any) => Promise<void>;
  onCandidate: (from: any, data: any) => Promise<void>;
  connect(): Promise<unknown>;
  send(type: any, payload?: {}): void;

  i: number;

  audioLocalStream: any;
  activateVoice: () => Promise<void>;
  disableVoice: () => Promise<void>;
  activateScreenshare: (audioOnly?: boolean) => Promise<void>;
  disableScreenshare: () => Promise<void>;
  localLoopbackStream: any;
  createOffer: (type: "audio" | "stream", userId?: string) => Promise<void>;
  enableLoopback(audioOnly: boolean): Promise<any>;
  disableLoopback(): void;
}

/**
 * @public
 *
 * Data specification for {@link AgoraComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface AgoraComponentData extends Component3DData {
  type: "agora";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
}

export declare namespace Ai {
  export interface BaseType {
    optional?: boolean;
    desc?: string;
  }
  export interface StringType extends BaseType {
    type: "string";
    min?: number;
    max?: number;
    email?: boolean;
    url?: boolean;
  }
  export interface NumberType extends BaseType {
    type: "number";
    min?: number;
    max?: number;
    int?: boolean;
  }
  export interface BooleanType extends BaseType {
    type: "boolean";
  }
  export interface ArrayType extends BaseType {
    type: "array";
    element: AiType;
  }
  export interface ObjectType extends BaseType {
    type: "object";
    shape: Record<string, AiType>;
  }
  export interface EnumType extends BaseType {
    type: "enum";
    values: [string, ...string[]];
  }
  export interface UnionType extends BaseType {
    type: "union";
    options: [AiType, AiType, ...AiType[]];
  }
  export type AiType =
    | StringType
    | NumberType
    | BooleanType
    | ArrayType
    | ObjectType
    | EnumType
    | UnionType;
  export interface AiTool {
    description: string;
    parameters: Record<string, AiType>;
    execute: (...args: any[]) => any;
  }
  export interface SystemMessage {
    role: "system";
    content: string;
  }
  export interface UserMessage {
    role: "user";
    content: string;
  }
  export interface AssistantMessage {
    role: "assistant";
    content: string | Array<TextPart | ToolCallPart>;
  }
  export interface TextPart {
    type: "text";
    text: string;
  }
  export interface ToolCallPart {
    type: "tool-call";
    toolCallId: string;
    toolName: string;
    args: any;
  }
  export interface ToolResultPart {
    type: "tool-result";
    toolCallId: string;
    toolName: string;
    result: unknown;
    isError?: boolean;
  }
  export interface ToolMessage {
    role: "tool";
    content: Array<ToolResultPart>;
  }
  export type Message = UserMessage | AssistantMessage | ToolMessage;
  export interface AiEmbedOptions {
    model: any;
    value: any;
    values: any[];
    maxRetries?: number;
    headers?: Record<string, string>;
  }
  export interface AiGenOptions {
    model?: string;
    system?: string;
    prompt?: string;
    messages?: any[];
    temperature?: number;
    topP?: number;
    topK?: number;
    presencePenalty?: number;
    frequencyPenalty?: number;
    seed?: number;
    maxTokens?: number;
    maxRetries?: number;
    [key: string]: any;
  }
  export interface AiGenObjectOptions extends AiGenOptions {
    schema: ObjectType;
  }
  export type FinishReason =
    | "stop"
    | "length"
    | "content-filter"
    | "tool-calls"
    | "error"
    | "other"
    | "unknown";
  export interface GenTextResponse {
    text: string;
    toolCalls: Array<ToolCallPart>;
    finishReason: FinishReason;
  }
  export function generateText(
    opts: Ai.AiGenOptions
  ): Promise<Ai.GenTextResponse>;
  export interface GenObjectResponse {
    object: unknown;
  }
  export function generateObject(opts: AiGenOptions): Promise<any>;
  export function embed(opts: AiEmbedOptions): Promise<any>;
  export function embedMany(opts: AiEmbedOptions): Promise<any>;
  {
  }
}

export declare const Alert: {
  error: (title: string, message: string) => Promise<void>;
};

export declare interface AnimationParam extends AbstractParam<string> {
  type?: "animation";
}

declare type AnyMutArray<T> = T[] | readonly T[];

export declare interface ArrayParam<T = any> extends AbstractParam<Array<T>> {
  type?: "array";
  itemParam?: AbstractParam;
  readonly?: boolean;
}

declare const atlasInputs: string[];

/**
 * @public
 *
 * Audio component, used to play audio in the game
 *
 * See {@link AudioComponentData} for the data schema used to create an audio component
 */
export declare class AudioComponent extends Component3D<AudioComponentData> {
  _audio: HTMLAudioElement;
  private _posAudio;
  private _loader;
  private _isPlaying;
  private _disposers;
  protected init(): Promise<void>;
  protected _updateAutoPlay(value: boolean): void;
  private _updateAudio;
  onDataChange(opts: DataChangeOpts<AudioComponentData>): void;
  protected dispose(): void;
  /*****************************************************************
   *                      Public API
   *****************************************************************/
  /**
   * play the audio
   */
  play(): void;
  /**
   * pause the audio
   */
  pause(): void;
  /**
   * stop the audio, this will reset the audio to the beginning
   */
  stop(): void;
  /**
   * Returns true if the audio is playing
   */
  get isPlaying(): boolean;
  /**
   * @deprecated, use audioType "ambient" instead
   */
  get ambient(): boolean;
  /**
   * @deprecated, use audioType "ambient" instead
   */
  set ambient(value: boolean);
  /**
   * Whether the audio should start playing automatically. Defaults to false
   */
  autoPlay: boolean;
  /**
   * Volume of the audio, from 0 to 1. Defaults to 1
   */
  volume: number;
  /**
   * weather the audio is used to play a background music. Defaults to false
   */
  audioType: any;
  audioRange: number;
  /**
   * Whether the audio should loop. Defaults to false
   */
  loop: boolean;
  /**
   * audio playback rate. Defaults to 1
   */
  playbackRate: number;
  get audio(): HTMLAudioElement;
}

/**
 * @public
 *
 * Data for the {@link AudioComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface AudioComponentData extends Component3DData {
  /**
   * Type of the component
   */
  type: "audio";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * url of the audio file
   */
  url: string;

  /**
   * Position of the audio in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the audio in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the audio in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Volume of the audio, from 0 to 1. Defaults to 1
   */
  volume?: number;
  /**
   * @deprecated use audioType instead
   * weather the audio is used to play a background music. Defaults to false
   */
  ambient?: boolean;
  /**
   * Type of the audio. Defaults to "ambient"
   *
   * - ambient: volume stays constant; used for background music
   * - spatial: volume plays only within a given radius. Decreases with distance;
   */
  audioType?: "ambient" | "spatial";
  audioRange?: number;
  /**
   * Whether the audio should start playing automatically. Defaults to false
   */
  autoPlay: false;
  /**
   * Whether the audio should loop. Defaults to false
   */
  loop: false;
  /**
   * audio playback rate. Defaults to 1
   */
  playbackRate?: number;
}

declare class AudioManager {
  private _container;
  _sources: SourceData[];
  _sourcesById: Record<string, SourceData>;
  _active: boolean;
  _interacted: boolean;
  _disposers: (() => void)[];
  _settingNeedsUpdate: boolean;
  constructor(_container: ComponentManager);
  private _addEvents;
  private _removeEvents;
  private _onUpdate;
  private _updateMuted;
  private _updateVolume;
  addAudioSource(
    component: Component3D,
    audioSource: AudioSource,
    select?: () => AudioTypeData
  ): void;
  removeAudioSource(component: Component3D): void;
  dispose(): void;
}

/**
 * This class ensures that only one of the registered audio sources is playing at a time.
 * It uses the currentLookAtComponent to determine which audio source to play.
 */
declare interface AudioSource {
  muted: boolean;
  volume: number;
}

declare interface AudioTypeData {
  audioType?: "lookat" | "spatial" | "ambient";
  volume?: number;
  muted?: boolean;
}

declare class Augmented {
  _aOpts?: EventEmitterOpts;
  private _cbs;
  private _currentEmit;
  private _pendingOns;
  private _pendingOffs;
  static globalEmitter: Augmented;
  constructor(_aOpts?: EventEmitterOpts);
  on(type: string, callback: Listener): void;
  once(type: string, callback: Listener): void;
  off(type: string, callback: Listener): void;
  emit(type: string, ...args: any[]): void;
  emitError(
    err: Error,
    opts?: {
      scope: "engine" | "script";
      data?: any;
      script?: any;
    }
  ): void;
  private _errorCbs;
  onError(cb: Listener): void;
  offError(cb: Listener): void;
  _handleRejection: (error: any) => void;
  _emitError(payload: any): void;

  removeAllListeners(type: string): void;
  removeAllListeners(): void;
  hasListeners(type: string): boolean;
  listenerCount(type: string): number;
  getEventCount(): number;
  dispose(): void;
}

declare class AugmentedGroup extends Group {
  protected $emitter: Augmented;
  constructor();
  hasListeners(type: string): boolean;
  on(type: string, callback: (...args: any[]) => unknown): void;
  once(type: string, callback: (...args: any[]) => unknown): void;
  off(type: string, callback: (...args: any[]) => unknown): void;
  emit(type: string, ...args: any[]): void;
  _emitError(err: any, opts?: any): void;
}

declare class AugmentedObject extends Object3D {
  protected $emitter: Augmented;
  constructor();
  hasListeners(type: string): boolean;
  on(type: string, callback: (...args: any[]) => unknown): () => void;
  once(type: string, callback: (...args: any[]) => unknown): void;
  off(type: string, callback: (...args: any[]) => unknown): void;
  emit(type: string, ...args: any[]): void;
}

/**
 * @public
 *
 * Avatar component, used to display VRM avatars in the game (for more info on VRM files, see {@link https://vrm.dev/en/vrm/vrm_about/ | VRM site})
 *
 * See {@link AvatarComponentData} for the data schema used to create an audio component
 */
export declare class AvatarComponent extends Component3D<AvatarComponentData> {
  private _modeChangeList;
  private _updateVRMPromise;
  private _avatar;
  private _visible;
  private _updateEvent;
  private _factory;
  private _currentUrl;

  protected init(): Promise<void>;
  private _getUrl;

  private _disposeUserAvatar$;
  private _setUserAvatar$;
  private _onSetUserAvatarChange;
  private _subscribeToUserAvatar;
  private _updateVrmUrl;
  getTransformData(): any;
  set avatarScale(scale: number);
  /**
   * get the scale of the avatar vrm
   */
  get avatarScale(): number;
  private _updateSettings;
  private _legacy_idx_to_name;
  private _setAnimation;
  play(name: string, opts: any): void;
  stop(
    name: string,
    opts: {
      fadeOut?: number;
    }
  ): void;
  get activeAnimations(): {};
  stopAll(): void;
  getBone(id: Bone): Object3D;
  onMixerUpdate(f: Function): () => any;
  /**
   * See {@link https://threejs.org/docs/index.html?q=objec#api/en/core/Object3D.visible | Threejs doc}
   */
  set visible(value: boolean);
  private _onUpdate;
  private _addEvents;
  private _removeEvents;
  /**
   * See {@link https://threejs.org/docs/index.html?q=objec#api/en/core/Object3D.visible | Threejs doc}
   */
  get visible(): boolean;
  protected _getBBoxImp(target: Box3): Box3;
  getRawBBox(target?: Box3): Box3;

  protected _onCreateCollisionMesh(): Mesh<
    BoxGeometry,
    MeshBasicMaterial,
    Object3DEventMap
  >;
  getDimensions(): Vector3;
  _renderMode: any;
  /**
   * Updates the vrm displayed by the avatar component
   */
  updateVRM(url: any, data?: any): Promise<void>;
  /**
   * @Updates the render mode of the avatar component
   */
  updateRenderMode(mode: any): Promise<void>;
  _plugins: any;
  /**
   * @Updates the plugins of the avatar component
   */
  updatePlugins(plugins: any): Promise<void>;
  /**
   * @Updates the render mode of the avatar component
   */
  updateAnimationMode(mode: any): Promise<void>;
  /**
   * @deprecated use {@link url} instead
   *
   * get the url of the vrm displayed by the avatar component
   */
  get vrmUrl(): string;
  private _animationListUpdated;
  protected dispose(): void;
  private fetchAddedComponents;
  private retrieveAddedComponents;
  /*****************************************************************
   *                      Public API
   *****************************************************************/
  /**
   * url of the vrm file
   */
  get url(): string;
  /**
   * url of the vrm file
   */
  set url(value: string);
  /**
   * text to display on top the avatar. Defaults to "".
   */
  text: string;
  /**
   * animation to play on the avatar by default when it loads.
   */
  animation: string;
  /**
   * Model render mode. Defaults to "default"
   */
  renderMode: RenderMode;
  /**
   * Use CPU Animation
   */
  useMixer: boolean;
  /**
   * Set the opacity of the avatar default is 1
   */
  opacity: number;
  /**
   * Do not use LOD optimization
   */
  ignoreLOD: boolean;
  /**
   * url of a picture to display on top the avatar.
   */
  picture: string;
}

/**
 * @public
 *
 * Data specification for {@link AvatarComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface AvatarComponentData extends Component3DData {
  type: "avatar";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * url of the vrm file
   */
  url: string;
  /**
   * url of the vrm file
   */
  urlCompressed?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;

  /**
   * url of a picture to display on top the avatar.
   */
  picture?: string;
  /**
   * text to display on top the avatar. Defaults to "".
   */
  text?: string;
  /**
   * image of the avatar.
   */
  image?: string;

  /**
   * animation to play on the avatar by default when it loads.
   */
  animation?: string;
  /**
   * Model render mode. Defaults to "default"
   */
  renderMode?: RenderMode;
  /**
   * Plugins to use with the avatar. Defaults to []
   */
  plugins?: string[];
  /**
   * Use CPU Animation
   */
  useMixer?: boolean;
  /**
   * Set the opacity of the avatar default is 1
   */
  opacity: number;
  /**
   * Do not use LOD optimization
   */
  ignoreLOD?: boolean;
}

/**
 * @public
 *
 * The background component is used to set the background of the game. You can set the
 * background appareance from the studio.
 *
 * At runtime right now you can only change the color of the background, but we plan to
 * add more options in the future.
 *
 * Bakckground is a singleton, so you can only have one background in the game.
 */
export declare class BackgroundComponent extends Component3D {
  #private;

  /**
   * Change the background to a color
   */
  setColor(val: any): void;

  /**
   * public api
   */
  setAsColor(color: string): void;
  setAsSky(options: SkyOpts): void;
  setAsImage(image: string, format?: ".jpg" | ".jpeg" | ".png" | ".hdr"): void;
}

declare class BackgroundEditor extends Component3DEditor<Component3D<any>> {
  _currentTab: BackgroundOpt;
  get currentTab(): BackgroundOpt;
  set currentTab(value: BackgroundOpt);
  get customUpload(): any;
  set customUpload(value: any);
  gui: any;
  getGUI(): any;
}

declare type BackgroundMesh = Mesh & {
  getRaw: () => Texture | Color_2;
  backgroundType: "color" | "image" | "sky";
  updateOpts?: (opts: any) => void;
};

declare type BackgroundOpt = "Color" | "Image" | "Shader";

declare type BackgroundOpts =
  | {
      type: "color";
      color: string;
    }
  | {
      type: "image";
      options: {
        format: string;
        image: string;
        path: string;
      };
    }
  | {
      type: "sky";
      options: SkyOpts;
    }
  | {
      type: "backdrop";
      options: any;
    };

declare interface BaseColliderOpts {
  position?: {
    x: number;
    y: number;
    z: number;
  };
  /**
   * The mass of the rigid body
   */
  mass?: number;
  /**
   * The friction of the rigid body
   */
  friction?: number;
  /**
   * The restitution of the rigid body
   */
  restitution?: number;
  /**
   * The density of the rigid body
   */
  density?: number;
  /**
   * If this is true, the collider will be a sensor
   */
  isSensor?: boolean;
  groups?: number;
}

declare interface BaseDataOpts<T> {
  schema?: DataSchema;
  ownData?: Partial<T>;
  nested?: boolean;
}

/**
 * @public
 *
 * Base interface for all collision/sensor events.
 */
export declare interface BaseIntersectionEvent {
  /**
   * The component where the event was triggered
   */
  me: Component3D;
  /**
   * The other component involved in the collision
   */
  other: Component3D;
  /**
   * The frame number when the collision happened
   */
  frame: number;
}

/**
 * @public
 *
 * Base interface for all collision/sensor events.
 */
declare interface BaseIntersectionEvent_2 {
  /**
   * The component where the event was triggered
   */
  me: Component3D;
  /**
   * The other component involved in the collision
   */
  other: Component3D;
  /**
   * The frame number when the collision happened
   */
  frame: number;
}

declare interface BaseMaterialData {
  transparent: boolean;
  alphaMap?: TextureData;
  map?: TextureData;
}

declare interface BaseRoomState extends Schema {
  snapshotId: string;
  timestamp: number;
  settings: {
    tickRate: number;
    patchRate: number;
    reconnectTimeout: number;
  };
  players: MapSchema<PlayerSchema>;
  addPlayer(player: PlayerData): void;
  removePlayer(sessionId: string): void;
}

declare class Basic extends MeshBasicMaterial_2 {}

/**
 * A controller class that can be used to control kinematic rigid bodies.
 * This is a convenient class that wraps the {@link https://rapier.rs/docs/user_guides/javascript/character_controller | Rapier's Character controller } class.
 */
export declare class BasicCharacterController {
  private _rapierController;
  private _rapierWorld;
  private _opts;
  disableEvents: boolean;
  constructor(opts?: Partial<CharacterOptions>);
  _firstFrame: boolean;
  _logs: any[];
  _logVec3(v: any): any[];
  update(
    object: Component3D,
    velocity: Vector3,
    dt: number,
    seqId: number
  ): CCObjectState;
  castCallback(
    collider: any,
    now: any,
    collision: any,
    delta: any,
    playerCollider: any
  ): void;
  castSensors(rigidbody: any, rpos: any, collider: any): any[];
  _updateCollisionState(
    collider: Collider_3,
    playerCollider: Collider_2,
    collision: CharacterCollision
  ): void;
  _updateIntersectionState(
    collider: Collider_3,
    playerCollider: Collider_2
  ): void;
}

/**
 * @public
 */
declare interface BasicMaterialData extends BaseMaterialData {
  type: "basic";
}

/**
 * Impl. notes:
 *
 *  In non edit mode, we optimize by using directly the underlying instanced mesh if present
 *
 *  In edit mode, we use use component duplicated instances to maintain reactivity with the editor data, gizmos, etc.
 */
/**
 * @public
 *
 * A component to display birds in the game.
 *
 * See {@link BatchComponentData} for the data schema used to create a bird component
 */
declare class BatchComponent extends Component3D<BatchComponentData> {
  _baseInstancedWrapper: InstancedMeshWrapper;

  /**
   * In non edit mode, we optimize by using directly the underlying instanced mesh if present
   */
  private _wrappers;

  private _colliderOpts;

  private _computeWorldTransforms;
  onDataChange(opts: DataChangeOpts<BatchComponentData>): Promise<void>;
  setPreset(val: any): Promise<void>;
  _getCollisionInfo(): any[];

  private _syncInstances;
  private _dataToTransform;
  private _collision;
}

/**
 * @public
 *
 * Data specification for {@link BatchComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface BatchComponentData extends Component3DData {
  type: "batch";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * The position data of the batch
   */
  positions: number[];
  /**
   * The rotation data of the batch
   */
  rotations: number[];
  /**
   * The scale data of the batch
   */
  scales: number[];
  /**
   * The bounding box of the batch
   */
  preset: any;
  /**
   * Use an octree sorter if possible
   * Toggling this one makes the batch use an octree sorter and makes the objects rendered staticly
   */
  useOctreeSorting: boolean;
  /**
   * Display debug live mode
   */
  debug: boolean;
}

declare class BatchComponentEditor extends Component3DEditor<BatchComponent> {
  gui: {
    type: string;
    children: {
      Preset: {
        type: string;
        label: string;
        children: {
          Preset: {
            type: string;
            label: string;
            format: {
              parse: (id: any) => any;
              format(data: any): any;
            };
            items: () => any[];
            nullable: boolean;
            value: (string | BatchComponentData_2)[];
            onChange: (val: any) => void;
          };
          useOctree: {
            visible: () => boolean;
            type: string;
            label: string;
            value: (string | BatchComponentData_2)[];
          };
          displayDebug: {
            visible: () => boolean;
            type: string;
            label: string;
            value: (string | BatchComponentData_2)[];
          };
        };
      };
    };
  };
  private _canUseOctree;
  _prevColliderData: any;
  init(): void;
  duplicateBase(): Promise<Component3D<Component3DData_3>>;
  _selectionMesh: any;
  getSelectionMesh(): any;
  getGUI(): {
    type: string;
    children: {
      Preset: {
        type: string;
        label: string;
        children: {
          Preset: {
            type: string;
            label: string;
            format: {
              parse: (id: any) => any;
              format(data: any): any;
            };
            items: () => any[];
            nullable: boolean;
            value: (string | BatchComponentData_2)[];
            onChange: (val: any) => void;
          };
          useOctree: {
            visible: () => boolean;
            type: string;
            label: string;
            value: (string | BatchComponentData_2)[];
          };
          displayDebug: {
            visible: () => boolean;
            type: string;
            label: string;
            value: (string | BatchComponentData_2)[];
          };
        };
      };
    };
  };
  _batchStarted: boolean;
  onBatchStart(opts: any): void;
  onBatchAdd(data?: {
    position?: number[];
    rotation?: number[];
    scale?: number[];
    boundingBox?: Box3;
  }): Promise<Component3D<Component3DData_3>>;
  onBatchRemove(item: any): Promise<void>;
  onBatchEnd(opts: any): void;
  private _getInstancesData;
  getDetailMeshes(): Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  >[];
  _currentDetailMesh: Component3D;
  _setCurrentDetailMesh(mesh: Component3D): void;
  onDragStart: () => void;
  onDrag: () => void;
  onDragEnd: () => void;
  onDetailMeshClicked(mesh: Mesh, intersect: Intersection<Mesh>): void;
  onDetailMeshMouseEnter(mesh: Mesh, intersect: Intersection<Mesh>): void;
  onDetailMeshMouseLeave(mesh: Mesh): void;
  onSelectedChanged(b: any): void;
  dispose(): void;
}

/**
 * @public
 * @deprecated use ScriptBehavior instead https://docs.oncyber.io/behaviors
 *
 * Defines a script as a behavior that can be attached to components in the world to add functionality
 * You can use Behaviors to add a variety of functionality to components like adding
 * Examples include:
 *
 *  - Animating a component
 *  - Make the component follow the player
 *  - Attack the player when they get close
 *
 * You can annotate the script class properties using `@Param` to make them editable in the studio
 */
export declare function Behavior(options: BehaviorOptions): ClassDecorator;

export declare interface BehaviorOptions {
  title?: string;
  description?: string;
  tip?: string;
  image?: string;
  imageXL?: string;
  server?: boolean;
}

declare type BigIntify<T> = T extends number
  ? BigInt
  : {
      [key in keyof T]: BigIntify<T[key]>;
    };

/**
 * @public
 *
 * A component to display birds in the game.
 *
 * See {@link BirdComponentData} for the data schema used to create a bird component
 */
export declare class BirdComponent extends Component3D<BirdComponentData> {
  private _factory;
  private _bird;

  protected init(): Promise<void>;
  private _update3D;

  protected _onCreateCollisionMesh(): any;
  protected dispose(): void;
}

/**
 * @public
 *
 * Data specification for {@link BirdComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface BirdComponentData extends Component3DData {
  type: "bird";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Color of the component. Defaults to 0xffffff
   */
  color?: number;
  /**
   * Opacity of the component, from 0 to 1. Defaults to 1
   */
  opacity?: number;
}

declare class BirdFactory {
  constructor(factoryOptions?: {});
  factoryOptions: {};
  _init: boolean;
  _instances: {};
  preload(): Promise<void>;
  geometry: Geometry;
  texture: any;
  get(parent: any, data?: {}): Promise<default_3>;
  _isInit: boolean;
  initialisation: Promise<void>;
  mesh: InstancedPipelineMesh;
  onCollision(collision: any): void;
  buildCollisionMesh: () => Mesh<Geometry, MeshBasicMaterial, Object3DEventMap>;
  _material: MeshBasicMaterial;
  _collisionMesh: Mesh<Geometry, MeshBasicMaterial, Object3DEventMap>;
  disposeAll(): void;
}

/**
 * @public
 *
 * A component to display birds in the game.
 *
 * See {@link BirdStaticComponentData} for the data schema used to create a bird component
 */
declare class BirdStaticComponent extends Component3D<BirdStaticComponentData> {}

declare class BirdStaticComponentEditor extends Component3DEditor<BirdStaticComponent> {
  gui: {
    type: string;
    children: {
      transform: {
        type: string;
        label: string;
        children: any;
      };
      colorOpacity: {
        type: string;
        label: string;
        children: {
          color: {
            type: string;
            value: any[];
          };
          opacity: {
            type: string;
            value: any[];
            min: number;
            max: number;
            step: number;
          };
        };
      };
    };
  };

  getSelectionMesh(): any;
  get size(): any;
  set size(value: any);
  getGUI(): {
    type: string;
    children: {
      transform: {
        type: string;
        label: string;
        children: any;
      };
      colorOpacity: {
        type: string;
        label: string;
        children: {
          color: {
            type: string;
            value: any[];
          };
          opacity: {
            type: string;
            value: any[];
            min: number;
            max: number;
            step: number;
          };
        };
      };
    };
  };
}

declare class BloomOpts {
  threshold: number;
  smoothing: number;
  intensity: number;
  radius: number;
  color: string;
}

/**
 * @public
 */
export declare type Bone = (typeof Bones)[number];

/**
 * @public
 */
export declare const Bones: readonly [
  "chest",
  "head",
  "hips",
  "jaw",
  "leftEye",
  "leftFoot",
  "leftHand",
  "leftIndexDistal",
  "leftIndexIntermediate",
  "leftIndexProximal",
  "leftLittleDistal",
  "leftLittleIntermediate",
  "leftLittleProximal",
  "leftLowerArm",
  "leftLowerLeg",
  "leftMiddleDistal",
  "leftMiddleIntermediate",
  "leftMiddleProximal",
  "leftRingDistal",
  "leftRingIntermediate",
  "leftRingProximal",
  "leftShoulder",
  "leftThumbDistal",
  "leftThumbMetacarpal",
  "leftThumbProximal",
  "leftToes",
  "leftUpperArm",
  "leftUpperLeg",
  "neck",
  "rightEye",
  "rightFoot",
  "rightHand",
  "rightIndexDistal",
  "rightIndexIntermediate",
  "rightIndexProximal",
  "rightLittleDistal",
  "rightLittleIntermediate",
  "rightLittleProximal",
  "rightLowerArm",
  "rightLowerLeg",
  "rightMiddleDistal",
  "rightMiddleIntermediate",
  "rightMiddleProximal",
  "rightRingDistal",
  "rightRingIntermediate",
  "rightRingProximal",
  "rightShoulder",
  "rightThumbDistal",
  "rightThumbMetacarpal",
  "rightThumbProximal",
  "rightToes",
  "rightUpperArm",
  "rightUpperLeg",
  "spine",
  "upperChest"
];

export declare interface BooleanParam extends AbstractParam<boolean> {
  type?: "boolean" | "checkbox";
}

declare interface BorderOpts {
  borderSize: number;
  borderColor: number;
  borderOpacity: number;
  borderDepth: number;
  hasBorder: boolean;
  scaleRatio: number;
}

declare type BorderWrapper = InstancedMeshWrapper & {
  borderOpts: Partial<BorderOpts>;
};

/**
 * @public
 *
 * Params for the {@link MeshComponentData.geometry.boxParams} property
 *
 * See {@link https://threejs.org/docs/#api/en/geometries/BoxGeometry | BoxGeometry}
 */
export declare interface BoxParamsData {
  width: number;
  height: number;
  depth: number;
}

declare class BufferedInt32Array {
  constructor(initialCapacity?: number);
  growCapacity: number;
  buffer: Int32Array;
  length: number;
  resize(minCapacity: any): void;
  push(...items: any[]): number;
  toArray(): Int32Array;
  splice(start: any, deleteCount: any, ...items: any[]): Int32Array;
  shift(): number;
  indexOf(searchElement: any, fromIndex?: number): number;
  getCapacity(): number;
}

/**
 * @public
 *
 * A component to display bullets in the game. Once created, the bullet will move in the given direction at the
 * given speed.
 *
 * See {@link BulletComponentData} for the data schema used to create a bullet component
 */
export declare class BulletComponent extends Component3D<BulletComponentData> {}

/**
 * @public
 *
 * Data specification for {@link BulletComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface BulletComponentData extends Component3DData {
  type: "bullet";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Direction of the bullet path. Defaults to {x: 0, y: 0, z: 1}
   */
  direction?: XYZ;
  /**
   * Speed of the bullet. Defaults to 0.1
   */
  speed?: number;
}

declare class BulletFactory {
  isInit: boolean;
  _init: boolean;
  _instances: any[];
  baseBullet: any;
  preload(): Promise<void>;
  get(parent: any, data?: {}): Promise<BulletWrapper>;
  _isInit: boolean;
  initialisation: Promise<void>;
  mesh: InstancedPipelineMesh;
  onCollision(collision: any): void;
  buildCollisionMesh: () => Mesh<any, MeshBasicMaterial, Object3DEventMap>;
  _material: MeshBasicMaterial;
  _collisionMesh: Mesh<any, MeshBasicMaterial, Object3DEventMap>;
  dispose(): void;
  disposeAll(): void;
}

declare class BulletWrapper {
  constructor(mesh: any, data?: {});
  mesh: any;
  bullets: any[];
  scale: Vector3;
  speed: any;
  spawnPosition: any;
  spawnRotation: any;
  spawnDirection: any;
  spawnCondition: any;
  onHitCallBack: any;
  fireRate: any;
  fireSpeed: any;
  fireDistance: any;
  timer: number;
  updateEvent: any;
  update(d: any): void;
  spawn(target: any): void;
  disposeBullet(bullet: any): void;
  dispose(): void;
}

/**
 * @public
 *
 * A component to cache in a plain color the entire screen.
 *
 * See {@link CacheData} for the data schema used to create a bullet component
 */
declare class CacheComponent extends Component3D<CacheComponentData> {
  private _factory;

  initCache(data: any): void;
  update3D(): void;

  activate(opacity?: number): Promise<unknown>;
  desactivate(): void;
  update(): void;
  renderOnTop(): void;
  addEvents(): void;
  removeEvents(): void;
}

/**
 * @public
 *
 * Data specification for {@link CacheComponentData}, see {@link ComponentManager.create} on how to create a component
 */
declare interface CacheComponentData extends Component3DData {
  type: "camera";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
}

declare type Callback = () => void;

declare type Callback_2 = () => void;

/**
 * @public
 *
 * Current camera instance, cf {@link MainCamera} for more info
 */
export declare let Camera: MainCamera;

/**
 * @public
 *
 * A component to create a camera in the 3D space
 *
 * See {@link CameraComponentData} for the data schema used to create a camera component
 */
declare class CameraComponent extends Component3D<CameraComponentData> {
  private _factory;

  private _currentTimer;
  private updateEvent;
  private _splineTween;
  private _splineProgress;
  private _currentPosition;
  private _currentLookAt;
  private _previousProgress;

  _currentLookAtSpline: SplineComponent;

  setSplineCameraProgression(progress: number):
    | {
        position: Vector3;
        rotation: any;
        target: Vector3;
      }
    | {
        position: Vector3;
        rotation: Euler;
        target?: undefined;
      };
  _lookAt(object: any, from: any, to: any): void;
  setSplineCameraProgressionAtIndex(index: number):
    | {
        position: Vector3;
        rotation: any;
        target: Vector3;
      }
    | {
        position: Vector3;
        rotation: Euler;
        target?: undefined;
      };
  playSpline({
    from,
    to,
    duration,
  }?: {
    from?: number;
    to?: number;
    duration?: number;
  }): void;
  getSplineIndexCount(): number;
  stopSpline(): void;
  /**
   * set the preview ratio of the camera
   */
  set previewRatio(ratio: any);
  get previewRatio(): any;
  /**
   * set the preview width size of the camera
   */
  set previewSize(size: any);
  get previewSize(): any;
  set fov(val: any);
  get fov(): any;

  get togglePreview(): boolean;
  set togglePreview(value: boolean);
  /**
   * set coordinates XY to lock the preview window to a specific area of the screen { x: 0, y: 0 }, from 0 to 1
   */
  set lockMode(val: any);
  get lockMode(): any;

  onSelectedChanged(b: any): void;
  getData: () => {
    position: Vector3;
    rotation: any;
    target: Vector3;
    fov: any;
  };
}

/**
 * @public
 *
 * Data specification for {@link CameraComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface CameraComponentData extends Component3DData {
  type: "camera";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Display ratio of the preview window
   */
  previewRatio: number;
  /**
   * size of the width of the preview window
   */
  previewSize: number;
  /**
   * Lock the preview window to a specific area of the screen { x: 0, y: 0 }, from 0 to 1
   */
  lockMode?: XY;
  /**
   * Select behavior of the camera
   */
  behavior: "free" | "splines" | "thirdperson" | "firstperson";
  /**
   * Select position spline
   */
  positionSpline: string;
  /**
   * Select look at spline
   */
  lookatSpline: string;
  /**
   * Spline progression of the camera [ 0 to 1 ]
   */
  splineProgression: number;
  /**
   * Spline progression of the camera [ 0 to 1 ]
   */
  splineDuration: number;
  /**
   * Natural Movement
   */
  naturalMovement: boolean;
  /**
   * Natural Movement force
   */
  naturalMovementForce: number;
  /**
   * FOV
   */
  fov: number;
}

declare class CameraEditor extends Component3DEditor<CameraComponent> {
  private _currentSelectSplinePoint;
  private _selectedDistance;
  gui: any;
  selectionMesh: any;
  getSelectionMesh(): any;
  getGUI(): any;
  _toggleHelper: boolean;
  get toggleHelper(): boolean;
  set toggleHelper(value: boolean);
  _togglePreview: boolean;
  get togglePreview(): boolean;
  set togglePreview(value: boolean);
  onSelectedChanged(isSelected: boolean): void;
  _addNewPointAtIndex(): void;
  alignViewWithSelectedPoint(): void;
  setPointFromCurrentView(index?: any): void;
  deleteSelectedPoint(): void;
}

export declare const CANVAS: HTMLCanvasElement;

declare interface CapsuleColliderOpts extends BaseColliderOpts {
  type: "CAPSULE";
  radius: number;
  height: number;
}

declare interface CCObject extends Object3D {
  collider: Collider_2;
}

declare interface CCObjectState {
  onFloor: boolean;
  yVelocity: number;
  collidesWith: CharacterCollision[];
}

declare interface CCObjectState_2 {
  onFloor: boolean;
  yVelocity: number;
}

/**
 * @public
 *
 * A Game client instance is used to join a game room on the server
 */
export declare class CGameClient<
  S extends BaseRoomState = any,
  CM = any,
  RM = any
> {
  private _room;

  /**
   * Used to join a game room on the server
   * Returns a {@link GameRoom} instance
   */
  join(opts: JoinRoomOpts): GameRoom<S, CM, RM>;
  private _joinOpts;
  private _connect;
  get room(): GameRoom<S, CM, RM>;
  reconnect(): void;
  get synced(): boolean;
  get state(): any;
  get status(): ConnectionStatus;
  /**
   * @deprecated use send(type: string | number, data: any) instead
   */
  send(message: any): any;
  send(type: string | number, data: any): any;
  /**
   * @deprecated use onMessage(type: string | number, cb: (data: any) => void) instead
   */
  onMessage(cb: (message: any) => void): any;
  onMessage(type: string | number, cb: (data: any) => void): any;
  onState(cb: (state: S) => void): void;
  onStatusChange(cb: (status: ConnectionStatus) => void): void;
  onDisconnect(cb: () => void): void;
  leave(): void;
}

/** @public */
declare type Chain = "base" | "bsc" | "polygon" | SourceChain | Testnet;

declare type ChangeHandlers<T extends {}> = {
  [K in keyof T]?: (value: T[K]) => void | Promise<void>;
};

declare type CharacterOptions = typeof DEFAULT_CC_OPTIONS;

declare type CharacterOptions_2 = typeof DEFAULT_CC_OPTIONS_2;

declare class CircleFactory {
  isInit: boolean;
  _init: boolean;
  _instances: {};
  preload(): Promise<void>;
  geometry: CircleGeometry;
  get(parent: any, data?: {}): Promise<default_3>;
  _isInit: boolean;
  initialisation: Promise<void>;
  mesh: InstancedPipelineMesh;
  onCollision(collision: any): void;
  buildCollisionMesh: () => Mesh<
    CircleGeometry,
    MeshBasicMaterial,
    Object3DEventMap
  >;
  _material: MeshBasicMaterial;
  _collisionMesh: Mesh<CircleGeometry, MeshBasicMaterial, Object3DEventMap>;
  disposeAll(): void;
}

export declare class ClientProvider extends JsonRpcApiProvider {
  #private;
  constructor(web3: Web3Api);
  _send(payload: any): Promise<
    | {
        id: any;
        result: any;
      }[]
    | {
        id: any;
        error: {
          code: any;
          data: any;
          message: any;
        };
      }[]
  >;
}

/**
 * @public
 *
 * A component to display clouds in the game.
 *
 * See {@link CloudComponentData} for the data schema used to create a cloud component
 */
export declare class CloudComponent extends Component3D<CloudComponentData> {
  private _factory;
  private _cloud;

  protected init(): Promise<void>;
  private _update3D;

  getInstanceWrapper(): any;

  /*****************************************************************
   *                      Public API
   *****************************************************************/
  /**
   * Opcaity of the component, from 0 to 1. Defaults to 1
   */
  opacity: number;
  /**
   * Type of the cloud, use a number from 0 to 3 to choose the cloud type. Defaults to 0
   */
  atlas: number;
}

/**
 * @public
 *
 * Data specification for {@link CloudComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface CloudComponentData extends Component3DData {
  type: "cloud";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Opcaity of the component, from 0 to 1. Defaults to 1
   */
  opacity?: number;
  /**
   * Type of the cloud, use a number from 0 to 3 to choose the cloud type. Defaults to 0
   */
  atlas?: number;
}

/**
 * @public
 *
 * This class encapsulates the physics entities attached to a component (rigid body, collider).
 *
 * it offers some convenience methods to physics properties of the component.
 *
 * For more info on the underlying physics engine, cf {@link https://rapier.rs/docs/ | Rapier docs }
 */
export declare class Collider {
  private engine;

  /**
   * Component's name this collider is attached to
   */
  name: string;
  /**
   * Rapier collider instance, cf {@link https://rapier.rs/docs/user_guides/javascript/colliders/ | Rapier docs } for more info
   */
  _collider: Collider_3;
  /**
   * Collider type, cf {@link https://rapier.rs/docs/user_guides/javascript/colliders/ | Rapier docs } for more info on the meaning of different types
   */
  colliderType: ColliderType;
  /**
   * Rigid body type, cf {@link https://rapier.rs/docs/user_guides/javascript/rigid_bodies/ | Rapier docs } for more info on the meaning of different types
   */
  rigidbodyType: RigidBodyType;
  /**
   * Collider description, cf {@link https://rapier.rs/docs/user_guides/javascript/colliders/ | Rapier docs } for more info
   */
  colliderDesc: ColliderDesc;
  /**
   * Rapier rigid body instance, cf {@link https://rapier.rs/docs/user_guides/javascript/rigid_bodies/ | Rapier docs } for more info
   */
  rigidBody: RigidBody;
  private _isSensor;

  private _enabledTranslation;
  private _enabledRotation;

  /**
   * Returns the component this collider is attached to
   */
  get component(): Component3D;
  get isSensor(): boolean;

  private createColliderDesc;

  private createBody;
  /**
   * Use this to lock the rigidbody's translation on a specific axis
   * cf {@link https://rapier.rs/docs/user_guides/javascript/rigid_bodies/#locking-translationsrotations | Rapier docs } for more info
   *
   * @param axis - axis to lock [x, y, z]
   */
  set enabledTranslation(enabledTranslation: [boolean, boolean, boolean]);
  /**
   * Returns the current translation lock state
   */
  get enabledTranslation(): [boolean, boolean, boolean];
  /**
   * Use this to lock the rigidbody's rotation on a specific axis
   * cf {@link https://rapier.rs/docs/user_guides/javascript/rigid_bodies/#locking-translationsrotations | Rapier docs } for more info
   *
   * @param axis - axis to lock [x, y, z]
   */
  set enabledRotation(enabledRotation: [boolean, boolean, boolean]);
  /**
   * Returns the current rotation lock state
   */
  get enabledRotation(): [boolean, boolean, boolean];
  /**
   * Returns the enabled state of the rigidbody
   */
  get enabled(): boolean;
  /**
   * Use this to enable/disable the rigidbody
   */
  set enabled(enabled: boolean);

  private _fsms;

  private _onSensorEnterEvent;
  private _onSensorExitEvent;
  private _onSensorStayEvent;
}

/**
 * @public
 *
 * This class represents a Collider added to a rigid body of a component.
 *
 * it offers a convenient wrapper around the collider of the underlying physics engine.
 *
 * For more info on the underlying physics engine, cf {@link https://rapier.rs/docs/ | Rapier docs }
 */
declare class Collider_2 {
  private engine;
  private _parent;
  private static _rawCollidersMap;
  static getFromRaw(raw: Collider_3): Collider_2;
  private _rawColliderDesc;
  private _rawCollider;
  private _options;
  private _enabled;
  constructor(
    engine: PhysicsRapierWrapper,
    _colliderOpts: ColliderOpts,
    _parent: RigidBodyWrapper
  );
  private _createCollider;
  _updateCollider(dimensions: any): void;
  private _validateGroups;

  /**
   * Returns the rigid body this collider is attached to
   */
  get parent(): RigidBodyWrapper;
  /**
   * Returns the component this collider belongs to
   */
  get component(): Component3D;
  /**
   * Returns wether the collider is enabled or not
   */
  get enabled(): boolean;
  /**
   * enables or disables the collider
   */
  set enabled(enabled: boolean);
  get raw(): Collider_3;
  /**
   * Returns options used to create this collider
   */
  get options(): ColliderOpts;
  /**
   * Returns the mass of this collider
   */
  get mass(): number;
  /**
   * Sets the mass of this collider
   */
  set mass(mass: number);
  /**
   * Returns the friction coefficient of this collider
   */
  get friction(): number;
  /**
   * Sets the friction coefficient of this collider
   */
  set friction(friction: number);
  /**
   * Returns the restitution coefficient of this collider
   */
  get restitution(): number;
  /**
   * Sets the restitution coefficient of this collider
   */
  set restitution(restitution: number);
  /**
   * Returns wether the collider is a sensor or not
   */
  get isSensor(): boolean;
  /**
   * Sets this collider as a sensor or not
   */
  set isSensor(isSensor: boolean);
  private _wasDisposed;

  private _fsms;

  private _onSensorEnterEvent;
  private _onSensorExitEvent;
  private _onSensorStayEvent;
  /*************************************************************************************************/
  /*************************************************************************************************/
  /*************************************************************************************************/
  /*************************************************************************************************/
  /**
   * Rapier collider instance, cf {@link https://rapier.rs/docs/user_guides/javascript/colliders/ | Rapier docs } for more info
   */
  get _collider(): Collider_3;
  /**
   * Collider type, cf {@link https://rapier.rs/docs/user_guides/javascript/colliders/ | Rapier docs } for more info on the meaning of different types
   */
  get colliderType(): "CAPSULE" | "CUBE" | "MESH" | "SPHERE" | "CYLINDER";
  /**
   * Rigid body type, cf {@link https://rapier.rs/docs/user_guides/javascript/rigid_bodies/ | Rapier docs } for more info on the meaning of different types
   */
  get rigidbodyType(): RigidBodyType_3;
  /**
   * Collider description, cf {@link https://rapier.rs/docs/user_guides/javascript/colliders/ | Rapier docs } for more info
   */
  get colliderDesc(): ColliderDesc;
  /**
   * Rapier rigid body instance, cf {@link https://rapier.rs/docs/user_guides/javascript/rigid_bodies/ | Rapier docs } for more info
   */
  get rigidBody(): RigidBody;
  /**
   * Use this to lock the rigidbody's translation on a specific axis
   * cf {@link https://rapier.rs/docs/user_guides/javascript/rigid_bodies/#locking-translationsrotations | Rapier docs } for more info
   */
  set enabledTranslation(enabledTranslation: [boolean, boolean, boolean]);
  /**
   * Returns the current translation lock state
   */
  get enabledTranslation(): [boolean, boolean, boolean];
  /**
   * Use this to lock the rigidbody's rotation on a specific axis
   * cf {@link https://rapier.rs/docs/user_guides/javascript/rigid_bodies/#locking-translationsrotations | Rapier docs } for more info
   */
  set enabledRotation(enabledRotation: [boolean, boolean, boolean]);
  /**
   * Returns the current rotation lock state
   */
  get enabledRotation(): [boolean, boolean, boolean];
}

declare const COLLIDER_TYPES: {
  readonly CUBE: "CUBE";
  readonly MESH: "MESH";
  readonly SPHERE: "SPHERE";
  readonly CAPSULE: "CAPSULE";
  readonly CYLINDER: "CYLINDER";
};

declare interface ColliderDimensionsMap {
  CUBE: {
    width: number;
    height: number;
    depth: number;
  };
  SPHERE: {
    radius: number;
    center: {
      x: number;
      y: number;
      z: number;
    };
  };
  CAPSULE: {
    radius: number;
    height: number;
    center: {
      x: number;
      y: number;
      z: number;
    };
  };
  CYLINDER: {
    radius: number;
    height: number;
    center: {
      x: number;
      y: number;
      z: number;
    };
  };
  MESH: null;
}

declare type ColliderOpts =
  | CubeColliderOpts
  | SphereColliderOpts
  | CapsuleColliderOpts
  | CylinderColliderOpts
  | MeshColliderOpts;

declare interface ColliderOpts_2 {
  rigidbodyType: keyof typeof RIGIDBODY_TYPES;
  colliderType: keyof typeof COLLIDER_TYPES;
  mass: number;
  friction: number;
  restitution: number;
  isSensor: boolean;
  density: number;
  groups: Array<number>;
  enabledTranslation?: [boolean, boolean, boolean];
  enabledRotation?: [boolean, boolean, boolean];
}

export declare type ColliderType =
  | "CUBE"
  | "MESH"
  | "SPHERE"
  | "CAPSULE"
  | "CYLINDER";

declare type ColliderType_2 =
  | "CUBE"
  | "SPHERE"
  | "CAPSULE"
  | "CYLINDER"
  | "CONE"
  | "MESH";

/**
 * @public
 *
 * Payload for the collision enter event; see {@link {@link Component3D.onCollisionEnter}
 */
export declare interface CollisionEnterEvent extends BaseIntersectionEvent {
  /**
   * Iterator over the contact points of the collision.
   */
  readonly contactPoints: ContactPoint[];
}

/**
 * @public
 *
 * Payload for the collision exit event; see {@link {@link Component3D.onCollisionExit}
 */
export declare interface CollisionExitEvent extends BaseIntersectionEvent {}

declare interface CollisionInfo extends ColliderOpts_2 {
  mesh: Component3D;
  position: Vector3;
  quaternion: Quaternion;
  scale: Vector3;
  dimensions: ColliderDimensionsMap[this["colliderType"]];
  vertices?: TypedArray;
  indices?: TypedArray;
}

declare interface CollisionInfo_2 {
  /**
   * the collider type of the collided object
   */
  colliderType: ColliderType;
  /**
   * the rigidbody type of the collided object
   */
  rigidbodyType: RigidBodyType;
  /**
   * the name of the collided object
   */
  name: string;
  /**
   * the components instance of the collided object
   */
  mesh: any;
}

export declare function Color(target: any, key: any): void;

export declare interface ColorParam extends AbstractParam<string> {
  type?: "color";
}

/**
 * @public
 * @deprecated use ScriptComponent instead https://docs.oncyber.io/components
 *
 * Defines a script as a component that can be added to the world space via the studio
 * You can annotate the script class properties using `@Param` to make them editable in the studio
 */
export declare function Component(options: ComponentOptions): ClassDecorator;

/**
 * @public
 */
export declare class Component3D<
  Data extends Component3DData = Component3DData
> extends AugmentedGroup {
  #private;
  protected opts: ComponentOpts;

  /**
   * Collider for this component, it encapsulates some convenience methods for physics
   * And gives access to the underlying physics rigidbody and collider
   */
  collider: Collider_2;
  /**
   * Rigid body attached to this component, it encapsulates some convenience methods for physics
   * And gives access to the underlying physics rigidbody and colliders
   *
   * you can find more info at {@link RigidBodyWrapper}
   */
  rigidBody: RigidBodyWrapper;
  /**
   * geometry prop is not allowed on components
   */
  geometry: never;
  /**
   * material prop is not allowed on components
   */
  material: never;

  space: Space;

  private _currentData;

  private _changeCallbackKeys;
  private _behaviors;
  private _sessionId;
  private _lookatOpt;

  get sessionId(): string;
  set sessionId(value: string);

  private _initDataWrapper;
  private _frustumChecker;
  /**
   * Activates frustum check for this component; this will emit onViewEnter and onViewExit events
   * on the component when it enters or exits the camera frustum.
   *
   * @param mesh - The mesh to use for frustum check
   */
  enableFrustumCheck(mesh: Mesh): void;
  /**
   * Disables frustum check for this component
   */
  disableFrustumCheck(): void;
  /**
   * Event fired when this component enters the camera frustum
   * You need to call enableFrustumCheck to activate this event
   */
  onViewEnter(cb: () => void): () => void;
  /**
   * Event fired when this component exits the camera frustum
   * You need to call enableFrustumCheck to activate this event
   */
  onViewExit(cb: () => void): () => void;
  /**
   * Returns true if this component is currently being looked at by the camera
   * You need to set lookat: true in the component config to activate this feature
   */
  get isLookedAt(): boolean;
  /**
   * Returns the duration in seconds that this component has been looked at by the camera
   */
  get lookatDuration(): number;
  get lookatOpts(): {
    maxDistance: number;
    minTime: number;
    maxDot: number;
    padding: number;
  };
  /**
   * Returns true if this component is currently in the camera frustum
   * You need to call enableFrustumCheck to activate this feature
   */
  get isInView(): boolean;
  get data(): Data;

  private _interactionPromise;
  private _getInteraction;
  _updateInteractionPos: () => void;
  private _udpateInteraction;

  protected init(): Promise<void>;

  private _dataChangeScheduled;

  _dataChangeListener: () => void;
  private _onDataChange;

  updateData(data: Partial<Data>): void;

  protected dispose(): void;
  private _prevMatrix;
  private _needsDecompose;
  private _worldPos;
  private _worldQuat;
  private _worldSc;
  private _worldRot;
  private _needsInv;
  private _matWorldInv;
  private _worldQuatInv;

  private _isParentIdentity;
  private _decomposeWorldMatrix;
  private _inverse;
  /**
   * the position in world space
   */
  get positionWorld(): Vector3;
  /**
   * the quaternion in world space
   */
  get quaternionWorld(): Quaternion;
  /**
   * the rotation in world space
   */
  get rotationWorld(): Quaternion;
  /**
   * the scale in world space
   */
  get scaleWorld(): Vector3;

  on(event: string, listener: (...args: any[]) => unknown): () => void;
  off(event: string, listener: (...args: any[]) => unknown): void;

  /**
   * Event fired when this component starts colliding with another component
   */
  onCollisionEnter(
    cb: EventListeners[typeof EVENTS.COLLISION_ENTER]
  ): () => void;
  /**
   * Event fired when this component stops colliding with another component
   */
  onCollisionExit(cb: EventListeners[typeof EVENTS.COLLISION_EXIT]): () => void;
  /**
   * This event is fired each frame between the start and end of a collision
   */
  onCollisionStay(cb: EventListeners[typeof EVENTS.COLLISION_STAY]): () => void;
  /**
   * Event fired when this component starts intersecting a sensor
   */
  onSensorEnter(cb: EventListeners[typeof EVENTS.SENSOR_ENTER]): () => void;
  /**
   * Event fired when this component stops intersecting a sensor
   */
  onSensorExit(cb: EventListeners[typeof EVENTS.SENSOR_EXIT]): () => void;
  /**
   * This event is fired each frame between the start and end of a sensor intersection
   */
  onSensorStay(cb: EventListeners[typeof EVENTS.SENSOR_STAY]): () => void;
  onInteract(cb: EventListeners[typeof EVENTS.INTERACT]): () => void;
  onInteractEnter(cb: EventListeners[typeof EVENTS.INTERACT_ENTER]): () => void;
  onInteractExit(cb: EventListeners[typeof EVENTS.INTERACT_EXIT]): () => void;
  /**
   * Returns the unique id for this component
   */
  get componentId(): string;
  /**
   * Returns the name of this component (if set in data.name)
   */
  get componentName(): string;
  /**
   * Returns the type of this component (avatar, model, etc)
   */
  get componentType(): unknown;
  /**
   * Returns the unique identifier for this component
   */
  get identifier(): string;
  /**
   * Returns the group identifier for this component
   */
  get tag(): string;

  get childComponents(): Component3D[];
  get behaviors(): ScriptBehavior[];
  get parentComponent(): Component3D;
  /**
   * Returns true if this component is a dierct or indirect child of the provided component
   */
  isDescendantOf(component: Component3D): boolean;
  protected _onCreateCollisionMesh(): any;

  /**
   * Returns the bounding box of this component
   *
   * @param target - The target to set the bounding box to, if not provided a new Box3 will be returned
   */
  getBBox(target?: Box3): Box3;

  get isPersistent(): boolean;

  /**
   * Returns the dimensions of this component
   *
   * @param target - The target to set the dimensions to, if not provided a new Vector3 will be returned
   */
  getDimensions(target?: Vector3): Vector3;
  /**
   * Duplicate this component
   *
   * Returns a promise that resolves with the duplicated component
   */
  duplicate(opts?: CreateComponentOpts): Promise<this>;

  get isBehavior(): boolean;
  getBehavior<T extends ScriptBehavior>(type: new (...args: any) => T): T;
  getBehaviors<T extends ScriptBehavior>(type: new (...args: any) => T): T[];
  private _editor;

  /**
   * Destroy this component
   */
  destroy(): void;
}

/**
 * @public
 *
 * Base class for all components data interfaces. It contains the common properties for all components
 */
export declare interface Component3DData {
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * id of the parent component
   */
  parentId?: string;

  /**
   * List of children components
   */
  children?: Record<string, Component3DData>;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Type of the component (model, video, platform, kitbash, etc)
   */
  type: unknown;
  /**
   * Attach an identifier or a tag to a component, so that can be easily accessed in the {@link ComponentManager}
   */
  script?: ScriptData;
  /**
   * Physics paramaters for the component (rigidbody type, collider type, etc)
   */
  collider?: PhysicsData;
  interact?: InteractData;

  _batchId?: string;
}

declare class Component3DEditor<
  T extends Component3D<any> = Component3D
> extends Augmented {
  protected _component: T;
  get IS_UI_EDITOR(): boolean;
  private _visible;
  componentId: string;
  protected _editMeshes: Set<Object3D<Object3DEventMap>>;
  masks: {
    highlightMesh: number;
    selectionBox: number;
  };
  COMMANDS: {
    readonly SHOW_ERROR: "SHOW_ERROR";
    readonly SHOW_PROMPT: "SHOW_PROMPT";
    readonly UPDATE_UI: "UPDATE_UI";
    readonly WORLD_UPLOAD_FILE: "WORLD_UPLOAD_FILE";
    readonly WORLD_UPDATE_DATA: "WORLD_UPDATE_DATA";
    readonly WORLD_UPGRADE_DATA: "WORLD_UPGRADE_DATA";
    readonly ATTACH_TRANSFORM_CONTROLS: "ATTACH_TRANSFORM_CONTROLS";
    readonly DETACH_TRANSFORM_CONTROLS: "DETACH_TRANSFORM_CONTROLS";
    readonly CREATE_PREFAB: "CREATE_PREFAB";
    readonly DETACH_PREFAB_INSTANCE: "DETACH_PREFA_INSTANCE";
    readonly REQUEST_SELECTION: "REQUEST_SELECTION";
    readonly REQUEST_ADD: "REQUEST_ADD";
  };
  _studioEditor: EngineEdit;
  _selMesh: Mesh;
  defaultColliderUI: boolean;
  _additionalGUIs: {};
  _guiStore: Store_2<UIEditorState>;
  constructor(_component: T);
  get component(): T;
  set component(val: T);
  get visible(): boolean;
  private _layers;
  protected _setVisible(val: boolean): void;
  onVisibleChanged(val: boolean): void;
  get guiStore(): Store_2<UIEditorState>;
  get guiState(): UIEditorState;
  getDataContext(): any;
  setGuiState: (state: UIEditorState) => void;
  foldSection(path: any): void;
  expandSection(path: any): void;
  toggleSection: (path: string, val?: boolean) => void;
  updateUI(): void;
  showPrompt(opts: {
    message: string;
    onSubmit: (text: string) => unknown;
  }): Promise<string>;
  showError(opts: { message: string; title?: string }): void;
  uploadFile(opts: {
    file: Blob | string;
    id: string;
    mimeType: string;
    isUnique?: boolean;
    overwrite?: boolean;
  }): Promise<{
    url: string;
    mimeType: string;
  }>;
  attachTransfomControls(
    object: Object3D,
    opts: {
      callbacks?: {
        onDragStart?: () => void;
        onDragEnd?: () => void;
        onDrag?: () => void;
      };
      translate?: boolean;
      rotate?: boolean;
      scale?: boolean;
    }
  ): void;
  detachTransformControls(object: Object3D): void;
  createPrefab(): void;
  detachPrefabInstance(): void;
  static requestSelection(componentId: string): void;
  static requestAdd(tab: any): void;
  getDataChanges(changes: Partial<T["data"]>): {
    id: any;
    changes: Partial<T["data"]>;
    undo: any;
  };
  upgradeData(data: any): void;
  dispatchDataChange(changes: Partial<T["data"]>): void;
  dispatchDataChangeMulti(
    updates: Array<{
      id: string;
      changes: object;
      undo: object;
    }>
  ): void;
  get data(): T["data"];
  protected createDefaultSelectionMesh(): Mesh<
    BoxGeometry,
    MeshBasicMaterial,
    Object3DEventMap
  >;
  getDetailMeshes(): Mesh[];
  getPlaceholderData(instance: Component3D): {
    id: string;
    position: XYZ_2;
    rotation: XYZ_2;
    scale: XYZ_2;
  } | null;
  onDetailMeshClicked(mesh: Mesh, intersect: Intersection<Mesh>): void;
  onDetailMeshMouseEnter(mesh: Mesh, intersect: Intersection<Mesh>): void;
  onDetailMeshMouseLeave(mesh: Mesh): void;
  get isFocusable(): boolean;
  getSelectionMesh(): Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  >;
  selectionBox: any;
  protected createSelectionBox(opts: {
    color: string;
    opacity?: number;
    dashed?: boolean;
    transparent?: boolean;
    dashScale?: number;
    gapSize?: number;
  }): default_2;
  private _isSelected;
  get isSelected(): boolean;
  getComponentsOptions(filter: string | ((c: Component3D) => boolean)): any[];

  onSelectedChanged(isSelected: boolean): void;
  showSelected(isSelected: boolean): void;
  highlightMesh: Mesh;
  toggleHighlighted(val: boolean): void;
  computeLineDistances(): void;
  uis: {
    collider: any;
    script: any;
  };
  protected getScriptGUI(context: EditorContext): {
    type: string;
    slug: string;
    label: string;
    children: {
      scriptId: {
        type: string;
        name: string;
        nullable: boolean;
        value: (string | Component3DData_3)[];
      };
      scriptTag: {
        type: string;
        name: string;
        nullable: boolean;
        value: (string | Component3DData_3)[];
      };
    };
  };
  protected getInteractGUI(): {
    type: string;
    slug: string;
    label: string;
    children: {
      enabled: {
        type: string;
        name: string;
        value: (string | Component3DData_3)[];
        format: {
          format: (v: any) => boolean;
          parse: (v: any, interact: any) => any;
        };
      };
      distance: {
        type: string;
        name: string;
        visible: () => boolean;
        min: number;
        max: number;
        step: number;
        value: (string | Component3DData_3)[];
      };
      scale: {
        type: string;
        name: string;
        visible: () => boolean;
        min: number;
        max: number;
        step: number;
        value: (string | Component3DData_3)[];
      };
      offset: {
        type: string;
        visible: () => boolean;
        format: {
          format: (v: any) => any;
          parse: (v: any) => any;
        };
        step: number;
        name: string;
        value: (string | Component3DData_3)[];
      };
      anchorX: {
        type: string;
        name: string;
        visible: () => boolean;
        options: string[];
        value: (string | Component3DData_3)[];
      };
      anchorY: {
        type: string;
        name: string;
        visible: () => boolean;
        options: string[];
        value: (string | Component3DData_3)[];
      };
    };
  };
  protected getColliderGUI(): any;
  protected getInfoGui(): {
    type: string;
    label: string;
    children: {
      notes: {
        type: string;
        name: string;
        value: (string | T["data"])[];
      };
    };
  };
  getGUI(): any;

  setAdditionalGUIs(guis: Record<string, any>): void;
  init(): void;
  _onInit(): void;
  dispose(): void;
  wasDisposed: boolean;
  _onDispose(): void;
  private static _lensCache;
  getLens(source: any): AbstractLens<any>;
  private _createLens;
  private _presetCache;
  getPreset(data: any): Preset;
  view(path: string | string[], view?: DataLensView): AbstractLens<any>;
  reviveLens(lens: AbstractLens): AbstractLens<any>;
  _pendingUpdate: Record<string, any>;
  _pendingUpdatesUndo: Record<string, any>;
  _addPendingChange(key: any, value: any, oldVal: any): void;
  _commitUpdates(): void;
  static _DEFAULT_OPTS: {
    position: {};
    rotation: {};
    scale: {};
  };
  protected static _toTrUI(opts: any): any;
  protected getParamsGui(trOpts?: any): {
    type: string;
    children: {
      transform: {
        type: string;
        label: string;
        children: any;
      };
      params: any;
    };
  };
}

declare interface ComponentData<T extends string = any> {
  id?: string;
  kind?: "builtin" | "script";
  name?: string;
  type: T;
  kit?: string;
  parentId?: string;
  children?: Record<string, ComponentData>;
  _index?: number;
  __skipBuild?: boolean;
  attachements?: Record<string, any>;
  [key: string]: any;
}

declare class ComponentFactory<T extends Component3D> {
  static info: ComponentInfo;
  static dataSchema: DataSchema;
  static baseDataWrapper: DataWrapper<unknown>;
  static getTitle(data: any): any;
  static createDataWrapper(opts: DataSchemaOpts): void;
  static onPreload(): Promise<void>;
  static onShutdown(): Promise<void>;
  constructor();
  opts: ComponentFactoryOptions;
  space: Space;
  container: ComponentManager;
  mixins: Array<ComponentMixin>;
  get info(): ComponentInfo;
  Editor: any;
  onInit(opts: ComponentFactoryOptions): Promise<void>;
  get dataSchema(): DataSchema;
  get baseDataWrapper(): DataWrapper;
  onResolve(): Promise<void>;
  protected wasDisposed: boolean;
  onDispose(): void;
  onValidate(data: any): void;
  onAddInstance(data: any, opts: AddOpts): Promise<T>;
  onGetDefInstanceData(data: any): any;
  upgradeData(data: any): any;
  onRemoveInstance(component: T): void;
  static validateCreation(config: any): {
    success: boolean;
    message?: string;
  };
  static preload(): Promise<void>;
  static shutdown(): Promise<void>;
  protected init(opts: ComponentFactoryOptions): Promise<void>;
  protected resolve(): Promise<void>;
  protected dispose(): void;
  protected validate(config: any): void;
  addInstance(data: any, opts: AddOpts): Promise<T>;
  removeInstance(component: Component3D): void;
  protected createInstance(data: any): Promise<T>;
}

declare interface ComponentFactoryOptions {
  space: Space;
  container: ComponentManager;
  data: any;
  externalApi: any;
}

declare interface ComponentHelp {
  desc?: string;
  tip?: string;
}

declare interface ComponentInfo {
  type: string;
  title: string;
  description?: string;
  kit?: string;
  help?: ComponentHelp;
  image: string;
  imageXL?: string;
  group?: string;
  studioTab?: string;
  singleton?: boolean;
  required?: boolean;
  draggable?: boolean;
  priority?: number;
  custom?: boolean;
  autoPlace?: boolean;
  transform?: TransformConfigOpts;
  interact?: boolean;
  lookat?:
    | boolean
    | {
        maxDistance: number;
      };
  is2D?: boolean;
  prefab?: boolean;
  batchDraw?: boolean;
  kind?: "script" | "prefab" | undefined;
  initTimeout?: number;
  server?: boolean;
}

/**
 *
 *
 * A ComponentManager is a container for all the components of a space.
 * It is responsible for creating, destroying and duplicating components.
 *
 * @public
 */
export declare class ComponentManager extends AugmentedGroup {
  private _opts;
  private _registry;

  /**
   * some scripts still use this
   */
  _isLoading: boolean;
  private _data;
  private _components;
  private _postLoadTasks;
  private _componentsById;
  private _componentsByScriptId;
  private _componentsByScriptTag;
  private _componentsByType;
  private wasDisposed;
  private _spaceLoaded;

  private _hasEvents;
  private _addEvents;
  private _removeEvents;
  private _onGameStart;
  private _onGameStop;
  get space(): Space;
  private _nodesPromises;
  private _getPriority;
  private _canLoad;
  get components(): Component3D<Component3DData_4>[];

  addLoadTask(promise: Promise<any>): void;

  private _upgrades;

  private _buildNode;
  _updateComponentTag(
    component: Component3D,
    tag: string,
    prevTag: string
  ): void;

  private _getNode;

  byInternalId(id: string): Component3D<Component3DData_4>;
  get loaded(): Promise<void>;
  get background(): Component3D<Component3DData_4>;
  /**
   * Returns a component by its id.
   */
  byId(id: string): Component3D<Component3DData_4>;
  /**
   * Returns all component with matching tag.
   * A tag is a string identifier that can be used to group components.
   */
  byTag(tag: string): Component3D<Component3DData_4>[];
  /**

     * Returns all components with matching type.
     */
  byType(type: string): Component3D<Component3DData_4>[];
  /**
   * Returns all components with matching name.
   */
  byName(name: string): Component3D<Component3DData_4>[];
  /**
   * Returns all components satisfying the given filter function.
   */
  filter(f: (c: Component3D) => boolean): Component3D<Component3DData_4>[];
  /**
   * Returns the first component satisfying the given filter function.
   */
  find(f: (c: Component3D) => boolean): Component3D<Component3DData_4>;
  /**
   * Iterates over all components and calls the given function for each one.
   */
  forEach(f: (c: Component3D, i: any) => void): void;
  /**
   * create a new component of the given type.
   * You can pass additional data that will be used to initialize the component.
   *
   * @example
   *
   * ```ts
   *  const component = await Components.create({
   *      type: "model",
   *      url: "https://example.com/model.glb",
   *      position: { x: 0, y: 0, z: 0 }
   *      rotation: { x: 0, y: 0, z: 0 }
   *      scale: { x: 1, y: 1, z: 1 }
   *  })
   * ```
   *
   * For the data format, see the documentation of the component you want to create.
   *
   * @returns
   *
   * a promise that resolves to the created component.
   * The type of the returned component depends on the type of the component you created.
   * For example a "model" component will return a ModelComponent.
   *
   */
  create<T extends CType>(
    data: CreateComponentArg<T>,
    opts?: {
      abort?: AbortSignal;
      transient?: boolean;
      parent?: Object3D;
      sessionId?: string;
    }
  ): Promise<Component3D>;

  /**
   * Removes the given component from the space.
   *
   * @param component
   *
   * The component to remove.
   *
   * @returns
   *
   * true if the component was successfully removed, false otherwise.
   */
  destroy(component: Component3D): boolean;
  /**
   * Duplicates the given component.
   *
   * @returns
   *
   * a promise that resolves to the duplicated component.
   */
  duplicate<T extends Component3D>(
    component: T,
    opts?: CreateComponentOpts
  ): Promise<T>;

  onSpaceLoaded(cb: () => void): () => void;
  /**
   * Called when camera lookat enters a component.
   * You need to set lookat: true in componen config to enable this.
   */
  onLookatEnter(cb: (component: Component3D) => void): void;
  /**
   * Called when camera lookat exits a component.
   * You need to set lookat: true in componen config to enable this.
   */
  onLookatExit(cb: (component: Component3D) => void): void;
  /**
   * Get the component that is currently being looked at by the camera.
   */
  get lookedAtComponent(): Component3D<Component3DData_4>;
  /**
   * Get how long the camera has been looking at the current component.
   */
  get lookatDuration(): number;
}

declare interface ComponentManagerOpts {
  data: Record<string, ComponentData>;
  kits: Record<string, string>;
  space: Space;
  externalApi: Record<string, any>;
  loadOpts?: {
    looseMode?: boolean;
  };
}

/**
 * @public
 */
declare type ComponentMap = ComponentTypes & {
  any: Component3D;
};

declare interface ComponentMixin {
  init(component: Component3D): Promise<void>;
  update(): void;
  dispose(component: Component3D): void;
}

export declare interface ComponentOptions extends BehaviorOptions {
  singleton?: boolean;
  draggable?: boolean;
  transform?: TransformConfigOpts;
  batchDraw?: boolean;
}

declare interface ComponentOpts {
  space: Space;
  container: ComponentManager;
  info: ComponentInfo;
  data: ComponentData;
}

/**
 * Component Params need to be initialized using the $Param.Component
 * @example @Param() myAudio = $Param.Component("audio")
 * @example @Param() myComponent = $Param.Component(MyCustomComponent)
 * @example @Param() myComponent = $Param.Component("any")
 */
export declare interface ComponentParam extends AbstractParam {
  type?: "component";
  required?: boolean;
  typeof?: string | any;
}

/**
 * @public
 *
 * Component manager for the current space, cf {@link ComponentManager} for more info
 */
export declare let Components: ComponentManager;

declare class ComponentsRegistry extends Augmented {
  private opts;
  static bultinComponents: Record<string, typeof ComponentFactory<any>>;
  space: Space;
  private _factoryClasses;
  private factoryPromises;
  componentTypes: Record<string, ComponentFactory<any>>;
  constructor(opts: { space: Space });
  get factoryClasses(): Record<string, typeof ComponentFactory<any>>;
  getFactoryClass(type: any): typeof ComponentFactory<any>;
  addFactory(type: string, factoryClass: FactoryClass): void;
  deleteFactory(type: string): void;
  getExistingFactory(type: string): ComponentFactory<any>;
  getFactory(type: string): Promise<ComponentFactory<any>>;
  getOrCreateFactory(
    type: any,
    opts: ComponentFactoryOptions
  ): Promise<ComponentFactory<any>>;
  private getFactoryType;
  private _wasDisposed;
  dispose(): void;
}

declare interface ComponentsUpgrade {
  added?: Record<string, ComponentData>;
  updated?: Record<string, ComponentData>;
  removed?: Record<string, unknown>;
}

/**
 * @public
 */
export declare type ComponentTypes = {
  background: BackgroundComponent;
  lighting: LightingComponent;
  water: WaterComponent;
  fog: FogComponent;
  terrain: TerrainComponent;
  postpro: PostProcessingComponent;
  reflector: ReflectorComponent;
  rain: RainComponent;
  envmap: EnvmapComponent;
  spawn: SpawnComponent;
  "vrm-anims": VRMAnimsComponent;
  mesh: MeshComponent;
  model: ModelComponent;
  text: TextComponent;
  audio: AudioComponent;
  image: ImageComponent;
  wind: WindComponent;
  video: VideoComponent;
  kitbash: KitBashComponent;
  avatar: AvatarComponent;
  wave: WaterComponent;
  magenticfield: MagneticFieldComponent;
  platform: PlatformComponent;
  cloud: CloudComponent;
  circle: CircleComponent;
  bullet: BulletComponent;
  godray: GodrayComponent;
  bird: BirdComponent;
  birdstatic: BirdStaticComponent;
  grass: GrassComponent;
  shadowfloor: ShadowFloorComponent;
  dust: DustComponent;
  impact: ImpactComponent;
  destination: DestinationComponent;
  dialog: DialogComponent;
  interaction: InteractionComponent;
  scatter: ScatterComponent;
  scattermesh: ScatterMeshComponent;
  instancedmesh: InstancedMeshComponent;
  portal: PortalComponent;
  camera: CameraComponent;
  spline: SplineComponent;
  cache: CacheComponent;
  agora: AgoraComponent;
  webrtc: WebRTCComponent;
  batch: BatchComponent;
  group: GroupComponent;
  iframe: IframeComponent;
  particles: ParticlesComponent;
  multiplayer: MultiplayerComponent;
  navmesh: NavmeshComponent;
};

export declare const Config: typeof Component;

declare interface Config_2 {
  serverFPS?: number | null;
  bufferWindow?: number | null;
  autoCorrectTimeOffset?: boolean;
}

declare type ConnectedWallet = ConnectedWallet_2 | ConnectedSolanaWallet;

declare type ConnectionStatus = "disconnected" | "connecting" | "connected";

declare type Constructor<T> = new (...args: any[]) => T;

export declare interface ContactPoint {
  /**
   * Position of the contact point.
   */
  position: Vector3;
  /**
   * Normal of the contact point.
   */
  normal: Vector3;
  /**
   * Depth of the contact point.
   */
  depth: number;
}

/**
 * Interface to interact with blockchain contracts
 * @public
 */
declare class Contract extends EventEmitter {
  emit: any;
  private _address;
  private _chainData;
  private _chain;
  private _abi;
  private _web3;
  private _contract;
  private _readOnlyContract;
  private _provider;
  private _readOnlyProvider;
  private _isListening;
  private _disposeListeners;
  private _fund;

  on(event: string, callback: any): this;
  private _getContract;
  private _getProvider;
  private _createContract;
  private _listenToEvent;
  private _processABI;
  private _transactionReadWrapper;
  private _transactionWriteWrapper;
  private _transactionWrapper;
  private _serializeResult;
  private _singleEventWrapper;
  private _queryEventWrapper;
  private _formatEventInputs;
  private _wrapTransactionResponse;
  private _wrapFailedTransactionResponse;
  private _wrapTransactionReceipt;
  private _wrapHashInExplorer;
  private _switchNetwork;
  onDispose(): void;
}

/** @public */
declare type ContractOf<T extends ABI> = {
  [K in T[number]["name"]]: Extract<
    T[number],
    {
      name: K;
    }
  > extends infer U extends T[number]
    ? U["type"] extends "function"
      ? U["stateMutability"] extends "view" | "pure"
        ? /**
           * Contract read function
           * @public
           */ (
            ...args: ParseType<U["inputs"]>
          ) => Promise<BigIntify<ParseType<U["outputs"]>>>
        : /**
           * Contract write function
           * @public
           */ (
            ...args: [...ParseType<U["inputs"]>, options?: TransactionOptions]
          ) => Promise<PendingTransaction>
      : U["type"] extends "event"
      ? {
          /**
           * Wait for the next event
           * @example const {from, to, amount} = await contract.Transfer.next(from, to);
           * @example const {from, to, amount} = await contract.Transfer.next(null, to, null, { timeout: 60 });
           * @example const {from, to, amount} = await contract.Transfer.next([from_1, from_1]);
           */ next: (
            ...args: [
              ...OrArray<ParseType<U["inputs"]>>,
              options?: EventNextOptions
            ]
          ) => Promise<EventResult<U["inputs"]> | undefined>;
          /**
           * Query previous events
           * note that if filtered arguments are not indexed they will be ignored
           * @example const {from, to, amount} = await contract.Transfer.query(from, to, null, {
           *     max: 10,
           *     minBlock: 0,
           *     maxBlock: 20153519,
           * });
           */ query: (
            ...args: [
              ...OrArray<ParseType<U["inputs"]>>,
              options?: EventQueryOptions
            ]
          ) => Promise<(EventResult<U["inputs"]> & EventResultMetaData)[]>;
        }
      : unknown
    : unknown;
};

declare type ContractOpts = {
  chain: Chain;
  chainData: any;
  address: string;
  abi: ABI;
  web3: Web3Api;
  fund?(chain?: Chain, minAmount?: number): Promise<any>;
};

/**
 * @public
 *
 * This class is used to control the actions of the {@link FirstPersonControlsWrapper} class.
 */
declare class Controller {
  private controls;
  private _active;
  private _usePointerLock;
  private _down;
  canZoom: boolean;

  /**
   * Returns true if the controller is active.
   */
  get active(): boolean;
  /**
   * Activates/deactivates the controller.
   *
   * Deactivating the controller will prevent input events from influencing the {@link FirstPersonControlsWrapper}'s actions.
   */
  set active(value: boolean);

  /**
   * Set whether or not to enter pointer lock mode when user clicks on the scene.
   */
  set usePointerLock(val: boolean);
  /**
   * Returns whether or not pointer lock mode is enabled.
   */
  get usePointerLock(): boolean;
}

/**
 * @public
 *
 * This class is used to control the actions of the {@link PlatformerControlsWrapper} class.
 */
declare class Controller_2 {
  private controls;
  private _active;
  /**
   * Callback function that is called when the user presses/relases a key.
   */
  onInput: any;

  /**
   * Returns true if the controller is active.
   */
  get active(): boolean;
  /**
   * Activates/deactivates the controller.
   *
   * Deactivating the controller will prevent input events from influencing the {@link PlatformerControlsWrapper}'s actions.
   */
  set active(value: boolean);
  private _showJoystick;
  private _showJumpButton;
  /**
   * Set to true to show the joystick. This is mainly for mobile devices where keyboard input is not available.
   */
  set showJoystick(value: boolean);
  set showJumpButton(value: boolean);

  /**
   * Returns true if the joystick is visible.
   */
  get showJoystick(): boolean;
  /**
   * Returns true if the jump button is visible.
   *
   */
  get showJumpButton(): boolean;

  resetActions(): void;
}

declare type ControllerInstance =
  | DebugOrbitControlsWrapper
  | PlatformerController
  | ThirdPersonCameraControlsWrapper
  | FirstPersonCameraControlsWrapper
  | FlyCameraControlsWrapper
  | DefaultControlsWrapper;

/**
 * @public
 *
 * Use this to create controls for your game,  cf {@link ControlsFactory} for more info
 */
export declare let Controls: ControlsFactory;

/**
 * @public
 */
declare class ControlsAbstract {
  protected _active: boolean;

  name: string;
}

/**
 * @public
 *
 * Use this to create controls for your game, Currently supports the following types:
 *
 * - {@link PlatformerControlsWrapper} for a WASD + Space type of navigation
 *
 * - {@link ThirdPersonCameraControlsWrapper} for a third person camera movement
 *
 * - {@link FirstPersonCameraControlsWrapper} for a first person camera movement
 *
 * - {@link DebugOrbitControlsWrapper} for a debug orbit camera movement
 *
 * - {@link FlyCameraControlsWrapper} for a fly camera movement
 *
 * - {@link DefaultControlsWrapper} for a WASD + Space type of navigation
 *
 */
export declare class ControlsFactory {
  private controllerFor;
  /**
   * Factory method to create control. The controls returned depend on the type of controls you want to create.
   * Currently supports the following types: "platformer", "thirdperson", "firstperson", "debugorbit", "fly".
   */
  get(opts: ControlsFactoryOpts): any;
  /**
   * Returns an existing controller instance for the given object, if one exists.
   * @param obj - The controlled object
   * @returns The controller instance
   */
  getControllerFor(obj: any): ControllerInstance | null;
}

export declare interface ControlsFactoryOpts {
  /**
   * The type of controls to create.
   */
  type: ControlsType;
  /**
   * The parameters to pass to the controls constructor.
   *
   * @remarks
   * the params depend on the type of controls:
   *
   * - For "platformer", see {@link PlatformerControlsWrapperParams} constructor
   *
   * - For "thirdperson", see {@link ThirdPersonCameraControlsWrapperParams} constructor
   *
   * - For "firstperson", no params are required
   *
   * - For "debugorbit", no params are required
   *
   * - For "fly", no params are required for now
   *
   * - For "default", see {@link DefaultControlParams} constructor
   */
  params?: ControlsParams[ControlsType];
  /**
   * The target object to control, See the docs for each type for more info
   */
  target?: any;
  /**
   * The object to control, See the docs for each type for more info
   */
  object?: any;
}

export declare type ControlsParams = {
  debugorbit: {};
  platformer: PlatformerControlsWrapperParams;
  thirdperson: ThirdPersonCameraControlsWrapperParams;
  firstperson: {};
  fly: {};
  smoothpf: {};
  platformer2: PlatformerControlParams;
  default: DefaultControlParams;
};

export declare type ControlsType =
  | "platformer"
  | "platformer2"
  | "default"
  | "thirdperson"
  | "firstperson"
  | "debugorbit"
  | "fly"
  | "smoothpf";

/**
 * @public
 */
declare type CreateComponentArg<T extends CType> = {
  type: T;
} & Exclude<ComponentTypes[T]["data"], "type">;

declare interface CreateComponentOpts {
  parent?: Component3D;
  abort?: AbortSignal;
  transient?: boolean;
  overrideOpts?: {};
  netId?: string;
  sessionId?: string;
}

declare interface CreateOpts {
  isLoading?: boolean;
}

declare class CSS3DObject extends Object3D<Object3DEventMap> {
  constructor(element?: HTMLDivElement);
  element: HTMLDivElement;
  copy(source: any, recursive: any): this;
  isCSS3DObject: boolean;
}

declare type CType = keyof ComponentTypes;

declare interface CubeColliderOpts extends BaseColliderOpts {
  type: "CUBE";
  width: number;
  height: number;
  depth: number;
}

declare interface CylinderColliderOpts extends BaseColliderOpts {
  type: "CYLINDER";
  radius: number;
  height: number;
}

/**
 * @public
 *
 * Params for the {@link MeshComponentData.geometry.cylinderParams} property
 *
 * See {@link https://threejs.org/docs/#api/en/geometries/CylinderGeometry | CylinderGeometry}
 */
export declare interface CylinderParamsData {
  radiusTop: number;
  radiusBottom: number;
  height: number;
  radialSegments: number;
  heightSegments: number;
  openEnded: boolean;
}

declare interface DataChangeOpts<
  Data extends Component3DData = Component3DData
> {
  prev: Data;
  isProgress: boolean;
}

/**
 * When editing guis sometimes we don't want to edit the data directly.
 * instead we want to edit a view of the data.
 *
 * Examples:
 * - avatar component: has data.rotation, but we want to edit only data.rotation.y
 * - colliderUI: collider.rotationLock is a [boolean, boolean, boolean], but we want to edit it as a single boolean
 *
 * A view interface can be plugged into the dataWrapper lens to intercept get/set operations
 * and transform the data as needed.
 *
 * Why do we need this?
 *
 * Because DataWrapperLens implements support for apply/reset operations for prefabs in a way
 * that supports undo/redo; and we don't want to reimplement this logic every time we have a lens
 * that just views/alters the data in a different way.
 */
declare interface DataLensView<S = any, T = any> {
  onGet(value: S): T;
  onSet(value: T, prev: S): S;
  isOverride?(wrapper: DataWrapper, path: string): boolean;
}

declare type DataOpts<T> = DerivedDataOpts<T> | BaseDataOpts<T>;

declare type DataPropNames<T> = {
  [K in keyof T]: T[K] extends Function
    ? never
    : K extends `_${string}`
    ? never
    : K extends "host"
    ? never
    : IfEquals<
        {
          [P in K]: T[K];
        },
        {
          -readonly [P in K]: T[K];
        },
        K,
        never
      >;
}[keyof T];

declare type DataProps<T> = {
  [P in DataPropNames<T>]?: T[P];
} & {
  parentId?: string;
};

declare class DataSchema {
  private _defaultData;
  /**
   * Paths that are considered values
   * We can't mutate values inside these paths
   */
  _valuePaths: Record<string, boolean>;
  /**
   * Paths that are considered proper to this object
   * Those paths are not part of the template data so they're not
   * copied to prefabs from instances
   *
   * If nested is true, the paths are considered proper only for the top object
   */
  protected _topProperPaths: Record<string, boolean>;
  protected _properPaths: Record<string, boolean>;
  constructor(opts?: DataSchemaOpts);
  getProperPaths(nested: boolean): {
    [x: string]: boolean;
  };
  getDefaultData(): any;
  setDefaultData(data: any): void;
  setValuesPaths(paths?: string[]): void;
  protected _isObject(item: any): boolean;
  /**
   * Returns true if the item is a value or if the path is a value path
   */
  isValue(item: any, path: string): boolean;
  private _pathsCache;
  /**
   * Returns the paths to final values in the object
   */
  paths(obj: any): string[];
  expandPathPrefixes(obj: any, prefixes: string[]): string[];
  /**
   * Returns true if the object has the given path
   * Returns false if the path is inside a value path
   */
  has(obj: any, path: PathLike): boolean;
  /**
   * Returns the value at the given path
   */
  get(obj: any, path: PathLike): any;
  /**
   * Sets the value at the given path; Fails if the path is inside a value path
   */
  set(obj: any, path: PathLike, value: any): any;
  private _setRec;
  /**
   * Like set but only sets the value if the path doesn't exist
   */
  weakSet(obj: any, path: PathLike, value: any): any;
  /**
   * Unsets the value at the given path; Fails if the path is inside a value path
   * All empty objects are automatically removed after unsetting
   */
  unset(obj: any, path: PathLike): any;
  private _unsetRec;
  forEachValue(
    obj: any,
    fn: (value: any, path: string, parent: any) => void
  ): void;
  private _forEachValueRec;
  /**
   * Flattens the object into a map of paths to values
   */
  flatten(obj: any): Record<string, any>;
  /**
   * Returns true if the two objects are equal
   */
  equals(obj1: any, obj2: any): any;
  /**
   * Returns true if obj1 includes obj2
   * obj1 includes obj2 if
   * - all the paths in obj2 are present in obj1
   * - the values in obj2 are equal to the values in obj1
   */
  includes(obj1: any, obj2: any): boolean;
  /**
   * Returns an empty object
   */
  empty(): {};
  /**
   * Returns true if the object is empty
   */
  isEmpty(obj: any): boolean;
  /**
   * Returns an object whose paths are the union of the paths of obj1 and obj2
   * The values are the result of combining the values of obj1 and obj2 with the combineFn
   * if a path doesn't exist in one of the objects, a null/undefined value is passed to the combineFn
   * If the combineFn returns null, the path is removed
   * If the combineFn returns a value different from the existing value, the path is updated
   */
  unionWith(obj1: any, obj2: any, combineFn: (a: any, b: any) => any): any;
  /**
   * Returns an object whose paths are the union of the paths of obj1 and obj2
   * paths in obj1 take precedence over paths in obj2
   */
  union(obj1: any, obj2: any): any;
  /**
   * Returns an object whose paths are the union of the paths of obj1 and obj2
   * paths in obj2 take precedence over paths in obj1
   */
  assign(obj1: any, obj2: any): any;
  /**
   * Removes from obj1 the paths that are present in obj2
   */
  substract(obj1: any, obj2: any): any;
  /**
   * Returns from obj1 the paths that are present in obj2
   */
  extract(obj1: any, obj2: any): {};
  /**
   * Removes from obj1 the paths that are present in obj2 AND have the same value
   */
  overrides(obj1: any, obj2: any): void;
  withoutPaths(obj: any, paths: string[]): any;
  onlyPaths(obj: any, paths: string[]): {};
}

declare interface DataSchemaOpts {
  valuePaths?: string[];
  properPaths?: string[];
  topProperPaths?: string[];
  defaultData?: any;
}

/**
 * @public
 *
 * Those controls are for debug purposes only. OrbitControls performs orbiting, dollying (zooming), and panning.
 *
 * Orbit - left mouse / touch: one-finger move
 *
 * Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
 *
 * Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move
 */
export declare class DebugOrbitControlsWrapper extends ControlsAbstract {
  /**
   * Returns true if the controller is active.
   */
  get active(): boolean;
  /**
   * Activates/deactivates the controller.
   */
  set active(value: boolean);
}

declare type DecoratorFn = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => void;

declare namespace _default {
  {
    WorkerSerializer;
  }
}

declare const DEFAULT_CC_OPTIONS: {
  offset: number;
  applyImpulsesToDynamicBodies: boolean;
  applyGravity: boolean;
  maxSlopeClimbAngle: number;
  minSlopeSlideAngle: number;
  characterMass: number;
  slideEnabled: boolean;
  snapToGround: number;
  autoStep: {
    maxHeight: number;
    minWidth: number;
  };
  maxVelocity: number;
  dampling: number;
  advancedAnimations: boolean;
};

declare const DEFAULT_CC_OPTIONS_2: {
  offset: number;
  applyImpulsesToDynamicBodies: boolean;
  applyGravity: boolean;
  maxSlopeClimbAngle: number;
  minSlopeSlideAngle: number;
  characterMass: number;
  slideEnabled: boolean;
  snapToGround: number;
  autoStep: {
    maxHeight: number;
    minWidth: number;
  };
  maxVelocity: number;
  dampling: number;
};

export declare interface DefaultControlParams {
  /**
   *
   *  Params to controls walking and running of the target object
   *
   *   - speed : the walking speed of the character
   *
   *   - boost: how much to speedup the character when running, this is activated when the user presses the shift key
   *
   *   - accelerationFactor: the acceleration of the character. 0 means no acceleration
   *
   *   - decelerationFactor: the deceleration of the character. 0 means no deceleration
   */
  run?: {
    speed?: number;
    boost?: number;
    accelerationFactor?: number;
    decelerationFactor?: number;
  };
  /**
   *
   * Params to controls the jump of the character of the target object
   *
   *   - height: the height of the jump
   *
   *   - duration: the duration of the jump
   *
   *   - airAcceleration: the acceleration of the jump
   *
   *   - hold: whether to hold the jump key to keep the jump going
   *
   *   - max: the maximum number of jumps
   *
   *   - coyote: the time in seconds after the character has left the ground that the character can still jump - Infinity by default
   *
   *   - maxFallSpeed: the maximum speed the character can fall
   *
   *   - peakSpeed: the speed at which the character reaches the peak of the jump
   *
   *   - delay: the delay in seconds before the character can jump again
   *
   */
  jump?: {
    height?: number;
    duration?: number;
    airAcceleration?: number;
    hold?: boolean;
    max?: number;
    coyote?: number;
    maxFallSpeed?: number;
    peakSpeed?: number;
    delay?: number;
  };
  /**
   * whether to automatically apply the corresponding animation to the attached object
   * This applies only when the attached object is an avatar component
   */
  autoAnimate?: boolean;
  /**
   * The gravity of the scene
   */
  gravity?: number;
  /**
   *  The character options for the kinematic character
   */
  character?: typeof DEFAULT_CC_OPTIONS;
  /**
   * Animations to be used by the character
   *
   */
  animations: {
    idle: string;
    run: string;
    sprint: string;
    jump_idle: string;
    jump_walking: string;
    jump_sprinting: string;
    jump_running: string;
    falling: string;
    drop_idle: string;
    drop_walking: string;
    drop_walking_roll: string;
    drop_running: string;
    drop_running_roll: string;
    drop_sprinting: string;
    drop_sprinting_roll: string;
    walk: string;
    jump_double: string;
  };
  object?: Component3D;
  target?: Object3D;
}

/**
 * @public
 *
 * This class implements the default platformer controls, with support for jumping, running, etc
 *
 * the controls use keyboard keys W, A, S, D or Arrow keys for movement, and SPACE for jumping;
 *
 * The meaning of `object` & `target` options is intepreted as follows:
 *
 * - The `object` is moved by the controls actions
 *
 * - The `target` is used to determine the forward direction of the movement
 *
 * The behavior of the controls can be customized using the params object.
 * See {@link DefaultControlParams} for more info
 *
 */
export declare class DefaultControlsWrapper extends ControlsAbstract {
  characterController: BasicCharacterController;
  velocity: Vector3;
  direction: Vector3;
  targetQuaternion: Quaternion;
  collidesWith: any[];
  prevDirection: Vector3;
  quaternion: Quaternion;
  targetRot: number;
  _animState: {
    wasJumping: boolean;
    jumpAnimCount: number;
    isDropAnimPlaying: boolean;
  };
  gravity: {
    x: number;
    y: number;
    z: number;
  };
  run: {
    maxSpeed: number;
    maxAcceleration: number;
    maxDeceleration: number;
    accelerationFactor: number;
    decelerationFactor: number;
    boost: number;
  };
  jump: {
    airAcceleration: number;
    hold: boolean;
    duration: number;
    height: number;
    max: number;
    coyote: number;
    maxFallSpeed: number;
    peakSpeed: number;
    delay: number;
  };
  _active: boolean;
  _keyActive: boolean;
  autoAnimate: boolean;
  advancedAnimations: boolean;
  autoUpdate: boolean;
  jumpPromise: any;
  animations: {
    idle: string;
    run: string;
    sprint: string;
    jump_idle: string;
    jump_walking: string;
    jump_sprinting: string;
    jump_running: string;
    falling: string;
    drop_idle: string;
    drop_walking: string;
    drop_walking_roll: string;
    drop_running: string;
    drop_running_roll: string;
    drop_sprinting: string;
    drop_sprinting_roll: string;
    walk: string;
    jump_double: string;
  };
  _state: {
    isMoving: boolean;
    onFloor: boolean;
    speed: number;
  };
  _jumpState: {
    speed: number;
    delay: number;
    jumpedCount: number;
    jumped: boolean;
    isJumping: boolean;
    reachedPeak: boolean;
    coyoteTimeLeft: number;
    elapsedTime: number;
    jumpGravity: number;
    jumpVelocity: number;
    currentHeight: number;
    jumpMaxHeight: number;
    prevJumpKeyState: boolean;
  };
  autoRotate: boolean;
  /**
   * The controller handles the input events and sets the corresponding actions
   */
  controller: Controller_2;
  /**
   * The actions influence the movement of the attached object. Those are typically set automtically from the user input.
   *
   * If you deactivate the controls's controller, you can set those manually to control the movement of the attached object
   */
  actions: PCActions_2;
  dirtyJoystick: Vector3;
  constructor(opts?: any);
  private _isAvatar;
  saveState(): (
    | Vector3
    | {
        isMoving: boolean;
        onFloor: boolean;
        speed: number;
      }
    | {
        speed: number;
        delay: number;
        jumpedCount: number;
        jumped: boolean;
        isJumping: boolean;
        reachedPeak: boolean;
        coyoteTimeLeft: number;
        elapsedTime: number;
        jumpGravity: number;
        jumpVelocity: number;
        currentHeight: number;
        jumpMaxHeight: number;
        prevJumpKeyState: boolean;
      }
  )[];
  restoreState(state: any): void;
  reset(): void;
  set showJoystick(value: boolean);
  get showJoystick(): boolean;
  get active(): boolean;
  set active(val: boolean);
  private _resetInput;
  private _resetAnimation;
  set keyActive(value: boolean);
  get keyActive(): boolean;
  triggerJump({
    duration,
    height,
  }: {
    duration: any;
    height: any;
  }): Promise<unknown>;
  private horizontalImpulse;
  private verticalImpulse;
  private impulseStrength;
  setForce(impulse: Vector3): void;
  _seqId: number;
  update: (deltaTime: any) => void;
  calcVelocity(deltaTime: number): void;
  private _run;
  private _gravity;
  private _jump;
  private _rot;
  private _impulse;
  private _correct;
  _animation(): void;
  playAnimationIfNotPlaying: (
    animationName: any,
    animationsToCheck?: any[]
  ) => void;
  playAnimationOnceIfNotPlaying: (
    animationName: any,
    animationsToCheck: any,
    opts?: {}
  ) => Promise<unknown>;
}

/**
 * @public
 */
export declare class DefaultPlayerControls extends DefaultControlsWrapper {
  constructor(options: Partial<DefaultControlParams>);
}

declare interface DerivedDataOpts<T> {
  base?: DataWrapper<T>;
  ownData?: Partial<T>;
  nested?: boolean;
  skipMerge?: boolean;
}

/**
 * Device information
 *
 * @public
 */
export declare class Device {
  /**
   * Is the device mobile
   */
  static get isMobile(): boolean;
  /**
   * Is the device using touch controls
   */
  static get isTouch(): boolean;
  /**
   * Is the device using VR
   */
  static get isVR(): boolean;
  /**
   * Device quality setting
   */
  static get quality(): string;
  /**
   * Device orientation
   */
  static get orientation(): string;
  /**
   * Device language
   */
  static get language(): string;
  /**
   * Device OS
   */
  static get os(): {
    name: string;
    version: string;
  };
}

/**
 * Represents a dialog component in a 3D space.
 */
declare class DialogComponent extends Component3D<DialogComponentData> {
  private _factory;
  private _dialog;

  /**
   * Displays a script in the dialog.
   * @param {Object} args - The arguments for the script.
   * @param {string[]} args.texts - The texts to display in the script.
   * @param {number} args.speed - The speed at which the texts are displayed (in seconds per character).
   * @param {number} args.delay - The delay between each line of script to be displayed (in seconds).
   * @param {AbortSignal} args.signal - The signal to abort the script.
   * @returns {Promise<void>} - A promise that resolves when the script is finished displaying.
   */
  showScript(args: any): any;

  getDimensions(): Vector3;
}

/**
 * @public
 *
 * Data specification for {@link DialogComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface DialogComponentData extends Component3DData {
  type: "text";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   * Do not set any rotation on the component if the dialog is billboarded
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Text to display
   */
  text: string;
  /**
   * Weither the dialog should use billboard or not, defaults to true
   */
  billboard: boolean;
  /**
   * The background color of the dialog using hex color, defaults to 0x000000
   */
  backgroundColor: number;
  /**
   * The background opacity of the dialog, defaults to 0.8
   *
   */
  backgroundOpacity: number;
  /**
   * The opacity of the background, defaults to 1
   *
   */
  backgroundOpacity: number;
  /**
   * The max width of the dialog
   */
  width: number;
  /**
   *  The alignement of the text
   */
  align: "left" | "center" | "right";
}

declare type Dict<T> = Record<ID, T>;

/**
 * @public
 *
 * A component to display dust that follows a target in the game. You can use this component to create a trail of dust
 * that follows a player, for example.
 *
 * See {@link DustComponentData} for the data schema used to create a dust component
 */
export declare class DustComponent extends Component3D<DustComponentData> {
  #private;
}

/**
 * @public
 *
 * Data specification for {@link DustComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface DustComponentData extends Component3DData {
  type: "cloud";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Once created, the dust will follow the target
   */
  target: Object3D;
  /**
   * Minimum distance the target must move before the dust is spawned. Defaults to 2
   */
  spawnDistance?: number;
  /**
   * Speed at which the dust will disappear. Defaults to 1.5
   */
  decaySpeed?: number;
  /**
   * Randomness of the dust spawn position. Defaults to 0.9
   */
  randomXZ?: number;
  /**
   * Spawn position of the dust spawn source relative to the target. Defaults to {x: 0, y: 0, z: 0}
   */
  spawnSource?: XYZ;
  /**
   * Scale of the dust. Defaults to 1
   */
  scale?: number;
  /**
   * Condition for the dust to spawn. Defaults to null
   */
  condition?: null;
}

/**
 * Data properties for a dynamic rigid body
 */
declare interface DynamicProps {
  /**
   * The mass of the rigid body
   */
  mass?: number;
  /**
   * The friction of the rigid body
   */
  friction?: number;
  /**
   * The restitution of the rigid body
   */
  restitution?: number;
  /**
   * The density of the rigid body
   */
  density?: number;
}

declare interface EditorContext {
  gameData: Game;
}

/**
 * @public
 *
 * Use this to register listeners for events on the game (ready, update, etc)
 *
 * See {@link Events} for the list of events you can listen to
 */
export declare let Emitter: {
  /**
   * Register a listener for an event
   */
  on: (name: string, callback: Function) => void;
  /**
   * Unregister a listener for an event
   */
  off: (name: string, callback: Function) => void;
};

declare interface Entity {
  id: string;
  [key: string]: any;
}

declare type EntityMap = Dict<Entity> | Entity[];

declare type EntityMapGetter = string | ((s: any) => EntityMap);

declare type EntityUpdater = (id: string, data: InterpolationResult) => void;

/**
 * Provides access to the current script execution environment
 */
export declare const Env: {
  /**
   * Returns true if the scripts is running in studio edit mode
   */
  readonly editMode: boolean;
  readonly isServer: boolean;
};

/**
 * @public
 *
 * This component is used to display an environment map in the game. Use the studio to configure the environment for the space.
 *
 * This is a singleton component. You can only have one environment map in the game.
 */
export declare class EnvmapComponent extends Component3D<any> {
  private _envMap;
  protected init(): Promise<void>;
  private _abort;
  private _update3D;

  private _disposeEnvMap;
  protected dispose(): void;
}

declare interface EventEmitterOpts {
  scope: "engine" | "script";
  parent?: any;
  data?: any;
  script?: any;
}

declare interface EventListeners {
  [EVENTS.MATRIX_CHANGED]: (component: Component3D) => void;
  [EVENTS.DISPOSED]: () => void;
  [EVENTS.READY]: () => void;
  [EVENTS.COLLISION_ENTER]: (collision: CollisionEnterEvent) => void;
  [EVENTS.COLLISION_STAY]: (collision: CollisionEnterEvent) => void;
  [EVENTS.COLLISION_EXIT]: (collision: CollisionExitEvent) => void;
  [EVENTS.SENSOR_ENTER]: (event: SensorEvent) => void;
  [EVENTS.SENSOR_STAY]: (event: SensorEvent) => void;
  [EVENTS.SENSOR_EXIT]: (event: SensorEvent) => void;
  [EVENTS.LOOKAT_ENTER]: () => void;
  [EVENTS.LOOKAT_EXIT]: () => void;
  [EVENTS.VIEW_ENTER]: () => void;
  [EVENTS.VIEW_EXIT]: () => void;
  [EVENTS.INTERACT]: () => void;
  [EVENTS.INTERACT_ENTER]: () => void;
  [EVENTS.INTERACT_EXIT]: () => void;
}

/** @public */
declare type EventNextOptions = {
  timeout: number;
};

/** @public */
declare type EventQueryOptions = {
  minBlock: 0;
  maxBlock: 20153519;
};

declare type EventResult<
  Inputs extends AnyMutArray<{
    name: string;
    internalType: string;
  }>
> = {
  [K in Inputs[number]["name"]]: BigIntify<
    ParseType<
      [
        Extract<
          Inputs[number],
          {
            name: K;
          }
        >
      ]
    >
  >;
};

/** @public */
declare type EventResultMetaData = {
  $tx: string;
  $block: number;
};

declare const EVENTS: {
  readonly COLLISION_ENTER: "COLLISION_ENTER";
  readonly COLLISION_STAY: "COLLISION_STAY";
  readonly COLLISION_EXIT: "COLLISION_EXIT";
  readonly SENSOR_ENTER: "SENSOR_ENTER";
  readonly SENSOR_STAY: "SENSOR_STAY";
  readonly SENSOR_EXIT: "SENSOR_EXIT";
  readonly CHILD_ADDED: "CHILD_ADDED";
  readonly CHILD_REMOVED: "CHILD_REMOVED";
  readonly CHILDREN_LOADED: "CHILDREN_LOADED";
  readonly MATRIX_CHANGED: "MATRIX_CHANGED";
  readonly READY: "READY";
  readonly ATTACHED: "ATTACHED";
  readonly DISPOSED: "DISPOSED";
  readonly LOOKAT_ENTER: "LOOKAT_ENTER";
  readonly LOOKAT_EXIT: "LOOKAT_EXIT";
  readonly VIEW_ENTER: "VIEW_ENTER";
  readonly VIEW_EXIT: "VIEW_EXIT";
  readonly INTERACT: "INTERACT";
  readonly INTERACT_ENTER: "INTERACT_ENTER";
  readonly INTERACT_EXIT: "INTERACT_EXIT";
};

/**
 * An object containing all the events that can listened from scripting.
 *
 * @example
 *
 * ```ts
 *
 *  import { Emitter, Events } from "@oo/scripting"
 *
 *  // ...
 *  Emitter.on(Events.KEY_DOWN, handler)
 *
 *
 *  // ... later
 *  Emitter.off(Events.KEY_DOWN, handler)
 *
 * ```
 *
 * Currently the following events are supported
 *
 * - KEY_DOWN - The event triggered when a key is pressed down.
 *
 * - KEY_UP - The event triggered when a key is released.
 *
 * - MOUSE_DOWN - The event triggered when a mouse button is pressed down.
 *
 * - MOUSE_MOVE - The event triggered when the mouse is moved.
 *
 * - MOUSE_UP - The event triggered when a mouse button is released.
 *
 * - TOUCH_MOVE - The event triggered when a touch point is moved.
 *
 * - TOUCH_START - The event triggered when a touch point is initially placed on the touch surface.
 *
 * - TOUCH_END - The event triggered when a touch point is removed from the touch surface.
 *
 * - WHEEL - The event triggered when the mouse wheel is scrolled.
 *
 * - GAME_SPACE_LOADED - The event triggered when the game space has finished loading all the components.
 *
 * - GAME_READY - The event triggered when the game is ready to start.
 *
 * - GAME_START - The event triggered when the game is started.
 *
 * - GAME_DISPOSE - The event triggered when the game is disposed.
 *
 * - GAME_END - The event triggered when the game ends.
 *
 * - GAME_PRE_UPDATE - The event triggered before the game update. This event happens before the physics update.
 *
 * - GAME_UPDATE - The event triggered during each frame of the game update loop.
 *
 * - GAME_NOTIFY_PAUSE - The event triggered when the game notifies a pause.
 *
 * - GAME_NOTIFY_RESUME - The event triggered when the game notifies a resume.
 *
 * @public
 *
 */
export declare let Events: typeof ScriptEvents;

declare type FactoryClass = typeof ComponentFactory<any>;

/**
 * @public
 *
 * The class is used to implement first person camera controls.``
 *
 * The meaning of `object` & `target` options is intepreted as follows:
 *
 *   - The `object` is typically set to the camera object being controlled
 *
 *   - The `target` is the object that the camera will follow
 */
export declare class FirstPersonCameraControlsWrapper extends ControlsAbstract {
  private minRatioToRotateY;

  /**
   * activates or deactivates the controls
   *
   * @param {boolean} value - true to activate, false to deactivate
   */
  set active(value: boolean);
  /**
   * Returns true if the controls are active, false otherwise
   */
  get active(): boolean;

  private getCameraHeight;
}

/**
 * @public
 *
 * The class is used to implement fly camera controls.
 *
 * It takes in the `object` parameter which is the camera object being controlled
 *
 *
 */
export declare class FlyCameraControlsWrapper extends ControlsAbstract {
  /**
   * activates or deactivates the controls
   *
   * @param {boolean} value - true to activate, false to deactivate
   */
  set active(value: boolean);
  /**
   * Returns true if the controls are active, false otherwise
   */
  get active(): boolean;
}

/**
 * @public
 *
 * This component is used to activate a fog in the game. Use the studio to configure the fog for the space.
 *
 * This is a singleton component. You can only have one fog in the game.
 */
export declare class FogComponent extends Component3D {
  protected init(): Promise<void>;

  private _update3D;
  protected dispose(): void;
  get near(): number;
  set near(val: number);
  get far(): number;
  set far(val: number);
}

/**
 * Use this decorator to group multiple params into one folder
 */
export declare function Folder(
  label: string,
  opts?: any
): (target: any, key: any) => void;

export declare namespace Folder {
  var Down: () => (target: any, key: any) => void;
  var Up: () => (target: any, key: any) => void;
}

export declare interface Folder {
  Up: () => any;
  Down: () => any;
}

export declare interface FolderData {
  label: string;
  start?: boolean;
  end?: boolean;
  single?: boolean;
}

/**
 * @public
 */
declare type FontFamily =
  | "aeonik-bold"
  | "aeonik-medium"
  | "playfair-regular"
  | "playfair-italic";

declare interface Format {
  format: (value: any) => any;
  parse: (value: any) => any;
}

export declare const Formats: {
  pct: {
    format: (value: number) => number;
    parse: (value: number) => number;
  };
};

declare class FrustumChecker {
  private opts;
  _frame: number;
  _inFrustrum: boolean;
  constructor(opts: { component: Component3D; mesh: Mesh });
  private _onPreUpdate;
  dispose(): void;
}

declare type FundReturn = {
  transaction: null;
  status: "error" | "closed" | "success";
};

declare interface Game {
  id: string;
  kits: Record<string, KitData>;
  components: Record<string, ComponentData>;
  creatorId: string;
  editors: string[];
}

declare type GameAction = (typeof GameActions)[keyof typeof GameActions];

declare const GameActions: {
  readonly START: 1;
  readonly STOP: 2;
};

/**
 * @public
 *
 * This is the main entry point for mulitplayer games on the frontend.
 *
 * A Game client instance is used to join a game room on the server
 */
export declare const GameClient: CGameClient<any, any, any>;

declare interface GameClientOpts {
  space: Space;
}

/**
 * @public
 *
 * This class is used to communicate with the game server and sync the game state
 */
export declare class GameRoom<S extends BaseRoomState, RM = any, CM = any> {
  opts: {
    host: string;
    roomId: string;
    gameId: string;
    gameName?: string;
    space: Space;
    disableSnapshots?: boolean;
    timeout?: number;
    multiRoom?: boolean;
  };

  private _cclient;
  private _croom;
  private _status;
  private _lastError;
  private _emitter;
  private _statusEmitter;
  private _sessionId;
  private _tickRate;
  private _patchRate;
  private _synced;
  players: Record<string, any>;
  private _playerManager;
  private _ready;
  private _interpolator;
  private _playerStateSync;
  private _disposers;

  private _setStatus;
  private _connectColyseus;
  private _connectEngineRpc;
  private _initJoin;
  private _tryConnect;
  private _setRoom;
  private _unsetRoom;
  private _connect;
  private get _roomState();

  private _initialSync;
  private _handleCyberMsg;
  private _handleState;
  private _updateNetState;
  private _assignNetState;
  private _isGameLoop;
  get isGameLoop(): boolean;
  private _updateGameLoopStatus;
  private _handleJoin;
  private _handleLeave;
  private _addSnapshot;
  private _syncPlayers;
  private _addPlayerToScene;
  private _removePlayerFromScene;
  /**
   * Returns a promise that resolves when the client is connected to the server, and the initial state is synced
   */
  get ready(): Promise<void>;
  /**
   * Returns the host url of the server
   */
  get host(): string;
  /**
   * Returns the room id of the game server
   */
  get roomId(): string;
  /**
   * Returns the status of the connection; possible values are: "disconnected", "connecting", "connected"
   */
  get status(): ConnectionStatus;
  /**
   * Returns the last error message if any
   */
  get lastError(): string;
  /**
   * Returns the session id of the client that is assigned by the server
   */
  get sessionId(): string;
  /**
   * Returns the tick rate of the server, this is the fps of the simulation loop on the serve
   */
  get tickRate(): number;
  /**
   * Returns the patch rate of the server, this is the number of times the server sends a state update per second
   */
  get patchRate(): number;
  /**
   * Returns true if the room state is initially synced with the server
   */
  get synced(): boolean;
  /**
   * Returns the current state of the room, the game state is regularly updated by the server and synced with the clients
   *
   * cf {@link BaseRoomState} for common properties on the state; the game server can add custom properties to the state that are specific to the game
   */
  get state(): any;
  /**
   * Returns true if the client is the host of the game room, the host is the player that created the room
   */
  get isHost(): boolean;
  private _handleDisconnect;
  /**
   * Disconnects the client from the server
   */
  leave(): void;
  /**
   * @deprecated use `send(type: string | number, data: any): void;` instead
   */
  send(message: any): any;
  /**
   * Sends a message to the server, the data type is specific to the game
   *
   * For example `client.send({ type: "hit", damage: 10 })`
   */
  send(type: string | number, data: CM): any;
  broadcast(message: any): void;
  private _requestGameAction;
  /**
   * Sends a request to the server to start the game
   */
  requestStart(countdown: number): void;
  private _onEventFiltered;
  private _onGameActionFilter;
  onStatusChange(listener: (status: ConnectionStatus) => unknown): void;

  /**
   * listen to game start notifications from the server
   */
  onStart(listener: (data: any) => unknown): void;
  /**
   * listen to game stop notifications from the server
   */
  onStop(listener: (data: any) => unknown): void;
  /**
   * @deprecated use `onMessage(type: string | number, listener: (data: any) => void): () => void;` instead
   */
  onMessage(listener: (data: any) => void): () => void;
  /**
   * listen to incoming messages from the server
   */
  onMessage(type: string | number, listener: (data: any) => void): () => void;
  /**
   * listen to connect events, this is fired when the client is connected to the server, but not necessarily synced
   */
  onConnect(listener: () => void): void;
  /**
   * listen to disconnect events, this is fired when the client is disconnected from the server
   */
  onDisconnect(listener: () => void): void;
  /**
   * listen to sync events, this is fired when the client is connected to the server and the initial state is synced
   */
  onSync(listener: () => void): void | (() => void);
  /**
   * listen to state events, this is fired whenever the client receives a state update from the server as defined by the tick rate
   */
  onState(listener: (state: S) => void): void;
  /**
   * listen to player joined events, this is fired whenever a new player joins the game room
   */
  onPlayerJoined(listener: (data: PlayerWrapper) => void): void;
  /**
   * listen to player left events, this is fired whenever a player leaves the game room
   */
  onPlayerLeft(listener: (data: { sessionId: string }) => void): void;
  /**
   * Returns the {@link Interpolator} instance that is used to interpolate the players' states
   */
  get interpolator(): Interpolator;

  /**
   * Returns the {@link PlayerStateSync} instance that is used to sync the players' states
   */
  getPlayerStateSync(
    selector?: (state: S) => Record<string, any>
  ): PlayerStateSync;
}

export declare let GameServer: ServerApi;

declare type GameState =
  | "GAME_PRELOAD"
  | "GAME_INIT"
  | "GAME_READY"
  | "GAME_START"
  | "GAME_UPDATE"
  | "GAME_END"
  | "GAME_DISPOSE"
  | "GAME_PAUSE"
  | "GAME_NOTIFY_PAUSE"
  | "GAME_NOTIFY_RESUME"
  | "GAME_RESUME"
  | "GAME_PRE_RENDER";

/**
 * @public
 *
 * The GameStorage instance is used to store and retrieve data from the game storage.
 */
export declare let GameStorage: GameStorageApi;

/**
 * @public
 *
 * This class provides an API to store and retrieve data from the games.
 */
export declare class GameStorageApi {
  private _getCollectionRef;
  /**
   * Get a stored value by key from the game storage.
   */
  get(key: string): Promise<any>;
  /**
   * Get all stored values from the game storage.
   */
  getAll(): Promise<any[]>;
  /**
   * Set a value by key in the game storage.
   */
  set(key: string, data: any): Promise<void>;
  /**
   * Get the current player data from the game storage.
   */
  getPlayerData(): Promise<any>;
  /**
   * Set the current player data in the game storage.
   */
  setPlayerData(data: any): Promise<void>;
}

declare class Geometry extends BufferGeometry<NormalBufferAttributes> {
  constructor();
  customAttributes: {
    name: string;
    content: BufferAttribute;
  }[];
}

declare class GeometryInstancer extends InstancedBufferGeometry {
  constructor(geometry: any, opts?: {});
  opts: {};
  projMatrix: Matrix4;
  isLOD: boolean;
  _lods: any[];
  isStatic: any;
  name: any;
  vrmName: any;
  sphere: any;
  transparencySorting: boolean;
  useUniqueFrustumTestFunction: any;
  tempCenter: any;
  tempRadius: any;
  useNormal: any;
  useGeometryColor: any;
  useInstancedColor: any;
  useFrustumCulling: any;
  useSorting: any;
  useSkin: any;
  vrmScale: any;
  sorter: any;
  max: any;
  previousMax: any;
  tempSphere: Sphere;
  INSTANCED: boolean;
  copyBuffer: any;
  scaleRatio: any;
  _closestDistance: number;
  _closestPosition: Vector3;
  baseGeometry: any;
  originalSphere: Sphere;
  _closestInstance: Vector3;
  _closestRotation: Quaternion;
  _closestScale: Vector3;
  _latestCamera: any;
  _wMatrix: Matrix4;
  oldLength: number;
  setUniqueFrustumTest(value: any): void;
  sort(wrappers: any, camera?: any, forceView?: boolean): void;
  visibleWrappers: any[];
  _maxInstanceCount: any;
  radixminZ: number;
  radixmaxZ: number;
  _radixOptions: {
    get: (el: any) => any;
    aux: any[];
    reversed: boolean;
  };
  updateNonSorted(instance: any): void;
  rangeNonSorted(instances: any): void;
  updateAttribute(scope: any, wrapper: any, c: any): void;
  computeClosestDistance(camera: any): void;
  closestMultiple(number: any): any;
  updateCopyBuffers(): void;
  bufferVersion: any;
  grow(count: any): void;
  assemble(instances: any): void;
  initializeBaseGeometry(geometry: any): void;
  prepareForRadixSorting(wrapper: any): void;
  computeRadix(wrappers: any): void;
  findInterval(num: any, arr: any): number;
}

export declare function getParam(key: string, value: any, decl?: any): any;

export declare function getParams(instance: any, autoCreate: boolean): any[];

export declare function getRpcMethods(target: any): any;

export declare type Getter<T> = (() => T) | T;

declare type Getter_2 = (s: any) => any;

/**
 * @public
 *
 * A component to display godrays effect in the game.
 *
 * See {@link GodrayComponentData} for the data schema used to create a godray component
 */
export declare class GodrayComponent extends Component3D<GodrayComponentData> {
  private _factory;
  private _godray;

  protected init(): Promise<void>;
  private _update3D;

  protected dispose(): void;
  /*****************************************************************
   *                      Public API
   *****************************************************************/
  /**
   * Opacity of the component, from 0 to 1. Defaults to 1
   */
  opacity: number;
  /**
   * Color of the compoent. Defaults to 0xffffff
   */
  color: number;
}

/**
 * @public
 *
 * Data specification for {@link GodrayComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface GodrayComponentData extends Component3DData {
  type: "godray";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Opacity of the component, from 0 to 1. Defaults to 1
   */
  opacity?: number;
  /**
   * Color of the component. Defaults to 0xffffff
   */
  color?: number;
}

declare class GrassBatch {
  data: any;
  quadGeo: any;
  _baseMesh: PipeLineMesh;
  mesh: any;
  material: QuadMaterial;
  constructor(opts: { parent: Object3D; data: any; quadGeometry: any });
  _create(parent: any): void;
  update(data: any): void;
  add(data: any): any;
  remove(wrapper: InstancedMeshWrapper): void;
}

/**
 * @public
 *
 * A component to display birds in the game.
 *
 * See {@link GrassComponentData} for the data schema used to create a grass component
 */
declare class GrassComponent extends Component3D<GrassComponentData> {
  getInstanceWrapper(): default_4;
  updateFromSource(): void;

  updateColors(): void;

  color: number;
  uTipColor1: number;
  uTipColor2: number;
  uBaseColor: number;
  uTipColor3: number;
  uTipColor4: number;
  uBaseColor2: number;
  colorRepartition: number;
}

/**
 * @public
 *
 * Data specification for {@link GrassComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface GrassComponentData extends Component3DData {
  type: "grass";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Color of the component. Defaults to 0xffffff
   */
  color?: number;
  uBaseColor: number;
  uBaseColor2: number;
  uTipColor1: number;
  uTipColor2: number;
  uTipColor3: number;
  uTipColor4: number;
  colorRepartition: number;
}

declare class GrassComponentEditor extends Component3DEditor<GrassComponent> {
  gui: {
    type: string;
    children: {
      transform: {
        type: string;
        label: string;
        children: any;
      };
      colorOpacity: {
        type: string;
        label: string;
        children: {
          uBaseColor: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          uBaseColor2: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          tipColor1: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
            onChange: (val: any) => Promise<void>;
          };
          tipColor2: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          tipColor3: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          tipColor4: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          colorRepartition: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
            min: number;
            max: number;
            step: number;
          };
        };
      };
    };
  };
  getGUI(): {
    type: string;
    children: {
      transform: {
        type: string;
        label: string;
        children: any;
      };
      colorOpacity: {
        type: string;
        label: string;
        children: {
          uBaseColor: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          uBaseColor2: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          tipColor1: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
            onChange: (val: any) => Promise<void>;
          };
          tipColor2: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          tipColor3: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          tipColor4: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
          };
          colorRepartition: {
            type: string;
            name: string;
            value: (string | GrassComponentData_2)[];
            min: number;
            max: number;
            step: number;
          };
        };
      };
    };
  };
}

declare class GrassFactory {
  batches: Record<string, GrassBatch>;
  quadGeo: any;
  parent: Object3D;
  constructor();
  preload(opts: any): Promise<void>;
  getKey(data: any): string;
  getBatch(data: any): {
    key: string;
    batch: GrassBatch;
  };
  get(data: any): GrassInstance;
  update(grass: GrassInstance, data: any): void;
}

declare class GrassInstance {
  key: string;
  batch: GrassBatch;
  data: any;
  wrapper: InstancedMeshWrapper;
  component: Component3D;
  setComponent(component: Component3D): void;
  _setOpts(opts: {
    key: string;
    batch: GrassBatch;
    data: any;
    wrapper: InstancedMeshWrapper;
  }): void;
  buildCollisionMesh(): {
    wrapper: InstancedMeshWrapper;
    updateWorldMatrix(updateParents: any, updateChildren: any): void;
    readonly isMesh: true;
    readonly type: string | "Mesh";
    geometry: BufferGeometry<NormalBufferAttributes>;
    material: Material | Material[];
    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?:
      | {
          [key: string]: number;
        }
      | undefined;
    updateMorphTargets(): void;
    getVertexPosition(index: number, target: Vector3): Vector3;
    readonly isObject3D: true;
    readonly id: number;
    uuid: string;
    name: string;
    parent: Object3D | null;
    children: Object3D[];
    up: Vector3;
    readonly position: Vector3;
    readonly rotation: Euler;
    readonly quaternion: Quaternion;
    readonly scale: Vector3;
    readonly modelViewMatrix: Matrix4;
    readonly normalMatrix: Matrix3;
    matrix: Matrix4;
    matrixWorld: Matrix4;
    matrixAutoUpdate: boolean;
    matrixWorldAutoUpdate: boolean;
    matrixWorldNeedsUpdate: boolean;
    layers: Layers;
    visible: boolean;
    castShadow: boolean;
    receiveShadow: boolean;
    frustumCulled: boolean;
    renderOrder: number;
    animations: AnimationClip[];
    userData: {
      [key: string]: any;
    };
    customDepthMaterial?: Material | undefined;
    customDistanceMaterial?: Material | undefined;
    onBeforeRender: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera_2,
      geometry: BufferGeometry,
      material: Material,
      group: Group
    ) => void;
    onAfterRender: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera_2,
      geometry: BufferGeometry,
      material: Material,
      group: Group
    ) => void;
    applyMatrix4(matrix: Matrix4): void;
    applyQuaternion(quaternion: Quaternion): any;
    setRotationFromAxisAngle(axis: Vector3, angle: number): void;
    setRotationFromEuler(euler: Euler): void;
    setRotationFromMatrix(m: Matrix4): void;
    setRotationFromQuaternion(q: Quaternion): void;
    rotateOnAxis(axis: Vector3, angle: number): any;
    rotateOnWorldAxis(axis: Vector3, angle: number): any;
    rotateX(angle: number): any;
    rotateY(angle: number): any;
    rotateZ(angle: number): any;
    translateOnAxis(axis: Vector3, distance: number): any;
    translateX(distance: number): any;
    translateY(distance: number): any;
    translateZ(distance: number): any;
    localToWorld(vector: Vector3): Vector3;
    worldToLocal(vector: Vector3): Vector3;
    lookAt(vector: Vector3): void;
    lookAt(x: number, y: number, z: number): void;
    add(...object: Object3D[]): any;
    remove(...object: Object3D[]): any;
    removeFromParent(): any;
    clear(): any;
    attach(object: Object3D): any;
    getObjectById(id: number): Object3D | undefined;
    getObjectByName(name: string): Object3D | undefined;
    getObjectByProperty(name: string, value: any): Object3D | undefined;
    getObjectsByProperty(name: string, value: any): Object3D[];
    getWorldPosition(target: Vector3): Vector3;
    getWorldQuaternion(target: Quaternion): Quaternion;
    getWorldScale(target: Vector3): Vector3;
    getWorldDirection(target: Vector3): Vector3;
    _raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    traverse(callback: (object: Object3D) => any): void;
    traverseVisible(callback: (object: Object3D) => any): void;
    traverseAncestors(callback: (object: Object3D) => any): void;
    updateMatrix(): void;
    updateMatrixWorld(force?: boolean): void;
    toJSON(meta?: {
      geometries: any;
      materials: any;
      textures: any;
      images: any;
    }): any;
    clone(recursive?: boolean): any;
    copy(source: any, recursive?: boolean): any;
    spherecast?(sphere: Sphere, intersects: Array<Intersection>): void;
    addEventListener<T extends keyof Object3DEventMap>(
      type: T,
      listener: EventListener_2<Object3DEventMap[T], T, any>
    ): void;
    addEventListener<T extends string>(
      type: T,
      listener: EventListener_2<{}, T, any>
    ): void;
    hasEventListener<T extends keyof Object3DEventMap>(
      type: T,
      listener: EventListener_2<Object3DEventMap[T], T, any>
    ): boolean;
    hasEventListener<T extends string>(
      type: T,
      listener: EventListener_2<{}, T, any>
    ): boolean;
    removeEventListener<T extends keyof Object3DEventMap>(
      type: T,
      listener: EventListener_2<Object3DEventMap[T], T, any>
    ): void;
    removeEventListener<T extends string>(
      type: T,
      listener: EventListener_2<{}, T, any>
    ): void;
    dispatchEvent<T extends keyof Object3DEventMap>(
      event: BaseEvent<T> & Object3DEventMap[T]
    ): void;
    pointerEvents?: "none" | "auto" | "listener";
    pointerEventsType?: AllowedPointerEventsType;
    pointerEventsOrder?: number;
  };
  updateFromSource(): void;
  destroy(): void;
}

/**
 * @public
 *
 * This component is used to group multiple components together
 */
declare class GroupComponent extends Component3D<GroupComponentData> {
  private _mesh;
  protected init(): Promise<void>;
  private _update3D;

  protected dispose(): void;
  private _childBBox;
  getCollisionMesh(): Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  >;
  protected _getBBoxImp(target: Box3): Box3;
}

/**
 * @public
 *
 * Data specification for {@link GroupComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface GroupComponentData extends Component3DData {
  type: "group";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
}

/**
 * Group Params need to be initialized
 * @example @Param({ type: "group" }) myGroup = new MyGroup();
 */
export declare interface GroupParam<T = any> extends AbstractParam<T> {
  type?: "group";
  children?: {
    key: string;
    param: ScriptParam;
  }[];
  factory?: new () => T;
}

declare type ID = string;

declare type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? A
  : B;

/**
 * @public
 *
 * Image component, used to display images in the game (.png, .jpg, .jpeg)
 *
 * See {@link IframeComponentData} for the data schema used to create an iframe component
 */
declare class IframeComponent extends Component3D<IframeComponentData> {
  private _urlData;
  private _ytHandler;
  cssObject: CSS3DObject;
  glCache: Mesh;
  glPlane: Mesh;
  _border: BorderWrapper;
  iframe: HTMLIFrameElement;
  player: any;
  camera: any;
  physics: any;
  canvas: any;
  frustumChecker: FrustumChecker;
  get urlData():
    | {
        type: "YOUTUBE";
        videoId: string;
        url: string;
      }
    | {
        type: "GENERIC";
        url: string;
      };
  protected init: () => Promise<void>;
  private _hasEvents;
  private _addEvents;
  private _removeEvents;
  isDragging: boolean;
  private onTouchStart;
  private onTouchMove;
  private onTouchEnd;
  private onMouseMove;
  handleActivation: (e: any) => void;
  mousevec: Vector2;
  raycast: (e: any) => any;

  private _display;
  _setDisplay(value: boolean): void;
  private generateIframe;
  private generatePlanes;

  protected _onCreateCollisionMesh(): Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  >;

  protected _disposeIframe(): void;
  protected dispose(): void;
}

/**
 * @public
 *
 * Data specification for {@link IframeComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface IframeComponentData extends Component3DData {
  type: "iframe";
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * url of the iframe file
   */
  url: string;
  borderColor?: number;
  borderSize?: number;
  borderDepth?: number;
  borderOpacity?: number;
  hasBorder?: boolean;
  /**
   * Options for youtube links
   */
  youtubeOpts: {
    autoPlay: boolean;
    audioType: "ambient" | "spatial" | "lookat";
    audioRange: number;
    volume: number;
  };
  /**
   * Whether the component should be displayed in live mode. Defaults to true
   */
  display?: boolean;
}

declare type Image_2 =
  | string
  | {
      url: string;
    };

/**
 * @public
 *
 * Image component, used to display images in the game (.png, .jpg, .jpeg)
 *
 * See {@link ImageComponentData} for the data schema used to create an image component
 */
export declare class ImageComponent extends Component3D<ImageComponentData> {
  private _imageFactory;

  private _border;

  protected init(): Promise<void>;

  getCollisionMesh(): Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  >;
  protected _getBBoxImp(target: Box3): Box3;
  protected dispose(): void;
  /*****************************************************************
   *                      Public API
   *****************************************************************/
  opacity: number;
  useMipMap: boolean;
  minFilter: string;
  magFilter: string;
  hasBorder: boolean;
  borderColor: string;
  borderSize: number;
  borderDepth: number;
  borderOpacity: number;
}

/**
 * @public
 *
 * Data specification for {@link ImageComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface ImageComponentData extends Component3DData {
  type: "image";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * url of the image file
   */
  url: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  borderColor?: number;
  borderSize?: number;
  borderDepth?: number;
  borderOpacity?: number;
  hasBorder?: boolean;

  /**
   * Set opacity of the image. Defaults to 1
   */
  opacity?: number;
  /**
   * Set if the image should use mipmaps. Defaults to true
   */
  useMipMap?: boolean;
  /**
   * Set the minFilter of the image. Defaults to 'LinearMipmapLinearFilter'
   */
  minFilter?: string;
  /**
   * Set the magFilter of the image. Defaults to 'LinearFilter'
   */
  magFilter?: string;
}

/**
 * @public
 *
 * Data specification for {@link ImpactComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface ImpactComponentData extends Component3DData {
  type: "impact";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
}

declare class InstancedBasic extends MeshBasicMaterial_2 {}

/**
 * @public
 *
 * Data specification for InstancedGeometryOptionsData
 */
declare interface InstancedGeometryOptionsData {
  /**
   * instanced geometry use the scale attribute
   */
  scale: boolean;
  /**
   * instanced geometry use opacity attribute
   */
  opacity: boolean;
  /**
   * instanced geometry use normal attribute
   */
  useNormal: boolean;
  /**
   * instanced geometry use normal attribute
   */
  rotation: boolean;
  /**
   * instanced geometry use rotation only on the Y axis
   */
  rotationY: boolean;
  /**
   * instanced geometry use a color value per instance
   */
  color: boolean;
  /**
   * instanced geometry use an atlas for the textures
   */
  atlas: true;
  /**
   * Bounding Sphere for the instanced geometry
   */
  boundingSphere: Sphere;
  /**
   * Using the reverse-painter alorithm for transparency sorting
   */
  transparencySorting: boolean;
  /**
   * using dynamic shadow on this instanced geometry
   */
  shadow: string;
  /**
   * using a custom sorting strategy for the instanced geometry
   */
  sorter: any;

  /**
   * name of the instanced geometry
   */
  name: string;
}

/**
 * @public
 *
 * Data specification for {@link InstancedMeshComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface InstancedMeshComponentData extends Component3DData {
  kit?: "cyber";
  type: "instancedmesh";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Mesh to instanced
   */
  baseMesh: Mesh;
  /**
   * instanced geometry use opacity attribute
   */
  opacity: boolean;
  /**
   * instanced geometry use normal attribute
   */
  useNormal: boolean;
  /**
   * instanced geometry use color attribute of the base geometry
   */
  useGeometryColor: boolean;
  /**
   * instanced geometry use a color value per instance
   */
  color: boolean;
  /**
   * instanced geometry use an atlas for the textures
   */
  atlas: false;
  /**
   * Using the reverse-painter alorithm for transparency sorting
   */
  transparencySorting: boolean;
  /**
   * using dynamic shadow on this instanced geometry
   */
  shadow: string;
  /**
   * using a custom sorting strategy for the instanced geometry
   */
  sorter: any;

  /**
   * Any visual plugins to apply to the scatter mesh.
   */
  plugins: any[];
  /**
   * using the frustum culling for the instanced geometry
   */
  useFrustumCulling: boolean;
  /**
   * using a sorting algorithm for the instanced geometry
   */
  useSorting: boolean;
  /**
   * Material modifiers that replace built-in shaders with custom ones.
   */
  chunks: any;
}

declare class InstancedMeshWrapper {
  constructor(mesh: any, geometry: any, id: any, opts?: {});
  /**
   * @type {InstancedPipelineMesh}
   */
  mesh: InstancedPipelineMesh;
  id: any;
  geometry: any;
  opts: {};
  randomID: number;
  _dynamicShadow: boolean;
  scale: Vector3;
  customFrustumTest: any;
  boundingBox: any;
  color: Color_2;
  position: Vector3;
  rotation: number[];
  eulerRotation: {
    x: number;
    y: number;
    z: number;
  };
  rotationY: number;
  _atlas: {
    x: any;
    y: any;
    z: any;
    w: any;
  };
  _opacity: any;
  _visible: boolean;
  __objectSource: any;
  set atlas(val: { x: any; y: any; z: any; w: any });
  get atlas(): {
    x: any;
    y: any;
    z: any;
    w: any;
  };
  set opacity(val: any);
  get opacity(): any;
  setBorder(val: any): void;
  border: any;
  setPosition(val: any): void;
  setRotationY(val: any): void;
  setRotation(val: any): void;
  setQuaternion(val: any): void;
  attachTo(source: any, callback?: any): void;
  __objectCallback: any;
  updateFromSource(source?: any): void;
  set visible(val: boolean);
  get visible(): boolean;
  setColor(val: any): void;
  setScale(x: any, y: any, z: any): void;
  set dynamicShadow(val: boolean);
  get dynamicShadow(): boolean;
  getBBox(): Box3;
  /**
   * @param {Box3} target
   */
  _getBBoxImp(target: Box3): Box3;
  set sorter(sorter: any);
  get sorter(): any;
  buildCollisionMesh(): InstancedWrapperCollisionMesh;
  /**
   * @type {Mesh}
   */
  _collisionMesh: Mesh;
  getCollisionMesh(): Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  >;
  _updateCollisionMesh(): void;
  remove(): void;
}

declare class InstancedPipelineMesh extends PipeLineMesh {
  constructor(geometry: any, material: any, opts: any);
  baseGeometry: any;
  instanceType: any;
  count: number;
  instances: any[];
  instancesCount: number;
  usedIndexes: BufferedInt32Array;
  nonUsedIndexes: BufferedInt32Array;
  wrapperFlagUpdates: any[];
  setScaleRatio(val: any): void;
  _scaleRatio: any;
  sort(camera: any, force?: boolean): void;
  _closestDistance: any;
  add(opts: any): InstancedMeshWrapper;
  wrapperUpdate(wrapper: any): void;
  remove(instance: any): void;
  _update(scene: any, camera: any, force?: boolean): void;
  addEvents(): void;
  updateEvent: any;
  removeEvents(): void;
  reset(): void;
}

declare class InstancedShadow extends MeshShadowMaterial {}

declare class InstancedStandard extends MeshStandardMaterial_2 {}

declare class InstancedWrapperCollisionMesh extends Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[],
  Object3DEventMap
> {
  constructor(geometry: any, material: any, wrapper: any);
  /**
   * @type {InstancedMeshWrapper}
   */
  wrapper: InstancedMeshWrapper;
  updateWorldMatrix(updateParents: any, updateChildren: any): void;
}

declare type InstanceType_2<T> = T extends new (...args: any[]) => infer R
  ? ItemType<R>
  : T;

declare interface InteractData {
  enabled: boolean;
  distance: number;
  offset: {
    x: number;
    y: number;
    z: number;
  };
  scale: number;
  anchorY: "top" | "center" | "bottom";
  anchorX: "left" | "center" | "right";
  billboard: boolean;
}

declare class InteractionComponent extends Component3D<InteractionComponentData> {
  _factory: InteractionFactory;
  _interaction: any;
  isInteractionComponent: boolean;
  atlasInputs: string[];
  constructor(opts: any);
  init(): Promise<void>;
  update3D(): void;
  collision: any;
  getCollisionMesh(): any;
  dispose(): void;
  set distanceTarget(val: any);
  get distanceTarget(): any;
  set opacity(val: any);
  get opacity(): any;
  set atlas(val: any);
  get atlas(): any;
  set key(val: any);
  get key(): any;
  set active(val: any);
  get active(): any;
  set color(val: any);
  get color(): any;
  onInteraction(list: () => void): () => void;
}

/**
 * @public
 *
 * Data specification for {@link InteractionComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface InteractionComponentData extends Component3DData {
  type: "text";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}, only in the case of billboard = false
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * distance from the distanceTarget at which the interaction is displayed / active
   */
  distance: number;
  /**
   * target source to calculate the distance for the interaction
   */
  distanceTarget: XYZ;
  /**
   * atlas key for the icon
   */
  atlas: (typeof atlasInputs)[number];
  /**
   * trigger key for the interaction ( keyboard key ), could be an array of string also for multiple triggers
   */
  key: string | string[];
  /**
   * Billboard the interaction to always face the camera
   */
  billboard: boolean;
  /**
   * color of the interaction
   */
  color?: number;
}

declare class InteractionFactory {
  /**
   * @type {InteractionFactory}
   */
  static _instance: InteractionFactory;
  static get instance(): InteractionFactory;
  isInit: boolean;
  _init: boolean;
  mesh: any;
  meshes: {};
  instances: any[];
  preload(): Promise<void>;
  json: any;
  get(parent: any, data?: {}): Promise<InteractionWrapper>;
  _isInit: boolean;
  initialisation: Promise<void>;
  dispose(): void;
  buildCollisionMesh: () => Mesh<
    BoxGeometry,
    MeshBasicMaterial,
    Object3DEventMap
  >;
  _material: MeshBasicMaterial;
  _collisionMesh: Mesh<BoxGeometry, MeshBasicMaterial, Object3DEventMap>;
}

declare class InteractionWrapper {
  /**
   * Creates an instance of InteractionWrapper.
   * @param {Object} mesh - The mesh object.
   * @param {Object} data - The data object.
   * @param {Object} json - The JSON object.
   */
  constructor(mesh: any, data: any, json: any);
  /**
   * The interaction distance.
   * @type {number}
   */
  interactionDistance: number;
  /**
   * Sets the distance target.
   * @param {Object} val - The distance target value.
   */
  set distanceTarget(val: any);
  /**
   * Gets the distance target.
   * @returns {Object} - The distance target.
   */
  get distanceTarget(): any;

  /**
   * The visibility status.
   * @type {boolean}
   */
  visible: boolean;

  /**
   * The key.
   * @type {string}
   */
  key: string;

  /**
   * Sets the active status.
   * @param {boolean} val - The active status value.
   */
  set active(val: boolean);
  /**
   * Gets the active status.
   * @returns {boolean} - The active status.
   */
  get active(): boolean;

  /**
   * Sets the atlas.
   * @param {string} val - The atlas value.
   */
  set atlas(val: string);
  /**
   * Gets the atlas.
   * @returns {string} - The atlas.
   */
  get atlas(): string;
  _mobileRaycastMesh: Mesh<BoxGeometry, MeshBasicMaterial, Object3DEventMap>;
  _distanceTarget: any;
  set aspectRatioDisplay(val: any);
  get aspectRatioDisplay(): any;
  uvsOffset: {
    x: number;
    y: number;
  };
  uvMultiply: {
    x: number;
    y: number;
  };

  source: any;

  _pos: Vector3;

  runCallback(cb: any): void;

  /**
   * Disposes the interaction wrapper.
   */
  dispose(): void;

  updateEvent: any;

  keyEvent: any;

  _active: boolean;
  /**
   * Set the opacity of the instance.
   */
  set opacity(val: number);
  /**
   * Get the opacity of the instance.
   * @returns {number} - The opacity.
   */
  get opacity(): number;
  /**
   * Set the color of the instance.
   */
  set color(val: number);
  /**
   * Get the color of the instance.
   * @returns {number} - The color
   */
  get color(): number;
}

declare interface InternalCreateComponentOpts {
  parent?: Object3D;
  abort?: AbortSignal;
  persistent?: boolean;
  overrideOpts?: {};
  duplicating?: boolean;
  netId?: string;
  sessionId?: string;
}

declare type Interpolable = number | Vec3 | Quat | string;

declare interface InterpolatedSnapshot {
  state: Dict<InterpolationResult>;
  percent: number;
  older: ID;
  newer: ID;
}

declare interface InterpolationResolver {
  getEntityMap: EntityMapGetter;
  updateEntity: EntityUpdater;
  vars: InterpolationVar[];
}

declare type InterpolationResult = Record<string, Interpolable>;

declare type InterpolationVar =
  | string
  | {
      key: string;
      getter?: Getter_2;
      method: LerpMethod;
    };

/** A Snapshot Interpolation library. */
declare class Interpolator {
  /** Access the vault. */
  vault: Vault;
  private _interpolationBuffer;
  private _timeOffset;
  /** The current server time based on the current snapshot interpolation. */
  serverTime: number;
  config: Config_2;
  constructor();
  setConfig(config: Config_2): void;
  get interpolationBuffer(): number;
  set interpolationBuffer(milliseconds: number);
  /**
   * Get the time offset between client and server (inclusive latency).
   * If the client and server time are in sync, timeOffset will be the latency.
   */
  get timeOffset(): number;
  private _netQueue;
  private _latency;
  simulateLatency(milliseconds: number): void;
  addSnapshot(snapshot: Snapshot): void;
  private _addSnapshot;
  private _defaultTarget;
  /** Interpolate between two snapshots give the percentage or time. */
  interpolate(
    snapshotA: Snapshot,
    snapshotB: Snapshot,
    timeOrPercentage: number,
    resolver: InterpolationResolver
  ): void;
  private _setTo;
  private _interpolate;
  private _getIMethod;
  private _getIKey;
  private _resolveEntityMap;
  _getMap(entities: Entity[]): Dict<Entity>;
  private _resolveVar;
  private _target;
  private _lerp;
  /** Get the calculated interpolation on the client. */
  calcInterpolation(resolver: InterpolationResolver): void;
}

declare type Is1Length<T extends any> = T extends [any]
  ? true
  : T extends readonly [any]
  ? true
  : false;

export declare const IS_PARAM_VAL: unique symbol;

declare type ItemType<R> = R extends Number
  ? number
  : R extends String
  ? string
  : R extends Boolean
  ? boolean
  : R;

export declare interface JoinRoomOpts {
  /**
   * The host of the game server, this can be the local dev server or the production server
   */
  host: string;
  /**
   * Usually the roomId is managed by the application (e.g. from invite links).
   * USE THIS ONLY IF YOU WANT TO JOIN A ROOM OTHER THAN THE ONE MANAGED BY THE APPLICATION
   */
  roomId?: string;
  serverEngine?: boolean;
  /**
   * Disable snapshots for the room, default is true, disable only if you don't want to sync the players' states
   */
  disableSnapshots?: boolean;
  /**
   * Multi-room mode, default is false
   */
  multiRoom?: boolean;
}

/**
 * @public
 *
 * This component is used to display Kit Assets elements in the game
 *
 * See {@link KitbashComponentData} for the data schema used to create a kitbash component
 */
export declare class KitBashComponent extends Component3D<KitbashComponentData> {
  setPlugins(item: any, val: any): void;
  getPlugins(item: any): any;
}

/**
 * @public
 *
 * Data specification for {@link KitBashComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface KitbashComponentData extends Component3DData {
  type: "kitbash";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Type of the kit asset
   */
  kitType: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
}

declare class KitbashEditor extends Component3DEditor {
  gui: {
    type: string;
    label: string;
    children: any;
  };
  getGUI(): {
    type: string;
    label: string;
    children: any;
  };
}

declare interface KitBashElementOpts extends ComponentOpts {
  kitbashType: any;
}

declare interface KitData {
  id: string;
  name: string;
  paths: {
    high: string;
    mid: string;
    low: string;
    low_compressed: string;
    original: string;
  };
}

declare class Lambert extends MeshLambertMaterial_2 {}

/**
 * @public
 */
declare interface LambertMaterialData extends BaseMaterialData {
  type: "lambert";
  bumpMap?: TextureData;
  bumpScale: number;
}

declare enum LerpMethod {
  LINEAR = 0,
  RADIAN = 1,
  DEGREE = 2,
  DISCRETE = 3,
}

/**
 * @public
 *
 * This component is used to controls lighting in the game. Use the studio to configure the lighting for the space.
 *
 * This is a singleton component. You can only have one lighting in the game.
 */
export declare class LightingComponent extends Component3D<any> {
  protected init(): Promise<void>;
  private tmpDir;

  private _update3D;

  protected dispose(): void;
}

declare type Listener = (...args: any[]) => unknown;

declare class LookatDetector extends AugmentedGroup {
  _components: Component3D[];
  _lookedAt: Component3D | null;
  _current: Component3D | null;
  _currentLookatDuration: number;
  private _debug;
  private _debugMesh;
  private _frameStep;
  private _frame;
  private _timer;
  ray: Ray;
  private _testHit;
  private _active;
  constructor(opts?: { frameStep?: number });
  private _hasEvents;
  private _addEvents;
  private _removeEvents;
  get active(): boolean;
  set active(value: boolean);
  register(component: Component3D): void;
  unregister(component: Component3D): void;
  private _update;
  private _setCurrent;
  private _emitEvent;
  _doRaycast(): Component3D<Component3DData_6>;
  /**
   * A component is looked at if:
   *  -
   */
  _hitTest(component: Component3D): LookatHit;
  onLookatEnter(callback: (component: Component3D) => void): void;
  onLookatExit(callback: (component: Component3D) => void): void;
  get current(): Component3D<Component3DData_6>;
  get frameStep(): number;
  set frameStep(value: number);
  get lookatDuration(): number;
}

/**
 * @public
 */
declare interface LookatHit {
  point: Vector3;
  normal: Vector3;
  distSq: number;
  dot: number;
}

declare class LutOpts {
  image: {
    url: string;
    name: string;
    mimeType: string;
  };
}

/**
 * @public
 *
 * A component to display magnetic field like effect in the game.
 *
 * See {@link MagneticFieldComponentData} for the data specification to create a magnetic field component.
 */
export declare class MagneticFieldComponent extends Component3D<MagneticFieldComponentData> {
  private _factory;
  private _mesh;

  protected init(): Promise<void>;
  getCollisionMesh(): MagneticFieldMesh;
  _changeCallbacks: {
    color: (c: any) => any;
    radius: (r: any) => any;
  };
  protected dispose(): void;
  /*****************************************************************
   *                      Public API
   *****************************************************************/
  /**
   * Radius of the magnetic field. Defaults to 1
   */
  radius: number;
  /**
   * Color of the magnetic field. Defaults to 0x000000
   */
  color: number;
}

/**
 * @public
 *
 * Data specification for {@link MagneticFieldComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface MagneticFieldComponentData extends Component3DData {
  type: "magenticfield";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the magnetic field. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the magnetic field. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Radius of the magnetic field. Defaults to 1
   */
  radius?: number;
  /**
   * Color of the magnetic field. Defaults to 0x000000
   */
  color?: number;
}

declare class MagneticFieldMesh extends Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[],
  Object3DEventMap
> {
  constructor(opts?: {});
  set color(val: any);
  get color(): any;
  set radius(val: number);
  get radius(): number;
}

/**
 * @public
 *
 * Main camera used to render the scene, this is actually an instance of three.js {@link https://threejs.org/docs/index.html?q=Perspe#api/en/cameras/PerspectiveCamera | PerspectiveCamera}
 */
export declare class MainCamera extends AbstractCamera {
  /**
   * Set the current camera mode, a camera mode is a way to control the camera, this property is used in combination
   * with the `target` property, the `target` property is the object that the camera will follow, if the camera mode is:
   *
   * - firstperson: the camera will stick the target object
   *
   * - thirdperson: the camera will follow the target object from a distance, you can use the `maxZoomOut` property to set the maximum distance
   *
   * - fly: the camera will be free to move around the scene without any target in a smooth way
   *
   * @deprecated
   * @param {"firstperson" | "thirdperson" | "fly"} type - camera mode
   */
  set mode(t: "thirdperson" | "firstperson");
  /**
   * @deprecated
   * @returns {"firstperson" | "thirdperson"} camera mode
   */
  get mode(): "thirdperson" | "firstperson";
  /**
   * @param {(string | any)} controls
   */
  useControls(controls: string | any): any;
  /**
   * @internal
   */
  set controls(
    val:
      | FirstPersonCameraControlsWrapper
      | ThirdPersonCameraControlsWrapper
      | FlyCameraControlsWrapper
  );
  /**
   * Returns the current camera controls, the type of the controls depends on the `mode` property:
   *
   * - if mode is `firstperson` the controls will be an instance of {@link FirstPersonCameraControlsWrapper}
   * - if mode is `thirdperson` the controls will be an instance of {@link ThirdPersonCameraControlsWrapper}
   * - if mode is `fly` the controls will be an instance of {@link FlyCameraControlsWrapper}
   *
   * @returns {FirstPersonCameraControlsWrapper | ThirdPersonCameraControlsWrapper | FlyCameraControlsWrapper} current camera controls
   */
  get controls():
    | FirstPersonCameraControlsWrapper
    | ThirdPersonCameraControlsWrapper
    | FlyCameraControlsWrapper;
  /**
   * Controls wether the camera controls should use pointer lock or not, if true clicking on the canvas will lock the pointer
   * and the camera will move by simply moving the mouse, if false the camera will move by clicking and dragging the mouse
   */
  set usePointerLock(val: boolean);
  /**
   * @returns {boolean} wether the camera controls should use pointer lock or not
   */
  get usePointerLock(): boolean;
  /**
   * This is used in combination with the `useControls` method, this property is the object that the camera controls will follow
   *
   * @param {Object3D} val - target object
   */
  set target(val: Object3D<Object3DEventMap>);
  /**
   * @returns {Object3D} target object
   */
  get target(): Object3D<Object3DEventMap>;
  /**
   * Used to set the maximum distance from the target object, this is used in combination with the `useControls` method.
   *
   * @param {number} val - maximum distance from the target object
   */
  set maxZoomOut(val: number);
  /**
   * Represents the maximum distance from the target object, this is used in combination with the `useControls` method.
   *
   * @returns {number} maximum distance from the target object
   */
  get maxZoomOut(): number;
  set sensitivityX(value: any);
  get sensitivityX(): any;
  set sensitivityY(value: any);
  get sensitivityY(): any;
  /**
   * @returns {boolean} wether the camera controls should disable collision or not
   * @default false
   * @example
   * Camera.disableCollision = true;
   */
  set disableCollision(val: boolean);
  /**
   * @returns {boolean} wether the camera controls have disabled collision or not
   */
  get disableCollision(): boolean;
  /**
   * @returns {boolean} wether the camera controls should disable wheel zoom or not
   * @default false
   * @example
   * Camera.disableWheelZoom = true;
   */
  set disableWheelZoom(val: boolean);
  /**
   * @returns {boolean} wether the camera controls have disabled wheel zoom or not
   */
  get disableWheelZoom(): boolean;
  /**
   * Used to set vertical offset from the target object, this is used in combination with the `useControls` method.
   *
   * @param {number} val - vertical offset from the target object
   */
  set heightOffset(val: number);
  /**
   * Returns vertical offset from the target object, this is used in combination with the `useControls` method.
   */
  get heightOffset(): number;

  #private;
}

/**
 * @public
 *
 * Represents a player entity in the game.
 *
 * A PlayerWrapper instance is always created for the main player of the game;
 * In mulitplayer mode, a PlayerWrapper instanceRor remote players in mulitplayer mode.
 *
 * By default an avatar component is created for each player. You can customise the avatar used by the game using
 * the current snippet in the `onPreload` method of the script
 */
export declare class MainPlayer extends PlayerWrapper {
  private _userAvatar$;
  /**
   * Current avatar data for the player, this is the data used to create the avatar component
   * this is only meant for main player, and has to be set on preload lifecycle of the
   * main script
   */
  _preloadData: Partial<AvatarComponentData>;

  private _getDefaultAvatarData;
  private _syncUserAvatar;
  /**
   * Returns the default avatar data used to create the avatar component
   */
  getAvatarData(): AvatarComponentData;
  /**
   * Set the avatar data used to create the avatar component for the player
   *
   * @remarks this must be set in the `onPreload` handle of the script, before the avatar component is created
   */
  setAvatarData(data: Partial<AvatarComponentData>): void;
}

declare type MakeArray<
  T extends {
    internalType: any;
    components?: any;
  },
  G extends string
> = Array<
  ParseType<
    [
      {
        [K in keyof T]: K extends "internalType" ? G : T[K];
      }
    ]
  >
>;

export declare interface MapParam extends AbstractParam {
  type?: "map";
  itemParam?: AbstractParam;
  readonly?: boolean;
}

/**
 * @public
 */
declare type MaterialData =
  | BasicMaterialData
  | LambertMaterialData
  | PhongMaterialData
  | StandardMaterialData
  | ToonMaterialData;

declare namespace Materials {
  export { Basic, Lambert, Standard, Toon };
}
export { Materials };

/**
 * @public
 */
declare type MediaResource = {
  url: string;
  name: string;
  mimeType: string;
};

declare class MeshBasicMaterial_2 extends _THREE.MeshBasicMaterial {
  constructor(opts?: {});
  _data: {};
}

declare interface MeshColliderOpts extends BaseColliderOpts {
  type: "MESH";
  vertices: Float32Array;
  indices: Uint32Array;
}

declare type MeshCompMaterial =
  | MeshBasicMaterial
  | MeshLambertMaterial
  | MeshPhongMaterial
  | MeshStandardMaterial
  | MeshToonMaterial;

/**
 * @public
 *
 * Mesh component, used to display simple meshes in the game (box, sphere, cylinder)
 *
 * See {@link MeshComponentData} for the data schema used to create a mesh component
 */
export declare class MeshComponent extends Component3D<MeshComponentData> {
  /**
   * This is the threejs mesh created from component data
   */
  mesh: Mesh<BufferGeometry, MeshCompMaterial>;
  protected init(): Promise<void>;
  private _updateGeometry;
  private _updateMaterialType;
  private _update3D;
  private _updateTextures;
  private _updateTexture;
  getCollisionMesh(): Mesh<
    BufferGeometry<NormalBufferAttributes>,
    MeshCompMaterial,
    Object3DEventMap
  >;

  protected dispose(): void;
  /*****************************************************************
   *                      Public API
   *****************************************************************/
  /**
   * Geometry of the mesh. Defaults to a Box with a size of 1
   */
  geometryData: MeshGeometryData;
  /**
   * Color of the mesh. Defaults to "#ff0000"
   */
  color: string;
  /**
   * Opacity of the mesh. Defaults to 1
   */
  opacity: number;
  image: string;
}

/**
 * @public
 *
 * Data specification for {@link MeshComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface MeshComponentData extends Component3DData {
  type: "mesh";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Geometry of the mesh. Defaults to a Box with a size of 1
   */
  geometry?: MeshGeometryData;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Color of the mesh. Defaults to "#ff0000"
   */
  color?: string;
  /**
   * Color of the mesh. Defaults to "#ff0000"
   */
  image?: Image_2;
  /**
   * Opacity of the mesh. Defaults to 1
   */
  opacity?: number;
  /**
   * Material of the mesh.
   */
  material?: MaterialData;
  /**
   * Whether the mesh should be displayed in live mode. Defaults to true
   */
  display?: boolean;
  /**
   * Whether the mesh should be displayed in editor mode. Defaults to true
   */
  displayInEditor?: boolean;
  /**
   * Render mode of the mesh. Defaults to "dome"
   */
  renderMode: "wireframe" | "dome" | "default";
}

/**
 * @public
 *
 * Geometry data for the {@link MeshComponentData.geometry} property
 */
export declare interface MeshGeometryData {
  type: "plane" | "box" | "sphere" | "cylinder" | "dome";
  /**
   * Params for the Box geometry
   */
  boxParams: BoxParamsData;
  /**
   * Params for the Sphere geometry
   */
  sphereParams: SphereParamsData;
  /**
   * Params for the Cylinder geometry
   */
  cylinderParams: CylinderParamsData;
}

declare class MeshLambertMaterial_2 extends _THREE.MeshLambertMaterial {
  constructor(opts?: {});
  _data: {};
  copy(source: any): this;
  blendAlpha: any;
}

declare class MeshShadowMaterial extends _THREE.MeshDepthMaterial {
  constructor(opts?: {});
  _data: {};
  debug: boolean;
}

declare class MeshStandardMaterial_2 extends _THREE.MeshStandardMaterial {
  constructor(opts?: {});
  _data: {};
  copy(source: any): this;
  blendAlpha: any;
}

declare class MeshToonMaterial_2 extends _THREE.MeshToonMaterial {
  constructor(opts?: {});
  _data: {};
  copy(source: any): this;
  blendAlpha: any;
  specularMap: any;
  envMap: any;
  combine: any;
  reflectivity: any;
  refractionRatio: any;
  flatShading: any;
}

export declare function Message(): (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => void;

/**
 * @public
 *
 * Model component, used to display gltf 3D models in the game (.gltf, .glb)
 *
 * See {@link ModelComponentData} for the data schema used to create a model component
 */
export declare class ModelComponent extends Component3D<ModelComponentData> {
  private _modelFactory;
  private _model;
  private _renderMode;

  protected init(): Promise<void>;

  get mixer(): any;

  private _collision;

  protected _getBBoxImp(target: Box3): Box3;
  private _update3D;

  protected dispose(): void;
  /*****************************************************************
   *                      Public API
   *****************************************************************/
  /**
   * Play an animation on the 3D model. This applies only to animated gltf models containing animations.
   */
  play(name: string, opts: any): void;
  /**
   * Stop an animation on the 3D model
   */
  stop(
    name: string,
    opts: {
      fadeOut?: number;
    }
  ): void;
  /**
   * Stop all animations on the 3D model
   */
  stopAll(): void;
  get activeAnimations(): any;
  /**
   * Set the time of an animation on the 3D model
   */
  setAnimationAtTime(animation: any, val: any): any;
  /**
   * Get the animation data of the 3D model
   *
   */
  getAnimationData(): any;
  /**
   * Model render mode. Defaults to "default"
   */
  renderMode: RenderMode;
  /**
   * Enable the animation system for this model. Defaults to false, works only on model that embeds animations
   */
  enableAnimation: boolean;
  /**
   * Set the opacity of the model. Defaults to 1
   */
  opacity: number;
}

/**
 * @public
 *
 * Data specification for {@link ModelComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface ModelComponentData extends Component3DData {
  type: "model";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * url of the gltf/glb file
   */
  url: string;

  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * An object containing the names of the animations to play at start.
   */
  animations?: Record<string, boolean>;

  /**
   * Model render mode. Defaults to "default"
   */
  renderMode?: RenderMode;
  /**
   * Enable the animation system for this model. Defaults to false, works only on model that embeds animations
   */
  enableAnimation?: boolean;
  /**
   * Set the opacity of the model. Defaults to 1
   */
  opacity?: number;
  /**
   * Enable real time shadows for this model. Defaults to false
   */
  enableRealTimeShadow?: boolean;
  /**
   * Use transparency on the model. Defaults to true
   */
  useTransparency?: boolean;
  /**
   * Force the model to not be instanced. Defaults to false
   */
  forceUnique?: boolean;
}

/**
 * @public
 *
 * This component is used to enable & configure multiplayer in the space.
 */
declare class MultiplayerComponent extends Component3D<any> {
  private _playerSync;
  protected init(): Promise<void>;
  private _connect;
  protected dispose(): void;
  /**
   * Public api
   */
  enable: boolean;
  url: string;
  autoStart: boolean;
  maxPlayers: number;
  patchRate: number;
  reconnectTimeout: number;
  authoritativePosition: boolean;
  serverEngine: boolean;
  secrets: Record<string, string>;
}

/**
 * @public
 */
declare class NavmeshAgent extends Augmented {
  private host;
  private _rotYOffset;
  STATES: {
    Invalid: number;
    Walking: number;
    OffMesh: number;
  };
  private _state;
  private _moveCallback;
  private _startPos;
  private _currentPos;
  private _targetPos;
  private _isVecReq;
  private _prevPos;
  private _isMoving;
  private _curRotY;
  private _stopDistSq;
  private _stopSpeedSq;
  private _debug;

  private _calcStopDist;
  private _createAgent;

  private _pathMesh;
  private _updatePathMesh;
  private _disposePathMesh;
  private _polyDrawer;
  private _curPolys;
  private _drawPolys;
  private _invokeMoveCallback;
  private _setState;
  private _v3Dir;

  private _projectPoint;
  private _updateHost;
  onUpdate(cb: (dt: number) => void): void;
  onTargetReached(cb: (target: Vector3) => void): void;
  get space(): Space_2;
  get debug(): boolean;
  set debug(v: boolean);
  get state(): AgentState;
  get position(): Vector3;
  get target(): Vector3;
  get yRotation(): number;
  get isMoving(): boolean;
  private _nextTarget;
  get nextTargetInPath(): Vector3;
  private _velocity;
  get velocity(): Vector3;
  computePath(
    end: Vector3,
    debugPolys?: boolean
  ): {
    polys: number[];
    points: Vector3[];
    nearStart: Vector3;
    nearEnd: Vector3;
    direct: boolean;
  };
  dispose(): void;
  findClosestPoint(position: Vector3): Vector3;
  findRandomPoint(radius: number, target?: Vector3): Vector3;
  get parameters(): Partial<AgentParams>;
  set parameters(params: Partial<AgentParams>);
  updateParameters(params: Partial<AgentParams>): void;
  get radius(): number;
  set radius(value: number);
  get height(): number;
  set height(value: number);
  get maxSpeed(): number;
  set maxSpeed(value: number);
  get maxAcceleration(): number;
  set maxAcceleration(value: number);
  teleport(position: Vector3): void;
  private _path;
  private _polys;
  moveTo(
    position: Vector3,
    opts?: {
      callback?: (reached: boolean) => void;
    }
  ): boolean;
  _debugTarget: Mesh;
  _queryHalfExts: Vector3;
  private _getDebugTarget;
  moveToTarget(
    target: Component3D,
    opts?: {
      offset?: number;
      callback?: () => void;
    }
  ): void;
  reset(): void;
}

/**
 * @public
 */
declare class NavmeshComponent extends Component3D<any> {
  private _worker;

  private _defCrowd;
  private _isGenerating;
  protected init(): Promise<void>;
  private _navmeshUrl;
  private _fetchNavmesh;
  private _importNavmesh;
  subscribe(cb: (navmesh: NavMesh) => void): () => void;
  private _rawMesh;
  private _boxHelper;
  private _genNavmeshOffThread;
  private _getColliderMehses;
  private _drawer;

  private _disposeNavmesh;
  protected dispose(): void;
  /*** Public API ***/
  get crowd(): NavmeshCrowd;
  findClosestPoint(position: Vector3): Vector3;
  createCrowd(opts?: {
    maxAgents: number;
    maxAgentRadius: number;
  }): NavmeshCrowd;
  createAgent(
    position: Vector3,
    crowdAgentParams?: Partial<AgentParams>
  ): NavmeshAgent;
  createAgent(
    host: Object3D,
    crowdAgentParams?: Partial<AgentParams>
  ): NavmeshAgent;
  removeAgent(agent: NavmeshAgent): void;
}

/**
 * @public
 */
declare class NavmeshCrowd extends Augmented {
  component: NavmeshComponent;
  private _autoUpdate;

  params: CrowdParams;

  private _createCrowd;
  private _disposeCrowd;

  get space(): Space_2;
  update(dt: number, timeSinceLastFrame?: number, maxSubSteps?: number): void;
  private _agents;
  addAgent(
    target: Vector3 | Object3D,
    params?: Partial<AgentParams>
  ): NavmeshAgent;
  removeAgent(agent: NavmeshAgent): boolean;
  findClosestPoint(position: Vector3, target?: Vector3): Vector3;
  findRandomPoint(target?: Vector3): Vector3;
  findRandomPoint(position: Vector3, radius: number, target?: Vector3): Vector3;
  getPoly(position: Vector3): {
    success: boolean;
    status: number;
    nearestRef: number;
    nearestPoint: {
      x: number;
      y: number;
      z: number;
    };
    isOverPoly: boolean;
  };
  computePath(
    start: Vector3,
    end: Vector3,
    debugPolys?: boolean
  ): {
    polys: number[];
    points: Vector3[];
    nearStart: Vector3;
    nearEnd: Vector3;
    direct: boolean;
  };
  get agents(): NavmeshAgent[];
  private _handleUpdate;
  private _addEvents;
  private _removeEvents;
  onUpdate(cb: (dt: number) => void): void;
  get autoUpdate(): boolean;
  set autoUpdate(v: boolean);
  dispose(): void;
}

declare class NavmeshDebug extends Group {
  _component: NavmeshComponent;
  _curIntermediate: any;
  raycaster: Raycaster;
  helpers: {
    crowd: Mesh;
    targetMesh: Mesh;
  };
  helperParams: {
    visible: boolean;
    color: string;
    opacity: number;
    wireframe: boolean;
  };
  showAgent: boolean;
  agentParams: AgentParams;
  ui: any;
  agent: NavmeshAgent;
  _navQuery: NavMeshQuery;
  navmesh: NavMesh;
  intermediates: SoloNavMeshGeneratorIntermediates_2;
  drawer: DebugDrawer;
  constructor(_component: NavmeshComponent);
  get crowd(): NavmeshCrowd;
  get scene(): ComponentManager;
  _createDebug(navmesh: NavMesh): void;
  _disposeDebug(): void;
  get intermediate(): any;
  set intermediate(type: any);
  get collisions(): Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  >[];
  private _fixDrawerLineMat;
  _hasEvents: boolean;
  addEvents(): void;
  removeEvents(): void;
  _enabled: boolean;
  get enabled(): boolean;
  set enabled(val: boolean);
  _sceneVisible: boolean;
  get sceneVisible(): boolean;
  set sceneVisible(val: boolean);
  createHelpers(): void;
  updateAgent: () => void;
  updateAgentParams(): void;
  disposeAgent(): void;
  diposeHelpers(): void;
  startPoint: Vector3;
  endPoint: Vector3;
  mousevec: Vector2;
  onClick: (e: any) => void;
  _markpolyDrawer: DebugDrawer;
  _adjPolysDrawer: DebugDrawer;
  _wall: Mesh;
  _markConnectedPolys(point: Vector3): void;
  _markPoly(ref: number, flag: number): void;
  dispose(): void;
  exportColliders(format: "glb" | "obj"): Promise<void>;
  _exportObj(group: any): Promise<string>;
  _exportGLTF(group: any): Promise<unknown>;
}

export declare interface NumberParam extends AbstractParam<number> {
  type?: "number";
  min?: number;
  max?: number;
  step?: number;
}

/**
 * @public
 *
 * Object containing helpers for creating meshes and materials in accordance with the internal pipeline of the engine
 *
 */
export declare const OOOBjects: {
  PipeLineMesh: typeof PipeLineMesh;
  InstancedPipelineMesh: typeof InstancedPipelineMesh;
  InstancedGeometry: typeof GeometryInstancer;
  InstancedBasicMaterial: typeof InstancedBasic;
  InstancedStandardMaterial: typeof InstancedStandard;
  InstancedDepthMaterial: typeof InstancedShadow;
  Shared: {
    timer: {
      value: number;
    };
    timer_d2: {
      value: number;
    };
    timer_x2: {
      value: number;
    };
    scanTimer: {
      value: number;
    };
    aspect: {
      value: number;
    };
    invaspect: {
      value: number;
    };
    animationTimer: {
      value: number;
    };
    dpi: {
      value: number;
    };
    resolution: {
      value: _THREE.Vector2;
    };
    invresolution: {
      value: _THREE.Vector2;
    };
    record_size: {
      value: _THREE.Vector2;
    };
    fog: {
      value: _THREE.Vector2;
    };
    isDynamicRendering: {
      value: number;
    };
    isScreenShotRendering: {
      value: number;
    };
    update(delta: any): void;
    resize(w: any, h: any): void;
    addEvents(): void;
  };
};

export declare const OOUI: any;

declare type Opt<T extends OptId> =
  | T
  | {
      id: T;
      label?: string;
    };

declare type OptId = string | number;

declare type Options<T extends OptId> = Getter<Opt<T>[]>;

declare const OPTS: unique symbol;

declare type OrArray<T> = {
  [K in keyof T]?: T[K] | T[K][];
};

/**
 * @public
 */
export declare const P: typeof $Param;

export declare const Page: {
  gotoGame: (opts: { gameId: string; params?: Record<string, any> }) => void;
  open: (url: string) => void;
  reload: () => void;
  params: () => Promise<Record<string, any>>;
};

/**
 * @public
 *
 * The `@Param` decorator can be used on script properties to show them in the property panel
 * of the script on the studio.
 * if no type defined the engine will try to guess the type from it's default value.
 * some Params need to be initialized, please refer to their documentation page
 */
export declare function Param(options?: ScriptParam): any;

export declare function Param(target: any, key: string): any;

export declare const PARAM_KEY: unique symbol;

export declare interface ParamDecl {
  key: string;
  options: ScriptParam;
}

export declare type ParamOptions = ScriptParam;

declare type ParseStruct<
  T extends {
    components?: {
      name: string;
      internalType: string;
    }[];
  }
> = {
  [K in T["components"][number]["name"]]: ParseType<
    [
      Extract<
        T["components"][number],
        {
          name: K;
        }
      >
    ]
  >;
};

declare type ParseType<
  T extends {
    internalType: any;
    components?: any;
  }[]
> = Is1Length<T> extends true
  ? T[0]["internalType"] extends `${infer Rest}[]`
    ? MakeArray<T[0], Rest>
    : T[0]["internalType"] extends `uint${infer Rest}`
    ? number
    : T[0]["internalType"] extends `int${infer Rest}`
    ? number
    : T[0]["internalType"] extends `bool`
    ? boolean
    : T[0]["internalType"] extends `address`
    ? string
    : T[0]["internalType"] extends `bytes`
    ? string
    : T[0]["internalType"] extends `bytes${infer Rest}`
    ? string
    : T[0]["internalType"] extends `struct ${infer Rest}`
    ? ParseStruct<T[0]>
    : T[0]["internalType"] | string
  : {
      -readonly [P in keyof T]: ParseType<[T[P]]>;
    };

/**
 * @public
 *
 * Particles component for creating particles in the space
 *
 * See {@link ParticlesComponentData} for the data schema used to create an particles component
 */
declare class ParticlesComponent extends Component3D<ParticlesComponentData> {
  source: Component3D<Component3DData_5>;
  autoSpawn: boolean;
  button: any;
  button2: any;
  attachToSource: boolean;
  useSourceRotation: boolean;
  useSourceScale: boolean;
  billboard: boolean;
  primitive: string;
  perpetualLife: boolean;
  lifeSpan: number;
  maximumSpawn: number;
  instantSpawn: boolean;
  autoSpawnRate: number;
  shadowCast: boolean;
  receiveShadow: boolean;
  _maximumSpawn: number;
  mesh: any;
  instancedMesh: any;
  timeAccumulator: number;
  instances: any[];
  prePlugin: any;
  plugins: any[];
  frame: number;

  protected init(): Promise<void>;
  _onReady(): Promise<void>;

  _update3D(opts: DataChangeOpts): Promise<void>;
  create(): Promise<void>;
  onFrame(delta: any): void;
  spawn(opts?: {}): void;
  processInstantSpawn(): void;
  limitInstances(): void;
  reset(): void;
  onChildrenLoaded(): Promise<void>;
  getPlugin(): {
    name: string;
    uniforms: {
      pluginTimer: {
        value: number;
      };
      aspect: {
        value: number;
      };
    };
    attributes: {
      spawnTimer: {
        name: string;
        array: any[];
        length: number;
        defaultValue: number;
      };
      lifeSpanTimer: {
        name: string;
        array: any[];
        length: number;
        defaultValue: number;
      };
    };
    vertexShaderHooks: {
      prefix: string;
      main: string;
      suffix: string;
    };
    fragmentShaderHooks: {
      prefix: string;
      main: string;
      suffix: string;
    };
    defines: any[];
  }[];
  getMesh(): any;
  getPrimitive(): any;
  protected _onCreateCollisionMesh(): any;

  updateEvent: any;
  onChildrenLoadedEvent: any;
  addEvents(): void;
  removeEvents(): void;
  protected dispose(): void;
}

/**
 * @public
 *
 * Data specification for {@link ParticlesComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface ParticlesComponentData extends Component3DData {
  type: "particles";
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
}

declare type PathLike = string | string[];

export declare interface PCActions {
  /**
   * whether the character is moving forward
   */
  forward: boolean;
  /**
   * whether the character is moving backward
   */
  backward: boolean;
  /**
   * whether the character is moving left
   */
  left: boolean;
  /**
   * whether the character is moving right
   */
  right: boolean;
  /**
   * whether the character is jumping
   */
  jump: boolean;
  /**
   * whether the character is running
   */
  run: boolean;
}

declare interface PCActions_2 {
  /**
   * whether the character is moving forward
   */
  forward: boolean;
  /**
   * whether the character is moving backward
   */
  backward: boolean;
  /**
   * whether the character is moving left
   */
  left: boolean;
  /**
   * whether the character is moving right
   */
  right: boolean;
  /**
   * whether the character is jumping
   */
  jump: boolean;
  /**
   * whether the character is running
   */
  run: boolean;
}

export declare interface PCJumpParams {
  /**
   * the height of the jump. Default is 3
   */
  height?: number;
}

export declare interface PCRunParams {
  /**
   * the walking speed of the character. Default is 10
   */
  maxSpeed?: number;
  /**
   * how much to speedup the character when running, this is activated when the user presses the shift key.
   * Default is 1.5
   */
  boost?: number;
}

/** @public */
declare type PendingTransaction = {
  from: string;
  to: string | null;
  hash: string;
  gasPrice: BigInt;
  gasLimit: BigInt;
  value: BigInt;
  type: number;
  url: string;
  wait: () => Promise<Partial<Receipt>>;
};

/**
 * @public
 */
declare interface PhongMaterialData extends BaseMaterialData {
  type: "phong";
  bumpMap?: TextureData;
  bumpScale: number;
  shininess: number;
  specular: string;
}

/**
 * @public
 *
 * Physics manager for the current space, cf {@link PhysicsRapierWrapper} for more info
 */
export declare let Physics: PhysicsRapierWrapper;

/**
 * @public
 *
 * This interface describes the data schema used to attach collision data to a component.
 *
 * See {@link Component3DData.collider}
 */
export declare interface PhysicsData {
  /**
   * If this is false, no collider will be attached to the component
   */
  enabled?: boolean;
  /**
   * The type of rigidbody to attach to the component
   */
  rigidbodyType?: RigidBodyType_2;
  /**
   * The type of collider to attach to the component
   */
  colliderType?: ColliderType_2;
  /**
   * If this is true, the collider will be a sensor
   *
   * See {@link https://rapier.rs/docs/user_guides/javascript/colliders/#collider-type | Rapier Documentation} for more info
   */
  sensor?: boolean;
  /**
   * Properties for dynamic rigid bodies
   */
  dynamicProps?: DynamicProps;
  groups?: number;
  /**
   * @deprecated use translationLock instead
   */
  enabledTranslation?: [boolean, boolean, boolean];
  /**
   * @deprecated use rotationLock instead
   */
  enabledRotation?: [boolean, boolean, boolean];
  /**
   * Locks the translation of the rigid body along the x, y, and z axes
   */
  translationLock?: [boolean, boolean, boolean];
  /**
   * Locks the rotation of the rigid body along the x, y, and z axes
   */
  rotationLock?: [boolean, boolean, boolean];
}

declare interface PhysicsOpts {
  component: Component3D;
  rigitBodyOpts: RigidBodyOpts;
}

/**
 * @public
 *
 * Wrapper for the physics engine, currently using Rapier3D
 *
 * This is the type of the {@link Physics} variable in the scripting API
 */
export declare class PhysicsRapierWrapper extends Object3D {
  /**
   * Current Rapier world instance; cf {@link https://rapier.rs/javascript3d/classes/World.html | Rapier docs} for more info
   */
  world: World_2;
  eventQueue: EventQueue;
  narrowPhase: NarrowPhase;
  private _init;
  private _fixedTimeStep;

  private _active;
  private _rigidBodies;
  private debugPositionAttr;
  private debugColorAttr;
  private nextDebugPositions;
  private nextDebugColors;

  private __frame;
  get frame(): number;
  private _syncFromTransform;
  private _syncToTransform;
  private _preInterpolate;
  private _interpolate;

  private _accumulatedTime;
  update: (dt: number, time: number) => void;
  /**
   * Performs a raycast in the physics world and returns information about the hit, if any.
   * @param ray - The ray to cast.
   * @returns An object containing information about the hit, or `null` if no hit occurred.
   */
  raycast: (ray: {
    origin: {
      x: number;
      y: number;
      z: number;
    };
    direction: {
      x: number;
      y: number;
      z: number;
    };
    maxDistance?: number;
    ignoreRigidbody?: any;
    filterFlags?: QueryFilterFlags;
    shouldRaycast?: (collider: Collider_3) => boolean;
  }) => {
    point: {
      x: any;
      y: any;
      z: any;
    };
    distance: number;
    triangle: {
      meshName: any;
    };
    raw: RAPIER.RayColliderToi;
    hit: unknown;
  };
  /**
   * activate or deactivate the physics engine
   */
  set active(value: boolean);
  /**
   * Returns true if the physics engine is active
   */
  get active(): boolean;
}

declare class PipeLineMesh extends Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[],
  Object3DEventMap
> {
  constructor(geometry: any, material: any, rule?: {});
  isPipeLineMesh: boolean;
  useLighting: boolean;
  _material: any;
  pipeLineSwitch: boolean;
  pipelineOptions: {
    visibleOnDiffuse: boolean;
    visibleOnOcclusion: boolean;
    visibleOnMirror: boolean;
    mirrorMaterial: any;
    occlusionMaterial: any;
    lightingMaterial: any;
    lightingMirrorMaterial: any;
    lightingOcclusionMaterial: any;
    overrideOcclusionMaterial: any;
    raycastLineWidth: number;
  };
  emitter: Augmented;
  _mirrorPreviousVisibility: any;
  _diffusePreviousVisibility: boolean;
  _occlusionPreviousVisibility: boolean;
  currentMode: {
    material: any;
    occlusionMaterial: any;
    mirrorMaterial: any;
  };
  updateMaterials(material: any, rule?: {}): void;
  diffuseMaterials: {
    material: any;
    occlusionMaterial: any;
    mirrorMaterial: any;
  };
  lightingMaterials: {
    material: any;
    occlusionMaterial: any;
    mirrorMaterial: any;
  };
  set material(val: any);
  get material(): any;
  overrideOcclusionMaterial(val: any): void;
  _prevMatrix: Matrix4;
  updateMatrixWorld(force: any): void;
  _hasMatrixListeners: boolean;
  onMatrixChanged(cb: any): void;
  offMatrixChanged(cb: any): void;
  set diffuseMaterial(val: any);
  get diffuseMaterial(): any;
  set mirrorMaterial(val: any);
  get mirrorMaterial(): any;
  set occlusionMaterial(val: any);
  get occlusionMaterial(): any;
  clone(): this;
  _onOcclusion(val: any): void;
  _onMirror(val: any): void;
  _onLighting(val: any): void;
  _addEvents(): void;
  occlusionEvent: any;
  mirrorEvent: any;
  lightingEvent: any;
  _removeEvents(): void;
  destroy(): void;
  dispose(): void;
}

declare class PipeLineMesh_2 extends Line2 {
  constructor(geometry: any, material: any, rule?: {});
  isPipeLineMesh: boolean;
  useLighting: boolean;
  _material: any;
  pipeLineSwitch: boolean;
  pipelineOptions: {
    visibleOnDiffuse: boolean;
    visibleOnOcclusion: boolean;
    visibleOnMirror: boolean;
    mirrorMaterial: any;
    occlusionMaterial: any;
    lightingMaterial: any;
    lightingMirrorMaterial: any;
    lightingOcclusionMaterial: any;
    overrideOcclusionMaterial: any;
    raycastLineWidth: number;
  };
  emitter: Augmented;
  diffuseMaterials: {
    material: any;
    occlusionMaterial: any;
    mirrorMaterial: any;
  };
  lightingMaterials: {
    material: any;
    occlusionMaterial: any;
    mirrorMaterial: any;
  };
  set material(val: any);
  get material(): any;
  _mirrorPreviousVisibility: any;
  _diffusePreviousVisibility: boolean;
  _occlusionPreviousVisibility: boolean;
  currentMode: {
    material: any;
    occlusionMaterial: any;
    mirrorMaterial: any;
  };
  overrideOcclusionMaterial(val: any): void;
  _prevMatrix: Matrix4;
  updateMatrixWorld(force: any): void;
  _hasMatrixListeners: boolean;
  _matrixListeners: Set<any>;
  onMatrixChanged(cb: any): void;
  offMatrixChanged(cb: any): void;
  set diffuseMaterial(val: any);
  get diffuseMaterial(): any;
  set mirrorMaterial(val: any);
  get mirrorMaterial(): any;
  set occlusionMaterial(val: any);
  get occlusionMaterial(): any;
  clone(): this;
  _onOcclusion(val: any): void;
  _onMirror(val: any): void;
  _onLighting(val: any): void;
  _addEvents(): void;
  occlusionEvent: any;
  mirrorEvent: any;
  lightingEvent: any;
  _removeEvents(): void;
  destroy(): void;
  dispose(): void;
  raycast(raycaster: any, intersects: any): void;
}

/**
 * @public
 *
 * A component to display sliding platforms in the game.
 *
 * See {@link PlatformComponentData} for the data schema used to create a platform component
 */
export declare class PlatformComponent extends Component3D<PlatformComponentData> {
  private _factory;
  private _platform;

  protected init(): Promise<void>;

  _onCreateCollisionMesh(): {
    wrapper: InstancedMeshWrapper;
    updateWorldMatrix(updateParents: any, updateChildren: any): void;
    readonly isMesh: true;
    readonly type: string | "Mesh";
    geometry: BufferGeometry<NormalBufferAttributes>;
    material: Material | Material[];
    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?:
      | {
          [key: string]: number;
        }
      | undefined;
    updateMorphTargets(): void;
    getVertexPosition(index: number, target: Vector3): Vector3;
    readonly isObject3D: true;
    readonly id: number;
    uuid: string;
    name: string;
    parent: Object3D | null;
    children: Object3D[];
    up: Vector3;
    readonly position: Vector3;
    readonly rotation: Euler;
    readonly quaternion: Quaternion;
    readonly scale: Vector3;
    readonly modelViewMatrix: Matrix4;
    readonly normalMatrix: Matrix3;
    matrix: Matrix4;
    matrixWorld: Matrix4;
    matrixAutoUpdate: boolean;
    matrixWorldAutoUpdate: boolean;
    matrixWorldNeedsUpdate: boolean;
    layers: Layers;
    visible: boolean;
    castShadow: boolean;
    receiveShadow: boolean;
    frustumCulled: boolean;
    renderOrder: number;
    animations: AnimationClip[];
    userData: {
      [key: string]: any;
    };
    customDepthMaterial?: Material | undefined;
    customDistanceMaterial?: Material | undefined;
    onBeforeRender: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera_2,
      geometry: BufferGeometry,
      material: Material,
      group: Group
    ) => void;
    onAfterRender: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera_2,
      geometry: BufferGeometry,
      material: Material,
      group: Group
    ) => void;
    applyMatrix4(matrix: Matrix4): void;
    applyQuaternion(quaternion: Quaternion): any;
    setRotationFromAxisAngle(axis: Vector3, angle: number): void;
    setRotationFromEuler(euler: Euler): void;
    setRotationFromMatrix(m: Matrix4): void;
    setRotationFromQuaternion(q: Quaternion): void;
    rotateOnAxis(axis: Vector3, angle: number): any;
    rotateOnWorldAxis(axis: Vector3, angle: number): any;
    rotateX(angle: number): any;
    rotateY(angle: number): any;
    rotateZ(angle: number): any;
    translateOnAxis(axis: Vector3, distance: number): any;
    translateX(distance: number): any;
    translateY(distance: number): any;
    translateZ(distance: number): any;
    localToWorld(vector: Vector3): Vector3;
    worldToLocal(vector: Vector3): Vector3;
    lookAt(vector: Vector3): void;
    lookAt(x: number, y: number, z: number): void;
    add(...object: Object3D[]): any;
    remove(...object: Object3D[]): any;
    removeFromParent(): any;
    clear(): any;
    attach(object: Object3D): any;
    getObjectById(id: number): Object3D | undefined;
    getObjectByName(name: string): Object3D | undefined;
    getObjectByProperty(name: string, value: any): Object3D | undefined;
    getObjectsByProperty(name: string, value: any): Object3D[];
    getWorldPosition(target: Vector3): Vector3;
    getWorldQuaternion(target: Quaternion): Quaternion;
    getWorldScale(target: Vector3): Vector3;
    getWorldDirection(target: Vector3): Vector3;
    _raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    traverse(callback: (object: Object3D) => any): void;
    traverseVisible(callback: (object: Object3D) => any): void;
    traverseAncestors(callback: (object: Object3D) => any): void;
    updateMatrix(): void;
    updateMatrixWorld(force?: boolean): void;
    toJSON(meta?: {
      geometries: any;
      materials: any;
      textures: any;
      images: any;
    }): any;
    clone(recursive?: boolean): any;
    copy(source: any, recursive?: boolean): any;
    spherecast?(sphere: Sphere, intersects: Array<Intersection>): void;
    addEventListener<T extends keyof Object3DEventMap>(
      type: T,
      listener: EventListener_2<Object3DEventMap[T], T, any>
    ): void;
    addEventListener<T extends string>(
      type: T,
      listener: EventListener_2<{}, T, any>
    ): void;
    hasEventListener<T extends keyof Object3DEventMap>(
      type: T,
      listener: EventListener_2<Object3DEventMap[T], T, any>
    ): boolean;
    hasEventListener<T extends string>(
      type: T,
      listener: EventListener_2<{}, T, any>
    ): boolean;
    removeEventListener<T extends keyof Object3DEventMap>(
      type: T,
      listener: EventListener_2<Object3DEventMap[T], T, any>
    ): void;
    removeEventListener<T extends string>(
      type: T,
      listener: EventListener_2<{}, T, any>
    ): void;
    dispatchEvent<T extends keyof Object3DEventMap>(
      event: BaseEvent<T> & Object3DEventMap[T]
    ): void;
    pointerEvents?: "none" | "auto" | "listener";
    pointerEventsType?: AllowedPointerEventsType;
    pointerEventsOrder?: number;
  };
  protected dispose(): void;
}

/**
 * @public
 *
 * Data specification for {@link PlatformComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface PlatformComponentData extends Component3DData {
  type: "platform";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
}

declare class PlatformerController
  extends ControlsAbstract
  implements PlatformerControlParams
{
  private physics;
  private collider;
  private colliderRb;
  private internalCollider;
  private charController;
  private shouldCheckJump;
  private potentialJumpStartTime;
  private jumpReleaseTime;
  private isGrounded;
  private jumpStartTime;
  private jumpEndTime;
  private jumpStartPos;
  private jumpStartLinearVel;
  private isJumping;
  private highJumpStarted;
  private jumpNumber;
  private g;
  private maxSpeed;
  private _active;
  private _keyActive;
  private inputStart;
  private inputEnd;
  private directionalInput;
  private immediateDirectionalInput;
  private isSprinting;
  private lastGroundEnter;
  private lastGroundLeave;
  private correctionVelocityContribution;
  private effectiveFrictionCoefficient;
  private externalImpulse;
  private isPushingWall;
  private wallNormal;
  private lastAnimations;
  private publicVelocity;
  private opts;
  constructor(
    opts: Partial<PlatformerControlParams> &
      ConstructorParameters<typeof ControlsAbstract>[0]
  );
  private _resetInputState;
  private _resetAnimation;
  /**
   * activate or deactivate the controls
   */
  set active(value: boolean);
  /**
   * whether the controls are active
   */
  get active(): boolean;
  set keyActive(value: boolean);
  get keyActive(): boolean;
  updateOptions(opts: Partial<PlatformerControlParams>): void;
  applyImpulse(impulse: Vector3): void;

  private onJoystick;
  private onJumpButtonDown;
  private onJumpButtonUp;

  private beginInput;
  private endInput;
  private computeDirectionalInputContribution;
  private getImmediateDirectionalInputContribution;

  _prevPos: Vector3;
  _currentPos: Vector3;
  private updateVisuals;
  private interpolate;
  /**
   * Whether the user is applying some directional input (WASD or joystick)
   */
  get isMoving(): boolean;
  /**
   * The characters linear velocity. This does not include velocity changes from corrections (e.g. auto step, snap to ground)
   */
  get velocity(): Vector3;
  dispose(): void;
  private _updateCollisionState;
  private _updateIntersectionState;
  private _showJoystick;
  private _showJumpButton;
  /**
   * Set to true to show the joystick. This is mainly for mobile devices where keyboard input is not available.
   */
  set showJoystick(value: boolean);
  set showJumpButton(value: boolean);
  /**
   * Returns true if the joystick is visible.
   */
  get showJoystick(): boolean;
  /**
   * Returns true if the jump button is visible.
   *
   */
  get showJumpButton(): boolean;
}

declare interface PlatformerControlParams {
  /** Time in seconds until the peak of a normal jump is reached */
  timeToJumpApex: number;
  /** Time in seconds it takes to fall back to the ground from the peak of a normal jump */
  timeToGround: number;
  /** Height of a normal jump */
  jumpAltitude: number;
  /** Time in seconds the jump key needs to be held down to turn a normal jump into a high jump */
  highJumpCheckTime: number;
  /** Time in seconds until the peak of a high jump is reached */
  timeToHighJumpApex: number;
  /** Height of a high jump */
  highJumpAltitude: number;
  /** Number of jumps that can be performed (without touching the ground in between) */
  maxJumps: number;
  /** Time in seconds until full acceleration is applied */
  accelerationTime: number;
  /** Time in seconds until full ground friction is applied */
  decelerationTime: number;
  /** Maximum speed in units per second achievable by walking */
  walkSpeed: number;
  /** How much faster sprinting is compared to walking */
  sprintBoost: number;
  /** Maximum acceleration due to walking in units per second squared */
  maxAcceleration: number;
  /** Grace period in seconds in which a jump still registers after the player has left the ground */
  coyoteTime: number;
  /** Scalar applied to friction force applied to the character by scene geometry. 0 = no friction, 2 = double the normal friction */
  groundFrictionScale: number;
  /** How much 'grip' the character has when walking. This mostly influences the ability to walk/brake on slippery surfaces. 1 = normal traction, 2 = double the normal traction */
  groundTractionScale: number;
  /** Speed applied when pressing directional keys during a jump which was started with no
   * directional component, i.e. straight up. In units per second.
   */
  jumpLateDirectionalCorrectionSpeed: number;
  /** Speed applied when pressing directional keys when starting an air jump, in units per second */
  airJumpDirectionalSpeed: number;
  /** Speed in units per second at which directional inputs no longer have any effect */
  airControlMaxLinearVelocity: number;
  /** Speed in radians per second of how fast the character turns to match the desired direction during a jump*/
  airControlAngularVelocity: number;
  /** Maximum height of a step the character can automatically walk up */
  maxStepHeight: number;
  /** Minimum width of a surface to be considered a walkable step */
  minStepWidth: number;
  /** Maximum altitude above the ground under which the character will be automatically snapped to the ground */
  snapToGroundHeight: number;
  /** Whether to enable sliding down steep slopes */
  enableSliding: boolean;
  /** Maximum angle of a slope considered climbable, in radians */
  maxSlopeClimbAngle: number;
  /** Minimum slope angle to start sliding, in radians */
  minSlopeSlideAngle: number;
  /** Whether the character should 'move' dynamic objects when colliding. */
  applyImpulsesToDynamicBodies: boolean;
  /** Wheather to automatically play back animations on the avatar. */
  autoAnimate: boolean;
  /** Smoothing applied to the visual character orientation. 0 = no smoothing, >0.2 = heavy smoothing */
  orientationSmoothing: number;
}

/**
 * @public
 *
 * This class implements traditional platformer controls, with support for jumping, running, etc
 *
 * the controls use keyboard keys W, A, S, D or Arrow keys for movement, and SPACE for jumping;
 *
 * The meaning of `object` & `target` options is intepreted as follows:
 *
 * - The `object` is moved by the controls actions
 *
 * - The `target` is used to determine the forward direction of the movement
 *
 * The behavior of the controls can be customized using the params object.
 * See {@link PlatformerControlsWrapperParams} for more info
 *
 */
export declare class PlatformerControlsWrapper extends ControlsAbstract {
  private quaternion;
  private rotation;
  private rotateQuarternion;
  private targetRot;
  private elapsedTime;
  private currentHeight;
  private jumpMaxHeight;
  private hasTouchedGroundAfterJump;
  private prevJumpKeyState;
  private lastAnim;
  private airTime;
  private reachedPeak;
  private jumpDuration;
  private jumpGravity;
  private jumpVelocity;
  private physics;

  /**
   * Indicates whether the attached object is colliding with a ground collider (like a terrain)
   */
  onFloor: boolean;

  /**
   * Indicates whether the attached object is currently moving (walking, jumping, etc)
   */
  isMoving: boolean;
  /**
   * Indicates whether the attached object is currently jumping
   */
  isJumping: boolean;

  /**
   * a list of objects that the attached object is colliding with in the current frame
   */
  collidesWith: CollisionInfo_2[];

  /**
   * The controller handles the input events and sets the corresponding actions
   */
  controller: PlatformerInputController;

  /**
   * The actions influence the movement of the attached object. Those are typically set automtically from the user input.
   *
   * If you deactivate the controls's controller, you can set those manually to control the movement of the attached object
   */
  actions: PCActions;
  /**
   * When true, the controls will automatically set the forward direction of the movement based on the
   * target object's rotation. Default is true.
   */
  autoRotate: boolean;

  /**
   * activate or deactivate the controls
   */
  set active(value: boolean);
  /**
   * whether the controls are active
   */
  get active(): boolean;

  dispose(): void;
}

export declare interface PlatformerControlsWrapperParams {
  /**
   *
   *  Params to controls walking and running of the target object
   *
   *   - maxSpeed : the walking speed of the character
   *
   *   - boost: how much to speedup the character when running, this is activated when the user presses the shift key
   */
  run?: PCRunParams;
  /**
   *
   * Params to controls the jump of the character of the target object
   *
   *   - height: the height of the jump
   *
   *   - duration: the duration of the jump
   */
  jump?: PCJumpParams;
  /**
   * whether to automatically apply the corresponding animation to the attached object
   * This applies only when the attached object is an avatar component
   */
  autoAnimate?: boolean;
}

/**
 * @public
 *
 * This class is used to control the actions of the {@link PlatformerControlsWrapper} class.
 */
export declare class PlatformerInputController {
  private controls;
  private _active;
  /**
   * Callback function that is called when the user presses/relases a key.
   */
  onInput: any;
  private _showJoystick;

  /**
   * Returns true if the controller is active.
   */
  get active(): boolean;
  /**
   * Activates/deactivates the controller.
   *
   * Deactivating the controller will prevent input events from influencing the {@link PlatformerControlsWrapper}'s actions.
   */
  set active(value: boolean);
  /**
   * Set to true to show the joystick. This is mainly for mobile devices where keyboard input is not available.
   */
  set showJoystick(value: boolean);
  /**
   * Returns true if the joystick is visible.
   */
  get showJoystick(): boolean;
}

/**
 * @public
 *
 * Represents the main player entity on the game; cf {@link PlayerWrapper} for more info
 */
export declare let Player: MainPlayer;

declare const PLAYER_ROLES: {
  readonly host: "host";
  readonly player: "player";
};

declare interface PlayerData {
  sessionId: string;
  userId?: string;
  name: string;
  isAnonymous: boolean;
  role?: PlayerRole;
  latency?: number;
  jitter: number;
}

/**
 * @public
 *
 * A class to access to all player entities on the game
 */
export declare class PlayerManager {
  private _space;
  /**
   * A record containing all the current players connected to the game
   */
  players: Record<string, PlayerWrapper>;
  /**
   * Main player of the game
   */
  main: MainPlayer;

  private _spawner;
  private _getSpawner;
  addPlayer(
    data: PlayerData,
    opts?: {
      state?: PlayerState;
      avatarOpts?: Partial<AvatarComponentData>;
    }
  ): PlayerWrapper;
  private _createPlayerAvatar;
  /**
   * this is called when the room connects; we need to set server initial
   * data like sessionId ...
   */
  _syncMainPlayer(playerData: PlayerData): void;
  private _avatarMap;
  get(avatarOrSessionId: Component3D | string): PlayerWrapper;
}

declare type PlayerRole = keyof typeof PLAYER_ROLES;

/**
 * @public
 *
 * Gives access to all player entities on the game; cd {@link @PlayerManager} for more info
 */
export declare let Players: PlayerManager;

declare type PlayerSchema = Schema & RoomPlayerState;

declare interface PlayerState {
  id: string;
  position: XYZ_2;
  rotation: XYZ_2;
  animation: string;
}

declare interface PlayerState {
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  animation: string;
  avatarUrl?: string;
  isAnonymous?: boolean;
  vrmUrl?: string;
  scale: number;
  text?: string;
  plugins?: string[];
}

declare interface PlayerState_2 {
  id: string;
  position: XYZ_2;
  rotation: XYZ_2;
  animation: string;
  scale: number;
  vrmUrl: string;
  text: string;
}

declare type PlayerStateMap = Record<string, PlayerState_2>;

declare class PlayerStateSync {
  prevPast: number;
  packetsPerSecs: number;
  sendFrame: number;
  delta: number;
  playerManager: PlayerManager;
  gameClient: GameRoom<any>;
  _iresolver: InterpolationResolver;
  _sendTimeout: any;
  _disposers: any[];
  interpolator: Interpolator;
  constructor(config: {
    client: GameRoom<any, any>;
    selector: (s: any) => PlayerStateMap;
  });
  _payload: any;
  _prevData: any[];
  _nextData: any[];
  _compareData(prev: any[], next: any[]): boolean;
  _lerp: number;
  _update: (delta: number) => void;
  _target: InterpolatedSnapshot;
  update(delta: number): void;
  onGetPayloed: () => string;
  getPayload: () => (string | number)[];
  dispose(): void;
}

/**
 * @public
 *
 * Represents a player entity in the game.
 *
 * A PlayerWrapper instance is always created for the main player of the game;
 * In mulitplayer mode, a PlayerWrapper instanceRor remote players in mulitplayer mode.
 *
 * By default an avatar component is created for each player. You can customise the avatar used by the game using
 * the current snippet in the `onPreload` method of the script
 */
export declare class PlayerWrapper {
  EVENTS: {
    userDataChange: string;
    userChanged: string;
  };
  protected _emitter: Augmented;
  protected _data: PlayerData;
  protected _disposers: any[];
  /**
   * A promise that resolves when the avatar component for the player is created
   */
  avatarReady: Promise<AvatarComponent>;
  /**
   * Avatar component attached to the player
   */
  avatar: AvatarComponent;

  /**
   * Returns the player's session id, in multiplayer this is the id assigned by the server
   */
  get sessionId(): string;
  /**
   * Returns the player's user id
   */
  get userId(): string;
  /**
   * Returns the player's name
   */
  get name(): string;
  /**
   * Returns true if the player is anonymous (not logged in)
   */
  get isAnonymous(): boolean;
  /**
   * Returns true if the player is the host of the game, in multiplayer mode the host is the player who created the game room
   */
  get isHost(): boolean;
  get isCreator(): boolean;
  get isEditor(): boolean;
  get isMain(): boolean;
  /**
   * Current data for the player (session id, name, position, rotation etc)
   */
  get data(): PlayerData;
  updateData(data: Partial<PlayerData>): void;
  protected _wasDisposed: boolean;
}

declare interface PlayerWrapperOpts {
  space: Space;
  data: PlayerData;
  avatar?: AvatarComponentData | AvatarComponent | Promise<AvatarComponent>;
}

export declare namespace Plugins {
  export namespace VISUALS {
    {
      DissolvePlugin;
    }
    {
      RainbowPlugin;
    }
    {
      RotateAndDissolvePlugin;
    }
    {
      ShrinkPlugin;
    }
    {
      DamagePlugin;
    }
    {
      GrassPlugin;
    }
    {
      InstanceOpacityPlugin;
    }
  }
  export namespace PHYSICS {
    {
      BalancerPhysics;
    }
  }
  export namespace MATERIALS {
    {
      ScreenMaterial;
    }
  }
  export namespace GENERATIVE {
    {
      BladeFactory;
    }
    {
      QuadFactory;
    }
  }
  export namespace SORTERS {
    {
      OctreeSorter;
    }
  }
}

/**
 * @public
 *
 * Data specification for {@link DialogComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface PortalComponentData extends Component3DData {
  type: "portal";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   * Do not set any rotation on the component if the dialog is billboarded
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * The URL of the 360 image or image to be displayed in the portal
   */
  previewImage: {
    img360: string;
    img: string;
  };
  /**
   * The shape of the portal
   *
   * @default "square"
   */
  shape: "circle" | "square";
  /**
   * The destination of the portal
   */
  destination: {
    spaceId: string;
  };
  originalPosition?: XYZ;
  originalRotation?: XYZ;
}

/**
 * @public
 *
 * Post processing component, used to apply post processing effects to the game. Use the studio to configure the post processing for the space.
 *
 * This is a singleton component. You can only have one post processing in the game.
 */
export declare class PostProcessingComponent extends Component3D<any> {
  protected init(): Promise<void>;
  enabled: boolean;
  postProType: string;
  bloomOpts: BloomOpts;
  lutOpts: LutOpts;
  tvOpts: TvOpts;
  trippyOpts: TrippyOpts;
  private _update3D;

  enable(): void;
  disable(): void;
  protected dispose(): void;
}

export declare class PrefabResource extends Resource<PrefabResourceData> {
  opts: PrefabResourceOpts;
  private _children;
  private _parent;

  constructor(opts: PrefabResourceOpts);
  static create(opts: PrefabResourceOpts): Promise<PrefabResource>;
  get _dataWrapper(): DataWrapper<any>;
  removeChild(child: PrefabResource): PrefabResource;
  addChild(child: PrefabResource): PrefabResource;
  get meta(): {
    name?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  get isComponent(): boolean;
  get base(): PrefabResource;
  get parent(): PrefabResource;
  get children(): PrefabResource[];
  get hasComponentFactory(): boolean;
  getVariants(): PrefabResource[];
  getDirectVariants(): PrefabResource[];
  dependsOn(resource: Resource): boolean;
  isDirectTypeOf(data: any): boolean;
  isTypeOf(data: any): boolean;
  extends(resource: Resource): boolean;
  directExtends(resource: Resource): boolean;
  hasDependentComponents(): any;
  dispose(): void;

  instantiate(opts: {
    parent?: Component3D;
    abort?: AbortSignal;
    netId?: string;
  }): Promise<Component3D<Component3DData_5>>;

  private _safeCheckDataWrappers;
  private assertNotInstance;
  private assertInstance;
  private assertSameType;
  attachInstance(instance: Component3D): void;
  _attachInstance(instance: Component3D): void;
  private _attachInstanceProps;
  detachInstance(instance: Component3D): void;
  _detachInstance(instance: Component3D, idToPrefabId?: any): void;
  private _detachInstanceProps;
  isChildAddOverride(instance: Component3D): boolean;
}

export declare interface PrefabResourceData extends ResourceData<"prefab"> {
  /**
   * Component type
   */
  type: "prefab";
  template: any;
  parentId: string;
  _index?: number;
  children: Record<string, PrefabResourceData>;
  meta: {
    name?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

declare class PrefabResourceFactory extends ResourceFactory<PrefabResource> {
  private _byId;
  private _byName;
  init(): Promise<void>;
  resolve(resources: PrefabResource[]): Promise<void>;
  createResource(data: PrefabResourceData): Promise<PrefabResource>;
  updateResource(
    prefab: PrefabResource,
    data: PrefabResourceData
  ): Promise<PrefabResource>;
  destroyResource(prefab: PrefabResource): void;
  getPrefabByName(uri: string): PrefabResource;
  getPrefabById(id: string): PrefabResource;
  find(fn: (module: PrefabResource) => boolean): PrefabResource;
  filter(fn: (module: PrefabResource) => boolean): PrefabResource[];
  canDestroy(resource: PrefabResource): boolean;
}

declare interface PrefabResourceOpts {
  data: PrefabResourceData;
  factory: PrefabResourceFactory;
}

declare class Preset {
  opts: PresetOpts;
  constructor(opts: PresetOpts);
  apply(canUndo: boolean): {
    undo: () => Promise<void>;
    redo: () => Promise<void>;
  };
  isApplied(): boolean;
}

export declare interface PresetOptions {
  image: string;
  name: string;
  data: any;
}

declare interface PresetOpts {
  data: any;
  wrapper: DataWrapper;
}

export declare function Presets(
  ...presets: PresetOptions[]
): (target: any, key: any) => void;

declare class QuadMaterial extends ShaderMaterial {
  constructor(data: any);
  updateColors(data: any): void;
  update(delta: any): void;
  addEvents(): void;
  updateEvent: any;
  removeEvents(): void;
}

declare type Quat = {
  x: number;
  y: number;
  z: number;
  w: number;
};

/**
 * @public
 *
 * This component is used to display rain in the game. Use the studio to configure the rain for the space.
 *
 * This is a singleton component. You can only have one rain in the game.
 */
export declare class RainComponent extends Component3D<any> {
  #private;
  protected init(): Promise<void>;

  protected dispose(): void;
  /**
   * Public api
   */
  /**
   * Intensity of the rain
   */
  intensity: number;
}

/** @public */
declare type Receipt = {
  from: string;
  to: string | null;
  hash: string;
  blockHash: string;
  blockNumber: number;
  gasPrice: BigInt;
  gasUsed: BigInt;
  status: number | null;
  type: number;
  fee: BigInt;
  hasFailed: boolean;
  url: string;
  events: {
    name: string;
    inputs: Record<string, any>;
  }[];
};

/**
 * The `@Receiver` decorator allows functions to be bound to other component's signals
 */
export declare function Receiver(
  opts?: TriggerOptions
): (target: any, key: any) => void;

export declare interface ReceiverOptions extends AbstractParam {
  emitType?: ScriptParam;
}

export declare interface ReceiverParam extends AbstractParam {
  type?: "receiver";
  methodKey?: string;
  callback?: () => void;
  argType?: ScriptParam;
}

/**
 * @public
 *
 * This component is used to display a reflective plan in the game. Use the studio to configure the reflector for the space.
 *
 * This is a singleton component. You can only have one reflector in the game. For performance reasons,
 * adding both a water and a reflector component to the same space is not supported.
 */
export declare class ReflectorComponent extends Component3D<any> {
  private _reflector;
  protected init(): Promise<void>;

  private _update3D;
  protected _onCreateCollisionMesh(): any;
  protected dispose(): void;
  /**
   * Public api
   */
  color: string;
  opacity: number;
  blur: boolean;
}

declare type RenderMode = "default" | "toon" | "glitch" | "ghost" | "error";

export declare class Resource<Data extends ResourceData = ResourceData> {
  protected _data: Data;
  readonly space: Space;
  _resourceFactory: ResourceFactory<any>;
  protected _state: ResourceState;
  constructor(opts: ResourceOpt<Data>);
  isPrefab(): this is PrefabResource;
  isScript(): this is ScriptResource_2;
  get id(): string;
  get data(): Data;
  get isComponent(): boolean;
  get base(): any;
  get parent(): any;
  get hasComponentFactory(): boolean;
  get state(): ResourceState;
  private _wasDisposed;
  onDispose(): void;
  dependsOn(resource: Resource): boolean;
  getDependentResources(): Resource<ResourceData<unknown>>[];
  getRequiredResources(): Resource<ResourceData<unknown>>[];
  hasDependentResources(): boolean;
  hasDependentComponents(): boolean;
  getInstances(): Component3D_2<Component3DData_4>[];
  getDirectInstances(): Component3D_2<Component3DData_4>[];
  hasReferences(): boolean;
  isRefByResource(r: Resource): boolean;
  isDirectTypeOf(data: any): boolean;
  isTypeOf(data: any): boolean;
  isRefByComponent(data: any): boolean;
  destroy(): void;
  dispose(): void;
}

declare type ResourceByType = {
  script: ScriptResource_2;
  prefab: PrefabResource;
};

export declare interface ResourceData<T = unknown> {
  type: T;
  id: string;
  name?: string;
  image?: string;
  kit?: string;
}

declare class ResourceFactory<R extends Resource> {
  protected opts: ResourceFactoryOpts;
  readonly space: Space;
  readonly hasComponentFactory: boolean;
  constructor(opts: ResourceFactoryOpts);
  onInit(): Promise<void>;
  onDispose(): void;
  onResolve(resources: R[], opts: CreateOpts): Promise<void>;
  private _updateComponentFactory;
  private _registerComponent;
  init(): Promise<void>;
  dispose(): void;
  resolve(resources: R[], opts: CreateOpts): Promise<void>;
  getComponentFactory(proto: R): FactoryClass;
  onCreateResource(data: ResourceData, opts: CreateOpts): Promise<R>;
  createResource(data: ResourceData, opts: CreateOpts): Promise<R>;
  onUpdateResource(resource: R, data: R["data"]): Promise<void>;
  updateResource(resource: R, data: R["data"]): Promise<R>;
  onDestroyResource(resource: R): void;
  destroyResource(resource: R): void;
}

declare interface ResourceFactoryOpts {
  kits: Record<string, any>;
  space: Space;
  externalApi: Record<string, any>;
  data: Record<string, ResourceData<any>>;
}

/**
 * @public
 */
export declare const ResourceLoader: {
  texture: (url: string) => Promise<_THREE.Texture>;
  rawImage: (url: string) => Promise<any>;
};

declare class ResourceManager {
  private opts;
  resourcesById: Record<string, Resource>;
  resourcesbyType: Record<string, Resource[]>;
  _factoryPromises: Record<string, Promise<ResourceFactory<any>>>;
  _factories: Record<string, ResourceFactory<any>>;
  constructor(opts: ResourceManagerOpts);
  private _createFactory;
  private _getFactory;
  _loadAll(): Promise<{
    created: Resource[];
    updated: Resource[];
  }>;
  loadResources(datas: ResourceData<any>[]): Promise<{
    created: Resource[];
    updated: Resource[];
  }>;
  createResource<T extends keyof ResourceByType>(
    data: ResourceData<T>,
    opts?: CreateOpts
  ): Promise<ResourceByType[T]>;
  destroyResource(resource: Resource): void;
  updateResource<T extends Resource>(
    resource: T,
    data: T["data"],
    opts?: CreateOpts
  ): Promise<void>;
  private setResource;
  private removeResource;
  byId(id: string): Resource<ResourceData<any>>;
  find(fn: (resource: Resource) => boolean): Resource<ResourceData<unknown>>;
  filter(
    fn: (resource: Resource) => boolean
  ): Resource<ResourceData<unknown>>[];
  forEach(fn: (resource: Resource) => void): void;
  getPrefab(id: string): PrefabResource;
  getScript(id: string): ScriptResource_2;
  get factories(): Record<string, ResourceFactory<any>>;
  get scriptFactory(): ScriptResourceFactory;
  get scripts(): ScriptResource_2[];
  get scriptsByUri(): Record<string, ScriptResource_2>;
  createPrefab(data: PrefabResourceData): Promise<PrefabResource>;
  private _getPrefabDataSingle;
  getPrefabDataFromInstance(
    instance: Component3D,
    meta: any,
    opts?: {
      parentId: string;
    },
    idToPrefabId?: any
  ): PrefabResourceData;
  _getDefChildMeta(instance: Component3D): {
    name: unknown;
    image: string;
  };
  getPrefabData(instance: Component3D, options: any): PrefabResourceData;
  getChildOverrideAddData(
    instance: Component3D,
    parentId: string
  ): PrefabResourceData;
  getInstancesData(
    prefabData: PrefabResourceData,
    parent: PrefabResource,
    except?: Component3D
  ): {};
  getVariantsData(prefabData: PrefabResourceData, parent: PrefabResource): {};
  getVariantData(
    prefabData: PrefabResourceData,
    parent: PrefabResource
  ): PrefabResourceData;
  createFromInstance(
    instance: Component3D,
    meta: PrefabResourceData["meta"]
  ): Promise<PrefabResource>;
  get prefabs(): PrefabResource[];
  internalizeRefs(prefabData: PrefabResourceData, map: any): void;
  internalizeTemplateRefs(template: any, map: any): void;
  dispose(): void;
}

declare type ResourceManagerOpts = ResourceFactoryOpts;

/**
 * @public
 */
declare type ResourceMap = {
  audio: MediaResource;
  image: MediaResource;
  video: MediaResource;
  model: MediaResource;
  avatar: MediaResource;
};

declare interface ResourceOpt<Data extends ResourceData = ResourceData> {
  data: Data;
  factory: ResourceFactory<any>;
}

/**
 * Resource Params need to be initialized using $Param.Resource
 * @example @Param() myAudio = $Param.Resource("audio")
 */
export declare interface ResourceParam extends AbstractParam {
  type?: "resource";
  required?: boolean;
  typeof?: string | any;
}

declare interface ResourceState {
  type: "idle" | "loaded" | "error";
}

declare const RIGIDBODY_TYPES: Readonly<{
  DYNAMIC_PLAYER: "DYNAMIC_PLAYER";
  DYNAMIC: "DYNAMIC";
  KINEMATIC: "KINEMATIC";
  FIXED: "FIXED";
  PLAYER: "PLAYER";
  VEHICULE: "VEHICULE";
}>;

declare interface RigidBodyOpts {
  type: RigidBodyType_2;
  position: {
    x: number;
    y: number;
    z: number;
  };
  quaternion: {
    x: number;
    y: number;
    z: number;
    w: number;
  };
  translationLock?: [boolean, boolean, boolean];
  rotationLock?: [boolean, boolean, boolean];
  colliders: ColliderOpts[];
}

export declare type RigidBodyType =
  | "DYNAMIC"
  | "KINEMATIC"
  | "FIXED"
  | "PLAYER";

declare type RigidBodyType_2 = "DYNAMIC" | "KINEMATIC" | "PLAYER" | "FIXED";

export declare class RigidBodyWrapper {
  private engine;
  private _component;
  private _raw;
  private _colliders;
  private _options;
  private _enabled;
  private _initPos;
  private _initQuat;

  _prevRbPosition: Vector3;
  _currentRbPosition: Vector3;
  _rbPosition: Vector3;
  private _prevRbQuaternion;
  private _currentRbQuaternion;
  private _rbQuaternion;
  constructor(
    engine: PhysicsRapierWrapper,
    _component: Component3D,
    _opts: RigidBodyOpts
  );
  private _resetPosition;
  private _resetQuaternion;
  private _createRigidBody;
  addColliderFromOptions(opts: any): void;
  private _createColliders;
  _updateColliders(opts: any): void;

  _preInterpolate(): void;

  private _setRBPosition;
  private _setRBQuaternion;
  private _wasDisposed;
  dispose(): void;
  __updateActiveEvents(): void;
  addCollider(collider: Collider_2): void;
  removeCollider(collider: Collider_2): void;
  get colliders(): Collider_2[];
  /**
   * Returns the component that owns this rigidbody
   */
  get component(): Component3D;
  /**
   * Returns the raw Rapier rigidbody
   */
  get raw(): RigidBody;
  /**
   * Returns the options used to create this rigidbody
   */
  get options(): RigidBodyOpts;
  /**
   * Is this rigidbody a fixed rigidbody?
   */
  get isFixed(): boolean;
  /**
   * Is this rigidbody a dynamic rigidbody?
   */
  get isDynamic(): boolean;
  /**
   * Is this rigidbody a kinematic rigidbody?
   */
  get isKinematic(): boolean;
  /**
   * Is this rigidbody enabled?
   */
  get enabled(): boolean;
  /**
   * Use this to enable or disable the rigidbody
   */
  set enabled(value: boolean);
  get position(): Vector3;
  get quaternion(): Quaternion;
  set position(pos: Vector3);
  set quaternion(quat: Quaternion);
  teleport(position: Vector3, quaternion: Quaternion): void;
  /**
   * Returns the current translation lock state
   */
  get translationLock(): [boolean, boolean, boolean];
  /**
   * Use this to lock the rigidbody's translation on a specific axes (x, y, z)
   */
  set translationLock(lock: [boolean, boolean, boolean]);
  /**
   * Returns the current rotation lock state
   */
  get rotationLock(): [boolean, boolean, boolean];
  /**
   * Use this to lock the rigidbody's rotation on a specific axes (x, y, z)
   */
  set rotationLock(lock: [boolean, boolean, boolean]);
  reset(): void;
  /**
   * Add a force to the rigidbody. The force is applied at the center of mass by default
   * unless a relative point is provided
   */
  addForce(force: Partial<XYZ_2>, relativePoint?: XYZ_2): void;
  /**
   * Reset all forces applied to the rigidbody to zero
   */
  resetForces(): void;
  resetVelocities(): void;
  /**
   * Add a torque to the rigidbody
   */
  addTorque(torque: XYZ_2): void;
  /**
   * Reset all torques applied to the rigidbody to zero
   */
  resetTorques(): void;
  /**
   * Apply an impulse to the rigidbody. The impulse is applied at the center of mass by default
   * unless a relative point is provided
   */
  applyImpulse(impulse: Partial<XYZ_2>, relativePoint?: XYZ_2): void;
}

declare type RoomPlayerState = PlayerData & PlayerState_2;

export declare function Rpc(
  opts?: RpcOptions
): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;

export declare namespace Rpc {
  var Server: (
    opts: RpcOptions
  ) => (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => void;
  var Client: (
    opts: RpcOptions
  ) => (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => void;
  var ClientBroadcast: () => (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => void;
  var ServerNoReply: () => (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => void;
  var ClientNoReply: () => (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => void;
}

export declare interface Rpc {
  (opts?: RpcOptions): DecoratorFn;
  Server: (opts?: RpcOptions) => DecoratorFn;
  Client: (opts?: RpcOptions) => DecoratorFn;
  ClientBroadcast: () => DecoratorFn;
  ServerNoReply: () => DecoratorFn;
  ClientNoReply: () => DecoratorFn;
}

export declare const RPC_KEY: unique symbol;

export declare interface RpcOptions {
  reply?: boolean;
  client?: boolean;
  broadcast?: boolean;
  timeout?: number;
}

declare class Scatter {
  constructor(data: any);
  currentJobID: number;
  compute(bGeometry: any, tMesh: any, opts?: {}): Promise<any>;
  data: {
    collision: boolean;
    distanceRatio: number;
    seed: number;
    scale: number;
    scaleVariance: number;
    rotationVariance: number;
    followNormal: boolean;
    count: number;
    normalYThreshold: number;
  };
  worker: any;
}

/**
 * Represents a component that scatters points from a base geometry into a target geometry.
 *
 * See {@link ScatterComponentData} for the data schema used to create a scatter component
 */
declare class ScatterComponent extends Component3D<ScatterComponentData> {
  _scatter: any;
  /**
   * Creates a new ScatterComponent instance.
   * @param opts - The options for the ScatterComponent.
   */
  constructor(opts: any);

  /**
   * Disposes the scatter component.
   * As this component uses webworker and additional resources, it is important to dispose it when not used anymore for performance reasons.
   */
  dispose(): void;
}

/**
 * @public
 *
 * Data specification for {@link ScatterComponentData}, see {@link ComponentManager.create} on how to create a component
 */
declare interface ScatterComponentData extends Component3DData {
  type: "scatter";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * baseModel for the scatter
   */
  baseModel: any;
  /**
   * targetModel for the scatter
   */
  targetModel: any;
  /**
   * sortingStrategy for the scatter
   */
  sortingStrategy: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Bookean to enable / generate the collisions on the scatter results
   */
  collision: false;
  /**
   * Distance ratio for the scatter, 0 means the scatter objects can collide fully, 1 means each scatter is tested so they dont collide with each others
   */
  distanceRatio: number;
  /**
   * Seed for the scatter, int
   */
  seed: number;
  /**
   * Scale of the scattered elements
   */
  scale: number;
  /**
   * Random variance of the scale, default 0
   */
  scaleVariance: number;
  /**
   * Random variance of the rotation, default 0
   */
  rotationVariance: number;
  /**
   * Boolean to enable the scatter to follow the normal of the target geometry
   */
  followNormal: boolean;
  /**
   * Number of scatter to generate
   */
  count: number;
  /**
   * Threshold for the normal Y axis, if the normal is lower than this value, the scatter will be ignored
   */
  normalYThreshold: number;
}

declare class ScatterFactory {
  get(data: any): Scatter;
}

/**
 * @public
 *
 * Data specification for {@link ScatterMeshComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface ScatterMeshComponentData extends Component3DData {
  type: "scattermesh";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * scattering options
   * See {@link ScatterComponentData} for the data schema used for the scattering options
   */
  scatterOptions: ScatterComponentData;
  /**
   * instanced geometry options
   */
  instancedGeometryOptions: InstancedGeometryOptionsData;
  /**
   * set shadow to 'dynamic' to enable dynamic shadow
   */
  shadow?: string;
  /**
   * The base mesh to scatter.
   */
  baseMesh: any;
  /**
   *
   * Material to use for the scatter mesh
   */
  material: any;
  /**
   * The target geometry to scatter into.
   */
  targetMesh: any;
  /**
   * Any visual plugins to apply to the scatter mesh.
   */
  plugins: any[];
}

export declare class ScriptBehavior<
  T extends Component3D = Component3D
> extends ScriptComponent {
  get host(): T;
  get isBehavior(): boolean;
}

/**
 * @public
 */
export declare class ScriptComponent extends ScriptHost {
  material: never;
  geometry: never;
  static readonly config: ComponentOptions;
  /**
   * Creates a new instance of the script component
   */
  static create<T extends ScriptComponent>(
    this: Constructor<T>,
    data?: DataProps<T>
  ): Promise<T>;
  /**
   * @deprecated
   */
  static get instances(): ScriptComponent[];
  static getInstances<T extends ScriptComponent>(this: Constructor<T>): T[];
  static getMain<T extends ScriptComponent>(this: Constructor<T>): T;
  /**
   * Invoked when the host component is initialized
   */
  onRenderInit(): void;
  /**
   * Invoked when the host component is updated
   */
  onRenderUpdate(opts: DataChangeOpts): void;
  /**
   * Invoked when the host component is asked for its collision mesh (if any)
   */
  onGetCollisionMesh(): Mesh;
  /**
   * Invoked when the host component is asked for its collision mesh (if any)
   */
  onRenderDispose(): void;
  onPreload(): void;
  onLoad(): void;
  /**
   * Invoked only **one time** when all assets are loaded and the game is ready to start.
   */
  onReady(): void;
  /**
   * Invoked whenever the game is started or restarted by the user.
   */
  onStart(): void;
  /**
   * Invoked whenever the game has ended.
   */
  onEnd(): void;
  /**
   * Invoked when all children of the host component are loaded
   */
  onChildrenLoaded(children: Component3D[]): void;
  /**
   * Invoked when the component is attached to a parent
   */
  onAttached(): void;
  /**
   * Invoked each frame even if the game isnt running
   */
  onFrame(dt: number): void;
  /**
   * Invoked each frame when the game is running.
   *
   * @param dt The time in seconds since the last frame
   */
  onUpdate(dt: number): void;
  /**
   * Invoked at regular intervals when the game is running.
   * Use this when writing custom controls, or other physics sensitive calculations.
   *
   * @param dt
   */
  onFixedUpdate(dt: number): void;
  /**
   * Invoked when the game is paused by the user.
   */
  onPause(): void;
  /**
   * Invoked when the game is resumed by the user.
   */
  onResume(): void;
  /**
   * Invoked when the game is about to be destroyed.
   * Use this for final cleanup, like releasing resources or unsubscribing from events
   */
  onDispose(): void;
  /**
   * Returns the meshes that can be selected in the editor
   */
  onEditorGetMeshes(): Array<Mesh> | null;
  /**
   * The editor will call this method on the current selected component when a new component
   * is being added in the studio. If your component exposes custom placeholders for other components
   * (eg like placeholders for images or videos), you can return the data for the placeholder here.
   *
   * The typicaluse case is to expose detail meshes for the placeholders using onEditorGetMeshes callback.
   * Then remember current placeholder mesh in onEditorMeshClicked callback. And finally return the data
   * for the placeholder in this method if
   *  - there's a current placeholder selected.
   *  - the current placeholder is a valid target for the newly added component.
   */
  onEditorGetPlaceholderData(instance: Component3D): {
    id: string;
    position: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
    scale?: {
      x: number;
      y: number;
      z: number;
    };
  };
  onGetGui(): void;
  /**
   * Invoked when the user clicks on a mesh in the editor
   */
  onEditorMeshClicked(mesh: Mesh, intersect: Intersection<Mesh>): void;
  /**
   * Invoked when the user hovers over a mesh in the editor
   */
  onEditorMeshMouseEnter(mesh: Mesh, intersect: Intersection<Mesh>): void;
  /**
   * Invoked when the user hovers out of a mesh in the editor
   */
  onEditorMeshMouseLeave(mesh: Mesh): void;
  /**
   * Handles the sensor enter event for the host component
   */
  handleSensorEnter(event: SensorEvent): void;
  /**
   * Handles the sensor exit event for the host component
   */
  handleSensorExit(event: SensorEvent): void;
  /**
   * Handles the sensor stay event for the host component
   */
  handleSensorStay(event: SensorEvent): void;
  /**
   * Handles the collision enter event for the host component
   */
  handleCollisionEnter(event: CollisionEnterEvent): void;
  /**
   * Handles the collision exit event for the host component
   */
  handleCollisionExit(event: CollisionExitEvent): void;
  /**
   * Handles the collision stay event for the host component
   */
  handleCollisionStay(event: CollisionEnterEvent): void;
}

declare class ScriptComponentEditor extends Component3DEditor<ScriptHost> {
  getDataContext(): ScriptComponent_2;
  get config(): InternalConfig_2;
  private _createTransformUI;
  private _createParamsUI;
  guis: {
    transform: {
      type: string;
      label: string;
      children: any;
    };
    params: any;
  };
  getGUI(): {
    type: string;
    children: {
      transform: {
        type: string;
        label: string;
        children: any;
      };
      params: any;
    };
  };
  getDetailMeshes(): Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  >[];
  onDetailMeshClicked(mesh: Mesh, intersect: Intersection<Mesh>): void;
  onDetailMeshMouseEnter(mesh: Mesh, intersect: Intersection<Mesh>): void;
  onDetailMeshMouseLeave(mesh: Mesh): void;
}

declare interface ScriptComponentOpts extends ComponentOpts {
  emitter: ScriptEmitter;
  module: ScriptResource;
  hot?: boolean;
}

/**
 * @public
 *
 * Attach an identifier or a tag to a component, so that it can be easily accessed in
 * the {@link ComponentManager.byId} or {@link ComponentManager.byTag} methods
 */
export declare interface ScriptData {
  /**
   * Identifier for the script, can be used to access the script in the {@link ComponentManager.byId} method
   */
  identifier?: string;
  /**
   * Tag for the script, can be used to access the script in the {@link ComponentManager.byTag} method
   */
  tag?: string;
}

/**
 * @public
 */
declare class ScriptEditorCtx {
  private _impl_;
  constructor(_impl_: ScriptHost["_impl_"]);
  private get _studioEditor();
  get data(): Component3DData_2;
  requestSelection(): void;
  commitUpdates(): void;
  attachTransfomControls(
    object: Object3D,
    opts: {
      callbacks?: {
        onDragStart?: () => void;
        onDragEnd?: () => void;
        onDrag?: () => void;
      };
      translate?: boolean;
      rotate?: boolean;
      scale?: boolean;
    }
  ): void;
  enableTransformControls(): void;
  disableTransformControls(): void;
}

declare class ScriptEmitter {
  #private;
  private _deferredReady;
  _state: GameState;
  private _readyTasks;
  private _readyTasksFlushed;

  constructor();
  get gameReady(): Promise<unknown>;
  on(event: any, handler: any): void;
  off(event: any, handler: any): void;
  once(event: any, handler: any): void;

  emit(event: any, arg: any): void;
  get hasGameStarted(): boolean;
}

declare const ScriptEvents: {
  KEY_DOWN: string;
  KEY_UP: string;
  MOUSE_DOWN: string;
  MOUSE_MOVE: string;
  MOUSE_UP: string;
  CLICK: string;
  WHEEL: string;
  LOOKAT_ENTER: string;
  LOOKAT_EXIT: string;
  GAME_SPACE_LOADED: string;
  GAME_INIT: string;
  GAME_READY: string;
  GAME_START: string;
  GAME_DISPOSE: string;
  GAME_END: string;
  GAME_PAUSE: string;
  GAME_PRE_UPDATE: string;
  GAME_UPDATE: string;
  GAME_PRE_RENDER: string;
  GAME_FRAME: string;
  GAME_FIXED_UPDATE: string;
  GAME_AFTER_FIXED_UPDATE: string;
  GAME_FIXED_INTERPOLATE: string;
  GAME_RESUME: string;
  GAME_NOTIFY_PAUSE: string;
  GAME_NOTIFY_RESUME: string;
  FIXED_UPDATE: string;
  AFTER_FIXED_UPDATE: string;
};

/**
 * @public
 * @public
 */
declare class ScriptHost extends Component3D<any> {
  protected opts: ScriptComponentOpts;
  private _impl_;

  get instance(): ScriptComponent;
  get editorCtx(): ScriptEditorCtx;

  get isBehavior(): boolean;
}

export declare type ScriptParam =
  | StringParam
  | NumberParam
  | BooleanParam
  | ColorParam
  | AnimationParam
  | Vec2Param
  | Vec3Param
  | SelectParam
  | TriggerParam
  | ResourceParam
  | ComponentParam
  | SignalParam
  | ReceiverParam
  | GroupParam
  | ArrayParam
  | UnionParam
  | MapParam;

/**
 * @public
 *
 * Returns a promise that resolves after a number of seconds has passed
 */
export declare function seconds(secs: number): Promise<unknown>;

export declare interface SelectParam<T extends OptId = string>
  extends AbstractParam<T> {
  type?: "select";
  options?: Options<T>;
  mode?: "buttons" | "slider" | "dropdown";
}

export declare interface SensorEvent extends BaseIntersectionEvent {}

export declare interface ServerApi {
  disconnectPlayer(playerId: string): void;
  onJoin(cb: (player: any) => void): void;
  onLeave(cb: (player: any) => void): void;
  send(type: string | number, message: any, playerId: string): void;
  broadcast(type: string | number, message: any, exclude?: string[]): void;
  onMessage(
    type: string,
    cb: (message: any, playerId: string) => void
  ): () => void;
}

export declare function ServerOnly(): (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => void;

declare function SET_SHADOW_NEEDS_UPDATE(val: any): void;

export declare class ShadowFloorComponent extends Component3D<ShadowFloorComponentData> {
  private _factory;
  private _shadowFloor;

  protected init(): Promise<void>;
  protected _onCreateCollisionMesh(): any;
  protected dispose(): void;
}

/**
 * @public
 *
 * Data specification for {@link ShadowFloorComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface ShadowFloorComponentData extends Component3DData {
  type: "shadowfloor";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
}

export declare const SHARED: {
  timer: {
    value: number;
  };
  timer_d2: {
    value: number;
  };
  timer_x2: {
    value: number;
  };
  scanTimer: {
    value: number;
  };
  aspect: {
    value: number;
  };
  invaspect: {
    value: number;
  };
  animationTimer: {
    value: number;
  };
  dpi: {
    value: number;
  };
  resolution: {
    value: _THREE.Vector2;
  };
  invresolution: {
    value: _THREE.Vector2;
  };
  record_size: {
    value: _THREE.Vector2;
  };
  fog: {
    value: _THREE.Vector2;
  };
  isDynamicRendering: {
    value: number;
  };
  isScreenShotRendering: {
    value: number;
  };
  update(delta: any): void;
  resize(w: any, h: any): void;
  addEvents(): void;
};

/**
 * @deprecated
 */
export declare function Signal(
  id: string,
  opts?: SignalOptions
): (target: any, key: any) => void;

/**
 * @public
 */
export declare class SignalAction<T> {
  private _callback;
  private _disposers;
  constructor(_callback: (value: T) => void);
  connectTo(signal: SignalEmitter<T>): void;
  disconnectFrom(signal: SignalEmitter<T>): void;
  isConnectedTo(signal: SignalEmitter<T>): boolean;
  dispose(): void;
}

/**
 * @public
 */
export declare class SignalEmitter<T> {
  private _listeners;
  emit(value: T): void;
  connect(callback: (value: T) => void): () => void;
  disconnect(callback: (value: T) => void): void;
  hasListener(callback: (value: T) => void): boolean;
  nbListeners(): number;
  dispose(): void;
}

export declare interface SignalOptions extends AbstractParam {
  emitType?: ScriptParam;
}

export declare interface SignalParam extends AbstractParam {
  type?: "signal";
  event?: string;
  emitType?: ScriptParam;
}

declare interface SkyOpts {
  turbidity: number;
  rayleigh: number;
  mieCoefficient: number;
  mieDirectionalG: number;
  azimuth: number;
  elevation: number;
}

declare interface Snapshot {
  id: ID;
  time: Time;
  state: any;
}

declare interface SolanaProvider {
  request: (request: { method: string; params?: any }) => Promise<any>;
  getBalance: (address: string) => Promise<bigint>;
}

declare type SoloNavMeshGeneratorIntermediates_2 = {
  type: "solo";
  buildContext: RecastBuildContext;
  heightfield?: RecastHeightfield;
  compactHeightfield?: RecastCompactHeightfield;
  contourSet?: RecastContourSet;
  polyMesh?: RecastPolyMesh;
  polyMeshDetail?: RecastPolyMeshDetail;
};

declare interface SourceData {
  component: Component3D;
  audioSource: AudioSource;
  select: () => AudioTypeData;
  isLookatMuted?: boolean;
}

/**
 * @public
 *
 * Repersents the container for all objects in the scene for the current game.
 *
 * This class is a wrapper around the ThreeJS {@link https://threejs.org/docs/index.html?q=Group#api/en/objects/Group | Group } class.
 */
export declare class Space extends AugmentedGroup {
  /**
   * @type { ComponentManager } - The component manager for the current game.
   */
  components: ComponentManager;
  /**
   * @type { ResourceManager } - The resources manager for the current game.
   */
  resources: ResourceManager;
  /**
   * @type { ComponentsRegistry } - The components registry for the current game.
   */
  registry: ComponentsRegistry;
  /**
   * @type { PhysicsRapierWrapper } - The physics manager for the current game. Currently only Rapier is supported.
   */
  physics: PhysicsRapierWrapper;
  /**
   * @type { PlayerManager } - Options for the space.
   */
  players: PlayerManager;
  /**
   * @type { CGameClient } - Options for the space.
   */
  gameClient: CGameClient;

  options: {
    game: Game_2;
    externalApi: any;
    server?: Server;
    signals?: GameSignals;
    hot?: boolean;
    loadOpts?: {
      looseMode?: boolean;
      multiplayer?: {
        roomId: string;
        sharedHost?: string;
        dedicatedHost?: string;
      };
      autoStart?: "auto" | "manual";
    };
  };
  get isReady(): boolean;
  /**
   * Returns the current camera in the scene. cf {@link MainCamera}
   */
  get camera(): PerspectiveCamera;

  get sessionId(): string;

  /**
   * Use this method to start the current game.
   */
  start(payload?: any): void;
  /**
   * Use this method to stop the current game.
   */
  stop(payload?: any): void;
  /**
   * Use this method to pause the current game.
   */
  pause(payload?: any): void;
  /**
   * Use this method to resume the current game.
   */
  resume(payload?: any): void;
  /**
   * Takes a screenshot of the current frame. Returns a promise that resolves to the data URL of the screenshot.
   *
   * @param {{ width?: number, height?: number }} opts - Options for the screenshot
   */
  captureFrame(opts?: { width?: number; height?: number }): Promise<string>;

  #private;
}

/**
 * @public
 *
 * This component is used to configure  where the player will spawn, initially, in the game. Use the studio to configure the spawn for the space.
 *
 * This is a singleton component.
 */
export declare class SpawnComponent extends Component3D<any> {
  private _mainPlayer;

  init(): Promise<void>;
  private _getAvatarData;
  private _setupAvatar;

  private _update3D;

  protected dispose(): void;
}

declare interface SphereColliderOpts extends BaseColliderOpts {
  type: "SPHERE";
  radius: number;
}

/**
 * @public
 *
 * Params for the {@link MeshComponentData.geometry.sphereParams} property
 *
 * See {@link https://threejs.org/docs/#api/en/geometries/SphereGeometry | SphereGeometry}
 */
export declare interface SphereParamsData {
  radius: number;
  widthSegments: number;
  heightSegments: number;
}

/**
 * @public
 *
 * Spline Component
 *
 * See {@link SplineComponentData} for the data schema used to create an image component
 */
declare class SplineComponent extends Component3D<SplineComponentData> {
  private _splineFactory;

  private _lastPoints;

  protected init(): Promise<void>;

  private _baseFollower;
  private _followers;
  private setPreset;
  private destroyFollowers;
  getPointAtIndex(index: number): Vector3;
  getPointAt(t: number): Vector3;
  getBakedPointAt(t: number): Vector3;
  getUtoTmapping(u: number): number;
  getPoint(u: number): Vector3;
  private _update3D;
  getPoints(): Vector3[];

  private followerUpdate;
  private addFollowerEvents;
  private _lookAt;
  private removeFollowerEvents;
  private _collisionMesh;

  protected dispose(): void;
  set opacity(val: any);
  get opacity(): any;
}

/**
 * @public
 *
 * Data specification for {@link SplineComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface SplineComponentData extends Component3DData {
  type: "spline";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Color of the Spline ( Editor Mode ). Defaults to #001E0F
   */
  color?: string;
  /**
   * Smoothness / arc division of the spline
   */
  smoothness?: number;
  /**
   * Array of array of points for the spline
   */
  points?: number[];
  /**
   * If the spline is closed or not
   */
  closed: boolean;
  /**
   * Preset for the follower
   */
  preset: object;
  /**
   * Follower count
   */
  followerCount: number;
  /**
   * Follower Offset Variation
   *
   */
  followerOffsetVariation: XYZ;
  /**
   * Follower speed
   */
  followerSpeed: number;
  /**
   * Follower speed variation
   */
  followerSpeedVariation: number;
  /**
   * LineWidth of the line
   */
  lineWidth: number;
  /**
   * Opacity of the spline
   */
  opacity: number;
  /**
   * Display on live Mode
   */
  display?: boolean;
}

declare class Splines extends AugmentedObject {
  constructor(data?: {});
  _color: any;
  definition: any;
  _closed: any;
  dataPositions: Vector3[];
  set closed(val: any);
  get closed(): any;
  sectorHelpers: any[];
  meshLine: PipeLineMesh_2;
  syncPoints(points: any): void;
  dataPointToVector3(points: any): Vector3[];
  getDataPoints(): any[];
  getBakedPointAt(val: any): Vector3;
  getPointAt(val: any): Vector3;
  getUtoTmapping(g: any): number;
  getPoint(u: any): Vector3;
  getPointAtIndex(index: any): Vector3;
  setPointAtIndex(index: any, val: any): void;
  updateCurve(): void;
  curve: CatmullRomCurve3;
  spacedPoints: Vector3[];
  updateLines(): void;
  displaySectors(): void;
  showSector(p: any): void;
  updateFromSectors(): void;
  addPointAtIndex(index: any): void;
  addPoint(data: any): void;
  deletePointAtIndex(index: any): void;
  deletePoint(point: any): void;
  getPoints(): Vector3[];
  getSectors(): any[];
  removeSectors(): void;
  set color(val: any);
  get color(): any;
  set smoothness(val: any);
  get smoothness(): any;
  set lineWidth(val: any);
  get lineWidth(): any;
  set opacity(val: any);
  get opacity(): any;
  destroy(): void;
}

declare class Standard extends MeshStandardMaterial_2 {}

/**
 * @public
 */
declare interface StandardMaterialData extends BaseMaterialData {
  type: "standard";
  bumpMap?: TextureData;
  bumpScale: number;
  roughness: number;
  metalness: number;
}

/**
 * @public
 */
export declare class Store<State> extends Augmented {
  private _state;
  constructor(_state: State);
  getState: () => State;
  get state(): State;
  subscribe: (cb: Callback_2) => () => void;
  notify: () => void;
  update: (newState: Partial<State>) => void;
}

declare class Store_2<State> extends Augmented {
  private _state;
  constructor(_state: State);
  getState: () => State;
  subscribe: (cb: Callback) => () => void;
  notify: () => void;
  update: (newState: Partial<State>) => void;
}

export declare interface StringParam extends AbstractParam<string> {
  type?: "string" | "text";
  isSecret?: boolean;
}

export declare interface Tagged<V> {
  readonly tag: string;
  readonly value: V;
}

declare type Task = () => Promise<any>;

/**
 * @public
 *
 * Terrain component, used to create terrains in the game. Use the studio to add terrains to the space.
 */
export declare class TerrainComponent extends Component3D<any> {
  #private;
  private materials;
  private mesh;
  protected init(): Promise<void>;
  _onCreateCollisionMesh(): PipeLineMesh;
  protected _getBBoxImp(box: Box3): Box3;

  private _update3D;

  private geometryNeedsUpdate;
  private textureNeedsUpdate;
  private texAbort;
  private textureMap;
  private textureMapRatio;
  private textureSideMap;
  private textureSideMapRatio;
  private geoAbort;
  private updateTexturing;
  private computeGeometry;
  private computeNoiseGeometryInWorker;
  protected dispose(): void;
}

/** @public */
declare type Testnet =
  | "sepolia"
  | "oncyber:testnet"
  | "base:sepolia"
  | "solana:dev";

/**
 * @public
 */
declare type TextAlignment = "left" | "center" | "right";

/**
 * @public
 *
 * Text component, used to display text in the game.
 *
 * See {@link TextComponentData} for the data schema used to create a text component
 */
export declare class TextComponent extends Component3D<TextComponentData> {
  private _font;
  private _regenerate;
  private _isInstanced;
  protected init(): Promise<void>;
  private _createFont;
  private _disposeFont;
  private update;
  private _getFontParams;

  private _isUpdating;
  private _update3D;

  protected dispose(): void;
  /**
   * Public api
   */
  /**
   * Text to display
   */
  text: string;
  /**
   * Font to use
   */
  font: FontFamily;
  /**
   * Width of the text box. Defaults to 500. Use this to avoid breaking a long into multiple lines
   */
  width: number;
  /**
   * Line height of the text. Defaults to 60
   */
  lineHeight: number;
  /**
   * Color of the text. Defaults to "#ffffff"
   */
  textColor: string;
  /**
   * How text should be aligned. Defaults to "left"
   */
  align: TextAlignment;
  /**
   * Optional transform to apply to the text. Defaults to "none"
   */
  textTransform: TextTransform;
  /**
   * Opacity of the text. Defaults to 1
   */
  opacity: number;
}

/**
 * @public
 *
 * Data specification for {@link TextComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface TextComponentData extends Component3DData {
  type: "text";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  /**
   * Text to display
   */
  text: string;
  /**
   * Font to use
   */
  font?: FontFamily;
  /**
   * Width of the text box. Defaults to 500. Use this to avoid breaking a long into multiple lines
   */
  width?: number;
  /**
   * Line height of the text. Defaults to 60
   */
  lineHeight?: number;
  /**
   * Color of the text. Defaults to "#ffffff"
   */
  textColor?: string;
  /**
   * How text should be aligned. Defaults to "left"
   */
  align?: TextAlignment;
  /**
   * Optional transform to apply to the text. Defaults to "none"
   */
  textTransform?: TextTransform;
  /**
   * Opacity of the text. Defaults to 1
   */
  opacity?: number;
  /**
   * Whether the text should use instancing. Defaults to false
   */
  instanced?: boolean;
  /**
   * Whether the text should use billboardind when instanced. Defaults to true
   */
  instancedBillBoard?: boolean;
}

/**
 * @public
 */
declare type TextTransform =
  | "none"
  | "uppercase"
  | "lowercase"
  | "capitalize"
  | "togglecase";

/**
 * @public
 *
 * Texture data for the {@link MeshComponentData.texture} property
 *
 * See {@link https://threejs.org/docs/#api/en/textures/Texture | Texture}
 */
declare interface TextureData {
  image: Image_2;
  colorSpace: ColorSpace;
  wrapS: Wrapping;
  wrapT: Wrapping;
  repeat: XY;
  useMipMap: boolean;
  minFilter: MinificationTextureFilter;
  magFilter: MagnificationTextureFilter;
}

/**
 * @public
 *
 * This class is used to implement third person camera mode.
 *
 * The controls use mouse movements to rotate the camera around the target object; By default the conttrols controller
 * will enter pointer lock mode when the user clicks on the canvas. To disable this behavior set the `usePointerLock`
 * property to false on the controls controller.
 *
 * The behavior of the controls can be customized by passing a {@link ThirdPersonCameraControlsWrapperParams}
 * object to the constructor
 *
 * The meaning of `object` & `target` options is intepreted as follows:
 *
 *   - The `object` is typically set to the camera object being controlled
 *
 *   - The `target` is the object that the camera will follow from the given maxZoomOut distance
 */
export declare class ThirdPersonCameraControlsWrapper extends ControlsAbstract {
  /**
   * The controller used to translate mouse movements into camera rotations
   */
  controller: Controller;

  /**
   * Represents the maximum distance from the target object
   */
  private _maxZoomOut;
  /**
   * Represents the vertical offset from the target object
   */
  heightOffset: number;
  private quat;
  private spherical;
  private targetSpherical;
  private quatInverse;
  private idealCameraPosition;
  private idealCameraTarget;
  private cameraPosition;
  private cameraTarget;
  private cameraHeight;
  private theta;
  private phi;
  private currentZoom;
  disableCollision: boolean;
  disableWheelZoom: boolean;
  private _lerpByPos;
  private _lerpFactor;
  _canZoom: boolean;

  /**
   * Used to lock the camera movement on a specific axis
   */
  lockAxis: {
    x: boolean;
    y: boolean;
  };
  cameraAltitudeMaxDistance: number;
  cameraAltitudeSmoothing: number;
  cameraVirtualTarget: Vector3;
  private originVec;
  private rotationMatrix;
  private origin;
  private playerCameraWorldDir;

  private minRatioToRotateY;
  private nearPlaneCorners;
  private world;
  private engine;
  private cameraDistance;
  private temp;

  get smoothMethod(): "position" | "orbit";
  set smoothMethod(value: "position" | "orbit");
  get smoothFactor(): number;
  set smoothFactor(value: number);

  /**
   * activates or deactivates the controls
   *
   * @param {boolean} value - true to activate, false to deactivate
   */
  set active(value: boolean);
  /**
   * Returns true if the controls are active, false otherwise
   */
  get active(): boolean;
  /**
   * Controls wether the controls should use pointer lock or not, if true clicking on the canvas will lock the pointer
   * and the target will move by simply moving the mouse, if false the camera will move by clicking and dragging the mouse
   */
  set usePointerLock(value: boolean);
  /**
   * Returns true if the controls are using pointer lock, false otherwise
   */
  get usePointerLock(): boolean;
  /**
   * Represents the maximum distance from the target object
   */
  get maxZoomOut(): number;
  get canZoom(): boolean;
  set canZoom(value: boolean);
  /**
   * Changes the maximum distance from the target object
   */
  set maxZoomOut(value: number);

  private sphericalToVec3;

  saveState: () => {
    spherical: Spherical;
    targetSpherical: Spherical;
    idealCameraPosition: Vector3;
    idealCameraTarget: Vector3;
    cameraPosition: Vector3;
    cameraTarget: Vector3;
    cameraHeight: number;
    theta: number;
    phi: number;
    currentZoom: number;
  };
  loadState: (state: any) => void;

  private $$alpha;
  lerpSpherical(spherical: any, target: any, alpha: any): void;
  $$lerp: {
    dt: number;
    a: number;
  };
}

export declare interface ThirdPersonCameraControlsWrapperParams {
  /**
   * Represents the maximum distance from the target object
   */
  maxZoomOut?: number;
  /**
   * Represents the vertical offset from the target object
   */
  heightOffset?: number;
  /**
   * Represents the sensitivity of the camera
   */
  sensitivity?: {
    x?: number;
    y?: number;
  };
  /** Smoothing applied to the camera altitude. 0 = no smoothing, >0.2 = heavy smoothing */
  cameraAltitudeSmoothing: number;
  /** Distance at which the camera smoothing will be disabled to maintain said distance */
  cameraAltitudeMaxDistance: number;
}

declare type Time = number;

declare class Toon extends MeshToonMaterial_2 {}

/**
 * @public
 */
declare interface ToonMaterialData extends BaseMaterialData {
  type: "toon";
  bumpMap?: TextureData;
  bumpScale: number;
  specular: string;
}

/** @public */
declare type TransactionOptions = {
  value: number;
};

declare type TransformConfigOpts =
  | boolean
  | {
      position?: TransformConfigXYZOpt;
      rotation?: TransformConfigXYZOpt;
      scale?: TransformConfigXYZOpt;
    };

declare type TransformConfigXYZOpt = boolean;

/**
 * The `@Trigger` decorator can be used on script functions to show a button for it in the property panel
 */
export declare function Trigger(
  opts?: TriggerOptions
): (target: any, key: any) => void;

export declare interface TriggerOptions extends AbstractParam {}

export declare interface TriggerParam extends AbstractParam {
  type?: "button";
  methodKey?: string;
  action?: () => void;
}

declare class TrippyOpts {
  speed: number;
}

declare class TvOpts {
  amount: number;
  strength: number;
  glitchRatio: number;
  speed: number;
  vignetteFallOff: number;
  vignetteStrength: number;
}

/**
 * @public
 */
export declare const UI: {
  /**
   * @deprecated Please use UI.createRenderer() instead.
   */
  getRoot(container?: HTMLElement): {
    render: (element: any) => void;
    unmount: () => void;
  };
  createRenderer(): {
    unmount: () => void;
    render: (node: ReactNode) => boolean;
    renderSync: (node: ReactNode) => boolean;
    /**
     * Animate a render transition using the {@link https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API ViewTransitionApi}
     * Not suitable for small recurrent UI updates
     */
    renderTransition: (node: ReactNode) => boolean;
  };
};

declare type UIEditorState = {
  unfolds: Record<string, boolean>;
};

export declare interface UnionParam extends AbstractParam {
  type?: "union";
  options?: Array<{
    tag: string;
    value: ScriptParam;
  }>;
  tagLabels?: Record<string, string>;
  mode?: "buttons" | "slider" | "dropdown";
}

/**
 * @public
 */
export declare function useStore<T>(store: Store<T>): T;

declare namespace Utils {
  export { _default as default };
}
export { Utils };

/** A save place to store your snapshots. */
declare class Vault {
  private _vault;
  private _vaultSize;
  /** Get a Snapshot by its ID. */
  getById(id: ID): Snapshot;
  /** Clear this Vault */
  clear(): void;
  latest(): Snapshot | undefined;
  around(time: number):
    | {
        older: Snapshot;
        newer: Snapshot;
      }
    | undefined;
  closest(time: number): Snapshot | undefined;
  /** Add a snapshot to the vault. */
  add(snapshot: Snapshot): void;
  /** Get the current capacity (size) of the vault. */
  get size(): number;
  /** Set the max capacity (size) of the vault. */
  setMaxSize(size: number): void;
  /** Get the max capacity (size) of the vault. */
  getMaxSize(): number;
}

export declare interface Vec2Param extends AbstractParam<XY_2> {
  type?: "vec2";
}

declare type Vec3 = {
  x: number;
  y: number;
  z: number;
};

export declare interface Vec3Param extends AbstractParam<XYZ_3> {
  type?: "vec3" | "xyz";
}

/**
 * @public
 *
 * This component is used to display a video in the game.
 *
 * See {@link VideoComponentData} for the data schema used to create a video component
 */
export declare class VideoComponent extends Component3D<VideoComponentData> {
  #private;
  private _video;
  private _border;
  private _posAudio;

  protected init(): Promise<void>;
  private _prevData;
  private _initVideo;
  private _disposeVideo;
  private _updateVideo;
  private get _videoEl();
  private _updateAudioType;

  private _update3D;

  protected _getBBoxImp(target: Box3): Box3;
  protected dispose(): void;
  /*****************************************************************
   *                      Public API
   *****************************************************************/
  /**
   * Volume of the audio, from 0 to 1. Defaults to 1
   */
  volume: number;
  /**
   * Whether the video should start playing automatically. Defaults to false
   */
  autoPlay: boolean;
  /**
   * Set the opacity of the video. Defaults to 1
   */
  opacity: number;
  /**
   * Determine the display mode of the video. Defaults to "flat"
   */
  displayMode: "flat" | "curved";
  /**
   * The angle of the curved video. Defaults to 180
   */
  curvedAngle: number;
  /**
   * Whether the video should be muted. Defaults to false
   */
  muted: boolean;
  hasBorder: boolean;
  borderColor: string;
  borderSize: number;
  borderDepth: number;
  borderOpacity: number;
  /**
   * Play the video
   */
  play(): void;
  /**
   * Pause the video
   */
  pause(): void;
  /**
   * Returns true if the video is playing
   */
  get isPlaying(): boolean;
}

/**
 * @public
 *
 * Data specification for {@link VideoComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface VideoComponentData extends Component3DData {
  type: "video";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * url of the video file
   */
  url: string;
  /**
   * url of the preview image to show when the video is not playing
   */
  preview?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1, y: 1, z: 1}
   */
  scale?: XYZ;
  borderColor?: number;
  borderSize?: number;
  borderDepth?: number;
  borderOpacity?: number;
  hasBorder?: boolean;
  /**
   * Volume of the audio, from 0 to 1. Defaults to 1
   */
  volume?: number;

  audioRange: number;
  /**
   * Whether the video should start playing automatically. Defaults to false
   */
  autoPlay: false;
  /**
   * Set the opacity of the video. Defaults to 1
   */
  opacity: number;
  /**
   * Determine the display mode of the video. Defaults to "flat"
   */
  displayMode: "flat" | "curved";
  /**
   * The angle of the curved video. Defaults to 180
   */
  curvedAngle: number;
}

/**
 * @public
 *
 * data for the {@link VRMAnimationsComponentData.anims} property
 */
declare interface VRMAnimationData {
  /**
   * The file name of the animation (fbx)
   */
  fileName: string;
  /**
   * The name of the animation, use to assign to avatar.animation property
   */
  name: string;
  /**
   * Whether the animation should loop
   */
  loop: boolean;
  /**
   * Whether the animation should be synchronized
   */
  sync: boolean;
  /**
   * The time scale of the animation
   */
  timeScale: number;
  /**
   * url of the bake file
   */
  url?: string;
  /**
   * The hash of the bake file
   */
  hash?: string;
}

/**
 * @public
 *
 * Data specification for {@link VRMAnimationsComponent}.
 */
declare interface VRMAnimationsComponentData extends Component3DData {
  type: "vrm-anims";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * url of the packed anims data bake
   */
  url?: string;
  /**
   * VRM animations data
   */
  anims?: {
    [id: string]: VRMAnimationData;
  };
}

/**
 * @public
 *
 * The VRMAnimations component is used to customize standard animations for VRM avatars (walk, idle ...).
 * As well as to add other custom animations. You can set the VRMAnimations appareance from the studio.
 *
 * VRMAnimations is a singleton, so you can only have one VRMAnimation instance in the game.
 */
declare class VRMAnimsComponent extends Component3D<VRMAnimationsComponentData> {
  _fullAnims: any;
  protected init(): Promise<void>;
  private _computeAnimlist;

  /**
   * Get the list of animations for the VRM avatar, including custom animations and all the infos related to them.
   */
  getAnimInfo(name: any): any;
  protected dispose(): void;
}

declare type WalletType = "all" | "injected" | "embedded";

/**
 * @public
 *
 * Water component, used to display water in the game. Use the studio to add a water component to the space.
 *
 * This is a singleton component, so you can only have one water component in the game. For performance reasons
 * Adding both a water and a reflector component to the same space is not supported.
 */
export declare class WaterComponent extends Component3D<WaterComponentData> {
  private _water;
  protected init(): Promise<void>;

  private _update3D;

  protected dispose(): void;
}

/**
 * @public
 *
 * Data specification for {@link WaterComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface WaterComponentData extends Component3DData {
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Scale of the component in the space. Defaults to {x: 1000, z: 1000}
   */
  scale?: {
    x: number;
    z: number;
  };
  /**
   * Color of the water. Defaults to #001E0F
   */
  color?: string;
  /**
   * Opaque of the water. Defaults to 1
   */
  opacity: number;
}

/**
 * @public
 *
 * A component to display a wave effect in the game.
 *
 * See {@link WaveComponentData} for the data schema used to create a wave component
 */
export declare class WaveComponent extends Component3D<WaveComponentData> {
  private _factory;
  private _wave;
  private _regenerate;

  /**
   * Get the radius of the wave.
   */
  get radius(): number;
  /**
   * Set the radius of the wave.
   */
  set radius(val: number);
  /**
   * Get the width of the wave lines.
   */
  get lineWidth(): number;
  /**
   * Set the width of the wave lines.
   */
  set lineWidth(val: number);
  /**
   * Get the color of the wave lines.
   */
  get color(): number;
  /**
   * Set the color of the wave lines.
   */
  set color(val: number);
  /**
   * Get the direction of the wave circles: 1 means outwards, -1 means inwards. Defaults to -1
   */
  get direction(): any;
  /**
   * Set the direction of the wave circles: 1 means outwards, -1 means inwards. Defaults to -1
   */
  set direction(val: any);
  private disposeWaveMesh;
}

/**
 * @public
 *
 * Data specification for {@link WaveComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface WaveComponentData extends Component3DData {
  type: "kitbash";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Rotation of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  rotation?: XYZ;
  /**
   * Color of the wave lines. Defaults to 0xffffff
   */
  color?: number;
  /**
   * Height of the wave. Defaults to 0.5
   */
  height?: number;
  /**
   * Radius of the wave. Defaults to 5
   */
  radius?: number;
  /**
   * Width of the wave lines. Defaults to 0.14
   */
  linewidth?: number;
  /**
   * Higher values will result in a more detailed wave mesh geometry. Defaults to 100
   */
  divisions?: number;
  /**
   * Number of lines in the wave. Defaults to 4
   */
  lines?: number;
  /**
   * Direction of the wave circles: 1 means outwards, -1 means inwards. Defaults to -1
   */
  direction: -1;
}

declare class WaveEditor extends Component3DEditor<WaveComponent> {
  gui: {
    type: string;
    children: {
      transform: {
        type: string;
        label: string;
        children: any;
      };
      appearance: {
        type: string;
        label: string;
        children: {
          color: {
            type: string;
            value: (string | WaveComponentData_2)[];
          };
          radius: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
          };
          height: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
          };
          linewidth: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
            max: number;
            step: number;
          };
          divisions: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
          };
          lines: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
          };
          direction: {
            type: string;
            value: (string | WaveComponentData_2)[];
            items: {
              id: number;
              label: string;
            }[];
          };
        };
      };
    };
  };
  getGUI(): {
    type: string;
    children: {
      transform: {
        type: string;
        label: string;
        children: any;
      };
      appearance: {
        type: string;
        label: string;
        children: {
          color: {
            type: string;
            value: (string | WaveComponentData_2)[];
          };
          radius: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
          };
          height: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
          };
          linewidth: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
            max: number;
            step: number;
          };
          divisions: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
          };
          lines: {
            type: string;
            value: (string | WaveComponentData_2)[];
            min: number;
          };
          direction: {
            type: string;
            value: (string | WaveComponentData_2)[];
            items: {
              id: number;
              label: string;
            }[];
          };
        };
      };
    };
  };
  selectionMesh: Mesh<BoxGeometry, MeshBasicMaterial, Object3DEventMap>;
  init(): void;
  getSelectionMesh(): Mesh<BoxGeometry, MeshBasicMaterial, Object3DEventMap>;
  updateSelectionMesh: () => void;
}

/**
 * @public
 *
 * Class representing Web3 functionalities.
 */
export declare let Web3: Web3Api;

/**
 * Class representing Web3 functionalities.
 * @public
 */
declare class Web3Api {
  #private;

  emit: any;
  ABI: {
    readonly ERC721: readonly [
      {
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          },
          {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
          }
        ];
        readonly name: "ERC721IncorrectOwner";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "ERC721InsufficientApproval";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
          }
        ];
        readonly name: "ERC721InvalidApprover";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          }
        ];
        readonly name: "ERC721InvalidOperator";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
          }
        ];
        readonly name: "ERC721InvalidOwner";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
          }
        ];
        readonly name: "ERC721InvalidReceiver";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
          }
        ];
        readonly name: "ERC721InvalidSender";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "ERC721NonexistentToken";
        readonly type: "error";
      },
      {
        readonly anonymous: false;
        readonly inputs: readonly [
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "approved";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "Approval";
        readonly type: "event";
      },
      {
        readonly anonymous: false;
        readonly inputs: readonly [
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          },
          {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
          }
        ];
        readonly name: "ApprovalForAll";
        readonly type: "event";
      },
      {
        readonly anonymous: false;
        readonly inputs: readonly [
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "Transfer";
        readonly type: "event";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
          }
        ];
        readonly name: "balanceOf";
        readonly outputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "getApproved";
        readonly outputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          }
        ];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [
          {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [
          {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "ownerOf";
        readonly outputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          },
          {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
          }
        ];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          },
          {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
          }
        ];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
          }
        ];
        readonly name: "supportsInterface";
        readonly outputs: readonly [
          {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [
          {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "tokenURI";
        readonly outputs: readonly [
          {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      }
    ];
    readonly ERC20: readonly [
      {
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
          },
          {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
          }
        ];
        readonly name: "ERC20InsufficientAllowance";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
          },
          {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
          }
        ];
        readonly name: "ERC20InsufficientBalance";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
          }
        ];
        readonly name: "ERC20InvalidApprover";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
          }
        ];
        readonly name: "ERC20InvalidReceiver";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
          }
        ];
        readonly name: "ERC20InvalidSender";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
          }
        ];
        readonly name: "ERC20InvalidSpender";
        readonly type: "error";
      },
      {
        readonly anonymous: false;
        readonly inputs: readonly [
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
          },
          {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
          }
        ];
        readonly name: "Approval";
        readonly type: "event";
      },
      {
        readonly anonymous: false;
        readonly inputs: readonly [
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
          }
        ];
        readonly name: "Transfer";
        readonly type: "event";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
          }
        ];
        readonly name: "allowance";
        readonly outputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
          }
        ];
        readonly name: "approve";
        readonly outputs: readonly [
          {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
          }
        ];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
          }
        ];
        readonly name: "balanceOf";
        readonly outputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [
          {
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [
          {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [
          {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
          }
        ];
        readonly name: "transfer";
        readonly outputs: readonly [
          {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
          }
        ];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
          }
        ];
        readonly name: "transferFrom";
        readonly outputs: readonly [
          {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
          }
        ];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      }
    ];
    readonly ERC1155: readonly [
      {
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
          },
          {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
          },
          {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
          }
        ];
        readonly name: "ERC1155InsufficientBalance";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
          }
        ];
        readonly name: "ERC1155InvalidApprover";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "idsLength";
            readonly type: "uint256";
          },
          {
            readonly internalType: "uint256";
            readonly name: "valuesLength";
            readonly type: "uint256";
          }
        ];
        readonly name: "ERC1155InvalidArrayLength";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          }
        ];
        readonly name: "ERC1155InvalidOperator";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
          }
        ];
        readonly name: "ERC1155InvalidReceiver";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
          }
        ];
        readonly name: "ERC1155InvalidSender";
        readonly type: "error";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
          }
        ];
        readonly name: "ERC1155MissingApprovalForAll";
        readonly type: "error";
      },
      {
        readonly anonymous: false;
        readonly inputs: readonly [
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          },
          {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
          }
        ];
        readonly name: "ApprovalForAll";
        readonly type: "event";
      },
      {
        readonly anonymous: false;
        readonly inputs: readonly [
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
          },
          {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
          }
        ];
        readonly name: "TransferBatch";
        readonly type: "event";
      },
      {
        readonly anonymous: false;
        readonly inputs: readonly [
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
          },
          {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
          }
        ];
        readonly name: "TransferSingle";
        readonly type: "event";
      },
      {
        readonly anonymous: false;
        readonly inputs: readonly [
          {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
          },
          {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
          }
        ];
        readonly name: "URI";
        readonly type: "event";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
          }
        ];
        readonly name: "balanceOf";
        readonly outputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address[]";
            readonly name: "accounts";
            readonly type: "address[]";
          },
          {
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
          }
        ];
        readonly name: "balanceOfBatch";
        readonly outputs: readonly [
          {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          }
        ];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [
          {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
          },
          {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
          },
          {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
          }
        ];
        readonly name: "safeBatchTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
          },
          {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
          },
          {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
          },
          {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
          },
          {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
          }
        ];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
          },
          {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
          }
        ];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
          }
        ];
        readonly name: "supportsInterface";
        readonly outputs: readonly [
          {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      },
      {
        readonly inputs: readonly [
          {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
          }
        ];
        readonly name: "uri";
        readonly outputs: readonly [
          {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
          }
        ];
        readonly stateMutability: "view";
        readonly type: "function";
      }
    ];
  };

  sendTransaction: (transactionBase64: any, chain?: Chain) => Promise<any>;
  login: (chain?: "solana" | "ethereum") => Promise<ConnectedWallet_3>;
  setWalletType: (value: WalletType, chain?: Chain) => void;
  /**
   * Request the wallet address of the user.
   */
  requestAddress: (chain?: Chain) => Promise<string>;
  /**
   * Request the wallet balance
   * will request a connection if the user not connected with this chain
   */
  requestBalance: (chain?: Chain, addr?: string) => Promise<number>;
  getTokenBalance: (
    mintAddr: string,
    chain?: Chain,
    address?: string
  ) => Promise<number>;
  /**
   * Request a message signature
   * will request a connection if the user not connected with this chain
   */
  signMessage: (message: string | Uint8Array, chain?: Chain) => Promise<string>;
  /**
   * Get the ens name of an address
   */
  getENS: (address: string) => Promise<string>;
  /**
   * Create a new Contract instance
   * if reanOnly is not set to true creating a contract will require a wallet connection
   */
  Contract: <T extends ABI>(
    address: string,
    abi: T,
    chain: Chain
  ) => Promise<Contract & ContractOf<T>>;
  /**
   * Prompts the user to delegate access to their wallet
   * to a trusted-execution environment (TEE) to allow an app to transact on behalf of a user within a set of pre-defined permissions.
   */
  delegate: (chainType?: "solana" | "ethereum") => Promise<void>;
  /**
   * Check if current wallet is embedded.
   */
  isEmbedded: (chain?: Chain) => Promise<boolean>;
  /**
   * Request funding.
   */
  requestFunding: (
    chain?: Chain,
    defaultAmount?: number
  ) => Promise<{
    transaction: null;
    status: "error" | "closed" | "success";
  }>;
  /**
   * Getting a user's delegated wallet.
   */
  getDelegatedWallet: (
    chainType?: "solana" | "ethereum"
  ) => Promise<WalletWithMetadata>;

  send: (method: string, message: any) => Promise<any>;
  WeiToEth: (value: number | bigint) => BigInt;
  GweiToEth: (value: number | bigint) => BigInt;
  EthToGwei: (value: number | bigint) => BigInt;
  WeiToGwei: (value: number | bigint) => BigInt;
  EthToWei: (value: number | bigint) => BigInt;
  GweiToWei: (value: number | bigint) => BigInt;
  LamportsToSol: (value: number | bigint) => number;
  SolToLamports: (value: number | bigint) => number;
}

/** @public */
declare interface Web3Api extends ProxyEmitter<Web3ApiEvents> {}

/**
 * @public
 */
declare type Web3ApiEvents = {
  /**
   * Emitted when the user change wallet, this is only called if a address has been requested first
   */
  "wallet-change": [address: string];
};

declare type Web3Props = {
  web3provider: Web3Provider;
};

declare interface Web3Provider extends EventEmitter {
  switchChain(chain: Chain): Promise<void>;
  isEmbedded(chain: Chain): Promise<boolean>;
  send(method: string, message: any): Promise<any>;
  getSigner(chain: Chain): Promise<Signer | ConnectedSolanaWallet>;
  setWalletType(value: WalletType, chain: SourceChain): void;
  fund(chain?: Chain, minAmount?: number): Promise<FundReturn>;
  delegateWallet(chainType: "solana" | "ethereum"): Promise<void>;
  login(chainType: "solana" | "ethereum"): Promise<ConnectedWallet>;
  getProvider(chain: Chain): Promise<JsonRpcProvider | SolanaProvider>;
  getTokenBalance(
    mintAddr: string,
    chain?: Chain,
    address?: string
  ): Promise<number>;
  getDelegatedWallet: (
    chain?: "ethereum" | "solana"
  ) => Promise<WalletWithMetadata>;
}

/**
 * @public
 *
 * A component to manage WebRTC voice and screenshare streams
 *
 * See {@link WebRTCComponentData} for the data schema used to create a agora component
 */
declare class WebRTCComponent extends Component3D<WebRTCComponentData> {
  voiceStreams: {};
  shareStreams: {};
  volumes: {};
  conn: any;
  gameId: any;
  userId: string;
  private _voiceState;
  private _screenshareState;
  localUuid: any;
  localStream: any;
  get voiceState(): string;
  get screenshareState(): string;

  pcs: {};
  updatePeerConnections: (peers: any) => void;
  createPeerConnection: (userId: any) => void;
  onOffer: (from: any, data: any) => Promise<void>;
  onAnswer: (from: any, data: any) => Promise<void>;
  onCandidate: (from: any, data: any) => Promise<void>;
  connect(): Promise<unknown>;
  send(type: any, payload?: {}): void;

  i: number;

  audioLocalStream: any;
  activateVoice: () => Promise<void>;
  disableVoice: () => Promise<void>;
  activateScreenshare: (audioOnly?: boolean) => Promise<void>;
  disableScreenshare: () => Promise<void>;
  localLoopbackStream: any;
  createOffer: (type: "audio" | "stream", userId?: string) => Promise<void>;
  enableLoopback(audioOnly: boolean): Promise<any>;
  disableLoopback(): void;
}

/**
 * @public
 *
 * Data specification for {@link WebRTCComponent}, see {@link ComponentManager.create} on how to create a component
 */
declare interface WebRTCComponentData extends Component3DData {
  type: "webrtc";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
}

/**
 * @public
 *
 * A component to display a spiralling wind in the game. The wind will affect all objects colliding with it by pushing them up.
 *
 * See {@link WindComponentData} for the data schema used to create a wind component
 */
export declare class WindComponent extends Component3D<WindComponentData> {
  _wind: WindMesh;
  _regenerate: boolean;

  private disposeWindMesh;
}

/**
 * @public
 *
 * Data specification for {@link WindComponent}, see {@link ComponentManager.create} on how to create a component
 */
export declare interface WindComponentData extends Component3DData {
  type: "wind";
  /**
   * if not provided, an auto id will be generated
   */
  id?: string;
  /**
   * name for the component. Defaults to ""
   */
  name?: string;
  /**
   * Position of the component in the space. Defaults to {x: 0, y: 0, z: 0}
   */
  position?: XYZ;
  /**
   * Height of the wind spiral. Defaults to 40
   */
  height?: number;
  /**
   * Height of the spiral lines. Defaults to 7
   */
  lineHeight?: number;
  /**
   * Radius of the spiral. Defaults to 7
   */
  radius?: number;
  /**
   * Width of the spiral lines. Defaults to 0.15
   */
  linewidth?: number;
  /**
   * Higher values result in a more detailed mesh on the vertical axis. Defaults to 10
   */
  divisions?: number;
}

declare class WindEditor extends Component3DEditor<WindComponent> {
  gui: {
    type: string;
    children: {
      position: {
        type: string;
        label: string;
        children: any;
      };
      appearance: {
        type: string;
        label: string;
        children: {
          height: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
          };
          lineHeight: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
          };
          radius: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
            step: number;
          };
          linewidth: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
            max: number;
            step: number;
          };
          divisions: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
          };
        };
      };
    };
  };
  getGUI(): {
    type: string;
    children: {
      position: {
        type: string;
        label: string;
        children: any;
      };
      appearance: {
        type: string;
        label: string;
        children: {
          height: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
          };
          lineHeight: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
          };
          radius: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
            step: number;
          };
          linewidth: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
            max: number;
            step: number;
          };
          divisions: {
            type: string;
            value: (string | WindComponentData_2)[];
            min: number;
          };
        };
      };
    };
  };
  selectionMesh: Mesh<BoxGeometry, MeshBasicMaterial, Object3DEventMap>;
  getSelectionMesh(): Mesh<BoxGeometry, MeshBasicMaterial, Object3DEventMap>;
  init(): void;
  updateSelectionMesh: () => void;
}

declare class WindMesh extends PipeLineMesh {
  constructor(opts: any);
}

/**
 * @public
 *
 * Current space hosting the game, cf {@link Space} for more info
 */
export declare let World: Space;

export declare function xfetch(
  url: string,
  opts?: RequestInit
): Promise<Response>;

/**
 * @public
 *
 * This is a shared interface used to represent various 2D coordinates in component data
 */
declare interface XY {
  x: number;
  y: number;
}

declare interface XY_2 {
  x: number;
  y: number;
}

/**
 * @public
 *
 * This is a shared interface used to represent various 3D coordinates in component data (position, rotation, scale ...)
 */
export declare interface XYZ {
  x: number;
  y: number;
  z: number;
}

/**
 * @public
 *
 * This is a shared interface used to represent various 3D coordinates in component data (position, rotation, scale ...)
 */
declare interface XYZ_2 {
  x: number;
  y: number;
  z: number;
}

declare interface XYZ_3 {
  x: number;
  y: number;
  z: number;
}

export {};
