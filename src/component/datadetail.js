



const Datadetail = ({data}) => {
    return ( 
        <div className="data">
            {data&& data.map(e=> <h3>{e.email}</h3>)}
        </div>
     );
}
 
export default Datadetail;