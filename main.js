async function myFunction () {
    try{
        let res = await fetch("comments")
        
        let comments = await res.json()
        
        return comments.slice(0, 20)
    } catch (error) {
        console.error("Fetch error: ", error);
    }
}


myFunction().then(data => {
    for (const key in data) {
        let main = document.querySelector("main")
        
        let container = document.createElement("div")
        let id = document.createElement("h1")
        let name = document.createElement("h2")
        let comment = document.createElement("p")
        
        id.innerHTML = `Id: ${data[key].id}`
        name.innerHTML = `Name: ${data[key].name}`
        comment.innerHTML = `Comment: ${data[key].body}`
        
        container.append(id, name, comment)
        main.appendChild(container)
    }
})
