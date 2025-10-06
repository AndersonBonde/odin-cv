import { useState } from "react";

function AddButton({ handleClick }) {
  return (
    <button type="button" className="formButton" onClick={handleClick} >Add</button>
  )
}

function GeneralInfo() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <>
      <h2>General Information</h2>
      <form className="active">
        <div className="formItem">
          <label htmlFor="name">Name </label>
          <input 
            type="text" 
            id="name" 
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </div>
        <div className="formItem">
          <label htmlFor="email">Email </label>
          <input 
            type="text" 
            id="email" 
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
        </div>
        <div className="formItem">
          <label htmlFor="phone">Phone Number </label>
          <input 
            type="tel" 
            id="phone" 
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
          />
        </div>
      </form>
    </>
  )
}

function EducationalInfo() {
  const [entries, setEntries] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.form);
    const values = Object.fromEntries(formData);

    const newEntry = {
      id: crypto.randomUUID(),
      ...values,
    };

    setEntries((prev) => [...prev, newEntry]);
    e.target.form.reset();
    setFormVisible(false);
  }

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  }

  const handleChange = (id, field, value) => {
    setEntries(prev => 
      prev.map((item) => item.id === id ? { ...item, [field]: value } : item)
    );
  };

  const deleteEntry = (id) => {
    setEntries((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <header className="formHeader">
        <h2>Educational Information</h2>
        <button type="button" onClick={toggleFormVisibility}>{formVisible ? '-' : '+'}</button>
      </header>
      <form className={formVisible ? "active" : ''}> 
        <div className="formItem">
          <label htmlFor="school">School Name </label>
          <input type="text" id="school" name="school"/>
        </div>
        <div className="formItem">
          <label htmlFor="studyTitle">Title of Study </label>
          <input type="text" id="studyTitle" name="studyTitle"/>
        </div>
        <div className="formItem">
          <label htmlFor="educationalStart">From </label>
          <input type="date" id="educationalStart" name="educationalStart"/>
        </div>
        <div className="formItem">
          <label htmlFor="educationalEnd">To </label>
          <input type="date" id="educationalEnd" name="educationalEnd"/>
        </div>
        <AddButton handleClick={handleButtonClick}></AddButton>
      </form>

      <div className="entries">
        {entries.map((entry) => (
          <div key={entry.id} className="entryCard">
            <button className="delete" onClick={() => deleteEntry(entry.id)}>x</button>
            <div className="formItem">
              <label htmlFor={`school-${entry.id}`}><strong>School</strong> </label>
              <input 
                type="text" 
                id={`school-${entry.id}`} 
                value={entry.school}
                onChange={e => handleChange(entry.id, 'school', e.target.value)} 
              />
            </div>
            <div className="formItem">
              <label htmlFor={`studyTitle-${entry.id}`}><strong>Title of Study</strong></label>
              <input 
                type="text" 
                id={`studyTitle-${entry.id}`} 
                value={entry.studyTitle}
                onChange={e => handleChange(entry.id, 'studyTitle', e.target.value)}
              />
            </div>
            <div className="formItem">
              <label htmlFor={`educationalStart-${entry.id}`}><strong>From</strong></label>
              <input 
                type="date" 
                id={`educationalStart-${entry.id}`} 
                value={entry.educationalStart}
                onChange={e => handleChange(entry.id, 'educationalStart', e.target.value)} 
              />
            </div>
            <div className="formItem">
              <label htmlFor={`educationalEnd-${entry.id}`}><strong>To</strong></label>
              <input 
                type="date" 
                id={`educationalEnd-${entry.id}`} 
                value={entry.educationalEnd}
                onChange={e => handleChange(entry.id, 'educationalEnd', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function PracticalInfo() {
  const [entries, setEntries] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.form);
    const values = Object.fromEntries(formData);

    const newEntry = {
      id: crypto.randomUUID(),
      ...values,
    }

    setEntries((prev) => [...prev, newEntry]);
    e.target.form.reset();
    setFormVisible(false);
  }

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  }

  const handleChange = (id, field, value) => {
    setEntries((prev) => 
      prev.map((item) => item.id === id ? { ...item, [field]: value } : item )
    );
  };

  const deleteEntry = (id) => {
    setEntries((prev) => prev.filter((item) => item.id !== id));
  }
  
  return (
    <>
      <header className="formHeader">
        <h2>Practical Experience</h2>
        <button type="button" onClick={toggleFormVisibility}>{formVisible ? '-' : '+'}</button>
      </header>
      <form className={formVisible ? 'active' : ''}>
        <div className="formItem">
          <label htmlFor="companyName">Company Name </label>
          <input type="text" id="companyName" name="companyName"/>
        </div>
        <div className="formItem">
          <label htmlFor="position">Position Title </label>
          <input type="text" id="position" name="position"/>
        </div>
        <div className="formItem">
          <label htmlFor="practicalStart">From </label>
          <input type="date" id="practicalStart" name="practicalStart"/>
        </div>
        <div className="formItem">
          <label htmlFor="practicalEnd">To </label>
          <input type="date" id="practicalEnd" name="practicalEnd"/>
        </div>
        <div className="textAreaItem">
          <label htmlFor="description">Description of Responsabilities</label>
          <textarea id="description" name="description"></textarea>
        </div>
        <AddButton handleClick={handleButtonClick}></AddButton>
      </form>

      <div className="entries">
        {entries.map((entry) => (
          <div key={entry.id} className="entryCard">
            <button className="delete" onClick={() => deleteEntry(entry.id)}>x</button>
            <div className="formItem">
              <label htmlFor={`companyName-${entry.id}`}><strong>Company</strong></label>
              <input 
                type="text"
                id={`companyName-${entry.id}`}
                value={entry.companyName}
                onChange={(e) => handleChange(entry.id, 'companyName', e.target.value)}
              />
            </div>
            <div className="formItem">
              <label htmlFor={`position-${entry.id}`}><strong>Position</strong></label>
              <input 
                type="text" 
                id={`position-${entry.id}`} 
                value={entry.position}
                onChange={(e) => handleChange(entry.id, 'position', e.target.value)}
              />
            </div>
            <div className="formItem">
              <label htmlFor={`practicalStart-${entry.id}`}><strong>From</strong></label>
              <input 
                type="date" 
                id={`practicalStart-${entry.id}`} 
                value={entry.practicalStart}
                onChange={(e) => handleChange(entry.id, 'practicalStart', e.target.value)}
              />
            </div>
            <div className="formItem">
              <label htmlFor={`practicalEnd-${entry.id}`}><strong>To</strong></label>
              <input 
                type="date" 
                id={`practicalEnd-${entry.id}`} 
                value={entry.practicalEnd}
                onChange={(e) => handleChange(entry.id, 'practicalEnd', e.target.value)}
              />
            </div>
            <div className="textAreaItem">
              <label htmlFor={`description-${entry.id}`}><strong>Description</strong></label>
              <textarea 
                id={`description-${entry.id}`}
                value={entry.description}
                onChange={(e) => handleChange(entry.id, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export {
  GeneralInfo,
  EducationalInfo,
  PracticalInfo,

}
