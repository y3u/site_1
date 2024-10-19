document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.getElementById('viewport');
    const viewer3D = new Viewer3D(viewport);
    const ui = new UI();

    // ここでviewer3Dとuiのインタラクションをセットアップできます
    console.log('Blender Web Application initialized');
});
