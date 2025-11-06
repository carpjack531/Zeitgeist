const Header = (props) => {
    return( 
            <div className={`flex w-screen items-end p-3 font-amino text-black rounded-lg ${props.bg}`}>
                {props.logo &&
                    <img className="h-20 w-auto" src={props.logo}></img>
                }   
                {props.title &&
                    <h1> {props.title} </h1> 
                }
                <div className="flex ml-10 gap-30 justify-end">
                    {props.children}
                </div>
            </div>



    );
};

export default Header;