const colors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const central = document.getElementById('central')
const btn = document.body.querySelector('.btn')


central.innerHTML = `<h1>#FFFFFF</h1>`
btn.addEventListener('click', ()=> {
    let color = '#'
    let colorLength = 0;
    while(colorLength < 6){
        let i = Math.floor(Math.random() * (16-0)+ 0);
        color += colors[i];
        colorLength++;
    }
    // console.log(color);
    document.body.style.backgroundColor = color;
    central.innerHTML = `<h1>${color}</h1>`
    // btn.style.color=color
})