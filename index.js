
var counter=0
function add() {
    var alertt=document.getElementById("alertt")
    alertt.innerText=""
    const firstname=document.getElementById("firstname").value
    const lastname=document.getElementById("lastname").value
    var fullname=firstname+" "+lastname
    const score=document.getElementById("score").value
    const countryname=document.getElementById("countryname").value
    console.log(fullname+" "+score+" "+countryname);
    if(firstname=="" || lastname=="" || score=="" || countryname==""){
        alertt.innerText="All fields are required"
    }else{
        const maincontainerlower=document.getElementById("maincontainerlower")
        maincontainerlower.innerHTML+=`
        <div id="row${counter}" class="row">
            <div class="name">
                <h3>${fullname}</h3>
            </div>
            <div class="countryname">
                <h3>${countryname}</h3>
            </div>
            <div class="score">
                <h3 id="index${counter}">${score}</h3>
            </div>
            <div class="button">
                <button onclick="deleteme(${counter})">de</button>
                <button onclick="plusme(${counter})" >+5</button>
                <button onclick="minusme(${counter})" >-5</button>
            </div>
        </div>`
        counter++
    }

    

}
function deleteme(counter) {
    const row=document.getElementById(`row${counter}`)
    row.remove()
    // console.log("aaaaaaaa");
}
function plusme(counter) {
    const plus=document.getElementById(`index${counter}`)
    plus.innerText=+plus.innerText+5
    console.log("aaaaaaaa");
}
function minusme(counter) {
    const plus=document.getElementById(`index${counter}`)
    plus.innerText=+plus.innerText-5
    
}