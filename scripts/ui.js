class UI {
    constructor() {
        this.initMenus();
        this.initToolbar();
    }

    initMenus() {
        const menus = ['file', 'edit', 'view', 'render'];
        menus.forEach(menu => {
            const element = document.getElementById(`${menu}-menu`);
            element.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(`${menu} menu clicked`);
                // ここにメニュー項目の表示ロジックを追加
            });
        });
    }

    initToolbar() {
        const toolbar = document.getElementById('toolbar');
        const tools = ['select', 'move', 'rotate', 'scale'];
        tools.forEach(tool => {
            const button = document.createElement('button');
            button.textContent = tool;
            button.addEventListener('click', () => {
                console.log(`${tool} tool selected`);
                // ここにツール選択ロジックを追加
            });
            toolbar.appendChild(button);
        });
    }
}
