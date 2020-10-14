let box = document.getElementById('box');
        let allBorders = document.getElementById('all-borders').querySelectorAll('input');
        let borders = document.getElementById('borders').querySelectorAll('input');

        let cssCode = [
            {
                code: 'border-radius',
                value: 0,
            },
            {
                code: 'border-top-left-radius',
                value: 0
            },
            {
                code: 'border-bottom-left-radius',
                value: 0
            },
            {
                code: 'border-top-right-radius',
                value: 0
            },
            {
                code: 'border-bottom-right-radius',
                value: 0
            }
        ]

        allBorders[0].addEventListener('input', () => {
            let value = `${allBorders[0].value}px`;
            box.style.borderRadius = value;
            cssCode[0].value = value;
            cssCode[1].value = 0;
            cssCode[2].value = 0;
            cssCode[3].value = 0;
            cssCode[4].value = 0;
            renderCssCode()
        });

        borders[0].addEventListener('input', () => {
            let value = `${borders[0].value}px`;
            box.style.borderTopLeftRadius = value;
            cssCode[1].value = value;
            renderCssCode()
        });

        borders[1].addEventListener('input', () => {
            let value = `${borders[1].value}px`;
            box.style.borderBottomLeftRadius = value;
            cssCode[2].value = value;
            renderCssCode()
        });

        borders[2].addEventListener('input', () => {
            let value = `${borders[2].value}px`;
            box.style.borderTopRightRadius = value;
            cssCode[3].value = value;
            renderCssCode()
        });

        borders[3].addEventListener('input', () => {
            let value = `${borders[3].value}px`;
            box.style.borderBottomRightRadius = value;
            cssCode[4].value = value;
            renderCssCode()
        });

        function renderCssCode() {
            let valid = false;
            for (let i = 1; i < cssCode.length; i++) {
                if (cssCode[i].value == 0)
                    valid = true
                }
            if (!valid) {
                cssCode[0].value = 0;
            }

            document.getElementById('code').innerHTML = cssCode.map(csscode => {
                if(csscode.value != 0)
                    return `<div>${csscode.code}: ${csscode.value};</div>`
            }).join('');
        }