import moment from "moment";

const Footer =()=>{

    return (
        <footer className="py-3 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Andres Arpe {moment().year()}{" "}
          </p>
        </div>
      </footer>
    )
}

export default Footer