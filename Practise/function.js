let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}

ask("Do you agree?", () => alert("You agreed."), () => alert("you cancelled the execution."));