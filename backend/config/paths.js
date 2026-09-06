import path from "path";
import { fileURLToPath } from "url";


const __filename =
    fileURLToPath(import.meta.url);

const __dirname =
    path.dirname(__filename);


export const backendRoot =
    path.resolve(__dirname, "..");


export const profileUploadsDir =
    path.join(
        backendRoot,
        "uploads",
        "profiles"
    );

export const projectRoot =
    path.resolve(
        backendRoot,
        ".."
    );