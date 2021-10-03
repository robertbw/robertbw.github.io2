let forwardSlash = 0;

function main() {
    let forwardSlash = 0;
    document.querySelector("#slashDirection").onclick = (event) => {
        
        console.log(this.forwardSlash);
        if(this.forwardSlash == 0)
        {
            this.forwardSlash = 1;
            document.querySelector("#slashDirection").innerHTML = "Back Slash.";
            document.body.style.backgroundImage = "linear-gradient(135deg, rgb(53,53,53) 0%, rgb(53,53,53) 12.5%,rgb(0,0,0) 12.5%, rgb(0,0,0) 25%,rgb(53,53,53) 25%, rgb(53,53,53) 37.5%,rgb(0,0,0) 37.5%, rgb(0,0,0) 50%,rgb(53,53,53) 50%, rgb(53,53,53) 62.5%,rgb(0,0,0) 62.5%, rgb(0,0,0) 75%,rgb(53,53,53) 75%, rgb(53,53,53) 87.5%,rgb(0,0,0) 87.5%, rgb(0,0,0) 100%)";        
        }
        else
        {
            this.forwardSlash = 0;
            document.querySelector("#slashDirection").innerHTML = "Forward Slash?";
            document.body.style.backgroundImage =  "linear-gradient(45deg, rgb(53,53,53) 0%, rgb(53,53,53) 12.5%,rgb(0,0,0) 12.5%, rgb(0,0,0) 25%,rgb(53,53,53) 25%, rgb(53,53,53) 37.5%,rgb(0,0,0) 37.5%, rgb(0,0,0) 50%,rgb(53,53,53) 50%, rgb(53,53,53) 62.5%,rgb(0,0,0) 62.5%, rgb(0,0,0) 75%,rgb(53,53,53) 75%, rgb(53,53,53) 87.5%,rgb(0,0,0) 87.5%, rgb(0,0,0) 100%)";
        }
    }
}

main();