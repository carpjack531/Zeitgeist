const Header = (props) => {
    return( 
            <div className={`flex w-screen items-start gap-5 p-3 font-amino text-black rounded-lg ${props.bg}`}>
                {props.logo &&
                    <img className="h-20 w-auto" src={props.logo}></img>
                }   
                {props.title &&
                    <h1> {props.title} </h1> 
                }
                <div className="flex ml-10 gap-10">
                    {props.children}
                </div>
            </div>



    );
};

export default Header;