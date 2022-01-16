const process=require("process");
function getNameFromCommandLine() {
    const argArray=process.argv;
    lenofArr=argArray.length;
    return argArray[lenofArr-1]
    // Write you code here, name should be taken as args in process.argv
}

function getNameFromEnv() {
    // Write your code here
     const envVariable=process.env.name;
    return envVariable;
}

function getNameFromReadLine() {
    // Write your code here
    const readline=require("readline");
    const Interface=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    Interface.question("enter your name?", (answer) =>{
        console.log("Hello",answer)
    });

}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}
    

