import React ,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ethnicityData = [
    {
        label: 'Select your race',
        value: null,
    },
    {
        label: 'White/European',
        value: 'White/European',
    },
    {
        label: 'Black/African/Afro-Caribbean',
        value: 'Black/African/Afro-Caribbean',
    },
    {
        label: 'Latin American',
        value: 'Latin American',
    },
    {
        label: 'East Asian',
        value: 'East Asian',
    },
    {
        label: 'Southeast Asian',
        value: 'Southeast Asian',
    },
    {
        label: 'South Asian',
        value: 'South Asian',
    },
    {
        label: 'Native American/First Nations',
        value: 'Native American/First Nations',
    },
    {
        label: 'Native Hawaiian/Pacific Islander',
        value: 'Native Hawaiian/Pacific Islander',
    },
    {
        label: 'Mixed',
        value: 'Mixed',
    },
    {
        label: 'Other',
        value: 'Other',
    },
];

const languagesData = [
    {
        label: 'Select language',
        value: null,
    },
    {
        label: 'English',
        value: 'English',
    },
    {
        label: 'French',
        value: 'French',
    },
    {
        label: 'Hindi',
        value: 'Hindi',
    },
];


const familyDocData = [
    {
        value: 1,
        label: 'Every month',
    },
    {
        value: 2,
        label: 'Every 3 months',
    },
    {
        value: 3,
        label: 'Every 6 months',
    },
    {
        value: 4,
        label: 'Once per year',
    },
];
const SignUp = ({history}) => {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [genderValue, setGenderValue] = useState('');
    const [emergency_name_1, setEmergency_name_1] = useState('');
    const [emergency_email_1, setEmergency_email_1] = useState('');
    const [emergency_phone_1, setEmergency_phone_1] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    //Race value
    const [raceValue, setRaceValue] = useState('');
    //Language value
    const [languageValue, setLanguageValue] = useState([]);
    //visit family doc
    const [visitingFamilyDoc, setVisitingFamilyDoc] = useState('');


    const checkingFieldsFilled=()=>{
        if (
            fname === '' ||
            lname === '' ||
            email === '' ||
            password === '' ||
            phoneNumber === '' ||
            selectedDate === '' ||
            genderValue === '' ||
            genderValue === 'null' ||
            raceValue === '' ||
            raceValue === 'null' ||
            languageValue.length === 0 || visitingFamilyDoc === '' ||
            visitingFamilyDoc === 'null'
        ) {
            return false;
        } else {
            return true;
        }
    }

    const performSignUp = async (e) => {

        e.preventDefault();
        if (checkingFieldsFilled()) {
            setErrorMessage('');
            try {
                const response = await fetch(
                    'http://3.97.166.213:81/signup',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            _fname: fname,
                            _lname: lname,
                            _email: email,
                            _phoneNumber: phoneNumber,
                            _date_of_birth: selectedDate,
                            _ethnicity: raceValue,
                            _sex: genderValue,
                            _language: languageValue,
                            _visit_frequency: visitingFamilyDoc,

                            _password: password,
                            _name1: emergency_name_1,
                            _email1: emergency_email_1,
                            _phone1: emergency_phone_1,

                        }),
                    },
                );
                const data = await response.json();
                console.log(JSON.stringify(data));
                if (data.affectedRows === 1) {
                    alert('Registered successfully');
                    localStorage.setItem('UserId', data.insertId.toString());
                    localStorage.setItem('email', email.toString());
                    history.push('/profile');
                } else if (data.code == 'ER_DUP_ENTRY') {
                    alert('Email or Phone already exists');
                } else {
                    alert('Please enter correct values Or details already exist.');
                }

            } catch (error) {
                console.log(error);
                alert('something went wrong');
            }
        }else{
          setErrorMessage('Please fill all the required * fields')
        }
    };

    return(
        <div>
            <Header/>
            <section className="sptb">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-9 col-lg-12 col-md-12">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <h3 className="card-title">Sign Up</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">*First Name</label>
                                                <input type="text" className="form-control" placeholder="First Name" value={fname} onChange={(e)=>{setFName(e.target.value)}}/>

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">*Last Name</label>
                                                <input type="text" className="form-control" placeholder="Last Name" value={lname} onChange={(e)=>{setLName(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">* Email address</label>
                                                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">* Phone Number</label>
                                                <input type="number" className="form-control" placeholder="Number" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">* Password</label>
                                                <input type="password" className="form-control"
                                                       placeholder="Enter Password here" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-4">
                                            <div className="form-group">
                                                <label className="form-label">Emergency contact #1 Name</label>
                                                <input type="text" className="form-control" placeholder="#1 name" value={emergency_name_1} onChange={(e)=>{setEmergency_name_1(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4">
                                            <div className="form-group">
                                                <label className="form-label">Emergency contact #1 Email</label>
                                                <input type="email" className="form-control" placeholder="#1 email" value={emergency_email_1} onChange={(e)=>{setEmergency_email_1(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4">
                                            <div className="form-group">
                                                <label className="form-label">Emergency contact #1 Mobile</label>
                                                <input type="phone" className="form-control" placeholder="#1 mobile number" value={emergency_phone_1} onChange={(e)=>{setEmergency_phone_1(e.target.value)}}/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-4">
                                            <div className="form-group">
                                                <label className="form-label">Date of Birth</label>
                                                <input type="date" className="form-control" max={new Date().toISOString().slice(0, -14)} onChange={(e)=>{setSelectedDate(e.target.value)}}/>
                                            </div>
                                        </div>



                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">* SEX</label>
                                                <select
                                                    className="form-control select2-show-search border-bottom-0 w-100 select2-show-search select2-hidden-accessible"
                                                    data-placeholder="Select" data-select2-id="3" tabIndex="-1"
                                                    aria-hidden="true"  value={genderValue} onChange={(e)=>{setGenderValue(e.target.value)}}>
                                                        <option value={"null"}>--Select--</option>
                                                        <option value="Male" >Male</option>
                                                        <option value="Female" >Female</option>
                                                        <option value="Other" >Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">* Race/Ethnicity</label>
                                                <select
                                                    className="form-control select2-show-search border-bottom-0 w-100 select2-show-search select2-hidden-accessible"
                                                    data-placeholder="Select" data-select2-id="3" tabIndex="-1"
                                                    aria-hidden="true"  onChange={(e)=>{setRaceValue(e.target.value)}}>
                                                    <option value={"null"}>--Select--</option>
                                                    {
                                                        ethnicityData.map((item,index)=>{
                                                            return(
                                                                <option value={item.value}>{item.label}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>


                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">* Preferred language</label>
                                                <select
                                                    className="form-control select2-show-search border-bottom-0 w-100 select2-show-search select2-hidden-accessible"
                                                    data-placeholder="Select" data-select2-id="3" tabIndex="-1"
                                                    aria-hidden="true" onChange={(e)=>{setLanguageValue(e.target.value)}}>
                                                    <option value={"null"}>--Select--</option>
                                                    {
                                                        languagesData.map((item,index)=>{
                                                            return(
                                                                <option value={item.value}>{item.label}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="form-label"> * How often do you visit your family doctor?</label>
                                                <select
                                                    className="form-control select2-show-search border-bottom-0 w-100 select2-show-search select2-hidden-accessible"
                                                    data-placeholder="Select" data-select2-id="3" tabIndex="-1"
                                                    aria-hidden="true" onChange={(e)=>{setVisitingFamilyDoc(e.target.value)}}>
                                                    <option value={"null"}>--Select--</option>
                                                    {
                                                        familyDocData.map((item,index)=>{
                                                            return(
                                                                <option value={item.value}>{item.label}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {errorMessage.length!==0 && <p>{errorMessage}</p>}
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-secondary" onClick={(e)=>{performSignUp(e)}}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>

        </div>
    );
}

export  default  SignUp;