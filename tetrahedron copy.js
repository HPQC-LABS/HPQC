//Initialising constants for each object
const svgLine = document.getElementById("svg-line");
const svgLine1 = document.getElementById("svg-line1");
const triangle = document.getElementById("triangle");
const clear = document.getElementById("clear");

const pq1 = document.getElementById("pq1");
const pq2 = document.getElementById("pq2");
const pq3 = document.getElementById("pq3");
const pq4 = document.getElementById("pq4");
const pq5 = document.getElementById("pq5");
const pq6 = document.getElementById("pq6");
const pq7 = document.getElementById("pq7");
const pq8 = document.getElementById("pq8");
const pq9 = document.getElementById("pq9");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const label5 = document.getElementById("label5");
const label6 = document.getElementById("label6");
const label7 = document.getElementById("label7");
const label8 = document.getElementById("label8");
const label9 = document.getElementById("label9");

const angle1 = document.getElementById("angle1");
const angle2 = document.getElementById("angle2");
const angle3 = document.getElementById("angle3");
const angle4 = document.getElementById("angle4");
const angle5 = document.getElementById("angle5");
const angle6 = document.getElementById("angle6");
const angle7 = document.getElementById("angle7");
const angle8 = document.getElementById("angle8");
const angle9 = document.getElementById("angle9");
const angle10 = document.getElementById("angle10");
const angle11 = document.getElementById("angle11");
const angle12 = document.getElementById("angle12");

const dihedral1 = document.getElementById("dihedral1");
const dihedral2 = document.getElementById("dihedral2");
const dihedral3 = document.getElementById("dihedral3");
const dihedral4 = document.getElementById("dihedral4");
const dihedral5 = document.getElementById("dihedral5");
const dihedral6 = document.getElementById("dihedral6");

const p_1 = document.getElementById("p1");
const p_2 = document.getElementById("p2");
const p_3 = document.getElementById("p3");
const p_4 = document.getElementById("p4");
const p_5 = document.getElementById("p5");
const p_6 = document.getElementById("p6");

//Declaring variables for lengths
var r1 = label1.value
var r2 = label2.value
var r3 = label3.value
var r4 = label4.value
var r5 = label5.value
var r6 = label6.value
var r7 = label7.value
var r8 = label8.value
var r9 = label9.value

//Declaring variables for the squared lengths
var r1_2 = Math.pow(r1,2)
var r2_2 = Math.pow(r2,2)
var r3_2 = Math.pow(r3,2)
var r4_2 = Math.pow(r4,2)
var r5_2 = Math.pow(r5,2)
var r6_2 = Math.pow(r6,2)
var r7_2 = Math.pow(r7,2)
var r8_2 = Math.pow(r8,2)
var r9_2 = Math.pow(r9,2)

//Declaring variables for the angles converting them to radians
var a1 = angle1.value*Math.PI/180
var a2 = angle2.value*Math.PI/180
var a3 = angle3.value*Math.PI/180
var a4 = angle4.value*Math.PI/180
var a5 = angle5.value*Math.PI/180
var a6 = angle6.value*Math.PI/180
var a7 = angle7.value*Math.PI/180
var a8 = angle8.value*Math.PI/180
var a9 = angle9.value*Math.PI/180
var a10 = angle10.value*Math.PI/180
var a11 = angle11.value*Math.PI/180
var a12 = angle12.value*Math.PI/180

var d1 = dihedral1.value*Math.PI/180
var d2 = dihedral2.value*Math.PI/180
var d3 = dihedral3.value*Math.PI/180
var d4 = dihedral4.value*Math.PI/180
var d5 = dihedral5.value*Math.PI/180
var d6 = dihedral6.value*Math.PI/180

//Method for updating the variables
function update(){
    r1 = label1.value
    r2 = label2.value
    r3 = label3.value
    r4 = label4.value
    r5 = label5.value
    r6 = label6.value
    r7 = label7.value
    r8 = label8.value
    r9 = label9.value
    r1_2 = Math.pow(r1,2)
    r2_2 = Math.pow(r2,2)
    r3_2 = Math.pow(r3,2)
    r4_2 = Math.pow(r4,2)
    r5_2 = Math.pow(r5,2)
    r6_2 = Math.pow(r6,2)
    r7_2 = Math.pow(r7,2)
    r8_2 = Math.pow(r8,2)
    r9_2 = Math.pow(r9,2)
    a1 = angle1.value*Math.PI/180
    a2 = angle2.value*Math.PI/180
    a3 = angle3.value*Math.PI/180
    a4 = angle4.value*Math.PI/180
    a5 = angle5.value*Math.PI/180
    a6 = angle6.value*Math.PI/180
    a7 = angle7.value*Math.PI/180
    a8 = angle8.value*Math.PI/180
    a9 = angle9.value*Math.PI/180
    a10 = angle10.value*Math.PI/180
    a11 = angle11.value*Math.PI/180
    a12 = angle12.value*Math.PI/180
    d1 = dihedral1.value*Math.PI/180
    d2 = dihedral2.value*Math.PI/180
    d3 = dihedral3.value*Math.PI/180
    d4 = dihedral4.value*Math.PI/180
    d5 = dihedral5.value*Math.PI/180
    d6 = dihedral6.value*Math.PI/180
}

var flags = 0b000000000000000000000000000;
function setFlags(){
    if(label1.value != ""){flags |= 0b100000000000000000000000000}
    if(label2.value != ""){flags |= 0b010000000000000000000000000}
    if(label3.value != ""){flags |= 0b001000000000000000000000000}
    if(label4.value != ""){flags |= 0b000100000000000000000000000}
    if(label5.value != ""){flags |= 0b000010000000000000000000000}
    if(label6.value != ""){flags |= 0b000001000000000000000000000}
    if(label7.value != ""){flags |= 0b000000100000000000000000000}
    if(label8.value != ""){flags |= 0b000000010000000000000000000}
    if(label9.value != ""){flags |= 0b000000001000000000000000000}

    if(angle1.value != ""){flags |= 0b000000000100000000000000000}
    if(angle2.value != ""){flags |= 0b000000000010000000000000000}
    if(angle3.value != ""){flags |= 0b000000000001000000000000000}
    if(angle4.value != ""){flags |= 0b000000000000100000000000000}
    if(angle5.value != ""){flags |= 0b000000000000010000000000000}
    if(angle6.value != ""){flags |= 0b000000000000001000000000000}
    if(angle7.value != ""){flags |= 0b000000000000000100000000000}
    if(angle8.value != ""){flags |= 0b000000000000000010000000000}
    if(angle9.value != ""){flags |= 0b000000000000000001000000000}
    if(angle10.value != ""){flags |= 0b000000000000000000100000000}
    if(angle11.value != ""){flags |= 0b000000000000000000010000000}
    if(angle12.value != ""){flags |= 0b000000000000000000001000000}
   
    if(dihedral1.value != ""){flags |= 0b000000000000000000000100000}
    if(dihedral2.value != ""){flags |= 0b000000000000000000000010000}
    if(dihedral3.value != ""){flags |= 0b000000000000000000000001000}
    if(dihedral4.value != ""){flags |= 0b000000000000000000000000100}
    if(dihedral5.value != ""){flags |= 0b000000000000000000000000010}
    if(dihedral6.value != ""){flags |= 0b000000000000000000000000001}
}

function lock1(){
    label1.disabled = true;
    label2.disabled = true;
    label3.disabled = true;
    angle1.disabled = true;
    angle2.disabled = true;
    angle3.disabled = true;
}

function lock2(){
    label3.disabled = true;
    label4.disabled = true;
    label5.disabled = true;
    angle4.disabled = true;
    angle5.disabled = true;
    angle6.disabled = true;
}

function lock3(){
    label2.disabled = true;
    label6.disabled = true;
    label7.disabled = true;
    angle7.disabled = true;
    angle8.disabled = true;
    angle9.disabled = true;
}

function lock4(){
    label1.disabled = true;
    label8.disabled = true;
    label9.disabled = true;
    angle10.disabled = true;
    angle11.disabled = true;
    angle12.disabled = true;
}

