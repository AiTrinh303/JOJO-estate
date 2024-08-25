

//REGISTER
export const register = async (req, res) => {
    const {username, email, password} = req.body;
    console.log(username
};

//LOGIN
export const login = async (req, res) => {
    res.send("Login route");
};

//LOGOUT
export const logout = async (req, res) => {
    res.send("Logout route");
};