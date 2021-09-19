import { useSelector } from "react-redux";


const Form = () => {
    const place = useSelector((state) => state.place);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 form">
                    <input type="text" value={place} onChange={(e) => {
                       // setPlace(e.target.value);
                    }} />
                    <button className="btn btn-primary" //</div>onClick={}
                    >
                    Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Form;