function validate(){
    let changed = true;
    let count = 0;
    setFlags();
    while(changed && count<100){
        count += 1;
        update();
        //unlock();
        //Complete using lengths
        //Triangle 1
        if(((flags & 0b111000000000000000000000000) === 0b111000000000000000000000000) && ((flags & 0b000000000111000000000000000) != 0b000000000111000000000000000)){
            angle1.value = (180/Math.PI*Math.acos((r2_2+r3_2-r1_2)/(2*r2*r3)))
            angle2.value = (180/Math.PI*Math.acos((r1_2+r3_2-r2_2)/(2*r1*r3)))
            angle3.value = (180/Math.PI*Math.acos((r1_2+r2_2-r3_2)/(2*r1*r2)))
            lock1();
            changed = true
        }else if(((flags & 0b110000000001000000000000000) === 0b110000000001000000000000000) && ((flags & 0b001000000000000000000000000) !== 0b001000000000000000000000000)){
            label3.value = (Math.sqrt(r1_2+r2_2-2*r1*r2*Math.cos(a3)))
            lock1();
            changed = true
        }else if(((flags & 0b101000000010000000000000000) === 0b101000000010000000000000000) && ((flags & 0b010000000000000000000000000) !== 0b010000000000000000000000000)){
            label2.value = (Math.sqrt(r1_2+r3_2-2*r1*r3*Math.cos(a2)))
            lock1();
            changed = true
        }else if(((flags & 0b011000000100000000000000000) === 0b011000000100000000000000000) && ((flags & 0b100000000000000000000000000) !== 0b100000000000000000000000000)){
            label1.value = (Math.sqrt(r2_2+r3_2-2*r2*r3*Math.cos(a1)))
            lock1();
            changed = true
        }else if(((flags & 0b100000000111000000000000000) === 0b100000000111000000000000000) && ((flags & 0b011000000000000000000000000) !== 0b011000000000000000000000000)){
            label2.value = (r1*Math.sin(a2)/Math.sin(a1))
            label3.value = (r1*Math.sin(a3)/Math.sin(a1))
            lock1();
            changed = true
        }else if(((flags & 0b010000000111000000000000000) === 0b010000000111000000000000000) && ((flags & 0b101000000000000000000000000) !== 0b101000000000000000000000000)){
            label1.value = (r2*Math.sin(a1)/Math.sin(a2))
            label3.value = (r2*Math.sin(a3)/Math.sin(a2))
            lock1();
            changed = true
        }else if(((flags & 0b001000000111000000000000000) === 0b001000000111000000000000000) && ((flags & 0b110000000000000000000000000) !== 0b110000000000000000000000000)){
            label1.value = (r3*Math.sin(a1)/Math.sin(a3))
            label2.value = (r3*Math.sin(a2)/Math.sin(a3))
            lock1();
            changed = true
        }
        //Triangle 2
        else if(((flags & 0b001110000000000000000000000) === 0b001110000000000000000000000) && ((flags & 0b000000000000111000000000000) != 0b000000000000111000000000000)){
            angle5.value = (180/Math.PI*Math.acos((r4_2+r5_2-r3_2)/(2*r4*r5)))
            angle6.value = (180/Math.PI*Math.acos((r3_2+r5_2-r4_2)/(2*r3*r5)))
            angle4.value = (180/Math.PI*Math.acos((r3_2+r4_2-r5_2)/(2*r3*r4)))
            lock2();
            changed = true
        }else if(((flags & 0b001100000000100000000000000) === 0b001100000000100000000000000) && ((flags & 0b000010000000000000000000000) !== 0b000010000000000000000000000)){
            label5.value = (Math.sqrt(r3_2+r4_2-2*r3*r4*Math.cos(a4)))
            lock2();
            changed = true
        }else if(((flags & 0b001010000000001000000000000) === 0b001010000000001000000000000) && ((flags & 0b000100000000000000000000000) !== 0b000100000000000000000000000)){
            label4.value = (Math.sqrt(r3_2+r5_2-2*r3*r5*Math.cos(a6)))
            lock2();
            changed = true
        }else if(((flags & 0b000110000000010000000000000) === 0b000110000000010000000000000) && ((flags & 0b001000000000000000000000000) !== 0b001000000000000000000000000)){
            label3.value = (Math.sqrt(r4_2+r5_2-2*r4*r5*Math.cos(a5)))
            lock2();
            changed = true
        }
        else if(((flags & 0b001000000000111000000000000) === 0b001000000000111000000000000) && ((flags & 0b000110000000000000000000000) !== 0b000110000000000000000000000)){
            label4.value = (r3*Math.sin(a6)/Math.sin(a5))
            label5.value = (r3*Math.sin(a4)/Math.sin(a5))
            lock2();
            changed = true
        }else if(((flags & 0b000100000000111000000000000) === 0b000100000000111000000000000) && ((flags & 0b001010000000000000000000000) !== 0b001010000000000000000000000)){
            label3.value = (r4*Math.sin(a5)/Math.sin(a6))
            label5.value = (r4*Math.sin(a4)/Math.sin(a6))
            lock2();
            changed = true
        }else if(((flags & 0b000010000000111000000000000) === 0b000010000000111000000000000) && ((flags & 0b001100000000000000000000000) !== 0b001100000000000000000000000)){
            label3.value = (r5*Math.sin(a5)/Math.sin(a4))
            label4.value = (r5*Math.sin(a6)/Math.sin(a4))
            lock2();
            changed = true
        }
        //Triangle 3
        else if(((flags & 0b010001100000000000000000000) === 0b010001100000000000000000000) && ((flags & 0b000000000000000111000000000) != 0b000000000000000111000000000)){
            angle9.value = (180/Math.PI*Math.acos((r6_2+r7_2-r2_2)/(2*r6*r7)))
            angle8.value = (180/Math.PI*Math.acos((r2_2+r7_2-r6_2)/(2*r2*r7)))
            angle7.value = (180/Math.PI*Math.acos((r2_2+r6_2-r7_2)/(2*r2*r6)))
            lock3();
            changed = true
        }else if(((flags & 0b010001000000000100000000000) === 0b010001000000000100000000000) && ((flags & 0b000000100000000000000000000) !== 0b000000100000000000000000000)){
            label7.value = (Math.sqrt(r2_2+r6_2-2*r2*r6*Math.cos(a7)))
            lock3();
            changed = true
        }else if(((flags & 0b010000100000000010000000000) === 0b010000100000000010000000000) && ((flags & 0b000001000000000000000000000) !== 0b000001000000000000000000000)){
            label6.value = (Math.sqrt(r2_2+r7_2-2*r2*r7*Math.cos(a8)))
            lock3();
            changed = true
        }else if(((flags & 0b000001100000000100000000000) === 0b000001100000000100000000000) && ((flags & 0b010000000000000000000000000) !== 0b010000000000000000000000000)){
            label2.value = (Math.sqrt(r6_2+r7_2-2*r6*r7*Math.cos(a9)))
            lock3();
            changed = true
        }
        else if(((flags & 0b010000000000000111000000000) === 0b010000000000000111000000000) && ((flags & 0b000001100000000000000000000) !== 0b000001100000000000000000000)){
            label6.value = (r2*Math.sin(a8)/Math.sin(a9))
            label7.value = (r2*Math.sin(a7)/Math.sin(a9))
            lock3();
            changed = true
        }else if(((flags & 0b000001000000000111000000000) === 0b000001000000000111000000000) && ((flags & 0b010000100000000000000000000) !== 0b010000100000000000000000000)){
            label2.value = (r6*Math.sin(a9)/Math.sin(a8))
            label7.value = (r6*Math.sin(a7)/Math.sin(a8))
            lock3();
            changed = true
        }else if(((flags & 0b000000100000000111000000000) === 0b000000100000000111000000000) && ((flags & 0b010001000000000000000000000) !== 0b010001000000000000000000000)){
            label2.value = (r7*Math.sin(a9)/Math.sin(a7))
            label6.value = (r7*Math.sin(a8)/Math.sin(a7))
            lock3();
            changed = true
        }
        //Triangle 4
        else if(((flags & 0b100000011000000000000000000) === 0b100000011000000000000000000) && ((flags & 0b000000000000000000111000000) != 0b000000000000000000111000000)){
            angle11.value = (180/Math.PI*Math.acos((r8_2+r9_2-r1_2)/(2*r8*r9)))
            angle12.value = (180/Math.PI*Math.acos((r1_2+r9_2-r8_2)/(2*r1*r9)))
            angle10.value = (180/Math.PI*Math.acos((r1_2+r8_2-r9_2)/(2*r1*r8)))
            lock4();
            changed = true
        }else if(((flags & 0b100000010000000000100000000) === 0b100000010000000000100000000) && ((flags & 0b000000001000000000000000000) !== 0b000000001000000000000000000)){
            label9.value = (Math.sqrt(r1_2+r8_2-2*r1*r8*Math.cos(a10)))
            lock4();
            changed = true
        }else if(((flags & 0b100000001000000000001000000) === 0b100000001000000000001000000) && ((flags & 0b000000010000000000000000000) !== 0b000000010000000000000000000)){
            label8.value = (Math.sqrt(r1_2+r9_2-2*r1*r9*Math.cos(a12)))
            lock4();
            changed = true
        }else if(((flags & 0b000000011000000000010000000) === 0b000000011000000000010000000) && ((flags & 0b100000000000000000000000000) !== 0b100000000000000000000000000)){
            label1.value = (Math.sqrt(r8_2+r9_2-2*r8*r9*Math.cos(a11)))
            lock4();
            changed = true
        }
        else if(((flags & 0b100000000000000000111000000) === 0b100000000000000000111000000) && ((flags & 0b000000011000000000000000000) !== 0b000000011000000000000000000)){
            label8.value = (r1*Math.sin(a12)/Math.sin(a11))
            label9.value = (r1*Math.sin(a10)/Math.sin(a11))
            lock4();
            changed = true
        }else if(((flags & 0b000000010000000000111000000) === 0b000000010000000000111000000) && ((flags & 0b100000001000000000000000000) !== 0b100000001000000000000000000)){
            label1.value = (r8*Math.sin(a11)/Math.sin(a12))
            label9.value = (r8*Math.sin(a10)/Math.sin(a12))
            lock4();
            changed = true
        }else if(((flags & 0b000000001000000000111000000) === 0b000000001000000000111000000) && ((flags & 0b100000010000000000000000000) !== 0b100000010000000000000000000)){
            label1.value = (r9*Math.sin(a11)/Math.sin(a10))
            label8.value = (r9*Math.sin(a12)/Math.sin(a10))
            lock4();
            changed = true
        }
        //Only angles
        //Triangle 1
        else if(((flags & 0b000000000011000000000000000) === 0b000000000011000000000000000) && ((flags & 0b000000000100000000000000000) !== 0b000000000100000000000000000)){
            angle1.value = (180-angle2.value-angle3.value)
            angle1.disabled = true;
            angle2.disabled = true;
            angle3.disabled = true;
            changed = true
        }else if(((flags & 0b000000000101000000000000000) === 0b000000000101000000000000000) && ((flags & 0b000000000010000000000000000) !== 0b000000000010000000000000000)){
            angle2.value = (180-angle1.value-angle3.value)
            angle1.disabled = true;
            angle2.disabled = true;
            angle3.disabled = true;
            changed = true
        }else if(((flags & 0b000000000110000000000000000) === 0b000000000110000000000000000) && ((flags & 0b000000000001000000000000000) !== 0b000000000001000000000000000)){
            angle3.value = (180-angle2.value-angle1.value)
            angle1.disabled = true;
            angle2.disabled = true;
            angle3.disabled = true;
            changed = true
        }//Triangle 2
        else if(((flags & 0b000000000000011000000000000) === 0b000000000000011000000000000) && ((flags & 0b000000000000100000000000000) !== 0b000000000000100000000000000)){
            angle4.value = (180-angle5.value-angle6.value)
            angle4.disabled = true;
            angle5.disabled = true;
            angle6.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000101000000000000) === 0b000000000000101000000000000) && ((flags & 0b000000000000010000000000000) !== 0b000000000000010000000000000)){
            angle5.value = (180-angle4.value-angle6.value)
            angle4.disabled = true;
            angle5.disabled = true;
            angle6.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000110000000000000) === 0b000000000000110000000000000) && ((flags & 0b000000000000001000000000000) !== 0b000000000000001000000000000)){
            angle6.value = (180-angle4.value-angle5.value)
            angle4.disabled = true;
            angle5.disabled = true;
            angle6.disabled = true;
            changed = true
        }//Triangle 3
        else if(((flags & 0b000000000000000011000000000) === 0b000000000000000011000000000) && ((flags & 0b000000000000000100000000000) !== 0b000000000000000100000000000)){
            angle7.value = (180-angle8.value-angle9.value)
            angle7.disabled = true;
            angle8.disabled = true;
            angle9.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000101000000000) === 0b000000000000000101000000000) && ((flags & 0b000000000000000010000000000) !== 0b000000000000000010000000000)){
            angle8.value = (180-angle7.value-angle9.value)
            angle7.disabled = true;
            angle8.disabled = true;
            angle9.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000110000000000) === 0b000000000000000110000000000) && ((flags & 0b000000000000000001000000000) !== 0b000000000000000001000000000)){
            angle9.value = (180-angle7.value-angle8.value)
            angle7.disabled = true;
            angle8.disabled = true;
            angle9.disabled = true;
            changed = true
        }//Triangle 4
        else if(((flags & 0b000000000000000000011000000) === 0b000000000000000000011000000) && ((flags & 0b000000000000000000100000000) !== 0b000000000000000000100000000)){
            angle10.value = (180-angle11.value-angle12.value)
            angle10.disabled = true;
            angle11.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000000101000000) === 0b000000000000000000101000000) && ((flags & 0b000000000000000000010000000) !== 0b000000000000000000010000000)){
            angle11.value = (180-angle10.value-angle12.value)
            angle10.disabled = true;
            angle11.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000000110000000) === 0b000000000000000000110000000) && ((flags & 0b000000000000000000001000000) !== 0b000000000000000000001000000)){
            angle12.value = (180-angle10.value-angle11.value)
            angle10.disabled = true;
            angle11.disabled = true;
            angle12.disabled = true;
            changed = true
        }
        //Dihedral 1 with angles 1,4,7
        else if(((flags & 0b000000000100100100000000000) === 0b000000000100100100000000000) && ((flags & 0b000000000000000000000100000) !== 0b000000000000000000000100000)){
            let val = (Math.cos(a1)-Math.cos(a4)*Math.cos(a7))/(Math.sin(a4)*Math.sin(a7))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral1.value = 180*Math.acos(val)/Math.PI
            dihedral1.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }else if(((flags & 0b000000000100100000000100000) === 0b000000000100100000000100000) && ((flags & 0b000000000000000100000000000) !== 0b000000000000000100000000000)){
            angle7.value = inverse_dihedral(Math.cos(d1)*Math.sin(a4),Math.cos(a4),Math.cos(a1))
            dihedral1.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }else if(((flags & 0b000000000100000100000100000) === 0b000000000100000100000100000) && ((flags & 0b000000000000100000000000000) !== 0b000000000000100000000000000)){
            angle4.value = inverse_dihedral(Math.cos(d1)*Math.sin(a7),Math.cos(a7),Math.cos(a1))
            dihedral1.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000100100000100000) === 0b000000000000100100000100000) && ((flags & 0b000000000100000000000000000) !== 0b000000000100000000000000000)){
            angle1.value = 180*Math.acos(Math.cos(d1)*Math.sin(a4)*Math.sin(a7)+Math.cos(a4)*Math.cos(a7))/Math.PI
            dihedral1.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }
        //Dihedral 1 with angles 5,9,11
        else if(((flags & 0b000000000000010001010000000) === 0b000000000000010001010000000) && ((flags & 0b000000000000000000000100000) !== 0b000000000000000000000100000)){
            let val = (Math.cos(a11)-Math.cos(a5)*Math.cos(a9))/(Math.sin(a5)*Math.sin(a9))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral1.value = 180*Math.acos(val)/Math.PI
            dihedral1.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000010001000100000) === 0b000000000000010001000100000) && ((flags & 0b000000000000000000010000000) !== 0b000000000000000000010000000)){
            angle11.value = 180*Math.acos(Math.cos(d1)*Math.sin(a5)*Math.sin(a9)+Math.cos(a5)*Math.cos(a9))/Math.PI
            dihedral1.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000010000010100000) === 0b000000000000010000010100000) && ((flags & 0b000000000000000001000000000) !== 0b000000000000000001000000000)){
            angle9.value = inverse_dihedral(Math.cos(d1)*Math.sin(a5),Math.cos(a5),Math.cos(a11))
            dihedral1.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000001010100000) === 0b000000000000000001010100000) && ((flags & 0b000000000000010000000000000) !== 0b000000000000010000000000000)){
            angle5.value = inverse_dihedral(Math.cos(d1)*Math.sin(a9),Math.cos(a9),Math.cos(a11))
            dihedral1.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }
        //Dihedral 2 with angles 2,6,10
        else if(((flags & 0b000000000010001000100000000) === 0b000000000010001000100000000) && ((flags & 0b000000000000000000000010000) !== 0b000000000000000000000010000)){
            let val = (Math.cos(a2)-Math.cos(a6)*Math.cos(a10))/(Math.sin(a6)*Math.sin(a10))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral2.value = 180*Math.acos(cal)/Math.PI
            dihedral2.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }else if(((flags & 0b000000000010001000000010000) === 0b000000000010001000000010000) && ((flags & 0b000000000000000000100000000) !== 0b000000000000000000100000000)){
            angle10.value = inverse_dihedral(Math.cos(d2)*Math.sin(a6),Math.cos(a6),Math.cos(a2))
            dihedral2.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }else if(((flags & 0b000000000010000000100010000) === 0b000000000010000000100010000) && ((flags & 0b000000000000001000000000000) !== 0b000000000000001000000000000)){
            angle6.value = inverse_dihedral(Math.cos(d2)*Math.sin(a10),Math.cos(a10),Math.cos(a2))
            dihedral2.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000001000100010000) === 0b000000000000001000100010000) && ((flags & 0b000000000010000000000000000) !== 0b000000000010000000000000000)){
            angle2.value = 180*Math.acos(Math.cos(d2)*Math.sin(a6)*Math.sin(a10)+Math.cos(a6)*Math.cos(a10))/Math.PI
            dihedral2.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }
        //Dihedral 2 with angles 5,9,11
        else if(((flags & 0b000000000000010001010000000) === 0b000000000000010001010000000) && ((flags & 0b000000000000000000000010000) !== 0b000000000000000000000010000)){
            let val = (Math.cos(a9)-Math.cos(a5)*Math.cos(a11))/(Math.sin(a5)*Math.sin(a11))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral2.value = 180*Math.acos(val)/Math.PI
            dihedral2.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000010001000010000) === 0b000000000000010001000010000) && ((flags & 0b000000000000000000010000000) !== 0b000000000000000000010000000)){
            angle11.value = inverse_dihedral(Math.cos(d2)*Math.sin(a5),Math.cos(a5),Math.cos(a9))
            dihedral2.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000010000010010000) === 0b000000000000010000010010000) && ((flags & 0b000000000000000001000000000) !== 0b000000000000000001000000000)){
            angle9.value = 180*Math.acos(Math.cos(d2)*Math.sin(a5)*Math.sin(a11)+Math.cos(a5)*Math.cos(a11))/Math.PI
            dihedral2.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000001010010000) === 0b000000000000000001010010000) && ((flags & 0b000000000000010000000000000) !== 0b000000000000010000000000000)){
            angle5.value = inverse_dihedral(Math.cos(d2)*Math.sin(a11),Math.cos(a11),Math.cos(a9))
            dihedral2.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }
        //Dihedral 3 with angles 3,8,12
        else if(((flags & 0b000000000001000010001000000) === 0b000000000001000010001000000) && ((flags & 0b000000000000000000000001000) !== 0b000000000000000000000001000)){
            let val = (Math.cos(a3)-Math.cos(a8)*Math.cos(a12))/(Math.sin(a8)*Math.sin(a12))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral3.value = 180*Math.acos(val)/Math.PI
            dihedral3.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000001000010000001000) === 0b000000000001000010000001000) && ((flags & 0b000000000000000000001000000) !== 0b000000000000000000001000000)){
            angle12.value = inverse_dihedral(Math.cos(d3)*Math.sin(a8),Math.cos(a8),Math.cos(a3))
            dihedral3.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000001000000001001000) === 0b000000000001000000001001000) && ((flags & 0b000000000000000010000000000) !== 0b000000000000000010000000000)){
            angle8.value = inverse_dihedral(Math.cos(d3)*Math.sin(a12),Math.cos(a12),Math.cos(a3))
            dihedral3.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000010001001000) === 0b000000000000000010001001000) && ((flags & 0b000000000001000000000000000) !== 0b000000000001000000000000000)){
            angle3.value = 180*Math.acos(Math.cos(d3)*Math.sin(a8)*Math.sin(a12)+Math.cos(a8)*Math.cos(a12))/Math.PI
            dihedral3.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }
        //Dihedral 3 with angles 5,9,11
        else if(((flags & 0b000000000000010001010000000) === 0b000000000000010001010000000) && ((flags & 0b000000000000000000000001000) !== 0b000000000000000000000001000)){
            let val = (Math.cos(a5)-Math.cos(a9)*Math.cos(a11))/(Math.sin(a9)*Math.sin(a11))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral3.value = 180*Math.acos(val)/Math.PI
            dihedral3.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000010001000001000) === 0b000000000000010001000001000) && ((flags & 0b000000000000000000010000000) !== 0b000000000000000000010000000)){
            angle11.value = inverse_dihedral(Math.cos(d3)*Math.sin(a9),Math.cos(a9),Math.cos(a5))
            dihedral3.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000010000010001000) === 0b000000000000010000010001000) && ((flags & 0b000000000000000001000000000) !== 0b000000000000000001000000000)){
            angle9.value = inverse_dihedral(Math.cos(d3)*Math.sin(a11),Math.cos(a11),Math.cos(a5))
            dihedral3.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000001010001000) === 0b000000000000000001010001000) && ((flags & 0b000000000000010000000000000) !== 0b000000000000010000000000000)){
            angle5.value = 180*Math.acos(Math.cos(d3)*Math.sin(a9)*Math.sin(a11)+Math.cos(a9)*Math.cos(a11))/Math.PI
            dihedral3.disabled = true;
            angle5.disabled = true;
            angle9.disabled = true;
            angle11.disabled = true;
            changed = true
        }
        //Dihedral 4 with angles 3,8,12
        else if(((flags & 0b000000000001000010001000000) === 0b000000000001000010001000000) && ((flags & 0b000000000000000000000000100) !== 0b000000000000000000000000100)){
            let val = (Math.cos(a8)-Math.cos(a3)*Math.cos(a12))/(Math.sin(a3)*Math.sin(a12))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral4.value = 180*Math.acos(val)/Math.PI
            dihedral4.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000001000010000000100) === 0b000000000001000010000000100) && ((flags & 0b000000000000000000001000000) !== 0b000000000000000000001000000)){
            angle12.value = inverse_dihedral(Math.cos(d4)*Math.sin(a3),Math.cos(a3),Math.cos(a8))
            dihedral4.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000001000000001000100) === 0b000000000001000000001000100) && ((flags & 0b000000000000000010000000000) !== 0b000000000000000010000000000)){
            angle8.value = 180*Math.acos(Math.cos(d4)*Math.sin(a3)*Math.sin(a12)+Math.cos(a3)*Math.cos(a12))/Math.PI
            dihedral4.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000010001000100) === 0b000000000000000010001000100) && ((flags & 0b000000000001000000000000000) !== 0b000000000001000000000000000)){
            angle3.value = inverse_dihedral(Math.cos(d4)*Math.sin(a12),Math.cos(a12),Math.cos(a8))
            dihedral4.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }
        //Dihedral 4 with angles 2,6,10
        else if(((flags & 0b000000000010001000100000000) === 0b000000000010001000100000000) && ((flags & 0b000000000000000000000000100) !== 0b000000000000000000000000100)){
            let val = (Math.cos(a2)-Math.cos(a6)*Math.cos(a10))/(Math.sin(a6)*Math.sin(a10))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral4.value = 180*Math.acos(val)/Math.PI
            dihedral4.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }else if(((flags & 0b000000000010001000000000100) === 0b000000000010001000000000100) && ((flags & 0b000000000000000000100000000) !== 0b000000000000000000100000000)){
            angle10.value = inverse_dihedral(Math.cos(d4)*Math.sin(a2),Math.cos(a2),Math.cos(a6))
            dihedral4.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }else if(((flags & 0b000000000010000000100000100) === 0b000000000010000000100000100) && ((flags & 0b000000000000001000000000000) !== 0b000000000000001000000000000)){
            angle6.value = 180*Math.acos(Math.cos(d4)*Math.sin(a2)*Math.sin(a10)+Math.cos(a2)*Math.cos(a10))/Math.PI
            dihedral4.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000001000100000100) === 0b000000000000001000100000100) && ((flags & 0b000000000010000000000000000) !== 0b000000000010000000000000000)){
            angle2.value = inverse_dihedral(Math.cos(d4)*Math.sin(a10),Math.cos(a10),Math.cos(a6))
            dihedral4.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }
        //Dihedral 5 with angles 3,8,12
        else if(((flags & 0b000000000001000010001000000) === 0b000000000001000010001000000) && ((flags & 0b000000000000000000000000010) !== 0b000000000000000000000000010)){
            let val = (Math.cos(a8)-Math.cos(a3)*Math.cos(a12))/(Math.sin(a3)*Math.sin(a12))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral5.value = 180*Math.acos(val)/Math.PI
            dihedral5.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000001000010000000010) === 0b000000000001000010000000010) && ((flags & 0b000000000000000000001000000) !== 0b000000000000000000001000000)){
            angle12.value = 180*Math.acos(Math.cos(d5)*Math.sin(a3)*Math.sin(a8)+Math.cos(a3)*Math.cos(a8))/Math.PI
            dihedral5.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000001000000001000010) === 0b000000000001000000001000010) && ((flags & 0b000000000000000010000000000) !== 0b000000000000000010000000000)){
            angle8.value = inverse_dihedral(Math.cos(d5)*Math.sin(a3),Math.cos(a3),Math.cos(a12))
            dihedral5.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000000010001000010) === 0b000000000000000010001000010) && ((flags & 0b000000000001000000000000000) !== 0b000000000001000000000000000)){
            angle3.value = inverse_dihedral(Math.cos(d5)*Math.sin(a8),Math.cos(a8),Math.cos(a12))
            dihedral5.disabled = true;
            angle3.disabled = true;
            angle8.disabled = true;
            angle12.disabled = true;
            changed = true
        }
        //Dihedral 5 with angles 1,4,7
        else if(((flags & 0b000000000100100100000000000) === 0b000000000100100100000000000) && ((flags & 0b000000000000000000000000010) !== 0b000000000000000000000000010)){
            let val = (Math.cos(a1)-Math.cos(a4)*Math.cos(a7))/(Math.sin(a4)*Math.sin(a7))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral5.value = 180*Math.acos(val)/Math.PI
            dihedral5.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }else if(((flags & 0b000000000100100000000000010) === 0b000000000100100000000000010) && ((flags & 0b000000000000000100000000000) !== 0b000000000000000100000000000)){
            angle7.value = inverse_dihedral(Math.cos(d5)*Math.sin(a1),Math.cos(a1),Math.cos(a4))
            dihedral5.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }else if(((flags & 0b000000000100000100000000010) === 0b000000000100000100000000010) && ((flags & 0b000000000000100000000000000) !== 0b000000000000100000000000000)){
            angle4.value = 180*Math.acos(Math.cos(d5)*Math.sin(a1)*Math.sin(a7)+Math.cos(a1)*Math.cos(a7))/Math.PI
            dihedral5.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000100100000000010) === 0b000000000000100100000000010) && ((flags & 0b000000000100000000000000000) !== 0b000000000100000000000000000)){
            angle1.value = inverse_dihedral(Math.cos(d5)*Math.sin(a7),Math.cos(a7),Math.cos(a4))
            dihedral5.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }
        //Dihedral 6 with angles 1,4,7
        else if(((flags & 0b000000000100100100000000000) === 0b000000000100100100000000000) && ((flags & 0b000000000000000000000000001) !== 0b000000000000000000000000001)){
            let val = (Math.cos(a1)-Math.cos(a4)*Math.cos(a7))/(Math.sin(a4)*Math.sin(a7))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral6.value = 180*Math.acos(val)/Math.PI
            dihedral6.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }else if(((flags & 0b000000000100100000000000001) === 0b000000000100100000000000001) && ((flags & 0b000000000000000100000000000) !== 0b000000000000000100000000000)){
            angle7.value = 180*Math.acos(Math.cos(d6)*Math.sin(a1)*Math.sin(a4)+Math.cos(a1)*Math.cos(a4))/Math.PI
            dihedral6.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }else if(((flags & 0b000000000100000100000000001) === 0b000000000100000100000000001) && ((flags & 0b000000000000100000000000000) !== 0b000000000000100000000000000)){
            angle4.value = inverse_dihedral(Math.cos(d6)*Math.sin(a1),Math.cos(a1),Math.cos(a7))
            dihedral6.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000100100000000001) === 0b000000000000100100000000001) && ((flags & 0b000000000100000000000000000) !== 0b000000000100000000000000000)){
            angle1.value = inverse_dihedral(Math.cos(d6)*Math.sin(a4),Math.cos(a4),Math.cos(a7))
            dihedral6.disabled = true;
            angle1.disabled = true;
            angle4.disabled = true;
            angle7.disabled = true;
            changed = true
        }
        //Dihedral 6 with angles 2,6,10
        else if(((flags & 0b000000000010001000100000000) === 0b000000000010001000100000000) && ((flags & 0b000000000000000000000000001) !== 0b000000000000000000000000001)){
            let val = (Math.cos(a2)-Math.cos(a6)*Math.cos(a10))/(Math.sin(a6)*Math.sin(a10))
            if (val > 1 || val < -1){val = Math.round(val*1000000000000)/1000000000000}
            dihedral6.value = 180*Math.acos(val)/Math.PI
            dihedral6.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }else if(((flags & 0b000000000010001000000000001) === 0b000000000010001000000000001) && ((flags & 0b000000000000000000100000000) !== 0b000000000000000000100000000)){
            angle10.value = 180*Math.acos(Math.cos(d4)*Math.sin(a2)*Math.sin(a6)+Math.cos(a2)*Math.cos(a6))/Math.PI
            dihedral6.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }else if(((flags & 0b000000000010000000100000001) === 0b000000000010000000100000001) && ((flags & 0b000000000000001000000000000) !== 0b000000000000001000000000000)){
            angle6.value = inverse_dihedral(Math.cos(d4)*Math.sin(a2),Math.cos(a2),Math.cos(a10))
            dihedral6.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }else if(((flags & 0b000000000000001000100000001) === 0b000000000000001000100000001) && ((flags & 0b000000000010000000000000000) !== 0b000000000010000000000000000)){
            angle2.value = inverse_dihedral(Math.cos(d4)*Math.sin(a6),Math.cos(a6),Math.cos(a10))
            dihedral6.disabled = true;
            angle2.disabled = true;
            angle6.disabled = true;
            angle10.disabled = true;
            changed = true
        }
        else{
            changed = false
        }
        setFlags();
    }

    let done = true
    if(label1.value == ""){done = false;}
    if(label2.value == ""){done = false;}
    if(label3.value == ""){done = false;}
    if(label4.value == ""){done = false;}
    if(label5.value == ""){done = false;}
    if(label6.value == ""){done = false;}
    if(label7.value == ""){done = false;}
    if(label8.value == ""){done = false;}
    if(label9.value == ""){done = false;}
    if(angle1.value == ""){done = false;}
    if(angle2.value == ""){done = false;}
    if(angle3.value == ""){done = false;}
    if(angle4.value == ""){done = false;}
    if(angle5.value == ""){done = false;}
    if(angle6.value == ""){done = false;}
    if(angle7.value == ""){done = false;}
    if(angle8.value == ""){done = false;}
    if(angle9.value == ""){done = false;}
    if(angle10.value == ""){done = false;}
    if(angle11.value == ""){done = false;}
    if(angle12.value == ""){done = false;}
    if(done){
        if(count == 100){
            alert("Some lengths, angles or dihedrals isNaN")
            location.reload();
        }else{
            render();
        }
    }else{
        unrender();
    }
    let check_len = true
    if(label1.value <=0 && label1.value != ""){check_len = false;}
    if(label2.value <=0 && label2.value != ""){check_len = false;}
    if(label3.value <=0 && label3.value != ""){check_len = false;}
    if(label4.value <=0 && label4.value != ""){check_len = false;}
    if(label5.value <=0 && label5.value != ""){check_len = false;}
    if(label6.value <=0 && label6.value != ""){check_len = false;}
    if(label7.value <=0 && label7.value != ""){check_len = false;}
    if(label8.value <=0 && label8.value != ""){check_len = false;}
    if(label9.value <=0 && label9.value != ""){check_len = false;}
    if(!check_len){
        alert("Lengths can't be negative")
        erase();
        location.reload();
    }
    let check_angle = true
    if((angle1.value <=0 || angle1.value >=180) && angle1.value != ""){check_angle= false;}
    if((angle2.value <=0 || angle2.value >=180) && angle2.value != ""){check_angle= false;}
    if((angle3.value <=0 || angle3.value >=180) && angle3.value != ""){check_angle= false;}
    if((angle4.value <=0 || angle4.value >=180) && angle4.value != ""){check_angle= false;}
    if((angle5.value <=0 || angle5.value >=180) && angle5.value != ""){check_angle= false;}
    if((angle6.value <=0 || angle6.value >=180) && angle6.value != ""){check_angle= false;}
    if((angle7.value <=0 || angle7.value >=180) && angle7.value != ""){check_angle= false;}
    if((angle8.value <=0 || angle8.value >=180) && angle8.value != ""){check_angle= false;}
    if((angle9.value <=0 || angle9.value >=180) && angle9.value != ""){check_angle= false;}
    if((angle10.value <=0 || angle10.value >=180) && angle10.value != ""){check_angle= false;}
    if((angle11.value <=0 || angle11.value >=180) && angle11.value != ""){check_angle= false;}
    if((angle12.value <=0 || angle12.value >=180) && angle12.value != ""){check_angle= false;}
    if(!check_angle){
        alert("Angles not in range")
        erase();
        location.reload();
    }
}

