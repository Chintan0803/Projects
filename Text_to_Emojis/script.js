var clutter = "";

const password = document.getElementById("password").innerHTML;
const finalPassword = document.getElementById("finalpassword").innerHTML;

var count = 1;

localStorage.clear();

function encryption() {

    document.querySelector("#encrypt-btn").addEventListener("click", function () {

        // get the input
        var input = document.getElementById("textmsg").value;
        console.log(input)

        // get the password
        var pass = document.getElementById("password").value;
        console.log(pass)
        

        
        if (pass.length <= 0) {
            alert("Please Enter the Password!!");
        } else {

             //converting it into a set of emojis
            var str = input.split("")

            str.forEach(element => {
                clutter += `&#128${(element.charCodeAt())} `
            });

            document.querySelector("#result").innerHTML = clutter;

            document.querySelector("#result").style.overflow.y = "scroll";

            var dataarr = [];
            if(JSON.parse(localStorage.getItem('data1'))){
                dataarr = JSON.parse(localStorage.getItem('data1'));
                console.log(dataarr)
                dataarr.push({"pass":pass, "input":input, "clutter":clutter})
            }else{
                dataarr = [{"pass":pass,"input":input,"clutter":clutter}]
            }
            localStorage.setItem(`data1`, JSON.stringify(dataarr))
        }
    })

}

function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        var clutter2 = '';

        var input2 = document.querySelector("#emojimsg").value;
        var finalPass = document.querySelector("#finalpassword").value;

        var user = JSON.parse(localStorage.getItem('data1'));
        console.log(user);

        var str2 = input2.split(" ");

        str2.forEach(element => {
                clutter2 += `&#${(element.codePointAt(0))} `
        });
        console.log(clutter2);

        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }

        for(let j of user) {
            if(j.pass == finalPass){
                if (found.clutter === clutter2) {
                    document.querySelector("#result").style.display = `block`;
                    document.querySelector("#result").innerHTML = found.input;
                }
            } else {
                document.querySelector("#result").style.display = `block`;
                document.querySelector("#result").style.color = "#7c73e6";
                document.querySelector("#result").innerHTML = "Wrong password!";
            }
        }
    })

}


function btnClicking() {

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block";
    })

    document.querySelector("#dec-btn").addEventListener("click", function () {
        document.querySelector("#dec-btn").style.backgroundColor = "#430f58";

        document.querySelector("#result").style.display = "none";

        document.querySelector("#decryption").style.display = "block";

        document.querySelector("#encryption").style.display = "none";

        document.querySelector("#enc-btn").style.backgroundColor = "#d5def5";
        
        document.querySelector("#arrow").style.rotate = "180deg";
    })

    document.querySelector("#enc-btn").addEventListener("click", function () {
        document.querySelector("#decryption").style.display = "none";

        document.querySelector("#result").style.display = "none";

        document.querySelector("#encryption").style.display = "block";

        document.querySelector("#dec-btn").style.backgroundColor = "#d5def5";
        document.querySelector("#enc-btn").style.backgroundColor = "#430f58";
      
        document.querySelector("#arrow").style.rotate = "";

    })
}

encryption();

decryption()

btnClicking();

