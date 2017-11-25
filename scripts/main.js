let students = [{
    rollno: '1',
    name: 'Henry Mandes',
    dob: '1997-01-08',
    stream: 'CSE',
    pass: '2019'
},
{
    rollno: '2',
    name: 'Lilly Philips',
    dob: '1997-05-19',
    stream: 'MECH',
    pass: '2019'
},
{
    rollno: '3',
    name: 'Arthur Bob',
    dob: '1998-12-11',
    stream: 'CSE',
    pass: '2019'
},
{
    rollno: '4',
    name: 'Stephie Winget',
    dob: '1997-01-01',
    stream: 'CSE',
    pass: '2019'
},
{
    rollno: '5',
    name: 'Mark Boston',
    dob: '1996-04-04',
    stream: 'CSE',
    pass: '2019'
},
{
    rollno: '6',
    name: 'Ozge Baich',
    dob: '2013-01-08',
    stream: 'CSE',
    pass: '2019'
},
{
    rollno: '7',
    name: 'Sam Jane',
    dob: '2013-01-08',
    stream: 'ECE',
    pass: '2019'
},
];

function createRow(student) {
    $('tbody').append(`<tr><td class="col-xs-2">${student.rollno}</td><td class="col-xs-2">${student.name}</td><td class="col-xs-2">${student.dob}</td><td class="col-xs-2">${student.stream}</td><td class="col-xs-2">${student.pass}</td><td class="col-xs-2"><a href="#" data-toggle="modal" data-target="#myModal1" onclick="editRow($(this))" title="Edit"><i class="glyphicon glyphicon-pencil"></i></a><span>&nbsp;&nbsp;&nbsp;</span><a href="#" onclick="DeleteRow($(this))" title="Delete"><i class="glyphicon glyphicon-trash"></i></a><span>&nbsp;&nbsp;&nbsp;</span><a href="#" onclick="SelectRow($(this))" title="Select"><i class="glyphicon glyphicon-edit"></i></a></td></tr>`)
}

function initData() {
    let newTable = document.getElementById(`tab`);
    newTable.innerHTML = "";
    for(let student of students)
        createRow(student);
}

function addData() {
    let data = {};
	data.rollno = document.getElementById("rollno").value;
	data.name = document.getElementById("name").value;
	data.dob = document.getElementById("dob").value;;
    data.stream = document.getElementById("stream").value;;
    data.pass = document.getElementById("pass").value;
	if(checkEmpty(data) )
        return;
    if(validate(data))
        return;
	students.push(data);
    createRow(data);
    alert("Entry successfully added!");
}

function pp()
{
    document.getElementById("rollno").value=" ";
	document.getElementById("name").value=" ";
	document.getElementById("dob").value=" ";
    document.getElementById("stream").value=" ";
    document.getElementById("pass").value=" ";
}

function checkEmpty(data){
	let pairs = Object.entries(data);
	for(let pair of pairs)
		if(pair[1] == ''){
			alert("All the fields are mandatory to be filled");
			return true;
		}
	return false;
}

let rollno;

function editRow($element) {
        let $tr = $element.parent().parent();
    rollno = $tr.children('td')[0].textContent;
	let name = $tr.children('td')[1].textContent;
	let dob = $tr.children('td')[2].textContent;
	let stream = $tr.children('td')[3].textContent;
    let pass = $tr.children('td')[4].textContent;
    
    let y=`<form>
    
    <div class="form-group">
      <label for="rollno" class="cols-sm-2 control-label">Roll No.</label>
      <div class="cols-sm-10">
        <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-th-list" aria-hidden="true"></i></span>
          <input type="number" class="form-control" name="rollno" id="rollno1"  placeholder="Enter your Roll No." value="${rollno}"/>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="name" class="cols-sm-2 control-label">Name</label>
      <div class="cols-sm-10">
        <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user" aria-hidden="true"></i></span>
          <input type="text" class="form-control" name="name" id="name1"  placeholder="Enter your Name" value="${name}"/>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="dob" class="cols-sm-2 control-label">D.O.B.</label>
      <div class="cols-sm-10">
        <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-calendar" aria-hidden="true"></i></span>
          <input type="date" class="form-control" name="dob" id="dob1"  placeholder="Enter your D.O.B." value="${dob}"/>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="stream" class="cols-sm-2 control-label">Stream</label>
      <div class="cols-sm-10">
        <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-book" aria-hidden="true"></i></span>
          <input type="text" class="form-control" name="stream" id="stream1"  placeholder="Enter your Stream" value="${stream}"/>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="pass" class="cols-sm-2 control-label">Passout Year</label>
      <div class="cols-sm-10">
        <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></i></span>
          <input type="number" class="form-control" name="pass" id="pass1"  placeholder="Enter your Passout Year" value="${pass}"/>
        </div>
      </div>
    </div>

    <div class="form-group ">
      <button type="button" class="btn btn-primary btn-lg btn-block login-button" onclick="a()" >Edit</button>
    </div>
  </form>`
   
$(".modal-body").html(y);
}

function a()
{
    let data={};
    data.rollno=document.getElementById("rollno1").value;
    data.name=document.getElementById("name1").value;
    data.dob=document.getElementById("dob1").value;
    data.stream=document.getElementById("stream1").value;
    data.pass=document.getElementById("pass1").value;
    let index = students.findIndex(student => student.rollno == rollno);
    if(checkEmpty(data))
    return;
    students[index] = data;
    initData();
    alert("Successfully edited!")
}

function DeleteRow($element)
{
    let s=confirm("Deleting data?");
    if(s){
    let $tr = $element.parent().parent();
    let rollno = $tr.children('td')[0].textContent;
    let index = students.findIndex(student => student.rollno == rollno);
    students.splice(index,1);
    initData();
    alert("Successfully deleted!");
    }
}

var tmp=[];
function SelectRow($element) {
    let $tr = $element.parent().parent();
    let $tr1=$tr;
    let rollno = $tr1.children('td')[0].textContent;
    tmp.push(rollno);
    $tr.toggleClass("table-danger");
	let $i = $element.children();
	$i.toggleClass("glyphicon glyphicon-check");
}

function deleteSelect()
{
    let $tr = $("tr.table-danger");
    let p=$tr.length;
    if(p==0)
    {
        alert("Select atleast 1 row to be deleted!");
        return;
    }
    let res=confirm("Sure about deleting '+p+' reccords?");
    if(p)
    {
        for(let a of tmp)
        {
            let index = students.findIndex(student => student.rollno == a);
            students.splice(index,1);
        }
        initData();
        alert("Successfully deleted!");
    }
}

function validate(data)
{
    let a=data.rollno
    let index = students.findIndex(student => student.rollno == a);
    if(index!=-1)
    {
        alert("Roll number already exists!");
        return true;
    }
    else
    return false;
}