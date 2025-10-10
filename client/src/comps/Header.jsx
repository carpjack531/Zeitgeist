const Header = (props) => {
    return( 
            <div className={`flex w-full items-start gap-5 p-3 text-2xl font-amino rounded-lg bg-pastel-purple-500`}>
                <img className="h-20 w-auto" src={props.logo}></img>
                <h1 className="text-6xl font-bold"> {props.title} </h1> 
                    <div className="flex ml-10 gap-10">
                        {props.children}
                </div>
            </div>



    );
};

export default Header;