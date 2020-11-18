export default function (num = 6, letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890') {
    let tpl = '';
    let captcha = [...Array(num)].map(() => letters[Math.floor(Math.random() * letters.length)]);
    captcha.forEach(item => {
        tpl += `<span class="flex1 hcenter">${item}</span>`
    });

    return {
        captchaCode: captcha.join(''),
        captchaTpl: tpl
    }
};