import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

class ObjectIO {
    constructor(scene) {
        this.scene = scene;
        this.loader = new GLTFLoader();
        this.exporter = new GLTFExporter();
    }

    importObject(url) {
        return new Promise((resolve, reject) => {
            this.loader.load(url, (gltf) => {
                this.scene.add(gltf.scene);
                resolve(gltf.scene);
            }, undefined, reject);
        });
    }

    exportScene() {
        return new Promise((resolve, reject) => {
            this.exporter.parse(this.scene, (gltf) => {
                const output = JSON.stringify(gltf);
                const blob = new Blob([output], { type: 'application/octet-stream' });
                const url = URL.createObjectURL(blob);
                resolve(url);
            }, reject);
        });
    }
}

export default ObjectIO;