function inverse_dihedral(a, b, c){
    let ans = +Math.acos(c/(Math.sqrt(Math.pow(a,2)+Math.pow(b,2))))+Math.atan(a/b)
    /*if (ans < 0){
        ans = ans + 2*Math.PI
    }*/
    return ans*180/Math.PI
}

//Initialising event handlers corresponding to the 9 lengths and 8 types of tetrahedron. I still need to do the same for angles
const handlers = [[],[],[],[],[],[],[],[],[]]
handlers[0][0] = () => {}
handlers[1][0] = () => {}
handlers[2][0] = () => {}
handlers[3][0] = () => {label6.value = label4.value; }
handlers[4][0] = () => {label8.value = label5.value; }
handlers[5][0] = () => {label4.value = label6.value; }
handlers[6][0] = () => {label9.value = label7.value; }
handlers[7][0] = () => {label5.value = label8.value; }
handlers[8][0] = () => {label7.value = label9.value; }
handlers[0][1] = () => {label2.value = label1.value; label3.value = label1.value; }
handlers[1][1] = () => {label1.value = label2.value; label3.value = label2.value; }
handlers[2][1] = () => {label1.value = label3.value; label2.value = label3.value; }
handlers[3][1] = () => {label5.value = label4.value; label6.value = label4.value; label7.value = label4.value; label8.value = label4.value; label9.value = label4.value; }
handlers[4][1] = () => {label4.value = label5.value; label6.value = label5.value; label7.value = label5.value; label8.value = label5.value; label9.value = label5.value; }
handlers[5][1] = () => {label5.value = label6.value; label4.value = label6.value; label7.value = label6.value; label8.value = label6.value; label9.value = label6.value; }
handlers[6][1] = () => {label5.value = label7.value; label6.value = label7.value; label4.value = label7.value; label8.value = label7.value; label9.value = label7.value; }
handlers[7][1] = () => {label5.value = label8.value; label6.value = label8.value; label7.value = label8.value; label4.value = label8.value; label9.value = label8.value; }
handlers[8][1] = () => {label5.value = label9.value; label6.value = label9.value; label7.value = label9.value; label8.value = label9.value; label4.value = label9.value; }
handlers[0][2] = () => {label4.value = label1.value; label6.value = label1.value; }
handlers[1][2] = () => {label3.value = label2.value; label5.value = label2.value; label7.value = label2.value; label8.value = label2.value; label9.value = label2.value; }
handlers[2][2] = () => {label2.value = label3.value; label5.value = label3.value; label7.value = label3.value; label8.value = label3.value; label9.value = label3.value; }
handlers[3][2] = () => {label1.value = label4.value; label6.value = label4.value; }
handlers[4][2] = () => {label3.value = label5.value; label2.value = label5.value; label7.value = label5.value; label8.value = label5.value; label9.value = label5.value; }
handlers[5][2] = () => {label4.value = label6.value; label1.value = label6.value; }
handlers[6][2] = () => {label3.value = label7.value; label5.value = label7.value; label2.value = label7.value; label8.value = label7.value; label9.value = label7.value; }
handlers[7][2] = () => {label3.value = label8.value; label5.value = label8.value; label7.value = label8.value; label2.value = label8.value; label9.value = label8.value; }
handlers[8][2] = () => {label3.value = label9.value; label5.value = label9.value; label7.value = label9.value; label8.value = label9.value; label2.value = label9.value; }
handlers[0][3] = () => {label5.value = label1.value; label8.value = label1.value; label6.value = label1.value; label4.value = label1.value; }
handlers[1][3] = () => {label3.value = label2.value; label9.value = label2.value; label7.value = label2.value; }
handlers[2][3] = () => {label2.value = label3.value; label9.value = label3.value; label7.value = label3.value; }
handlers[3][3] = () => {label5.value = label4.value; label8.value = label4.value; label6.value = label4.value; label1.value = label4.value; }
handlers[4][3] = () => {label1.value = label5.value; label8.value = label5.value; label6.value = label5.value; label4.value = label5.value; }
handlers[5][3] = () => {label5.value = label6.value; label8.value = label6.value; label1.value = label6.value; label4.value = label6.value; }
handlers[6][3] = () => {label2.value = label7.value; label9.value = label7.value; label3.value = label7.value; }
handlers[7][3] = () => {label5.value = label8.value; label1.value = label8.value; label6.value = label8.value; label4.value = label8.value; }
handlers[8][3] = () => {label2.value = label9.value; label7.value = label9.value; label3.value = label9.value; }
handlers[0][4] = () => {label6.value = label1.value; label4.value = label1.value; }
handlers[1][4] = () => {label5.value = label2.value; label8.value = label2.value; }
handlers[2][4] = () => {label9.value = label3.value; label7.value = label3.value; }
handlers[3][4] = () => {label1.value = label4.value; label6.value = label4.value; }
handlers[4][4] = () => {label8.value = label5.value; label2.value = label5.value; }
handlers[5][4] = () => {label1.value = label6.value; label4.value = label1.value; }
handlers[6][4] = () => {label9.value = label7.value; label3.value = label7.value; }
handlers[7][4] = () => {label5.value = label8.value; label2.value = label8.value; }
handlers[8][4] = () => {label7.value = label9.value; label3.value = label9.value; }
handlers[0][5] = () => {label6.value = label1.value; label4.value = label1.value; }
handlers[1][5] = () => {}
handlers[2][5] = () => {label9.value = label3.value; label7.value = label3.value; }
handlers[3][5] = () => {label1.value = label4.value; label6.value = label4.value; }
handlers[4][5] = () => {label8.value = label5.value; }
handlers[5][5] = () => {label1.value = label6.value; label4.value = label1.value; }
handlers[6][5] = () => {label9.value = label7.value; label3.value = label7.value; }
handlers[7][5] = () => {label5.value = label8.value; }
handlers[8][5] = () => {label7.value = label9.value; label3.value = label9.value; }
handlers[0][6] = () => {}
handlers[1][6] = () => {label3.value = label2.value; }
handlers[2][6] = () => {label2.value = label3.value; }
handlers[3][6] = () => {label6.value = label4.value; }
handlers[4][6] = () => {label7.value = label5.value; label8.value = label5.value; label9.value = label5.value; }
handlers[5][6] = () => {label4.value = label6.value; }
handlers[6][6] = () => {label5.value = label7.value; label8.value = label7.value; label9.value = label7.value; }
handlers[7][6] = () => {label7.value = label8.value; label5.value = label8.value; label9.value = label8.value; }
handlers[8][6] = () => {label7.value = label9.value; label8.value = label9.value; label5.value = label9.value; }
handlers[0][7] = () => {label2.value = label1.value;label3.value = label1.value;label4.value = label1.value;label5.value = label1.value;label6.value = label1.value;label7.value = label1.value;label8.value = label1.value;label9.value = label1.value;}
handlers[1][7] = () => {label1.value = label2.value;label3.value = label2.value;label4.value = label2.value;label5.value = label2.value;label6.value = label2.value;label7.value = label2.value;label8.value = label2.value;label9.value = label2.value;}
handlers[2][7] = () => {label2.value = label3.value;label1.value = label3.value;label4.value = label3.value;label5.value = label3.value;label6.value = label3.value;label7.value = label3.value;label8.value = label3.value;label9.value = label3.value;}
handlers[3][7] = () => {label2.value = label4.value;label3.value = label4.value;label1.value = label4.value;label5.value = label4.value;label6.value = label4.value;label7.value = label4.value;label8.value = label4.value;label9.value = label4.value;}
handlers[4][7] = () => {label2.value = label5.value;label3.value = label5.value;label4.value = label5.value;label1.value = label5.value;label6.value = label5.value;label7.value = label5.value;label8.value = label5.value;label9.value = label5.value;}
handlers[5][7] = () => {label2.value = label6.value;label3.value = label6.value;label4.value = label6.value;label5.value = label6.value;label1.value = label6.value;label7.value = label6.value;label8.value = label6.value;label9.value = label6.value;}
handlers[6][7] = () => {label2.value = label7.value;label3.value = label7.value;label4.value = label7.value;label5.value = label7.value;label6.value = label7.value;label1.value = label7.value;label8.value = label7.value;label9.value = label7.value;}
handlers[7][7] = () => {label2.value = label8.value;label3.value = label8.value;label4.value = label8.value;label5.value = label8.value;label6.value = label8.value;label7.value = label8.value;label1.value = label8.value;label9.value = label8.value;}
handlers[8][7] = () => {label2.value = label9.value;label3.value = label9.value;label4.value = label9.value;label5.value = label9.value;label6.value = label9.value;label7.value = label9.value;label8.value = label9.value;label1.value = label9.value;}

