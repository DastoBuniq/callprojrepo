import React from 'react';
import styles from './acstyle.module.css'
import { useState } from 'react';


function AddContact(props){
    const [inName, setInName] = useState({val:'', touched: false, classN: 'input'});
    const [inSurname, setInSurname] = useState({val:'', touched: false, classN: 'input'});
    const [inPhone, setInPhone] = useState({val:'', touched: false, classN: 'input'});
    const [inMail, setInMail] = useState({val:'', touched: false, classN: 'input'});
    // const [inptClass, setInptClass] = useState({val:'', touched: false, classN: ''})
    // const name = <input type="text" placeholder="Nome" className={inptClass} value={inName} onChange={e => setInName(e.target.value)}></input>
    // const surname = <input type="text" placeholder="Cognome" value={inSurname} onChange={e => setInSurname(e.target.value)}></input>
    // const phone = <input type="text" placeholder="Telefono" value={inPhone} onChange={e => setInPhone(e.target.value)}></input>
    // const mail = <input type="text" placeholder="Mail" value={inMail} onChange={e => setInMail(e.target.value)}></input>

    function onDone(){
        !inName.val && inName.touched ? setInName({...inName, classN: 'inptErr'}) : setInName({...inName, classN: 'input'})
        !inSurname.val && inSurname.touched ? setInSurname({...inSurname, classN: 'inptErr'}) : setInSurname({...inSurname, classN: 'input'})
        !inPhone.val && inPhone.touched ? setInPhone({...inPhone, classN: 'inptErr'}) : setInPhone({...inPhone, classN: 'input'})
        !inMail.val && inMail.touched ? setInMail({...inMail, classN: 'inptErr'}) : setInMail({...inMail, classN: 'input'})
        correctClose()
    }
    function correctClose(){
        if(inName.val && inSurname.val && inPhone.val && inMail.val){
            props.func()
        }
    }

    return(
        <div>
            <span>
            <input type="text" placeholder="Nome" className={styles[inName.classN]} 
            value={inName.val} onChange={e => setInName({...inName, val: e.target.value , touched: true})}></input>
            </span>
            <span>
            <input type="text" placeholder="Cognome" className={styles[inSurname.classN]} 
            value={inSurname.val} onChange={e => setInSurname({...inSurname, val: e.target.value , touched: true})}></input>
            </span>
            <span>
            <input type="text" placeholder="Telefono" className={styles[inPhone.classN]} 
            value={inPhone.val} onChange={e => setInPhone({...inPhone, val: e.target.value , touched: true})}></input>
            </span>
            <span>
            <input type="text" placeholder="Mail" className={styles[inMail.classN]} 
            value={inMail.val} onChange={e => setInMail({...inMail, val: e.target.value , touched: true})}></input>
            </span>
            <button className={styles.doneBtn} id="name"
            onClick={onDone}>Fatto</button>
        </div>
    )
}

export default AddContact