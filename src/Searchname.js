import React, {useState} from 'react';
import axios from 'axios';


async function getGender(name) {
    try {
        const response = await axios.get(`https://api.genderize.io?name=${name}`);
        return {
            gender: response.data.gender, count: response.data.count, found: response.data.count > 0,
        };
    } catch (error) {
        console.error(error);
    }
}


function SearchName() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [count, setCount] = useState('');
    const [found, setFound] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const {gender, count, found} = await getGender(name);
        setGender(gender);
        setCount(count);
        setFound(found);


    }


    return (
        <div className="parent-paragraph">
            <div className="paragraph">
                <form className="" onSubmit={handleSubmit}>
                    <p>
                        <label>
                            <div className="form-name">
                                <input type="text" className="input" placeholder="Enter your name" value={name}
                                       onChange={(event) => setName(event.target.value)}/>
                                <span>
                        <button type="submit"><i
                            className="fa-sharp  fa-solid fa-magnifying-glass"></i></button></span>
                            </div>

                        </label>
                    </p>


                </form>
            </div>
            <div className="container paragraph gender-container">

                {found ? (
                    <div>
                        <div>
                            {name}
                        </div>


                        <div>
                            GENDER : {gender}
                        </div>


                        <div>
                            COUNT: {count}
                        </div>
                    </div>


                ) : (

                    <p className="content-center">THERE IS NO ENOUGH INFORMATION</p>

                )}
            </div>

        </div>


    );
}

export default SearchName;