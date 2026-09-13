import * as THREE from "three";

import {
    MindARThree
} from "mindar-image-three";

import {
    teamTargets
} from "./teamTargets.js";


let mindarThree = null;

let scannerContainer = null;

let containerObserver = null;

let testObjects = [];


/*
    Vigila si la pantalla del escáner
    desaparece del DOM.
*/
function observeScannerContainer() {

    if (containerObserver) {
        containerObserver.disconnect();
    }


    containerObserver =
        new MutationObserver(() => {

            if (
                scannerContainer &&
                !scannerContainer.isConnected
            ) {

                stopScanner();

            }

        });


    containerObserver.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );

}


/*
    Inicia cámara + MindAR
*/
export async function startScanner(
    container,
    options = {}
) {

    const {
        onTargetFound,
        onTargetLost
    } = options;

    if (!container) {

        throw new Error(
            "No se encontró el contenedor del escáner."
        );

    }


    /*
        Si por alguna razón ya había
        un escáner activo, lo cerramos.
    */
    stopScanner();


    scannerContainer = container;


    const instance =
        new MindARThree({

            container: container,

            imageTargetSrc:
                "/assets/ar/teams.mind",

            maxTrack: 1,

            uiLoading: "no",

            uiScanning: "no",

            uiError: "no"

        });

        teamTargets.forEach((team) => {

            const anchor =
                instance.addAnchor(
                    team.targetIndex
                );


            /*
                Objeto 3D temporal.

                Servirá únicamente para comprobar
                que el tracking funciona.
            */

            const geometry =
                new THREE.BoxGeometry(
                    0.4,
                    0.4,
                    0.4
                );


            const material =
                new THREE.MeshNormalMaterial();


            const cube =
                new THREE.Mesh(
                    geometry,
                    material
                );


            /*
                Lo desplazamos hacia afuera
                del plano del logo.
            */

            cube.position.z = 0.2;


            /*
                Ligamos el cubo al target.
            */

            anchor.group.add(cube);


            /*
                Guardamos referencia para animarlo
                y posteriormente limpiarlo.
            */

            testObjects.push({
                cube,
                geometry,
                material
            });


            anchor.onTargetFound = () => {

                console.log(
                    "Target encontrado:",
                    team.name
                );


                if (onTargetFound) {

                    onTargetFound(team);

                }

            };


            anchor.onTargetLost = () => {

                console.log(
                    "Target perdido:",
                    team.name
                );


                if (onTargetLost) {

                    onTargetLost(team);

                }

            };

        });


    mindarThree = instance;


    /*
        Empezamos a vigilar el contenedor
        antes de encender la cámara.
    */
    observeScannerContainer();


    try {

        /*
            MindAR solicita acceso
            a la cámara aquí.
        */
        await instance.start();


        /*
            Puede ocurrir que el usuario
            haya cambiado de pantalla
            mientras la cámara arrancaba.
        */
        if (
            mindarThree !== instance ||
            !container.isConnected
        ) {

            instance.stop();

            return;

        }


        const {
            renderer,
            scene,
            camera
        } = instance;


        /*
            Ciclo de render de Three.js.
        */
        renderer.setAnimationLoop(() => {

            testObjects.forEach((object) => {

                object.cube.rotation.x += 0.01;
                object.cube.rotation.y += 0.015;

            });


            renderer.render(
                scene,
                camera
            );

        });


        console.log(
            "Escáner AR iniciado correctamente."
        );

    }

    catch (error) {

        console.error(
            "Error al iniciar el escáner:",
            error
        );


        if (mindarThree === instance) {
            stopScanner();
        }


        throw error;

    }

}


/*
    Detiene cámara + renderizado AR
*/
export function stopScanner() {

    if (containerObserver) {

        containerObserver.disconnect();

        containerObserver = null;

    }


    const instance = mindarThree;


    mindarThree = null;

    scannerContainer = null;


    if (!instance) {
        return;
    }


    /*
        Detenemos primero el render
        de Three.js.
    */
    if (instance.renderer) {

        instance.renderer.setAnimationLoop(
            null
        );

    }


    /*
        Detenemos MindAR y,
        por consecuencia, la cámara.
    */
    try {

        instance.stop();

    }

    catch (error) {

        console.warn(
            "El escáner ya estaba detenido.",
            error
        );

    }

    /*
    Liberamos también los recursos
    gráficos de Three.js.
    */

    if (instance.renderer) {

        instance.renderer.dispose();

        instance.renderer.domElement.remove();

    }


    if (instance.cssRenderer) {

        instance.cssRenderer.domElement.remove();

    }

    testObjects.forEach((object) => {

        object.geometry.dispose();

        object.material.dispose();

    });


    testObjects = [];

    console.log(
        "Escáner AR detenido."
    );

}