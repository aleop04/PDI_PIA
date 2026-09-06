/**
 * Modelo POO de escaneo — BAT AR
 * ---------------------------------------------------------------
 * Idea central: un póster, un QR y un objeto físico son, para el resto
 * de la app, la MISMA cosa: un "ScannableElement". No importa cómo se
 * reconoce (imagen, QR, objeto), todos entregan la misma forma de datos
 * al ScannerService y disparan el mismo flujo de UI (visor AR + trivia).
 *
 * Este archivo es el contrato tipado. La versión que corre en el
 * navegador hoy (sin bundler) es /js/services/scanner.js, escrita en
 * JS plano pero siguiendo exactamente este mismo diseño de clases.
 * Cuando el proyecto incorpore un bundler (Vite/tsc), este archivo
 * reemplaza directamente a scanner.js.
 */

// -----------------------------------------------------------------
// Propiedades de cámara — desacopladas del tipo de marcador
// -----------------------------------------------------------------
export interface ICameraProperties {
  resolution: "480p" | "720p" | "1080p";
  facing: "back" | "front";
  hasFlash: boolean;
  focusMode: "auto" | "fixed";
}

export class CameraProperties implements ICameraProperties {
  resolution: "480p" | "720p" | "1080p";
  facing: "back" | "front";
  hasFlash: boolean;
  focusMode: "auto" | "fixed";

  constructor(props: Partial<ICameraProperties> = {}) {
    this.resolution = props.resolution ?? "720p";
    this.facing = props.facing ?? "back";
    this.hasFlash = props.hasFlash ?? true;
    this.focusMode = props.focusMode ?? "auto";
  }
}

// -----------------------------------------------------------------
// Tipos y rareza compartidos por TODO lo escaneable (para la
// galería tipo TCG: Novato / Titular / Estrella / Leyenda)
// -----------------------------------------------------------------
export type ScannableType = "poster" | "qr" | "object";
export type Rarity = "novato" | "titular" | "estrella" | "leyenda";

export interface ScannableMeta {
  id: string;
  type: ScannableType;
  name: string;
  rarity: Rarity;
  modelUrl?: string; // .glb del modelo 3D
  posterImageUrl?: string; // imagen de referencia para reconocimiento
  linkedQuizId?: string; // trivia que se dispara al reconocerlo
  description?: string;
}

/**
 * Clase base abstracta. Poster, QR y Objeto heredan de aquí, así que
 * el ScannerService nunca necesita preguntar "¿qué tipo eres?" para
 * saber cómo tratarlos — todos exponen match() y toCollectionCard().
 */
export abstract class ScannableElement {
  readonly id: string;
  readonly type: ScannableType;
  readonly name: string;
  readonly rarity: Rarity;
  readonly modelUrl?: string;
  readonly linkedQuizId?: string;
  readonly description?: string;

  protected constructor(meta: ScannableMeta) {
    this.id = meta.id;
    this.type = meta.type;
    this.name = meta.name;
    this.rarity = meta.rarity;
    this.modelUrl = meta.modelUrl;
    this.linkedQuizId = meta.linkedQuizId;
    this.description = meta.description;
  }

  /** Cada subclase define cómo decide que "esto es lo que estoy viendo". */
  abstract match(input: unknown): boolean;

  /** Forma uniforme para pintar la carta en la galería TCG. */
  toCollectionCard() {
    return {
      id: this.id,
      name: this.name,
      rarity: this.rarity,
      type: this.type,
      linkedQuizId: this.linkedQuizId,
    };
  }
}

export class PosterMarker extends ScannableElement {
  readonly posterImageUrl: string;
  constructor(meta: ScannableMeta & { posterImageUrl: string }) {
    super({ ...meta, type: "poster" });
    this.posterImageUrl = meta.posterImageUrl;
  }
  match(imageDescriptor: unknown): boolean {
    // En producción: comparar contra el image-target de MindAR/8th Wall.
    return true;
  }
}

export class QRMarker extends ScannableElement {
  readonly qrPayload: string;
  constructor(meta: ScannableMeta & { qrPayload: string }) {
    super({ ...meta, type: "qr" });
    this.qrPayload = meta.qrPayload;
  }
  match(decodedText: unknown): boolean {
    return decodedText === this.qrPayload;
  }
}

export class ObjectMarker extends ScannableElement {
  constructor(meta: ScannableMeta) {
    super({ ...meta, type: "object" });
  }
  match(objectLabel: unknown): boolean {
    return objectLabel === this.id;
  }
}

// -----------------------------------------------------------------
// Servicio de escaneo — punto único de entrada, sin importar el tipo
// -----------------------------------------------------------------
export class ScannerService {
  private camera: CameraProperties;
  private registry: ScannableElement[] = [];

  constructor(camera: CameraProperties = new CameraProperties()) {
    this.camera = camera;
  }

  register(element: ScannableElement) {
    this.registry.push(element);
  }

  /** Recorre el registro sin importar la subclase concreta. */
  detect(input: unknown): ScannableElement | null {
    return this.registry.find((el) => el.match(input)) ?? null;
  }

  getCameraProperties(): ICameraProperties {
    return this.camera;
  }
}
