import React from 'react';
import './App.css';
// import { Button, Form } from 'semantic-ui-react';
import {useState} from 'react';


function Add(){
    const [formData, setFormData] = useState({
        profilePhoto:"",
        name:"",
        email:"",
        mobileNumber:"",
        resumefile:"",
        collegeName:"",
        degree:"",
        fieldOfstudy:"",
        yearOfCompletion:"",
        currentDesignation:"",
        currentCompany:"",
        annualSalary:"",
        workingSince:"",
        skills:"",
        role:""


    });
  
    function onHandleSubmit(data){
  console.log(formData);
    }
    return (
      <div className='grid'>
<div className="header">
<img alt='' className="logo" src="https://walkingtree.tech/wp-content/uploads/2018/10/Green-Logo-1.svg"/> <h1> Profile</h1>
</div>
<div className="body">
<form >
<div className="form">
        <div className="form-input" >

        <div className="input-upload">
<label className="viewImage" for="file-input">
<img  alt=''  className="upload-image" src="https://www.careerlauncher.com/cat-mba/testimonials/img/download.png" />
</label>
<input id="file-input" type="file" src="pictures" accept='image/*' /> 
</div> 
<p className="profile-photo">Upload Profile Photo</p>
          <div className="content-div">
          <div>
          <h3>PERSONAL DETAILS</h3>
          <div className="details">
            <table><tr><td>Full Name<span className="conditions-apply">*</span></td><td><input placeholder='Name'type='name' pattern="[A-Za-z]{15}{ }" className="input-style" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} required/></td></tr>
            <tr><td>Email<span className="conditions-apply">*</span></td><td><input type="email" placeholder='Email' className="input-style" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} required/></td></tr>
        <tr><td>Mobile Number<span className="conditions-apply">*</span></td><td><input type="number" placeholder='Mobile Number' maxLength={10} className="input-style" value={formData.mobileNumber} onChange={(e)=>setFormData({...formData, mobileNumber:e.target.value})} required/></td></tr>
        <tr><td>Upload Resume<span className="conditions-apply">*</span></td>
        <td>       
             <div className="input-resume">
<label for="file-input">
<img className="resume-image" alt='img' src="https://image.flaticon.com/icons/svg/31/31625.svg"/>
</label>
<input id="resume-input" type="file" src="pictures" accept='image/*' /> 
<td>Upload file</td>
</div> </td></tr>
        </table>
        </div>
        </div>
        <div>
            <h3>EDUCATION DETAILS</h3>
            <div className="details">
            <table><tr><td>College Name<span className="conditions-apply">*</span></td><td><input pattern="[A-Za-z]{30}" placeholder='College Name' className="input-style" value={formData.collegeName} onChange={(e)=>setFormData({...formData, collegeName:e.target.value})} required/></td></tr>
            <tr><td>Degree<span className="conditions-apply">*</span></td><td><input placeholder='Degree' pattern="[A-Za-z]{15}" className="input-style" value={formData.degree} onChange={(e)=>setFormData({...formData, degree:e.target.value})} required/></td></tr>
        <tr><td>Field Of Study<span className="conditions-apply">*</span></td><td><input pattern="[A-Za-z]{15}" placeholder='Field Of Study' className="input-style" value={formData.fieldOfstudy} onChange={(e)=>setFormData({...formData, fieldOfstudy:e.target.value})} required/></td></tr>
        <tr><td>Year Of Completion<span className="conditions-apply">*</span></td><td><input type="month" placeholder='Year Of Completion' className="input-style" value={formData.yearOfCompletion} onChange={(e)=>setFormData({...formData, yearOfCompletion:e.target.value})} required/></td></tr>
        </table>
        </div>

        </div>
        <div>
            <h3>EMPLOYMENT DETAILS</h3>
            <div className="details">
            <table><tr><td>Current Designation<span className="conditions-apply">*</span></td><td><input pattern="[A-Za-z]{15}" min="4" max="20" placeholder='Current Designation' className="input-style" value={formData.currentDesignation} onChange={(e)=>setFormData({...formData, currentDesignation:e.target.value})} required/></td></tr>
            <tr><td>Current Company<span className="conditions-apply">*</span></td><td><input pattern="[A-Za-z]{15}" placeholder='Current Company' className="input-style" value={formData.currentCompany} onChange={(e)=>setFormData({...formData, currentCompany:e.target.value})} required/></td></tr>
        <tr><td>Annual Salary<span className="conditions-apply">*</span></td><td><input type="number" min="1000" max="100000" placeholder='Annual Salary' className="input-style" value={formData.annualSalary} onChange={(e)=>setFormData({...formData, annualSalary:e.target.value})} required/></td></tr>
        <tr><td>Working Since<span className="conditions-apply">*</span></td><td><input type="month" placeholder='Working Sincer' className="input-style" value={formData.workingSince} onChange={(e)=>setFormData({...formData, workingSince:e.target.value})} required/></td></tr>
        <tr><td>Skills<span className="conditions-apply">*</span></td><td><input type="text" placeholder='Skills' className="input-style" value={formData.skills} onChange={(e)=>setFormData({...formData, skills:e.target.value})} required/></td></tr>
        <tr><td>Role<span className="conditions-apply">*</span></td><td><input pattern="[A-Za-z]{,}{30}" placeholder='Role' className="input-style" value={formData.role} onChange={(e)=>setFormData({...formData, role:e.target.value})} required/></td></tr>
        </table>
        </div>
        <br/>
        </div>  
             </div>
           
        </div>
    </div>
<div className="buttons">
<button type='button' className="ui button">
 Cancel
</button>
<button className="ui primary button" onSubmit={(e)=>{e.preventDefault(); onHandleSubmit(formData)}} >
  Submit
</button>
</div>
</form>
</div>

</div>
      );
  }
export default Add;