const handlers2 = [[],[],[],[],[],[],[],[],[],[],[],[]]
handlers2[0][0] = () => {}
handlers2[1][0] = () => {}
handlers2[2][0] = () => {}
handlers2[3][0] = () => {}
handlers2[4][0] = () => {}
handlers2[5][0] = () => {}
handlers2[6][0] = () => {}
handlers2[7][0] = () => {}
handlers2[8][0] = () => {}
handlers2[9][0] = () => {}
handlers2[10][0] = () => {}
handlers2[11][0] = () => {}
handlers2[0][1] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";}
handlers2[1][1] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";}
handlers2[2][1] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";}
handlers2[3][1] = () => {angle6.value = angle4.value;angle7.value = angle4.value;angle8.value = angle4.value;angle10.value = angle4.value;angle12.value = angle4.value;}
handlers2[4][1] = () => {angle9.value = angle5.value;angle11.value = angle5.value; angle4.value = (180-angle5.value)/2;angle7.value = (180-angle5.value)/2;angle10.value = (180-angle5.value)/2;}
handlers2[5][1] = () => {angle4.value = angle6.value;angle7.value = angle6.value;angle8.value = angle6.value;angle10.value = angle6.value;angle12.value = angle6.value;}
handlers2[6][1] = () => {angle6.value = angle7.value;angle4.value = angle7.value;angle8.value = angle7.value;angle10.value = angle7.value;angle12.value = angle7.value;}
handlers2[7][1] = () => {angle6.value = angle8.value;angle7.value = angle8.value;angle4.value = angle8.value;angle10.value = angle8.value;angle12.value = angle8.value;}
handlers2[8][1] = () => {angle5.value = angle9.value;angle11.value = angle9.value; angle4.value = (180-angle9.value)/2;angle7.value = (180-angle9.value)/2;angle10.value = (180-angle9.value)/2;}
handlers2[9][1] = () => {angle6.value = angle10.value;angle7.value = angle10.value;angle8.value = angle10.value;angle4.value = angle10.value;angle12.value = angle10.value;}
handlers2[10][1] = () => {angle5.value = angle11.value;angle9.value = angle11.value; angle4.value = (180-angle11.value)/2;angle7.value = (180-angle11.value)/2;angle10.value = (180-angle11.value)/2;}
handlers2[11][1] = () => {angle6.value = angle12.value;angle7.value = angle12.value;angle8.value = angle12.value;angle10.value = angle12.value;angle4.value = angle12.value;}
handlers2[0][2] = () => {angle6.value = angle1.value; angle8.value = angle1.value; angle11.value = angle1.value;angle2.value = (180-angle1.value)/2;angle5.value = (180-angle1.value)/2;angle7.value = (180-angle1.value)/2;angle10.value = (180-angle1.value)/2;}
handlers2[1][2] = () => {angle3.value = angle2.value; angle4.value = angle2.value; angle5.value = angle2.value; angle7.value = angle2.value; angle9.value = angle2.value; angle10.value = angle2.value; angle12.value = angle2.value;}
handlers2[2][2] = () => {angle2.value = angle3.value; angle4.value = angle3.value; angle5.value = angle3.value; angle7.value = angle3.value; angle9.value = angle3.value; angle10.value = angle3.value; angle12.value = angle3.value;}
handlers2[3][2] = () => {angle3.value = angle4.value; angle2.value = angle4.value; angle5.value = angle4.value; angle7.value = angle4.value; angle9.value = angle4.value; angle10.value = angle4.value; angle12.value = angle4.value;}
handlers2[4][2] = () => {angle3.value = angle5.value; angle4.value = angle5.value; angle2.value = angle5.value; angle7.value = angle5.value; angle9.value = angle5.value; angle10.value = angle5.value; angle12.value = angle5.value;}
handlers2[5][2] = () => {angle1.value = angle6.value; angle8.value = angle6.value; angle11.value = angle6.value;angle2.value = (180-angle6.value)/2;angle5.value = (180-angle6.value)/2;angle7.value = (180-angle6.value)/2;angle10.value = (180-angle6.value)/2;}
handlers2[6][2] = () => {angle3.value = angle7.value; angle4.value = angle7.value; angle5.value = angle7.value; angle2.value = angle7.value; angle9.value = angle7.value; angle10.value = angle7.value; angle12.value = angle7.value;}
handlers2[7][2] = () => {angle6.value = angle8.value; angle1.value = angle8.value; angle11.value = angle8.value;angle2.value = (180-angle8.value)/2;angle5.value = (180-angle8.value)/2;angle7.value = (180-angle8.value)/2;angle10.value = (180-angle8.value)/2;}
handlers2[8][2] = () => {angle3.value = angle9.value; angle4.value = angle9.value; angle5.value = angle9.value; angle7.value = angle9.value; angle2.value = angle9.value; angle10.value = angle9.value; angle12.value = angle9.value;}
handlers2[9][2] = () => {angle3.value = angle10.value; angle4.value = angle10.value; angle5.value = angle10.value; angle7.value = angle10.value; angle9.value = angle10.value; angle2.value = angle10.value; angle12.value = angle10.value;}
handlers2[10][2] = () => {angle6.value = angle11.value; angle8.value = angle11.value; angle1.value = angle11.value;angle2.value = (180-angle11.value)/2;angle5.value = (180-angle11.value)/2;angle7.value = (180-angle11.value)/2;angle10.value = (180-angle11.value)/2;}
handlers2[11][2] = () => {angle3.value = angle12.value; angle4.value = angle12.value; angle5.value = angle12.value; angle7.value = angle12.value; angle9.value = angle12.value; angle10.value = angle12.value; angle2.value = angle12.value;}
handlers2[0][3] = () => {angle8.value = angle1.value; angle2.value = (180-angle1.value)/2;angle7.value = (180-angle1.value)/2;}
handlers2[1][3] = () => {angle3.value = angle2.value;angle7.value = angle2.value;angle9.value = angle2.value;}
handlers2[2][3] = () => {angle2.value = angle3.value;angle7.value = angle3.value;angle9.value = angle3.value;}
handlers2[3][3] = () => {angle6.value = angle4.value;angle11.value = angle4.value;angle12.value = angle4.value;}
handlers2[4][3] = () => {angle10.value = angle5.value; angle4.value = (180-angle5.value)/2;angle11.value = (180-angle5.value)/2;}
handlers2[5][3] = () => {angle4.value = angle6.value;angle11.value = angle6.value;angle12.value = angle6.value;}
handlers2[6][3] = () => {angle3.value = angle7.value;angle2.value = angle7.value;angle9.value = angle7.value;}
handlers2[7][3] = () => {angle1.value = angle8.value; angle2.value = (180-angle8.value)/2;angle7.value = (180-angle8.value)/2;}
handlers2[8][3] = () => {angle3.value = angle9.value;angle7.value = angle9.value;angle2.value = angle9.value;}
handlers2[9][3] = () => {angle5.value = angle10.value; angle4.value = (180-angle10.value)/2;angle11.value = (180-angle10.value)/2;}
handlers2[10][3] = () => {angle6.value = angle11.value;angle4.value = angle11.value;angle12.value = angle11.value;}
handlers2[11][3] = () => {angle6.value = angle12.value;angle11.value = angle12.value;angle4.value = angle12.value;}
handlers2[0][4] = () => {angle6.value = angle1.value; angle8.value = angle1.value; angle11.value = angle1.value;}
handlers2[1][4] = () => {angle4.value = angle2.value; angle9.value = angle2.value; angle12.value = angle2.value;}
handlers2[2][4] = () => {angle5.value = angle3.value; angle7.value = angle3.value; angle10.value = angle3.value;}
handlers2[3][4] = () => {angle2.value = angle4.value; angle9.value = angle4.value; angle12.value = angle4.value;}
handlers2[4][4] = () => {angle3.value = angle5.value; angle7.value = angle5.value; angle10.value = angle5.value;}
handlers2[5][4] = () => {angle1.value = angle6.value; angle8.value = angle6.value; angle11.value = angle6.value;}
handlers2[6][4] = () => {angle5.value = angle7.value; angle3.value = angle7.value; angle10.value = angle7.value;}
handlers2[7][4] = () => {angle6.value = angle8.value; angle1.value = angle8.value; angle11.value = angle8.value;}
handlers2[8][4] = () => {angle4.value = angle9.value; angle2.value = angle9.value; angle12.value = angle9.value;}
handlers2[9][4] = () => {angle5.value = angle10.value; angle7.value = angle10.value; angle3.value = angle10.value;}
handlers2[10][4] = () => {angle6.value = angle11.value; angle8.value = angle11.value; angle1.value = angle11.value;}
handlers2[11][4] = () => {angle4.value = angle12.value; angle9.value = angle12.value; angle2.value = angle12.value;}
handlers2[0][5] = () => {angle8.value = angle1.value;}
handlers2[1][5] = () => {angle9.value = angle2.value;}
handlers2[2][5] = () => {angle7.value = angle3.value;}
handlers2[3][5] = () => {angle12.value = angle4.value;}
handlers2[4][5] = () => {angle10.value = angle5.value;}
handlers2[5][5] = () => {angle11.value = angle6.value;}
handlers2[6][5] = () => {angle3.value = angle7.value;}
handlers2[7][5] = () => {angle1.value = angle8.value;}
handlers2[8][5] = () => {angle2.value = angle9.value;}
handlers2[9][5] = () => {angle5.value = angle10.value;}
handlers2[10][5] = () => {angle6.value = angle11.value;}
handlers2[11][5] = () => {angle4.value = angle12.value;}
handlers2[0][6] = () => {angle2.value = (180-angle1.value)/2; }
handlers2[1][6] = () => {angle3.value = angle2.value;}
handlers2[2][6] = () => {angle2.value = angle3.value;}
handlers2[3][6] = () => {angle7.value = angle4.value;}
handlers2[4][6] = () => {angle9.value = angle5.value;}
handlers2[5][6] = () => {angle8.value = angle6.value;}
handlers2[6][6] = () => {angle4.value = angle7.value;}
handlers2[7][6] = () => {angle6.value = angle8.value;}
handlers2[8][6] = () => {angle5.value = angle9.value;}
handlers2[9][6] = () => {angle12.value = angle10.value;}
handlers2[10][6] = () => {angle10.value = (180-angle11.value)/2; }
handlers2[11][6] = () => {angle10.value = angle12.value;}
handlers2[0][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[1][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[2][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[3][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[4][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[5][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[6][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[7][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[8][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[9][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[10][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}
handlers2[11][7] = () => {angle1.value = "60";angle2.value = "60";angle3.value = "60";angle4.value = "60";angle5.value = "60";angle6.value = "60";angle7.value = "60";angle8.value = "60";angle9.value = "60";angle10.value = "60";angle11.value = "60";angle12.value = "60";}

//Tests to see if all fields have been filled. If so then it will render the image else it will unrender.
function refresh(){
    if(label1.value != ""){pq1.textContent = label1.value;}else{pq1.textContent = "r1";}
    if(label2.value != ""){pq2.textContent = label2.value;}else{pq2.textContent = "r2";}
    if(label3.value != ""){pq3.textContent = label3.value;}else{pq3.textContent = "r3";}
    if(label4.value != ""){pq4.textContent = label4.value;}else{pq4.textContent = "r4";}
    if(label5.value != ""){pq5.textContent = label5.value;}else{pq5.textContent = "r5";}
    if(label6.value != ""){pq6.textContent = label6.value;}else{pq6.textContent = "r6";}
    if(label7.value != ""){pq7.textContent = label7.value;}else{pq7.textContent = "r7";}
    if(label8.value != ""){pq8.textContent = label8.value;}else{pq8.textContent = "r8";}
    if(label9.value != ""){pq9.textContent = label9.value;}else{pq9.textContent = "r9";}
}

//Resets the objects to the original states
function unrender(){
    const labels = document.querySelectorAll('.ang_label');
    labels.forEach(ang_label => {
        ang_label.style.visibility = 'visible';
    });

    triangle.setAttribute("viewBox", "-8 -6.9282032302755105 416 360.26656797432656");
    svgLine.setAttribute("points", "0 0, 400 0, 200 346.4101615137755");
    svgLine1.setAttribute("points", "200 0, 100 173.205081, 300 173.205081");
    p_1.setAttribute("cx", "0");
    p_1.setAttribute("cy", "0");
    p_2.setAttribute("cx", "200");
    p_2.setAttribute("cy", "0");
    p_3.setAttribute("cx", "400");
    p_3.setAttribute("cy", "0");
    p_4.setAttribute("cx", "300");
    p_4.setAttribute("cy", "173.205081");
    p_5.setAttribute("cx", "200");
    p_5.setAttribute("cy", "346.4101615137755");
    p_6.setAttribute("cx", "100");
    p_6.setAttribute("cy", "173.205081");
    let font = 31.2
    pq1.setAttribute("font-size", font*0.8);
    pq1.setAttribute("x", "184.4");
    pq1.setAttribute("y", "204.40508075688774");
    pq2.setAttribute("font-size", font*0.8);
    pq2.setAttribute("x", "265.6");
    pq2.setAttribute("y", "86.60254037844388");
    pq3.setAttribute("font-size", font*0.8);
    pq3.setAttribute("x", "118.8");
    pq3.setAttribute("y", "86.60254037844388");
    pq4.setAttribute("font-size", font*0.8);
    pq4.setAttribute("x", "84.4");
    pq4.setAttribute("y", "31.2");
    pq5.setAttribute("font-size", font*0.8);
    pq5.setAttribute("x", "65.59999999999998");
    pq5.setAttribute("y", "86.60254037844388");
    pq6.setAttribute("font-size", font*0.8);
    pq6.setAttribute("x", "284.4");
    pq6.setAttribute("y", "31.2");
    pq7.setAttribute("font-size", font*0.8);
    pq7.setAttribute("x", "318.8");
    pq7.setAttribute("y", "86.60254037844388");
    pq8.setAttribute("font-size", font*0.8);
    pq8.setAttribute("x", "165.59999999999994");
    pq8.setAttribute("y", "259.8076211353316");
    pq9.setAttribute("font-size", font*0.8);
    pq9.setAttribute("x", "218.79999999999998");
    pq9.setAttribute("y", "259.8076211353316");
}

//Some formulae to render the lengths, points and place the labels
function render(){
    const labels = document.querySelectorAll('.ang_label');
    labels.forEach(ang_label => {
        ang_label.style.visibility = 'hidden';
    });
    r2 = label2.value
    r4 = label4.value
    r5 = label5.value
    r6 = label6.value
    r8 = label8.value
    a1 = angle1.value*Math.PI/180
    a2 = angle2.value*Math.PI/180
    a4 = angle4.value*Math.PI/180
    a5 = angle5.value*Math.PI/180
    a6 = angle6.value*Math.PI/180
    a7 = angle7.value*Math.PI/180
    a10 = angle10.value*Math.PI/180

    let p1_x = 0
    let p1_y = 0
    let p2_x = r4
    let p2_y = 0
    let p3_x = r4-(-Math.cos(Math.PI-a1-a4-a7)*r6)
    let p3_y = Math.sin(Math.PI-a1-a4-a7)*r6
    let p4_x = r4-(-Math.cos(Math.PI-a1-a4)*r2)
    let p4_y = Math.sin(Math.PI-a1-a4)*r2
    let p5_x = (r5*Math.cos(a5)-(-Math.sin(1.5*Math.PI-a2-a5-a6-a10)*r8))
    let p5_y = (r5*Math.sin(a5)-(-Math.cos(1.5*Math.PI-a2-a5-a6-a10)*r8))
    let p6_x = r5*Math.cos(a5)
    let p6_y = r5*Math.sin(a5)

    let p1 = p1_x + " " + p1_y
    let p2 = p2_x + " " + p2_y
    let p3 = p3_x + " " + p3_y
    let p4 = p4_x + " " + p4_y
    let p5 = p5_x + " " + p5_y
    let p6 = p6_x + " " + p6_y
    let x_max = Math.max(p1_x, p2_x, p3_x, p4_x, p5_x, p6_x)
    let x_min = Math.min(p1_x, p2_x, p3_x, p4_x, p5_x, p6_x)
    let y_max = Math.max(p1_y, p2_y, p3_y, p4_y, p5_y, p6_y)
    let y_min = Math.min(p1_y, p2_y, p3_y, p4_y, p5_y, p6_y)
    triangle.setAttribute("viewBox", (x_min - (x_max - x_min)*0.02) + " " + (y_min - (y_max - y_min)*0.02) + " " + (x_max - x_min)*1.04 + " " + (y_max - y_min)*1.04);
    svgLine.setAttribute("points", p1+", "+p2+", "+p3+", "+p4+", "+p5+", "+p6);
    svgLine1.setAttribute("points", p2+", "+p4+", "+p6);
    p_1.setAttribute("cx", p1_x);
    p_1.setAttribute("cy", p1_y);
    p_2.setAttribute("cx", p2_x);
    p_2.setAttribute("cy", p2_y);
    p_3.setAttribute("cx", p3_x);
    p_3.setAttribute("cy", p3_y);
    p_4.setAttribute("cx", p4_x);
    p_4.setAttribute("cy", p4_y);
    p_5.setAttribute("cx", p5_x);
    p_5.setAttribute("cy", p5_y);
    p_6.setAttribute("cx", p6_x);
    p_6.setAttribute("cy", p6_y);
    let font = (x_max - x_min)*1.04*30/400
    pq1.setAttribute("font-size", font*0.8);
    pq1.setAttribute("x", p4_x/2+p6_x/2-font/2);
    pq1.setAttribute("y", p4_y/2+p6_y/2+font);
    pq2.setAttribute("font-size", font*0.8);
    pq2.setAttribute("x", p2_x/2+p4_x/2+font/2);
    pq2.setAttribute("y", p2_y/2+p4_y/2);
    pq3.setAttribute("font-size", font*0.8);
    pq3.setAttribute("x", p2_x/2+p6_x/2-font);
    pq3.setAttribute("y", p2_y/2+p6_y/2);
    pq4.setAttribute("font-size", font*0.8);
    pq4.setAttribute("x", (p1_x+p2_x)/2-font/2);
    pq4.setAttribute("y", font+(p1_y+p2_y)/2);
    pq5.setAttribute("font-size", font*0.8);
    pq5.setAttribute("x", p1_x/2+p6_x/2+font/2);
    pq5.setAttribute("y", p1_y/2+p6_y/2);
    pq6.setAttribute("font-size", font*0.8);
    pq6.setAttribute("x", p2_x/2+p3_x/2-font/2);
    pq6.setAttribute("y", p2_y/2+p3_y/2+font);
    pq7.setAttribute("font-size", font*0.8);
    pq7.setAttribute("x", p3_x/2+p4_x/2-font);
    pq7.setAttribute("y", p3_y/2+p4_y/2);
    pq8.setAttribute("font-size", font*0.8);
    pq8.setAttribute("x", p5_x/2+p6_x/2+font/2);
    pq8.setAttribute("y", p5_y/2+p6_y/2);
    pq9.setAttribute("font-size", font*0.8);
    pq9.setAttribute("x", p5_x/2+p4_x/2-font);
    pq9.setAttribute("y", p5_y/2+p4_y/2);
}

//Assigns the corresponding listeners corresponding to the radio button selected.
var radios = document.forms["formA"].elements["special_tet"];
var prev = 0
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        label1.removeEventListener("input", handlers[0][prev]);
        label2.removeEventListener("input", handlers[1][prev]);
        label3.removeEventListener("input", handlers[2][prev]);
        label4.removeEventListener("input", handlers[3][prev]);
        label5.removeEventListener("input", handlers[4][prev]);
        label6.removeEventListener("input", handlers[5][prev]);
        label7.removeEventListener("input", handlers[6][prev]);
        label8.removeEventListener("input", handlers[7][prev]);
        label9.removeEventListener("input", handlers[8][prev]);
        angle1.removeEventListener("input", handlers2[0][prev]);        
        angle2.removeEventListener("input", handlers2[1][prev]);      
        angle3.removeEventListener("input", handlers2[2][prev]);      
        angle4.removeEventListener("input", handlers2[3][prev]);      
        angle5.removeEventListener("input", handlers2[4][prev]);      
        angle6.removeEventListener("input", handlers2[5][prev]);      
        angle7.removeEventListener("input", handlers2[6][prev]);      
        angle8.removeEventListener("input", handlers2[7][prev]);      
        angle9.removeEventListener("input", handlers2[8][prev]);      
        angle10.removeEventListener("input", handlers2[9][prev]);      
        angle11.removeEventListener("input", handlers2[10][prev]);      
        angle12.removeEventListener("input", handlers2[11][prev]);      
        label1.addEventListener("input", handlers[0][this.value]);
        label2.addEventListener("input", handlers[1][this.value]);
        label3.addEventListener("input", handlers[2][this.value]);
        label4.addEventListener("input", handlers[3][this.value]);
        label5.addEventListener("input", handlers[4][this.value]);
        label6.addEventListener("input", handlers[5][this.value]);
        label7.addEventListener("input", handlers[6][this.value]);
        label8.addEventListener("input", handlers[7][this.value]);
        label9.addEventListener("input", handlers[8][this.value]);      
        angle1.addEventListener("input", handlers2[0][this.value]);      
        angle2.addEventListener("input", handlers2[1][this.value]);      
        angle3.addEventListener("input", handlers2[2][this.value]);      
        angle4.addEventListener("input", handlers2[3][this.value]);      
        angle5.addEventListener("input", handlers2[4][this.value]);      
        angle6.addEventListener("input", handlers2[5][this.value]);      
        angle7.addEventListener("input", handlers2[6][this.value]);      
        angle8.addEventListener("input", handlers2[7][this.value]);      
        angle9.addEventListener("input", handlers2[8][this.value]);      
        angle10.addEventListener("input", handlers2[9][this.value]);      
        angle11.addEventListener("input", handlers2[10][this.value]);      
        angle12.addEventListener("input", handlers2[11][this.value]);
        prev = this.value
    }
}

//Adds the corresponding handler initially.
label1.addEventListener("input", handlers[0][0]);
label2.addEventListener("input", handlers[1][0]);
label3.addEventListener("input", handlers[2][0]);
label4.addEventListener("input", handlers[3][0]);
label5.addEventListener("input", handlers[4][0]);
label6.addEventListener("input", handlers[5][0]);
label7.addEventListener("input", handlers[6][0]);
label8.addEventListener("input", handlers[7][0]);
label9.addEventListener("input", handlers[8][0]);

label1.addEventListener("focusout", () => {refresh();});
label2.addEventListener("focusout", () => {refresh();});
label3.addEventListener("focusout", () => {refresh();});
label4.addEventListener("focusout", () => {refresh();});
label5.addEventListener("focusout", () => {refresh();});
label6.addEventListener("focusout", () => {refresh();});
label7.addEventListener("focusout", () => {refresh();});
label8.addEventListener("focusout", () => {refresh();});
label9.addEventListener("focusout", () => {refresh();});

//Implementing erase button
clear.addEventListener("click", () => {erase();});

//Erases all input fields
function erase(){
    label1.value=""
    label2.value=""
    label3.value=""
    label4.value=""
    label5.value=""
    label6.value=""
    label7.value=""
    label8.value=""
    label9.value=""
    angle1.value=""
    angle2.value=""
    angle3.value=""
    angle4.value=""
    angle5.value=""
    angle6.value=""
    angle7.value=""
    angle8.value=""
    angle9.value=""
    angle10.value=""
    angle11.value=""
    angle12.value=""
    dihedral1.value=""
    dihedral2.value=""
    dihedral3.value=""
    dihedral4.value=""
    dihedral5.value=""
    dihedral6.value=""

    label1.disabled = false;
    label2.disabled = false;
    label3.disabled = false;
    label4.disabled = false;
    label5.disabled = false;
    label6.disabled = false;
    label7.disabled = false;
    label8.disabled = false;
    label9.disabled = false;
    angle1.disabled = false;
    angle2.disabled = false;
    angle3.disabled = false;
    angle4.disabled = false;
    angle5.disabled = false;
    angle6.disabled = false;
    angle7.disabled = false;
    angle8.disabled = false;
    angle9.disabled = false;
    angle10.disabled = false;
    angle11.disabled = false;
    angle12.disabled = false;
    dihedral1.disabled = false;
    dihedral2.disabled = false;
    dihedral3.disabled = false;
    dihedral4.disabled = false;
    dihedral5.disabled = false;
    dihedral6.disabled = false;
}