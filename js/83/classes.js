class Element {
    children = [];

    constructor(text) {
        this.innertext = text;
    }

    addChild(child) {
        this.children.push(child);
    }

    render() {
        document.body.innerText += '\n';
        document.body.innerText += this.innertext;
        this.children.forEach(c => { c.render(); });
    }

    setInnerText(txt) {
        this.innertext = txt;
    }

    removeChild(elem) {
        this.children = this.children.filter(c => {
            return c !== elem;
        });
    }


}

class Div extends Element {
    constructor(text) {
        super(text);
    }
    render() {
        document.body.innerText += '\n This is a Div';
        super.render();
    }
}
class H1 extends Element {
    constructor(text) {
        super(text);
    }
    render() {
        document.body.innerText += ' \nThis is an H1';
        super.render();
    }
}

const div = new Div('a');
const h11 = new H1('b');
const h12 = new H1('c');
div.addChild(h11);
div.addChild(h12);
div.render();


div.setInnerText('new div inner text');
div.removeChild(h11);
div.render();
