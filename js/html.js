console.log('App was loaded...');

const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(attr => { element.setAttribute(attr.name, attr.value.join(' ')) });
    inner ? element.innerHTML = inner : null;
    return element;
}

const slug = text => text.trim().split(' ').map(el => el.toLowerCase()).join('-');

const columns = ['ID', 'Full Name', 'Position', 'Tech', 'Exp', 'Sex', 'Salary'];

const stuff = [
    { id: 1, fullName: 'Oleh Lev', position: 'Web Dev', skill: 'PHP,JS', exp: 3, sex: 'Male', salary: 4500 },
    { id: 2, fullName: 'John White', position: 'Web Dev', skill: 'PHP', exp: 1, sex: 'Male', salary: 1200 },
    { id: 3, fullName: 'Jany Rad', position: 'Sale', skill: '-', exp: 2, sex: 'Famale', salary: 3500 },
    { id: 4, fullName: 'Ivan Brown', position: 'iOS', skill: 'Swift', exp: 3, sex: 'Male', salary: 4000 },
    { id: 5, fullName: 'Pet Bool', position: 'Android', skill: 'Java', exp: 2, sex: 'Male', salary: 3520 },
    { id: 6, fullName: 'Emma Hallo', position: 'Android', skill: 'Kotlin', exp: 1, sex: 'Famale', salary: 2520 },
    { id: 7, fullName: 'Olivia Jones', position: 'iOS', skill: 'Objective-C', exp: 3, sex: 'Famale', salary: 2820 },
    { id: 8, fullName: 'William Smith', position: 'Designer', skill: '-', exp: 5, sex: 'Male', salary: 3000 },
    { id: 9, fullName: 'Oliver Alien', position: 'PM', skill: '-', exp: 4, sex: 'Male', salary: 6000 },
    { id: 10, fullName: 'Mia Morris', position: 'Owner', skill: '-', exp: 10, sex: 'Famale', salary: 10000 },
];

const render = (columnData, rowData) => {
    document.getElementById('app').innerHTML = '';
    
    const tbody = createHTMLNode('tbody', [], null);
    rowData.map(el => {
        const trTbody = createHTMLNode('tr', [], null);
        Object.keys(el).map(elName => trTbody.appendChild(createHTMLNode('td', [], el[elName])))
        tbody.appendChild(trTbody);
    })

    const insertExtraRow = (el, i, arr, roWName, rowValue) => {
        if (arr.length - 1 === i) {
            return rowValue;
        } else if (arr.length - 2 === i) {
            return roWName;
        }
        return null
    }

    const trTotal = createHTMLNode('tr', [], null);
    columnData.map((el, i, arr) => {
        trTotal.appendChild(createHTMLNode('td', [], insertExtraRow(el, i, arr, 'Total', 5555)))
    })
    const trAvg = createHTMLNode('tr', [], null);
    columnData.map((el, i, arr) => {
        trAvg.appendChild(createHTMLNode('td', [], insertExtraRow(el, i, arr, 'AVG', 2221)))
    })
    tbody.appendChild(trTotal);
    tbody.appendChild(trAvg);


    const tr = createHTMLNode('tr', [], null);
    columnData.map(el => tr.appendChild(createHTMLNode('th', [{ name: 'id', value: [slug(el)] }], el)));
    const thead = createHTMLNode('thead', [], null);
    thead.appendChild(tr);

    const table = createHTMLNode('table', [{ name: 'class', value: ['table'] }], null);
    table.appendChild(thead);
    table.appendChild(tbody);

    const container = createHTMLNode('div', [{ name: 'class', value: ['container'] }], null);
    const row = createHTMLNode('div', [{ name: 'class', value: ['row'] }], null);
    const col = createHTMLNode('div', [{ name: 'class', value: ['col-12'] }], null);
    const h1 = createHTMLNode('h1', [], 'Lesson 12');


    col.appendChild(h1);
    col.appendChild(table);
    row.appendChild(col);
    container.appendChild(row);

    document.getElementById('app').appendChild(container);
}

render(columns,stuff);