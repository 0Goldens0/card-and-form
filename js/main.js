let validation = new JustValidate('#form',{
  errorLabelStyle: {
    color: '#FF5C00'
  }
})

let selector = document.querySelector("#phone")
let im = new Inputmask("+7(999)-999-99-99")
im.mask(selector)

validation.addField('#name', [
  {
    rule: 'required',
    errorMessage : 'Вы не ввели имя'
  },

  {
    rule: 'minLength',
    value: 2,
    errorMessage : 'Необходимо ввести 2 символа или более'
  }

])

validation.addField('#phone', [
  {
    rule: 'required',
    errorMessage : 'Вы не ввели телефон'
  },

  {
    rule: 'minLength',
    value: 4,
    errorMessage : 'Необходимо ввести 10 символов'
  }

])




// .addField("#phone", [
//   {
//     validator: () => {
//       const phone = selector.inputmask.unmaskedvalue();
//       const result = Number(phone) && phone.lenght === 10;
//       return result === 0 ? false : result;
//     },
//     errorMessage : 'Телефон должен состоять из 10 символов'
//   },
// ])



