namespace JSX {
  type EventsHandle =
    ((sprite, animation) => any) |
    ((sprite, animation) => any)[]

  interface InernalAttributes {
    children?: any[];
    key?: any;
    ref?: any;
    hidden?: boolean;
  }

  interface PhaserInputEventsAttributes {
    onAddedToGroup?: (gameObject: any, group: Phaser.Group) => any;
    onAnimationComplete?: (gameObject: any, animation: Phaser.Animation) => any;
    onAnimationLoop?: (gameObject: any, animation: Phaser.Animation) => any;
    onAnimationStart?: (gameObject: any, animation: Phaser.Animation) => any;
    onDestroy?: (gameObject: any) => any;
    onDragStart?: (gameObject: any, point: Phaser.Point, x: number, y: number) => any;
    onDragStop?: (gameObject: any, point: Phaser.Point) => any;
    onDragUpdate?: (gameObject: any, point: Phaser.Point, x: number, y: number, snapped: Phaser.Point, fromStart: boolean) => any;
    onEnterBounds?: (gameObject: any) => any;
    onInputDown?: (gameObject: any, point: Phaser.Point) => any;
    onInputOut?: (gameObject: any, point: Phaser.Point) => any;
    onInputOver?: (gameObject: any, point: Phaser.Point) => any;
    onInputUp?: (gameObject: any, point: Phaser.Point, isOver: boolean) => any;
    onKilled?: (gameObject: any) => any;
    onOutOfBounds?: (gameObject: any) => any;
    onRemovedFromGroup?: (gameObject: any, group: Phaser.Group) => any;
    onRevived?: (gameObject: any) => any;
  }

  interface PhaserGameAttributes extends InernalAttributes {
    width?: number;
    height?: number;
    renderer?: number;
    transparent?: boolean;
    antialias?: boolean;
    physicsConfig?: any;
    component?: JSX.Element | React.component;
    preload?: (state: Phaser.Game) => any;
    update?: (state: Phaser.Game) => any;
    create?: (state: Phaser.Game) => any;
    loadUpdate?: (state: Phaser.Game) => any;
    loadRender?: (state: Phaser.Game) => any;
    preRender?: (state: Phaser.Game) => any;
    render?: (state: Phaser.Game) => any;
    paused?: (state: Phaser.Game) => any;
    pauseUpdate?: (state: Phaser.Game) => any;
    resumed?: (state: Phaser.Game) => any;
    shutdown?: (state: Phaser.Game) => any;
  }

  interface PhaserStateAttributes extends InernalAttributes {
    /** name 不可修改 */
    name: string;
    component?: JSX.Element | React.component;
    preload?: (state: Phaser.State) => any;
    update?: (state: Phaser.State) => any;
    create?: (state: Phaser.State) => any;
    loadUpdate?: (state: Phaser.State) => any;
    loadRender?: (state: Phaser.State) => any;
    preRender?: (state: Phaser.State) => any;
    render?: (state: Phaser.State) => any;
    paused?: (state: Phaser.State) => any;
    pauseUpdate?: (state: Phaser.State) => any;
    resumed?: (state: Phaser.State) => any;
    shutdown?: (state: Phaser.State) => any;
    default?: boolean;
  }

  interface PIXIDisplayObjectAttributes {
    alpha?: number;
    cacheAsBitMap?: boolean;
    pivot?: Phaser.Point;
    renderable?: boolean;
    rotation?: number;
    scale?: Phaser.Point;
    visible?: boolean;
    x: number;
    y: number;
  }

  interface PIXIDisplayObjectContainerAttributes extends PIXIDisplayObjectAttributes {
    anchor?: Phaser.Point;
    blendMode?: number;
    exists?: boolean;
    tint?: number;
    ignoreChildInput?: boolean;
  }

  interface PhaserComponentCoreAttributes {
    data?: any;
    debug?: boolean;
    exists?: boolean;
    name?: string;
    pendingDestroy?: boolean;
    world?: Phaser.Point;
  }

  interface PhaserComponentAnglePAttributes {
    angle?: number;
  }

