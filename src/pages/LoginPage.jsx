import Header from '../comps/Header';
const LoginPage = () =>{
    return (
    <div className="flex flex-col content-center items-center font-arimo">
            <div className="p-5 m-5 text-1xl font-mono rounded-lg border-2">
                <p className="text-4xl mb-9">Sign In</p>
                <p> Username</p>
                <input type="email"  className="rounded-sm bg-gray-300 mb-5"/>
                <p>Password</p>
                <input type="password" className="rounded-sm bg-gray-300"/>
            </div>
    </div>
    )
};

export default LoginPage;