
//Objects are a way to aggregate data members
const allstudents=
    {
        student1:"Hari Krishna",
        Roll:149,
        Grade:"Outstanding",
    }

const faculty=[
    {
        namee:"Rajan vasu",
        angermanagement:0,
        gender:"male",
    },
    {
        namee:"KrishaTulisagari",
        angerManagement:0,
        gender:"MALE",
    },
    {
        namee:"Krisha",
        angerManagement:1000,
        gender:"AlphaMale"
    },

]
console.log(faculty[0]["namee"]);

for(let i=0;i<faculty.length;i++)
{
    if(faculty[i]["gender"]=="Male")
    {
        console.log(faculty[i]["namee"]);
    }
}