  interface PhaserComponentAutoCullAttributes {
    autoCull?: boolean;
  }

  interface PhaserComponentBoundsAttributes {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  interface PhaserComponentFixedToCameraAttributes {
    cameraOffset?: Phaser.Point;
    fixedToCamera?: boolean;
  }

  interface PhaserComponentInputEnabledAttributes {
    inputEnabled?: boolean;
  }

  interface PhaserComponentLifeSpanAttributes {
    alive?: boolean;
    lifespan?: number;
  }

  interface PhaserComponentLoadTextureAttributes {
    frame?: number;
    frameName?: string;
  }

  interface PhaserComponentScaleMinMaxAttributes {
    scaleMax?: Phaser.Point;
    scaleMin?: Phaser.Point;
    transformCallback?:() => any;
  }

  interface PhaserComponentSmoothedAttributes {
    smoothed?: boolean;
  }

  interface PhaserImageAttributes extends
    PhaserComponentCoreAttributes,
    PhaserComponentAngleAttributes,
    PhaserComponentAutoCullAttributes,
    PhaserComponentBoundsAttributes,
    PhaserComponentFixedToCameraAttributes,
    PhaserComponentInputEnabledAttributes,
    PhaserComponentLifeSpanAttributes,
    PhaserComponentLoadTextureAttributes,
    PhaserComponentScaleMinMaxAttributes,
    PhaserComponentSmoothedAttributes,
    PIXIDisplayObjectContainerAttributes,
    DisplayObjectAsChild,
    InernalAttributes {
      assetKey: ReactPhaser.AssetKey;
    }

  interface PhaserSpriteAttributes extends
    PhaserComponentCoreAttributes,
    PhaserComponentAngleAttributes,
    PhaserComponentAutoCullAttributes,
    PhaserComponentBoundsAttributes,
    PhaserComponentFixedToCameraAttributes,
    PhaserComponentInputEnabledAttributes,
    PhaserComponentLifeSpanAttributes,
    PhaserComponentLoadTextureAttributes,
    PhaserComponentScaleMinMaxAttributes,
    PhaserComponentSmoothedAttributes,
    PIXIDisplayObjectContainerAttributes,
    DisplayObjectAsChild,
    InernalAttributes {
      assetKey: ReactPhaser.AssetKey;
    }

  interface PhaserGroupAttributes extends
    PIXIDisplayObjectContainerAttributes,
    PhaserComponentAngleAttributes,
    PhaserComponentAutoCullAttributes,
    PhaserComponentBoundsAttributes,
    PhaserComponentFixedToCameraAttributes,
    PhaserComponentCoreAttributes,
    PhaserComponentLoadTextureAttributes,
    PhaserComponentInputEnabledAttributes,
    PhaserComponentLifeSpanAttributes,
    PhaserComponentInWorld,
    PhaserComponentScaleMinMaxAttributes,
    PhaserComponentSmoothedAttributes,
    DisplayObjectAsChild,
    InernalAttributes {
      health?: number;
      maxHealth?: number;
      x?: number;
      y?: number;
    }

  interface DisplayObjectAsChild {
    /** If true the child will not dispatch the onAddedToGroup event. */
    slient?: boolean;
    /** The index within the group to insert the child to. Where 0 is the bottom of the Group. */
    index?: number;
  }

  interface PhaserAnimationAttributes extends 
    InernalAttributes,
    DisplayObjectAsChild {
      /** 以下属性用于直接给实例相应的属性赋值 */
      // delay?: number;
      enableUpdate?: boolean;
      frame?: number;
      killOnComplete?: boolean;
      loop?: boolean;
      name?: string;
      state?: 'paused' | 'play' | 'done';
      reversed?: boolean;

      /** 以下属性用于构造函数，或其他特殊情况 */
      frameRate?: number;
      onComplete?: EventsHandle;
      onCompleteOnce?: EventsHandle;
      onLoop?: EventsHandle;
      onLoopOnce?: EventsHandle;
      onStart?: EventsHandle;
      onStartOnce?: EventsHandle;
      onUpdate?: EventsHandle;
      onUpdateOnce?: EventsHandle;
      /** 
       * An array of numbers/strings that correspond to the frames to add to
       * this animation and in which order. 
       * e.g. [1, 2, 3] or ['run0', 'run1', run2]). 
       * If null then all frames will be used. */
      frames?: number[] | string[];
      /** Are the given frames using numeric indexes (default) or strings? */
      useNumericIndex?: boolean;
  }

