import React from 'react';
import { useForm } from 'react-hook-form';
import './Reg_form.css';

export default function RegForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Kalam Leo-Muthu educational awards 2024</h2>
      <label>Nomination Type</label>
      <select {...register("Nomination Type")}>
      <option value="Select">Select</option>
        <option value="Student">Student </option>
        <option value="Teacher"> Teacher</option>
      </select>
      <label>Select Your Organization</label>
      <select {...register("Select Your Organization")}>
      <option value="Select">Select</option>
        <option value="Private">Private </option>
        <option value="Government"> Government </option>
        <option value="CBSC"> CBSC</option>
      </select>
      <label>Fullname</label>
      <input type="text" placeholder="Name" {...register("Name", {required: true})} />
      <label>Gender</label>
      <select {...register("Gender")}>
        <option value="Male ">Male </option>
        <option value=" Female"> Female</option>
      </select>
      <label>Aadhar Number</label>
      <input type="text" placeholder="Aadhar Number" {...register} />

      <label>School Name</label>
      <textarea placeholder="School Name"{...register("School Name", {required: true})} />

      <label>Date of Birth</label>
      <input type="datetime" placeholder="Date of Birth" {...register("Date of Birth", {required: true})} />

      <label>School Registration Number</label>
      <input type="text" placeholder="School Registration Number" {...register("School Registration Number", {})} />

      <label>Location</label>
      <input type="text" placeholder="Location" {...register("Location", {required: true})} />

      <label>School Contact Number</label>
      <input type="tel" placeholder="School Contact Number" {...register("School Contact Number", {required: true})} />

      <label>Address</label>
      <textarea  placeholder="Address" {...register("Address", {required: true})} />

      <label>Contact Person Number</label>
      <input type="tel" placeholder="Contact Person Number" {...register("Contact Person Number", {required: true})} />

      <label>District</label>
      <input type="text" placeholder="District" {...register("District", {required: true})} />

      <label>Select Subject</label>
      <select {...register("Subject", { required: true })}>
      <option value="Select">Select Subject</option>
        <option value="Tamil">Tamil</option>
        <option value=" English"> English</option>
        <option value=" Maths"> Maths</option>
        <option value=" Science"> Science</option>
        <option value=" Social"> Social</option>
        <option value=" ComputerScience"> ComputerScience</option>
      </select>

      <label>School Email ID</label>
      <input type="email" placeholder="School Email ID" {...register("School Email ID", {required: true})} />

      <label>Email ID</label>
      <input type="email" placeholder="Email ID" {...register("Email ID", {required: true})} />

      <label>Mobile Number</label>
      <input type="tel" placeholder="Mobile Number " {...register("Mobile Number ", {required: true})} />

      <label>Landline</label>
      <input type="tel" placeholder="Landline" {...register("Landline", {})} />

      <input type="submit" />
      <input type='reset'></input>
    </form>
  );
}