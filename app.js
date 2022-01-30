
// checkbox
const skills = document.querySelectorAll('.skill');
const skills_all = document.querySelector('.all-skills');

skills.forEach( skill => {

    skill.addEventListener('change', function(){
       let all_data = document.querySelectorAll('.skill:checked');

       let skills_arr = [];

        all_data.forEach(data => {
            skills_arr.push(data.value);
        });

        let list = ' ';
        skills_arr.map(data => {
            list += `<li class="list-group-item">${data}</li>`;
        });

        skills_all.innerHTML = list;
    });

} );



// clock
const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');

setInterval(() => {

    let time = new Date();
    let current_sec = time.getSeconds();
    let current_min = time.getMinutes();
    let current_hour = time.getHours();
    sec.style.transform = `rotate(${katakuta(60, current_sec)}deg)`;
    min.style.transform = `rotate(${katakuta(60, current_min)}deg)`;
    hour.style.transform = `rotate(${katakuta(12, current_hour)}deg)`;

}, 1000);

function katakuta(time, current){
    return (360* current) / time;
}



// calculator
let cal_data = [];
let valGet = (val) => {
    cal_data.push(val);

    document.querySelector('.top-monitor').innerHTML = cal_data.join(' ');
    document.querySelector('.main-monitor').innerHTML = 0;
};

let allClear = () => {
    cal_data = [];
    document.querySelector('.top-monitor').innerHTML = 0;
    document.querySelector('.main-monitor').innerHTML = '';
};

let back = () => {

    cal_data.pop();
    document.querySelector('.top-monitor').innerHTML = cal_data.join(' ');

};

let finalRes = () => {
    let cal_string = cal_data.join('');
    document.querySelector('.main-monitor').innerHTML = eval(cal_string);
};
