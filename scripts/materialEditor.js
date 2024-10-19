class MaterialEditor {
    constructor(scene) {
        this.scene = scene;
    }

    updateMaterial(object, properties) {
        if (object.material) {
            Object.assign(object.material, properties);
            object.material.needsUpdate = true;
        }
    }

    createBasicMaterial(color) {
        return new THREE.MeshBasicMaterial({ color: color });
    }

    createPhongMaterial(color, specular, shininess) {
        return new THREE.MeshPhongMaterial({
            color: color,
            specular: specular,
            shininess: shininess
        });
    }
}

export default MaterialEditor;
