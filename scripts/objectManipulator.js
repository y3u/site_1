import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

class ObjectManipulator {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.transformControl = new TransformControls(camera, renderer.domElement);
        this.scene.add(this.transformControl);

        this.transformControl.addEventListener('change', () => {
            renderer.render(scene, camera);
        });

        this.transformControl.addEventListener('dragging-changed', (event) => {
            controls.enabled = !event.value;
        });
    }

    attachObject(object) {
        this.transformControl.attach(object);
    }

    setMode(mode) {
        // mode can be 'translate', 'rotate', or 'scale'
        this.transformControl.setMode(mode);
    }
}

export default ObjectManipulator;
