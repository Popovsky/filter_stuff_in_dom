console.log('App was loaded...');

const addHandle = () => {
    document.getElementById('id').addEventListener('click', handleIdClick);
    document.getElementById('full-name').addEventListener('click', handleFullNameClick);
    document.getElementById('position').addEventListener('click', handlePositionClick);
    document.getElementById('tech').addEventListener('click', handleSkillClick);
    document.getElementById('exp').addEventListener('click', handleExpClick);
    document.getElementById('sex').addEventListener('click', handleSexClick);
    document.getElementById('salary').addEventListener('click', handleSalaryClick);
    flag = !flag;
}
let flag = false;
const id = document.getElementById('id');
const fullName = document.getElementById('full-name');
const position = document.getElementById('position');
const skill = document.getElementById('tech');
const exp = document.getElementById('exp');
const sex = document.getElementById('sex');
const salary = document.getElementById('salary');

const handleIdClick = () => {
    const sortStuff = stuff.sort((a,b) => flag?a.id - b.id:b.id - a.id);
    id.removeEventListener('click', handleIdClick);
    render(columns, sortStuff);
    flag ? document.getElementById('id').classList.remove('up') : document.getElementById('id').classList.add('up');
    addHandle();
}

const handleSalaryClick = () => {
    const sortStuff = stuff.sort((a,b) => flag?a.salary - b.salary:b.salary - a.salary);
    salary.removeEventListener('click', handleSalaryClick);
    render(columns, sortStuff);
    flag ? document.getElementById('salary').classList.remove('up') : document.getElementById('salary').classList.add('up');
    addHandle();
}

const handleFullNameClick = () => { 
    const sortStuff = stuff.sort((a,b) => flag?a.fullName.toLowerCase().charCodeAt() - b.fullName.toLowerCase().charCodeAt():b.fullName.toLowerCase().charCodeAt() - a.fullName.toLowerCase().charCodeAt());
    fullName.removeEventListener('click', handleFullNameClick);
    render(columns, sortStuff);
    flag ? document.getElementById('full-name').classList.remove('up') : document.getElementById('full-name').classList.add('up');
    addHandle();
}

const handlePositionClick = () => {  
    const sortStuff = stuff.sort((a,b) => flag?a.position.toLowerCase().charCodeAt() - b.position.toLowerCase().charCodeAt():b.position.toLowerCase().charCodeAt() - a.position.toLowerCase().charCodeAt());
    position.removeEventListener('click', handlePositionClick);
    render(columns, sortStuff);
    flag ? document.getElementById('position').classList.remove('up') : document.getElementById('position').classList.add('up');
    addHandle();
}

const handleSkillClick = () => { 
    const sortStuff = stuff.sort((a,b) => flag?a.skill.toLowerCase().charCodeAt() - b.skill.toLowerCase().charCodeAt():b.skill.toLowerCase().charCodeAt() - a.skill.toLowerCase().charCodeAt());
    skill.removeEventListener('click', handleSkillClick);
    render(columns, sortStuff);
    flag ? document.getElementById('tech').classList.remove('up') : document.getElementById('tech').classList.add('up');
    addHandle();
}

const handleExpClick = () => {  
    const sortStuff = stuff.sort((a,b) => flag?a.exp - b.exp:b.exp - a.exp);
    exp.removeEventListener('click', handleExpClick);
    render(columns, sortStuff);
    flag ? document.getElementById('exp').classList.remove('up') : document.getElementById('exp').classList.add('up');
    addHandle();
}

const handleSexClick = () => {  
    const sortStuff = stuff.sort((a,b) => flag?a.sex.toLowerCase().charCodeAt() - b.sex.toLowerCase().charCodeAt():b.sex.toLowerCase().charCodeAt() - a.sex.toLowerCase().charCodeAt());
    sex.removeEventListener('click', handleSexClick);
    render(columns, sortStuff);
    flag ? document.getElementById('sex').classList.remove('up') : document.getElementById('sex').classList.add('up');
    addHandle();
}

id.addEventListener('click', handleIdClick);
fullName.addEventListener('click', handleFullNameClick);
position.addEventListener('click', handlePositionClick);
skill.addEventListener('click', handleSkillClick);
exp.addEventListener('click', handleExpClick);
sex.addEventListener('click', handleSexClick);
salary.addEventListener('click', handleSalaryClick);
