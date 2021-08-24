import { useState, useEffect } from 'react';
function Input() {
    const [text, setText] = useState("");
    const [url, setUrl] = useState(null);
    const [temp, setData] = useState([]);
    const [check, setCheck] = useState(false);
    const id = "qvVk-VjoQin_KV-GQuX8UDjfdynBvyvi0r5ek3DAMPc";
    function changeHandler(e) {
        // console.log(e.target.value);
        setText(e.target.value);
        // console.log(text);
    }
    function handleClick() {
        let u = "https://api.unsplash.com/search/photos?page=1&query=" +
            text + "&client_id=" + id;
        // console.log(url);
        setUrl(u);
        setText("");
        // console.log(url);
    }

    useEffect(() => {
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let p=data.results;
                setData(p);
                setCheck(true);
                console.log(data);
                console.log(temp);

            });

    }, [url]);



    return (
        <div className="input-main">
            <div>
                <input onChange={changeHandler} type="text" placeholder="Enter your Query" value={text} className="input"></input>
                <button className="btn" onClick={handleClick}>ADD</button>
            </div>

            {check && <h1>Image Gallary</h1>}
            <div className="image-section">
                {temp.length === 0 ? (<h1>Empty Gallary</h1>) :
                    (
                        temp.map((image, index) => {
                            <div key={image.id} >
                                <img src={image.urls.full} />
                            </div>

                        })
                    )

                }
            </div>
        </div>
    );
}
export default Input;