import css from "../ContactList/ContactList.module.css"

const ContactList = ({ contacts, handleDelete }) => {
    // console.log(contacts);
   
    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, number }) =>
            <li key={id} className={css.contactListItem}>
                {name}: {number}
                    <button className={css.contactListButton} type="button" onClick={() => { handleDelete(id) }}>Delete</button>
            </li>)}
            
        </ul>
    )
}

export default ContactList