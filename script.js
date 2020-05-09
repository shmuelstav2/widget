(function () {
    (() => {
        class txtWidget {
            constructor() {

            }
            headerTitle = 'Result by Microsoft';
            price = 'Now On Sale!';
            powerdByImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACRCAYAAADAb1QLAAAKj0lEQVR4Xu2aaYjV1xmHf3cWZ9w17ivuEW2pIbiRD4oo8YtbFcWtWqNEsOIWjaKoicF9q1ExbuAaUi2i9oPiGkEFjVBQ2iopfhGHoqOOM64z47+8x1yxwXSSw/UMp30uXGa88z/nPT7v+9z3nP+9KfGAAASiIZCKZqUsFAIQEMJSBBCIiADCRpQslgoBhKUGIBARAYSNKFksFQIISw1AICICCBtRslgqBBCWGoBARAQQNqJksVQIICw1AIGICCBsRMliqRBAWGoAAhERQNiIksVSIYCw1AAEIiKAsBEli6VCAGGpAQhERABhI0oWS4UAwlIDEIiIAMJGlCyWCgGEpQYgEBEBhI0oWSwVAghLDUAgIgIIG1GyWCoEEJYagEBEBBA2omSxVAggLDUAgYgIIGxEyWKpEEBYagACERFA2IiSxVIhgLDUAAQiIoCwESWLpUIAYakBCEREAGEjShZLhQDCUgMQiIgAwkaULJYKAYSlBiAQEQGEjShZLBUCCEsNQCAiAggbUbJYKgQQlhqAQEQEEDaiZLFUCCAsNQCBiAggbETJYqkQQFhqAAIREUDYiJLFUiGAsNQABCIigLARJYulQgBhqQEIREQAYSNKFkuFAMJSAxCIiADCRpQslgoBhKUGIBARAYSNKFksFQIISw1AICICCBtRslgqBBCWGoBARAQQNqJksVQIICw1AIGICCBsRMliqRBAWGoAAhERQNiIksVSIYCw1AAEIiKAsBEli6VCAGGpAQhERABhI0oWS4UAwlZCDSRJkmQ8rM2YKpeSbCVKpBfPVF5epOyculJWrpSkpNTLsCllJu2pVCozE2Ucxv/uhACvhNy+NWFlwkqlySMlT/6q0sI/Ka/hZKXy2yuVylEqeSHZT4SthKxnJiTCZobjL5rlbQj7sme/UFL+QM/+tVPJwz8r5+kNlVfrpuSdUcp/57dKZVf9ob9mJu102F+U9oxcnJnMZWQp/z+TpIV98eKFioqKVL16dVWpUqVCALaTvn//vqpWreqe//H4QVibs7z4L0pu/kFJeYGSGj2U0+KPUtXfKCcrUVlZSnfvFqq8vFwNGzZUbm5uhXF/6gKE9UbnPRBhvdH5D0wLe/fuXS1btkxTpkxRmzZtKpzQZJ01a5Zmz56tjh07vjyPvuEY+az4nB7fXq3sJF9ZefVVrcVSKbu27NKC2wWaMWOG6tSpo88//1yNGjWqMC7CeiPK+ECEzTjSiicsLS1N7t27pzNnzujQoUNaunSpWrZsqadPnyo7O/vV02ayTmjP58+f68KFC1q5cqW+/vpr12GtK1uHts5bv359lZSUyDpszZpZevqkVHl5VZRSkXKq1Fcqla+iohIVFz/UsWPH9N1332n58uVO3LKyMt26dUsPHjxQrVq11Lp1azevzVevXj1lZWXp9u3bqlu3rrs+/SZBh60415m+AmEzTfRnzHfixIlk4cKFun79upOhQ4cOWrdunROosLDQCdO3b18n1sOHDzVixAidPXtWBw8edFvYFi1aaMiQIapdu7a2bdumJ0+eaPDgwbp8+bJyc6voww/76eTps+rcqZPG//53+nWnX+n7f36viRMnOSlNxJkzZ2ry5Ml69uyZVq9erQMHDujRo0fKz8/X4sWLdfToUZ0/f17dunXT48ePdeXKFfXp00e7du1C2J+R47d1CcK+LbL/Zd7CwsLk4sWL+uSTTzRu3DgngklqXc86aNOmTfXuu++6Djx27FgNGDDAdbhevXrps88+U48ePdxWNicnR4cPH3aiv/fee2rWrJk7486ZPVt/+8fftfWrr7Txyy/VrHkLTZs2Tf369VPz5s3d9StWrFD79u21ZMkS111tq20d27bb7dq1U//+/fXpp5+qRo0a+uijj9z2eeDAgdq0aRPCVkLNpEMibCXALysrS06dOqVFixZp69atTk6Tz7aa586dcxKblPPnz1fnzp3d69aNTdzTp0+/Ondat/3mm2908uRJJ5Rth61D2rZ2586dbgu9Zs0a7dixQ+nzsslpwtobw9WrVzV69Gi3Hbc3CduOFxQUuI7epUsXTZ8+3Yn9wQcfuLnatm3rrmNLXAlF80NIhK0E9iUlJW5LbF3ziy++cJ3UJDWpjh8/7gSzrahJaHeQ7bFv3z4dOXJEmzdv1tq1a90W2Lrq/v371aRJE7eFTotk508TrVWrVu66YcOG6eOPP9aoUaPc1ta2uwsWLNCePXu0e/duzZs3z22vbft97do1DR06VDdv3nS/jx8/3nXZNz04w4YvHoQNz9zETEwe29b27NnTbUmto27cuFEjR450ktoW1bpj79693Y2fVatWOYnef/99bdiwwZ1drRuuX7/eyWpi2lnYttUm7JYtWzRo0CA374QJE9S1a1dNmjTJ3bCybfHw4cNdN7cub3EaN27s3iAaNGiguXPnunOsdfCJEye6bmvbZTtvv/5A2PDFg7DhmdtNnMS6qN3osY9zunfvrr179+rOnTtOWtuq2s0d24JOnTrVnV1t22vnVzvrjhkzRpcuXXKd2W442RbY5LRzp4leWlqq4uJi92ZgYt64cUPbt29XzZo1lZeX557WRU1wOwPbdtvuUFs8u96k/vbbb52kNsecOXNcB0bYSiiWH4VE2ErIgX0Oax+lWCc0eezsaHdv7WEfz9hdWfsYx143yazT2fX2UVC1atXcRzomZPoaE8let5+2rbWtsf1undrmSH/hwua312wuO+vaudn+ZneN7afFsnOwzWE/bQ5bn839ps976bDhiwdhwzM3Odx3J0yKH4tgr7/+mv1uT3s9/Uz/O/231/8LNqc9TLbXx726y/jaFy3ScdLr+Knrf+o7/ggbvngQNjxzIkLAmwDCeqNjIATCE0DY8MyJCAFvAgjrjY6BEAhPAGHDMyciBLwJIKw3OgZCIDwBhA3PnIgQ8CaAsN7oGAiB8AQQNjxzIkLAmwDCeqNjIATCE0DY8MyJCAFvAgjrjY6BEAhPAGHDMyciBLwJIKw3OgZCIDwBhA3PnIgQ8CaAsN7oGAiB8AQQNjxzIkLAmwDCeqNjIATCE0DY8MyJCAFvAgjrjY6BEAhPAGHDMyciBLwJIKw3OgZCIDwBhA3PnIgQ8CaAsN7oGAiB8AQQNjxzIkLAmwDCeqNjIATCE0DY8MyJCAFvAgjrjY6BEAhPAGHDMyciBLwJIKw3OgZCIDwBhA3PnIgQ8CaAsN7oGAiB8AQQNjxzIkLAmwDCeqNjIATCE0DY8MyJCAFvAgjrjY6BEAhPAGHDMyciBLwJIKw3OgZCIDwBhA3PnIgQ8CaAsN7oGAiB8AQQNjxzIkLAmwDCeqNjIATCE0DY8MyJCAFvAgjrjY6BEAhPAGHDMyciBLwJIKw3OgZCIDwBhA3PnIgQ8CaAsN7oGAiB8AQQNjxzIkLAmwDCeqNjIATCE0DY8MyJCAFvAgjrjY6BEAhPAGHDMyciBLwJIKw3OgZCIDwBhA3PnIgQ8CaAsN7oGAiB8AQQNjxzIkLAmwDCeqNjIATCE0DY8MyJCAFvAgjrjY6BEAhPAGHDMyciBLwJIKw3OgZCIDwBhA3PnIgQ8CaAsN7oGAiB8AQQNjxzIkLAm8C/AaJjubC9XT5QAAAAAElFTkSuQmCC';
            closeImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACRCAYAAADAb1QLAAAE1UlEQVR4Xu3Z4W0dVRRF4ZMKSAehBKgAOgglUAIlkA6gA0oIHUAFQAfQAXSArjSWLARSZD/HPotvJP97M+/stc/StcevxoUAAmsIvFozqUERQGAIawkQWESAsIvKMioChLUDCCwiQNhFZRkVAcLaAQQWESDsorKMigBh7QACiwgQdlFZRkWAsHYAgUUECLuoLKMiQFg7gMAiAoRdVJZRESCsHUBgEQHCLirLqAgQ1g4gsIgAYReVZVQECGsHEFhEgLCLyjIqAoS1AwgsIkDYRWUZFQHC2gEEFhEg7KKyjIoAYe0AAosIEHZRWUZFgLB2AIFFBAi7qCyjIkBYO4DAIgKEXVSWUREgrB1AYBEBwi4qy6gIENYOILCIAGEXlWVUBAhrBxBYRICwi8oyKgKEtQMILCJA2EVlGRUBwtoBBBYRIOyisoyKAGHtAAKLCBB2UVlGRYCwdgCBRQQIu6gsoyJAWDuAwCIChF1UllERIKwdQGARAcIuKsuoCBDWDiCwiABhF5VlVAQIawcQWESAsIvKMioChLUDCCwiQNhFZRkVAcLaAQQWESDsorKMigBh7QACiwgQdlFZRkWAsHYAgUUECLuoLKMiQFg7gMAiAoRdVJZRESCsHUBgEQHCLirLqAgQ1g4gsIgAYReVZVQECGsHEFhEgLCLyjIqAoTdswOfzszrmfn1xiOf5/55/dz40R53awKEvTXRp33elzPz7cz8MjM/zcyPD/i6I/0XM3Oe9fnMfDcz7x/wHLc8AwHCPgP0R37lEe6HmXl7nYpH3CPckfeclP92fXZJ+tUl6vnM95f8/3XPI8d0+1MQIOxTUP04zzzyHXE/ufd1d/L+NjNvLjnP547kd9cfM/P1dUJ/nEl9y80IEPZmKJ/lQfdP2w8Z4N11qn7IZ33mBRIg7Ass5QEjnRPz/C16/7S9/5ifZ+abJ3hh9YBR3fIYAoR9DL2Xde9523t+RT4vlO6uv64T9cjsChAgbKDEf0Q4J+l5k3z+/XNO3t97Ef+/iQjb7P78bevtb7BbwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiABwgZLFalLgLDdbiULEiBssFSRugQI2+1WsiCBvwFBRyKSxaIXVgAAAABJRU5ErkJggg==';
            data = {
                headerTitle: 'Result by Microsoft',
                title: 'Iphone Star',
                image: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/3416493/large/1ee01be1545b3a3793e1b3abc818599e.jpg',
                price: 123.45,
                reviews: 15,
                rating: 4.8,
                link: 'www.google.com',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            }
            html = () => {
                return `<div class='txt-container'><div class='txt-header'><img class='txt-close' src='${this.closeImg}'><span class='txt-header-text'>${this.data.headerTitle || this.headerTitle}<span></div><div class='txt-title'>${this.data.title}</div><img class="txt-img" src="${this.data.image}"/><div class='txt-content'><div class='txt-score-container'><div class='txt-score-number-container'><div class='txt-rating-container'><span class='txt-rating'>${this.data.rating}</span>/<span class='txt-reviews'>${this.data.reviews}</span></div></div> <span class='txt-price'>${this.data.price ? '$' + this.data.price : this.price}</span></div></div><div class='txt-details'></div><div class='txt-btn'>MORE...</div><span class='txt-powerd'>Powered by <img class='powerd-by-img' src='${this.powerdByImg}' /></span></div>`
            }
            styles = {
                'txt-container': {
                    'font-family': 'Ebrima',
                    'margin': '20px',
                    'width': '325px',
                    // 'height': '563px',
                    'box-shadow': '0 0 29px rgba(0, 0, 0, 0.23)',
                    'border-radius': '63px',
                    'background-color': '#ffffff',
                    'display': 'flex',
                    'flex-direction': 'column',
                    'align-items': 'center'
                },
                'txt-header': {
                    'padding': '0px 40px',
                    'display': 'flex',
                    'justify-content': 'space-between',
                    'margin-top': '27px',
                    'width': '100%',
                    'box-sizing': 'border-box'
                },
                'txt-header-text': {
                    'opacity': '0.66',
                    'color': '#000000',
                    'font-family': 'Ebrima',
                    'font-size': '10px',
                    'font-weight': '400'
                },
                'txt-title': {
                    'font-size': '38px',
                    'text-transform': 'uppercase',
                    'text-align': 'center',
                    'font-weight': '700',
                    'margin-top': '20px',
                    'font-family': 'Ebrima'
                },
                'txt-img': {
                    'width': '291px',
                    'height': '246px',
                    'object-fit': 'cover',
                    'margin': '0 auto',
                    'margin-top': '18px'
                },
                'txt-price': {
                    'font-weight': 'bold',
                    'font-size': '28px'
                },
                'txt-content': {
                    'padding': '20px 40px',
                    'box-sizing': 'border-box',
                    'width': '100%'
                },
                'txt-score-container': {
                    'align-items': 'center',
                    'display': 'flex',
                    'width': '100%',
                    'justify-content': 'center'
                },
                'txt-rating': {
                    'font-size': '15px',
                    'font-weight': 'bold'
                },
                'txt-reviews': {
                    'font-size': '15px'
                },
                'txt-btn': {
                    'width': '140px',
                    'height': '47px',
                    'box-shadow': '0 0 13px rgba(0, 0, 0, 0.32)',
                    'border-radius': '31px',
                    'background-color': '#cc3333',
                    'border-width': '0px',
                    'color': 'white',
                    'font-size': '19px',
                    'font-weight': 'bold',
                    'line-height': '14.4px',
                    'display': 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'cursor': 'pointer',
                    'align-self': 'flex-end',
                    'margin-right': '36px'
                },
                'txt-score-number-container': { 'flex': '1' },
                'txt-rating-container': { 'flex': '1' },
                'txt-powerd': {
                    'margin-bottom': '10px',
                    'margin-left':'auto',
                    'margin-right': '40px',
                    'margin-top': '20px',
                    'font-size': '11px',
                    'display': 'flex',
                    'align-items': 'center'
                },
                'powerd-by-img': {
                    'margin-left': '5px',
                    'object-fit': 'none',
                    'height': '30px',
                    'margin-bottom': '2px'
                },
                'txt-close': {
                    'object-fit': 'none',
                    'height': '10px',
                    'cursor': 'pointer'
                }
            }
            assets = {

            }

            init() {
                if (!this.wrapper)
                    this.wrapper = document.createElement('span');
                this.wrapper.style.position = 'fixed';
                this.hide();
                this.wrapper.innerHTML = this.html();
                document.body.append(this.wrapper);
                this.initFonts();
                this.initStyles();
            }
            initFonts() {
                const style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = `@font-face {
                    font-family: 'Ebrima';
                    font-style: normal;
                    font-weight: 400;
                    src: url('./ebrima-noraml.ttf') format('ttf');
                    // unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                }`;
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            initStyles() {
                Object.keys(this.styles).forEach(className => {
                    const style = this.styles[className];
                    Object.keys(style).forEach(key => {
                        const value = style[key];
                        const element = document.getElementsByClassName(className)[0];
                        // element.style.display='';
                        element.style.all='revert';
                        element.style[key] = value;
                    });
                });
            }
            show(data, position) {
                this.wrapper.style.display = 'flex';
                this.wrapper.style.left = position.left;
                this.wrapper.style.height = position.height;
                this.data = data;
                this.wrapper.innerHTML = this.html();
                document.querySelector('.txt-btn').onclick = () => window.open(this.data.link, '_blank');
                document.querySelector('.txt-close').onclick = () => this.hide();
                this.initStyles();
                this.removeUnusedParts();
            }
            hide() {
                this.wrapper.style.display = 'none';
            }
            removeUnusedParts() {
                document.querySelector('.txt-img').style.display = this.data.image ? 'block' : 'none';
                document.querySelector('.txt-score-number-container').style.display = this.data.image ? 'block' : 'none';
            }
        }
        window.txtWidget = txtWidget;
    })();
    //var base = 'https://server.txtrider.com/txtRider-publisher-panel/admin_1_angularjs/widget/';
    var base = 'http://52.10.235.43/txtRider-publisher-panel/admin_1_angularjs/widget/';
    // base = '';
    var desktopScriptUrl = base + 'desktop.js'
    var mobileScriptUrl = base + 'mobile.js';
    var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent))
    var scriptUrl = isMobile ? mobileScriptUrl : desktopScriptUrl;
    var txtScript = document.createElement('script');
    txtScript.setAttribute('src', scriptUrl);
    document.head.appendChild(txtScript);
})();
