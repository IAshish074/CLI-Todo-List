import readline from 'readline'


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let tasks = []

const showMenu = ()=>{
    console.log("\n1: Add tasks : ")
    console.log("2: view tasks: ")
    console.log("3: Exit ")

    rl.question("choose option:",handleOption)
}

const handleOption = (option)=>{
    const choice = parseInt(option)
    if(choice===1){
        rl.question("Enter your Task: ",(task)=>{
            tasks.push(task)
            console.log("Task added: ",task);
            showMenu()
        } )
    }else if(choice === 2){
        console.log("\n here is your List")
        if(tasks.length===0){
            console.log("Not task added yet")
        }
        else{
        tasks.forEach((task,index)=>{
            console.log(`${index+1}: ${task}`);
        
        })
    }
    showMenu()
    }
    else{
        console.log("Good by have a great day ahead")
        rl.close()
    }
}



showMenu();