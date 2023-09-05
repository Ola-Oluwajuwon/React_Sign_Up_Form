export default function FormInput({ labels, inputType }) {
  return (
    <div className='formInput'>
      <label htmlFor="userName">{labels}</label>
      <input type={inputType} name="userName" id="" />
    </div>
  );
}