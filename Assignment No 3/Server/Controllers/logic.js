const express = require('express')
var oracledb = require('oracledb');

//Create new user
const newuser = async(req,res)=>{
    try{
        connection = await oracledb.getConnection({
            user:"c##2020BTECS00035",
            password:"vyanki",
            connectionString:"localhost/xe"
        })
        let {role}=req.body;
        if(role=="Instructor"){
            let query = `select * from Instructor`;
            let response = await connection.execute(query,[],{outformat:oracledb.object})
            id = response.rows.length;
            console.log(id);
            let {name,dept_name,salary}=req.body;
            query = `insert into Instructor values(${id+1},'${name}','${dept_name}',${salary})`;
            response = await connection.execute(query,[],{outformat:oracledb.object})
            console.log(response);
            connection.commit();
            
        }
        else{
            let query = `select * from student`;
            let response = await connection.execute(query,[],{outformat:oracledb.object})
            id = response.rows.length;
            console.log(id);
            let {name,dept_name,tot_cred}=req.body;
            query = `insert into student values(${id+1},'${name}','${dept_name}',${tot_cred})`;
            response = await connection.execute(query,[],{outformat:oracledb.object})
            console.log(response);
            connection.commit();
        }
        return res.status(200).json({msg:"User created successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}




//Get all Instructors
const getalluser = async(req,res)=>{
    try{
        connection = await oracledb.getConnection({
            user:"c##2020BTECS00035",
            password:"vyanki",
            connectionString:"localhost/xe"
        })
        let role=req.params.id;
        let response;
        console.log(role);
        if(role=="instructor"){
            let query = `select * from Instructor`;
            response = await connection.execute(query,[],{outformat:oracledb.object})
        }
        else{
            let query = `select * from student`;
            response = await connection.execute(query,[],{outformat:oracledb.object})
        }
        
        return res.status(200).json({Users:response.rows});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}

//Create new Course
const createcourse = async(req,res)=>{
    try{
        connection = await oracledb.getConnection({
            user:"c##2020BTECS00035",
            password:"vyanki",
            connectionString:"localhost/xe"
        })
        let query = `select * from course`;
        let response = await connection.execute(query,[],{outformat:oracledb.object})
        id = response.rows.length;
        console.log(id);
        let {title,dept_name,credits}=req.body;
        query = `insert into course values(${id+1},'${title}','${dept_name}',${credits})`;
        response = await connection.execute(query,[],{outformat:oracledb.object})
        console.log(response);       
        connection.commit();
        return res.status(200).json({msg:"Course created successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}


//Get all Course
const getallcourse = async(req,res)=>{
    try{
        connection = await oracledb.getConnection({
            user:"c##2020BTECS00035",
            password:"vyanki",
            connectionString:"localhost/xe"
        })
        let response;
        let query = `select * from course`;
        response = await connection.execute(query,[],{outformat:oracledb.object})
       
        return res.status(200).json({Users:response.rows});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}

//Create new Section
const createsection = async(req,res)=>{
    try{
        connection = await oracledb.getConnection({
            user:"c##2020BTECS00035",
            password:"vyanki",
            connectionString:"localhost/xe"
        })
        let query = `select * from section`;
        let response = await connection.execute(query,[],{outformat:oracledb.object})
        id = response.rows.length;
        console.log(id);
        let {course_id,semester,year,building,room_number,time_slot_id}=req.body;
        query = `insert into section values(${course_id},${id+1},'${semester}',${year},'${building}',${room_number},${time_slot_id})`;
        console.log(query);
        response = await connection.execute(query,[],{outformat:oracledb.object})
        console.log(response);       
        connection.commit();
        return res.status(200).json({msg:"Section created successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}

//Get all Sections
const getallsections = async(req,res)=>{
    try{
        connection = await oracledb.getConnection({
            user:"c##2020BTECS00035",
            password:"vyanki",
            connectionString:"localhost/xe"
        })
        let response;
        let query = `select * from section`;
        response = await connection.execute(query,[],{outformat:oracledb.object})
       
        return res.status(200).json({Users:response.rows});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}




//Create new Department
const createdept = async(req,res)=>{
    try{
        connection = await oracledb.getConnection({
            user:"c##2020BTECS00035",
            password:"vyanki",
            connectionString:"localhost/xe"
        })
        let query = `select * from department`;
        let response = await connection.execute(query,[],{outformat:oracledb.object})
        id = response.rows.length;
        console.log(id);
        let {dept_name,building,budget}=req.body;
        query = `insert into department values(${id+1},'${dept_name}','${building}',${budget})`;
        console.log(query);
        response = await connection.execute(query,[],{outformat:oracledb.object})
        console.log(response);       
        connection.commit();
        return res.status(200).json({msg:"Section created successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}



//Get all department
const getalldept = async(req,res)=>{
    try{
        connection = await oracledb.getConnection({
            user:"c##2020BTECS00035",
            password:"vyanki",
            connectionString:"localhost/xe"
        })
        let response;
        let query = `select * from department`;
        response = await connection.execute(query,[],{outformat:oracledb.object})
       
        return res.status(200).json({Users:response.rows});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}

module.exports={newuser,getalluser,createcourse,getallcourse,createsection,getallsections,createdept,getalldept}