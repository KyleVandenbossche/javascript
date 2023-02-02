/* Switch statements are an easier version of If/Else/Else if*/ 

const choice = prompt("Select a size");
switch(choice){
    case "small":
    console.log("You have ordered a small shirt")
    break;
    
    case "medium":
    console.log("You have ordered a medium shirt")
    break;

    case "large":
    console.log("You have ordered a large shirt")
    break;

    case "extra large":
    console.log("You have ordered a extra large shirt")
    break;

    default:
        console.log("We have no other sizes");
        break;

}