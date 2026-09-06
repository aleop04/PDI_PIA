/**
 * Runtime JS del modelo POO de /ts/scannable.ts
 * Poster, QR y Objeto heredan de ScannableElement y se tratan de forma
 * uniforme: el ScannerService jamás pregunta "¿qué tipo eres?".
 */

export class CameraProperties {
  constructor({ resolution = "720p", facing = "back", hasFlash = true, focusMode = "auto" } = {}) {
    this.resolution = resolution;
    this.facing = facing;
    this.hasFlash = hasFlash;
    this.focusMode = focusMode;
  }
}

export class ScannableElement {
  constructor(meta) {
    if (new.target === ScannableElement) {
      throw new Error("ScannableElement es abstracta, usa Poster/QR/ObjectMarker");
    }
    this.id = meta.id;
    this.type = meta.type;
    this.name = meta.name;
    this.rarity = meta.rarity; // 'novato' | 'titular' | 'estrella' | 'leyenda'
    this.modelUrl = meta.modelUrl;
    this.linkedQuizId = meta.linkedQuizId;
    this.description = meta.description;
  }
  match(_input) {
    throw new Error("match() debe implementarse en la subclase");
  }
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
  constructor(meta) {
    super({ ...meta, type: "poster" });
    this.posterImageUrl = meta.posterImageUrl;
  }
  match(_imageDescriptor) {
    return true; // demo: en producción, compara contra el image-target
  }
}

export class QRMarker extends ScannableElement {
  constructor(meta) {
    super({ ...meta, type: "qr" });
    this.qrPayload = meta.qrPayload;
  }
  match(decodedText) {
    return decodedText === this.qrPayload;
  }
}

export class ObjectMarker extends ScannableElement {
  constructor(meta) {
    super({ ...meta, type: "object" });
  }
  match(objectLabel) {
    return objectLabel === this.id;
  }
}

export class ScannerService {
  constructor(camera = new CameraProperties()) {
    this.camera = camera;
    this.registry = [];
  }
  register(element) {
    this.registry.push(element);
  }
  detect(input) {
    return this.registry.find((el) => el.match(input)) ?? null;
  }
  /** Demo: elige un elemento al azar del registro, como si la cámara lo hubiera reconocido. */
  detectRandom() {
    if (this.registry.length === 0) return null;
    const idx = Math.floor(Math.random() * this.registry.length);
    return this.registry[idx];
  }
  getCameraProperties() {
    return this.camera;
  }
}

// -----------------------------------------------------------------
// Catálogo demo — mezcla póster + QR + objeto, tratados uniformemente
// -----------------------------------------------------------------
export function buildDemoScanner() {
  const scanner = new ScannerService(new CameraProperties({ resolution: "1080p" }));

  scanner.register(
    new PosterMarker({
      id: "poster-bato",
      name: "Bato el Cácher",
      rarity: "leyenda",
      posterImageUrl: "/assets/posters/bato.jpg",
      linkedQuizId: "quiz-historia",
      description: "Póster oficial del evento. Activa la mascota en AR.",
    })
  );
  scanner.register(
    new QRMarker({
      id: "qr-estadio",
      name: "Estadio Central 3D",
      rarity: "estrella",
      qrPayload: "BATAR-ESTADIO-01",
      linkedQuizId: "quiz-reglas",
      description: "Código en el boleto: despliega el estadio en miniatura.",
    })
  );
  scanner.register(
    new ObjectMarker({
      id: "obj-trofeo",
      name: "Trofeo de Campeonato",
      rarity: "titular",
      linkedQuizId: "quiz-historia",
      description: "Reconocido como objeto físico en la vitrina del evento.",
    })
  );
  scanner.register(
    new ObjectMarker({
      id: "obj-guante",
      name: "Guante Clásico",
      rarity: "novato",
      description: "Objeto de práctica para el escaneo, sin trivia asociada.",
    })
  );

  return scanner;
}
