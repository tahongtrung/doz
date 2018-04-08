const {transform} = require('../src/parser');
const {updateElement} = require('../src/virtual-dom');
const html = require('../src/html');
const be = require('bejs');
const collection = require('../src/collection');
const copy = require('deep-copy');

describe('parser', function () {

    this.timeout(5000);

    before(function () {
        this.jsdom = require('jsdom-global')()
    });

    after(function () {
        this.jsdom()
    });

    beforeEach(function () {
        document.body.innerHTML = '';
    });

    describe('create', function () {
        it('should be return nodes', function () {
            document.body.innerHTML = `<div id="app"></div>`;
            const appRoot = document.getElementById('app');
            const initial = transform(html.create(`<div>hello<button disabled>testo</button></div>`));

            updateElement(appRoot, initial);
            console.log(document.body.innerHTML);
            const next = transform(html.create(`<div>hello<button disabled>rere</button></div>`));
            //next.children[1].children[0] = 'clicca';
            updateElement(appRoot, next, initial);
            console.log(document.body.innerHTML);
        });


    });
});