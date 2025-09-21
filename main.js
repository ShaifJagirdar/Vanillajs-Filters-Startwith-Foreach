document.addEventListener("DOMContentLoaded",function(){
    let data = [
        {name: 'India', img: 'https://flagcdn.com/w320/in.png'},
        {name: 'Indonesia', img: 'https://flagcdn.com/w320/id.png'},
        {name: 'United States of America', img: 'https://flagcdn.com/w320/us.png'},
        {name: 'United Kingdom', img: 'https://flagcdn.com/w320/gb.png'},
        {name: 'Canada', img: 'https://flagcdn.com/w320/ca.png'},
        {name: 'Australia', img: 'https://flagcdn.com/w320/au.png'},
        {name: 'Germany', img: 'https://flagcdn.com/w320/de.png'},
        {name: 'France', img: 'https://flagcdn.com/w320/fr.png'},
        {name: 'Italy', img: 'https://flagcdn.com/w320/it.png'},
        {name: 'Spain', img: 'https://flagcdn.com/w320/es.png'},
        {name: 'Brazil', img: 'https://flagcdn.com/w320/br.png'},
        {name: 'Argentina', img: 'https://flagcdn.com/w320/ar.png'},
        {name: 'Mexico', img: 'https://flagcdn.com/w320/mx.png'},
        {name: 'Russia', img: 'https://flagcdn.com/w320/ru.png'},
        {name: 'China', img: 'https://flagcdn.com/w320/cn.png'},
        {name: 'Japan', img: 'https://flagcdn.com/w320/jp.png'},
        {name: 'South Korea', img: 'https://flagcdn.com/w320/kr.png'},
        {name: 'Turkey', img: 'https://flagcdn.com/w320/tr.png'},
        {name: 'Saudi Arabia', img: 'https://flagcdn.com/w320/sa.png'},
        {name: 'South Africa', img: 'https://flagcdn.com/w320/za.png'},
    ]
    let searchinput = document.querySelector('#search')
    let country = document.querySelector('.teamspanel');
    

    // console.log(data)

    searchinput.addEventListener('input', function(){
        let matchingcountry;
        
        matchingcountry = data.filter(function(sub){
            return sub.name.toLocaleLowerCase().startsWith(searchinput.value.trim().toLowerCase());
        })
        let newcountry = '';
        matchingcountry.forEach(function(elem){
            if(matchingcountry.length > 0){
                if(elem.name.length > 0 ){
                    newcountry += `
                    <div class="team">
                        <img src="${elem.img}" alt="" srcset="">
                        <h3>${elem.name}</h3>
                    </div>
            `;
                }
                else{
                    newcountry = `<h2>No Country Found</h2>`;
                }
                
            }
            else{
                newcountry = `<h2>No Country Found</h2>`;
            }
            
        })
        country.innerHTML = newcountry;
    })

})