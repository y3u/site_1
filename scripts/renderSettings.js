class RenderSettings {
    constructor(renderer, scene, camera) {
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
    }

    setResolution(width, height) {
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    setQuality(pixelRatio) {
        this.renderer.setPixelRatio(pixelRatio);
    }

    setShadows(enabled) {
        this.renderer.shadowMap.enabled = enabled;
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
}

export default RenderSettings;
