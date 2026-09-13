import * as THREE from "three";

import {
    GLTFLoader
} from "three/addons/loaders/GLTFLoader.js";


const loader =
    new GLTFLoader();


export async function loadTeamModel(team) {

    return new Promise(
        (resolve, reject) => {

            loader.load(

                team.model,


                (gltf) => {

                    const model =
                        gltf.scene;


                    /*
                        ESCALA

                        Toma el valor definido
                        en teamTargets.js.

                        Si por alguna razón
                        no existe, usa 0.5.
                    */

                    const scale =
                        team.scale ?? 0.5;


                    model.scale.set(
                        scale,
                        scale,
                        scale
                    );


                    /*
                        POSICIÓN

                        Toma los valores definidos
                        en teamTargets.js.

                        Si alguno no existe,
                        utiliza 0.
                    */

                    model.position.set(

                        team.position?.x ?? 0,

                        team.position?.y ?? 0,

                        team.position?.z ?? 0

                    );


                    /*
                        ANIMACIONES
                    */

                    let mixer = null;


                    if (
                        gltf.animations &&
                        gltf.animations.length > 0
                    ) {

                        mixer =
                            new THREE.AnimationMixer(
                                model
                            );


                        const action =
                            mixer.clipAction(
                                gltf.animations[0]
                            );


                        action.play();

                    }


                    /*
                        Devolvemos todo lo que
                        necesitará arScanner.js
                    */

                    resolve({

                        model,

                        mixer,

                        animations:
                            gltf.animations

                    });

                },


                undefined,


                (error) => {

                    console.error(
                        `Error cargando modelo de ${team.name}:`,
                        error
                    );


                    reject(error);

                }

            );

        }
    );

}