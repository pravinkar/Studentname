var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);
var row = 1;
function displayDetails() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;

    if(!name || !age || !grade) {
        alert("please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);
    

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    
    var element = document.createElement('input');
    element.setAttribute('type','checkbox');
    element.setAttribute('class','cbsel');
    element.setAttribute('data-id','cb' + row);
    cell1.appendChild(element);
  

    cell2.innerHTML= name;
    cell3.innerHTML= age;
    cell4.innerHTML= grade;
    row++;

};


function getSelectedRows() {
    let selectedRows = [];
    const items=Array.from(document.getElementsByClassName("cbsel"));
    let ctr=0;
    for(let item of items){
        if(item.checked)  selectedRows.push(ctr);
        ctr++;

    }

    return selectedRows;
    // $('input[type=checkbox]').each(function () {
    //     if ($(this).is(":checked")) {
    //         selectedRows.push($(this));
    //     }
    // });
    // return selectedRows;
}
function deleteRows() {
    var selectedRows = getSelectedRows();
    console.log(selectedRows);
    for (let item of selectedRows) {
       let elements=document.querySelectorAll(`[data-id='cb${item+1}']`);
       Array.from(item)[0].parentElement.parentElement.remove();
       row--;
    }
}

// function selects(){
//     let ele=document.getElementsByName('chk');
//     for(var i=0;i<ele.length;i++){
//         if(ele[i].type=='checkbox')
//         ele[i].checked=true;

//     }
// }
function selects(mainCheckboxChecked){

    var ele=document.getElementsByClassName('cbsel');
    for(var i=0;i<ele.length;i++){
        //if(ele[i].type=='checkbox')
        ele[i].checked=mainCheckboxChecked;//mainCheckbox.checked;
    }
}

const paragraph = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
} );

end_button.addEventListener("click", function() {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "#ffe44d";
} )
    
    


// add_cell_to_row : snake case
// addCellToRow " camel Case"
// AddCellToRow " C#, .Net" : TitleCase

