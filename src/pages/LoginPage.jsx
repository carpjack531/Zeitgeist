import Header from '../comps/Header';
const LoginPage = () =>{
    return (
    <div className="flex flex-col flex-start items-center">
            <div className="display: inline p-5 m-5 text-4xl font-mono rounded-lg border-2">
                <p> Username</p>
                <input type="text"  className="border-2  m-5"/>
                <p>Password</p>
                <input type="password" className="border-2"/>
            </div>
    </div>
    )
};

export default LoginPage;