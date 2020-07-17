classes="inputForm"
                            onChange={handleChange}
                            labelname="Email"
                            uniqueId="email"
                            labelClass="Label"
                            inputType="email"
                            inputClass="Input"
                            placeholder="johndoe@example.com"
                            pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
                            title="johndoe@example.com"
Items = [
        { onChange: {handleChange}, 
          labelname: 'Email', 
          uniqueId: 'email', 
          labelClass: 'Label', 
          inputType: 'email',
          inputClass: 'Input', 
          placeholder: 'johndoe@example.com',
          pattern: '^[\w.]+@[\w]{2,20}.[a-z]{2,10}$',
          title: 'johndoe@example.com'
        }
]
const InputForm = () => <InputFormItem items = {items} /> ;

export default InputForm;