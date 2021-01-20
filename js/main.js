const links = [
    {label : "Week 1 Notes", url: "week1/index.html"},
    {label : "Week 2 Notes", url: "week2/index.html"},
    {label : "Week 3 Notes", url: "week3/index.html"}
]

const weeks = document.getElementById("weeks");

for (let i=0; i<links.length; i++){
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.setAttribute("href", links[i].url);
    a.textContent = links[i].label;
    li.appendChild(a);
    weeks.appendChild(li);
}