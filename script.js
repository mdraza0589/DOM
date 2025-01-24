        // const title=document.getElementById('title').innerText  // hidden text will not show

        // const title=document.getElementById('title').textContent  // print text even if some text are hidden


        // const title=document.getElementById('title').innerHTML   // this also print tags  

        // console.log(title);

        // const value=document.getElementById('title')
        // console.log(value.innerHTML);




        // const title=document.getElementsByClassName('heading')
        // console.log(title);
        
        

        // const query=document.querySelector('h1')
        // const query=document.querySelector('#title')
        // console.log(query);

        const query=document.querySelector('.heading')

        query.style.backgroundColor='green'
        query.style.borderRadius='20px'
        query.style.padding='20px'

        console.log(query.style);

        query.innerText="hello my dear friend"
        