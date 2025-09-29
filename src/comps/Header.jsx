const Header = (props) => {
    return(
            <div className="flex items-start gap-5 p-3 text-2xl font-amino rounded-lg bg-orange">
                <img className="h-20 w-auto" src={props.logo}></img>
                <h1 className="text-6xl"> {props.title} </h1>         
                <div className="flex ml-10 gap-10">
                    {props.children}
                </div>
            </div>



    );
};

export default Header;