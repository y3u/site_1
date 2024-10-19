document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // フォームデータの取得
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData.entries());

        // ここでフォームデータを処理（例：APIに送信）
        console.log('フォームデータ:', formObject);

        // フォーム送信後の処理（例：成功メッセージの表示）
        alert('お問い合わせありがとうございます。まもなくご連絡いたします。');
        contactForm.reset();
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
