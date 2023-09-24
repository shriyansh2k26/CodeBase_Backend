const xlsx = require('xlsx');
const User = require('../userModel')
const importUser=async(req,res)=>{
    try {
        const excelFilePath = './uploads/data.xlsx'
        const workbook = xlsx.readFile(excelFilePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert the sheet to an array of objects
        const data = xlsx.utils.sheet_to_json(sheet);;
        // console.log(data)
       for(const row of data ){
        const data=row
        const { namecandidate, email, phone, dob, workExp, resume, location, address, employer, designation } = data;
        const Checkuser = await User.findOne({ email: email });
        if (!Checkuser) {
            const newUser = await User.create({
                namecandidate: namecandidate,
                email: email,
                phone: phone,
                dob: dob,
                workExp: workExp,
                resume: resume,
                location: location,
                address: address,
                employer: employer,
                designation: designation
            })
        
        }
        else{
            console.log("duplicate data",data)
        }
       }

        res.json({ message: "successfully transfered data",success:true })
    } catch (error) {
        res.json({ error: `errrrrr ${error}` })
    }
}

module.exports={
    importUser
}


//