  interface PhaserTextAtrributes extends PhaserSpriteAttributes, InernalAttributes {
    align?: string;
    autoRound?: boolean;
    boundsAlignH?: 'left' | 'center' | 'right';
    boundsAlignV?: 'top' | 'middle' | 'bottom';
    characterLimitSize?: number;
    characterLimitSuffix?: string;
    fill?: string;
    font?: string;
    fontSize?: number | string;
    fontStyle?: string;
    fontVariant?: 'normal' | 'small-caps';
    fontWeight?: 'normal' | 'bold' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    height?: number;
    lineSpacing?: number;
    padding?: Phaser.Point;
    resolution?: number;
    shadowBlur?: number;
    shadowColor?: string;
    shadowFill?: boolean;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowStroke?: boolean;
    splitRegExp?: RegExp;
    stroke?: string;
    strokeThickness?: number;
    tabs?: number | number[];
    text?: string;
    wordWrap?: boolean;
    wordWrapWidth?: number;
    assetKey?: undefined;
    style?: {
      font?: string;
      fontStyle?: string;
      fontVariant?: string;
      fontWeight?: string;
      fontSize?: number;
      backgroundColor?: string;
      fill?: string;
      align?: string;
      boundsAlignH?: string;
      boundsAlignV?: string;
      stroke?: string;
      strokeThickness?: number;
      wordWrap?: boolean;
      wordWrapWidth?: number;
      maxLines?: number;
      tabs?: number;
    }
  }

  interface PhaserWorldAttributes extends DisplayObjectAsChild, InernalAttributes {
    color?: string;
    fontStyle?: string;
    fontWeight?: string;
    strokeColor?: string;
    children?: any;
  }

  interface IntrinsicElements {
    game: PhaserGameAttributes;
    image: PhaserImageAttributes;
    sprite: PhaserSpriteAttributes;
    group: PhaserGroupAttributes;
    animation: PhaserAnimationAttributes;
    word: PhaserWorldAttributes;
    text: PhaserTextAtrributes;
    state: PhaserStateAttributes;
  }
}

namespace ReactPhaser {
  type AssetItem = {
    path: string;
    file: string;
    key: string;
  }

  interface AssetsConf {
    image: Array<AssetItem>;
  }

  type AssetKey =
    string |
    Phaser.RenderTexture |
    Phaser.BitmapData |
    PIXI.Texture

  interface GameProps {
    width: number | string;
    height: number | string;
    assets?: AssetsConf;
    renderer?: number;
    parent?: string | HTMLElement;
    state?: any;
    transparent?: boolean;
    antialias?: boolean;
    physicsConfig?: any;
  }

  // declare class Element<T, P> {
  //   instance: T;
  //   slient: boolean;
  //   index: number;
  //   props: P;

  //   appendChild(child: any): any;
  //   commitUpdate(updatePayload: any[], oldProps: P, newProps: P): any;
  //   insertBefore(child: Element<any, any>, beforeChild: Element<any, any>): any;
  //   prepareUpdate(oldProps: P, newProps: P): any;
  //   protected propsToInstance(props: P, propsConf: any): void;
  //   protected isNormalPropKey(key: string): boolean;
  //   protected diffProps(oldProps: p, newProps: P): any;
  //   protected commitNormalProps(updatePayload: any[], oldProps: P, newProps: P): string[];
  // }

  // declare class GroupElement extends Element<Phaser.Group, JSX.PhaserGroupAttributes> {}

  // declare class GameElement extends Element<Phaser.Game, JSX.PhaserGameAttributes> {}

  // declare class StateElement extends Element<Phaser.State, JSX.PhaserStateAttributes> {
  //   setGame(game: Phaser.Game): any;
  // }
}

declare var __DEV__: boolean
