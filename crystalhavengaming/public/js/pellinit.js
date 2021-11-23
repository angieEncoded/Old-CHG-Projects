const desc = document.getElementById("html-output");
const editor = window.pell.init({
    element: document.getElementById('editor'),
    onChange: html => {
        document.getElementById('html-output').innerHTML = html
        // console.log(html)
    },
    styleWithCSS: false,
    actions: [
        'bold',
        'underline',
        'italic',
        'strikethrough',
        // 'paragraph',
        // 'heading1',
        // 'heading2',
        // 'code',
        'ulist',
        'olist',
    ],
    classes: {
        actionbar: 'pell-actionbar-chg',
        button: 'pell-button-chg',
        content: 'pell-content-chg',
        selected: 'pell-button-selected-chg'
    }
})
editor.content.innerHTML = desc.textContent;
// editor.content<HTMLElement>
// To change the editor's content:
//editor.content.innerHTML = ''