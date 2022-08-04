import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInputName = event => {
    setName(event.currentTarget.value);
  };
  const onChangeInputNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const onSubmitForm = event => {
    const id = nanoid(10);
    const contact = {
      id,
      name,
      number,
    };
    event.preventDefault();
    onSubmit(contact);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInputName}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInputNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

// export class Form extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   onChangeInput = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   onSubmitForm = event => {
//     const id = nanoid(10);
//     const contact = {
//       id,
//       ...this.state,
//     };
//     event.preventDefault();
//     this.props.onSubmit(contact);
//     this.reset();
//   };
// reset = () => {
//   this.setState({
//     name: '',
//     number: '',
//   });
// };
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   render() {
// return (
//   <form onSubmit={this.onSubmitForm}>
//     <label>
//       Name
//       <input
//         type="text"
//         name="name"
//         value={this.state.name}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         onChange={this.onChangeInput}
//       />
//     </label>
//     <label>
//       Number
//       <input
//         type="tel"
//         name="number"
//         value={this.state.number}
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         onChange={this.onChangeInput}
//       />
//     </label>
//     <button type="submit">Add contact</button>
//   </form>
// );
//   }
// }
