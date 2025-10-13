const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;
let isDark = false;

toggleTheme.addEventListener("click", function(){
    isDark = !isDark;

    if (isDark){
        body.classList.remove('light');
        body.classList.add('dark');
        toggleTheme.textcontent = 'LIGHTMODE'
    }else{
        body.classList.remove('dark');
        body.classList.add('light');
        toggleTheme.textcontent = 'DARKMODE'
    }
})

