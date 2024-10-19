import Viewer3D from './3dviewer.js';
import UI from './ui.js';
import ObjectManipulator from './objectManipulator.js';
import MaterialEditor from './materialEditor.js';
import AnimationTimeline from './animationTimeline.js';
import ObjectIO from './objectIO.js';
import TexturePainter from './texturePainter.js';
import RenderSettings from './renderSettings.js';

class BlenderWebApp {
    constructor() {
        this.viewport = document.getElementById('viewport');
        this.viewer3D = new Viewer3D(this.viewport);
        this.ui = new UI();

        this.objectManipulator = new ObjectManipulator(this.viewer3D.scene, this.viewer3D.camera, this.viewer3D.renderer);
        this.materialEditor = new MaterialEditor(this.viewer3D.scene);
        this.animationTimeline = new AnimationTimeline();
        this.objectIO = new ObjectIO(this.viewer3D.scene);
        this.texturePainter = new TexturePainter(this.viewer3D.renderer);
        this.renderSettings = new RenderSettings(this.viewer3D.renderer, this.viewer3D.scene, this.viewer3D.
